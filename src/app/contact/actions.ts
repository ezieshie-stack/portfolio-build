"use server";

import { Resend } from "resend";
import { z } from "zod";

/** Server-side schema. Matches the form fields below; mirrored by the
 * client component for inline validation. */
const ContactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  subject: z
    .string()
    .trim()
    .max(120, "Subject is too long.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a bit more — at least 10 characters."),
});

export type ContactState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

/**
 * Server Action invoked by the contact form. Validates with Zod,
 * sends a transactional email via Resend, returns a state object that
 * the client renders into success/error UI.
 *
 * Requires RESEND_API_KEY in the server environment.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject") ?? "",
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message:
        "Email service isn't configured yet. Please email Ezieshie@gmail.com directly.",
    };
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    // NOTE: Resend's test domain (onboarding@resend.dev) only delivers
    // when `to` matches the Resend signup email exactly (case-sensitive).
    // Lowercased here to match the signup. Gmail itself ignores case and
    // delivers either form to the same inbox. Once a custom domain is
    // verified at resend.com/domains, this restriction goes away.
    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["ezieshie@gmail.com"],
      replyTo: email,
      subject: subject?.length
        ? `[Portfolio] ${subject}`
        : `[Portfolio] New message from ${name}`,
      text:
        `From: ${name} <${email}>\n` +
        `Subject: ${subject || "(no subject)"}\n\n` +
        `${message}\n`,
    });

    // Resend SDK returns { data, error } instead of throwing. Inspect it.
    if (result.error) {
      console.error("[contact] Resend returned error:", result.error);
      return {
        status: "error",
        message: `Couldn't send: ${result.error.message ?? "unknown error"}.`,
      };
    }
    console.log("[contact] Resend accepted, id:", result.data?.id);
    return { status: "ok" };
  } catch (err) {
    console.error("[contact] Resend send threw:", err);
    return {
      status: "error",
      message:
        "Couldn't send right now. Please try again in a minute, or email directly.",
    };
  }
}

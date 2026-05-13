"use client";

import { useActionState } from "react";
import { contact } from "@/lib/content";
import { Spinner } from "@/components/cms/Spinner";
import { submitContact, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact, initialState);

  if (state.status === "ok") {
    return (
      <div className="glass-card p-8 md:p-10">
        <h2 className="text-xl font-semibold mb-3">Message sent</h2>
        <p className="text-[color:var(--text-dim)]">
          Thanks for reaching out. I&apos;ll reply directly to the email
          you provided.
        </p>
      </div>
    );
  }

  const fieldErrors =
    state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <div className="glass-card p-8 md:p-10">
      <h2 className="text-xl font-semibold mb-6">{contact.formTitle}</h2>
      <form action={action} className="grid gap-4" noValidate>
        <Field
          name="name"
          type="text"
          placeholder="Your Name"
          required
          disabled={isPending}
          error={fieldErrors.name}
        />
        <Field
          name="email"
          type="email"
          placeholder="Your Email"
          required
          disabled={isPending}
          error={fieldErrors.email}
        />
        <Field
          name="subject"
          type="text"
          placeholder="Subject"
          disabled={isPending}
          error={fieldErrors.subject}
        />
        <TextArea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          disabled={isPending}
          error={fieldErrors.message}
        />

        {state.status === "error" && !state.fieldErrors && (
          <p
            role="alert"
            className="text-sm text-[#f87171]"
          >
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          aria-busy={isPending}
          className="btn-pill btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <Spinner size={14} />
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}

type FieldProps = {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
};

function Field({
  name,
  type,
  placeholder,
  required,
  disabled,
  error,
}: FieldProps) {
  return (
    <div className="grid gap-1">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`form-input ${error ? "form-input-error" : ""}`}
      />
      {error && (
        <span
          id={`${name}-error`}
          role="alert"
          className="text-xs text-[#f87171]"
        >
          {error}
        </span>
      )}
    </div>
  );
}

type TextAreaProps = Omit<FieldProps, "type"> & { rows: number };

function TextArea({
  name,
  placeholder,
  rows,
  required,
  disabled,
  error,
}: TextAreaProps) {
  return (
    <div className="grid gap-1">
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`form-input resize-y ${error ? "form-input-error" : ""}`}
      />
      {error && (
        <span
          id={`${name}-error`}
          role="alert"
          className="text-xs text-[#f87171]"
        >
          {error}
        </span>
      )}
    </div>
  );
}

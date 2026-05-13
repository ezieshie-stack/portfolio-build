"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/content";
import { Spinner } from "@/components/cms/Spinner";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Placeholder async. Once wired to mailto/Formspree/Resend, replace
    // this delay with the real fetch call.
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div className="glass-card p-8 md:p-10">
      <h2 className="text-xl font-semibold mb-6">{contact.formTitle}</h2>
      {submitted ? (
        <p className="text-[color:var(--text-dim)]">
          Message received. (Placeholder confirmation. Wire up real submission later.)
        </p>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            disabled={sending}
            className="form-input"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            disabled={sending}
            className="form-input"
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            disabled={sending}
            className="form-input"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            disabled={sending}
            className="form-input resize-y"
          />
          <button
            type="submit"
            disabled={sending}
            aria-busy={sending}
            className="btn-pill btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? (
              <>
                <Spinner size={14} />
                Sending…
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
}

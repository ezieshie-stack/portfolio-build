"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/content";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="glass-card p-8 md:p-10">
      <h2 className="text-xl font-semibold mb-6">{contact.formTitle}</h2>
      {submitted ? (
        <p className="text-[color:var(--text-dim)]">
          Message received. (Placeholder confirmation — wire up real submission later.)
        </p>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="form-input"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="form-input resize-y"
          />
          <button type="submit" className="btn-pill btn-primary">
            Send Message <span aria-hidden className="ml-1">↗</span>
          </button>
        </form>
      )}
    </div>
  );
}

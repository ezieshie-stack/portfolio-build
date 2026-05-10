"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { site } from "@/lib/content";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="max-w-[var(--container)] mx-auto px-6 py-24 pb-40"
    >
      <Reveal className="glass-card px-6 md:px-10 py-20 text-center">
        <div className="zone-marker" />
        <span className="section-tag">{site.contact.tag}</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          {site.contact.title}
        </h2>
        {submitted ? (
          <p className="text-[color:var(--text-dim)]">
            Signal received. Placeholder confirmation — wire up real submission later.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-6 max-w-[600px] mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Identity / Name"
              required
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Communication Node / Email"
              required
              className="form-input"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Brief / Project Scope"
              required
              className="form-input resize-y"
            />
            <button
              type="submit"
              className="btn-pill btn-primary"
              style={{ width: "100%", padding: "20px" }}
            >
              SEND SIGNAL
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}

"use client";

import { useActionState, useMemo } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Input } from "@/components/ui/Input";
import { submitContact, type ContactState } from "@/app/contact/actions";

const PROJECT_TITLES: Record<string, string> = {
  telco: "the Telco churn work",
  sla: "the SLA optimizer",
  fraud: "the fraud detection pipeline",
  movie: "the movie profitability analysis",
  fiitco: "the FIIT Co. platform",
  uipath: "the UiPath supplier monitor",
};

const CHANNELS: Array<{ label: string; value: string; href: string | null }> = [
  { label: "Email", value: "ezieshie@gmail.com", href: "mailto:ezieshie@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/david-ezieshi",
    href: "https://www.linkedin.com/in/david-ezieshi/",
  },
  {
    label: "GitHub",
    value: "github.com/ezieshie-stack",
    href: "https://github.com/ezieshie-stack",
  },
  {
    label: "Availability",
    value:
      "Open to business analyst roles in Toronto. Eligible to work in Canada. Available for contract and full-time engagements.",
    href: null,
  },
];

const INITIAL: ContactState = { status: "idle" };

export function ContactPageContent({ projectSlug }: { projectSlug?: string }) {
  const projectTitle = projectSlug ? PROJECT_TITLES[projectSlug] : undefined;
  const defaultSubject = useMemo(
    () => (projectTitle ? `About ${projectTitle}` : ""),
    [projectTitle],
  );

  const [state, formAction, pending] = useActionState(submitContact, INITIAL);

  const fieldErrors =
    state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <div className="pf-page">
      <div className="pf-shell">
        <section className="pf-pagehead" style={{ marginBottom: 44 }}>
          <Eyebrow className="mb-[22px]">Get In Touch</Eyebrow>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(36px, 4vw, 54px)" }}
          >
            Tell me what you&rsquo;re working on.
          </h1>
          <p className="pf-page-intro">
            Hiring for a business analyst role, scoping a workflow problem, or
            thinking through an internal solution? Send me the details.
            I&rsquo;ll respond within a day.
          </p>
        </section>

        <div className="pf-contact-grid">
          <div className="pf-channels">
            {CHANNELS.map((c) => (
              <div className="pf-channel" key={c.label}>
                <p className="lab">{c.label}</p>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="avail">{c.value}</span>
                )}
              </div>
            ))}
          </div>

          <form className="pf-form" action={formAction} noValidate>
            <p className="pf-form-title">Send a Message</p>
            <div className="pf-form-row">
              <Input
                id="contact-name"
                name="name"
                label="Name"
                placeholder="Your name"
                required
                autoComplete="name"
              />
              <Input
                id="contact-email"
                name="email"
                type="email"
                label="Email"
                placeholder="you@email.com"
                required
                autoComplete="email"
              />
            </div>
            <Input
              key={defaultSubject}
              id="contact-subject"
              name="subject"
              label="Subject"
              placeholder="What's this about?"
              defaultValue={defaultSubject}
            />
            <Input
              id="contact-message"
              name="message"
              label="Message"
              multiline
              rows={5}
              placeholder="Tell me about the workflow or the role…"
              required
            />

            {state.status === "error" && (
              <div className="pf-form-msg err" role="alert">
                {state.message}
                {Object.keys(fieldErrors).length > 0 && (
                  <ul>
                    {Object.entries(fieldErrors).map(([field, msg]) => (
                      <li key={field}>
                        <b>{field}:</b> {msg}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {state.status === "ok" && (
              <div className="pf-form-msg ok" role="status">
                Message sent. I&rsquo;ll get back to you within a day.
              </div>
            )}

            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={pending}
              iconRight={<Send size={16} aria-hidden />}
            >
              {pending
                ? "Sending…"
                : state.status === "ok"
                  ? "Send another"
                  : "Send Message"}
            </Button>
          </form>
        </div>

        <section style={{ marginTop: 56 }}>
          <p className="pf-mono-h">Prefer another channel?</p>
          <div className="pf-btnrow">
            <Button
              variant="secondary"
              href="https://www.linkedin.com/in/david-ezieshi/"
            >
              View My LinkedIn
            </Button>
            <Button variant="secondary" href="mailto:ezieshie@gmail.com">
              Email Me
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

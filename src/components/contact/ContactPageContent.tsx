"use client";

import { useMemo } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PROJECT_TITLES: Record<string, string> = {
  telco: "the Telco churn work",
  sla: "the SLA optimizer",
  fraud: "the fraud detection pipeline",
  movie: "the movie profitability analysis",
  fiitco: "the FIIT Co. platform",
  uipath: "the UiPath supplier monitor",
};

const EMAIL = "ezieshie@gmail.com";

const CHANNELS: Array<{ label: string; value: string; href: string | null }> = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
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

export function ContactPageContent({ projectSlug }: { projectSlug?: string }) {
  const projectTitle = projectSlug ? PROJECT_TITLES[projectSlug] : undefined;

  const mailtoHref = useMemo(() => {
    if (!projectTitle) return `mailto:${EMAIL}`;
    const subject = encodeURIComponent(`About ${projectTitle}`);
    return `mailto:${EMAIL}?subject=${subject}`;
  }, [projectTitle]);

  const ctaLabel = projectTitle
    ? `Email me about ${projectTitle}`
    : "Email me directly";

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
            thinking through an internal solution? Email me the details.
            I&rsquo;ll respond within a day.
          </p>
        </section>

        <div className="pf-channels" style={{ maxWidth: 640 }}>
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

        <section style={{ marginTop: 40 }}>
          <div className="pf-btnrow">
            <Button
              variant="primary"
              size="lg"
              href={mailtoHref}
              iconRight={<Mail size={16} aria-hidden />}
            >
              {ctaLabel}
            </Button>
            <Button
              variant="secondary"
              href="https://www.linkedin.com/in/david-ezieshi/"
            >
              View My LinkedIn
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

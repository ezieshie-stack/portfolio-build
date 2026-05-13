import Link from "next/link";
import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { contact } from "@/lib/content";

export const metadata = { title: "Contact | Portfolio" };

export default function ContactPage() {
  return (
    <PageShell>
      <Reveal as="section" className="pb-12">
        <SectionTag>{contact.tag}</SectionTag>
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-6">
          {contact.title}
        </h1>
        <p className="text-[color:var(--text-dim)] max-w-prose mb-12">
          {contact.intro}
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Reveal>
          <ul className="grid gap-4">
            {contact.channels.map((c) => (
              <li key={c.label} className="glass-card p-6">
                <div className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--primary)] mb-2">
                  {c.label}
                </div>
                {c.href ? (
                  <Link
                    href={c.href}
                    className="text-base font-medium hover:text-[color:var(--primary)] transition-colors"
                  >
                    {c.value}
                  </Link>
                ) : (
                  <span className="text-base font-medium">{c.value}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>

      <Reveal as="section" className="mt-16">
        <p className="text-[color:var(--text-dim)] mb-4 text-sm">
          Prefer to connect another way?
        </p>
        <div className="flex flex-wrap gap-3">
          {contact.altCtas.map((cta) => (
            <Link key={cta.label} href={cta.href} className="btn-pill">
              {cta.label}
            </Link>
          ))}
        </div>
      </Reveal>
    </PageShell>
  );
}

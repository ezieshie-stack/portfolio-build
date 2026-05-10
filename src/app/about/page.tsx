import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { about } from "@/lib/content";

export const metadata = { title: "About — Portfolio" };

export default function AboutPage() {
  return (
    <PageShell>
      <Reveal as="section" className="pb-16">
        <SectionTag>{about.tag}</SectionTag>
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-8 whitespace-pre-line">
          {about.title}
        </h1>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          <div className="space-y-4 text-[color:var(--text-dim)] text-base">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((s) => (
              <article key={s.label} className="glass-card p-6">
                <div className="gradient-text text-3xl font-extrabold tracking-tight mb-1">
                  {s.value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--text-dim)] leading-tight">
                  {s.label}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-16">
        <SectionTag>{about.drivesTag}</SectionTag>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
          {about.drives.map((d) => (
            <article key={d.title} className="glass-card p-6">
              <div className="status-dot mb-4" />
              <h3 className="text-base font-semibold mb-2">{d.title}</h3>
              <p className="text-sm text-[color:var(--text-dim)] leading-relaxed">
                {d.description}
              </p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="py-16">
        <SectionTag>{about.educationTag}</SectionTag>
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          {about.education.map((e) => (
            <article key={e.degree + e.school} className="glass-card p-6">
              <h3 className="text-base font-semibold mb-1">{e.degree}</h3>
              <p className="text-sm text-[color:var(--text-dim)] mb-1">
                {e.school}
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--text-dim)]">
                {e.dates}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </PageShell>
  );
}

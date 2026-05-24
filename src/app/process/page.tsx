import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { OpControlSystem } from "@/components/process/OpControlSystem";
import { processPage as processPageDefault } from "@/lib/content";
import { deepMerge, fetchSectionContent } from "@/lib/cms";

export const metadata = { title: "Process | Portfolio" };

function MetricIcon({ name }: { name: string }) {
  const common = "w-6 h-6 text-[color:var(--primary)]";
  if (name === "chart") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 20h18" />
        <path d="M6 17V9" />
        <path d="M11 17V5" />
        <path d="M16 17v-6" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }
  if (name === "data") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default async function ProcessPage() {
  const override = await fetchSectionContent<typeof processPageDefault>(
    "processPage",
  );
  const processPage = deepMerge(processPageDefault, override);

  return (
    <PageShell>
      {/* ── HERO ─────────────────────────────────────── */}
      <Reveal
        as="section"
        className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center pb-24"
      >
        <div>
          <SectionTag>{processPage.hero.eyebrow}</SectionTag>
          <h1 className="text-[length:var(--text-display)] font-extrabold leading-[0.9] tracking-[-0.05em] mb-8">
            Systems designed for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c084fc, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {processPage.hero.highlight}
            </span>
          </h1>
          <p className="text-[color:var(--text-dim)] text-lg leading-relaxed max-w-[560px]">
            {processPage.hero.description}
          </p>
        </div>

        {/* Operational control system visualization */}
        <OpControlSystem />
      </Reveal>

      {/* ── EXECUTION MODEL ──────────────────────────── */}
      <Reveal as="section" className="py-12">
        <SectionTag>{processPage.executionTag}</SectionTag>
        <div className="flex flex-col gap-6 mt-2">
          {processPage.steps.map((step) => (
            <article
              key={step.number}
              className="glass-card p-8 md:p-10 grid grid-cols-1 md:grid-cols-[140px_1px_1fr] gap-6 md:gap-10 items-start"
            >
              <div className="flex items-start">
                <span
                  className="text-[length:var(--text-display)] md:text-[length:var(--text-display)] font-extrabold leading-none tracking-[-0.05em]"
                  style={{ color: "rgba(139,92,246,0.95)" }}
                >
                  {step.number}
                </span>
              </div>

              <div className="hidden md:block w-px self-stretch bg-white/8" />

              <div>
                <p className="text-xs tracking-[0.22em] font-semibold text-[#c084fc] mb-3">
                  {step.subtitle.toUpperCase()}
                </p>
                <h2 className="text-2xl md:text-2xl font-bold tracking-[-0.02em] mb-4">
                  {step.title}
                </h2>
                <p className="text-[color:var(--text-dim)] leading-relaxed max-w-[720px] mb-6">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full border border-white/8 bg-white/[0.03] text-sm text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      {/* ── PERFORMANCE IMPACT ───────────────────────── */}
      <Reveal as="section" className="py-12">
        <SectionTag>{processPage.metricsTag}</SectionTag>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {processPage.metrics.map((metric) => (
            <article key={metric.label} className="glass-card p-8 flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <span
                  className="text-[length:var(--text-display)] font-extrabold leading-none tracking-[-0.05em]"
                  style={{
                    background: "linear-gradient(135deg, #c084fc, #8B5CF6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {metric.value}
                </span>
                <MetricIcon name={metric.icon} />
              </div>
              <div className="h-px bg-white/8" />
              <span className="text-xs tracking-[0.2em] text-white/60 uppercase">
                {metric.label}
              </span>
            </article>
          ))}
        </div>

        <a
          href={processPage.resultsCta.href}
          className="inline-flex items-center gap-2 mt-8 text-[#c4b5fd] hover:text-white transition-colors text-sm"
        >
          {processPage.resultsCta.label} →
        </a>
      </Reveal>
    </PageShell>
  );
}

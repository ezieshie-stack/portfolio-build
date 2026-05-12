import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { processPage } from "@/lib/content";

export const metadata = { title: "Process — Portfolio" };

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
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function ProcessPage() {
  return (
    <PageShell>
      {/* ── HERO ─────────────────────────────────────── */}
      <Reveal
        as="section"
        className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center pb-24"
      >
        <div>
          <SectionTag>{processPage.hero.eyebrow}</SectionTag>
          <h1 className="text-[clamp(48px,8vw,108px)] font-extrabold leading-[0.9] tracking-[-0.05em] mb-8">
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

        {/* Process visualization */}
        <div className="glass-card relative h-[420px] md:h-[480px] overflow-hidden flex items-center justify-center">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), transparent)",
            }}
          />

          <div className="relative w-full h-full">
            {[
              { className: "top-[14%] left-[12%]", label: "ANALYZE" },
              { className: "top-[34%] right-[10%]", label: "DESIGN" },
              { className: "bottom-[28%] left-[16%]", label: "IMPLEMENT" },
              { className: "bottom-[10%] right-[14%]", label: "OPTIMIZE" },
            ].map((node) => (
              <div
                key={node.label}
                className={`absolute ${node.className} px-5 py-3 rounded-2xl border border-[color:var(--primary)]/25 backdrop-blur-md z-10`}
                style={{
                  background: "rgba(10,10,14,0.78)",
                  boxShadow: "0 0 40px rgba(139,92,246,0.18)",
                }}
              >
                <span className="text-[11px] tracking-[0.18em] font-bold text-[#c084fc]">
                  {node.label}
                </span>
              </div>
            ))}

            <svg
              aria-hidden
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full opacity-45"
            >
              <defs>
                <linearGradient id="proc-flow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path d="M210 180 C 420 220, 520 260, 760 360" stroke="url(#proc-flow)" strokeWidth="2" fill="none" />
              <path d="M760 360 C 620 520, 460 620, 280 720" stroke="url(#proc-flow)" strokeWidth="2" fill="none" />
              <path d="M280 720 C 520 780, 620 760, 780 860" stroke="url(#proc-flow)" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
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
                  className="text-[56px] md:text-[64px] font-extrabold leading-none tracking-[-0.05em]"
                  style={{ color: "rgba(139,92,246,0.95)" }}
                >
                  {step.number}
                </span>
              </div>

              <div className="hidden md:block w-px self-stretch bg-white/8" />

              <div>
                <p className="text-[11px] tracking-[0.22em] font-semibold text-[#c084fc] mb-3">
                  {step.subtitle.toUpperCase()}
                </p>
                <h2 className="text-2xl md:text-[28px] font-bold tracking-[-0.02em] mb-4">
                  {step.title}
                </h2>
                <p className="text-[color:var(--text-dim)] leading-relaxed max-w-[720px] mb-6">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full border border-white/8 bg-white/[0.03] text-[13px] text-white/70"
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
                  className="text-[56px] font-extrabold leading-none tracking-[-0.05em]"
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
              <span className="text-[12px] tracking-[0.2em] text-white/60 uppercase">
                {metric.label}
              </span>
            </article>
          ))}
        </div>
      </Reveal>
    </PageShell>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { home } from "@/lib/content";

export function FeaturedProject() {
  const f = home.featured;

  return (
    <section className="py-24">
      <div className="flex items-baseline justify-between mb-8">
        <span className="eyebrow">{f.tag}</span>
        <Link
          href="/work"
          className="text-[12px] font-medium text-[color:var(--primary)] hover:text-white transition-colors"
        >
          View All Projects <span aria-hidden>↗</span>
        </Link>
      </div>

      <Reveal className="glass-card p-8 md:p-10 grid gap-10 lg:grid-cols-[1fr_1.4fr_1fr] items-start">
        <div>
          <span
            className="inline-block rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase mb-5"
            style={{
              borderColor: "rgba(139, 92, 246, 0.3)",
              background: "rgba(139, 92, 246, 0.12)",
              color: "rgb(196, 181, 253)",
            }}
          >
            {f.pill}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            {f.title}
          </h3>
          <p className="text-sm text-[color:var(--text-dim)] mb-7 leading-relaxed">
            {f.description}
          </p>
          <Link
            href={f.cta.href}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[color:var(--primary)] hover:text-white transition-colors"
          >
            {f.cta.label} <span aria-hidden>↗</span>
          </Link>
        </div>

        <div
          className="rounded-2xl border p-5"
          style={{
            background: "rgba(8, 8, 12, 0.6)",
            borderColor: "var(--glass-border)",
          }}
        >
          <div className="text-center text-[10px] uppercase tracking-[0.2em] text-[color:var(--text-dim)] mb-5">
            {f.workflow.title}
          </div>
          <div className="flex flex-col gap-5">
            {f.workflow.steps.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap"
              >
                {row.map((step, i) => (
                  <div
                    key={step}
                    className="flex items-center gap-1 flex-1 min-w-[100px]"
                  >
                    <span
                      className="flex-1 rounded-xl border px-2 py-2 text-[10px] font-medium text-white text-center"
                      style={{
                        background: "rgba(139, 92, 246, 0.08)",
                        borderColor: "rgba(139, 92, 246, 0.25)",
                      }}
                    >
                      {step}
                    </span>
                    {i < row.length - 1 && (
                      <ArrowRight
                        size={12}
                        className="text-[color:var(--primary)] shrink-0"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {f.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border px-4 py-3"
              style={{
                borderColor: "var(--glass-border)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="gradient-text text-2xl font-extrabold tracking-tight mb-1">
                {m.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--text-dim)] leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

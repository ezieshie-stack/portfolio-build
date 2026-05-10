import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { home } from "@/lib/content";

export function FeaturedProject() {
  const f = home.featured;

  return (
    <section className="py-16">
      <span className="eyebrow mb-6 block">{f.tag}</span>
      <Reveal className="glass-card p-8 md:p-12 grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            {f.title}
          </h3>
          <p className="text-[color:var(--text-dim)] mb-8 max-w-prose">
            {f.description}
          </p>
          <Link href={f.cta.href} className="btn-pill">
            {f.cta.label} <span aria-hidden className="ml-1">↗</span>
          </Link>
        </div>

        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {f.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border p-4"
                style={{
                  borderColor: "var(--glass-border)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div className="gradient-text text-2xl font-bold tracking-tight mb-1">
                  {m.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.16em] text-[color:var(--text-dim)] leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

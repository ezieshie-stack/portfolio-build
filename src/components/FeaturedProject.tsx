import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { site } from "@/lib/content";

export function FeaturedProject() {
  const f = site.featured;

  return (
    <section
      id="projects"
      className="max-w-[var(--container)] mx-auto px-6 py-24"
    >
      <span className="section-tag">{f.tag}</span>
      <Reveal className="glass-card overflow-hidden grid md:grid-cols-2 p-0">
        <div className="p-10 md:p-16">
          <h3 className="text-3xl font-extrabold mb-6">{f.title}</h3>
          <p className="text-[color:var(--text-dim)] mb-8">{f.description}</p>
          <div className="flex gap-10 mb-12">
            {f.metrics.map((m) => (
              <div key={m.label}>
                <span className="block gradient-text text-3xl font-extrabold tracking-tight mb-1">
                  {m.value}
                </span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
          <Link href={f.cta.href} className="btn-pill">
            {f.cta.label}
          </Link>
        </div>
        <div
          className="relative min-h-[280px] md:border-l"
          style={{
            background: "linear-gradient(45deg, #1a1a2e, #0a0a0f)",
            borderColor: "var(--glass-border)",
          }}
        >
          <div className="zone-marker" />
          <Image
            src={f.image}
            alt="Featured project visualization"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-40 mix-blend-overlay"
          />
          <div className="metadata absolute bottom-5 right-5">{f.metaId}</div>
        </div>
      </Reveal>
    </section>
  );
}

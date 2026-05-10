import { Reveal } from "./Reveal";
import { site } from "@/lib/content";

export function Philosophy() {
  return (
    <section
      id="about"
      className="max-w-[var(--container)] mx-auto px-6 py-24"
    >
      <span className="section-tag">{site.philosophy.tag}</span>
      <Reveal className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {site.philosophy.items.map((item) => (
          <article key={item.label} className="glass-card p-8 text-center">
            <div className="zone-marker" />
            <span className="block gradient-text text-6xl font-extrabold tracking-tight mb-2">
              {item.value}
            </span>
            <span className="metric-label">{item.label}</span>
            <p className="text-[13px] text-[color:var(--text-dim)] mt-4">
              {item.description}
            </p>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

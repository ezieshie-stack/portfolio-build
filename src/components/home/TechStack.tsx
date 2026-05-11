import { home } from "@/lib/content";

export function TechStack() {
  return (
    <section className="py-16">
      <span className="eyebrow mb-6 block">{home.tools.label}</span>
      <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {home.tools.items.map((tool) => (
          <li
            key={tool}
            className="rounded-xl border px-4 py-3 text-center text-[13px] font-medium"
            style={{
              borderColor: "var(--glass-border)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            {tool}
          </li>
        ))}
      </ul>
    </section>
  );
}

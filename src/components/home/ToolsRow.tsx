import { home } from "@/lib/content";

export function ToolsRow() {
  return (
    <section className="py-12">
      <span className="eyebrow mb-6 block">{home.tools.label}</span>
      <ul className="flex flex-wrap gap-3">
        {home.tools.items.map((tool) => (
          <li key={tool} className="chip">
            <span className="status-dot" />
            {tool}
          </li>
        ))}
      </ul>
    </section>
  );
}

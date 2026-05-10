"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/content";

type Props = {
  filters: string[];
  projects: Project[];
};

export function WorkGrid({ filters, projects }: Props) {
  const [active, setActive] = useState(filters[0] ?? "All");

  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            data-active={active === f}
            className="filter-pill"
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-5">
        {visible.map((p) => (
          <article
            key={p.slug}
            className="glass-card p-6 md:p-8 grid md:grid-cols-[1.2fr_2fr] gap-6 items-start"
          >
            <div
              className="rounded-2xl border min-h-[140px] relative overflow-hidden"
              style={{
                borderColor: "var(--glass-border)",
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(20,20,30,0.9))",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-[color:var(--text-dim)]">
                [Project visual]
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-sm text-[color:var(--text-dim)] mb-5">
                {p.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/work/${p.slug}`}
                className="text-[13px] font-semibold text-[color:var(--primary)] hover:text-white transition-colors"
              >
                View Case Study <span aria-hidden>↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

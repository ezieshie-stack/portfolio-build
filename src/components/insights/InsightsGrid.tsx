"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Article } from "@/lib/content";

type Props = {
  filters: string[];
  articles: Article[];
};

export function InsightsGrid({ filters, articles }: Props) {
  const [active, setActive] = useState(filters[0] ?? "All");

  const visible = useMemo(() => {
    if (active === "All") return articles;
    return articles.filter((a) => a.category === active);
  }, [active, articles]);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-9">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((a) => (
          <Link
            key={a.slug}
            href={`/insights/${a.slug}`}
            className="insight-card glass-card p-7 md:p-8 flex flex-col justify-between min-h-[320px] group"
          >
            <div>
              <span className="text-xs tracking-[0.18em] uppercase text-[#a78bfa] font-semibold">
                {a.category}
              </span>
              <h3 className="text-2xl font-bold leading-[1.1] tracking-[-0.04em] my-5 group-hover:text-[color:var(--primary)] transition-colors">
                {a.title}
              </h3>
              <p className="text-[color:var(--text-dim)] text-base leading-relaxed">
                {a.excerpt}
              </p>
            </div>
            <div className="mt-8 flex justify-between text-sm text-white/40">
              <span>{a.date}</span>
              <span>{a.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
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
        {visible.map((a) => (
          <article
            key={a.slug}
            className="glass-card p-6 grid md:grid-cols-[160px_1fr] gap-6 items-start"
          >
            <Link
              href={`/insights/${a.slug}`}
              className="relative aspect-[4/3] md:aspect-square w-full rounded-2xl overflow-hidden border"
              style={{ borderColor: "var(--glass-border)" }}
            >
              <Image
                src={a.image}
                alt=""
                fill
                sizes="160px"
                className="object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[color:var(--text-dim)] mb-3">
                <span>{a.category}</span>
                <span aria-hidden>·</span>
                <span>{a.date}</span>
                <span aria-hidden>·</span>
                <span>{a.readTime}</span>
              </div>
              <Link href={`/insights/${a.slug}`}>
                <h3 className="text-xl font-bold mb-2 hover:text-[color:var(--primary)] transition-colors">
                  {a.title}
                </h3>
              </Link>
              <p className="text-sm text-[color:var(--text-dim)] leading-relaxed">
                {a.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

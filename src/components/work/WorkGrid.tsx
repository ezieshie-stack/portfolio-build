"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Database,
  FileText,
  GitBranch,
  Settings,
  TrendingUp,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Database,
  FileText,
  GitBranch,
  Settings,
  TrendingUp,
};

type Card = {
  icon: string;
  category: string;
  title: string;
  desc: string;
  tags: readonly string[];
  href: string;
};

type Props = {
  filters: readonly string[];
  cards: readonly Card[];
};

const matchesFilter = (card: Card, filter: string) => {
  if (filter === "All") return true;
  return card.category.toLowerCase().includes(filter.toLowerCase());
};

export function WorkGrid({ filters, cards }: Props) {
  const [active, setActive] = useState(filters[0] ?? "All");

  const visible = useMemo(
    () => cards.filter((c) => matchesFilter(c, active)),
    [active, cards],
  );

  return (
    <>
      <div className="work-filters">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            data-active={active === f}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {visible.map((card) => {
          const Icon = iconMap[card.icon] ?? Settings;
          return (
            <article
              key={card.title}
              className="work-project-card glass-card p-7 min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <div className="work-project-icon">
                  <Icon size={22} />
                </div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#a78bfa] font-semibold">
                  {card.category}
                </span>
                <h3 className="text-[24px] font-bold leading-[1.15] tracking-[-0.04em] my-3">
                  {card.title}
                </h3>
                <p className="text-[color:var(--text-dim)] text-[15px] leading-[1.65]">
                  {card.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {card.tags.map((tag) => (
                    <span key={tag} className="work-project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={card.href}
                className="text-[#c4b5fd] text-sm self-end mt-6 hover:text-white transition-colors"
              >
                View Project
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
}

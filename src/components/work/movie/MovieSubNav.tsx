import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export type MovieSubNavKey = "hub" | "genre" | "data" | "funnel" | "method" | "doc";

const TABS: { key: MovieSubNavKey; label: string; href: string }[] = [
  { key: "genre", label: "M1 · Genre & Budget", href: "/work/movie-profitability/genre" },
  { key: "data", label: "M2 · Data", href: "/work/movie-profitability/data" },
  { key: "funnel", label: "M3 · Funnel", href: "/work/movie-profitability/funnel" },
  { key: "method", label: "M4 · Method", href: "/work/movie-profitability/method" },
  { key: "doc", label: "M5 · Write-up", href: "/work/movie-profitability/doc" },
];

export function MovieSubNav({ active }: { active: MovieSubNavKey }) {
  return (
    <div className="pj-subnav">
      <Link href="/work/movie-profitability" className="pj-back">
        <ArrowLeft size={14} aria-hidden /> Back to Movie Profitability hub
      </Link>
      <div className="pj-subnav-tabs">
        {TABS.map((t) => (
          <Link
            key={t.key}
            href={t.href}
            className={`pj-subnav-tab${active === t.key ? " on" : ""}`}
          >
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

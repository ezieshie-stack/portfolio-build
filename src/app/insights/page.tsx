import Link from "next/link";
import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { InsightsGrid } from "@/components/insights/InsightsGrid";
import { insights } from "@/lib/content";

export const metadata = { title: "Insights — Portfolio" };

export default function InsightsPage() {
  const { featured, cta } = insights;

  return (
    <PageShell>
      {/* ── HERO ─────────────────────────────────────── */}
      <Reveal as="section" className="pb-24 max-w-[900px]">
        <SectionTag>{insights.tag}</SectionTag>
        <h1 className="text-[clamp(52px,7vw,104px)] font-extrabold leading-[0.95] tracking-[-0.06em] my-6">
          {insights.title}
        </h1>
        <p className="text-[color:var(--text-dim)] text-lg leading-relaxed max-w-[680px]">
          {insights.intro}
        </p>
      </Reveal>

      {/* ── FEATURED INSIGHT ─────────────────────────── */}
      <Reveal
        as="section"
        className="insights-featured-card grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 p-8 md:p-12 mb-20"
      >
        <div>
          <span className="filter-pill" data-active="true">
            {featured.pill}
          </span>
          <h2 className="text-[clamp(34px,4vw,64px)] font-extrabold leading-none tracking-[-0.05em] mt-6 mb-6">
            {featured.title}
          </h2>
          <p className="text-[color:var(--text-dim)] leading-relaxed max-w-[560px] mb-8">
            {featured.body}
          </p>
          <Link href={featured.ctaHref} className="btn-primary inline-flex">
            {featured.ctaLabel} →
          </Link>
        </div>

        <div className="insights-featured-visual">
          {featured.nodes.map((label, i) => (
            <div key={label} className={`insight-node insight-node-${i + 1}`}>
              {label}
            </div>
          ))}
        </div>
      </Reveal>

      {/* ── CATEGORIES + ARTICLE GRID ────────────────── */}
      <Reveal as="section" className="mb-24">
        <InsightsGrid filters={[...insights.filters]} articles={insights.articles} />
      </Reveal>

      {/* ── TRANSITION (no button — footer handles conversion) ─ */}
      <Reveal as="section" className="insights-cta-card px-7 py-12 md:px-12 md:py-14 max-w-[820px]">
        <SectionTag>{cta.tag}</SectionTag>
        <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.04em] mt-5 mb-5">
          {cta.title}
        </h2>
        <p className="text-[color:var(--text-dim)] leading-relaxed max-w-[600px]">
          {cta.body}
        </p>
      </Reveal>
    </PageShell>
  );
}

import Link from "next/link";
import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { InsightsGrid } from "@/components/insights/InsightsGrid";
import { insights } from "@/lib/content";

export const metadata = { title: "Insights — Portfolio" };

export default function InsightsPage() {
  const { featured } = insights;

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

        <div className="insightMapVisual">
          <div className="insightMapGrid" />

          <svg className="insightMapLines" viewBox="0 0 700 520" fill="none">
            <path d="M350 260 C280 190 210 170 145 145" />
            <path d="M350 260 C445 180 510 160 585 135" />
            <path d="M350 260 C250 310 190 360 130 410" />
            <path d="M350 260 C465 315 525 365 600 415" />
          </svg>

          <div className="insightCenter">
            <span>INSIGHT</span>
            <strong>Better decisions start with clearer systems.</strong>
          </div>

          <div className="insightBubble bubble1">
            <span>01</span>
            Workflow Friction
          </div>
          <div className="insightBubble bubble2">
            <span>02</span>
            Decision Gaps
          </div>
          <div className="insightBubble bubble3">
            <span>03</span>
            Reporting Signals
          </div>
          <div className="insightBubble bubble4">
            <span>04</span>
            Operational Clarity
          </div>
        </div>
      </Reveal>

      {/* ── CATEGORIES + ARTICLE GRID ────────────────── */}
      <Reveal as="section">
        <InsightsGrid filters={[...insights.filters]} articles={insights.articles} />
      </Reveal>
    </PageShell>
  );
}

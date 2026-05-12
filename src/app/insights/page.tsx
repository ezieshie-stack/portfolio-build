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

        <div className="insightLibrary">
          <header className="libHead">
            <span className="libEyebrow">INSIGHT LIBRARY</span>
            <span className="libCount">12 articles</span>
          </header>

          <nav className="libTabs">
            <button className="libTab is-active" type="button">Process</button>
            <button className="libTab" type="button">Systems</button>
            <button className="libTab" type="button">Analytics</button>
          </nav>

          <article className="libFeatured">
            <span className="libBadge">FEATURED INSIGHT</span>
            <h4>
              Operational systems are only valuable when people can actually use them.
            </h4>
            <p>
              Good systems reduce friction, clarify ownership, and improve visibility — so teams make better decisions faster.
            </p>
            <div className="libMetaRow">
              <span className="libPill">Process</span>
              <span className="libPill">Systems</span>
              <span className="libPill">Analytics</span>
              <span className="libDate">5 min read</span>
            </div>
          </article>

          <div className="libCards">
            <article className="libCard">
              <span className="libCardCat">PROCESS DESIGN</span>
              <p>Why operational clarity starts with better workflows</p>
            </article>
            <article className="libCard">
              <span className="libCardCat">ANALYTICS</span>
              <p>Dashboards are only useful when they support decisions</p>
            </article>
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

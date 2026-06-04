import Link from "next/link";
import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { InsightLibrary } from "@/components/insights/InsightLibrary";
import { InsightsGrid } from "@/components/insights/InsightsGrid";
import { deepMerge, fetchPublishedArticles, fetchSectionContent } from "@/lib/cms";
import { insights as insightsDefault } from "@/lib/content";
import type { Article } from "@/lib/content";
import { listInsights } from "@/lib/insights";

export const metadata = { title: "Insights | Portfolio" };

export default async function InsightsPage() {
  const override = await fetchSectionContent<typeof insightsDefault>("insights");
  const insights = deepMerge(insightsDefault, override);
  const { featured } = insights;

  // Merge sources, in priority order: Convex (admin-managed) → MDX files →
  // static placeholders. Dedupe by slug so the same article doesn't appear
  // twice.
  const convexArticles = await fetchPublishedArticles();
  const mdxArticles = listInsights();

  const seen = new Set<string>();
  const merged: Article[] = [];

  const push = (a: Article) => {
    if (seen.has(a.slug)) return;
    seen.add(a.slug);
    merged.push(a);
  };

  for (const a of convexArticles) {
    push({
      slug: a.slug,
      title: a.title,
      excerpt: a.excerpt,
      category: a.category,
      date: a.date,
      readTime: a.readTime,
    });
  }
  for (const a of mdxArticles) {
    push({
      slug: a.slug,
      title: a.title,
      excerpt: a.excerpt,
      category: a.category,
      date: a.date,
      readTime: a.readTime,
    });
  }

  // If neither source has anything, keep the static placeholders so the
  // page never feels empty.
  const articles: Article[] = merged.length > 0 ? merged : insights.articles;

  return (
    <PageShell>
      {/* ── HERO ─────────────────────────────────────── */}
      <Reveal as="section" className="pb-24 max-w-[900px]">
        <SectionTag>{insights.tag}</SectionTag>
        <h1 className="text-[length:var(--text-display)] font-extrabold leading-[0.95] tracking-[-0.06em] my-6">
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
          <h2 className="text-[length:var(--text-4xl)] font-extrabold leading-none tracking-[-0.05em] mt-6 mb-6">
            {featured.title}
          </h2>
          <p className="text-[color:var(--text-dim)] leading-relaxed max-w-[560px] mb-8">
            {featured.body}
          </p>
          <Link href={featured.ctaHref} className="btn-primary inline-flex">
            {featured.ctaLabel} →
          </Link>
        </div>

        <InsightLibrary />
      </Reveal>

      {/* ── CATEGORIES + ARTICLE GRID ────────────────── */}
      <Reveal as="section">
        <InsightsGrid filters={[...insights.filters]} articles={articles} />
      </Reveal>
    </PageShell>
  );
}

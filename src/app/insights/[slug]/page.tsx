import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { MDXContent } from "@/components/insights/mdx/MDXContent";
import { fetchArticleBySlug } from "@/lib/cms";
import { insights } from "@/lib/content";
import { getInsight } from "@/lib/insights";

type Params = { slug: string };

type RenderData = {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  excerpt: string;
  body: string;
  date: string;
  readTime: string;
  pills?: string[];
};

async function loadArticle(slug: string): Promise<RenderData | null> {
  // 1. Convex (admin-managed) takes priority
  const convex = await fetchArticleBySlug(slug);
  if (convex) {
    return {
      slug: convex.slug,
      title: convex.title,
      subtitle: convex.subtitle,
      category: convex.category,
      excerpt: convex.excerpt,
      body: convex.body,
      date: convex.date,
      readTime: convex.readTime,
      pills: convex.pills,
    };
  }

  // 2. MDX file in src/content/insights/<slug>.mdx
  const mdx = getInsight(slug);
  if (mdx) {
    return {
      slug: mdx.slug,
      title: mdx.title,
      subtitle: mdx.subtitle,
      category: mdx.category,
      excerpt: mdx.excerpt,
      body: mdx.body,
      date: mdx.date,
      readTime: mdx.readTime,
      pills: mdx.pills,
    };
  }

  // 3. Static fallback in content.ts (no body — renders placeholder)
  const fallback = insights.articles.find((a) => a.slug === slug);
  if (fallback) {
    return {
      slug,
      title: fallback.title,
      category: fallback.category,
      excerpt: fallback.excerpt,
      body: "",
      date: fallback.date,
      readTime: fallback.readTime,
    };
  }

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const data = await loadArticle(slug);
  if (!data) return { title: "Insight | Portfolio" };
  return { title: `${data.title} | Insights` };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const data = await loadArticle(slug);
  if (!data) notFound();

  return (
    <PageShell>
      <Reveal as="section" className="pb-12 max-w-[820px]">
        <Link
          href="/insights"
          className="text-xs tracking-[0.2em] uppercase text-[#a78bfa] hover:text-white transition-colors"
        >
          ← All Insights
        </Link>

        <SectionTag>{`// ${data.category.toUpperCase()}`}</SectionTag>

        <h1 className="text-[length:var(--text-4xl)] font-extrabold leading-[0.98] tracking-[-0.05em] my-6">
          {data.title}
        </h1>

        {data.subtitle && (
          <p className="text-[color:var(--text-dim)] text-xl leading-snug max-w-[680px] mb-8">
            {data.subtitle}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 text-xs text-white/55 mb-12 border-b border-white/8 pb-6">
          <span>{data.date}</span>
          <span aria-hidden>·</span>
          <span>{data.readTime}</span>
          {data.pills && data.pills.length > 0 && (
            <>
              <span aria-hidden>·</span>
              {data.pills.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 rounded-full border border-[#a78bfa]/40 text-[#c4b5fd] text-xs tracking-[0.12em] uppercase font-bold"
                >
                  {p}
                </span>
              ))}
            </>
          )}
        </div>

        {data.body ? (
          <MDXContent source={data.body} />
        ) : (
          <div className="article-body">
            <p className="text-[color:var(--text-dim)] italic">{data.excerpt}</p>
            <p className="mt-8 text-[color:var(--text-dim)]">
              <em>
                Article body coming soon. Once published in Convex or as an
                MDX file, this page will render the full content.
              </em>
            </p>
          </div>
        )}
      </Reveal>
    </PageShell>
  );
}

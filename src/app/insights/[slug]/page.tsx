import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { fetchArticleBySlug } from "@/lib/cms";
import { insights } from "@/lib/content";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);
  const fallback = insights.articles.find((a) => a.slug === slug);
  const title = article?.title ?? fallback?.title;
  if (!title) return { title: "Insight | Portfolio" };
  return { title: `${title} | Insights` };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);
  const fallback = insights.articles.find((a) => a.slug === slug);

  // 404 if neither Convex nor static fallback knows this slug
  if (!article && !fallback) notFound();

  // Article body lives only in Convex. If we only have the fallback, the
  // article is "scaffolded but not yet written" — render a placeholder.
  const data = article ?? {
    slug,
    title: fallback!.title,
    subtitle: undefined,
    category: fallback!.category,
    excerpt: fallback!.excerpt,
    body: "",
    date: fallback!.date,
    readTime: fallback!.readTime,
    published: false,
    pills: undefined as string[] | undefined,
  };

  return (
    <PageShell>
      <Reveal as="section" className="pb-12 max-w-[820px]">
        <Link
          href="/insights"
          className="text-[12px] tracking-[0.2em] uppercase text-[#a78bfa] hover:text-white transition-colors"
        >
          ← All Insights
        </Link>

        <SectionTag>{`// ${data.category.toUpperCase()}`}</SectionTag>

        <h1 className="text-[clamp(40px,6vw,80px)] font-extrabold leading-[0.98] tracking-[-0.05em] my-6">
          {data.title}
        </h1>

        {data.subtitle && (
          <p className="text-[color:var(--text-dim)] text-xl leading-snug max-w-[680px] mb-8">
            {data.subtitle}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 text-[12px] text-white/55 mb-12 border-b border-white/8 pb-6">
          <span>{data.date}</span>
          <span aria-hidden>·</span>
          <span>{data.readTime}</span>
          {data.pills && data.pills.length > 0 && (
            <>
              <span aria-hidden>·</span>
              {data.pills.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 rounded-full border border-[#a78bfa]/40 text-[#c4b5fd] text-[10px] tracking-[0.12em] uppercase font-bold"
                >
                  {p}
                </span>
              ))}
            </>
          )}
        </div>

        {data.body ? (
          <div className="article-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.body}</ReactMarkdown>
          </div>
        ) : (
          <div className="article-body">
            <p className="text-[color:var(--text-dim)] italic">
              {data.excerpt}
            </p>
            <p className="mt-8 text-[color:var(--text-dim)]">
              <em>Article body coming soon. Once published in Convex, this
              page will render the full markdown content.</em>
            </p>
          </div>
        )}
      </Reveal>
    </PageShell>
  );
}

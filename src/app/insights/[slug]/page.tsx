import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ArticleBody } from "@/components/insights/ArticleBody";
import { getEntry, listEntries } from "@/data/insights-articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Params = { slug: string };

/** Prerender every entry at build time so Google gets a static HTML
   page for each one — no on-demand render delay, no missing content. */
export function generateStaticParams() {
  return listEntries().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) {
    return { title: "Not Found" };
  }
  const url = `${SITE_URL}/insights/${entry.slug}`;
  const image = entry.image?.startsWith("http")
    ? entry.image
    : `${SITE_URL}${entry.image ?? ""}`;
  return {
    title: entry.title,
    description: entry.sub,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: entry.title,
      description: entry.sub,
      siteName: SITE_NAME,
      images: entry.image ? [{ url: image, alt: entry.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.sub,
      images: entry.image ? [image] : undefined,
    },
  };
}

export default async function InsightEntryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  return (
    <div className="pf-page">
      <div className="pf-shell" style={{ maxWidth: 760 }}>
        <Link
          href="/insights"
          className="pf-textlink"
          style={{ marginBottom: 24, display: "inline-flex" }}
        >
          <ArrowLeft size={14} aria-hidden /> All Insights
        </Link>

        <article
          className="pf-reader-inner"
          style={{ paddingTop: 12, paddingBottom: 0 }}
        >
          <p className="pf-reader-cat">{entry.tag}</p>
          <h1 className="pf-reader-title">{entry.title}</h1>
          {entry.sub && <p className="pf-reader-sub">{entry.sub}</p>}
          <div className="pf-reader-meta">
            <span>{entry.date}</span>
            <span aria-hidden>·</span>
            <span>{entry.read}</span>
          </div>

          <ArticleBody blocks={entry.body} />

          <div className="pf-reader-foot" style={{ marginTop: 48 }}>
            <span>Written by {SITE_NAME}</span>
            <Link href="/insights" className="pf-textlink">
              Back to Insights <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

/**
 * MDX-backed insight loader.
 *
 * Articles live as `src/content/insights/<slug>.mdx`. Each file has YAML
 * frontmatter (title/excerpt/category/date/readTime/etc.) and an MDX body.
 *
 * The public site reads these at build time / on request; the same articles
 * can also live in Convex (admin-managed) — see `cms.ts`. The slug page
 * checks Convex first, then MDX, then static fallback.
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const INSIGHTS_DIR = path.join(process.cwd(), "src/content/insights");

export type InsightFrontmatter = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  subtitle?: string;
  pills?: string[];
  featured?: boolean;
};

export type Insight = InsightFrontmatter & {
  slug: string;
  body: string;
};

const isMdx = (name: string) => name.endsWith(".mdx");

function readInsightFile(slug: string): Insight | null {
  const filepath = path.join(INSIGHTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;
  try {
    const raw = fs.readFileSync(filepath, "utf-8");
    const { data, content } = matter(raw);
    return {
      ...(data as InsightFrontmatter),
      slug,
      body: content,
    };
  } catch (err) {
    console.warn(`[insights] failed to read ${slug}.mdx:`, err);
    return null;
  }
}

export function getInsight(slug: string): Insight | null {
  return readInsightFile(slug);
}

export function listInsights(): Insight[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];
  const slugs = fs
    .readdirSync(INSIGHTS_DIR)
    .filter(isMdx)
    .map((f) => f.replace(/\.mdx$/, ""));

  const insights = slugs
    .map(readInsightFile)
    .filter((i): i is Insight => i !== null);

  insights.sort((a, b) => {
    const ta = Date.parse(a.date);
    const tb = Date.parse(b.date);
    if (Number.isNaN(ta) && Number.isNaN(tb)) return 0;
    if (Number.isNaN(ta)) return 1;
    if (Number.isNaN(tb)) return -1;
    return tb - ta;
  });

  return insights;
}

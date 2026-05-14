/**
 * CMS helpers — server-side fetch from Convex with safe static fallback.
 *
 * Pattern: every reader returns Convex data when available, otherwise the
 * caller's static default. Never throws on missing Convex env var; never
 * blocks page render.
 */

import { fetchQuery } from "convex/nextjs";
import { api } from "../../convex/_generated/api";

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL;

export const isConvexConfigured = (): boolean => Boolean(CONVEX_URL);

export type ArticleDoc = {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  excerpt: string;
  body: string;
  date: string;
  readTime: string;
  published: boolean;
  featured?: boolean;
  pills?: string[];
  publishedAt?: number;
};

/** Fetches an article by slug. Returns null if not configured or not found. */
export async function fetchArticleBySlug(slug: string): Promise<ArticleDoc | null> {
  if (!isConvexConfigured()) return null;
  try {
    const result = await fetchQuery(api.articles.getBySlug, { slug });
    return (result as ArticleDoc | null) ?? null;
  } catch (err) {
    console.warn("[cms] fetchArticleBySlug failed:", err);
    return null;
  }
}

/** Fetches all published articles. Returns empty array on failure. */
export async function fetchPublishedArticles(): Promise<ArticleDoc[]> {
  if (!isConvexConfigured()) return [];
  try {
    const result = await fetchQuery(api.articles.list, {});
    return (result as ArticleDoc[]) ?? [];
  } catch (err) {
    console.warn("[cms] fetchPublishedArticles failed:", err);
    return [];
  }
}

/** Fetches the section content override; returns null if no override exists. */
export async function fetchSectionContent<T = unknown>(
  section: string,
): Promise<T | null> {
  if (!isConvexConfigured()) return null;
  try {
    const result = await fetchQuery(api.content.get, { section });
    return (result as T | null) ?? null;
  } catch (err) {
    console.warn(`[cms] fetchSectionContent("${section}") failed:`, err);
    return null;
  }
}

/**
 * Recursively merges an override object on top of a base value. Used to
 * apply Convex `siteContent` overrides over static defaults in
 * `src/lib/content.ts` so the public site never breaks when a field is
 * missing — only present override fields take precedence.
 *
 * Rules:
 *   - null / undefined override → base wins.
 *   - Primitives or mismatched types → override wins.
 *   - Arrays → override wins entirely (no element-wise merge).
 *   - Plain objects → merged key-by-key.
 */
export function deepMerge<T>(base: T, override: unknown): T {
  if (override === null || override === undefined) return base;
  if (typeof base !== "object" || base === null) return override as T;
  if (Array.isArray(base) || Array.isArray(override)) {
    // Arrays: override wins entirely if provided.
    return (override as T) ?? base;
  }
  if (typeof override !== "object") return override as T;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [k, v] of Object.entries(override as Record<string, unknown>)) {
    out[k] = deepMerge((base as Record<string, unknown>)[k], v);
  }
  return out as T;
}

/** Fetches an image URL by slot. Returns null if no override exists. */
export async function fetchImageBySlot(
  slot: string,
): Promise<{ imageUrl?: string; videoUrl?: string; altText: string } | null> {
  if (!isConvexConfigured()) return null;
  try {
    const result = await fetchQuery(api.images.getBySlot, { slot });
    if (!result) return null;
    return {
      imageUrl: (result as { imageUrl?: string }).imageUrl,
      videoUrl: (result as { videoUrl?: string }).videoUrl,
      altText: (result as { altText: string }).altText,
    };
  } catch (err) {
    console.warn(`[cms] fetchImageBySlot("${slot}") failed:`, err);
    return null;
  }
}

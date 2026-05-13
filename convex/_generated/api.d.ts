/* eslint-disable */
/**
 * Vendored Convex API types — public read surface only.
 *
 * The admin repo owns the full schema and regenerates this from
 * `npx convex dev`. Here we hand-curate the subset of queries this
 * website actually calls, so it can keep typed `fetchQuery` calls
 * without dragging in admin-only handlers.
 *
 * When the admin repo adds or changes a public query, copy the
 * matching signature into this file.
 */

import type { FunctionReference } from "convex/server";

type ArticleDoc = {
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

type ImageDoc = {
  imageUrl?: string;
  videoUrl?: string;
  altText: string;
};

export declare const api: {
  articles: {
    getBySlug: FunctionReference<"query", "public", { slug: string }, ArticleDoc | null>;
    list: FunctionReference<"query", "public", Record<string, never>, ArticleDoc[]>;
  };
  content: {
    get: FunctionReference<"query", "public", { section: string }, unknown>;
  };
  images: {
    getBySlot: FunctionReference<"query", "public", { slot: string }, ImageDoc | null>;
  };
};

export declare const internal: never;
export declare const components: Record<string, never>;

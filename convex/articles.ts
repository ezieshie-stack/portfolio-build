import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: { includeUnpublished: v.optional(v.boolean()) },
  handler: async (ctx, args) => {
    const all = await ctx.db.query("articles").collect();
    const filtered = args.includeUnpublished
      ? all
      : all.filter((a) => a.published);
    return filtered.sort((a, b) => (b.publishedAt ?? 0) - (a.publishedAt ?? 0));
  },
});

export const getFeatured = query({
  args: {},
  handler: async (ctx) => {
    const featured = await ctx.db
      .query("articles")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .collect();
    return featured.find((a) => a.published) ?? null;
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const article = await ctx.db
      .query("articles")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
    if (!article || !article.published) return null;
    return article;
  },
});

export const upsert = mutation({
  args: {
    slug: v.string(),
    title: v.string(),
    subtitle: v.optional(v.string()),
    category: v.string(),
    body: v.string(),
    date: v.string(),
    readTime: v.string(),
    excerpt: v.string(),
    published: v.boolean(),
    featured: v.optional(v.boolean()),
    pills: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("articles")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();

    const publishedAt =
      args.published && (!existing || !existing.published)
        ? Date.now()
        : existing?.publishedAt;

    if (existing) {
      await ctx.db.patch(existing._id, { ...args, publishedAt });
      return existing._id;
    }
    return await ctx.db.insert("articles", { ...args, publishedAt });
  },
});

export const remove = mutation({
  args: { id: v.id("articles") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

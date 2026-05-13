import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ──────────────────────────────────────────────────────────────────
  // ARTICLES — Insights blog posts.
  // Body is markdown. Edited via dashboard.convex.dev or future admin UI.
  // ──────────────────────────────────────────────────────────────────
  articles: defineTable({
    slug: v.string(),
    title: v.string(),
    subtitle: v.optional(v.string()),
    category: v.string(),
    excerpt: v.string(),
    body: v.string(),
    date: v.string(),
    readTime: v.string(),
    published: v.boolean(),
    featured: v.optional(v.boolean()),
    pills: v.optional(v.array(v.string())),
    publishedAt: v.optional(v.number()),
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["published"])
    .index("by_featured", ["featured"]),

  // ──────────────────────────────────────────────────────────────────
  // SITE CONTENT — flexible per-section content overrides.
  // `section` is the key (e.g. "home", "about.hero", "work.featured").
  // `data` holds the JSON shape that page consumes. Components fall back
  // to static defaults from lib/content.ts when no override exists.
  // ──────────────────────────────────────────────────────────────────
  siteContent: defineTable({
    section: v.string(),
    data: v.any(),
    updatedAt: v.number(),
  }).index("by_section", ["section"]),

  // ──────────────────────────────────────────────────────────────────
  // WEBSITE IMAGES — swappable media slots.
  // Each `slot` is a stable string key (e.g. "home-portrait",
  // "about-portrait") that the site reads via <LiveImage slot="..." />.
  // Same pattern works for short video via the optional videoUrl field.
  // ──────────────────────────────────────────────────────────────────
  websiteImages: defineTable({
    slot: v.string(),
    label: v.string(),
    page: v.string(),
    imageUrl: v.optional(v.string()),
    videoUrl: v.optional(v.string()),
    altText: v.string(),
    active: v.boolean(),
    updatedAt: v.number(),
  })
    .index("by_slot", ["slot"])
    .index("by_active_slot", ["active", "slot"])
    .index("by_page", ["page"]),
});

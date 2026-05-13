/**
 * Website images — swappable media slots driven by Convex storage.
 *
 * Pattern:
 *   1. Admin calls generateUploadUrl() — returns a signed POST URL
 *   2. Client POSTs the file to that URL — gets back a storageId
 *   3. Client calls upsertBySlot({ slot, label, page, storageId, ... })
 *   4. Server resolves storageId → permanent URL and stores it on the row
 *
 * Pages read images via <LiveImage slot="..." fallback="..." /> which
 * calls getBySlot. If no row exists for that slot, the component falls
 * back to its static default — so the site never breaks.
 */

import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: { activeOnly: v.optional(v.boolean()) },
  handler: async (ctx, args) => {
    const all = await ctx.db.query("websiteImages").collect();
    return args.activeOnly === false ? all : all.filter((i) => i.active);
  },
});

export const getBySlot = query({
  args: { slot: v.string() },
  handler: async (ctx, args) => {
    const row = await ctx.db
      .query("websiteImages")
      .withIndex("by_slot", (q) => q.eq("slot", args.slot))
      .unique();
    if (!row || !row.active) return null;
    return row;
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const upsertBySlot = mutation({
  args: {
    slot: v.string(),
    label: v.string(),
    page: v.string(),
    altText: v.string(),
    storageId: v.optional(v.id("_storage")),
    imageUrl: v.optional(v.string()),
    videoUrl: v.optional(v.string()),
    active: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const resolvedImageUrl = args.storageId
      ? (await ctx.storage.getUrl(args.storageId)) ?? args.imageUrl
      : args.imageUrl;

    const existing = await ctx.db
      .query("websiteImages")
      .withIndex("by_slot", (q) => q.eq("slot", args.slot))
      .unique();

    const payload = {
      slot: args.slot,
      label: args.label,
      page: args.page,
      altText: args.altText,
      imageUrl: resolvedImageUrl ?? undefined,
      videoUrl: args.videoUrl,
      active: args.active ?? true,
      updatedAt: Date.now(),
    };

    if (existing) {
      await ctx.db.patch(existing._id, payload);
      return existing._id;
    }
    return await ctx.db.insert("websiteImages", payload);
  },
});

export const remove = mutation({
  args: { slot: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("websiteImages")
      .withIndex("by_slot", (q) => q.eq("slot", args.slot))
      .unique();
    if (existing) await ctx.db.delete(existing._id);
  },
});

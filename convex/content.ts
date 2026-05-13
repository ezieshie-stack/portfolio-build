import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: { section: v.string() },
  handler: async (ctx, args) => {
    const doc = await ctx.db
      .query("siteContent")
      .withIndex("by_section", (q) => q.eq("section", args.section))
      .unique();
    return doc?.data ?? null;
  },
});

export const set = mutation({
  args: { section: v.string(), data: v.any() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("siteContent")
      .withIndex("by_section", (q) => q.eq("section", args.section))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        data: args.data,
        updatedAt: Date.now(),
      });
      return existing._id;
    }
    return await ctx.db.insert("siteContent", {
      section: args.section,
      data: args.data,
      updatedAt: Date.now(),
    });
  },
});

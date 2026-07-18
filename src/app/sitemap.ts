import type { MetadataRoute } from "next";
import { listEntries } from "@/data/insights-articles";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

/** Generates /sitemap.xml at build time. Google reads this to discover
   every page on the site without waiting for link discovery. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "", priority: 1.0, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/work", priority: 0.9, changeFrequency: "monthly" },
    { path: "/process", priority: 0.7, changeFrequency: "yearly" },
    { path: "/insights", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const insightEntries: MetadataRoute.Sitemap = listEntries().map((e) => ({
    url: `${SITE_URL}/insights/${e.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.85,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects
    .filter((p) => p.published)
    .map((p) => ({
      url: `${SITE_URL}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    }));

  return [...staticEntries, ...insightEntries, ...projectEntries];
}

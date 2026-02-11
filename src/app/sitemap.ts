import type { MetadataRoute } from "next";
import { getAllFAQSlugs } from "@/lib/utils/faq";
import { getAllRecaps } from "@/lib/utils/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allaboutxrp.com";
  const now = new Date("2026-02-11T12:00:00Z");

  const staticPages: { path: string; changeFrequency: "hourly" | "daily" | "weekly" | "monthly"; priority: number; lastmod?: Date }[] = [
    { path: "", changeFrequency: "hourly", priority: 1.0 },
    { path: "/learn", changeFrequency: "weekly", priority: 0.85 },
    { path: "/learn/what-is-xrp", changeFrequency: "weekly", priority: 0.9, lastmod: now },
    { path: "/learn/what-is-ripple", changeFrequency: "weekly", priority: 0.9, lastmod: now },
    { path: "/learn/history", changeFrequency: "weekly", priority: 0.9, lastmod: now },
    { path: "/learn/partnerships", changeFrequency: "weekly", priority: 0.85, lastmod: now },
    { path: "/learn/leadership", changeFrequency: "monthly", priority: 0.85, lastmod: now },
    { path: "/learn/get-started", changeFrequency: "weekly", priority: 0.9, lastmod: now },
    { path: "/learn/rlusd", changeFrequency: "weekly", priority: 0.9, lastmod: now },
    { path: "/learn/escrow", changeFrequency: "weekly", priority: 0.85, lastmod: now },
    { path: "/learn/faq", changeFrequency: "weekly", priority: 0.8 },
    { path: "/learn/trusted-sources", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/riddlers", changeFrequency: "monthly", priority: 0.7 },
    { path: "/learn/acquisitions", changeFrequency: "weekly", priority: 0.8 },
    { path: "/learn/key-people", changeFrequency: "monthly", priority: 0.7 },
    { path: "/people", changeFrequency: "weekly", priority: 0.85 },
    { path: "/people/holders", changeFrequency: "weekly", priority: 0.7 },
    { path: "/people/riddlers", changeFrequency: "monthly", priority: 0.6 },
    { path: "/people/acquisitions", changeFrequency: "weekly", priority: 0.7 },
    { path: "/people/key-people", changeFrequency: "monthly", priority: 0.7 },
    { path: "/people/partnerships", changeFrequency: "weekly", priority: 0.7 },
    { path: "/people/trusted-sources", changeFrequency: "monthly", priority: 0.6 },
    { path: "/live", changeFrequency: "hourly", priority: 0.8 },
    { path: "/charts", changeFrequency: "hourly", priority: 0.8 },
    { path: "/news", changeFrequency: "hourly", priority: 0.9 },
    { path: "/holders", changeFrequency: "daily", priority: 0.7 },
    { path: "/riddlers", changeFrequency: "monthly", priority: 0.6 },
    { path: "/acquisitions", changeFrequency: "weekly", priority: 0.7 },
    { path: "/how-to-start", changeFrequency: "weekly", priority: 0.85 },
    { path: "/donate", changeFrequency: "monthly", priority: 0.4 },
  ];

  const faqSlugs = getAllFAQSlugs();
  const recaps = getAllRecaps();

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: page.lastmod || now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    {
      url: `${baseUrl}/news/recaps`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    ...recaps.map((r) => ({
      url: `${baseUrl}/news/recaps/${r.date}`,
      lastModified: new Date(r.date + "T12:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...faqSlugs.map((slug) => ({
      url: `${baseUrl}/learn/faq/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

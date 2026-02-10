import type { MetadataRoute } from "next";
import { getAllFAQSlugs } from "@/lib/utils/faq";
import { getAllRecaps } from "@/lib/utils/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allaboutxrp.com";

  const staticPages: { path: string; changeFrequency: "hourly" | "daily" | "weekly" | "monthly"; priority: number }[] = [
    { path: "", changeFrequency: "hourly", priority: 1.0 },
    { path: "/learn/what-is-xrp", changeFrequency: "weekly", priority: 0.9 },
    { path: "/learn/what-is-ripple", changeFrequency: "weekly", priority: 0.9 },
    { path: "/learn/history", changeFrequency: "weekly", priority: 0.9 },
    { path: "/learn/partnerships", changeFrequency: "weekly", priority: 0.85 },
    { path: "/learn/leadership", changeFrequency: "monthly", priority: 0.85 },
    { path: "/learn/get-started", changeFrequency: "weekly", priority: 0.9 },
    { path: "/learn/rlusd", changeFrequency: "weekly", priority: 0.9 },
    { path: "/learn", changeFrequency: "weekly", priority: 0.85 },
    { path: "/learn/faq", changeFrequency: "weekly", priority: 0.8 },
    { path: "/escrow", changeFrequency: "weekly", priority: 0.85 },
    { path: "/acquisitions", changeFrequency: "weekly", priority: 0.85 },
    { path: "/riddlers", changeFrequency: "monthly", priority: 0.8 },
    { path: "/people", changeFrequency: "monthly", priority: 0.7 },
    { path: "/news", changeFrequency: "hourly", priority: 0.9 },
    { path: "/richlist", changeFrequency: "hourly", priority: 0.8 },
    { path: "/live", changeFrequency: "hourly", priority: 0.8 },
    { path: "/get-started", changeFrequency: "weekly", priority: 0.85 },
    { path: "/donate", changeFrequency: "monthly", priority: 0.4 },
  ];

  const faqSlugs = getAllFAQSlugs();
  const recaps = getAllRecaps();

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    {
      url: `${baseUrl}/news/recaps`,
      lastModified: new Date(),
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
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

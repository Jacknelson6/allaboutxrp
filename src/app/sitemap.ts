import type { MetadataRoute } from "next";
import { getAllFAQSlugs } from "@/lib/utils/faq";
import { getAllRecaps } from "@/lib/utils/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allaboutxrp.com";

  const staticPages = [
    "",
    "/escrow",
    "/acquisitions",
    "/riddlers",
    "/people",
    "/news",
    "/richlist",
    "/get-started",
    "/donate",
    "/live",
    "/learn",
    "/learn/faq",
    "/learn/what-is-xrp",
    "/learn/what-is-ripple",
    "/learn/history",
    "/learn/partnerships",
    "/learn/leadership",
    "/learn/get-started",
  ];

  const faqSlugs = getAllFAQSlugs();
  const recaps = getAllRecaps();

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: (page === "/richlist" || page === "/news" || page === "" ? "hourly" : "weekly") as "hourly" | "weekly",
      priority: page === "" ? 1 : 0.8,
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

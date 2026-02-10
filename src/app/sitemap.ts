import type { MetadataRoute } from "next";
import { getAllFAQSlugs } from "@/lib/utils/faq";

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
  ];

  const faqSlugs = getAllFAQSlugs();

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: (page === "/richlist" || page === "/news" || page === "" ? "hourly" : "weekly") as "hourly" | "weekly",
      priority: page === "" ? 1 : 0.8,
    })),
    ...faqSlugs.map((slug) => ({
      url: `${baseUrl}/learn/faq/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

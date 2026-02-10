import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allaboutxrp.com";
  const pages = ["", "/escrow", "/acquisitions", "/riddlers", "/people", "/news", "/richlist", "/get-started", "/donate", "/live"];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "/richlist" || page === "/news" ? "hourly" : "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}

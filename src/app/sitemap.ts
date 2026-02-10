import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allaboutxrp.com";
  const pages = ["", "/people", "/news", "/richlist", "/get-started", "/donate"];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "/richlist" || page === "/news" ? "hourly" : "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}

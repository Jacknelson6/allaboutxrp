import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "Applebot-Extended",
          "Google-Extended",
          "cohere-ai",
          "Googlebot",
          "Bingbot",
          "Bytespider",
          "Meta-ExternalAgent",
          "YouBot",
          "CCBot",
        ],
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: [
      "https://allaboutxrp.com/sitemap.xml",
      "https://allaboutxrp.com/news-sitemap.xml",
    ],
  };
}

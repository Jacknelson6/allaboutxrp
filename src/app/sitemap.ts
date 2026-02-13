import type { MetadataRoute } from "next";
import { getAllFAQSlugs } from "@/lib/utils/faq";
import { getAllRecaps } from "@/lib/utils/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allaboutxrp.com";
  const now = new Date("2026-02-11T12:00:00Z");

  const staticPages: { path: string; changeFrequency: "hourly" | "daily" | "weekly" | "monthly"; priority: number; lastmod?: Date }[] = [
    // Core pages
    { path: "", changeFrequency: "hourly", priority: 1.0 },
    { path: "/live-chart", changeFrequency: "hourly", priority: 0.9 },
    { path: "/news", changeFrequency: "hourly", priority: 0.9 },
    { path: "/holders", changeFrequency: "daily", priority: 0.8 },
    { path: "/how-to-start", changeFrequency: "weekly", priority: 0.85 },

    // Learn hub
    { path: "/learn", changeFrequency: "weekly", priority: 0.85 },
    { path: "/learn/what-is-xrp", changeFrequency: "weekly", priority: 0.9, lastmod: now },
    { path: "/learn/what-is-ripple", changeFrequency: "weekly", priority: 0.9, lastmod: now },
    { path: "/learn/history", changeFrequency: "weekly", priority: 0.9, lastmod: now },
    { path: "/learn/xrp-ledger-explained", changeFrequency: "weekly", priority: 0.85, lastmod: now },
    { path: "/learn/xrp-tokenomics", changeFrequency: "weekly", priority: 0.85, lastmod: now },
    { path: "/learn/xrp-use-cases", changeFrequency: "weekly", priority: 0.85, lastmod: now },
    { path: "/learn/xrp-vs-bitcoin", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/xrp-price-history", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/xrp-staking", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/xrp-wallets", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/how-to-buy-xrp", changeFrequency: "weekly", priority: 0.85, lastmod: now },
    { path: "/learn/get-started", changeFrequency: "weekly", priority: 0.9, lastmod: now },
    { path: "/learn/rlusd", changeFrequency: "weekly", priority: 0.9, lastmod: now },
    { path: "/learn/escrow", changeFrequency: "weekly", priority: 0.85, lastmod: now },
    { path: "/learn/ripplenet", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/ripple-software-stack", changeFrequency: "monthly", priority: 0.7, lastmod: now },
    { path: "/learn/ripple-prime", changeFrequency: "monthly", priority: 0.7, lastmod: now },
    { path: "/learn/on-demand-liquidity", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/partnerships", changeFrequency: "weekly", priority: 0.85, lastmod: now },
    { path: "/learn/leadership", changeFrequency: "monthly", priority: 0.85, lastmod: now },
    { path: "/learn/key-people", changeFrequency: "monthly", priority: 0.7, lastmod: now },
    { path: "/learn/acquisitions", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/riddlers", changeFrequency: "monthly", priority: 0.7, lastmod: now },
    { path: "/learn/trusted-sources", changeFrequency: "monthly", priority: 0.7, lastmod: now },
    { path: "/learn/faq", changeFrequency: "weekly", priority: 0.8 },

    // Best / recommendations
    { path: "/best", changeFrequency: "weekly", priority: 0.8 },
    { path: "/best/xrp-exchanges", changeFrequency: "weekly", priority: 0.85 },
    { path: "/best/xrp-wallets", changeFrequency: "weekly", priority: 0.85 },
    { path: "/best/hardware-wallets-for-xrp", changeFrequency: "monthly", priority: 0.75 },
    { path: "/best/xrp-staking-platforms", changeFrequency: "weekly", priority: 0.75 },

    // Answers
    { path: "/answers", changeFrequency: "weekly", priority: 0.8 },

    // Tools
    { path: "/tools", changeFrequency: "weekly", priority: 0.75 },
    { path: "/tools/xrp-profit-calculator", changeFrequency: "monthly", priority: 0.7 },
    { path: "/tools/xrp-fee-calculator", changeFrequency: "monthly", priority: 0.7 },

    // Extension
    { path: "/extension", changeFrequency: "monthly", priority: 0.7 },

    // Other
    { path: "/donate", changeFrequency: "monthly", priority: 0.4 },
    { path: "/privacy-policy", changeFrequency: "monthly", priority: 0.3 },
    { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
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

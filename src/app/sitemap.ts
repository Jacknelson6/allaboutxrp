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
    { path: "/learn/cross-border-payments", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/how-banks-use-xrp", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/sec-vs-ripple", changeFrequency: "weekly", priority: 0.85, lastmod: now },
    { path: "/learn/xrp-addresses-and-keys", changeFrequency: "monthly", priority: 0.7, lastmod: now },
    { path: "/learn/xrp-etf", changeFrequency: "weekly", priority: 0.85, lastmod: now },
    { path: "/learn/xrp-glossary", changeFrequency: "monthly", priority: 0.7, lastmod: now },
    { path: "/learn/xrp-myths", changeFrequency: "monthly", priority: 0.7, lastmod: now },
    { path: "/learn/xrp-price-prediction", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/xrp-stablecoin-ecosystem", changeFrequency: "monthly", priority: 0.7, lastmod: now },
    { path: "/learn/xrp-supply-explained", changeFrequency: "monthly", priority: 0.7, lastmod: now },
    { path: "/learn/xrp-tax-guide", changeFrequency: "monthly", priority: 0.75, lastmod: now },
    { path: "/learn/xrp-transaction-types", changeFrequency: "monthly", priority: 0.7, lastmod: now },
    { path: "/learn/xrp-vs-ethereum", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/xrp-vs-solana", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/xrpl-defi", changeFrequency: "weekly", priority: 0.8, lastmod: now },
    { path: "/learn/xrpl-validators", changeFrequency: "monthly", priority: 0.7, lastmod: now },
    { path: "/learn/faq", changeFrequency: "weekly", priority: 0.8 },

    // Best / recommendations
    { path: "/best", changeFrequency: "weekly", priority: 0.8 },
    { path: "/best/xrp-exchanges", changeFrequency: "weekly", priority: 0.85 },
    { path: "/best/xrp-wallets", changeFrequency: "weekly", priority: 0.85 },
    { path: "/best/hardware-wallets-for-xrp", changeFrequency: "monthly", priority: 0.75 },
    { path: "/best/xrp-staking-platforms", changeFrequency: "weekly", priority: 0.75 },

    // Answers hub + individual answer pages
    { path: "/answers", changeFrequency: "weekly", priority: 0.8 },
    { path: "/answers/best-altcoins-2026", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/best-cryptocurrency-2026", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/can-xrp-be-mined", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/how-fast-is-xrp", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/how-many-xrp-are-there", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/how-to-buy-xrp-safely", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/is-it-too-late-to-buy-xrp", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/is-xrp-a-good-investment", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/is-xrp-a-security", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/top-10-cryptocurrencies-2026", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/what-banks-use-xrp", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/what-do-you-need-to-buy-xrp", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/when-should-you-buy-xrp", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/where-can-you-buy-xrp", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/why-is-xrp-dropping", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/why-should-you-buy-xrp", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/will-xrp-reach-10-dollars", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/xrp-price-prediction-2026", changeFrequency: "monthly", priority: 0.7 },
    { path: "/answers/xrp-vs-solana", changeFrequency: "monthly", priority: 0.7 },

    // Tools
    { path: "/tools", changeFrequency: "weekly", priority: 0.75 },
    { path: "/tools/xrp-profit-calculator", changeFrequency: "monthly", priority: 0.7 },
    { path: "/tools/xrp-fee-calculator", changeFrequency: "monthly", priority: 0.7 },

    // Extension
    { path: "/extension", changeFrequency: "monthly", priority: 0.7 },

    // Root-level aliases / standalone pages
    { path: "/acquisitions", changeFrequency: "weekly", priority: 0.6 },
    { path: "/charts", changeFrequency: "hourly", priority: 0.7 },
    { path: "/escrow", changeFrequency: "weekly", priority: 0.6 },
    { path: "/etf", changeFrequency: "weekly", priority: 0.7 },
    { path: "/get-started", changeFrequency: "weekly", priority: 0.7 },
    { path: "/live", changeFrequency: "hourly", priority: 0.7 },
    { path: "/riddlers", changeFrequency: "monthly", priority: 0.5 },

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

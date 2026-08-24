/**
 * Paths that should have `<meta name="robots" content="noindex">`.
 * These are thin, duplicative, or low-value pages that dilute crawl budget.
 */
export const NOINDEX_PATHS = new Set([
  "/privacy-policy",
  "/terms",
  "/extension",
  "/corrections/thanks",
]);

/**
 * Duplicate answer URLs that have a more complete canonical guide.
 * These are served as permanent redirects so users and ranking signals land on
 * one page instead of splitting across an answer and a learn article.
 */
export const CANONICAL_ALIASES = new Map<string, string>([
  ["/answers/best-altcoins-2026", "/learn/altcoins-2026"],
  ["/answers/best-cryptocurrency-2026", "/learn/altcoins-2026"],
  ["/answers/top-10-cryptocurrencies-2026", "/learn/altcoins-2026"],
  ["/answers/can-xrp-be-mined", "/learn/can-xrp-be-mined"],
  ["/answers/how-fast-is-xrp", "/learn/how-does-xrp-work"],
  ["/answers/how-many-xrp-are-there", "/learn/xrp-supply-explained"],
  ["/answers/how-to-buy-xrp-safely", "/learn/how-to-store-xrp-safely"],
  ["/answers/is-it-too-late-to-buy-xrp", "/learn/is-xrp-a-good-investment"],
  ["/answers/is-xrp-a-good-investment", "/learn/is-xrp-a-good-investment"],
  ["/answers/is-xrp-a-security", "/learn/is-xrp-a-security"],
  ["/answers/what-banks-use-xrp", "/learn/how-banks-use-xrp"],
  ["/answers/what-do-you-need-to-buy-xrp", "/learn/how-to-buy-xrp"],
  ["/answers/when-should-you-buy-xrp", "/learn/how-to-buy-xrp"],
  ["/answers/where-can-you-buy-xrp", "/learn/how-to-buy-xrp"],
  ["/answers/why-is-xrp-dropping", "/learn/xrp-crash-history"],
  ["/answers/why-should-you-buy-xrp", "/learn/is-xrp-a-good-investment"],
  ["/answers/will-xrp-reach-10-dollars", "/learn/xrp-price-prediction"],
  ["/answers/xrp-price-prediction-2026", "/learn/xrp-price-prediction"],
  ["/answers/xrp-vs-solana", "/learn/xrp-vs-solana"],
  ["/learn/get-started", "/how-to-start"],
  ["/learn/rlusd-explained", "/learn/rlusd"],
  ["/learn/sec-vs-ripple-explained", "/learn/sec-vs-ripple"],
  ["/learn/banks-using-xrp", "/learn/how-banks-use-xrp"],
  ["/learn/xrp-and-banks", "/learn/how-banks-use-xrp"],
  ["/learn/crypto-wallets-for-xrp", "/learn/xrp-wallets"],
  ["/learn/best-xrp-exchanges", "/learn/how-to-buy-xrp"],
  ["/learn/xrp-escrow-explained", "/learn/escrow"],
  ["/learn/xrp-vs-ripple-for-beginners", "/learn/ripple-vs-xrp"],
  ["/learn/xrp-and-cbdc-bridge", "/learn/cbdcs-and-xrp"],
  ["/learn/xrp-amm-yield-guide", "/learn/xrpl-amm-liquidity-pools"],
  ["/learn/xrp-and-defi", "/learn/xrpl-defi"],
  ["/learn/how-to-stake-xrp", "/learn/xrp-staking"],
  ["/learn/can-xrp-reach-10", "/learn/xrp-price-potential"],
  ["/learn/can-xrp-reach-50", "/learn/xrp-price-potential"],
  ["/learn/can-xrp-reach-100", "/learn/xrp-price-potential"],
  ["/learn/can-xrp-reach-500", "/learn/xrp-price-potential"],
  ["/learn/can-xrp-reach-1000", "/learn/xrp-price-potential"],
  ["/learn/xrp-etf-approval-odds", "/learn/xrp-etf"],
  ["/learn/xrp-etf-filings", "/learn/xrp-etf"],
  ["/learn/xrp-etf-price-impact", "/learn/xrp-etf"],
  ["/learn/xrp-spot-etf-vs-futures-etf", "/learn/xrp-etf"],
]);

export const CANONICAL_ALIAS_PATHS = new Set(CANONICAL_ALIASES.keys());

/**
 * Convenience set of just learn slugs (without /learn/ prefix)
 * for use in sitemap generation.
 */
export const NOINDEX_LEARN_SLUGS = new Set(
  [...NOINDEX_PATHS]
    .filter((p) => p.startsWith("/learn/"))
    .map((p) => p.replace("/learn/", ""))
);

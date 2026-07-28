/**
 * Paths that should have `<meta name="robots" content="noindex">`.
 * These are thin, duplicative, or low-value pages that dilute crawl budget.
 */
export const NOINDEX_PATHS = new Set([
  // ── Duplicate utility routes ───────────────────────────────────
  "/learn/get-started",

  // ── Buy XRP regional/exchange pages ──────────────────────────────────
  "/learn/buy-xrp-in-australia",
  "/learn/buy-xrp-in-canada",
  "/learn/buy-xrp-in-india",
  "/learn/buy-xrp-in-uk",
  "/learn/buy-xrp-in-usa",
  "/learn/buy-xrp-on-binance",
  "/learn/buy-xrp-on-bitstamp",
  "/learn/buy-xrp-on-coinbase",
  "/learn/buy-xrp-on-kraken",
  "/learn/buy-xrp-on-robinhood",
  "/learn/buy-xrp-on-uphold",

  // ── XRP vs * comparison pages ────────────────────────────────────────
  "/learn/xrp-vs-avalanche",
  "/learn/xrp-vs-bitcoin",
  "/learn/xrp-vs-bitcoin-investment",
  "/learn/xrp-vs-cardano",
  "/learn/xrp-vs-chainlink",
  "/learn/xrp-vs-dogecoin",
  "/learn/xrp-vs-ethereum",
  "/learn/xrp-vs-hedera",
  "/learn/xrp-vs-litecoin",
  "/learn/xrp-vs-paypal",
  "/learn/xrp-vs-polygon",
  "/learn/xrp-vs-solana",
  "/learn/xrp-vs-stablecoins",
  "/learn/xrp-vs-stellar",
  "/learn/xrp-vs-stocks",
  "/learn/xrp-vs-sui",
  "/learn/xrp-vs-swift",
  "/learn/xrp-vs-tron",
  "/learn/xrp-vs-western-union",
  "/learn/xrp-vs-ripple-for-beginners",

  // ── Can XRP reach * pages ────────────────────────────────────────────
  "/learn/can-xrp-reach-10",
  "/learn/can-xrp-reach-50",
  "/learn/can-xrp-reach-100",
  "/learn/can-xrp-reach-500",
  "/learn/can-xrp-reach-1000",

  // ── Duplicate pages (canonical exists elsewhere) ─────────────────────
  "/learn/rlusd-explained",
  "/learn/sec-vs-ripple-explained",
  "/learn/banks-using-xrp",
  "/learn/xrp-and-banks",
  "/learn/crypto-wallets-for-xrp",
  "/learn/best-xrp-exchanges",
  "/learn/xrp-escrow-explained",
  "/learn/best-xrp-trading-pairs",

  // ── Low-value deep cuts ──────────────────────────────────────────────
  "/learn/xrp-glossary",
  "/learn/xrp-developer-resources",
  "/learn/xrp-addresses-and-keys",
  "/learn/xrp-destination-tag-guide",
  "/learn/xrp-transaction-types",
  "/learn/xrp-block-explorers",
  "/learn/xrp-portfolio-trackers",
  "/learn/xrp-order-types-explained",
  "/learn/xrp-cost-basis-methods",
  "/learn/xrp-airdrop-taxes",
  "/learn/xrp-tax-loss-harvesting",
  "/learn/xrp-in-retirement-accounts",
  "/learn/xrp-futures-trading",
  "/learn/xrp-day-trading-guide",
  "/learn/xrp-spot-etf-vs-futures-etf",
  "/learn/xrp-on-chain-analysis",
  "/learn/xrp-community-explained",
  "/learn/xrp-sell-or-hold",
  "/learn/xrp-micropayments",
  "/learn/xrp-insurance-use-cases",
  "/learn/xrp-institutional-custody",
  "/learn/xrpl-gaming",
  "/learn/xrpl-nft-marketplaces",
  "/learn/xrp-amm-yield-guide",
  "/learn/xrp-and-correspondent-banking",
  "/learn/xrp-and-cbdc-bridge",
  "/learn/xrp-etf-approval-odds",
  "/learn/xrp-etf-filings",
  "/learn/xrp-etf-price-impact",

  // ── Best / recommendation pages ───────────────────────────────────────
  "/best",
  "/best/xrp-exchanges",
  "/best/xrp-wallets",
  "/best/hardware-wallets-for-xrp",
  "/best/xrp-staking-platforms",

  // ── Utility pages ────────────────────────────────────────────────────
  "/privacy-policy",
  "/terms",
  "/extension",
  "/pricing",
]);

/**
 * Duplicate answer URLs that have a more complete canonical guide.
 * These are served as permanent redirects so users and ranking signals land on
 * one page instead of splitting across an answer and a learn article.
 */
export const CANONICAL_ALIASES = new Map<string, string>([
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

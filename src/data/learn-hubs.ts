export type LearnHub = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  answer: string;
  guides: string[];
};

export const LEARN_HUBS: LearnHub[] = [
  {
    slug: "basics",
    title: "XRP Basics",
    shortTitle: "Basics",
    description: "Start with XRP fundamentals: what it is, how it works, supply, tokenomics, energy use, and common misconceptions.",
    answer: "XRP is the native digital asset of the XRP Ledger, an open-source network designed for fast settlement. This path separates XRP from Ripple, explains how transactions reach consensus, and establishes the supply and market concepts needed to assess more complex claims.",
    guides: [
      "faq", "can-xrp-be-mined", "how-does-xrp-work", "how-xrp-makes-money", "ripple-vs-xrp",
      "trusted-sources", "what-is-xrp", "what-makes-xrp-different", "xrp-energy-consumption",
      "xrp-explained-like-im-five", "xrp-for-beginners", "xrp-glossary", "xrp-market-cap-explained",
      "xrp-myths", "xrp-supply-explained", "xrp-tokenomics",
    ],
  },
  {
    slug: "xrpl",
    title: "XRP Ledger",
    shortTitle: "XRP Ledger",
    description: "Explore the XRP Ledger’s consensus, validators, DEX, AMMs, fees, reserves, identity features, and developer capabilities.",
    answer: "The XRP Ledger is a public, open-source blockchain built for payments and tokenized value. It uses a validator-based consensus process instead of proof-of-work and includes native features such as a decentralized exchange, escrow, payment channels, issued assets, and automated market makers.",
    guides: [
      "how-to-create-xrpl-token", "how-to-run-xrpl-validator", "how-to-use-xrpl-dex", "xrp-addresses-and-keys",
      "xrp-airdrops", "xrp-amm", "xrp-burn-rate", "xrp-destination-tag-guide", "xrp-interledger-protocol",
      "xrp-ledger-explained", "xrp-nfts", "xrp-real-world-assets", "xrp-transaction-types",
      "xrp-smart-contracts", "xrpl-amm-liquidity-pools", "xrpl-clawback-feature", "xrpl-consensus-mechanism",
      "xrpl-credentials-did", "xrpl-decentralization", "xrpl-defi", "xrpl-dex-vs-centralized-exchange",
      "xrpl-hooks-explained", "xrpl-multi-purpose-tokens", "xrpl-oracles", "xrpl-payment-channels",
      "xrpl-reserves-explained", "xrpl-sidechains", "xrpl-transaction-fees", "xrpl-trust-lines-explained", "xrpl-validators",
    ],
  },
  {
    slug: "ripple",
    title: "Ripple and Its Products",
    shortTitle: "Ripple",
    description: "Understand Ripple the company, its leadership, products, acquisitions, stablecoin, partnerships, and relationship to XRP.",
    answer: "Ripple is a private technology company; XRP is an independent digital asset used on the public XRP Ledger. Ripple develops payment, custody, liquidity, and stablecoin products, some of which may use XRP or the XRP Ledger. This path keeps those distinctions explicit and source-backed.",
    guides: [
      "acquisitions", "brad-garlinghouse", "david-schwartz", "escrow", "hidden-road-acquisition", "history",
      "key-people", "leadership", "partnerships", "riddlers", "ripple-custody", "ripple-founding-story",
      "ripple-ipo", "ripple-liquidity-hub", "ripple-prime", "ripple-software-stack", "ripple-stablecoin-strategy",
      "ripplenet", "rlusd", "what-is-ripple", "xrp-stablecoin-ecosystem",
    ],
  },
  {
    slug: "security",
    title: "Buying, Wallets, and Security",
    shortTitle: "Security",
    description: "Buy, send, and store XRP with clear explanations of custody, destination tags, wallet recovery, phishing, and scams.",
    answer: "Safe XRP ownership starts with choosing a reputable venue, understanding whether you or a custodian controls the keys, testing transfers, and protecting recovery credentials offline. No legitimate service needs your secret key or seed phrase, and irreversible transfers make prevention essential.",
    guides: [
      "first-time-buying-crypto-xrp", "how-to-buy-xrp", "how-to-send-xrp", "how-to-store-xrp-safely",
      "recover-lost-xrp", "xrp-common-mistakes", "xrp-phishing-protection", "xrp-risks", "xrp-scams",
      "xrp-self-custody-guide", "xrp-wallets",
    ],
  },
  {
    slug: "markets",
    title: "XRP Markets and Research",
    shortTitle: "Markets",
    description: "Evaluate XRP market cycles, price claims, chart signals, portfolio risk, ETFs, lending, and trading without treating forecasts as facts.",
    answer: "XRP market research should start with supply, liquidity, market capitalization, and downside risk—not a target price. Historical performance and technical indicators can describe conditions, but they cannot guarantee future returns. These guides use scenario analysis and clearly label uncertainty.",
    guides: [
      "altcoins-2026", "earn-interest-on-xrp", "how-much-xrp-to-be-a-millionaire", "how-to-read-xrp-charts", "is-xrp-a-good-investment",
      "why-is-xrp-so-cheap", "xrp-2026-outlook", "xrp-accumulation-zones", "xrp-all-time-high",
      "xrp-altseason-guide", "xrp-bull-run-indicators", "xrp-crash-history", "xrp-dollar-cost-averaging", "xrp-etf",
      "xrp-exit-strategy", "xrp-lending-platforms", "xrp-long-term-potential", "xrp-market-cycles",
      "xrp-portfolio-allocation", "xrp-price-history", "xrp-price-potential", "xrp-price-prediction", "xrp-staking",
      "xrp-swing-trading-guide", "xrp-technical-analysis-guide", "xrp-vs-avalanche", "xrp-vs-bitcoin",
      "xrp-vs-cardano", "xrp-vs-chainlink", "xrp-vs-dogecoin", "xrp-vs-ethereum", "xrp-vs-hedera",
      "xrp-vs-litecoin", "xrp-vs-paypal", "xrp-vs-polygon", "xrp-vs-solana", "xrp-vs-stablecoins",
      "xrp-vs-stellar", "xrp-vs-sui", "xrp-vs-swift", "xrp-vs-tron", "xrp-vs-western-union",
      "xrp-whale-tracking",
    ],
  },
  {
    slug: "regulation",
    title: "XRP Regulation and Legal Context",
    shortTitle: "Regulation",
    description: "Follow XRP’s legal status, SEC v. Ripple, securities analysis, tax considerations, and regulation by jurisdiction.",
    answer: "XRP’s legal treatment depends on the transaction, jurisdiction, and current law. In the United States, the district court distinguished between categories of Ripple’s XRP sales, entered a final judgment in 2024, and the parties dismissed their appeals in 2025. That history is not one universal rule for every XRP transaction.",
    guides: [
      "crypto-regulation-xrp-impact", "is-xrp-a-security", "sec-lawsuit-impact-on-xrp-price", "sec-vs-ripple",
      "xrp-clarity-act", "xrp-european-regulation", "xrp-howey-test", "xrp-legal-status-by-country",
      "xrp-regulatory-clarity-impact", "xrp-sec-settlement", "xrp-tax-guide", "xrp-uk-fca-regulation", "xrp-us-regulation",
    ],
  },
  {
    slug: "adoption",
    title: "Payments and XRP Adoption",
    shortTitle: "Adoption",
    description: "Examine documented XRP and XRPL use cases in payments, banking, remittances, CBDCs, trade finance, and tokenization.",
    answer: "XRP adoption claims need a precise distinction between pilots, partnerships, production products, and direct XRP use. This path examines how bridge assets can support settlement while separating documented deployments from theoretical use cases and company announcements.",
    guides: [
      "cbdcs-and-xrp", "cross-border-payments", "how-banks-use-xrp", "on-demand-liquidity", "xrp-africa-remittances",
      "xrp-and-ai", "xrp-and-tokenized-treasuries", "xrp-and-trade-finance", "xrp-community-explained", "xrp-global-liquidity-network",
      "xrp-iso-20022", "xrp-japan-sbi", "xrp-middle-east-adoption", "xrp-southeast-asia", "xrp-use-cases",
    ],
  },
];

export function getLearnHub(slug: string): LearnHub | undefined {
  return LEARN_HUBS.find((hub) => hub.slug === slug);
}

export function titleFromSlug(slug: string): string {
  const initialisms = new Set(["xrp", "xrpl", "sec", "rlusd", "amm", "dex", "defi", "etf", "cbdcs", "did", "ai", "ipo", "fca", "uk", "us"]);
  return slug
    .split("-")
    .map((word) => initialisms.has(word) ? word.toUpperCase() : `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

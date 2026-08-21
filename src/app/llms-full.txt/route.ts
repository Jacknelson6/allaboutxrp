import { LEARN_HUBS, titleFromSlug } from "@/data/learn-hubs";
import { getAllNewsArticles } from "@/lib/news-content";

export const revalidate = 3600;

const SITE_URL = "https://allaboutxrp.com";

const ANSWER_PAGES: { slug: string; title: string; description: string }[] = [
  { slug: "can-xrp-be-mined", title: "Can XRP Be Mined?", description: "No — all 100 billion XRP tokens were created at the XRP Ledger's genesis; the network uses a consensus protocol, not proof-of-work mining." },
  { slug: "how-fast-is-xrp", title: "How Fast Is XRP?", description: "The XRP Ledger settles transactions in 3-5 seconds with fees under $0.01." },
  { slug: "how-many-xrp-are-there", title: "How Many XRP Are There?", description: "100 billion XRP were created at genesis; no more can ever be minted, with the unreleased balance held in Ripple's escrow." },
  { slug: "how-to-buy-xrp-safely", title: "How to Buy XRP Safely", description: "Security best practices, scam avoidance, hardware wallets, 2FA, and self-custody for buying XRP." },
  { slug: "is-it-too-late-to-buy-xrp", title: "Is It Too Late to Buy XRP?", description: "A look at XRP's utility and adoption trends against the difficulty of timing any market." },
  { slug: "is-xrp-a-good-investment", title: "Is XRP a Good Investment in 2026?", description: "XRP's utility in cross-border payments and institutional adoption weighed against general crypto investment risk." },
  { slug: "is-xrp-a-security", title: "Is XRP a Security?", description: "A federal court ruled in 2023 that programmatic sales of XRP on exchanges do not constitute securities transactions." },
  { slug: "what-banks-use-xrp", title: "What Banks Use XRP?", description: "Financial institutions using RippleNet, and which ones leverage XRP through On-Demand Liquidity." },
  { slug: "what-do-you-need-to-buy-xrp", title: "What Do You Need to Buy XRP?", description: "Exchange account, KYC verification, funding method, and optional wallet — a step-by-step requirements guide." },
  { slug: "when-should-you-buy-xrp", title: "When Should You Buy XRP?", description: "Dollar-cost averaging, market cycles, and historical patterns for timing an XRP purchase." },
  { slug: "where-can-you-buy-xrp", title: "Where Can You Buy XRP?", description: "Exchanges ranked by trust, fees, features, and regional availability." },
  { slug: "why-is-xrp-dropping", title: "Why Is XRP Dropping?", description: "How broader crypto sentiment, Bitcoin correlation, macro factors, and profit-taking drive XRP price declines." },
  { slug: "why-should-you-buy-xrp", title: "Why Should You Buy XRP?", description: "The investment thesis for XRP: cross-border payment utility, institutional adoption, and fixed supply." },
  { slug: "will-xrp-reach-10-dollars", title: "Will XRP Reach $10?", description: "What a $10 XRP price would imply for market cap, and the adoption growth that scenario would require." },
  { slug: "xrp-price-prediction-2026", title: "XRP Price Prediction 2026", description: "Real analyst forecasts (21Shares, Changelly, Kraken, and others) with bear, base, and bull scenarios." },
  { slug: "xrp-vs-solana", title: "XRP vs Solana: Which Is Better?", description: "XRP targets cross-border settlement in 3-5 seconds; Solana targets DeFi and NFTs with sub-second speed. Different purposes." },
  { slug: "best-altcoins-2026", title: "Best Altcoins to Buy in 2026", description: "Rankings of XRP, Ethereum, Solana, Chainlink, and other altcoins by utility, use case, and growth potential." },
  { slug: "best-cryptocurrency-2026", title: "Best Cryptocurrency to Buy in 2026", description: "A comparison of XRP, Bitcoin, Ethereum, and Solana by speed, fees, use case, and growth potential." },
  { slug: "top-10-cryptocurrencies-2026", title: "Top 10 Cryptocurrencies to Watch in 2026", description: "The top 10 cryptocurrencies ranked by market cap, utility, and growth potential, including Bitcoin, XRP, Ethereum, and Solana." },
];

const COMPARISON_GUIDES: { slug: string; title: string; description: string }[] = [
  { slug: "xrp-exchanges", title: "8 Best Exchanges to Buy XRP", description: "Exchanges compared by fees, features, and trustworthiness for buying XRP." },
  { slug: "xrp-wallets", title: "7 Best XRP Wallets", description: "Secure storage options for XRP reviewed, from hardware to software wallets." },
  { slug: "hardware-wallets-for-xrp", title: "5 Best Hardware Wallets for XRP", description: "Cold storage devices compared for securing XRP holdings." },
  { slug: "xrp-staking-platforms", title: "Best Ways to Earn Yield on XRP", description: "An honest look at options for earning yield on XRP holdings and their tradeoffs." },
];

const TOOLS: { href: string; title: string; description: string }[] = [
  { href: "/tools", title: "XRP tools index", description: "Calculators, ledger trackers, and live data utilities with stated methodology." },
  { href: "/tools/xrp-profit-calculator", title: "XRP profit calculator", description: "Model profit, loss, and return using purchase price, exit price, and amount." },
  { href: "/tools/xrp-fee-calculator", title: "XRP transaction fee calculator", description: "Estimate XRP Ledger fee costs for one transaction or a batch." },
  { href: "/tools/escrow-tracker", title: "XRP escrow tracker", description: "Review the monthly escrow release schedule and verify events against primary XRP Ledger records." },
  { href: "/tools/price-alerts", title: "XRP price levels", description: "Review current support and resistance areas alongside the latest price." },
  { href: "/holders", title: "XRP holder distribution", description: "Major balances, known accounts, and concentration methodology." },
];

function buildHubSection(hub: (typeof LEARN_HUBS)[number]): string {
  const guideLines = hub.guides
    .map((slug) => `- [${titleFromSlug(slug)}](${SITE_URL}/learn/${slug})`)
    .join("\n");
  return `### ${hub.title}

[Hub overview](${SITE_URL}/learn/${hub.slug}): ${hub.answer}

${guideLines}`;
}

function buildAnswerSection(): string {
  return ANSWER_PAGES.map(
    (page) => `- [${page.title}](${SITE_URL}/answers/${page.slug}): ${page.description}`,
  ).join("\n");
}

function buildComparisonSection(): string {
  return COMPARISON_GUIDES.map(
    (page) => `- [${page.title}](${SITE_URL}/best/${page.slug}): ${page.description}`,
  ).join("\n");
}

function buildToolsSection(): string {
  return TOOLS.map((tool) => `- [${tool.title}](${SITE_URL}${tool.href}): ${tool.description}`).join("\n");
}

function buildNewsSection(): string {
  const articles = getAllNewsArticles();
  if (articles.length === 0) return "- No published articles yet. See https://allaboutxrp.com/news for current coverage.";
  return articles
    .map(
      (article) =>
        `- [${article.title}](${SITE_URL}/news/${article.slug}): ${article.description} (Published ${article.publishedAt.slice(0, 10)})`,
    )
    .join("\n");
}

export async function GET() {
  const content = `# AllAboutXRP — Full Content Index

> Machine-readable index of every canonical page on AllAboutXRP — the learning paths, answer pages, comparison guides, tools, and news coverage — each with a one-line description, so language models and AI answer engines can select accurate citations without crawling the full site.

AllAboutXRP is an independent publisher and is not affiliated with Ripple. Content is educational and is not financial, legal, or tax advice. Treat prices, balances, network parameters, product availability, and legal status as time-sensitive; verify against the primary source linked on each page.

See [llms.txt](${SITE_URL}/llms.txt) for a shorter, curated overview.

## Learning paths

${LEARN_HUBS.map(buildHubSection).join("\n\n")}

## Answers

Short, direct answers at ${SITE_URL}/answers, each linking to a deeper guide and primary evidence.

${buildAnswerSection()}

## Comparison and buying guides

Editorially reviewed comparisons at ${SITE_URL}/best.

${buildComparisonSection()}

## Tools

Free calculators and live-data utilities at ${SITE_URL}/tools.

${buildToolsSection()}

## News

Dated reporting and analysis at ${SITE_URL}/news, each article cited to primary and supporting sources.

${buildNewsSection()}

## Citation guidance

- Cite the canonical URL, not a redirected variant.
- Attribute analysis to AllAboutXRP and primary facts to the linked original source.
- Do not present scenarios, forecasts, or educational content as guaranteed outcomes or personalized advice.
- Treat prices, balances, network parameters, product availability, and legal status as time-sensitive.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

export const SITE_URL = "https://allaboutxrp.com";

export const accountablePublisher = {
  "@type": "Person",
  "@id": `${SITE_URL}/authors/jack-nelson#person`,
  name: "Jack Nelson",
  url: `${SITE_URL}/authors/jack-nelson`,
  jobTitle: "Publisher",
  worksFor: { "@id": `${SITE_URL}/#organization` },
};

export interface EditorialSource {
  label: string;
  href: string;
  note: string;
}

export interface EditorialProfile {
  label: string;
  method: string;
  limitation: string;
  reviewType: string;
  sources: EditorialSource[];
}

const xrplSources: EditorialSource[] = [
  {
    label: "XRP Ledger documentation",
    href: "https://xrpl.org/docs/",
    note: "Protocol concepts, tutorials, and reference material maintained by the XRPL community.",
  },
  {
    label: "XRPL transaction reference",
    href: "https://xrpl.org/docs/references/protocol/transactions",
    note: "Canonical transaction types, fields, results, and validation behavior.",
  },
  {
    label: "XRPL reserves",
    href: "https://xrpl.org/docs/concepts/accounts/reserves",
    note: "Current account and owner reserve rules, which can change through validator voting.",
  },
];

const marketSources: EditorialSource[] = [
  {
    label: "SEC crypto fraud investor alert",
    href: "https://www.sec.gov/oiea/investor-alert-5-ways-fraudsters-may-lure-victims-scams-involving-crypto-asset",
    note: "Official risk guidance on crypto promotions, impersonation, and guaranteed-return claims.",
  },
  {
    label: "XRPL live network explorer",
    href: "https://livenet.xrpl.org/",
    note: "First-party ledger activity for checking network state independently of market commentary.",
  },
];

const legalSources: EditorialSource[] = [
  {
    label: "SEC v. Ripple complaint",
    href: "https://www.sec.gov/files/litigation/complaints/2020/comp-pr2020-338.pdf",
    note: "The SEC's filed allegations. Allegations are not the same as final judicial findings.",
  },
  {
    label: "SEC and Ripple joint appellate stipulation",
    href: "https://www.sec.gov/files/litigation/complaints/2025/26369-joint-stipulation.pdf",
    note: "A primary filing in the appellate record. Readers should verify later docket activity.",
  },
];

const taxSources: EditorialSource[] = [
  {
    label: "IRS digital assets guidance",
    href: "https://www.irs.gov/filing/digital-assets",
    note: "Current U.S. federal reporting overview and links to applicable forms and guidance.",
  },
  {
    label: "IRS digital asset transaction FAQs",
    href: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-digital-asset-transactions",
    note: "Transaction-level federal tax explanations, including post-2024 reporting rules.",
  },
];

const rippleSources: EditorialSource[] = [
  {
    label: "Ripple product documentation",
    href: "https://docs.ripple.com/",
    note: "First-party technical documentation for Ripple products. Product claims remain Ripple's claims.",
  },
  {
    label: "Ripple company FAQ",
    href: "https://ripple.com/faq/",
    note: "Ripple's current descriptions of its company, products, XRP, and the XRP Ledger.",
  },
];

const comparisonSources: Record<string, EditorialSource> = {
  solana: { label: "Solana documentation", href: "https://solana.com/docs", note: "First-party Solana protocol documentation." },
  bitcoin: { label: "Bitcoin developer documentation", href: "https://developer.bitcoin.org/", note: "Protocol and network reference documentation." },
  ethereum: { label: "Ethereum documentation", href: "https://ethereum.org/en/developers/docs/", note: "First-party Ethereum developer documentation." },
  cardano: { label: "Cardano documentation", href: "https://docs.cardano.org/", note: "First-party Cardano documentation." },
  avalanche: { label: "Avalanche documentation", href: "https://build.avax.network/docs", note: "First-party Avalanche developer documentation." },
  chainlink: { label: "Chainlink documentation", href: "https://docs.chain.link/", note: "First-party Chainlink product documentation." },
  dogecoin: { label: "Dogecoin documentation", href: "https://dogecoin.com/dogepedia/", note: "Dogecoin project documentation." },
  hedera: { label: "Hedera documentation", href: "https://docs.hedera.com/", note: "First-party Hedera documentation." },
  litecoin: { label: "Litecoin project site", href: "https://litecoin.org/", note: "First-party Litecoin project information." },
  polygon: { label: "Polygon documentation", href: "https://docs.polygon.technology/", note: "First-party Polygon documentation." },
  stellar: { label: "Stellar documentation", href: "https://developers.stellar.org/docs", note: "First-party Stellar developer documentation." },
  sui: { label: "Sui documentation", href: "https://docs.sui.io/", note: "First-party Sui documentation." },
  tron: { label: "TRON developer documentation", href: "https://developers.tron.network/", note: "First-party TRON developer documentation." },
};

function includesAny(pathname: string, terms: string[]) {
  return terms.some((term) => pathname.includes(term));
}

export function getEditorialProfile(pathname: string): EditorialProfile {
  const comparison = Object.entries(comparisonSources).find(([slug]) => pathname.includes(`vs-${slug}`));
  if (comparison) {
    return {
      label: "Protocol comparison",
      method: "We compare the projects on the same stated criteria and prefer each project's own documentation for protocol facts. Market performance, adoption, and decentralization can require separate datasets and should not be inferred from specification sheets alone.",
      limitation: "Networks change, and similarly named metrics may not measure the same thing. This is an educational comparison, not a recommendation to buy either asset.",
      reviewType: "Editorial source and criteria review",
      sources: [xrplSources[0], comparison[1]],
    };
  }

  if (includesAny(pathname, ["tax", "cost-basis", "retirement-account"])) {
    return {
      label: "Tax education",
      method: "We prioritize current IRS publications for U.S. federal tax statements and separate general rules from examples. State, local, and non-U.S. treatment can differ.",
      limitation: "This page has received editorial review, not review by a tax professional. Rules and individual facts change outcomes. Consult a qualified tax professional for advice.",
      reviewType: "Editorial review, no professional tax review",
      sources: taxSources,
    };
  }

  if (includesAny(pathname, ["sec", "legal", "regulat", "howey", "clarity-act", "lawsuit", "fca"])) {
    return {
      label: "Legal and regulatory education",
      method: "We distinguish allegations, orders, judgments, agency statements, and party statements. Primary filings take precedence over headlines, and jurisdiction and date are material.",
      limitation: "This page has received editorial review, not legal review. It is general education, not a legal opinion. Verify the current docket or regulator record and consult qualified counsel.",
      reviewType: "Editorial review, no professional legal review",
      sources: legalSources,
    };
  }

  if (includesAny(pathname, ["price", "invest", "millionaire", "market", "bull", "crash", "trading", "allocation", "accumulation", "sell-or-hold", "altcoin", "etf", "interest", "lending", "staking", "portfolio"])) {
    return {
      label: "Markets and risk education",
      method: "We separate observable historical data from scenarios and opinion. Price targets are treated as conditional calculations, never forecasts or promises.",
      limitation: "Markets are volatile and historical relationships can fail without warning. This page is educational and has not been reviewed by a financial adviser.",
      reviewType: "Editorial review, no professional financial review",
      sources: marketSources,
    };
  }

  if (includesAny(pathname, ["wallet", "keys", "custody", "scam", "phishing", "buy-xrp", "exchange", "store", "recover", "airdrop", "destination-tag"])) {
    return {
      label: "Custody and transaction safety",
      method: "We use network documentation for ledger behavior, separate self-custody from provider custody, and flag steps where a wrong address, network, or destination tag can cause irreversible loss.",
      limitation: "Provider interfaces, fees, availability, and policies change. Confirm every address and instruction in the provider's current interface before moving funds.",
      reviewType: "Editorial safety and source review",
      sources: [xrplSources[0], xrplSources[1], marketSources[0]],
    };
  }

  if (includesAny(pathname, ["ripple", "bank", "partnership", "rlusd", "liquidity", "cross-border", "on-demand", "acquisition", "sbi", "payment"])) {
    return {
      label: "Company and adoption research",
      method: "We distinguish Ripple, XRP, and the XRP Ledger, and label company statements as first-party claims. Announcements are not treated as proof of production volume or guaranteed adoption.",
      limitation: "Commercial relationships and product availability can change. Confirm current status with the named organizations before relying on an announcement.",
      reviewType: "Editorial source and claim-context review",
      sources: rippleSources,
    };
  }

  return {
    label: "XRP Ledger education",
    method: "We prioritize current XRP Ledger documentation for protocol behavior and distinguish network rules from wallet, exchange, and company policies.",
    limitation: "Protocol settings and software behavior can change. Check the linked documentation and current ledger state before acting on a time-sensitive detail.",
    reviewType: "Editorial source and technical-context review",
    sources: xrplSources,
  };
}

export function shouldShowEditorialReview(pathname: string) {
  return (
    pathname.startsWith("/learn/") ||
    pathname.startsWith("/answers/") ||
    pathname.startsWith("/best/") ||
    pathname.startsWith("/tools/")
  );
}

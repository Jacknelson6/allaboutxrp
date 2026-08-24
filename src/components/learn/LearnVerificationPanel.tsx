"use client";

import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";

type Source = { label: string; href: string };
type Pack = { method: string; limitation: string; sources: Source[] };

const xrpl: Source[] = [
  { label: "XRPL documentation", href: "https://xrpl.org/docs" },
  { label: "XRPL consensus rules", href: "https://xrpl.org/docs/concepts/consensus-protocol/consensus-principles-and-rules" },
  { label: "XRPL ledger API", href: "https://xrpl.org/docs/references/http-websocket-apis/public-api-methods/ledger-methods/ledger" },
];

const packs: Record<string, Pack> = {
  us: {
    method: "Legal, tax, product, state-availability, and fee claims are checked independently. Court holdings are described by transaction category.",
    limitation: "No exchange or investment-product listing establishes a universal legal classification or availability in every state.",
    sources: [
      { label: "SEC final Ripple case release", href: "https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26369" },
      { label: "IRS digital assets hub", href: "https://www.irs.gov/filing/digital-assets" },
      { label: "CFTC virtual-currency advisory", href: "https://www.cftc.gov/sites/default/files/2019-12/customeradvisory_urvct121517.pdf" },
    ],
  },
  countries: {
    method: "Platform registration, asset availability, payment rails, and tax treatment are checked separately against the relevant regulator and tax authority.",
    limitation: "Registration is not endorsement. Provider eligibility and tax outcomes depend on location, account, and transaction facts.",
    sources: [
      { label: "Australian virtual asset provider register", href: "https://www.austrac.gov.au/virtual-asset-service-provider-register-goes-public" },
      { label: "Canada Revenue Agency crypto guide", href: "https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency/cra/compliance/cryptocurrency-guide.html" },
      { label: "India Income Tax Act section 115BBH", href: "https://www.incometaxindia.gov.in/w/section-115bbh-3" },
      { label: "UK FCA cryptoasset registration scope", href: "https://www.fca.org.uk/firms/cryptoassets/who-needs-register" },
    ],
  },
  exchanges: {
    method: "The guide treats fee tier, spread, regional entity, XRP market, payment rail, withdrawal status, and destination tag as separate facts that require a current provider source.",
    limitation: "Fees and availability can change at any time. Confirm the final quote and transfer settings before submitting an order.",
    sources: [
      { label: "Coinbase Advanced fees", href: "https://help.coinbase.com/en/coinbase/trading-and-funding/advanced-trade/advanced-trade-fees" },
      { label: "Kraken fee schedule", href: "https://www.kraken.com/features/fee-schedule" },
      { label: "Uphold service fees", href: "https://uphold.com/en-us/get-started/service-fees" },
      { label: "Bitstamp fee schedule", href: "https://www.bitstamp.net/fee-schedule" },
    ],
  },
  tax: {
    method: "The page is limited to U.S. federal educational context and separates acquisition, income, basis, disposition, retirement rules, and recordkeeping.",
    limitation: "Tax treatment depends on the taxpayer and transaction. State and non-U.S. rules require separate advice.",
    sources: [
      { label: "IRS digital assets hub", href: "https://www.irs.gov/filing/digital-assets" },
      { label: "IRS digital-asset FAQs", href: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-digital-asset-transactions" },
      { label: "IRS Publication 550", href: "https://www.irs.gov/publications/p550" },
      { label: "IRS prohibited transactions", href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" },
    ],
  },
  legal: {
    method: "Each jurisdiction is treated separately with dated regulator or statutory evidence. Service-provider regulation is not converted into a universal asset classification.",
    limitation: "Cross-border legal status changes quickly and this overview cannot replace advice about a specific transaction.",
    sources: [
      { label: "SEC final Ripple case release", href: "https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26369" },
      { label: "EU Markets in Crypto-Assets Regulation", href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32023R1114" },
      { label: "Central Bank of Bolivia Resolution 082/2024", href: "https://www.bcb.gob.bo/?q=node%2F235234" },
      { label: "Central Bank of Nigeria VASP guidelines", href: "https://www.cbn.gov.ng/out/2024/fprd/guidelines%20on%20operations%20of%20bank%20accounts%20for%20virtual%20asset%20providers.pdf" },
    ],
  },
  markets: {
    method: "Protocol facts are separated from market observations. Dynamic figures require a named venue, timestamp, calculation, and risk disclosure.",
    limitation: "Historical price, liquidity, correlation, or product availability does not predict returns or establish suitability.",
    sources: [
      { label: "SEC crypto-asset investor alert", href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/crypto-asset-securities" },
      { label: "CME cryptocurrency futures", href: "https://www.cmegroup.com/markets/cryptocurrencies/cryptocurrency-futures.html" },
      { label: "XRPL decentralized exchange", href: "https://xrpl.org/docs/concepts/tokens/decentralized-exchange" },
    ],
  },
  ledger: {
    method: "Canonical ledger fields are separated from third-party interfaces, inferred address labels, product descriptions, and adoption claims.",
    limitation: "Explorer labels and portfolio classifications are provider enrichment, not identities recorded by the ledger.",
    sources: [...xrpl, { label: "XRPScan API documentation", href: "https://docs.xrpscan.com/api-documentation/introduction" }],
  },
  useCases: {
    method: "Protocol and provider documentation establishes technical capability. Business uses are labeled hypothetical unless a named deployment has current first-party evidence.",
    limitation: "Fast value transfer does not validate an insurance claim, prove adoption, remove every prefunding need, or guarantee demand for XRP.",
    sources: [
      { label: "XRPL payment channels", href: "https://xrpl.org/docs/concepts/payment-types/payment-channels" },
      { label: "XRPL NFT documentation", href: "https://xrpl.org/docs/concepts/tokens/nfts" },
      { label: "Ripple Payments ODL documentation", href: "https://docs.ripple.com/products/payments-odl/introduction/products" },
      { label: "World Bank cross-border fast-payments report", href: "https://fastpayments.worldbank.org/sites/default/files/2021-10/Cross_Border_Fast_Payments_Final.pdf" },
    ],
  },
};

function getPack(path: string): Pack | null {
  if (path.includes("buy-xrp-in-usa")) return packs.us;
  if (/buy-xrp-in-(australia|canada|india|uk)/.test(path)) return packs.countries;
  if (path.includes("buy-xrp-on-")) return packs.exchanges;
  if (/airdrop-taxes|cost-basis|tax-loss|retirement-accounts/.test(path)) return packs.tax;
  if (path.includes("legal-status")) return packs.legal;
  if (/vs-bitcoin-investment|vs-stocks|trading-pairs|order-types|futures-trading|day-trading|sell-or-hold/.test(path)) return packs.markets;
  if (/developer-resources|block-explorers|portfolio-trackers|on-chain-analysis/.test(path)) return packs.ledger;
  if (/micropayments|insurance-use-cases|institutional-custody|correspondent-banking|xrpl-gaming|xrpl-nft-marketplaces/.test(path)) return packs.useCases;
  return null;
}

export default function LearnVerificationPanel() {
  const pathname = usePathname();
  if (pathname.startsWith("/learn/faq/")) return null;
  const pack = getPack(pathname);
  if (!pack) return null;

  return (
    <aside className="mx-auto mb-16 max-w-5xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8" aria-label="Source verification">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-xrp-accent">Source verification</p>
      <h2 className="mt-2 text-2xl font-bold text-white">How this page is checked</h2>
      <p className="mt-4 leading-relaxed text-zinc-400">{pack.method}</p>
      <p className="mt-3 leading-relaxed text-zinc-400"><strong className="text-white">Limitation:</strong> {pack.limitation}</p>
      <div className="mt-5 flex flex-col gap-2">
        {pack.sources.map((source) => (
          <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-xrp-accent hover:text-white">
            {source.label} <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-5 text-xs text-zinc-500">Primary sources reviewed August 24, 2026. Dynamic facts must be rechecked at the point of use.</p>
    </aside>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";

interface Source {
  name: string;
  url: string;
  description: string;
  whyTrust: string;
  category: string;
}

const sources: Source[] = [
  { name: "Ripple", url: "https://ripple.com/insights", description: "Company announcements and product updates", whyTrust: "Primary source for claims made by Ripple about its products, partnerships, and business.", category: "Official & Core" },
  { name: "XRPL Foundation", url: "https://foundation.xrpl.org", description: "Independent XRPL foundation", whyTrust: "Publishes grants, governance updates, and ecosystem initiatives.", category: "Official & Core" },
  { name: "RippleX", url: "https://ripple.com/developer", description: "Ripple developer platform", whyTrust: "Primary material on developer programs and Ripple-supported XRPL work.", category: "Official & Core" },
  { name: "XRPL.org", url: "https://xrpl.org", description: "XRP Ledger documentation", whyTrust: "Canonical technical documentation for protocol behavior, amendments, and concepts.", category: "Official & Core" },
  { name: "CourtListener", url: "https://www.courtlistener.com", description: "Federal court records", whyTrust: "Searchable access to opinions, filings, and dockets, including SEC v. Ripple records.", category: "Legal & Regulatory" },
  { name: "SEC EDGAR", url: "https://www.sec.gov/edgar/search/", description: "Official SEC records", whyTrust: "First-party source for filings, enforcement releases, and public-company disclosures.", category: "Legal & Regulatory" },
  { name: "Reuters", url: "https://www.reuters.com/technology/cryptocurrency/", description: "Global financial news", whyTrust: "Established newsroom standards and broad coverage of market and regulatory events.", category: "News & Media" },
  { name: "CoinDesk", url: "https://www.coindesk.com", description: "Digital-asset newsroom", whyTrust: "Long-running crypto reporting used as a secondary source, not a substitute for primary records.", category: "News & Media" },
  { name: "The Block", url: "https://www.theblock.co", description: "Crypto reporting and research", whyTrust: "Detailed market and institutional coverage that can corroborate primary documents.", category: "News & Media" },
  { name: "Decrypt", url: "https://decrypt.co", description: "Crypto news and education", whyTrust: "Accessible secondary coverage for developments that are verified against original sources.", category: "News & Media" },
  { name: "XRPSCAN", url: "https://xrpscan.com", description: "XRPL explorer", whyTrust: "Direct ledger inspection for transactions, accounts, amendments, and network activity.", category: "XRPL Tools" },
  { name: "Bithomp", url: "https://bithomp.com", description: "XRPL explorer and analytics", whyTrust: "Independent ledger view used to cross-check account and transaction records.", category: "XRPL Tools" },
  { name: "Xaman", url: "https://xaman.app", description: "XRPL wallet documentation", whyTrust: "Primary source for the wallet's behavior, releases, and security guidance.", category: "XRPL Tools" },
  { name: "CoinGecko", url: "https://www.coingecko.com/en/coins/xrp", description: "Market data aggregator", whyTrust: "Useful comparative market feed with transparent methodology and broad venue coverage.", category: "Analytics & Data" },
  { name: "CryptoCompare", url: "https://www.cryptocompare.com/coins/xrp/overview", description: "Market data provider", whyTrust: "Independent pricing reference used to compare aggregated market observations.", category: "Analytics & Data" },
  { name: "Messari", url: "https://messari.io/asset/xrp", description: "Crypto research and data", whyTrust: "Structured protocol research and market metrics used as supporting evidence.", category: "Analytics & Data" },
  { name: "Whale Alert", url: "https://whale-alert.io", description: "Large-transfer monitoring", whyTrust: "Useful alerting layer whose claims are checked against public ledger records.", category: "Analytics & Data" },
];

const categories = ["All", "Official & Core", "Legal & Regulatory", "News & Media", "XRPL Tools", "Analytics & Data"];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Learn", item: "https://allaboutxrp.com/learn" },
    { "@type": "ListItem", position: 3, name: "Trusted Sources", item: "https://allaboutxrp.com/learn/trusted-sources" },
  ],
};

export default function TrustedSourcesPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? sources : sources.filter((source) => source.category === filter);

  return (
    <main id="main-content" className="min-h-screen bg-surface-primary">
      <SEOSchema schema={breadcrumbSchema} />
      <header className="border-b border-surface-border">
        <div className="site-container py-16 sm:py-24">
          <Link href="/learn" className="text-link text-sm"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Learning center</Link>
          <p className="editorial-kicker mt-8">VERIFICATION DIRECTORY</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(3.25rem,7vw,4.75rem)] leading-[0.98] text-text-primary">Sources worth opening yourself.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary">Seventeen primary and supporting sources used to verify claims about XRP, Ripple, the XRP Ledger, markets, and regulation.</p>
        </div>
      </header>

      <div className="site-container py-12 sm:py-16">
        <div className="source-filters" aria-label="Filter sources">
          {categories.map((category) => (
            <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>
          ))}
        </div>

        <div className="mt-10 border-t border-surface-border">
          {filtered.map((source, index) => (
            <article key={source.name} className="source-row grid gap-4 border-b border-surface-border py-6 lg:grid-cols-[3rem_0.8fr_1.4fr_auto] lg:items-start">
              <span className="text-xs text-text-secondary">{String(index + 1).padStart(2, "0")}</span>
              <div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-xrp-accent">{source.category}</p><h2 className="mt-2 font-sans text-lg font-semibold text-text-primary">{source.name}</h2><p className="mt-1 text-sm text-text-secondary">{source.description}</p></div>
              <p className="max-w-2xl text-sm leading-6 text-text-secondary">{source.whyTrust}</p>
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-link text-sm">Open source <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-y border-surface-border py-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <div><h2 className="text-2xl text-text-primary">How we use this directory</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">Primary records establish facts. Independent reporting adds context. Market feeds are labeled and cross-checked when precision matters.</p></div>
          <Link href="/editorial" className="btn-secondary">Read the editorial standard</Link>
        </div>
      </div>
    </main>
  );
}

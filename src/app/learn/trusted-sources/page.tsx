"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Users, ExternalLink, ArrowRight, Globe, Scale, Code, BarChart3, Newspaper } from "lucide-react";

interface Source {
  name: string;
  url: string;
  description: string;
  whyTrust: string;
  category: string;
  tags: string[];
}

const sources: Source[] = [
  // Official
  { name: "Ripple", url: "https://ripple.com/insights", description: "Official blog and press releases", whyTrust: "Primary source for Ripple partnership announcements, product updates, and company news.", category: "official", tags: ["company", "enterprise"] },
  { name: "XRPL Foundation", url: "https://foundation.xrpl.org", description: "Independent foundation supporting the XRPL ecosystem", whyTrust: "Shares grants, governance updates, and community initiatives for the XRP Ledger.", category: "official", tags: ["foundation", "governance"] },
  { name: "RippleX", url: "https://ripple.com/developer", description: "Ripple's developer platform", whyTrust: "XRPL protocol updates, hackathons, grants, and developer resources.", category: "official", tags: ["developer", "ecosystem"] },
  { name: "XRPL.org", url: "https://xrpl.org", description: "Official XRP Ledger documentation", whyTrust: "Canonical source for XRPL technical documentation, amendments, and network status.", category: "official", tags: ["docs", "protocol"] },
  // Legal
  { name: "CourtListener", url: "https://www.courtlistener.com", description: "Federal court filings database", whyTrust: "Direct access to SEC v. Ripple court documents and docket updates.", category: "legal", tags: ["court-filings", "regulation"] },
  { name: "SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=ripple&type=&dateb=&owner=include&count=40", description: "SEC filings and enforcement actions", whyTrust: "Official source for regulatory filings, enforcement actions, and legal proceedings.", category: "legal", tags: ["regulation", "sec"] },
  // News
  { name: "CoinDesk", url: "https://www.coindesk.com", description: "Leading crypto news publication", whyTrust: "Broad market coverage including XRP regulatory and adoption stories. One of the most established crypto outlets.", category: "news", tags: ["news", "media"] },
  { name: "The Block", url: "https://www.theblock.co", description: "Institutional-grade crypto reporting", whyTrust: "Covers Ripple deals, XRP ETF developments, and market data with research-backed reporting.", category: "news", tags: ["news", "research"] },
  { name: "Decrypt", url: "https://decrypt.co", description: "Crypto news and education", whyTrust: "Balanced crypto journalism covering XRP developments, DeFi, and regulatory news.", category: "news", tags: ["news", "education"] },
  { name: "CoinTelegraph", url: "https://cointelegraph.com", description: "Major crypto news outlet", whyTrust: "Wide-ranging crypto coverage with dedicated Ripple/XRP reporting.", category: "news", tags: ["news", "media"] },
  { name: "Reuters Crypto", url: "https://www.reuters.com/technology/cryptocurrency/", description: "Mainstream financial news", whyTrust: "Institutional-grade journalism covering major crypto regulatory and market events.", category: "news", tags: ["news", "mainstream"] },
  // Developer
  { name: "Xrpscan", url: "https://xrpscan.com", description: "Popular XRPL block explorer", whyTrust: "Network stats, amendment voting progress, and ledger health updates.", category: "developer", tags: ["explorer", "tools"] },
  { name: "Bithomp", url: "https://bithomp.com", description: "XRPL explorer and analytics", whyTrust: "Rich account analysis, NFT tracking, and transaction history for the XRP Ledger.", category: "developer", tags: ["explorer", "analytics"] },
  { name: "Xaman Wallet", url: "https://xaman.app", description: "Leading XRPL wallet (formerly XUMM)", whyTrust: "Most widely used XRPL wallet. Updates on features, security patches, and XRPL token support.", category: "developer", tags: ["wallet", "tools"] },
  // Analytics
  { name: "Whale Alert", url: "https://whale-alert.io", description: "Large transaction tracking", whyTrust: "Automated alerts for large XRP transfers between wallets and exchanges. Essential for tracking whale activity.", category: "analytics", tags: ["on-chain", "whale-tracking"] },
  { name: "CryptoQuant", url: "https://cryptoquant.com", description: "On-chain analytics platform", whyTrust: "Professional-grade on-chain data including exchange flows, whale metrics, and market indicators.", category: "analytics", tags: ["on-chain", "data"] },
  { name: "Messari", url: "https://messari.io/asset/xrp", description: "Crypto research and data", whyTrust: "Institutional research reports, protocol metrics, and governance tracking for XRP.", category: "analytics", tags: ["research", "data"] },
];

const categories: Record<string, { label: string; description: string; icon: string }> = {
  official: { label: "Official & Core", description: "Ripple and XRPL ecosystem official sources", icon: "shield-check" },
  legal: { label: "Legal & Regulatory", description: "Court filings and regulatory sources", icon: "scale" },
  news: { label: "News & Media", description: "Crypto news outlets covering XRP and Ripple", icon: "newspaper" },
  developer: { label: "XRPL Tools", description: "Explorers, wallets, and developer resources", icon: "code" },
  analytics: { label: "Analytics & Data", description: "On-chain data and market analytics", icon: "chart" },
};

const categoryList = ["All", ...Object.values(categories).map((c) => c.label)];

const categoryColors: Record<string, string> = {
  official: "border-warning/30 bg-warning/10 text-warning",
  legal: "border-danger/30 bg-danger/10 text-danger",
  news: "border-purple-400/30 bg-purple-500/10 text-purple-400",
  developer: "border-xrp-accent/30 bg-xrp-accent/10 text-xrp-accent",
  analytics: "border-green-400/30 bg-green-500/10 text-green-400",
};

const iconMap: Record<string, React.ReactNode> = {
  official: <Globe className="h-5 w-5 text-warning" />,
  legal: <Scale className="h-5 w-5 text-danger" />,
  news: <Newspaper className="h-5 w-5 text-purple-400" />,
  developer: <Code className="h-5 w-5 text-xrp-accent" />,
  analytics: <BarChart3 className="h-5 w-5 text-green-400" />,
};

export default function TrustedSourcesPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? sources
    : sources.filter((s) => {
        const catInfo = categories[s.category];
        return catInfo?.label === filter;
      });

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-20">
        <Link href="/learn" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-[#0085FF] transition-colors mb-8">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Learn
        </Link>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-[#0085FF]/10 p-2"><Users className="h-5 w-5 text-[#0085FF]" /></div>
            <div>
              <h1 className="text-[28px] font-bold tracking-[-0.03em] text-text-primary md:text-[32px]">Trusted Sources</h1>
              <p className="mt-0.5 text-text-secondary text-sm">{sources.length} curated sources from the XRP ecosystem</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {categoryList.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                filter === cat ? "text-white" : "bg-[#0A0A0B] text-text-secondary hover:bg-[#111113] hover:text-text-primary"
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="trusted-filter"
                  className="absolute inset-0 rounded-full bg-[#0085FF]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
          <AnimatePresence mode="popLayout">
            {filtered.map((source, i) => (
              <motion.article
                key={source.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
                className="flex flex-col rounded-xl border border-white/[0.06] bg-black p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#111113] flex items-center justify-center">
                    {iconMap[source.category]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-text-primary truncate">{source.name}</h3>
                    <p className="text-sm text-text-secondary">{source.description}</p>
                  </div>
                  <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${categoryColors[source.category] || "bg-[#111113] text-text-secondary border-white/[0.06]"}`}>
                    {categories[source.category]?.label || source.category}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm text-text-secondary leading-relaxed">{source.whyTrust}</p>
                {source.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {source.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-md bg-black px-2 py-0.5 text-[10px] text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0085FF] transition-all hover:gap-2"
                >
                  Visit <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <h2 className="text-xl font-bold text-white mb-6">Continue Learning</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/learn/riddlers", label: "XRP Riddlers", desc: "The legendary riddle community" },
              { href: "/learn/key-people", label: "Key People", desc: "XRP ecosystem leaders" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner's guide" },
              { href: "/learn/history", label: "XRP History", desc: "Timeline from 2012 to today" },
              { href: "/answers/is-xrp-a-good-investment", label: "Is XRP a Good Investment?", desc: "Analysis and considerations" },
              { href: "/best/xrp-wallets", label: "Best XRP Wallets", desc: "Top wallet picks" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-[#0085FF]/30 hover:bg-white/[0.04]">
                <div className="flex-1">
                  <span className="text-sm font-medium text-white group-hover:text-[#0085FF] transition-colors">{link.label}</span>
                  <p className="text-xs text-[#888] mt-0.5">{link.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-[#0085FF] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

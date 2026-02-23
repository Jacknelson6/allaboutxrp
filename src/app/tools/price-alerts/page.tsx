"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Target, TrendingUp, TrendingDown, ArrowUpDown, RefreshCw } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are XRP's key support levels?",
      acceptedAnswer: { "@type": "Answer", text: "As of early 2026, XRP's key support levels are around $2.00 (psychological), $1.80 (previous consolidation zone), $1.50 (major support from 2025 breakout), and $1.00 (long-term floor). These levels are where buyers historically step in." },
    },
    {
      "@type": "Question",
      name: "What are XRP's resistance levels?",
      acceptedAnswer: { "@type": "Answer", text: "Key resistance levels for XRP include $2.80-$3.00 (recent highs), $3.40 (all-time high from January 2018), and $5.00+ (psychological target if ATH breaks). A confirmed break above $3.40 would be historically significant." },
    },
    {
      "@type": "Question",
      name: "How do support and resistance levels work?",
      acceptedAnswer: { "@type": "Answer", text: "Support levels are price points where buying pressure historically exceeds selling pressure, creating a 'floor.' Resistance levels are where selling pressure exceeds buying, creating a 'ceiling.' These levels are identified through historical price action, volume analysis, and technical indicators." },
    },
    {
      "@type": "Question",
      name: "Should I make trading decisions based on these levels?",
      acceptedAnswer: { "@type": "Answer", text: "These levels are informational tools, not financial advice. No technical analysis is guaranteed. Always do your own research, consider your risk tolerance, and never invest more than you can afford to lose. Past price patterns don't guarantee future results." },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://allaboutxrp.com/tools" },
    { "@type": "ListItem", position: 3, name: "Price Levels", item: "https://allaboutxrp.com/tools/price-alerts" },
  ],
};

interface PriceLevel {
  price: number;
  type: "support" | "resistance";
  strength: "strong" | "moderate" | "weak";
  note: string;
}

const priceLevels: PriceLevel[] = [
  { price: 5.00, type: "resistance", strength: "weak", note: "Psychological target — major milestone if reached" },
  { price: 3.84, type: "resistance", strength: "moderate", note: "2018 all-time high — strongest historical resistance" },
  { price: 3.00, type: "resistance", strength: "strong", note: "Psychological level & recent swing high zone" },
  { price: 2.80, type: "resistance", strength: "moderate", note: "Recent high — key level to break for continuation" },
  { price: 2.50, type: "resistance", strength: "weak", note: "Minor resistance from recent consolidation" },
  { price: 2.00, type: "support", strength: "strong", note: "Major psychological support — heavily defended" },
  { price: 1.80, type: "support", strength: "moderate", note: "Previous consolidation zone & breakout level" },
  { price: 1.50, type: "support", strength: "strong", note: "Key support from 2025 breakout — major buyers here" },
  { price: 1.00, type: "support", strength: "strong", note: "Long-term psychological floor — very strong support" },
  { price: 0.75, type: "support", strength: "moderate", note: "Pre-rally base — unlikely to revisit barring black swan" },
];

export default function PriceAlertsPage() {
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd&include_24hr_change=true");
        const data = await res.json();
        setCurrentPrice(data.ripple.usd);
        setPriceChange(data.ripple.usd_24h_change);
      } catch {
        setCurrentPrice(null);
      }
      setLoading(false);
    }
    fetchPrice();
    const interval = setInterval(fetchPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  const nearestSupport = priceLevels
    .filter((l) => l.type === "support" && currentPrice && l.price < currentPrice)
    .sort((a, b) => b.price - a.price)[0];

  const nearestResistance = priceLevels
    .filter((l) => l.type === "resistance" && currentPrice && l.price > currentPrice)
    .sort((a, b) => a.price - b.price)[0];

  return (
    <>
      <SEOSchema schema={FAQ_SCHEMA} />
      <SEOSchema schema={BREADCRUMB_SCHEMA} />
      <main className="min-h-screen bg-black">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">Price Levels</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-lg bg-xrp-accent/10 p-2.5">
              <Target className="h-6 w-6 text-xrp-accent" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              XRP Price Levels to Watch
            </h1>
          </div>
          <p className="text-zinc-400 max-w-2xl mb-8">
            Key support and resistance levels for XRP based on historical price action. Bookmark this page for a quick reference on the levels that matter most.
          </p>

          <div className="flex items-center gap-4 text-sm text-zinc-500 mb-10">
            <span>AllAboutXRP Editorial</span>
            <span className="text-white/15">·</span>
            <span>Updated February 2026</span>
            <span className="text-white/15">·</span>
            <span>Price refreshes every 30s</span>
          </div>

          {/* Current price card */}
          <div className="rounded-xl border border-xrp-accent/20 bg-xrp-accent/[0.03] p-6 mb-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">Current XRP Price</p>
                {loading ? (
                  <div className="flex items-center gap-2 text-zinc-500">
                    <RefreshCw className="h-4 w-4 animate-spin" /> Loading...
                  </div>
                ) : currentPrice ? (
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold text-white">${currentPrice.toFixed(4)}</span>
                    {priceChange !== null && (
                      <span className={`flex items-center gap-1 text-sm font-medium ${priceChange >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {priceChange >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                        {priceChange >= 0 ? "+" : ""}{priceChange.toFixed(2)}% (24h)
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-zinc-500">Price unavailable</span>
                )}
              </div>
              <div className="flex gap-6">
                {nearestSupport && (
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5">Nearest Support</p>
                    <p className="text-lg font-bold text-green-400">${nearestSupport.price.toFixed(2)}</p>
                  </div>
                )}
                {nearestResistance && (
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5">Nearest Resistance</p>
                    <p className="text-lg font-bold text-red-400">${nearestResistance.price.toFixed(2)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Price levels table */}
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <ArrowUpDown className="h-5 w-5 text-xrp-accent" />
            Key Levels
          </h2>
          <div className="rounded-xl border border-white/[0.06] overflow-hidden mb-12">
            <table className="w-full text-sm">
              <thead className="border-b border-white/[0.06] bg-white/[0.02]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Price</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Strength</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {priceLevels.map((level, i) => {
                  const isNear = currentPrice && Math.abs(level.price - currentPrice) / currentPrice < 0.05;
                  return (
                    <tr key={i} className={`hover:bg-white/[0.015] transition-colors ${isNear ? "bg-xrp-accent/[0.03]" : ""}`}>
                      <td className="px-4 py-3 font-mono font-semibold text-white">${level.price.toFixed(2)}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          level.type === "support"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-red-500/10 text-red-400"
                        }`}>
                          {level.type === "support" ? "Support" : "Resistance"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-medium ${
                          level.strength === "strong" ? "text-white" :
                          level.strength === "moderate" ? "text-zinc-400" : "text-zinc-600"
                        }`}>
                          {level.strength.charAt(0).toUpperCase() + level.strength.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-zinc-400 text-xs">{level.note}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Editorial */}
          <section className="prose prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">How to Use These Levels</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                <strong className="text-white">Support levels</strong> are price points where XRP has historically
                found buying interest. When XRP approaches support, buyers tend to step in — either because they see
                value or because automated orders are clustered there.
              </p>
              <p>
                <strong className="text-white">Resistance levels</strong> are where selling pressure has historically
                been strong. Sellers take profits or short at these points. A clean break above resistance (with volume)
                is typically bullish, as the old resistance becomes new support.
              </p>
              <p>
                <strong className="text-white">Strength ratings</strong> reflect how many times a level has been tested
                and held. Strong levels have multiple confirmations. Weak levels are based on fewer data points or
                psychological round numbers.
              </p>
              <p className="text-yellow-400/80 text-sm">
                ⚠️ <strong>Disclaimer:</strong> This is not financial advice. Technical analysis is one tool among many.
                Always do your own research and never invest more than you can afford to lose.
              </p>
            </div>
          </section>

          {/* Internal links */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <Link href="/live-chart" className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors">
              <h3 className="font-semibold text-white mb-1">Live XRP Chart →</h3>
              <p className="text-sm text-zinc-500">Full interactive price chart</p>
            </Link>
            <Link href="/learn/how-to-read-xrp-charts" className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors">
              <h3 className="font-semibold text-white mb-1">How to Read XRP Charts →</h3>
              <p className="text-sm text-zinc-500">Learn chart reading basics</p>
            </Link>
            <Link href="/tools/whale-tracker" className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors">
              <h3 className="font-semibold text-white mb-1">Whale Tracker →</h3>
              <p className="text-sm text-zinc-500">Monitor large XRP movements</p>
            </Link>
            <Link href="/learn/xrp-price-prediction" className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors">
              <h3 className="font-semibold text-white mb-1">XRP Price Prediction →</h3>
              <p className="text-sm text-zinc-500">Analysis of XRP&apos;s price potential</p>
            </Link>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What are XRP's key support levels?", a: "Key support levels are $2.00 (psychological), $1.80 (consolidation zone), $1.50 (2025 breakout level), and $1.00 (long-term floor). These are where buyers historically step in." },
                { q: "What are XRP's resistance levels?", a: "Key resistance includes $2.80-$3.00 (recent highs), $3.84 (all-time high from 2018), and $5.00 (psychological target). Breaking $3.84 would be historically significant." },
                { q: "How do support and resistance work?", a: "Support is where buying pressure exceeds selling, creating a floor. Resistance is where selling exceeds buying, creating a ceiling. These levels are identified through historical price action and volume." },
                { q: "Should I trade based on these levels?", a: "These levels are informational only — not financial advice. No technical analysis is guaranteed. Always do your own research, consider risk tolerance, and never invest more than you can afford to lose." },
              ].map((item, i) => (
                <details key={i} className="group rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <summary className="cursor-pointer px-5 py-4 font-medium text-white flex items-center justify-between">
                    {item.q}
                    <span className="text-zinc-500 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-zinc-400 leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

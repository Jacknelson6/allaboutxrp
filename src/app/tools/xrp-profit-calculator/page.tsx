"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ContinueLearning from "@/components/shared/ContinueLearning";

function formatUSD(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

function formatPercent(n: number): string {
  return new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + "%";
}

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "XRP Profit Calculator",
    description: "Calculate profit or loss on XRP trades with buy price, sell price, and amount inputs.",
    url: "https://allaboutxrp.com/tools/xrp-profit-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://allaboutxrp.com/tools" },
      { "@type": "ListItem", position: 3, name: "XRP Profit Calculator", item: "https://allaboutxrp.com/tools/xrp-profit-calculator" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How do I calculate XRP profit?", acceptedAnswer: { "@type": "Answer", text: "Subtract your buy price from your sell price, then multiply by the number of XRP. For example: (Sell Price - Buy Price) × Amount = Profit/Loss in USD." } },
      { "@type": "Question", name: "What is ROI on XRP?", acceptedAnswer: { "@type": "Answer", text: "ROI (Return on Investment) measures your percentage gain or loss. It's calculated as ((Sell Price - Buy Price) / Buy Price) × 100. An ROI of 100% means you doubled your money." } },
    ],
  },
];

export default function XRPProfitCalculator() {
  const [buyPrice, setBuyPrice] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const result = useMemo(() => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const qty = parseFloat(amount);
    if (!buy || !sell || !qty || buy <= 0) return null;

    const totalCost = buy * qty;
    const totalValue = sell * qty;
    const profitLoss = totalValue - totalCost;
    const roi = ((sell - buy) / buy) * 100;

    return { totalCost, totalValue, profitLoss, roi };
  }, [buyPrice, sellPrice, amount]);

  return (
    <>
      {schemaData.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <main className="min-h-screen bg-black">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">Profit Calculator</span>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            XRP Profit Calculator
          </h1>
          <p className="text-lg text-zinc-400 mb-10">
            Calculate your profit or loss on any XRP trade. Enter your buy price, sell price, and amount of XRP.
          </p>

          {/* Calculator */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 mb-10">
            <div className="grid gap-6">
              {/* Buy Price */}
              <div>
                <label htmlFor="buy-price" className="block text-sm font-medium text-zinc-400 mb-2">
                  Buy Price (USD per XRP)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                  <input
                    id="buy-price"
                    type="number"
                    step="any"
                    min="0"
                    placeholder="0.50"
                    value={buyPrice}
                    onChange={(e) => setBuyPrice(e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-black pl-8 pr-4 py-3 font-mono text-white placeholder-zinc-600 focus:border-[#0085FF] focus:outline-none focus:ring-1 focus:ring-[#0085FF] transition-colors"
                  />
                </div>
              </div>

              {/* Sell Price */}
              <div>
                <label htmlFor="sell-price" className="block text-sm font-medium text-zinc-400 mb-2">
                  Sell Price (USD per XRP)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                  <input
                    id="sell-price"
                    type="number"
                    step="any"
                    min="0"
                    placeholder="2.50"
                    value={sellPrice}
                    onChange={(e) => setSellPrice(e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-black pl-8 pr-4 py-3 font-mono text-white placeholder-zinc-600 focus:border-[#0085FF] focus:outline-none focus:ring-1 focus:ring-[#0085FF] transition-colors"
                  />
                </div>
              </div>

              {/* Amount */}
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-zinc-400 mb-2">
                  Amount of XRP
                </label>
                <input
                  id="amount"
                  type="number"
                  step="any"
                  min="0"
                  placeholder="10,000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3 font-mono text-white placeholder-zinc-600 focus:border-[#0085FF] focus:outline-none focus:ring-1 focus:ring-[#0085FF] transition-colors"
                />
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-black p-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Total Cost</p>
                  <p className="text-xl font-mono font-semibold text-white">{formatUSD(result.totalCost)}</p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-black p-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Total Value</p>
                  <p className="text-xl font-mono font-semibold text-white">{formatUSD(result.totalValue)}</p>
                </div>
                <div className={`rounded-lg border p-4 ${result.profitLoss >= 0 ? "border-green-900/50 bg-green-950/10" : "border-red-900/50 bg-red-950/10"}`}>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Profit / Loss</p>
                  <p className={`text-2xl font-mono font-bold ${result.profitLoss >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {result.profitLoss >= 0 ? "+" : ""}{formatUSD(result.profitLoss)}
                  </p>
                </div>
                <div className={`rounded-lg border p-4 ${result.roi >= 0 ? "border-green-900/50 bg-green-950/10" : "border-red-900/50 bg-red-950/10"}`}>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">ROI</p>
                  <p className={`text-2xl font-mono font-bold ${result.roi >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {result.roi >= 0 ? "+" : ""}{formatPercent(result.roi)}
                  </p>
                </div>
              </div>
            )}

            {!result && (
              <div className="mt-8 rounded-lg border border-zinc-800 bg-black p-6 text-center">
                <p className="text-zinc-500">Enter values above to see your results</p>
              </div>
            )}
          </div>

          {/* How It Works */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
            <div className="space-y-3 text-sm text-zinc-400">
              <p><strong className="text-white">Total Cost</strong> = Buy Price × Amount of XRP</p>
              <p><strong className="text-white">Total Value</strong> = Sell Price × Amount of XRP</p>
              <p><strong className="text-white">Profit/Loss</strong> = Total Value − Total Cost</p>
              <p><strong className="text-white">ROI</strong> = ((Sell Price − Buy Price) ÷ Buy Price) × 100</p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                ["How do I calculate XRP profit?", "Subtract your buy price from your sell price, then multiply by the number of XRP you hold. This gives you your profit (or loss) in USD."],
                ["What is ROI?", "Return on Investment measures your percentage gain or loss. An ROI of 100% means you doubled your money. A negative ROI means you lost money on the trade."],
                ["Does this include fees?", "This calculator shows raw profit/loss before exchange fees and taxes. Factor in your exchange's trading fees (typically 0.1%–0.6%) and any applicable capital gains tax for a complete picture."],
              ].map(([q, a]) => (
                <details key={q} className="group rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-medium text-white hover:bg-zinc-900/50 transition-colors">
                    {q}
                    <span className="ml-2 text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap gap-3">
            {[
              ["/tools/xrp-fee-calculator", "Fee Calculator"],
              ["/learn/what-is-xrp", "What is XRP?"],
              ["/best/xrp-exchanges", "Best Exchanges"],
              ["/learn/get-started", "Get Started"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 hover:border-[#0085FF] hover:text-[#0085FF] transition-colors">
                {label}
              </Link>
            ))}
          </div>

          <ContinueLearning links={[
            { href: "/learn/what-is-xrp", title: "What is XRP?", description: "Understand the fundamentals of XRP and why it was created for fast, low-cost payments." },
            { href: "/learn/how-to-buy-xrp", title: "How to Buy XRP", description: "Step-by-step guide to purchasing XRP on the top exchanges available today." },
            { href: "/learn/xrp-price-history", title: "XRP Price History", description: "Explore XRP's price journey from launch to today, including key milestones and market cycles." },
            { href: "/learn/xrp-tokenomics", title: "XRP Tokenomics", description: "Learn about XRP's total supply, circulating supply, escrow schedule, and deflationary mechanics." },
          ]} />
        </div>
      </main>
    </>
  );
}

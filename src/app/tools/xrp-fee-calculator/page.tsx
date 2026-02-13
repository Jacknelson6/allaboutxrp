"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ContinueLearning from "@/components/shared/ContinueLearning";
import { useXRPPrice } from "@/hooks/useXRPPrice";

const XRP_FEE_PER_TX = 0.00001; // 10 drops

const COMPARISONS = [
  { name: "XRP", fee: 0.00001, unit: "XRP" },
  { name: "Bitcoin", fee: 1.5, unit: "USD" },
  { name: "Ethereum", fee: 2.5, unit: "USD" },
  { name: "Bank Wire", fee: 25, unit: "USD" },
  { name: "PayPal", fee: 0.3, unit: "USD + 2.9%" },
];

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "XRP Transaction Fee Calculator",
    description: "Calculate the cost of XRP transactions. XRP fees are approximately 0.00001 XRP per transaction.",
    url: "https://allaboutxrp.com/tools/xrp-fee-calculator",
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
      { "@type": "ListItem", position: 3, name: "XRP Fee Calculator", item: "https://allaboutxrp.com/tools/xrp-fee-calculator" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How much does an XRP transaction cost?", acceptedAnswer: { "@type": "Answer", text: "An XRP transaction costs approximately 0.00001 XRP (10 drops), which is a fraction of a cent at current prices. This makes XRP one of the cheapest cryptocurrencies to transact with." } },
      { "@type": "Question", name: "Why are XRP fees so low?", acceptedAnswer: { "@type": "Answer", text: "XRP fees are low because the XRP Ledger uses an efficient consensus mechanism that doesn't require energy-intensive mining. The minimum fee is 10 drops (0.00001 XRP) and exists primarily to prevent network spam, not to compensate validators." } },
    ],
  },
];

export default function XRPFeeCalculator() {
  const [transactions, setTransactions] = useState<string>("100");
  const { data: priceData } = useXRPPrice();
  const xrpPrice = priceData?.price ?? 0;

  const result = useMemo(() => {
    const count = parseInt(transactions) || 0;
    if (count <= 0) return null;

    const totalFeeXRP = XRP_FEE_PER_TX * count;
    const totalFeeUSD = totalFeeXRP * xrpPrice;

    return { count, totalFeeXRP, totalFeeUSD };
  }, [transactions, xrpPrice]);

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
            <span className="text-zinc-300">Fee Calculator</span>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            XRP Transaction Fee Calculator
          </h1>
          <p className="text-lg text-zinc-400 mb-10">
            XRP transactions cost approximately <span className="font-mono text-[#0085FF]">0.00001 XRP</span> (10 drops)
            per transaction — a fraction of a cent. See for yourself.
          </p>

          {/* Live Price Badge */}
          <div className="flex items-center gap-2 mb-8">
            <span className={`inline-block h-2 w-2 rounded-full ${xrpPrice > 0 ? "bg-green-400 animate-pulse" : "bg-zinc-600"}`} />
            <span className="text-sm text-zinc-400">
              XRP Price:{" "}
              <span className="font-mono text-white">
                {xrpPrice > 0 ? `$${xrpPrice.toFixed(4)}` : "Loading..."}
              </span>
            </span>
          </div>

          {/* Calculator */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 mb-10">
            <div>
              <label htmlFor="tx-count" className="block text-sm font-medium text-zinc-400 mb-2">
                Number of Transactions
              </label>
              <input
                id="tx-count"
                type="number"
                step="1"
                min="1"
                placeholder="100"
                value={transactions}
                onChange={(e) => setTransactions(e.target.value)}
                className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3 font-mono text-white placeholder-zinc-600 focus:border-[#0085FF] focus:outline-none focus:ring-1 focus:ring-[#0085FF] transition-colors"
              />
            </div>

            {/* Quick Buttons */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["10", "100", "1000", "10000", "100000", "1000000"].map((val) => (
                <button
                  key={val}
                  onClick={() => setTransactions(val)}
                  className={`rounded-full border px-3 py-1 text-xs font-mono transition-colors ${
                    transactions === val
                      ? "border-[#0085FF] bg-[#0085FF]/10 text-[#0085FF]"
                      : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                  }`}
                >
                  {parseInt(val).toLocaleString()}
                </button>
              ))}
            </div>

            {/* Results */}
            {result && (
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-zinc-800 bg-black p-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Transactions</p>
                  <p className="text-xl font-mono font-semibold text-white">{result.count.toLocaleString()}</p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-black p-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Total Fee (XRP)</p>
                  <p className="text-xl font-mono font-semibold text-[#0085FF]">
                    {result.totalFeeXRP < 0.01
                      ? result.totalFeeXRP.toFixed(6)
                      : result.totalFeeXRP.toFixed(4)}{" "}
                    XRP
                  </p>
                </div>
                <div className="rounded-lg border border-[#0085FF]/30 bg-[#0085FF]/5 p-4">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Total Fee (USD)</p>
                  <p className="text-xl font-mono font-bold text-[#0085FF]">
                    {xrpPrice > 0
                      ? result.totalFeeUSD < 0.01
                        ? `$${result.totalFeeUSD.toFixed(6)}`
                        : `$${result.totalFeeUSD.toFixed(4)}`
                      : "—"}
                  </p>
                </div>
              </div>
            )}

            {/* Per-tx breakdown */}
            {result && xrpPrice > 0 && (
              <div className="mt-4 rounded-lg border border-zinc-800 bg-black p-4">
                <p className="text-sm text-zinc-400">
                  Cost per transaction:{" "}
                  <span className="font-mono text-white">{XRP_FEE_PER_TX} XRP</span>
                  {" "}={" "}
                  <span className="font-mono text-[#0085FF]">
                    ${(XRP_FEE_PER_TX * xrpPrice).toFixed(8)}
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Fee Comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">How XRP Fees Compare</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm text-left">
                <thead className="bg-zinc-900 text-zinc-400 uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3">Network</th>
                    <th className="px-4 py-3">Avg. Fee</th>
                    <th className="px-4 py-3">Cost for 1,000 Txs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {COMPARISONS.map((c) => {
                    const costPer1000 =
                      c.name === "XRP"
                        ? xrpPrice > 0
                          ? `$${(c.fee * 1000 * xrpPrice).toFixed(4)}`
                          : "—"
                        : c.name === "PayPal"
                          ? "$300+ (+ %)"
                          : `$${(c.fee * 1000).toLocaleString()}`;
                    return (
                      <tr
                        key={c.name}
                        className={`bg-zinc-950 ${c.name === "XRP" ? "border-l-2 border-l-[#0085FF]" : ""}`}
                      >
                        <td className={`px-4 py-3 font-medium ${c.name === "XRP" ? "text-[#0085FF]" : "text-white"}`}>
                          {c.name}
                        </td>
                        <td className="px-4 py-3 text-zinc-400 font-mono">
                          {c.name === "XRP" ? `${c.fee} XRP` : `~$${c.fee} ${c.unit}`}
                        </td>
                        <td className="px-4 py-3 text-zinc-400 font-mono">{costPer1000}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-600 mt-2">
              * Bitcoin and Ethereum fees are approximate averages and vary significantly with network congestion.
            </p>
          </section>

          {/* Why So Cheap */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Why Are XRP Fees So Low?</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                The XRP Ledger uses a <strong className="text-white">Federated Consensus</strong> mechanism
                instead of energy-intensive Proof of Work (Bitcoin) or Proof of Stake (Ethereum). This means
                there are no miners or stakers demanding transaction fee rewards.
              </p>
              <p>
                The minimum transaction fee on XRPL is <span className="font-mono text-[#0085FF]">10 drops</span> (0.00001 XRP).
                This fee exists primarily as an anti-spam measure — to prevent bad actors from flooding the
                network with millions of transactions. The fee is <strong className="text-white">burned</strong> (destroyed),
                making XRP slightly deflationary over time.
              </p>
              <p>
                During periods of high network congestion, fees may increase through an automatic fee
                escalation mechanism, but even at peak times, XRP fees remain orders of magnitude cheaper
                than Bitcoin or Ethereum.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                ["How much does an XRP transaction cost?", "An XRP transaction costs approximately 0.00001 XRP (10 drops). At current prices, this is a tiny fraction of a cent — making XRP one of the cheapest cryptocurrencies to transact with."],
                ["Are XRP fees burned?", "Yes. Transaction fees on the XRP Ledger are permanently destroyed (burned). This means the total supply of XRP decreases slightly with every transaction, making XRP deflationary."],
                ["Can XRP fees increase?", "The base fee is set by network validators and can theoretically change. During network congestion, an automatic fee escalation mechanism may temporarily increase fees. Even at elevated levels, XRP fees remain extremely low."],
                ["How do XRP fees compare to Ethereum?", "XRP fees are roughly 250,000x cheaper than Ethereum gas fees. An Ethereum transaction typically costs $2-50+ depending on congestion, while an XRP transaction costs a fraction of a cent."],
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
              ["/tools/xrp-profit-calculator", "Profit Calculator"],
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
            { href: "/learn/xrp-ledger-explained", title: "XRP Ledger Explained", description: "Dive into how the XRP Ledger works, its consensus mechanism, and what makes it unique." },
            { href: "/learn/what-is-xrp", title: "What is XRP?", description: "Understand the fundamentals of XRP and why it was created for fast, low-cost payments." },
            { href: "/learn/xrp-use-cases", title: "XRP Use Cases", description: "Discover real-world applications of XRP from cross-border payments to DeFi and beyond." },
            { href: "/learn/on-demand-liquidity", title: "On-Demand Liquidity", description: "Learn how Ripple's ODL service uses XRP to enable instant global money transfers." },
          ]} />
        </div>
      </main>
    </>
  );
}

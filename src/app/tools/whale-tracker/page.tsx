"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Fish, ExternalLink, RefreshCw, AlertTriangle } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";

interface WhaleTx {
  hash: string;
  amount: number;
  from: string;
  to: string;
  timestamp: string;
}

interface WhaleResponse {
  available: boolean;
  source: string | null;
  updatedAt: string;
  error?: string;
  transactions: WhaleTx[];
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is XRP whale tracking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "XRP whale tracking filters public ledger transactions above a chosen threshold. A transfer shows that XRP moved between addresses, but it does not by itself prove who owns them or why the transfer occurred.",
      },
    },
    {
      "@type": "Question",
      name: "What counts as an XRP whale transaction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Whale is an informal label, not an XRP Ledger category. This page uses 1 million XRP as its display threshold and does not convert that threshold into a fixed dollar value.",
      },
    },
    {
      "@type": "Question",
      name: "Why do whale transactions matter for XRP price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A large transfer can provide context for market research, but it does not establish an intention to buy or sell and cannot predict price direction without verified address labels and additional evidence.",
      },
    },
    {
      "@type": "Question",
      name: "Where do whale transactions come from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any funded XRP Ledger account can create a large payment. Ownership and purpose should be treated as unknown unless an address label is supported by a reliable public source.",
      },
    },
    {
      "@type": "Question",
      name: "How often do XRP whale transactions occur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frequency varies with ledger activity and the threshold selected. The provider response and linked transaction hash should be checked before relying on a displayed transfer.",
      },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://allaboutxrp.com/tools" },
    { "@type": "ListItem", position: 3, name: "Whale Tracker", item: "https://allaboutxrp.com/tools/whale-tracker" },
  ],
};

function truncateAddress(addr: string): string {
  if (!addr || addr.length < 12) return addr || "Unknown";
  return `${addr.slice(0, 6)}...${addr.slice(-6)}`;
}

export default function WhaleTrackerPage() {
  const [transactions, setTransactions] = useState<WhaleTx[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const fetchWhaleTransactions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/xrp/whale-activity", {
        signal: AbortSignal.timeout(10000),
      });

      if (!response.ok) throw new Error("Live transaction service is unavailable.");

      const data = (await response.json()) as WhaleResponse;
      setTransactions(data.transactions ?? []);
      setLastUpdate(new Date(data.updatedAt));
      if (!data.available) setError(data.error ?? "Live transaction providers are temporarily unavailable.");
    } catch {
      setTransactions([]);
      setLastUpdate(null);
      setError("Live transaction providers are temporarily unavailable. No estimated or sample transactions are shown.");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchWhaleTransactions();
    const interval = setInterval(fetchWhaleTransactions, 60000);
    return () => clearInterval(interval);
  }, [fetchWhaleTransactions]);

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
            <span className="text-zinc-300">Whale Tracker</span>
          </nav>

          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className=" bg-xrp-accent/10 p-2.5">
                  <Fish className="h-6 w-6 text-xrp-accent" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  XRP Whale Tracker
                </h1>
              </div>
              <p className="text-zinc-400 max-w-2xl">
                Review large XRP transactions reported by third-party ledger providers. Transfers are displayed only when a provider returns verifiable transaction hashes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-zinc-500 mb-8">
            <span>AllAboutXRP Editorial</span>
            <span className="text-white/15">·</span>
            <span>Provider data — auto-refreshes every 60s</span>
            {lastUpdate && (
              <>
                <span className="text-white/15">·</span>
                <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
              </>
            )}
            <button
              onClick={fetchWhaleTransactions}
              className="ml-auto flex items-center gap-1.5  border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-white hover:border-xrp-accent/30 transition-colors"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>

          {error && (
            <div className="mb-6  border border-yellow-500/20 bg-yellow-500/5 px-4 py-3 flex items-center gap-3 text-sm text-yellow-400">
              <AlertTriangle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          {/* Transaction table */}
          <div className=" border border-white/[0.06] overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-white/[0.06] bg-white/[0.02]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Amount (XRP)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">From</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">To</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Time</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Explorer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {loading && transactions.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-12 text-center text-zinc-500">
                        <RefreshCw className="h-5 w-5 animate-spin mx-auto mb-2" />
                        Scanning XRPL for whale transactions...
                      </td>
                    </tr>
                  ) : transactions.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-12 text-center text-zinc-500">
                        No whale transactions found in recent ledgers. Check back soon.
                      </td>
                    </tr>
                  ) : (
                    transactions.map((tx, i) => (
                      <tr key={tx.hash + i} className="hover:bg-white/[0.015] transition-colors">
                        <td className="px-4 py-3 font-mono font-semibold text-xrp-accent">
                          {tx.amount.toLocaleString("en-US")}
                        </td>
                        <td className="px-4 py-3 font-mono text-xs text-zinc-400">
                          {truncateAddress(tx.from)}
                        </td>
                        <td className="px-4 py-3 font-mono text-xs text-zinc-400">
                          {truncateAddress(tx.to)}
                        </td>
                        <td className="px-4 py-3 text-zinc-500 text-xs">
                          {new Date(tx.timestamp).toLocaleString()}
                        </td>
                        <td className="px-4 py-3">
                          {tx.hash ? (
                            <a
                              href={`https://livenet.xrpl.org/transactions/${tx.hash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xrp-accent hover:text-white transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          ) : (
                            <span className="text-zinc-600 text-xs">Unavailable</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Editorial content */}
          <section className="prose prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Why Track XRP Whale Movements?</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                XRP Ledger transactions are public, so a data provider can identify payments above a chosen threshold.
                A payment does not necessarily identify a unique person or institution: one party can control multiple
                addresses, and an address can represent an exchange or other pooled service.
              </p>
              <p>
                <strong className="text-white">Address labels require evidence.</strong> A transfer to an address described
                as an exchange can have many explanations, including internal treasury movement. It does not prove an
                upcoming sale.
              </p>
              <p>
                <strong className="text-white">Direction is not intent.</strong> A transfer away from a known service does
                not prove accumulation or long-term holding. Treat it as an observation that may warrant additional research.
              </p>
              <p>
                <strong className="text-white">Verify every record.</strong> Open the transaction hash in the explorer and
                review the validated ledger result. This page stays out of search until its provider normalization and
                address-label methodology have been independently checked.
              </p>
            </div>
          </section>

          {/* Internal links */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <Link
              href="/learn/escrow"
              className=" border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">XRP Escrow Explained →</h3>
              <p className="text-sm text-zinc-500">How Ripple&apos;s 1B monthly unlock works</p>
            </Link>
            <Link
              href="/tools/escrow-tracker"
              className=" border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">Escrow Schedule Reference →</h3>
              <p className="text-sm text-zinc-500">Understand releases without relying on stale estimates</p>
            </Link>
            <Link
              href="/holders"
              className=" border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">XRP Rich List →</h3>
              <p className="text-sm text-zinc-500">Top holders and wallet distribution</p>
            </Link>
            <Link
              href="/tools/price-alerts"
              className=" border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">Price Levels to Watch →</h3>
              <p className="text-sm text-zinc-500">Key support and resistance for XRP</p>
            </Link>
          </section>

          {/* FAQ section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is XRP whale tracking?", a: "It filters public XRP Ledger transactions above a chosen threshold. A transfer does not by itself prove ownership or intent." },
                { q: "What counts as a whale transaction?", a: "Whale is an informal label. This page uses 1 million XRP as a display threshold." },
                { q: "Can a large transfer predict XRP's price?", a: "No. It can add context, but direction, ownership, and purpose need independent evidence." },
                { q: "Who creates large XRP transactions?", a: "Any funded ledger account can. Treat ownership as unknown unless a reliable public source supports the address label." },
                { q: "How should I verify a transaction?", a: "Open its hash in the linked explorer and confirm the transaction result in a validated ledger." },
              ].map((item, i) => (
                <details key={i} className="group  border border-white/[0.06] bg-white/[0.02]">
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

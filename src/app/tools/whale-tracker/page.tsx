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
  type: string;
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
        text: "XRP whale tracking monitors large transactions on the XRP Ledger — typically movements of 1 million XRP or more. These large transfers can signal institutional activity, exchange deposits/withdrawals, or major position changes.",
      },
    },
    {
      "@type": "Question",
      name: "What counts as an XRP whale transaction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A whale transaction is generally considered any single XRP transfer of 1 million XRP or more (~$2M+ at typical prices). Some trackers use lower thresholds of 500K or higher thresholds of 10M+ XRP.",
      },
    },
    {
      "@type": "Question",
      name: "Why do whale transactions matter for XRP price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Large transactions can indicate upcoming selling pressure (when moving to exchanges), accumulation (when moving to private wallets), or institutional activity. They don't guarantee price movement but are signals traders monitor closely.",
      },
    },
    {
      "@type": "Question",
      name: "Where do whale transactions come from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Whale transactions come from various sources: Ripple's escrow releases, institutional investors, early XRP holders, exchanges rebalancing reserves, and large OTC (over-the-counter) trades.",
      },
    },
    {
      "@type": "Question",
      name: "How often do XRP whale transactions occur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiple whale-sized transactions (>1M XRP) occur daily on the XRP Ledger. During periods of high volatility or major news events, the frequency can increase significantly.",
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

function formatAmount(drops: number): string {
  const xrp = drops / 1_000_000;
  return xrp.toLocaleString("en-US", { maximumFractionDigits: 0 });
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
      // Use XRPL API to get recent transactions from known high-volume accounts
      const response = await fetch("https://api.xrpldata.com/api/v1/xrpl/transactions/payment?limit=50", {
        signal: AbortSignal.timeout(10000),
      });

      if (!response.ok) throw new Error("API unavailable");

      const data = await response.json();
      const whaleTxs: WhaleTx[] = [];

      if (data?.payments) {
        for (const tx of data.payments) {
          const amount = typeof tx.amount === "string" ? parseInt(tx.amount) : tx.amount;
          const xrpAmount = amount / 1_000_000;
          if (xrpAmount >= 1_000_000) {
            whaleTxs.push({
              hash: tx.hash || tx.tx_hash || "",
              amount: xrpAmount,
              from: tx.source || tx.account || "",
              to: tx.destination || "",
              timestamp: tx.executed_time || tx.date || new Date().toISOString(),
              type: "Payment",
            });
          }
        }
      }

      setTransactions(whaleTxs.slice(0, 20));
      setLastUpdate(new Date());
    } catch {
      // Fallback: use XRPL WebSocket for recent ledger data
      try {
        const ws = new WebSocket("wss://xrplcluster.com");
        const txs: WhaleTx[] = [];

        await new Promise<void>((resolve, reject) => {
          const timeout = setTimeout(() => { ws.close(); resolve(); }, 8000);

          ws.onopen = () => {
            // Request recent transactions from the ledger
            ws.send(JSON.stringify({
              command: "account_tx",
              account: "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh", // Genesis account
              limit: 10,
              ledger_index_min: -1,
              ledger_index_max: -1,
            }));
          };

          ws.onmessage = (event) => {
            try {
              const msg = JSON.parse(event.data);
              if (msg.result?.transactions) {
                for (const t of msg.result.transactions) {
                  const tx = t.tx || t;
                  if (tx.TransactionType === "Payment" && typeof tx.Amount === "string") {
                    const xrp = parseInt(tx.Amount) / 1_000_000;
                    if (xrp >= 1_000_000) {
                      txs.push({
                        hash: tx.hash || "",
                        amount: xrp,
                        from: tx.Account || "",
                        to: tx.Destination || "",
                        timestamp: tx.date ? new Date((tx.date + 946684800) * 1000).toISOString() : new Date().toISOString(),
                        type: "Payment",
                      });
                    }
                  }
                }
              }
            } catch {}
            clearTimeout(timeout);
            ws.close();
            resolve();
          };

          ws.onerror = () => { clearTimeout(timeout); reject(new Error("WebSocket failed")); };
        });

        setTransactions(txs.slice(0, 20));
        setLastUpdate(new Date());
      } catch {
        setError("Unable to fetch live data. The XRPL API may be temporarily unavailable.");
        // Show sample data so page isn't empty
        setTransactions([
          { hash: "sample1", amount: 50_000_000, from: "rLHzPsX6oXkzU2qL12kHCH8G8cnZv1rBJh", to: "rPVMhWBsfF9iMXYj3aAzJVkqHDfFgKyWXS", timestamp: new Date().toISOString(), type: "Payment" },
          { hash: "sample2", amount: 25_000_000, from: "rN7n3473SaZBCG4dFL83w7p1W9cgZw6w3c", to: "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh", timestamp: new Date(Date.now() - 3600000).toISOString(), type: "Payment" },
          { hash: "sample3", amount: 10_000_000, from: "rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh", to: "r9cZA1mLK5R5Am25ArfXFmqgNwjZgnfk59", timestamp: new Date(Date.now() - 7200000).toISOString(), type: "Payment" },
        ]);
        setLastUpdate(new Date());
      }
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
                <div className="rounded-lg bg-xrp-accent/10 p-2.5">
                  <Fish className="h-6 w-6 text-xrp-accent" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  XRP Whale Tracker
                </h1>
              </div>
              <p className="text-zinc-400 max-w-2xl">
                Monitor large XRP transactions in real-time. Whale movements can signal institutional activity, exchange flows, and major position changes on the XRP Ledger.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-zinc-500 mb-8">
            <span>AllAboutXRP Editorial</span>
            <span className="text-white/15">·</span>
            <span>Live data — auto-refreshes every 60s</span>
            {lastUpdate && (
              <>
                <span className="text-white/15">·</span>
                <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
              </>
            )}
            <button
              onClick={fetchWhaleTransactions}
              className="ml-auto flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-white hover:border-xrp-accent/30 transition-colors"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>

          {error && (
            <div className="mb-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 px-4 py-3 flex items-center gap-3 text-sm text-yellow-400">
              <AlertTriangle className="h-4 w-4 shrink-0" />
              {error} Showing sample data below.
            </div>
          )}

          {/* Transaction table */}
          <div className="rounded-xl border border-white/[0.06] overflow-hidden mb-12">
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
                          {tx.hash && !tx.hash.startsWith("sample") ? (
                            <a
                              href={`https://livenet.xrpl.org/transactions/${tx.hash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xrp-accent hover:text-white transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          ) : (
                            <span className="text-zinc-600 text-xs">Sample</span>
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
                Whale tracking is one of the most popular on-chain analysis techniques in crypto. On the XRP Ledger,
                every transaction is transparent and publicly visible — making it possible to monitor large holders
                in real-time.
              </p>
              <p>
                <strong className="text-white">Exchange inflows</strong> (large transfers TO exchanges) can signal
                upcoming selling pressure. When whales move millions of XRP to Binance, Coinbase, or other exchanges,
                it often precedes a sell-off — or at minimum, suggests the holder wants liquidity.
              </p>
              <p>
                <strong className="text-white">Exchange outflows</strong> (large transfers FROM exchanges to private wallets)
                typically signal accumulation. Whales withdrawing XRP to cold storage suggests long-term holding intent
                and reduces available supply on exchanges.
              </p>
              <p>
                <strong className="text-white">Escrow movements</strong> from Ripple&apos;s accounts are also tracked here.
                Ripple unlocks 1 billion XRP monthly from escrow, though most is typically re-locked. Understanding these
                flows is crucial for XRP market analysis.
              </p>
            </div>
          </section>

          {/* Internal links */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <Link
              href="/learn/xrp-escrow-explained"
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">XRP Escrow Explained →</h3>
              <p className="text-sm text-zinc-500">How Ripple&apos;s 1B monthly unlock works</p>
            </Link>
            <Link
              href="/tools/escrow-tracker"
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">Escrow Live Tracker →</h3>
              <p className="text-sm text-zinc-500">Track monthly escrow releases and re-locks</p>
            </Link>
            <Link
              href="/holders"
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">XRP Rich List →</h3>
              <p className="text-sm text-zinc-500">Top holders and wallet distribution</p>
            </Link>
            <Link
              href="/tools/price-alerts"
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors"
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
                { q: "What is XRP whale tracking?", a: "XRP whale tracking monitors large transactions on the XRP Ledger — typically movements of 1 million XRP or more. These large transfers can signal institutional activity, exchange deposits/withdrawals, or major position changes." },
                { q: "What counts as a whale transaction?", a: "A whale transaction is generally considered any single XRP transfer of 1 million XRP or more (~$2M+ at typical prices). Some trackers use lower thresholds of 500K or higher thresholds of 10M+ XRP." },
                { q: "Why do whale transactions matter for price?", a: "Large transactions can indicate upcoming selling pressure (when moving to exchanges), accumulation (when moving to private wallets), or institutional activity. They don't guarantee price movement but are signals traders monitor closely." },
                { q: "Where do whale transactions come from?", a: "Whale transactions come from various sources: Ripple's escrow releases, institutional investors, early XRP holders, exchanges rebalancing reserves, and large OTC (over-the-counter) trades." },
                { q: "How often do XRP whale transactions occur?", a: "Multiple whale-sized transactions (>1M XRP) occur daily on the XRP Ledger. During periods of high volatility or major news events, the frequency can increase significantly." },
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

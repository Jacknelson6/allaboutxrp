"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import TierChart from "@/components/richlist/TierChart";
import TierCalculator from "@/components/richlist/TierCalculator";
import TierFAQ from "@/components/richlist/TierFAQ";
import SEOSchema from "@/components/shared/SEOSchema";
import ContinueLearning from "@/components/shared/ContinueLearning";
import { formatNumber, formatCompact, shortenAddress } from "@/lib/utils/format";
import { Copy, Check, TrendingUp, TrendingDown, Activity, Users, DollarSign, Waves } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
interface Sentiment {
  fearGreed: { value: number; label: string };
  buyVolume: number;
  sellVolume: number;
  totalVolume: number;
  buyPercent: number;
}

interface WhaleTx {
  hash: string;
  amount: number;
  from: string;
  to: string;
  time: string;
  fromLabel?: string;
  toLabel?: string;
}

interface WhaleData {
  transactions: WhaleTx[];
  totalMoved: number;
  count: number;
  largest: number;
  hourlyVolume: { hour: number; volume: number }[];
}

interface Holder {
  rank: number;
  address: string;
  label: string | null;
  balance: number;
  valueUsd: number;
  percentage: number;
}

interface HoldersData {
  topHolders: Holder[];
  distribution: { top10: number; others: number };
  totalAccounts: number;
  marketCap: number;
  xrpPrice: number;
}

// ── Constants ──────────────────────────────────────────────────────────────
const DONUT_COLORS = ["#0085FF", "#2F3336"];

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "XRP Holders & Market Pulse",
  description: "Real-time XRP holder distribution, trading sentiment, and market data.",
  url: "https://allaboutxrp.com/holders",
  creator: { "@type": "Organization", name: "AllAboutXRP" },
};

// ── Whale Activity Card ────────────────────────────────────────────────────
function WhaleActivityCard({ data }: { data: WhaleData | null }) {
  if (!data) {
    return (
      <div className="flex items-center justify-center h-full text-text-secondary text-sm">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/10 border-t-xrp-accent mr-2" />
        Loading…
      </div>
    );
  }

  const maxVol = Math.max(...data.hourlyVolume.map(h => h.volume), 1);

  return (
    <div className="flex flex-col h-full">
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-text-primary font-mono">{data.count}</div>
          <div className="text-[10px] text-text-secondary mt-0.5">Transactions</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-xrp-accent font-mono">{formatCompact(data.totalMoved)}</div>
          <div className="text-[10px] text-text-secondary mt-0.5">XRP Moved</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-text-primary font-mono">{formatCompact(data.largest)}</div>
          <div className="text-[10px] text-text-secondary mt-0.5">Largest TX</div>
        </div>
      </div>

      {/* Mini bar chart - hourly volume */}
      <div className="flex-1 min-h-0">
        <div className="text-[10px] text-text-secondary mb-1.5">Volume by Hour (24h)</div>
        <div className="flex items-end gap-[2px] h-16">
          {data.hourlyVolume.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-xrp-accent/80 hover:bg-xrp-accent transition-colors cursor-default"
              style={{ height: `${Math.max((h.volume / maxVol) * 100, 2)}%` }}
              title={`${h.hour}h ago: ${formatCompact(h.volume)} XRP`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px] text-text-secondary">24h ago</span>
          <span className="text-[9px] text-text-secondary">Now</span>
        </div>
      </div>

      {/* Recent whale txs feed */}
      <div className="mt-3 space-y-1.5 max-h-[120px] overflow-y-auto">
        {data.transactions.slice(0, 5).map((tx, i) => {
          const ago = Math.round((Date.now() - new Date(tx.time).getTime()) / 3600000);
          return (
            <div key={i} className="flex items-center justify-between text-[11px] py-1 border-b border-[#2F3336]/50 last:border-0">
              <div className="flex items-center gap-1.5 min-w-0">
                <Waves className="h-3 w-3 text-xrp-accent flex-shrink-0" />
                <span className="text-text-secondary truncate">
                  {tx.fromLabel || shortenAddress(tx.from)} → {tx.toLabel || shortenAddress(tx.to)}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                <span className="font-mono font-semibold text-text-primary">{formatCompact(tx.amount)}</span>
                <span className="text-text-secondary text-[9px]">{ago}h</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Copy button ────────────────────────────────────────────────────────────
function CopyAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button onClick={copy} className="ml-1.5 text-text-secondary hover:text-xrp-accent transition-colors" aria-label="Copy address">
      {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
    </button>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function HoldersPage() {
  const [sentiment, setSentiment] = useState<Sentiment | null>(null);
  const [holders, setHolders] = useState<HoldersData | null>(null);
  const [whaleData, setWhaleData] = useState<WhaleData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/xrp/sentiment").then(r => r.json()).catch(() => null),
      fetch("/api/xrp/holders").then(r => r.json()).catch(() => null),
      fetch("/api/xrp/whale-activity").then(r => r.json()).catch(() => null),
    ]).then(([s, h, w]) => {
      if (s) setSentiment(s);
      if (h) setHolders(h);
      if (w) setWhaleData(w);
      setLoading(false);
    });
  }, []);

  const maxBalance = holders?.topHolders?.[0]?.balance ?? 1;

  const donutData = holders ? [
    { name: "Top 10", value: holders.distribution.top10 },
    { name: "Others", value: holders.distribution.others },
  ] : [];

  return (
    <>
      <SEOSchema schema={datasetSchema} />
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <div>
          <h1 className="text-[32px] font-bold tracking-[-0.04em] text-text-primary">XRP Holders</h1>
          <p className="mt-1.5 text-[14px] text-text-secondary">Market sentiment, holder distribution, and whale tracking</p>
        </div>

        {/* ── Section 1: Market Pulse ────────────────────────────────────── */}
        <section className="mt-8" aria-label="Market pulse">
          <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-xrp-accent" />
            XRP Market Pulse
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Whale Activity */}
            <div className="rounded-xl border border-[#2F3336] bg-[#16181C] p-6">
              <h3 className="text-sm font-medium text-text-secondary mb-4 flex items-center gap-2">
                <Waves className="h-4 w-4 text-xrp-accent" />
                Whale Activity (24h)
              </h3>
              <WhaleActivityCard data={whaleData} />
            </div>

            {/* Buy vs Sell Volume */}
            <div className="rounded-xl border border-[#2F3336] bg-[#16181C] p-6">
              <h3 className="text-sm font-medium text-text-secondary mb-4">Buy vs Sell Volume (24h)</h3>
              {sentiment ? (
                <div className="flex flex-col justify-center h-32">
                  {/* Bar */}
                  <div className="flex rounded-full overflow-hidden h-8">
                    <div
                      className="flex items-center justify-center text-xs font-semibold text-white transition-all duration-500"
                      style={{ width: `${sentiment.buyPercent}%`, background: "linear-gradient(90deg, #16c784, #00ba7c)" }}
                    >
                      {sentiment.buyPercent.toFixed(1)}%
                    </div>
                    <div
                      className="flex items-center justify-center text-xs font-semibold text-white transition-all duration-500"
                      style={{ width: `${100 - sentiment.buyPercent}%`, background: "linear-gradient(90deg, #ea3943, #c0392b)" }}
                    >
                      {(100 - sentiment.buyPercent).toFixed(1)}%
                    </div>
                  </div>
                  {/* Labels */}
                  <div className="flex justify-between mt-3 text-xs">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5 text-green-400" />
                      <span className="text-text-secondary">Buy</span>
                      <span className="font-mono text-text-primary">{formatCompact(sentiment.buyVolume)} XRP</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingDown className="h-3.5 w-3.5 text-red-400" />
                      <span className="text-text-secondary">Sell</span>
                      <span className="font-mono text-text-primary">{formatCompact(sentiment.sellVolume)} XRP</span>
                    </div>
                  </div>
                  <div className="mt-2 text-center text-[11px] text-text-secondary">
                    Total: {formatCompact(sentiment.totalVolume)} XRP
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-32 text-text-secondary text-sm">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/10 border-t-xrp-accent mr-2" />
                  Loading…
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Section 2: Holders Overview ────────────────────────────────── */}
        <section className="mt-10" aria-label="Holders overview">
          {/* Stats Cards */}
          <div className="grid gap-3 sm:grid-cols-3 mb-6">
            <div className="rounded-xl border border-[#2F3336] bg-[#16181C] p-5">
              <div className="flex items-center gap-2 text-text-secondary text-xs mb-2">
                <Users className="h-4 w-4" /> Total Holders
              </div>
              <div className="text-2xl font-bold text-text-primary">
                {holders?.totalAccounts ? formatNumber(holders.totalAccounts) : "—"}
              </div>
            </div>
            <div className="rounded-xl border border-[#2F3336] bg-[#16181C] p-5">
              <div className="flex items-center gap-2 text-text-secondary text-xs mb-2">
                <DollarSign className="h-4 w-4" /> Market Cap
              </div>
              <div className="text-2xl font-bold text-text-primary">
                {holders?.marketCap ? formatCompact(holders.marketCap) : "—"}
              </div>
            </div>
            <div className="rounded-xl border border-[#2F3336] bg-[#16181C] p-5">
              <div className="flex items-center gap-2 text-text-secondary text-xs mb-2">
                <DollarSign className="h-4 w-4" /> XRP Price
              </div>
              <div className="text-2xl font-bold text-text-primary">
                {holders?.xrpPrice ? `$${holders.xrpPrice.toFixed(4)}` : "—"}
              </div>
            </div>
          </div>

          {/* Table + Donut */}
          <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
            {/* Top Holders Table */}
            <div className="rounded-xl border border-[#2F3336] bg-[#16181C] overflow-hidden">
              <div className="px-5 py-4 border-b border-[#2F3336] flex items-center justify-between">
                <h2 className="text-lg font-bold text-text-primary">Top Holders</h2>
                <span className="text-xs text-text-secondary font-mono flex items-center gap-1">
                  <span className="inline-flex h-2 w-2 rounded-full bg-green-400" />LIVE
                </span>
              </div>

              <div className="overflow-x-auto max-h-[560px] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-[#16181C] grid grid-cols-[40px_1fr_120px_110px_100px] gap-2 px-5 py-2.5 text-[10px] font-medium uppercase tracking-wider text-text-secondary border-b border-[#2F3336] min-w-[580px]">
                <div>#</div>
                <div>Wallet</div>
                <div className="text-right">Amount (XRP)</div>
                <div className="text-right">Value (USD)</div>
                <div className="text-right">%</div>
              </div>
                {loading ? (
                  <div className="px-5 py-12 text-center text-text-secondary text-sm flex items-center justify-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/10 border-t-xrp-accent" />
                    Loading holders…
                  </div>
                ) : (holders?.topHolders ?? []).length === 0 ? (
                  <div className="px-5 py-12 text-center text-text-secondary text-sm">Unable to load holder data</div>
                ) : (
                  holders!.topHolders.slice(0, 25).map((h) => (
                    <div key={h.rank} className="grid grid-cols-[40px_1fr_120px_110px_100px] gap-2 px-5 py-3 border-b border-[#2F3336]/50 hover:bg-white/[0.02] transition-colors min-w-[580px] group">
                      <div className="font-mono text-sm text-text-secondary">{h.rank}</div>
                      <div className="flex items-center">
                        <span className="font-mono text-xs text-xrp-accent">{shortenAddress(h.address)}</span>
                        <CopyAddress address={h.address} />
                        {h.label && (
                          <span className="ml-2 rounded-full border border-xrp-accent/20 px-2 py-0.5 text-[10px] font-medium text-xrp-accent">
                            {h.label}
                          </span>
                        )}
                      </div>
                      <div className="text-right font-mono text-sm text-text-primary">{formatCompact(h.balance)}</div>
                      <div className="text-right font-mono text-xs text-text-secondary">${formatCompact(h.valueUsd)}</div>
                      <div className="text-right flex items-center justify-end gap-2">
                        <div className="w-16 h-1.5 rounded-full bg-[#2F3336] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-xrp-accent transition-all duration-300"
                            style={{ width: `${Math.min((h.balance / maxBalance) * 100, 100)}%` }}
                          />
                        </div>
                        <span className="font-mono text-[11px] text-text-secondary w-12 text-right">{h.percentage}%</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Donut Chart */}
            <div className="rounded-xl border border-[#2F3336] bg-[#16181C] p-5">
              <h3 className="text-sm font-bold text-text-primary mb-4">Holders Distribution</h3>
              {holders ? (
                <>
                  <div className="h-52 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={donutData}
                          cx="50%"
                          cy="50%"
                          innerRadius={65}
                          outerRadius={90}
                          paddingAngle={3}
                          dataKey="value"
                          strokeWidth={0}
                        >
                          {donutData.map((_, i) => (
                            <Cell key={i} fill={DONUT_COLORS[i]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-text-primary">{holders.distribution.top10.toFixed(1)}%</span>
                      <span className="text-[10px] text-text-secondary">Top 10</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between rounded-lg border border-[#2F3336] px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-xrp-accent" />
                        <span className="text-xs text-text-secondary">Top 10 Holders</span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-text-primary">{holders.distribution.top10.toFixed(1)}%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-[#2F3336] px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#2F3336]" />
                        <span className="text-xs text-text-secondary">Others</span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-text-primary">{holders.distribution.others.toFixed(1)}%</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-52 text-text-secondary text-sm">Loading…</div>
              )}
            </div>
          </div>
        </section>

        {/* ── Section 3: Tier Calculator ─────────────────────────────────── */}
        <TierChart />
        <TierCalculator />

        {/* CTA */}
        <div className="mt-8 rounded-xl border border-xrp-accent/20 bg-gradient-to-r from-xrp-accent/[0.04] to-transparent p-6 text-center">
          <h3 className="text-lg font-bold text-text-primary">Want to Level Up Your Rank?</h3>
          <p className="mt-2 text-sm text-text-secondary">See where you stand among XRP holders — and learn how to start accumulating.</p>
          <a href="/learn/get-started" className="mt-4 inline-block rounded-lg bg-xrp-accent px-5 py-2.5 text-sm font-semibold text-black hover:bg-xrp-accent-bright transition-colors">
            Get Started Buying XRP →
          </a>
        </div>

        <TierFAQ />

        <ContinueLearning links={[
          { href: "/learn/xrp-tokenomics", title: "XRP Tokenomics", description: "Learn about XRP's total supply, circulating supply, escrow schedule, and deflationary mechanics." },
          { href: "/learn/escrow", title: "Ripple's XRP Escrow", description: "Understand how Ripple's monthly escrow releases work and their impact on XRP supply." },
          { href: "/learn/what-is-ripple", title: "What is Ripple?", description: "Explore the company behind XRP, its history, products, and role in the crypto ecosystem." },
          { href: "/learn/xrp-wallets", title: "XRP Wallets", description: "Find the best wallets for storing your XRP securely, from hardware to software options." },
        ]} />
      </div>
    </>
  );
}

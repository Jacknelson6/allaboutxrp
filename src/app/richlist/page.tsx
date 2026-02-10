"use client";

import { useState, useEffect, useCallback } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import StatCard from "@/components/shared/StatCard";
import Disclaimer from "@/components/shared/Disclaimer";
import SEOSchema from "@/components/shared/SEOSchema";
import TierChart from "@/components/richlist/TierChart";
import TierCalculator from "@/components/richlist/TierCalculator";
import TierFAQ from "@/components/richlist/TierFAQ";
import { formatCurrency, formatCompact, formatNumber, formatPercent, shortenAddress } from "@/lib/utils/format";
import { DollarSign, TrendingUp, BarChart3, Users } from "lucide-react";

interface PricePoint { date: string; price: number; }
interface RichEntry { rank: number; address: string; label: string | null; balance: number; percentage: number; isKnown: boolean; }
interface Distribution { range: string; accounts: number; totalXrp: number; }
interface PriceData { usd: number; usdChange24h: number; usdVolume24h: number; usdMarketCap: number; }
interface SupplyInfo { totalSupply: number; circulatingSupply: number; escrowedSupply: number; burnedSupply: number; percentCirculating: number; percentEscrowed: number; }
interface NetworkStats { totalAccounts: number; }

const SUPPLY_COLORS = ["#0085FF", "#00BA7C", "#F7B928", "rgba(255,255,255,0.08)"];
const timeRanges = ["7D", "30D", "90D"] as const;
const DAYS_MAP: Record<string, number> = { "7D": 7, "30D": 30, "90D": 90 };

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "XRP Rich List & Market Data",
  description: "Real-time XRP rich list, price data, supply metrics, and distribution analysis.",
  url: "https://allaboutxrp.com/richlist",
  creator: { "@type": "Organization", name: "AllAboutXRP" },
};

const tooltipStyle = {
  background: "#0A0A0B",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  color: "#F0F0F0",
  fontSize: 12,
  padding: "8px 12px",
};

export default function RichListPage() {
  const [range, setRange] = useState<typeof timeRanges[number]>("30D");
  const [price, setPrice] = useState<PriceData | null>(null);
  const [supply, setSupply] = useState<SupplyInfo | null>(null);
  const [network, setNetwork] = useState<NetworkStats | null>(null);
  const [richList, setRichList] = useState<RichEntry[]>([]);
  const [distribution, setDistribution] = useState<Distribution[]>([]);
  const [priceHistory, setPriceHistory] = useState<PricePoint[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch price data
  useEffect(() => {
    fetch("/api/xrp/price")
      .then((r) => r.json())
      .then((d) => { if (d.data) setPrice(d.data); })
      .catch(() => {});
  }, []);

  // Fetch stats (supply + network)
  useEffect(() => {
    fetch("/api/xrp/stats")
      .then((r) => r.json())
      .then((d) => {
        if (d.data) {
          setSupply(d.data.supply);
          setNetwork(d.data.network);
        }
      })
      .catch(() => {});
  }, []);

  // Fetch rich list
  useEffect(() => {
    setLoading(true);
    fetch("/api/xrp/richlist?limit=20")
      .then((r) => r.json())
      .then((d) => { if (d.data) setRichList(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Fetch distribution
  useEffect(() => {
    fetch("/api/xrp/distribution")
      .then((r) => r.json())
      .then((d) => { if (d.data) setDistribution(d.data); })
      .catch(() => {});
  }, []);

  // Fetch price history based on selected range
  const fetchPriceHistory = useCallback((days: number) => {
    fetch(`/api/xrp/price-history?days=${days}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.data && Array.isArray(d.data)) {
          const formatted = d.data.map((p: { timestamp: number; price: number }) => ({
            date: new Date(p.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
            price: p.price,
          }));
          setPriceHistory(formatted);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetchPriceHistory(DAYS_MAP[range]);
  }, [range, fetchPriceHistory]);

  const currentPrice = price?.usd ?? 0;
  const change = price?.usdChange24h ?? 0;
  const volume = price?.usdVolume24h ?? 0;
  const marketCap = price?.usdMarketCap ?? 0;

  const circulatingB = supply ? supply.circulatingSupply / 1e9 : 0;
  const escrowedB = supply ? supply.escrowedSupply / 1e9 : 0;
  const burnedB = supply ? supply.burnedSupply / 1e6 : 0; // millions
  const otherB = supply ? Math.max(0, (supply.totalSupply - supply.circulatingSupply - supply.escrowedSupply - supply.burnedSupply) / 1e9) : 0;

  const supplyData = [
    { name: "Circulating", value: Number(circulatingB.toFixed(1)) },
    { name: "Escrowed", value: Number(escrowedB.toFixed(1)) },
    { name: "Burned", value: Number((burnedB / 1000).toFixed(1)) || 0.01 },
    { name: "Other", value: Number(otherB.toFixed(1)) || 0 },
  ].filter(d => d.value > 0);

  const totalAccounts = network?.totalAccounts
    ? (network.totalAccounts >= 1e6 ? `${(network.totalAccounts / 1e6).toFixed(1)}M` : formatNumber(network.totalAccounts))
    : "—";

  return (
    <>
      <SEOSchema schema={datasetSchema} />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div>
          <h1 className="text-[32px] font-bold tracking-[-0.04em] text-text-primary">XRP Rich List & Market Data</h1>
          <p className="mt-1.5 text-[14px] text-text-secondary">Live XRP metrics, whale wallets, and supply distribution</p>
        </div>

        <div className="mt-6"><Disclaimer /></div>

        {/* Stats */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="XRP Price" value={currentPrice ? formatCurrency(currentPrice, 4) : "—"} change={price ? formatPercent(change) : undefined} positive={change >= 0} icon={<DollarSign className="h-4 w-4" />} />
          <StatCard label="Market Cap" value={marketCap ? formatCompact(marketCap) : "—"} icon={<TrendingUp className="h-4 w-4" />} />
          <StatCard label="24h Volume" value={volume ? formatCompact(volume) : "—"} icon={<BarChart3 className="h-4 w-4" />} />
          <StatCard label="Total Accounts" value={totalAccounts} icon={<Users className="h-4 w-4" />} />
        </div>

        {/* Price Chart */}
        <section className="mt-6 rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5" aria-label="Price chart">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-text-primary">Price Chart</h2>
              <p className="text-xs text-text-secondary">XRP/USD</p>
            </div>
            <div className="flex gap-1">
              {timeRanges.map((t) => (
                <button
                  key={t}
                  onClick={() => setRange(t)}
                  aria-label={`Show ${t === "7D" ? "7 day" : t === "30D" ? "30 day" : "90 day"} price history`}
                  aria-pressed={range === t}
                  className={`rounded-lg px-3 py-1 text-xs font-medium transition-all duration-200 ${
                    range === t ? "bg-xrp-accent text-white" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 h-64">
            {priceHistory.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceHistory} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0085FF" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#0085FF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#71767B" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#71767B" }} axisLine={false} tickLine={false} domain={["auto", "auto"]} tickFormatter={(v: number) => `$${v.toFixed(2)}`} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Area type="monotone" dataKey="price" stroke="#0085FF" strokeWidth={2} fill="url(#priceGrad)" dot={false} activeDot={{ r: 4, fill: "#0085FF", stroke: "#000", strokeWidth: 2 }} />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full gap-2 text-text-secondary text-sm">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/10 border-t-xrp-accent" />
                Loading chart data…
              </div>
            )}
          </div>
        </section>

        {/* Rich List Table */}
        <section className="mt-6" aria-label="Rich list">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-text-primary">Top XRP Holders</h2>
            <span className="text-xs text-text-secondary font-mono">
              <span className="inline-flex h-2 w-2 rounded-full bg-success mr-1" />LIVE
            </span>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <div className="grid grid-cols-[60px_1fr_140px_140px_80px] gap-2 border-b border-white/[0.06] px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-text-secondary min-w-[600px]">
              <div>Rank</div>
              <div>Address</div>
              <div>Label</div>
              <div className="text-right">Balance (XRP)</div>
              <div className="text-right">% Supply</div>
            </div>
            {loading ? (
              <div className="px-4 py-8 text-center text-text-secondary text-sm flex items-center justify-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/10 border-t-xrp-accent" />
                Loading rich list…
              </div>
            ) : richList.length === 0 ? (
              <div className="px-4 py-8 text-center text-text-secondary text-sm">Unable to load rich list data</div>
            ) : (
              richList.map((entry) => (
                <div key={entry.rank} className="terminal-row grid grid-cols-[60px_1fr_140px_140px_80px] gap-2 border-b border-white/[0.06] px-4 py-3 min-w-[600px]">
                  <div className="font-mono text-sm text-text-secondary">#{entry.rank}</div>
                  <div className="font-mono text-xs text-xrp-accent truncate">{shortenAddress(entry.address)}</div>
                  <div>
                    {entry.label ? (
                      <span className="rounded-full border border-xrp-accent/20 px-2 py-0.5 text-[10px] font-medium text-xrp-accent">
                        {entry.label}
                      </span>
                    ) : (
                      <span className="text-xs text-text-secondary/50">Unknown</span>
                    )}
                  </div>
                  <div className="text-right font-mono text-sm text-text-primary">{formatNumber(entry.balance)}</div>
                  <div className="text-right font-mono text-xs text-text-secondary">{entry.percentage}%</div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Distribution & Supply Charts */}
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <section className="rounded-xl border border-white/[0.06] p-5" aria-label="Distribution chart">
            <h2 className="text-lg font-bold text-text-primary">Holder Distribution</h2>
            <p className="text-xs text-text-secondary mb-4">Accounts by XRP balance range</p>
            <div className="h-56">
              {distribution.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={distribution} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
                    <XAxis dataKey="range" tick={{ fontSize: 10, fill: "#71767B" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: "#71767B" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => v >= 1000000 ? `${(v/1000000).toFixed(0)}M` : v >= 1000 ? `${(v/1000).toFixed(0)}K` : String(v)} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Bar dataKey="accounts" fill="#0085FF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full text-text-secondary text-sm">Loading…</div>
              )}
            </div>
          </section>

          <section className="rounded-xl border border-white/[0.06] p-5" aria-label="Supply breakdown">
            <h2 className="text-lg font-bold text-text-primary">Supply Breakdown</h2>
            <p className="text-xs text-text-secondary mb-4">100 billion total XRP</p>
            <div className="h-48">
              {supplyData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={supplyData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} dataKey="value" strokeWidth={0}>
                      {supplyData.map((_, i) => (
                        <Cell key={i} fill={SUPPLY_COLORS[i % SUPPLY_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={tooltipStyle} />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full text-text-secondary text-sm">Loading…</div>
              )}
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {supplyData.map((item, i) => (
                <div key={item.name} className="flex items-center gap-2 rounded-lg border border-white/[0.06] px-3 py-2">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: SUPPLY_COLORS[i] }} />
                  <span className="text-xs text-text-secondary">{item.name}</span>
                  <span className="ml-auto font-mono text-xs font-semibold text-text-primary">{item.value}B</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <TierChart />
        <TierCalculator />

        {/* Get Started CTA */}
        <div className="mt-8 rounded-xl border border-xrp-accent/20 bg-gradient-to-r from-xrp-accent/[0.04] to-transparent p-6 text-center">
          <h3 className="text-lg font-bold text-text-primary">Want to Level Up Your Rank?</h3>
          <p className="mt-2 text-sm text-text-secondary">See where you stand on the XRP Rich List tiers — and learn how to start accumulating.</p>
          <a href="/learn/get-started" className="mt-4 inline-block rounded-lg bg-xrp-accent px-5 py-2.5 text-sm font-semibold text-black hover:bg-xrp-accent-bright transition-colors">
            Get Started Buying XRP →
          </a>
        </div>

        <TierFAQ />
      </div>
    </>
  );
}

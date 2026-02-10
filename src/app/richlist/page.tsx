"use client";

import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import StatCard from "@/components/shared/StatCard";
import Disclaimer from "@/components/shared/Disclaimer";
import SEOSchema from "@/components/shared/SEOSchema";
import TierChart from "@/components/richlist/TierChart";
import TierCalculator from "@/components/richlist/TierCalculator";
import TierFAQ from "@/components/richlist/TierFAQ";
import { formatCurrency, formatCompact, formatNumber, formatPercent, shortenAddress } from "@/lib/utils/format";
import { DollarSign, TrendingUp, BarChart3, Users, Activity } from "lucide-react";

interface PricePoint { date: string; price: number; }
interface RichEntry { rank: number; address: string; label: string | null; balance: number; percentage: number; }
interface Distribution { range: string; accounts: number; totalXrp: number; }

const mockPriceHistory: PricePoint[] = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 86400000).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
  price: 2.1 + Math.sin(i * 0.3) * 0.3 + Math.random() * 0.15,
}));

const mockRichList: RichEntry[] = Array.from({ length: 20 }, (_, i) => ({
  rank: i + 1,
  address: `r${Array.from({ length: 33 }, () => "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789"[Math.floor(Math.random() * 58)]).join("")}`,
  label: i < 5 ? ["Ripple (1)", "Ripple Escrow", "Binance", "Uphold", "Bitfinex"][i] : null,
  balance: Math.floor(5000000000 / (i + 1)),
  percentage: Number((5 / (i + 1)).toFixed(2)),
}));

const mockDistribution: Distribution[] = [
  { range: "1-1K", accounts: 2500000, totalXrp: 500000000 },
  { range: "1K-10K", accounts: 800000, totalXrp: 3000000000 },
  { range: "10K-100K", accounts: 200000, totalXrp: 7000000000 },
  { range: "100K-1M", accounts: 30000, totalXrp: 10000000000 },
  { range: "1M-10M", accounts: 5000, totalXrp: 15000000000 },
  { range: "10M+", accounts: 500, totalXrp: 65000000000 },
];

const SUPPLY_COLORS = ["#0085FF", "#00BA7C", "#F7B928", "rgba(255,255,255,0.08)"];
const timeRanges = ["24H", "7D", "30D", "90D"] as const;

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
  const [price, setPrice] = useState<{ price: number; change24h: number } | null>(null);

  useEffect(() => {
    fetch("/api/price")
      .then((r) => r.json())
      .then((d: { price: number; change24h: number }) => setPrice(d))
      .catch(() => {});
  }, []);

  const currentPrice = price?.price ?? 2.35;
  const change = price?.change24h ?? 3.2;

  const supplyData = [
    { name: "Circulating", value: 57.6 },
    { name: "Escrowed", value: 38.9 },
    { name: "Burned", value: 0.5 },
    { name: "Other", value: 3.0 },
  ];

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
          <StatCard label="XRP Price" value={formatCurrency(currentPrice, 4)} change={formatPercent(change)} positive={change >= 0} icon={<DollarSign className="h-4 w-4" />} />
          <StatCard label="Market Cap" value={formatCompact(currentPrice * 57600000000)} icon={<TrendingUp className="h-4 w-4" />} />
          <StatCard label="24h Volume" value={formatCompact(2100000000)} icon={<BarChart3 className="h-4 w-4" />} />
          <StatCard label="Total Accounts" value="5.2M" icon={<Users className="h-4 w-4" />} />
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
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockPriceHistory} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
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
            {mockRichList.map((entry) => (
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
            ))}
          </div>
        </section>

        {/* Distribution & Supply Charts */}
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <section className="rounded-xl border border-white/[0.06] p-5" aria-label="Distribution chart">
            <h2 className="text-lg font-bold text-text-primary">Holder Distribution</h2>
            <p className="text-xs text-text-secondary mb-4">Accounts by XRP balance range</p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockDistribution} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
                  <XAxis dataKey="range" tick={{ fontSize: 10, fill: "#71767B" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#71767B" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => v >= 1000000 ? `${(v/1000000).toFixed(0)}M` : v >= 1000 ? `${(v/1000).toFixed(0)}K` : String(v)} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="accounts" fill="#0085FF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="rounded-xl border border-white/[0.06] p-5" aria-label="Supply breakdown">
            <h2 className="text-lg font-bold text-text-primary">Supply Breakdown</h2>
            <p className="text-xs text-text-secondary mb-4">100 billion total XRP</p>
            <div className="h-48">
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
        <TierFAQ />
      </div>
    </>
  );
}

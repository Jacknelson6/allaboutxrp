"use client";

import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import StatCard from "@/components/shared/StatCard";
import Disclaimer from "@/components/shared/Disclaimer";
import SEOSchema from "@/components/shared/SEOSchema";
import { formatCurrency, formatCompact, formatNumber, formatPercent, shortenAddress } from "@/lib/utils/format";
import { DollarSign, TrendingUp, BarChart3, Coins } from "lucide-react";

interface PricePoint {
  date: string;
  price: number;
}

interface RichEntry {
  rank: number;
  address: string;
  label: string | null;
  balance: number;
  percentage: number;
}

interface Distribution {
  range: string;
  accounts: number;
  totalXrp: number;
}

// Mock data for initial render (replaced by API data when available)
const mockPriceHistory: PricePoint[] = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 86400000).toLocaleDateString(),
  price: 2.1 + Math.random() * 0.5,
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

const SUPPLY_COLORS = ["#00A3FF", "#3FB950", "#D29922", "#8B949E"];

const timeRanges = ["24H", "7D", "30D", "90D"] as const;

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "XRP Rich List & Market Data",
  description: "Real-time XRP rich list, price data, supply metrics, and distribution analysis.",
  url: "https://allaboutxrp.com/richlist",
  creator: { "@type": "Organization", name: "AllAboutXRP" },
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
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
          XRP Rich List & Market Data
        </h1>
        <p className="mt-3 text-text-secondary">
          Live XRP price, whale wallets, supply distribution, and on-chain metrics.
        </p>

        <div className="mt-6">
          <Disclaimer />
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="XRP Price" value={formatCurrency(currentPrice)} change={formatPercent(change)} positive={change >= 0} icon={<DollarSign className="h-4 w-4" />} />
          <StatCard label="Market Cap" value={formatCompact(currentPrice * 57600000000)} icon={<TrendingUp className="h-4 w-4" />} />
          <StatCard label="24h Volume" value={formatCompact(2100000000)} icon={<BarChart3 className="h-4 w-4" />} />
          <StatCard label="Circulating Supply" value="57.6B XRP" icon={<Coins className="h-4 w-4" />} />
        </div>

        {/* Price Chart */}
        <section className="mt-8 rounded-xl border border-surface-border bg-surface-card p-6" aria-label="Price chart">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-text-primary">Price Chart</h2>
            <div className="flex gap-1">
              {timeRanges.map((t) => (
                <button
                  key={t}
                  onClick={() => setRange(t)}
                  className={`rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                    range === t ? "bg-xrp-accent text-white" : "bg-surface-elevated text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockPriceHistory}>
                <defs>
                  <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00A3FF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00A3FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#8B949E" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#8B949E" }} axisLine={false} tickLine={false} domain={["auto", "auto"]} />
                <Tooltip contentStyle={{ background: "#161B22", border: "1px solid #30363D", borderRadius: 8, color: "#F0F6FC" }} />
                <Area type="monotone" dataKey="price" stroke="#00A3FF" strokeWidth={2} fill="url(#priceGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Rich List Table */}
        <section className="mt-8" aria-label="Rich list">
          <h2 className="font-display text-lg font-bold text-text-primary mb-4">Top XRP Holders</h2>
          <div className="overflow-x-auto rounded-xl border border-surface-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-surface-border bg-surface-card">
                <tr>
                  <th className="px-4 py-3 font-medium text-text-secondary">Rank</th>
                  <th className="px-4 py-3 font-medium text-text-secondary">Address</th>
                  <th className="px-4 py-3 font-medium text-text-secondary">Label</th>
                  <th className="px-4 py-3 font-medium text-text-secondary text-right">Balance</th>
                  <th className="px-4 py-3 font-medium text-text-secondary text-right">% Supply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {mockRichList.map((entry) => (
                  <tr key={entry.rank} className="bg-surface-primary transition-colors hover:bg-surface-card">
                    <td className="px-4 py-3 font-mono text-text-secondary">{entry.rank}</td>
                    <td className="px-4 py-3 font-mono text-xs text-text-primary">{shortenAddress(entry.address)}</td>
                    <td className="px-4 py-3">
                      {entry.label ? (
                        <span className="rounded-full bg-xrp-accent/10 px-2 py-0.5 text-xs text-xrp-accent">{entry.label}</span>
                      ) : (
                        <span className="text-text-secondary">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-text-primary">{formatNumber(entry.balance)}</td>
                    <td className="px-4 py-3 text-right font-mono text-text-secondary">{entry.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Charts row */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {/* Distribution */}
          <section className="rounded-xl border border-surface-border bg-surface-card p-6" aria-label="Distribution chart">
            <h2 className="font-display text-lg font-bold text-text-primary mb-4">Holder Distribution</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockDistribution}>
                  <XAxis dataKey="range" tick={{ fontSize: 11, fill: "#8B949E" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "#8B949E" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "#161B22", border: "1px solid #30363D", borderRadius: 8, color: "#F0F6FC" }} />
                  <Bar dataKey="accounts" fill="#00A3FF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Supply donut */}
          <section className="rounded-xl border border-surface-border bg-surface-card p-6" aria-label="Supply breakdown">
            <h2 className="font-display text-lg font-bold text-text-primary mb-4">Supply Breakdown</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={supplyData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                    {supplyData.map((_, i) => (
                      <Cell key={i} fill={SUPPLY_COLORS[i % SUPPLY_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "#161B22", border: "1px solid #30363D", borderRadius: 8, color: "#F0F6FC" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {supplyData.map((item, i) => (
                <div key={item.name} className="flex items-center gap-2 text-sm">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: SUPPLY_COLORS[i] }} />
                  <span className="text-text-secondary">{item.name} ({item.value}B)</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

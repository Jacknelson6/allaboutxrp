"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import StatCard from "@/components/shared/StatCard";
import Disclaimer from "@/components/shared/Disclaimer";
import SEOSchema from "@/components/shared/SEOSchema";
import TierChart from "@/components/richlist/TierChart";
import TierCalculator from "@/components/richlist/TierCalculator";
import TierFAQ from "@/components/richlist/TierFAQ";
import { formatCurrency, formatCompact, formatNumber, formatPercent, shortenAddress } from "@/lib/utils/format";
import { DollarSign, TrendingUp, BarChart3, Coins, Activity, Users } from "lucide-react";

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

const SUPPLY_COLORS = ["#00A3FF", "#3FB950", "#D29922", "#30363D"];
const timeRanges = ["24H", "7D", "30D", "90D"] as const;

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "XRP Rich List & Market Data",
  description: "Real-time XRP rich list, price data, supply metrics, and distribution analysis.",
  url: "https://allaboutxrp.com/richlist",
  creator: { "@type": "Organization", name: "AllAboutXRP" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are XRP holder tiers?",
      acceptedAnswer: { "@type": "Answer", text: "XRP holder tiers are community-created categories that classify XRP holders based on their balance, from Shrimp (<10 XRP) to Humpback (50,000+ XRP)." },
    },
    {
      "@type": "Question",
      name: "How many XRP do I need to be a Whale?",
      acceptedAnswer: { "@type": "Answer", text: "You need at least 10,000 XRP to be classified as a Whale. The next level, Humpback, requires 50,000+ XRP." },
    },
    {
      "@type": "Question",
      name: "How is XRP distributed among holders?",
      acceptedAnswer: { "@type": "Answer", text: "Over 70% of funded accounts hold less than 1,000 XRP, while less than 1% hold over 100,000 XRP." },
    },
  ],
};

const tooltipStyle = {
  background: "rgba(18, 23, 30, 0.95)",
  border: "1px solid rgba(36, 45, 58, 0.8)",
  borderRadius: 12,
  color: "#F0F6FC",
  backdropFilter: "blur(12px)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
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
      <SEOSchema schema={faqSchema} />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-xrp-accent/10 p-2">
              <Activity className="h-5 w-5 text-xrp-accent" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                XRP Rich List & Market Data
              </h1>
              <p className="mt-1 text-text-secondary">
                Live XRP metrics, whale wallets, and supply distribution
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-6"><Disclaimer /></div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="XRP Price" value={formatCurrency(currentPrice, 4)} change={formatPercent(change)} positive={change >= 0} icon={<DollarSign className="h-4 w-4" />} delay={0} />
          <StatCard label="Market Cap" value={formatCompact(currentPrice * 57600000000)} icon={<TrendingUp className="h-4 w-4" />} delay={0.05} />
          <StatCard label="24h Volume" value={formatCompact(2100000000)} icon={<BarChart3 className="h-4 w-4" />} delay={0.1} />
          <StatCard label="Total Accounts" value="5.2M" icon={<Users className="h-4 w-4" />} delay={0.15} />
        </div>

        {/* Price Chart */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8 card-glow rounded-2xl border border-surface-border bg-surface-card/50 p-6 backdrop-blur-sm"
          aria-label="Price chart"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-lg font-bold text-text-primary">Price Chart</h2>
              <p className="text-xs text-text-secondary mt-0.5">XRP/USD</p>
            </div>
            <div className="flex gap-1 rounded-lg bg-surface-primary p-1">
              {timeRanges.map((t) => (
                <button
                  key={t}
                  onClick={() => setRange(t)}
                  className={`relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    range === t ? "text-white" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {range === t && (
                    <motion.div
                      layoutId="chart-range"
                      className="absolute inset-0 rounded-md bg-xrp-accent"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{t}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockPriceHistory} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00A3FF" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#00A3FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#8B949E" }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tick={{ fontSize: 10, fill: "#8B949E" }} axisLine={false} tickLine={false} domain={["auto", "auto"]} tickFormatter={(v: number) => `$${v.toFixed(2)}`} dx={-5} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="price" stroke="#00A3FF" strokeWidth={2} fill="url(#priceGrad)" dot={false} activeDot={{ r: 4, fill: "#00A3FF", stroke: "#0A0E14", strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.section>

        {/* Rich List Table - Terminal Style */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8"
          aria-label="Rich list"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-bold text-text-primary">Top XRP Holders</h2>
            <span className="text-xs text-text-secondary font-mono">
              <span className="inline-flex h-2 w-2 rounded-full bg-success mr-1.5 animate-pulse" />
              LIVE
            </span>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-surface-border bg-surface-card/30 backdrop-blur-sm">
            {/* Header */}
            <div className="grid grid-cols-[60px_1fr_140px_140px_80px] gap-2 border-b border-surface-border bg-surface-card/80 px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-text-secondary min-w-[600px]">
              <div>Rank</div>
              <div>Address</div>
              <div>Label</div>
              <div className="text-right">Balance (XRP)</div>
              <div className="text-right">% Supply</div>
            </div>
            {/* Rows */}
            {mockRichList.map((entry, i) => (
              <motion.div
                key={entry.rank}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="terminal-row grid grid-cols-[60px_1fr_140px_140px_80px] gap-2 border-b border-surface-border/50 px-4 py-3 min-w-[600px]"
              >
                <div className="font-mono text-sm text-text-secondary">#{entry.rank}</div>
                <div className="font-mono text-xs text-xrp-accent/80 truncate">{shortenAddress(entry.address)}</div>
                <div>
                  {entry.label ? (
                    <span className="inline-flex rounded-md border border-xrp-accent/20 bg-xrp-accent/5 px-2 py-0.5 text-[10px] font-medium text-xrp-accent">
                      {entry.label}
                    </span>
                  ) : (
                    <span className="text-xs text-text-secondary/50">Unknown</span>
                  )}
                </div>
                <div className="text-right font-mono text-sm text-text-primary">{formatNumber(entry.balance)}</div>
                <div className="text-right">
                  <span className="font-mono text-xs text-text-secondary">{entry.percentage}%</span>
                  <div className="mt-1 h-1 w-full rounded-full bg-surface-border">
                    <div className="h-full rounded-full bg-xrp-accent/40" style={{ width: `${Math.min(entry.percentage * 10, 100)}%` }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Distribution & Supply Charts */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glow rounded-2xl border border-surface-border bg-surface-card/50 p-6 backdrop-blur-sm"
            aria-label="Distribution chart"
          >
            <h2 className="font-display text-lg font-bold text-text-primary mb-1">Holder Distribution</h2>
            <p className="text-xs text-text-secondary mb-4">Accounts by XRP balance range</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockDistribution} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00A3FF" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#00A3FF" stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="range" tick={{ fontSize: 10, fill: "#8B949E" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#8B949E" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => v >= 1000000 ? `${(v/1000000).toFixed(0)}M` : v >= 1000 ? `${(v/1000).toFixed(0)}K` : String(v)} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="accounts" fill="url(#barGrad)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glow rounded-2xl border border-surface-border bg-surface-card/50 p-6 backdrop-blur-sm"
            aria-label="Supply breakdown"
          >
            <h2 className="font-display text-lg font-bold text-text-primary mb-1">Supply Breakdown</h2>
            <p className="text-xs text-text-secondary mb-4">100 billion total XRP</p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={supplyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={95}
                    paddingAngle={3}
                    dataKey="value"
                    strokeWidth={0}
                  >
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
                <div key={item.name} className="flex items-center gap-2 rounded-lg bg-surface-primary/50 px-3 py-2">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: SUPPLY_COLORS[i] }} />
                  <div className="text-xs">
                    <span className="text-text-secondary">{item.name}</span>
                    <span className="ml-1 font-mono font-semibold text-text-primary">{item.value}B</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* XRP Holder Tier Chart */}
        <TierChart />

        {/* Interactive Tier Calculator */}
        <TierCalculator />

        {/* FAQ */}
        <TierFAQ />
      </div>
    </>
  );
}

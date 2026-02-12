"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  ArrowUpDown,
  ExternalLink,
  Info,
  BarChart3,
  Landmark,
  Lock,
  Layers,
} from "lucide-react";
import etfData from "@/data/xrp-etf-data.json";

type SortKey = "aum" | "xrpLocked" | "dailyVolume" | "priceChange24h";
type SortDir = "asc" | "desc";

function fmt(n: number, style: "currency" | "compact" | "number" | "percent" = "compact") {
  if (style === "percent") return `${n >= 0 ? "+" : ""}${n.toFixed(2)}%`;
  if (style === "currency")
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(n);
  if (style === "number")
    return new Intl.NumberFormat("en-US").format(n);
  // compact
  if (Math.abs(n) >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (Math.abs(n) >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  if (Math.abs(n) >= 1e3) return `$${(n / 1e3).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
}

function fmtXRP(n: number) {
  if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  return new Intl.NumberFormat("en-US").format(n);
}

export default function ETFPage() {
  const [sortKey, setSortKey] = useState<SortKey>("aum");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const { totals, etfs, dailyFlows } = etfData;
  const pctOfSupply = ((totals.totalXRPLocked / totals.xrpCirculatingSupply) * 100).toFixed(2);
  const progressPct = Math.min((totals.totalXRPLocked / 1e9) * 100, 100);

  const sorted = useMemo(() => {
    return [...etfs].sort((a, b) => {
      const mul = sortDir === "desc" ? -1 : 1;
      return mul * (a[sortKey] - b[sortKey]);
    });
  }, [etfs, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir(sortDir === "desc" ? "asc" : "desc");
    else { setSortKey(key); setSortDir("desc"); }
  }

  const maxFlow = Math.max(...dailyFlows.map((f) => Math.abs(f.netFlow)));
  const todayFlow = dailyFlows[0]?.netFlow ?? 0;

  return (
    <main id="main-content" className="min-h-screen bg-black">
      {/* Hero */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-[#0085FF]" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#0085FF]">
                ETF Tracker
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              XRP ETF Dashboard
            </h1>
            <p className="text-text-secondary text-sm max-w-2xl">
              Track all spot XRP ETFs — AUM, holdings, daily flows, and volume.
              Data is manually updated. Last update:{" "}
              <span className="text-white/60">
                {new Date(etfData.lastUpdated).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total AUM", value: fmt(totals.totalAUM), icon: Landmark, sub: `across ${totals.numberOfETFs} ETFs` },
              { label: "XRP Locked", value: `${fmtXRP(totals.totalXRPLocked)} XRP`, icon: Lock, sub: `${pctOfSupply}% of circulating` },
              { label: "Daily Volume", value: fmt(totals.totalDailyVolume), icon: Layers, sub: "combined 24h" },
              { label: "Today's Net Flow", value: fmt(Math.abs(todayFlow)), icon: todayFlow >= 0 ? TrendingUp : TrendingDown, sub: todayFlow >= 0 ? "inflow" : "outflow", positive: todayFlow >= 0 },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 md:p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <s.icon className={`h-4 w-4 ${(s as any).positive === false ? "text-red-400" : "text-[#0085FF]"}`} />
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/40">
                    {s.label}
                  </span>
                </div>
                <p className={`text-xl md:text-2xl font-bold tracking-tight ${(s as any).positive === false ? "text-red-400" : "text-white"}`}>
                  {s.value}
                </p>
                <p className="text-[11px] text-white/30 mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Flows */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <h2 className="text-lg font-semibold text-white mb-1">Daily Net Flows</h2>
          <p className="text-[12px] text-white/30 mb-6">Last 30 trading days</p>
          <div className="flex items-end gap-[3px] md:gap-1.5 h-32 md:h-40">
            {[...dailyFlows].reverse().map((f) => {
              const h = (Math.abs(f.netFlow) / maxFlow) * 100;
              const isPos = f.netFlow >= 0;
              return (
                <div
                  key={f.date}
                  className="group relative flex-1 flex flex-col justify-end"
                  style={{ height: "100%" }}
                >
                  <div
                    className={`rounded-t-sm transition-colors ${
                      isPos
                        ? "bg-emerald-500/70 hover:bg-emerald-400"
                        : "bg-red-500/70 hover:bg-red-400"
                    }`}
                    style={{ height: `${Math.max(h, 3)}%` }}
                  />
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block z-10 whitespace-nowrap rounded-lg bg-[#1a1a1b] border border-white/10 px-3 py-2 text-[11px] text-white shadow-xl">
                    <p className="font-medium">{f.date}</p>
                    <p className={isPos ? "text-emerald-400" : "text-red-400"}>
                      {isPos ? "+" : ""}
                      {fmt(f.netFlow)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-white/20">
            <span>{dailyFlows[dailyFlows.length - 1]?.date}</span>
            <span>{dailyFlows[0]?.date}</span>
          </div>
        </div>
      </section>

      {/* XRP Locked Progress */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-base font-semibold text-white">XRP Locked in ETF Vaults</h2>
                <p className="text-[12px] text-white/30">Progress toward 1 Billion XRP milestone</p>
              </div>
              <span className="text-2xl font-bold text-[#0085FF]">{progressPct.toFixed(1)}%</span>
            </div>
            <div className="w-full h-4 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0085FF] to-[#00D4FF] transition-all duration-1000"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-[11px] text-white/30">
              <span>{fmtXRP(totals.totalXRPLocked)} XRP locked</span>
              <span>1,000,000,000 XRP goal</span>
            </div>
          </div>
        </div>
      </section>

      {/* ETF Comparison Table */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <h2 className="text-lg font-semibold text-white mb-6">ETF Comparison</h2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-white/[0.08] text-[11px] uppercase tracking-wider text-white/30">
                  <th className="text-left py-3 pr-4 font-medium">ETF</th>
                  <th className="text-left py-3 pr-4 font-medium">Issuer</th>
                  <th className="text-right py-3 pr-4 font-medium cursor-pointer select-none" onClick={() => toggleSort("aum")}>
                    <span className="inline-flex items-center gap-1">AUM <ArrowUpDown className="h-3 w-3" /></span>
                  </th>
                  <th className="text-right py-3 pr-4 font-medium cursor-pointer select-none" onClick={() => toggleSort("xrpLocked")}>
                    <span className="inline-flex items-center gap-1">XRP Held <ArrowUpDown className="h-3 w-3" /></span>
                  </th>
                  <th className="text-right py-3 pr-4 font-medium cursor-pointer select-none" onClick={() => toggleSort("dailyVolume")}>
                    <span className="inline-flex items-center gap-1">Volume <ArrowUpDown className="h-3 w-3" /></span>
                  </th>
                  <th className="text-right py-3 pr-4 font-medium">Price</th>
                  <th className="text-right py-3 font-medium cursor-pointer select-none" onClick={() => toggleSort("priceChange24h")}>
                    <span className="inline-flex items-center gap-1">24h <ArrowUpDown className="h-3 w-3" /></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((etf) => (
                  <tr key={etf.ticker} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-[#0085FF]/10 text-[#0085FF] text-[11px] font-bold">
                          {etf.ticker.slice(0, 2)}
                        </span>
                        <div>
                          <p className="text-[13px] font-semibold text-white">{etf.ticker}</p>
                          <p className="text-[11px] text-white/30">{etf.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 pr-4 text-[13px] text-white/60">{etf.issuer}</td>
                    <td className="py-3.5 pr-4 text-right text-[13px] font-medium text-white">{fmt(etf.aum)}</td>
                    <td className="py-3.5 pr-4 text-right text-[13px] text-white/70">{fmtXRP(etf.xrpLocked)}</td>
                    <td className="py-3.5 pr-4 text-right text-[13px] text-white/60">{fmt(etf.dailyVolume)}</td>
                    <td className="py-3.5 pr-4 text-right text-[13px] font-medium text-white">{fmt(etf.price, "currency")}</td>
                    <td className={`py-3.5 text-right text-[13px] font-medium ${etf.priceChange24h >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {fmt(etf.priceChange24h, "percent")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ETF Cards */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <h2 className="text-lg font-semibold text-white mb-6">Individual ETFs</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {etfs.map((etf) => (
              <div
                key={etf.ticker}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-white/[0.14] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[#0085FF]/10 text-[#0085FF] text-xs font-bold">
                      {etf.ticker.slice(0, 2)}
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-white">{etf.ticker}</p>
                      <p className="text-[11px] text-white/40">{etf.issuer}</p>
                    </div>
                  </div>
                  <Link
                    href={etf.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/20 hover:text-[#0085FF] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
                <p className="text-[12px] text-white/40 mb-4 leading-relaxed">{etf.description}</p>
                <div className="grid grid-cols-2 gap-3 text-[12px]">
                  <div>
                    <p className="text-white/30">AUM</p>
                    <p className="font-semibold text-white">{fmt(etf.aum)}</p>
                  </div>
                  <div>
                    <p className="text-white/30">XRP Held</p>
                    <p className="font-semibold text-white">{fmtXRP(etf.xrpLocked)}</p>
                  </div>
                  <div>
                    <p className="text-white/30">Price</p>
                    <p className="font-semibold text-white">{fmt(etf.price, "currency")}</p>
                  </div>
                  <div>
                    <p className="text-white/30">24h Change</p>
                    <p className={`font-semibold ${etf.priceChange24h >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {fmt(etf.priceChange24h, "percent")}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/30">Volume</p>
                    <p className="font-semibold text-white">{fmt(etf.dailyVolume)}</p>
                  </div>
                  <div>
                    <p className="text-white/30">Launch</p>
                    <p className="font-semibold text-white">
                      {new Date(etf.launchDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.01] p-4">
            <Info className="h-4 w-4 text-white/20 mt-0.5 flex-shrink-0" />
            <p className="text-[12px] text-white/30 leading-relaxed">
              ETF data is manually updated and may not reflect real-time values.
              This page is for informational purposes only and does not constitute investment advice.
              Always verify data with official fund providers before making investment decisions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

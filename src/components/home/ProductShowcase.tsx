"use client";

import Link from "next/link";
import { ArrowRight, Lock, Globe } from "lucide-react";
import { useXRPPrice } from "@/hooks/useXRPPrice";

function formatCompact(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(1)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  return `$${n.toLocaleString()}`;
}

export default function ProductShowcase() {
  const { data } = useXRPPrice();
  const price = data?.price ?? 2.35;
  const change = data?.change24h ?? 3.2;
  const positive = change >= 0;

  return (
    <section className="mx-auto max-w-5xl px-5 py-16" aria-label="Product showcase">
      <div className="text-center mb-14">
        <p className="text-[11px] font-medium uppercase tracking-widest text-xrp-accent/70 mb-3">Live Data</p>
        <h2 className="text-[32px] font-bold tracking-[-0.03em] text-text-primary md:text-[38px]">
          Data-driven XRP intelligence
        </h2>
        <p className="mt-3 text-[15px] text-text-secondary max-w-lg mx-auto">
          Real-time price data, on-chain analytics, and supply metrics — all in one dashboard.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Price card */}
        <div className="rounded-2xl border border-white/[0.06] bg-[#0A0A0B] p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-[11px] font-medium uppercase tracking-widest text-white/30">Live Price</span>
            </div>
            <span className="text-[11px] font-mono text-white/20">XRP/USD</span>
          </div>

          <div className="flex items-end gap-3">
            <span className="font-mono text-[42px] font-bold tracking-tight text-text-primary leading-none">
              ${price.toFixed(4)}
            </span>
            <span className={`font-mono text-[16px] font-semibold mb-1 ${positive ? "text-success" : "text-danger"}`}>
              {positive ? "+" : ""}{change.toFixed(2)}%
            </span>
          </div>

          {/* Mini chart bars */}
          <div className="mt-6 flex items-end gap-[3px] h-16">
            {Array.from({ length: 24 }, (_, i) => {
              const h = 20 + Math.sin(i * 0.5 + 1) * 15 + Math.random() * 10;
              return (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-xrp-accent/20 hover:bg-xrp-accent/40 transition-colors"
                  style={{ height: `${h}%` }}
                />
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <MiniStat label="Market Cap" value={formatCompact(price * 57.6e9)} />
            <MiniStat label="24h Volume" value="$2.1B" />
            <MiniStat label="Circulating" value="57.6B" />
          </div>

          <Link
            href="/charts"
            className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-xrp-accent hover:text-xrp-accent-bright transition-colors"
          >
            View full charts <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Supply card */}
        <div className="rounded-2xl border border-white/[0.06] bg-[#0A0A0B] p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Lock className="h-3.5 w-3.5 text-white/30" />
              <span className="text-[11px] font-medium uppercase tracking-widest text-white/30">Supply Overview</span>
            </div>
          </div>

          <div className="space-y-4">
            <SupplyRow label="Total Supply" value="100,000,000,000" pct={100} color="bg-white/10" />
            <SupplyRow label="Circulating" value="~60,000,000,000" pct={60} color="bg-xrp-accent" />
            <SupplyRow label="In Escrow" value="~33,900,000,000" pct={33.9} color="bg-xrp-accent/50" />
            <SupplyRow label="Burned" value="~14,260,000" pct={0.01} color="bg-white/20" />
          </div>

          <div className="border-t border-white/[0.06] my-5" />

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/escrow"
              className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-[13px] font-medium text-text-primary hover:bg-white/[0.04] hover:border-white/[0.1] transition-all"
            >
              <Lock className="h-3.5 w-3.5 text-xrp-accent" />
              Escrow Deep Dive
            </Link>
            <Link
              href="/holders"
              className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-[13px] font-medium text-text-primary hover:bg-white/[0.04] hover:border-white/[0.1] transition-all"
            >
              <Globe className="h-3.5 w-3.5 text-xrp-accent" />
              Holders
            </Link>
          </div>

          <div className="mt-5 flex items-center gap-2 text-[12px] text-white/20">
            <Globe className="h-3.5 w-3.5" />
            <span>Data sourced from XRP Ledger &amp; XRPScan</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/[0.04] bg-white/[0.02] px-3 py-2">
      <div className="text-[10px] font-medium uppercase tracking-widest text-white/25">{label}</div>
      <div className="font-mono text-[14px] font-semibold text-text-primary mt-0.5">{value}</div>
    </div>
  );
}

function SupplyRow({ label, value, pct, color }: { label: string; value: string; pct: number; color: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[13px] font-medium text-text-secondary">{label}</span>
        <span className="font-mono text-[13px] text-text-primary">{value}</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/[0.04] overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all duration-700`} style={{ width: `${Math.max(pct, 0.5)}%` }} />
      </div>
    </div>
  );
}

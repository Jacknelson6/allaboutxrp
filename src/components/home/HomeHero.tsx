"use client";

import Link from "next/link";
import { useXRPPrice } from "@/hooks/useXRPPrice";
import { TrendingUp, TrendingDown } from "lucide-react";

function formatMarketCap(price: number): string {
  const mcap = price * 57_600_000_000;
  if (mcap >= 1e12) return `$${(mcap / 1e12).toFixed(1)}T`;
  return `$${(mcap / 1e9).toFixed(0)}B`;
}

export default function HomeHero() {
  const { data, flash } = useXRPPrice();
  const positive = data ? data.change24h >= 0 : true;

  return (
    <section className="relative overflow-hidden max-w-full" aria-label="Hero">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(0,133,255,0.08)_0%,rgba(0,133,255,0.02)_40%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 pt-20 pb-6">
        {/* Stat pills — CryptoSea style, top of hero */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <StatPill
            value={data ? `$${data.price.toFixed(4)}` : "$—"}
            label="XRP Price"
            accent
            flash={flash}
          />
          <StatPill value="100B" label="Total Supply" />
          <StatPill
            value={data ? formatMarketCap(data.price) : "$—"}
            label="Market Cap"
          />
          <StatPill
            value={data ? `${positive ? "+" : ""}${data.change24h.toFixed(2)}%` : "—"}
            label="24h Change"
            positive={positive}
          />
        </div>

        {/* Main headline */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[48px] font-bold tracking-[-0.04em] leading-[1.05] text-text-primary md:text-[68px]">
            Everything{" "}
            <span className="gradient-text">XRP</span>
            <br className="hidden sm:block" />
            {" "}in one place
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.7] text-text-secondary">
            Live data, curated community voices, on-chain analytics, and comprehensive education — the premium XRP resource hub.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/learn/what-is-xrp" className="btn-primary px-6 py-3 text-[15px]">
              Start Learning
            </Link>
            <Link href="/richlist" className="btn-secondary px-6 py-3 text-[15px]">
              Explore Rich List
            </Link>
          </div>
        </div>

        {/* Social proof line */}
        <div className="mt-14 flex items-center justify-center gap-6 text-[12px] text-white/25">
          <span>Tracking the XRP Ledger</span>
          <span className="h-3 w-px bg-white/10" />
          <span>90M+ ledgers closed</span>
          <span className="h-3 w-px bg-white/10" />
          <span>Since 2012</span>
        </div>
      </div>
    </section>
  );
}

/* CryptoSea-style stat pill */
function StatPill({
  value,
  label,
  accent,
  positive,
  flash,
}: {
  value: string;
  label: string;
  accent?: boolean;
  positive?: boolean;
  flash?: "up" | "down" | null;
}) {
  let valueColor = "text-text-primary";
  if (accent) {
    valueColor = flash === "up" ? "text-success" : flash === "down" ? "text-danger" : "text-text-primary";
  }
  if (positive !== undefined) {
    valueColor = positive ? "text-success" : "text-danger";
  }

  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 backdrop-blur-sm">
      <div>
        <div className={`font-mono text-[18px] font-bold tracking-tight transition-colors duration-300 ${valueColor}`}>
          {value}
        </div>
        <div className="text-[10px] font-medium uppercase tracking-widest text-white/30 mt-0.5">
          {label}
        </div>
      </div>
    </div>
  );
}

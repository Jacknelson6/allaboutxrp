"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, TrendingDown, BookOpen, Wrench, Eye } from "lucide-react";
import { useXRPPrice } from "@/hooks/useXRPPrice";
import TradeModal from "@/components/shared/TradeModal";
import MiniPreviewCard from "./MiniPreviewCard";

const watchItems = [
  { title: "XRP vs SWIFT", href: "/learn/xrp-vs-swift" },
  { title: "SEC vs Ripple", href: "/learn/sec-vs-ripple" },
  { title: "XRP ETF", href: "/learn/xrp-etf" },
];

function fmtPrice(n: number): string {
  if (n >= 1) return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  return n.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 6 });
}

function PricePerformance() {
  const { data } = useXRPPrice();

  const periods = [
    { label: "24h", value: data?.change24h },
    { label: "7d", value: data?.change7d },
    { label: "30d", value: data?.change30d },
  ];

  return (
    <section className="mt-4 rounded-xl border border-surface-border bg-surface-card p-5" aria-labelledby="price-performance-title">
      <h3 id="price-performance-title" className="text-lg font-semibold text-text-primary">Price performance</h3>
      <p className="mt-1 text-xs text-text-secondary">Current change by period</p>
      <div className="mt-4 space-y-2.5">
        {periods.map(({ label, value }) => {
          const positive = (value ?? 0) >= 0;
          const Icon = positive ? TrendingUp : TrendingDown;
          return (
            <div key={label} className="flex items-center justify-between">
              <span className="text-[13px] text-text-secondary">{label}</span>
              {value != null ? (
                <span className={`flex items-center gap-1 text-[13px] font-medium ${positive ? "text-success" : "text-danger"}`}>
                  <Icon className="h-3 w-3" />
                  {positive ? "+" : ""}{value.toFixed(2)}%
                </span>
              ) : (
                <span className="text-[13px] text-text-secondary">--</span>
              )}
            </div>
          );
        })}
      </div>
      {data && (data.high24h > 0 || data.low24h > 0) && (
        <div className="mt-4 flex justify-between border-t border-surface-border pt-3 font-mono text-[11px] text-text-secondary">
          <span>24h High: ${fmtPrice(data.high24h)}</span>
          <span>24h Low: ${fmtPrice(data.low24h)}</span>
        </div>
      )}
    </section>
  );
}

function LivePriceWidget({ compact = false }: { compact?: boolean }) {
  const { data, flash } = useXRPPrice();
  const [modalOpen, setModalOpen] = useState(false);

  if (!data) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <span className="font-mono text-text-secondary">XRP $--.--</span>
      </div>
    );
  }

  const positive = data.change24h >= 0;
  const Icon = positive ? TrendingUp : TrendingDown;
  const flashColor = flash === "up" ? "text-success" : flash === "down" ? "text-danger" : "text-text-primary";

  if (compact) {
    return (
      <button onClick={() => setModalOpen(true)} className="flex min-h-11 items-center gap-3 text-sm" aria-label="Open XRP trade options">
        <span className="text-text-secondary text-[13px]">XRP</span>
        <span className={`font-mono font-bold text-[15px] transition-colors duration-300 ${flashColor}`}>
          ${fmtPrice(data.price)}
        </span>
        <span className={`flex items-center gap-1 text-xs font-medium ${positive ? "text-success" : "text-danger"}`}>
          <Icon className="h-3 w-3" />
          {positive ? "+" : ""}{data.change24h.toFixed(2)}%
        </span>
        <TradeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} priceInfo={data} />
      </button>
    );
  }

  return (
    <>
      <a
        href="/live-chart"
        className="block w-full rounded-xl border border-surface-border bg-surface-card p-5 text-left transition-colors hover:border-xrp-accent-bright/40 hover:bg-surface-elevated"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-bold text-text-primary">XRP / USDT</span>
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
        </div>
        <div className={`font-mono text-[28px] font-bold transition-colors duration-300 ${flashColor}`}>
          ${fmtPrice(data.price)}
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className={`flex items-center gap-1 text-[13px] font-medium ${positive ? "text-success" : "text-danger"}`}>
            <Icon className="h-3.5 w-3.5" />
            {positive ? "+" : ""}{data.change24h.toFixed(2)}%
          </span>
          <span className="text-[13px] text-text-secondary">24h</span>
        </div>
        {(data.high24h > 0 || data.low24h > 0) && (
          <div className="mt-3 flex justify-between text-[12px] text-text-secondary">
            <span>H: ${fmtPrice(data.high24h)}</span>
            <span>L: ${fmtPrice(data.low24h)}</span>
          </div>
        )}
        <span className="mt-3 inline-flex min-h-11 items-center text-[13px] font-semibold text-xrp-accent-bright">View live price</span>
      </a>
    </>
  );
}

export default function RightSidebar({ mobilePrice = false }: { mobilePrice?: boolean }) {
  // Mobile: just show compact price
  if (mobilePrice) {
    return <LivePriceWidget compact />;
  }

  return (
    <aside className="px-5 pb-3" aria-label="Live XRP data and research links">
      {/* 1. Combined: Price + Globe + Chart */}
      <MiniPreviewCard />

      {/* Price Performance */}
      <PricePerformance />

      {/* 4. What to Watch */}
      <section className="mt-4 rounded-xl border border-surface-border bg-surface-card p-5" aria-labelledby="watch-title">
        <div className="flex items-center gap-2 mb-1">
          <Eye className="h-4 w-4 text-xrp-accent-bright" aria-hidden="true" />
          <h3 id="watch-title" className="text-lg font-semibold text-text-primary">What to watch</h3>
        </div>
        <p className="mb-3 text-xs text-text-secondary">Research topics with active implications</p>
        <div className="divide-y divide-surface-border">
          {watchItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-h-11 items-center justify-between py-2 text-[13px] font-semibold text-text-primary transition-colors hover:text-xrp-accent-bright"
            >
              <span>{item.title}</span>
              <span aria-hidden="true" className="text-text-secondary transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Explore: Learn & Tools — horizontal stacked */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
        <Link href="/learn" className="group flex min-h-20 items-center gap-4 rounded-xl border border-surface-border bg-surface-card p-4 transition-colors hover:border-xrp-accent-bright/40 hover:bg-surface-elevated">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-xrp-accent/10">
            <BookOpen className="h-5 w-5 text-xrp-accent-bright" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-text-primary group-hover:text-xrp-accent-bright">Learn</h3>
            <p className="text-xs leading-snug text-text-secondary">Source-led XRP guides</p>
          </div>
        </Link>
        <Link href="/tools" className="group flex min-h-20 items-center gap-4 rounded-xl border border-surface-border bg-surface-card p-4 transition-colors hover:border-xrp-accent-bright/40 hover:bg-surface-elevated">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-xrp-accent/10">
            <Wrench className="h-5 w-5 text-xrp-accent-bright" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-text-primary group-hover:text-xrp-accent-bright">Tools</h3>
            <p className="text-xs leading-snug text-text-secondary">Calculators and live data</p>
          </div>
        </Link>
      </div>
    </aside>
  );
}

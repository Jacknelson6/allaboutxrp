"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TrendingUp, TrendingDown, ArrowRight, Chrome, BookOpen, Wrench, Eye } from "lucide-react";
import { useXRPPrice } from "@/hooks/useXRPPrice";
import TradeModal from "@/components/shared/TradeModal";
import NewsletterSignup from "@/components/shared/NewsletterSignup";

const watchItems = [
  { title: "Why SWIFT Is Dying and XRP Could Replace It", teaser: "The $150T system Ripple is disrupting", href: "/learn/xrp-vs-swift" },
  { title: "The SEC Case That Changed Crypto Forever", teaser: "How Ripple won and what it means", href: "/learn/sec-vs-ripple-explained" },
  { title: "XRP ETF: When It's Coming and What It Means", teaser: "Timeline, odds, and price impact", href: "/learn/xrp-etf" },
  { title: "Can XRP Hit $100? The Real Math", teaser: "Market cap math, not hopium", href: "/learn/xrp-price-potential" },
  { title: "Ripple IPO: What Happens to XRP Price?", teaser: "The $11B company going public", href: "/learn/ripple-ipo" },
];
import MiniPreviewCard from "./MiniPreviewCard";

function fmtPrice(n: number): string {
  if (n >= 1) return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  return n.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 6 });
}

const trendingTopics = [
  { category: "XRP Ecosystem", title: "RLUSD hits $1.5B market cap", posts: "12.4K posts" },
  { category: "Legal", title: "SEC case officially dismissed", posts: "45.2K posts" },
  { category: "Partnerships", title: "Société Générale x Ripple", posts: "8.7K posts" },
  { category: "Technology", title: "XRP Ledger AMM goes live", posts: "6.1K posts" },
  { category: "Market", title: "$XRP breaks $2.50 resistance", posts: "23.8K posts" },
];


function PricePerformance() {
  const { data } = useXRPPrice();

  const periods = [
    { label: "24h", value: data?.change24h },
    { label: "7d", value: data?.change7d },
    { label: "30d", value: data?.change30d },
  ];

  return (
    <div className="mt-4 rounded-2xl border border-[#2F3336] bg-[#16181C] p-4">
      <h3 className="text-[15px] font-bold text-text-primary mb-3">Price Performance</h3>
      <div className="space-y-2.5">
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
        <div className="mt-3 pt-3 border-t border-[#2F3336] flex justify-between text-[12px] text-text-secondary">
          <span>24h High: ${fmtPrice(data.high24h)}</span>
          <span>24h Low: ${fmtPrice(data.low24h)}</span>
        </div>
      )}
    </div>
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
      <button onClick={() => setModalOpen(true)} className="flex items-center gap-3 text-sm">
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
        className="block w-full rounded-2xl border border-[#2F3336] bg-[#16181C] p-4 text-left hover:bg-[#1D1F23] transition-colors"
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
        <div className="mt-3 flex items-center gap-2 text-[13px] font-medium text-[#0085FF] hover:gap-3 transition-all">
          View Live Price
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
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
    <div className="pb-3 px-5 pt-[28px]">
      {/* 1. Combined: Price + Globe + Chart */}
      <MiniPreviewCard />

      {/* Price Performance */}
      <PricePerformance />

      {/* 4. What to Watch */}
      <div className="mt-4 rounded-2xl border border-[#2F3336] bg-[#16181C] p-4">
        <div className="flex items-center gap-2 mb-1">
          <Eye className="h-4 w-4 text-[#0085FF]" />
          <h3 className="text-[15px] font-bold text-text-primary">What to Watch</h3>
        </div>
        <p className="text-[12px] text-text-secondary mb-3">Key catalysts for XRP adoption</p>
        <div className="space-y-0.5">
          {watchItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative block rounded-lg px-2 py-2 -mx-2 transition-all group overflow-hidden"
            >
              <div className="absolute inset-0 z-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
              <div className="absolute -inset-px bg-gradient-to-br from-[#0085FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none z-0" />
              <span className="relative z-10 text-[13px] font-semibold text-text-primary group-hover:text-[#0085FF] transition-colors leading-snug block">
                {item.title}
              </span>
              <span className="relative z-10 text-[11px] text-text-secondary leading-snug block mt-0.5">
                {item.teaser}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* 5. Explore: Learn & Tools — horizontal stacked */}
      <div className="mt-4 space-y-3">
        <Link href="/learn" className="relative rounded-2xl border border-[#2F3336] bg-[#16181C] p-4 transition-all group/learn flex items-center gap-4 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-white/[0.03] opacity-0 group-hover/learn:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
          <div className="absolute -inset-px bg-gradient-to-br from-[#0085FF]/30 to-transparent opacity-0 group-hover/learn:opacity-100 transition-opacity rounded-2xl pointer-events-none z-0" />
          <div className="relative z-10 h-10 w-10 shrink-0 rounded-xl bg-[#0085FF]/10 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-[#0085FF]" />
          </div>
          <div className="relative z-10">
            <h3 className="text-[15px] font-bold text-text-primary">Learn</h3>
            <p className="text-[12px] text-text-secondary leading-snug">Guides, FAQs, and everything XRP</p>
          </div>
        </Link>
        <Link href="/tools" className="relative rounded-2xl border border-[#2F3336] bg-[#16181C] p-4 transition-all group/tools flex items-center gap-4 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-white/[0.03] opacity-0 group-hover/tools:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
          <div className="absolute -inset-px bg-gradient-to-br from-[#0085FF]/30 to-transparent opacity-0 group-hover/tools:opacity-100 transition-opacity rounded-2xl pointer-events-none z-0" />
          <div className="relative z-10 h-10 w-10 shrink-0 rounded-xl bg-[#0085FF]/10 flex items-center justify-center">
            <Wrench className="h-5 w-5 text-[#0085FF]" />
          </div>
          <div className="relative z-10">
            <h3 className="text-[15px] font-bold text-text-primary">Tools</h3>
            <p className="text-[12px] text-text-secondary leading-snug">Calculators, converters, and more</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

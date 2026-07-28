"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen, Wallet, MessageCircle, Wrench } from "lucide-react";
import RightSidebar from "./RightSidebar";
import NewsFeed from "./NewsFeed";

const quickLinks = [
  { href: "/learn/what-is-xrp", label: "What is XRP?", icon: BookOpen },
  { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", icon: Wallet },
  { href: "/learn/sec-vs-ripple", label: "SEC vs Ripple", icon: BookOpen },
  { href: "/learn/xrp-etf", label: "XRP ETF", icon: BookOpen },
  { href: "/learn/rlusd", label: "RLUSD", icon: BookOpen },
  { href: "/learn/xrp-price-prediction", label: "Price Prediction", icon: BookOpen },
  { href: "/learn/partnerships", label: "Partnerships", icon: BookOpen },
  { href: "/learn/escrow", label: "Escrow", icon: BookOpen },
  { href: "/learn/what-makes-xrp-different", label: "What Makes XRP Different", icon: BookOpen },
  { href: "/learn/history", label: "XRP History", icon: BookOpen },
  { href: "/learn/xrp-wallets", label: "XRP Wallets", icon: Wallet },
  { href: "/learn/xrpl-reserves-explained", label: "Wallet Reserves", icon: Wallet },
  { href: "/answers", label: "Quick Answers", icon: MessageCircle },
  { href: "/tools", label: "XRP Tools", icon: Wrench },
];

export default function HomeFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -150 : 150, behavior: "smooth" });
  };

  return (
    <div className="bg-black">
      <section className="border-b border-white/[0.06] bg-[radial-gradient(circle_at_top_left,rgba(0,133,255,0.12),transparent_42%)]">
        <div className="mx-auto max-w-[1100px] px-4 py-10 sm:px-5 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-xrp-accent">
            Independent XRP research and live data
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-[-0.04em] text-text-primary sm:text-5xl">
            XRP news, data, tools, and source-led explainers
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary sm:text-lg">
            Understand XRP and the XRP Ledger with practical guides, live market and ledger data,
            holder analytics, useful tools, and a curated news feed—all in one independent resource.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/learn/what-is-xrp"
              className="rounded-full bg-xrp-accent px-5 py-2.5 font-semibold text-white transition-colors hover:bg-xrp-accent-bright"
            >
              Start with XRP
            </Link>
            <Link
              href="/learn/trusted-sources"
              className="rounded-full border border-white/10 px-5 py-2.5 font-medium text-text-primary transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              Review our sources
            </Link>
            <Link
              href="/editorial"
              className="rounded-full border border-white/10 px-5 py-2.5 font-medium text-text-primary transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              How we research
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links bar */}
      <div className="border-b border-[#2F3336] bg-black/50">
        <div className="mx-auto max-w-[1100px] px-3 py-2 lg:px-4 lg:py-3 relative">
          {/* Left chevron */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-8 w-8 bg-gradient-to-r from-black via-black/90 to-transparent"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4 text-white/60" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex items-center gap-2 overflow-x-auto flex-nowrap scrollbar-hide"
          >
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-2 min-h-[44px] text-xs font-medium text-[#888] hover:text-white hover:border-[#0085FF]/30 transition-all"
              >
                <link.icon className="h-3 w-3" />
                {link.label}
              </Link>
            ))}
            <Link
              href="/learn"
              className="flex items-center gap-1 whitespace-nowrap rounded-full bg-[#0085FF]/10 border border-[#0085FF]/20 px-3 py-2 min-h-[44px] text-xs font-medium text-[#0085FF] hover:bg-[#0085FF]/20 transition-all"
            >
              Learn Hub <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Right chevron */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-8 w-12 bg-gradient-to-l from-black via-black/80 to-transparent"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4 text-white/60" />
            </button>
          )}
        </div>
      </div>

      <section className="border-b border-white/[0.06]" aria-labelledby="xrp-overview-heading">
        <div className="mx-auto max-w-[1100px] px-4 py-6 sm:px-5">
          <h2 id="xrp-overview-heading" className="text-lg font-bold tracking-[-0.02em] text-text-primary">
            What is XRP?
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">
            XRP is the native digital asset of the open-source XRP Ledger. It is used for transaction fees and can bridge value between currencies and tokens. XRP is distinct from Ripple, the private company that builds products using XRP and XRPL technology.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link href="/learn/what-is-xrp" className="font-medium text-xrp-accent hover:underline">Read the complete XRP guide</Link>
            <a href="https://xrpl.org/about/xrp" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary hover:underline">Verify with XRPL.org</a>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-0 lg:gap-6 px-0 lg:px-4 overflow-hidden">
        {/* Center feed */}
        <div className="min-w-0 overflow-hidden max-w-full lg:max-w-[650px] mx-auto lg:mx-0 lg:justify-self-center">
          <NewsFeed />
        </div>

        {/* Right sidebar - desktop only */}
        <div className="hidden lg:block">
          <div className="sticky top-20">
            <RightSidebar />
          </div>
        </div>
      </div>

    </div>
  );
}

"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen, Wallet, MessageCircle, Wrench } from "lucide-react";
import RightSidebar from "./RightSidebar";
import DailyDigest from "./DailyDigest";

const quickLinks = [
  { href: "/learn/what-is-xrp", label: "What is XRP?", icon: BookOpen },
  { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", icon: Wallet },
  { href: "/best/xrp-exchanges", label: "Best Exchanges", icon: Wallet },
  { href: "/best/xrp-wallets", label: "Best Wallets", icon: Wallet },
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
    <div className="min-h-screen bg-black">
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
                className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-[#888] hover:text-white hover:border-[#0085FF]/30 transition-all"
              >
                <link.icon className="h-3 w-3" />
                {link.label}
              </Link>
            ))}
            <Link
              href="/learn"
              className="flex items-center gap-1 whitespace-nowrap rounded-full bg-[#0085FF]/10 border border-[#0085FF]/20 px-3 py-1.5 text-xs font-medium text-[#0085FF] hover:bg-[#0085FF]/20 transition-all"
            >
              Learn Hub <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Right chevron */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-8 w-8 bg-gradient-to-l from-black via-black/90 to-transparent"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4 text-white/60" />
            </button>
          )}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-0 lg:gap-6 px-0 lg:px-4 overflow-hidden">
        {/* Center feed */}
        <div className="min-w-0 overflow-hidden max-w-full lg:max-w-[650px] mx-auto lg:mx-0 lg:justify-self-center">
          <DailyDigest />
        </div>

        {/* Right sidebar - desktop only */}
        <div className="hidden lg:block">
          <div className="sticky top-20 pt-8">
            <RightSidebar />
          </div>
        </div>
      </div>

    </div>
  );
}

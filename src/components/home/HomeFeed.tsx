"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Wallet, MessageCircle, Wrench } from "lucide-react";
import XFeed from "./XFeed";
import RightSidebar from "./RightSidebar";

const quickLinks = [
  { href: "/learn/what-is-xrp", label: "What is XRP?", icon: BookOpen },
  { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", icon: Wallet },
  { href: "/best/xrp-exchanges", label: "Best Exchanges", icon: Wallet },
  { href: "/best/xrp-wallets", label: "Best Wallets", icon: Wallet },
  { href: "/answers", label: "Quick Answers", icon: MessageCircle },
  { href: "/tools", label: "XRP Tools", icon: Wrench },
];

export default function HomeFeed() {
  return (
    <div className="min-h-screen bg-black">
      {/* Quick links bar */}
      <div className="border-b border-[#2F3336] bg-black/50">
        <div className="mx-auto max-w-[1100px] px-3 py-2 lg:px-4 lg:py-3">
          <div className="flex items-center gap-2 overflow-x-auto flex-nowrap scrollbar-hide">
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
        </div>
      </div>

      {/* Two-column layout */}
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-0 lg:gap-6 px-0 lg:px-4">
        {/* Center feed */}
        <div className="min-w-0 max-w-[650px] mx-auto lg:mx-0 lg:justify-self-center">
          <XFeed />
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

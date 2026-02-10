"use client";

import Link from "next/link";
import { Globe, BarChart3, Users, TrendingUp, BookOpen, Heart } from "lucide-react";

const features = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: "3D Globe",
    desc: "Watch XRP transactions flow across the world in real-time on an interactive 3D globe.",
    href: "/live",
    color: "text-blue-400",
    glow: "bg-blue-500/10",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Live Charts",
    desc: "TradingView-powered charts with real-time XRP/USD price data and technical indicators.",
    href: "/charts",
    color: "text-emerald-400",
    glow: "bg-emerald-500/10",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Rich List",
    desc: "Track whale wallets, supply distribution, and the top XRP holders with live data.",
    href: "/richlist",
    color: "text-purple-400",
    glow: "bg-purple-500/10",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Analysis",
    desc: "Daily market recaps, macro insights, and community sentiment from vetted voices.",
    href: "/news/recaps",
    color: "text-amber-400",
    glow: "bg-amber-500/10",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Learn",
    desc: "Comprehensive guides on XRP, Ripple, escrow, RLUSD, partnerships, and more.",
    href: "/learn",
    color: "text-cyan-400",
    glow: "bg-cyan-500/10",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Community",
    desc: "Curated X/Twitter feed from the most trusted voices in the XRP ecosystem.",
    href: "#community-feed",
    color: "text-rose-400",
    glow: "bg-rose-500/10",
  },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20" aria-label="Features">
      <div className="text-center mb-12">
        <p className="text-[11px] font-medium uppercase tracking-widest text-xrp-accent/70 mb-3">Platform</p>
        <h2 className="text-[32px] font-bold tracking-[-0.03em] text-text-primary md:text-[38px]">
          All the tools you need
        </h2>
        <p className="mt-3 text-[15px] text-text-secondary max-w-lg mx-auto">
          Live data, education, and analytics — everything to track and understand the XRP ecosystem.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Link
            key={f.title}
            href={f.href}
            className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6 transition-all duration-300 hover:border-white/[0.12] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          >
            {/* Subtle corner glow on hover */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${f.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

            <div className="relative">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.02] ${f.color} mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-text-primary tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-[13px] text-text-secondary leading-relaxed">
                {f.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { BarChart3, Trophy, LockKeyhole, Wrench, BookOpen, Heart } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Live XRP Chart",
    desc: "Follow XRP market prices and chart activity without leaving the research hub.",
    href: "/live-chart",
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    title: "XRP Holders",
    desc: "Explore major accounts and supply distribution with clear methodology and live data.",
    href: "/holders",
  },
  {
    icon: <LockKeyhole className="h-5 w-5" />,
    title: "Escrow Tracker",
    desc: "Review XRP escrow balances, releases, and returned amounts using ledger data.",
    href: "/tools/escrow-tracker",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "XRP Guides",
    desc: "Learn the fundamentals, evaluate claims, and follow source links for further reading.",
    href: "/learn",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "XRP Tools",
    desc: "Use calculators, trackers, checks, and planning tools built around XRP and XRPL.",
    href: "/tools",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Weekly Digest",
    desc: "Get weekly XRP analysis and key developments delivered to your inbox.",
    href: "/digest",
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
            className="group rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6 transition-all duration-300 hover:border-white/[0.12] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.02] text-xrp-accent mb-4">
              {f.icon}
            </div>
            <h3 className="text-[16px] font-semibold text-text-primary tracking-tight">
              {f.title}
            </h3>
            <p className="mt-2 text-[13px] text-text-secondary leading-relaxed">
              {f.desc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

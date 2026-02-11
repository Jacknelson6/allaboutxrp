"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp, Users, UserCircle, Handshake,
  Building2, Eye, ArrowRight,
} from "lucide-react";

const sections = [
  {
    href: "/people/holders",
    label: "Holders",
    desc: "Rich list, tier calculator, and holder distribution",
    icon: TrendingUp,
    stat: "5.6M+ accounts",
    gradient: "from-[#0085FF] to-[#00C2FF]",
    glowColor: "hover:shadow-[0_0_30px_rgba(0,133,255,0.3)]",
    borderHover: "hover:border-[#0085FF]/50",
  },
  {
    href: "/people/trusted-sources",
    label: "Trusted Sources",
    desc: "Curated voices from the XRP ecosystem",
    icon: Users,
    stat: "Hand-picked experts",
    gradient: "from-[#0085FF] to-[#6366F1]",
    glowColor: "hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
    borderHover: "hover:border-[#6366F1]/50",
  },
  {
    href: "/people/key-people",
    label: "Key People",
    desc: "Ripple's leadership team driving the ecosystem",
    icon: UserCircle,
    stat: "Brad, David & more",
    gradient: "from-[#6366F1] to-[#8B5CF6]",
    glowColor: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    borderHover: "hover:border-[#8B5CF6]/50",
  },
  {
    href: "/people/partnerships",
    label: "Partnerships",
    desc: "Banks, payment providers, and institutions worldwide",
    icon: Handshake,
    stat: "55+ partners globally",
    gradient: "from-[#0085FF] to-[#06B6D4]",
    glowColor: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    borderHover: "hover:border-[#06B6D4]/50",
  },
  {
    href: "/people/acquisitions",
    label: "Acquisitions",
    desc: "Strategic acquisitions powering Ripple's growth",
    icon: Building2,
    stat: "10+ acquisitions",
    gradient: "from-[#06B6D4] to-[#0085FF]",
    glowColor: "hover:shadow-[0_0_30px_rgba(0,133,255,0.3)]",
    borderHover: "hover:border-[#0085FF]/50",
  },
  {
    href: "/people/riddlers",
    label: "Riddlers",
    desc: "The legendary XRP riddle community",
    icon: Eye,
    stat: "Decode the mystery",
    gradient: "from-[#8B5CF6] to-[#EC4899]",
    glowColor: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    borderHover: "hover:border-[#EC4899]/50",
  },
];

export default function PeoplePage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Hero gradient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,133,255,0.15)_0%,_transparent_70%)]" />
        <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(99,102,241,0.1)_0%,_transparent_70%)]" />
        <div className="absolute top-10 right-1/4 w-[250px] h-[250px] bg-[radial-gradient(circle,_rgba(6,182,212,0.08)_0%,_transparent_70%)]" />
      </div>

      {/* Hero */}
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-[40px] font-bold tracking-[-0.04em] text-white md:text-[56px] leading-tight">
            XRP{" "}
            <span className="bg-gradient-to-r from-[#0085FF] via-[#06B6D4] to-[#6366F1] bg-clip-text text-transparent">
              People &amp; Ecosystem
            </span>
          </h1>
          <p className="mt-4 text-[#888] max-w-2xl text-lg leading-relaxed">
            Holders, trusted voices, leadership, partnerships, acquisitions, and the legendary riddlers — everything about who&apos;s behind XRP.
          </p>
        </motion.div>
      </div>

      {/* Cards grid */}
      <div className="relative mx-auto max-w-7xl px-4 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  href={s.href}
                  className={`group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-300 h-full ${s.borderHover} ${s.glowColor} hover:scale-[1.02] hover:bg-white/[0.04]`}
                >
                  {/* Icon with gradient bg */}
                  <div className={`rounded-xl bg-gradient-to-br ${s.gradient} p-4 w-fit`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="mt-5 text-xl font-bold text-white">{s.label}</h2>

                  {/* Description */}
                  <p className="mt-2 text-sm text-[#888] leading-relaxed flex-1">{s.desc}</p>

                  {/* Stat callout */}
                  <div className="mt-4 inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0085FF] animate-pulse" />
                    <span className="text-xs font-medium text-[#0085FF]/80">{s.stat}</span>
                  </div>

                  {/* Explore link */}
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 group-hover:text-white group-hover:gap-2.5 transition-all duration-300">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

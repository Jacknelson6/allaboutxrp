"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp, Users, UserCircle, Handshake,
  Building2, Eye, ArrowRight,
} from "lucide-react";

const sections = [
  { href: "/people/holders", label: "Holders", desc: "Rich list, tier calculator, and holder distribution", icon: <TrendingUp className="h-6 w-6" /> },
  { href: "/people/trusted-sources", label: "Trusted Sources", desc: "Curated voices from the XRP ecosystem", icon: <Users className="h-6 w-6" /> },
  { href: "/people/key-people", label: "Key People", desc: "Ripple's leadership team driving the ecosystem", icon: <UserCircle className="h-6 w-6" /> },
  { href: "/people/partnerships", label: "Partnerships", desc: "Banks, payment providers, and institutions across 55+ countries", icon: <Handshake className="h-6 w-6" /> },
  { href: "/people/acquisitions", label: "Acquisitions", desc: "Strategic acquisitions powering Ripple's growth", icon: <Building2 className="h-6 w-6" /> },
  { href: "/people/riddlers", label: "Riddlers", desc: "The legendary XRP riddle community", icon: <Eye className="h-6 w-6" /> },
];

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-[36px] font-bold tracking-[-0.04em] text-text-primary md:text-[48px]">
            XRP <span className="bg-gradient-to-r from-[#0085FF] to-blue-400 bg-clip-text text-transparent">People &amp; Ecosystem</span>
          </h1>
          <p className="mt-2 text-text-secondary max-w-2xl">
            Holders, trusted voices, leadership, partnerships, acquisitions, and the legendary riddlers — everything about who&apos;s behind XRP.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link
                href={s.href}
                className="group flex flex-col rounded-xl border border-white/[0.06] bg-black p-6 hover:border-[#0085FF]/30 transition-colors h-full"
              >
                <div className="rounded-lg bg-[#0085FF]/10 p-3 w-fit text-[#0085FF]">{s.icon}</div>
                <h2 className="mt-4 text-lg font-bold text-text-primary">{s.label}</h2>
                <p className="mt-1 text-sm text-text-secondary flex-1">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0085FF] group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

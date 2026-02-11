"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp } from "lucide-react";
import TierChart from "@/components/richlist/TierChart";
import TierCalculator from "@/components/richlist/TierCalculator";
import TierFAQ from "@/components/richlist/TierFAQ";

export default function HoldersPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-20">
        <Link href="/people" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-[#0085FF] transition-colors mb-8">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to People
        </Link>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-[#0085FF]/10 p-2"><TrendingUp className="h-5 w-5 text-[#0085FF]" /></div>
            <div>
              <h1 className="text-[28px] font-bold tracking-[-0.03em] text-text-primary md:text-[32px]">XRP Holders</h1>
              <p className="mt-0.5 text-text-secondary text-sm">Rich list, tier calculator, and holder distribution</p>
            </div>
          </div>
        </motion.div>
        <div className="mt-8">
          <TierChart />
          <TierCalculator />
          <TierFAQ />
        </div>
      </div>
    </div>
  );
}

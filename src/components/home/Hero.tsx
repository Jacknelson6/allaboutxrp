"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PriceWidget from "../shared/PriceWidget";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 md:py-44" aria-label="Hero">
      {/* Multi-layer atmospheric background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary orb */}
        <div className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-xrp-accent/[0.07] blur-[140px] animate-float" />
        {/* Secondary orb */}
        <div className="absolute -right-48 top-16 h-[500px] w-[500px] rounded-full bg-xrp-indigo/[0.04] blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-xrp-cyan/[0.03] blur-[120px]" />
      </div>

      {/* Grid background with fade */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      {/* Scan line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.02]">
        <div className="h-px w-full bg-xrp-accent" style={{ animation: "scan-line 8s linear infinite" }} />
      </div>

      {/* Film grain */}
      <div className="pointer-events-none absolute inset-0 noise-overlay" />

      <div className="relative mx-auto max-w-7xl px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-xrp-accent/15 bg-xrp-accent/[0.04] px-5 py-2 text-sm text-xrp-accent/90 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-xrp-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-xrp-accent" />
          </span>
          Live XRP Data
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-extrabold leading-[1.05] tracking-[-0.03em] text-text-primary md:text-7xl lg:text-8xl"
        >
          What is{" "}
          <span className="gradient-text">XRP</span>
          <span className="text-xrp-accent">?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-text-secondary/80 md:text-xl"
        >
          Your comprehensive guide to XRP — the digital asset powering fast, 
          low-cost global payments. Education, live data, community voices, and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/get-started" className="btn-primary text-base">
            <span>Get Started with XRP</span>
          </Link>
          <Link href="/richlist" className="btn-secondary text-base">
            <span>View Rich List & Data</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <div className="animate-pulse-glow rounded-2xl">
            <PriceWidget />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-primary to-transparent" />
    </section>
  );
}

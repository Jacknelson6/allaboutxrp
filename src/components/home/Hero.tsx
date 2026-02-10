"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PriceWidget from "../shared/PriceWidget";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-40" aria-label="Hero">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-xrp-accent/8 blur-[120px] animate-float" />
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-xrp-accent/5 blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-xrp-accent/4 blur-[100px]" />
      </div>

      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

      {/* Scan line effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="h-px w-full bg-xrp-accent" style={{ animation: "scan-line 8s linear infinite" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-xrp-accent/20 bg-xrp-accent/5 px-4 py-1.5 text-sm text-xrp-accent backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-xrp-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-xrp-accent" />
            </span>
            Live XRP Data
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-text-primary md:text-7xl lg:text-8xl">
            What is{" "}
            <span className="gradient-text">XRP</span>
            <span className="text-xrp-accent">?</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl"
          >
            Your comprehensive guide to XRP — the digital asset powering fast, 
            low-cost global payments. Education, live data, community voices, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/get-started"
              className="group relative overflow-hidden rounded-xl bg-xrp-accent px-8 py-3.5 font-semibold text-white transition-all hover:shadow-lg hover:shadow-xrp-accent/25"
            >
              <span className="relative z-10">Get Started with XRP</span>
              <div className="absolute inset-0 bg-gradient-to-r from-xrp-accent via-xrp-accent-bright to-xrp-accent bg-[length:200%] transition-all group-hover:bg-right" />
            </Link>
            <Link
              href="/richlist"
              className="rounded-xl border border-surface-border bg-surface-card/50 px-8 py-3.5 font-semibold text-text-primary backdrop-blur-sm transition-all hover:border-xrp-accent/30 hover:bg-surface-elevated hover:shadow-lg hover:shadow-xrp-accent/5"
            >
              View Rich List & Data
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <div className="animate-pulse-glow rounded-2xl">
              <PriceWidget />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-primary to-transparent" />
    </section>
  );
}

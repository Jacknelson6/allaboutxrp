"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

/**
 * Animated section wrapper — reveals content on scroll with staggered delay.
 */
export function RevealSection({
  children,
  className = "",
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/**
 * Stat pill — animated number reveal for hero stats.
 */
export function StatPill({
  label,
  value,
  delay = 0,
}: {
  label: string;
  value: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-xl border border-surface-border/60 bg-surface-card/40 p-4 text-center backdrop-blur-sm transition-colors hover:border-xrp-accent/30"
    >
      {/* Subtle inner glow */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-xrp-accent/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="font-display text-xl font-bold text-xrp-accent md:text-2xl">{value}</div>
        <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-text-secondary/70">{label}</div>
      </div>
    </motion.div>
  );
}

/**
 * Hero header for Learn pages — animated title, breadcrumb, byline.
 */
export function LearnHero({
  title,
  titleAccent,
  subtitle,
  breadcrumbLabel,
  children,
}: {
  title: string;
  titleAccent: string;
  subtitle: string;
  breadcrumbLabel: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      {/* Atmospheric mesh */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 left-1/4 h-[600px] w-[600px] rounded-full bg-xrp-accent/[0.05] blur-[150px]" />
        <div className="absolute -top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-xrp-indigo/[0.04] blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-text-secondary">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="transition-colors hover:text-xrp-accent">Home</Link>
            </li>
            <li className="text-text-secondary/40">/</li>
            <li>
              <Link href="/learn" className="transition-colors hover:text-xrp-accent">Learn</Link>
            </li>
            <li className="text-text-secondary/40">/</li>
            <li className="font-medium text-text-primary">{breadcrumbLabel}</li>
          </ol>
        </nav>

        {/* Title */}
        <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-text-primary md:text-5xl lg:text-[3.25rem]">
          {title} <span className="gradient-text">{titleAccent}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
          {subtitle}
        </p>
      </motion.div>

      {/* Children slot for byline, stats, etc. */}
      {children ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {children}
        </motion.div>
      ) : null}
    </>
  );
}

/**
 * Table of contents / section nav — sticky on scroll.
 */
export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mt-8 flex flex-wrap gap-2"
      aria-label="Page sections"
    >
      {items.map((item, i) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="rounded-lg border border-surface-border/40 bg-surface-card/20 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-text-secondary/70 backdrop-blur-sm transition-all duration-200 hover:border-xrp-accent/30 hover:text-xrp-accent hover:bg-xrp-accent/[0.04]"
        >
          {item.label}
        </a>
      ))}
    </motion.nav>
  );
}

/**
 * Conclusion CTA block.
 */
export function LearnCTA({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <RevealSection className="mt-16">
      <div className="relative overflow-hidden rounded-2xl border border-surface-border/60 p-8 text-center md:p-10">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-xrp-accent/[0.04] via-transparent to-xrp-indigo/[0.03]" />
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-xrp-accent/[0.06] blur-[60px]" />
        <div className="relative">
          <h2 className="font-display text-2xl font-bold text-text-primary">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">{description}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href={primaryHref} className="btn-primary">
              <span>{primaryLabel}</span>
            </Link>
            {secondaryHref ? (
              <Link href={secondaryHref} className="btn-secondary">
                <span>{secondaryLabel}</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

/**
 * Internal link grid for "Continue Learning" sections.
 */
export function LearnLinkGrid({ links }: { links: { href: string; label: string; desc: string }[] }) {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {links.map((link, i) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
        >
          <Link
            href={link.href}
            className="card-glow flex flex-col rounded-xl border border-surface-border/60 bg-surface-card/40 p-4 backdrop-blur-sm"
          >
            <span className="font-display text-sm font-semibold text-text-primary">{link.label}</span>
            <span className="mt-1 text-xs text-text-secondary">{link.desc}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, CheckCircle, XCircle, AlertTriangle, Info, Zap } from "lucide-react";

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

/* ============================================================
   HIGHLIGHT BOX — accent-bordered callout for key facts/stats
   ============================================================ */
const variantStyles = {
  accent: "border-xrp-accent/25 bg-xrp-accent/[0.03]",
  warning: "border-yellow-500/25 bg-yellow-500/[0.03]",
  danger: "border-red-500/25 bg-red-500/[0.03]",
  success: "border-emerald-500/25 bg-emerald-500/[0.03]",
  info: "border-blue-400/25 bg-blue-400/[0.03]",
} as const;

const variantIcons = {
  accent: <Zap className="h-5 w-5 text-xrp-accent" />,
  warning: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
  danger: <XCircle className="h-5 w-5 text-red-500" />,
  success: <CheckCircle className="h-5 w-5 text-emerald-500" />,
  info: <Info className="h-5 w-5 text-blue-400" />,
};

export function HighlightBox({
  title,
  children,
  variant = "accent",
  icon,
  large,
}: {
  title?: string;
  children: ReactNode;
  variant?: keyof typeof variantStyles;
  icon?: ReactNode;
  large?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-xl border ${variantStyles[variant]} ${large ? "p-6 md:p-8" : "p-5"}`}
    >
      {title ? (
        <div className="flex items-center gap-2.5 mb-3">
          {icon ? icon : variantIcons[variant]}
          <span className="font-display font-semibold text-text-primary">{title}</span>
        </div>
      ) : null}
      <div className="text-sm text-text-secondary leading-relaxed">{children}</div>
    </motion.div>
  );
}

/* ============================================================
   FEATURE GRID — animated card grid with icons
   ============================================================ */
export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: { icon?: ReactNode; title: string; desc: string; mono?: boolean }[];
  columns?: 2 | 3 | 4;
}) {
  const colClass = columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";
  return (
    <div className={`grid gap-4 ${colClass}`}>
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-xl border border-surface-border/60 bg-surface-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-xrp-accent/30 hover:shadow-[0_4px_20px_rgba(0,180,255,0.06)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-xrp-accent/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative">
            {item.icon ? <div className="mb-3">{item.icon}</div> : null}
            <div className={`font-display text-sm font-semibold text-text-primary ${item.mono ? "font-mono text-xrp-accent" : ""}`}>
              {item.title}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-text-secondary">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ============================================================
   DATA TABLE — styled table matching Escrow page quality
   ============================================================ */
export function DataTable({
  headers,
  rows,
  highlightCol,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
  highlightCol?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-xl border border-surface-border"
    >
      <table className="w-full text-left text-sm">
        <thead className="border-b border-surface-border bg-surface-card">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 font-medium text-text-secondary text-xs uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-border/60">
          {rows.map((row, ri) => (
            <tr key={ri} className="bg-surface-primary transition-colors hover:bg-surface-card/60">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 ${
                    highlightCol === ci
                      ? "font-medium text-xrp-accent"
                      : "text-text-secondary"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

/* ============================================================
   FAQ ACCORDION — interactive collapsible FAQ
   ============================================================ */
export function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="learn-faq space-y-3 rounded-xl border border-surface-border/60 bg-surface-card/30 p-5 backdrop-blur-sm">
      {items.map((item, i) => (
        <div key={i} className="border-b border-surface-border/30 last:border-0">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-3 py-3 text-left transition-colors hover:text-xrp-accent"
          >
            <span className="font-display text-sm font-semibold text-text-primary">{item.q}</span>
            <motion.div
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="shrink-0"
            >
              <ChevronDown className="h-4 w-4 text-text-secondary" />
            </motion.div>
          </button>
          <AnimatePresence>
            {open === i ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-4 text-sm leading-relaxed text-text-secondary">{item.a}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   GLOW CARD — single highlighted card with icon
   ============================================================ */
export function GlowCard({
  icon,
  title,
  value,
  subtitle,
}: {
  icon?: ReactNode;
  title: string;
  value?: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-xl border border-xrp-accent/20 bg-xrp-accent/[0.03] p-6"
    >
      <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-xrp-accent/[0.06] blur-[40px] transition-all duration-500 group-hover:bg-xrp-accent/[0.1]" />
      <div className="relative">
        {icon ? <div className="mb-3">{icon}</div> : null}
        <div className="flex items-center gap-2">
          <span className="font-display font-semibold text-xrp-accent">{title}</span>
        </div>
        {value ? <p className="mt-2 font-mono text-2xl font-bold text-text-primary">{value}</p> : null}
        {subtitle ? <p className="mt-1 text-sm text-text-secondary">{subtitle}</p> : null}
      </div>
    </motion.div>
  );
}

/* ============================================================
   ICON LIST — list with icons instead of bullets
   ============================================================ */
export function IconList({
  items,
  icon,
  variant = "check",
}: {
  items: { title: string; desc?: string }[];
  icon?: ReactNode;
  variant?: "check" | "x" | "warn" | "zap";
}) {
  const defaultIcons = {
    check: <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />,
    x: <XCircle className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />,
    warn: <AlertTriangle className="h-5 w-5 shrink-0 text-yellow-500 mt-0.5" />,
    zap: <Zap className="h-5 w-5 shrink-0 text-xrp-accent mt-0.5" />,
  };
  const usedIcon = icon ? icon : defaultIcons[variant];

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.4 }}
          className="flex gap-3 rounded-lg border border-surface-border/40 bg-surface-card/30 p-3"
        >
          {usedIcon}
          <div>
            <p className="font-semibold text-text-primary text-sm">{item.title}</p>
            {item.desc ? <p className="text-xs text-text-secondary mt-0.5">{item.desc}</p> : null}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ============================================================
   MISCONCEPTION CARD — myth vs reality
   ============================================================ */
export function MisconceptionCard({
  myth,
  reality,
}: {
  myth: string;
  reality: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mistake-card rounded-xl border border-red-500/15 bg-red-500/[0.02] p-5"
    >
      <div className="flex items-start gap-3">
        <XCircle className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
        <div>
          <p className="font-display text-sm font-semibold text-text-primary">&ldquo;{myth}&rdquo;</p>
          <div className="mt-2 flex items-start gap-2">
            <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
            <p className="text-xs text-text-secondary leading-relaxed">{reality}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

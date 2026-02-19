"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown, CheckCircle, XCircle, AlertTriangle, Info, Zap } from "lucide-react";
import ScrollHint from "@/components/shared/ScrollHint";

/**
 * TL;DR Summary box — styled callout at the top of learn pages.
 */
export function TLDRBox({ children }: { children: ReactNode }) {
  return (
    <div className="summary mt-8 rounded-xl border border-xrp-accent/20 bg-xrp-accent/[0.03] p-5">
      <div className="flex items-center gap-2 mb-3">
        <Zap className="h-5 w-5 text-xrp-accent" />
        <span className="font-bold text-text-primary text-[15px] uppercase tracking-wide">TL;DR</span>
      </div>
      <div className="text-[14px] text-text-secondary leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

/**
 * Key Facts table — compact facts display near the top of learn pages.
 */
export function KeyFactsTable({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <ScrollHint className="mt-6 rounded-xl border border-white/[0.06] -mx-4 sm:mx-0">
      <table className="w-full min-w-[300px] text-left text-sm">
        <thead className="border-b border-white/[0.06]">
          <tr>
            <th colSpan={2} className="px-4 py-3 text-xs font-medium uppercase tracking-widest text-white/30">Key Facts</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.04]">
          {facts.map((fact, i) => (
            <tr key={i} className="hover:bg-white/[0.015] transition-colors duration-150">
              <td className="px-4 py-2.5 text-[13px] font-medium text-text-secondary w-[40%]">{fact.label}</td>
              <td className="px-4 py-2.5 text-[13px] font-medium text-xrp-accent">{fact.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollHint>
  );
}

/**
 * Last Updated timestamp display.
 */
export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="mt-4 text-[13px] text-text-secondary/70">
      <span className="font-medium">Last Updated:</span> {date}
    </div>
  );
}

/**
 * Section wrapper — simple reveal.
 */
export function RevealSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

/**
 * Stat pill for hero stats.
 */
export function StatPill({
  label,
  value,
}: {
  label: string;
  value: string;
  delay?: number;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-4 text-center transition-all duration-250 hover:border-white/[0.1]">
      <div className="font-mono text-xl font-bold text-xrp-accent tracking-tight">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-widest text-white/30">{label}</div>
    </div>
  );
}

/**
 * Hero header for Learn pages.
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
      <nav aria-label="Breadcrumb" className="mb-5 text-[13px] text-text-secondary">
        <ol className="flex items-center gap-1.5">
          <li><Link href="/" className="hover:text-text-primary transition-colors duration-200">Home</Link></li>
          <li className="text-white/15">/</li>
          <li><Link href="/learn" className="hover:text-text-primary transition-colors duration-200">Learn</Link></li>
          <li className="text-white/15">/</li>
          <li className="text-text-primary">{breadcrumbLabel}</li>
        </ol>
      </nav>

      <h1 className="text-[36px] font-bold tracking-[-0.04em] leading-[1.1] text-text-primary md:text-[44px]">
        {title} <span className="gradient-text">{titleAccent}</span>
      </h1>

      <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
        {subtitle}
      </p>

      {children || null}
    </>
  );
}

/**
 * Section nav — jump links.
 */
export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav className="mt-6 flex flex-wrap gap-2" aria-label="Page sections">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="rounded-lg border border-white/[0.06] px-3 py-1.5 text-[12px] font-medium text-text-secondary hover:text-xrp-accent hover:border-xrp-accent/20 transition-all duration-200"
        >
          {item.label}
        </a>
      ))}
    </nav>
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
    <RevealSection className="mt-14">
      <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-8 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,133,255,0.04)_0%,transparent_70%)]" />
        <div className="relative">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] text-text-secondary">{description}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href={primaryHref} className="btn-primary">{primaryLabel}</Link>
            {secondaryHref ? (
              <Link href={secondaryHref} className="btn-secondary">{secondaryLabel}</Link>
            ) : null}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

/**
 * Internal link grid.
 */
export function LearnLinkGrid({ links }: { links: { href: string; label: string; desc: string }[] }) {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="linear-card p-4"
        >
          <span className="text-sm font-semibold text-text-primary">{link.label}</span>
          <span className="mt-1 block text-xs text-text-secondary">{link.desc}</span>
        </Link>
      ))}
    </div>
  );
}

/* ============================================================
   HIGHLIGHT BOX
   ============================================================ */
const variantStyles = {
  accent: "border-xrp-accent/20 bg-xrp-accent/[0.02]",
  warning: "border-warning/20 bg-warning/[0.02]",
  danger: "border-danger/20 bg-danger/[0.02]",
  success: "border-success/20 bg-success/[0.02]",
  info: "border-xrp-accent/15 bg-xrp-accent/[0.02]",
} as const;

const variantIcons = {
  accent: <Zap className="h-5 w-5 text-xrp-accent" />,
  warning: <AlertTriangle className="h-5 w-5 text-warning" />,
  danger: <XCircle className="h-5 w-5 text-danger" />,
  success: <CheckCircle className="h-5 w-5 text-success" />,
  info: <Info className="h-5 w-5 text-xrp-accent" />,
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
    <div className={`rounded-xl border ${variantStyles[variant]} ${large ? "p-6" : "p-4"}`}>
      {title ? (
        <div className="flex items-center gap-2 mb-2">
          {icon ? icon : variantIcons[variant]}
          <span className="font-semibold text-text-primary text-[14px]">{title}</span>
        </div>
      ) : null}
      <div className="text-[14px] text-text-secondary leading-relaxed">{children}</div>
    </div>
  );
}

/* ============================================================
   FEATURE GRID
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
    <div className={`grid gap-3 ${colClass}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="linear-card p-4"
        >
          {item.icon ? <div className="mb-2 text-white/30">{item.icon}</div> : null}
          <div className={`text-sm font-semibold text-text-primary ${item.mono ? "font-mono text-xrp-accent" : ""}`}>
            {item.title}
          </div>
          <p className="mt-1 text-xs text-text-secondary leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   DATA TABLE
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
    <ScrollHint className="rounded-xl border border-white/[0.06] -mx-4 sm:mx-0">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-white/[0.06]">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-xs font-medium uppercase tracking-widest text-white/30">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.04]">
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-white/[0.015] transition-colors duration-150">
              {row.map((cell, ci) => (
                <td key={ci} className={`px-4 py-3 ${highlightCol === ci ? "font-medium text-xrp-accent" : "text-text-secondary"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollHint>
  );
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
export function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-200 ${open === i ? "border-xrp-accent/20 bg-xrp-accent/[0.02]" : "border-white/[0.06]"}`}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left hover:text-xrp-accent transition-colors duration-200"
          >
            <span className={`text-[14px] font-medium ${open === i ? "text-xrp-accent" : "text-text-primary"}`}>{item.q}</span>
            <ChevronDown className={`h-4 w-4 shrink-0 text-text-secondary transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && (
            <p className="border-t border-white/[0.04] px-4 py-3 text-[14px] text-text-secondary leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   GLOW CARD
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
    <div className="relative overflow-hidden rounded-xl border border-xrp-accent/15 bg-[#0A0A0B] p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,133,255,0.04)_0%,transparent_60%)]" />
      <div className="relative">
        {icon ? <div className="mb-2">{icon}</div> : null}
        <span className="font-medium text-xrp-accent text-[14px]">{title}</span>
        {value ? <p className="mt-1 font-mono text-2xl font-bold text-text-primary tracking-tight">{value}</p> : null}
        {subtitle ? <p className="mt-1 text-[13px] text-text-secondary">{subtitle}</p> : null}
      </div>
    </div>
  );
}

/* ============================================================
   ICON LIST
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
    check: <CheckCircle className="h-5 w-5 shrink-0 text-success mt-0.5" />,
    x: <XCircle className="h-5 w-5 shrink-0 text-danger mt-0.5" />,
    warn: <AlertTriangle className="h-5 w-5 shrink-0 text-warning mt-0.5" />,
    zap: <Zap className="h-5 w-5 shrink-0 text-xrp-accent mt-0.5" />,
  };
  const usedIcon = icon ? icon : defaultIcons[variant];

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex gap-3 rounded-xl border border-white/[0.06] p-3.5 transition-all duration-200 hover:border-white/[0.1]">
          {usedIcon}
          <div>
            <p className="font-medium text-text-primary text-[14px]">{item.title}</p>
            {item.desc ? <p className="text-xs text-text-secondary mt-0.5">{item.desc}</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   MISCONCEPTION CARD
   ============================================================ */
export function MisconceptionCard({
  myth,
  reality,
}: {
  myth: string;
  reality: string;
}) {
  return (
    <div className="rounded-xl border border-danger/15 bg-danger/[0.02] p-4">
      <div className="flex items-start gap-3">
        <XCircle className="h-5 w-5 shrink-0 text-danger mt-0.5" />
        <div>
          <p className="text-[14px] font-medium text-text-primary">&ldquo;{myth}&rdquo;</p>
          <div className="mt-2 flex items-start gap-2">
            <CheckCircle className="h-4 w-4 shrink-0 text-success mt-0.5" />
            <p className="text-xs text-text-secondary leading-relaxed">{reality}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

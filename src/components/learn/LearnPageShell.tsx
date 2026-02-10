"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown, CheckCircle, XCircle, AlertTriangle, Info, Zap } from "lucide-react";

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
    <div className="rounded-lg border border-surface-border p-4 text-center">
      <div className="font-mono text-xl font-bold text-xrp-accent">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-text-secondary">{label}</div>
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
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-text-secondary">
        <ol className="flex items-center gap-1.5">
          <li><Link href="/" className="hover:text-xrp-accent transition-colors">Home</Link></li>
          <li className="text-text-secondary/40">/</li>
          <li><Link href="/learn" className="hover:text-xrp-accent transition-colors">Learn</Link></li>
          <li className="text-text-secondary/40">/</li>
          <li className="text-text-primary">{breadcrumbLabel}</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
        {title} <span className="text-xrp-accent">{titleAccent}</span>
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-text-secondary">
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
          className="rounded-full border border-surface-border px-3 py-1 text-xs font-medium text-text-secondary hover:text-xrp-accent hover:border-xrp-accent/30 transition-colors"
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
      <div className="rounded-2xl border border-surface-border p-8 text-center">
        <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-text-secondary">{description}</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href={primaryHref} className="btn-primary">{primaryLabel}</Link>
          {secondaryHref ? (
            <Link href={secondaryHref} className="btn-secondary">{secondaryLabel}</Link>
          ) : null}
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
          className="rounded-xl border border-surface-border p-4 hover:border-xrp-accent/30 transition-colors"
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
  accent: "border-xrp-accent/30",
  warning: "border-warning/30",
  danger: "border-danger/30",
  success: "border-success/30",
  info: "border-xrp-accent/20",
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
          <span className="font-semibold text-text-primary">{title}</span>
        </div>
      ) : null}
      <div className="text-sm text-text-secondary leading-relaxed">{children}</div>
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
          className="rounded-xl border border-surface-border p-4 hover:border-surface-border/80 transition-colors"
        >
          {item.icon ? <div className="mb-2">{item.icon}</div> : null}
          <div className={`text-sm font-semibold text-text-primary ${item.mono ? "font-mono text-xrp-accent" : ""}`}>
            {item.title}
          </div>
          <p className="mt-1 text-xs text-text-secondary">{item.desc}</p>
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
    <div className="overflow-x-auto rounded-xl border border-surface-border">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-surface-border">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-text-secondary">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-border">
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-white/[0.02] transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className={`px-4 py-3 ${highlightCol === ci ? "font-medium text-xrp-accent" : "text-text-secondary"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
    <div className="space-y-2 rounded-xl border border-surface-border p-4">
      {items.map((item, i) => (
        <div key={i} className="border-b border-surface-border last:border-0">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-3 py-3 text-left hover:text-xrp-accent transition-colors"
          >
            <span className="text-sm font-semibold text-text-primary">{item.q}</span>
            <ChevronDown className={`h-4 w-4 shrink-0 text-text-secondary transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && (
            <p className="pb-3 text-sm text-text-secondary leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   GLOW CARD — now just a clean card
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
    <div className="rounded-xl border border-xrp-accent/20 p-5">
      {icon ? <div className="mb-2">{icon}</div> : null}
      <span className="font-semibold text-xrp-accent">{title}</span>
      {value ? <p className="mt-1 font-mono text-2xl font-bold text-text-primary">{value}</p> : null}
      {subtitle ? <p className="mt-1 text-sm text-text-secondary">{subtitle}</p> : null}
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
        <div key={i} className="flex gap-3 rounded-lg border border-surface-border p-3">
          {usedIcon}
          <div>
            <p className="font-semibold text-text-primary text-sm">{item.title}</p>
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
    <div className="rounded-xl border border-danger/20 p-4">
      <div className="flex items-start gap-3">
        <XCircle className="h-5 w-5 shrink-0 text-danger mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-text-primary">&ldquo;{myth}&rdquo;</p>
          <div className="mt-2 flex items-start gap-2">
            <CheckCircle className="h-4 w-4 shrink-0 text-success mt-0.5" />
            <p className="text-xs text-text-secondary leading-relaxed">{reality}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

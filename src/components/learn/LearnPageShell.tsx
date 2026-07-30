import { type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown, CheckCircle, XCircle, AlertTriangle, Info, Zap } from "lucide-react";
import ScrollHint from "@/components/shared/ScrollHint";

/**
 * TL;DR Summary box — styled callout at the top of learn pages.
 */
export function TLDRBox({ children }: { children: ReactNode }) {
  return (
    <div className="summary mt-8 rounded-xl bg-[#65b9ff] p-5 text-[#03111e] sm:p-6">
      <div className="flex items-center gap-2 mb-3">
        <Zap className="h-5 w-5" aria-hidden="true" />
        <span className="font-sans text-sm font-bold">Answer in brief</span>
      </div>
      <div className="space-y-2 text-[15px] leading-7 text-[#0b3558] [&_a]:font-semibold [&_a]:text-[#03111e] [&_a]:underline [&_a]:decoration-[#07365e]/40 [&_a]:underline-offset-4 [&_strong]:text-[#03111e]">{children}</div>
    </div>
  );
}

/**
 * Key Facts table — compact facts display near the top of learn pages.
 */
export function KeyFactsTable({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <ScrollHint className="mt-6 -mx-4 rounded-xl border border-surface-border bg-surface-card sm:mx-0">
      <table className="w-full min-w-[300px] text-left text-sm">
        <thead className="border-b border-surface-border">
          <tr>
            <th colSpan={2} className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-text-primary">Key facts</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-border">
          {facts.map((fact, i) => (
            <tr key={i} className="hover:bg-white/[0.015] transition-colors duration-150">
              <td className="w-[40%] px-4 py-3 text-sm font-medium text-text-secondary">{fact.label}</td>
              <td className="px-4 py-3 text-sm font-semibold text-text-primary">{fact.value}</td>
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
    <div className="mt-4 font-mono text-xs text-text-secondary">
      <span className="font-semibold text-text-primary">Last reviewed:</span> {date}
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
    <div className="rounded-xl border border-surface-border bg-surface-card p-4 text-center">
      <div className="font-mono text-xl font-bold text-xrp-accent tracking-tight">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.06em] text-text-secondary">{label}</div>
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
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
        <ol className="flex items-center gap-1.5">
          <li><Link href="/" className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-text-primary">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/learn" className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-text-primary">Learn</Link></li>
          <li aria-hidden="true">/</li>
          <li className="truncate text-text-primary" aria-current="page">{breadcrumbLabel}</li>
        </ol>
      </nav>

      <h1 className="max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-text-primary">
        {title} <span className="text-xrp-accent-bright">{titleAccent}</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
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
    <nav className="mt-7 flex flex-wrap gap-2" aria-label="On this page">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="inline-flex min-h-11 items-center rounded-lg border border-surface-border px-3 text-sm font-semibold text-text-secondary transition-colors duration-200 hover:border-xrp-accent/30 hover:text-xrp-accent-bright"
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
      <div className="rounded-xl bg-[#0b1a27] p-7 text-center sm:p-10">
        <div>
          <h2 className="text-3xl text-text-primary">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-text-secondary">{description}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href={primaryHref} className="btn-primary px-5">{primaryLabel}</Link>
            {secondaryHref ? (
              <Link href={secondaryHref} className="btn-secondary px-5">{secondaryLabel}</Link>
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
          className="border-t border-surface-border py-5 first:border-t-0"
        >
          {item.icon ? <div className="mb-2 text-xrp-accent">{item.icon}</div> : null}
          <div className={`text-base font-semibold text-text-primary ${item.mono ? "font-mono text-xrp-accent" : ""}`}>
            {item.title}
          </div>
          <p className="mt-1 text-sm leading-6 text-text-secondary">{item.desc}</p>
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
    <ScrollHint className="-mx-4 rounded-xl border border-surface-border bg-surface-card sm:mx-0">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-surface-border">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-text-primary">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-border">
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
  return (
    <div className="divide-y divide-surface-border border-y border-surface-border">
      {items.map((item, i) => (
        <details key={i} className="group py-1">
          <summary className="flex min-h-14 list-none items-center justify-between gap-3 py-3 text-left font-semibold text-text-primary marker:content-none">
            <span>{item.q}</span>
            <ChevronDown className="h-4 w-4 shrink-0 text-text-secondary transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="pb-5 pr-8 text-[15px] leading-7 text-text-secondary">{item.a}</p>
        </details>
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
    <div className="relative overflow-hidden rounded-xl border border-xrp-accent/20 bg-[#07111a] p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(47,159,255,0.07)_0%,transparent_60%)]" />
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
        <div key={i} className="flex gap-3 border-t border-surface-border py-4 first:border-t-0">
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

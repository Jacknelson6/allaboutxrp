import type { ReactNode } from "react";
import { cn } from "./cn";

export interface SectionHeaderProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  /** Optional "View all" destination. Omit to render a plain header with no link. */
  href?: string;
  linkLabel?: string;
  className?: string;
}

/**
 * SectionHeader — eyebrow + Baskerville headline + optional "View all →"
 * link, sitting on a hairline rule. The standard way to open any homepage
 * or index-page section.
 */
export function SectionHeader({ eyebrow, title, href, linkLabel = "View all", className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-b border-hairline pb-4", className)}>
      <div>
        {eyebrow && (
          <p className="mb-2 font-sans text-xs font-[650] uppercase tracking-[0.04em] text-cobalt">{eyebrow}</p>
        )}
        <h2 className="font-display text-2xl leading-tight font-normal text-ink sm:text-3xl">{title}</h2>
      </div>
      {href && (
        <a
          href={href}
          className="inline-flex min-h-11 shrink-0 items-center gap-1.5 font-sans text-sm font-[650] text-ink underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-150 hover:text-cobalt hover:decoration-current"
        >
          {linkLabel}
          <span aria-hidden="true">→</span>
        </a>
      )}
    </div>
  );
}

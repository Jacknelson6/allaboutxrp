import type { ReactNode } from "react";
import { cn } from "./cn";

export interface DataListProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

/**
 * DataList — the hairline-ruled <ul> wrapper for dense editorial rows
 * (NewsListItem and similar). Owns the top/bottom rule and the divider
 * between rows; each row owns only its own content.
 */
export function DataList({ children, className, ariaLabel }: DataListProps) {
  return (
    <ul aria-label={ariaLabel} className={cn("divide-y divide-hairline border-y border-hairline", className)}>
      {children}
    </ul>
  );
}

export interface NewsListItemProps {
  href: string;
  headline: ReactNode;
  /** Pre-formatted timestamp string, or a <time> element for machine-readability. */
  timestamp?: ReactNode;
  category?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  className?: string;
}

/**
 * NewsListItem — one dense editorial row for use inside DataList:
 * timestamp · category, headline, optional thumbnail. Meant to be used at
 * high density (10-30 rows) without feeling like a wall of cards.
 */
export function NewsListItem({
  href,
  headline,
  timestamp,
  category,
  thumbnailSrc,
  thumbnailAlt,
  className,
}: NewsListItemProps) {
  return (
    <li className={className}>
      <a href={href} className="group flex items-center gap-4 py-4">
        {thumbnailSrc && (
          <span className="relative block h-16 w-24 shrink-0 overflow-hidden border border-hairline bg-paper-muted">
            {/* eslint-disable-next-line @next/next/no-img-element -- primitive stays framework-agnostic */}
            <img src={thumbnailSrc} alt={thumbnailAlt ?? ""} loading="lazy" className="h-full w-full object-cover" />
          </span>
        )}
        <span className="min-w-0 flex-1">
          {(category || timestamp) && (
            <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-secondary">
              {category && (
                <span className="font-[650] tracking-[0.04em] text-cobalt uppercase">{category}</span>
              )}
              {category && timestamp && <span aria-hidden="true">·</span>}
              {timestamp && <span className="tabular-nums">{timestamp}</span>}
            </span>
          )}
          <span className="mt-1 block font-display text-base leading-snug font-normal text-ink transition-colors duration-150 group-hover:text-cobalt sm:text-lg">
            {headline}
          </span>
        </span>
      </a>
    </li>
  );
}

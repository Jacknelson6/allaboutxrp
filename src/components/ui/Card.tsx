import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

export type CardVariant = "default" | "muted" | "data";

interface CardOwnProps {
  variant?: CardVariant;
  /** Small uppercase kicker above the title, e.g. "MARKETS" or "ANALYSIS". */
  eyebrow?: ReactNode;
  title?: ReactNode;
  /** Row of small metadata under the title — timestamp, source, category. */
  meta?: ReactNode;
  /** Forces the hover affordance (border darkens, title turns cobalt) even without href. */
  interactive?: boolean;
  className?: string;
  children?: ReactNode;
}

type CardAsDiv = CardOwnProps & Omit<HTMLAttributes<HTMLDivElement>, "className" | "title"> & { href?: undefined };
type CardAsAnchor = CardOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "title"> & { href: string };

export type CardProps = CardAsDiv | CardAsAnchor;

const VARIANT_STYLES: Record<CardVariant, string> = {
  default: "border border-hairline bg-paper p-6",
  muted: "border border-hairline bg-paper-muted p-6",
  data: "border border-hairline bg-paper p-4",
};

/**
 * Card — the flat editorial container. 1px border, no shadow, no lift.
 * Hover (when `href` or `interactive` is set): border darkens to ink and the
 * title turns cobalt. Nothing moves, nothing floats.
 */
export function Card({
  variant = "default",
  eyebrow,
  title,
  meta,
  interactive,
  className,
  children,
  ...rest
}: CardProps) {
  const isHoverable = interactive || "href" in rest;
  const classes = cn(
    "block",
    VARIANT_STYLES[variant],
    isHoverable && "group transition-colors duration-150 hover:border-ink",
    className,
  );

  const inner = (
    <>
      {eyebrow && (
        <p className="mb-2 font-sans text-xs font-[650] uppercase tracking-[0.04em] text-text-secondary">
          {eyebrow}
        </p>
      )}
      {title && (
        <h3
          className={cn(
            "font-display text-lg leading-snug font-normal text-ink",
            isHoverable && "transition-colors duration-150 group-hover:text-cobalt",
          )}
        >
          {title}
        </h3>
      )}
      {meta && (
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-secondary">
          {meta}
        </div>
      )}
      {children && <div className={cn(title || eyebrow ? "mt-3" : undefined)}>{children}</div>}
    </>
  );

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorRest } = rest;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {inner}
      </a>
    );
  }

  return (
    <div className={classes} {...rest}>
      {inner}
    </div>
  );
}

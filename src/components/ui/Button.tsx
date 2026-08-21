import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

export type ButtonVariant = "primary" | "secondary" | "accent" | "quiet";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const BASE =
  "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap font-sans font-[650] tracking-[0.01em] transition-[background-color,border-color,color,transform] duration-150 ease-out focus-visible:z-10 disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40";

const FILLED_SIZE: Record<ButtonSize, string> = {
  sm: "min-h-11 px-3.5 text-[0.8125rem]",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-7 text-base",
};

const QUIET_SIZE: Record<ButtonSize, string> = {
  sm: "min-h-11 text-[0.8125rem]",
  md: "min-h-11 text-sm",
  lg: "min-h-12 text-base",
};

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "border border-ink bg-ink text-paper hover:border-cobalt hover:bg-cobalt active:translate-y-px",
  secondary:
    "border border-ink bg-paper text-ink hover:border-cobalt hover:text-cobalt active:translate-y-px",
  accent:
    "border border-cobalt bg-cobalt text-paper hover:border-cobalt-dark hover:bg-cobalt-dark active:translate-y-px",
  quiet:
    "border-0 bg-transparent p-0 text-ink underline decoration-transparent decoration-1 underline-offset-4 hover:text-cobalt hover:decoration-current",
};

/**
 * Button — the one interactive-fill primitive in the system.
 *
 * Variants: primary (ink fill), secondary (1px ink border), accent (cobalt
 * fill), quiet (text + underline-on-hover, no chrome).
 * Sizes: sm / md / lg — all honor the 44px minimum touch target; size only
 * changes horizontal padding and type scale, never height below 44px.
 * Renders as <button> with no `href`. With `href`, internal paths (starting
 * with "/") render Next's <Link> for client-side navigation and prefetch;
 * external/hash/mailto/tel hrefs render a plain <a>.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const sizeStyles = variant === "quiet" ? QUIET_SIZE[size] : FILLED_SIZE[size];
  const classes = cn(BASE, sizeStyles, VARIANT_STYLES[variant], className);

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorRest } = rest;
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

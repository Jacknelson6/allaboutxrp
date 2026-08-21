import type { ReactNode } from "react";
import { cn } from "./cn";

export type BadgeVariant = "outline" | "tonal" | "solid";
export type BadgeTone = "neutral" | "cobalt" | "positive" | "negative";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  tone?: BadgeTone;
  className?: string;
}

const TONE_TEXT: Record<BadgeTone, string> = {
  neutral: "text-ink",
  cobalt: "text-cobalt",
  positive: "text-positive",
  negative: "text-negative",
};

const TONE_BORDER: Record<BadgeTone, string> = {
  neutral: "border-hairline",
  cobalt: "border-cobalt",
  positive: "border-positive",
  negative: "border-negative",
};

const TONE_SOLID_BG: Record<BadgeTone, string> = {
  neutral: "bg-ink text-paper",
  cobalt: "bg-cobalt text-paper",
  positive: "bg-positive text-paper",
  negative: "bg-negative text-paper",
};

const TONE_TONAL_BG: Record<BadgeTone, string> = {
  neutral: "bg-paper-muted",
  cobalt: "bg-cobalt/10",
  positive: "bg-positive/10",
  negative: "bg-negative/10",
};

const BASE = "inline-flex items-center gap-1 px-2 py-1 font-sans text-[0.6875rem] font-[650] leading-none tracking-[0.04em] uppercase";

/**
 * Badge — small uppercase label chip. `outline` (1px border, default) for
 * filters and categories, `tonal` (10% tint fill) for status inline with
 * text, `solid` for a filled chip that needs to carry more weight.
 */
export function Badge({ children, variant = "outline", tone = "neutral", className }: BadgeProps) {
  if (variant === "solid") {
    return <span className={cn(BASE, TONE_SOLID_BG[tone], className)}>{children}</span>;
  }
  if (variant === "tonal") {
    return <span className={cn(BASE, TONE_TONAL_BG[tone], TONE_TEXT[tone], className)}>{children}</span>;
  }
  return <span className={cn(BASE, "border", TONE_BORDER[tone], TONE_TEXT[tone], className)}>{children}</span>;
}

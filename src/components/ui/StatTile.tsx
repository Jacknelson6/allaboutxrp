import { cn } from "./cn";

export type StatDirection = "up" | "down" | "flat";
export type StatTileSize = "sm" | "lg";

export interface StatTileProps {
  label: string;
  /** The headline figure. Pass a pre-formatted string — this primitive is display-only. */
  value: string;
  /** Change figure, e.g. "+2.4%" or "0.0421". Rendered with the delta arrow and semantic color. */
  delta?: string;
  direction?: StatDirection;
  /** Small trailing context, e.g. "24h" or "as of 9:41 AM ET". */
  meta?: string;
  size?: StatTileSize;
  className?: string;
}

const DELTA_COLOR: Record<StatDirection, string> = {
  up: "text-positive",
  down: "text-negative",
  flat: "text-text-secondary",
};

const DELTA_ARROW: Record<StatDirection, string> = {
  up: "▲",
  down: "▼",
  flat: "",
};

const VALUE_SIZE: Record<StatTileSize, string> = {
  sm: "text-xl",
  lg: "text-[2rem] sm:text-[2.25rem]",
};

/**
 * StatTile — a single market-data figure: label, big tabular number, delta.
 * Layout-agnostic (no border/background of its own) so it composes freely
 * inside a Card, a grid, or a TickerTape-adjacent strip.
 */
export function StatTile({ label, value, delta, direction = "flat", meta, size = "lg", className }: StatTileProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <p className="font-sans text-xs font-[650] uppercase tracking-[0.04em] text-text-secondary">{label}</p>
      <p className={cn("font-sans font-[650] tabular-nums leading-none text-ink", VALUE_SIZE[size])}>{value}</p>
      {(delta || meta) && (
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
          {delta && (
            <span className={cn("inline-flex items-center gap-1 font-[650] tabular-nums", DELTA_COLOR[direction])}>
              <span aria-hidden="true">{DELTA_ARROW[direction]}</span>
              {delta}
            </span>
          )}
          {meta && <span className="tabular-nums text-text-secondary">{meta}</span>}
        </div>
      )}
    </div>
  );
}

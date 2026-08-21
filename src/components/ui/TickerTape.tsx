import { cn } from "./cn";

export type TickerDirection = "up" | "down" | "flat";

export interface TickerTapeItem {
  id: string;
  label: string;
  value: string;
  delta?: string;
  direction?: TickerDirection;
}

export interface TickerTapeProps {
  items: TickerTapeItem[];
  className?: string;
  ariaLabel?: string;
}

const DELTA_COLOR: Record<TickerDirection, string> = {
  up: "text-positive",
  down: "text-negative",
  flat: "text-paper/70",
};

const DELTA_ARROW: Record<TickerDirection, string> = {
  up: "▲",
  down: "▼",
  flat: "",
};

/**
 * TickerTape — a horizontal, self-scrolling market strip. Data-agnostic:
 * feed it any list of {label, value, delta, direction}. Pauses on hover,
 * and sits still (no jump-cut) when the visitor prefers reduced motion.
 */
export function TickerTape({ items, className, ariaLabel = "Market ticker" }: TickerTapeProps) {
  if (items.length === 0) return null;

  // Duplicated once so the marquee can loop seamlessly on a -50% translate.
  const track = [...items, ...items];

  return (
    <div
      className={cn("group relative overflow-hidden border-y border-hairline bg-ink text-paper", className)}
      role="marquee"
      aria-label={ariaLabel}
    >
      <div className="flex w-max animate-marquee items-stretch group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {track.map((item, index) => {
          const direction = item.direction ?? "flat";
          return (
            <div
              key={`${item.id}-${index}`}
              aria-hidden={index >= items.length}
              className="flex items-center gap-2 border-r border-paper/10 px-6 py-3 whitespace-nowrap"
            >
              <span className="font-sans text-xs font-[650] tracking-[0.04em] text-paper/70 uppercase">
                {item.label}
              </span>
              <span className="font-sans text-xs font-[650] tabular-nums">{item.value}</span>
              {item.delta && (
                <span className={cn("inline-flex items-center gap-1 font-sans text-xs font-[650] tabular-nums", DELTA_COLOR[direction])}>
                  <span aria-hidden="true">{DELTA_ARROW[direction]}</span>
                  {item.delta}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

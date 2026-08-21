/**
 * Formatting for the homepage market surfaces (ticker strip + market band).
 *
 * The shape and the fallback values below mirror the previous homepage
 * market-record section exactly: the same `/api/market-data` payload, the same
 * `max_supply ?? 100_000_000_000` fallback, and the same compact / signed
 * percent number formats. Only the presentation changed.
 */

export interface HomeMarketData {
  price?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
    usd_24h_vol?: number;
  };
  coin?: {
    market_data?: {
      price_change_percentage_7d?: number;
      price_change_percentage_30d?: number;
      circulating_supply?: number;
      max_supply?: number;
    };
  };
}

export type MarketDirection = "up" | "down" | "flat";

export interface MarketFigure {
  id: string;
  label: string;
  value: string;
  delta?: string;
  direction: MarketDirection;
  meta?: string;
}

const compact = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 });
const percent = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2, signDisplay: "always" });
const usdPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 4 });
const usdMove = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 4,
  signDisplay: "always",
});

/** Shown before the live payload arrives, so the strip and grid never reflow. */
const PENDING = "—";

function directionOf(change: number | undefined): MarketDirection {
  if (change === undefined || Number.isNaN(change) || change === 0) return "flat";
  return change > 0 ? "up" : "down";
}

/** The absolute USD move implied by a percentage move away from `price`. */
function moveFromPercent(price: number | undefined, change: number | undefined): number | null {
  if (!price || price <= 0 || change === undefined || Number.isNaN(change)) return null;
  const previous = price / (1 + change / 100);
  if (!Number.isFinite(previous) || previous <= 0) return null;
  return price - previous;
}

function changeFigure(
  id: string,
  label: string,
  meta: string,
  price: number | undefined,
  change: number | undefined,
): MarketFigure {
  const move = moveFromPercent(price, change);
  if (move === null) {
    return { id, label, value: PENDING, direction: "flat", meta };
  }
  return {
    id,
    label,
    value: usdMove.format(move),
    delta: `${percent.format(change ?? 0)}%`,
    direction: directionOf(change),
    meta,
  };
}

/**
 * The eight figures the homepage publishes, in reading order:
 * price, 24h / 7d / 30d change, market cap, volume, circulating and max supply.
 */
export function buildMarketFigures(market: HomeMarketData | null): MarketFigure[] {
  const price = market?.price?.usd;
  const marketData = market?.coin?.market_data;
  const change24h = market?.price?.usd_24h_change;
  const change7d = marketData?.price_change_percentage_7d;
  const change30d = marketData?.price_change_percentage_30d;
  const circulating = marketData?.circulating_supply ?? 0;
  const maximum = marketData?.max_supply ?? 100_000_000_000;

  return [
    {
      id: "price",
      label: "XRP / USD",
      value: price === undefined ? PENDING : usdPrice.format(price),
      delta: market ? `${percent.format(change24h ?? 0)}%` : undefined,
      direction: directionOf(change24h),
      meta: "Last traded price",
    },
    changeFigure("change-24h", "24-hour change", "vs. 24 hours ago", price, change24h),
    changeFigure("change-7d", "7-day change", "vs. 7 days ago", price, change7d),
    changeFigure("change-30d", "30-day change", "vs. 30 days ago", price, change30d),
    {
      id: "market-cap",
      label: "Market cap",
      value: market ? `$${compact.format(market.price?.usd_market_cap ?? 0)}` : PENDING,
      direction: "flat",
      meta: "USD",
    },
    {
      id: "volume",
      label: "24-hour volume",
      value: market ? `$${compact.format(market.price?.usd_24h_vol ?? 0)}` : PENDING,
      direction: "flat",
      meta: "USD",
    },
    {
      id: "circulating-supply",
      label: "Circulating supply",
      value: market ? compact.format(circulating) : PENDING,
      direction: "flat",
      meta: "XRP",
    },
    {
      id: "max-supply",
      label: "Maximum supply",
      value: compact.format(maximum),
      direction: "flat",
      meta: "XRP",
    },
  ];
}

"use client";

import { TickerTape } from "@/components/ui";
import { useHomeMarket } from "./HomeMarketProvider";
import { buildMarketFigures } from "./market-format";

/**
 * The market strip that opens the page — price, the three change horizons,
 * market cap, volume and supply, straight off the shared live payload.
 */
export default function HomeTicker() {
  const market = useHomeMarket();
  const items = buildMarketFigures(market).map((figure) => ({
    id: figure.id,
    label: figure.label,
    value: figure.value,
    delta: figure.delta,
    direction: figure.direction,
  }));

  return <TickerTape items={items} ariaLabel="Live XRP market ticker" />;
}

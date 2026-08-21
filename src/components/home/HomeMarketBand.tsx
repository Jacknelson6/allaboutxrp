"use client";

import { SectionHeader, StatTile } from "@/components/ui";
import { NOTE } from "./home-style";
import { useHomeMarket } from "./HomeMarketProvider";
import { buildMarketFigures } from "./market-format";

/**
 * The market-data band: the same eight figures the previous market-record
 * table published, re-cut as a StatTile grid on a muted tonal band. Price and
 * the three change horizons lead; capitalization, volume and supply sit below
 * a hairline as the slower-moving reference row.
 */
export default function HomeMarketBand() {
  const market = useHomeMarket();
  const [price, ...rest] = buildMarketFigures(market);
  const changes = rest.slice(0, 3);
  const reference = rest.slice(3);

  return (
    <section className="border-b border-hairline bg-paper-muted" aria-labelledby="market-record-heading">
      <div className="site-container py-12 sm:py-16">
        <SectionHeader
          eyebrow="XRP intelligence / live data"
          title={<span id="market-record-heading">The XRP market record.</span>}
          href="/live-chart"
          linkLabel="Open the live chart"
        />

        <div className="mt-8 grid gap-8 border-b border-hairline pb-8 lg:grid-cols-[0.9fr_2.1fr] lg:gap-12">
          <StatTile
            label={price.label}
            value={price.value}
            delta={price.delta}
            direction={price.direction}
            meta={price.meta}
            size="lg"
          />
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {changes.map((figure) => (
              <StatTile
                key={figure.id}
                label={figure.label}
                value={figure.value}
                delta={figure.delta}
                direction={figure.direction}
                meta={figure.meta}
                size="sm"
              />
            ))}
          </div>
        </div>

        <div className="grid gap-6 py-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {reference.map((figure) => (
            <StatTile
              key={figure.id}
              label={figure.label}
              value={figure.value}
              direction={figure.direction}
              meta={figure.meta}
              size="sm"
            />
          ))}
        </div>

        <p className={`${NOTE} max-w-3xl border-t border-hairline pt-6`}>
          Source: the live market-data endpoint, refreshed on load. Change figures show the move in US
          dollars alongside the percentage for the stated window. Values are context, not a price
          forecast, and they are not investment advice.
        </p>
      </div>
    </section>
  );
}

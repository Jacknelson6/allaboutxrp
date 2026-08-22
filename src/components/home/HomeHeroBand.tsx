import Link from "next/link";
import { Button } from "@/components/ui";
import { DEK, LABEL, LABEL_ACCENT } from "./home-style";

/**
 * Chip rule logic: stacked rows are separated by a top rule, the two-up and
 * four-up layouts switch to a left rule so the row reads as one ruled strip.
 */
const CHIP =
  "border-hairline py-4 border-t [&:nth-child(-n+2)]:border-t-0 [&:nth-child(even)]:border-l [&:nth-child(even)]:pl-6 lg:border-t-0 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0";

const trustChips = [
  { term: "Source policy", detail: "Primary records first" },
  { term: "Ownership", detail: "Independent of Ripple" },
  { term: "Review state", detail: "Dates shown in context" },
];

/**
 * The masthead band. Compressed to a single screen-band: eyebrow, one
 * Baskerville statement, a two-line deck, the primary and secondary calls to
 * action, and the four trust chips as a hairline row.
 */
export default function HomeHeroBand() {
  return (
    <section className="border-b border-hairline bg-paper" aria-labelledby="home-hero-heading">
      <div className="site-container grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
        <div>
          <p className={LABEL_ACCENT}>XRP news, data &amp; research</p>
          <h1
            id="home-hero-heading"
            className="mt-4 font-display text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.035em] font-normal text-ink"
          >
            See what moves XRP.
          </h1>
          <p className={`${DEK} mt-5 max-w-2xl`}>
            Independent reporting, live market data, and source-led guides covering XRP, the XRP
            Ledger, Ripple, regulation, and the payments infrastructure around them.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
            <Button href="/learn/what-is-xrp" variant="primary" size="md">
              Read the XRP guide
            </Button>
            <Button href="/news" variant="secondary" size="md">
              Explore news
            </Button>
            <Button href="/learn" variant="quiet" size="md">
              Browse every guide <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>

        <div className="border-l-0 border-t border-hairline pt-6 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-10">
          <h2 className={LABEL}>What this publication commits to</h2>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            Every time-sensitive claim points back to its source. Data views disclose their feed,
            their window, and their limits.
          </p>
          <Link
            href="/editorial"
            className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-sans text-sm font-[650] text-ink underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-150 hover:text-cobalt hover:decoration-current"
          >
            Read the editorial protocol <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-hairline">
        <dl className="site-container grid grid-cols-2 lg:grid-cols-4">
          {trustChips.map((chip) => (
            <div key={chip.term} className={CHIP}>
              <dt className={LABEL}>{chip.term}</dt>
              <dd className="mt-1.5 text-sm leading-6 text-ink">{chip.detail}</dd>
            </div>
          ))}
          <div className={CHIP}>
            <dt className={LABEL}>Editorial record</dt>
            <dd className="mt-1.5 text-sm leading-6 text-ink">
              <Link
                href="/corrections"
                className="inline-flex min-h-11 items-center gap-1 text-ink underline decoration-hairline decoration-1 underline-offset-4 transition-colors duration-150 hover:text-cobalt hover:decoration-current"
              >
                Public corrections log <span aria-hidden="true">↗</span>
              </Link>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Badge, DataList } from "@/components/ui";
import { DEK, LABEL_ACCENT } from "./home-style";

const standards = [
  {
    code: "Source",
    title: "Claims you can check",
    description: "Important facts link to official documentation, records, or first-party reporting.",
  },
  {
    code: "Method",
    title: "Data with methodology",
    description: "Ledger and market views disclose source, timestamp, limitations, and calculation method.",
  },
  {
    code: "Review",
    title: "Updates that are visible",
    description: "Time-sensitive guides show review dates and distinguish facts from scenarios or opinion.",
  },
];

/**
 * The editorial protocol band — the three standards that govern everything
 * above it, compressed onto one muted band.
 */
export default function FeatureGrid() {
  return (
    <section className="border-b border-hairline bg-paper-muted" aria-labelledby="research-standard-heading">
      <div className="site-container grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className={LABEL_ACCENT}>Editorial protocol</p>
          <h2
            id="research-standard-heading"
            className="mt-4 max-w-xl font-display text-2xl leading-tight font-normal text-ink sm:text-3xl"
          >
            Information is only useful when you can verify it.
          </h2>
          <p className={`${DEK} mt-5 max-w-md`}>
            Three standards apply to every guide, data view, and report on this site.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/editorial"
              className="inline-flex min-h-11 items-center gap-1.5 font-sans text-sm font-[650] text-ink underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-150 hover:text-cobalt hover:decoration-current"
            >
              Read the full protocol <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/learn/trusted-sources"
              className="inline-flex min-h-11 items-center gap-1.5 font-sans text-sm font-[650] text-text-secondary underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-150 hover:text-cobalt hover:decoration-current"
            >
              Inspect trusted sources
            </Link>
          </div>
        </div>

        <DataList ariaLabel="Editorial standards">
          {standards.map((item) => (
            <li key={item.code} className="flex flex-col gap-3 py-5 sm:flex-row sm:gap-6">
              <span className="shrink-0 sm:w-24">
                <Badge variant="outline" tone="neutral">
                  {item.code}
                </Badge>
              </span>
              <span className="min-w-0 flex-1">
                <h3 className="block font-display text-lg leading-snug font-normal text-ink">
                  {item.title}
                </h3>
                <span className="mt-1.5 block text-sm leading-6 text-text-secondary">
                  {item.description}
                </span>
              </span>
            </li>
          ))}
        </DataList>
      </div>
    </section>
  );
}

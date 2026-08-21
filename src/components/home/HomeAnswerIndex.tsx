import Link from "next/link";
import { DataList, SectionHeader } from "@/components/ui";

interface AnswerEntry {
  href: string;
  label: string;
  tag: string;
}

const answerLinks: AnswerEntry[] = [
  { href: "/learn/what-is-xrp", label: "What is XRP?", tag: "Basics" },
  { href: "/learn/how-does-xrp-work", label: "How does the XRP Ledger work?", tag: "Network" },
  { href: "/learn/what-is-ripple", label: "Is Ripple the same as XRP?", tag: "Company" },
  { href: "/learn/xrp-supply-explained", label: "How many XRP exist?", tag: "Supply" },
  { href: "/learn/how-to-store-xrp-safely", label: "How do you store XRP safely?", tag: "Custody" },
  { href: "/learn/is-xrp-a-security", label: "What is XRP’s legal status?", tag: "Legal" },
  { href: "/learn/how-to-buy-xrp", label: "How do you buy XRP?", tag: "Access" },
  { href: "/learn/xrp-etf", label: "What is the state of XRP ETFs?", tag: "Markets" },
];

function AnswerRow({ entry, index }: { entry: AnswerEntry; index: number }) {
  return (
    <li>
      <Link href={entry.href} className="group flex items-baseline gap-4 py-3.5">
        <span className="w-6 shrink-0 font-sans text-xs font-[650] tabular-nums text-text-secondary">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1 font-display text-base leading-snug font-normal text-ink transition-colors duration-150 group-hover:text-cobalt">
          {entry.label}
        </span>
        <span className="shrink-0 font-sans text-[0.6875rem] font-[650] uppercase tracking-[0.04em] text-cobalt">
          {entry.tag}
        </span>
      </Link>
    </li>
  );
}

/**
 * The answer index: the core questions readers arrive with, kept numbered but
 * compressed into two dense hairline-ruled columns.
 */
export default function HomeAnswerIndex() {
  const half = Math.ceil(answerLinks.length / 2);

  return (
    <section className="border-b border-hairline bg-paper-muted" aria-labelledby="answer-index-heading">
      <div className="site-container py-12 sm:py-16">
        <SectionHeader
          eyebrow="Answer index / core records"
          title={<span id="answer-index-heading">Start with a precise question.</span>}
          href="/answers"
          linkLabel="Open the answer index"
        />

        <p className="mt-6 max-w-2xl text-sm leading-6 text-text-secondary">
          Each entry opens with the short answer, then shows the evidence, context, and limits behind
          it. Sources are named where the claim is time-sensitive.
        </p>

        <div className="mt-6 grid gap-x-12 md:grid-cols-2">
          <DataList ariaLabel="Core XRP questions, first column">
            {answerLinks.slice(0, half).map((entry, index) => (
              <AnswerRow key={entry.href} entry={entry} index={index} />
            ))}
          </DataList>
          <DataList ariaLabel="Core XRP questions, second column">
            {answerLinks.slice(half).map((entry, index) => (
              <AnswerRow key={entry.href} entry={entry} index={index + half} />
            ))}
          </DataList>
        </div>
      </div>
    </section>
  );
}

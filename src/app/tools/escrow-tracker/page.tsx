import Link from "next/link";
import { CalendarClock, ExternalLink, LockKeyhole, ShieldAlert } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import SourceList from "@/components/shared/SourceList";

const URL = "https://allaboutxrp.com/tools/escrow-tracker";

export const revalidate = 86400;

const FAQ_ITEMS = [
  {
    question: "When is the next XRP escrow release?",
    answer: "Ripple's published structure uses escrow finishes at the start of each calendar month. The exact finish time, amount made available, and amount later returned to escrow must be verified from current XRP Ledger transactions.",
  },
  {
    question: "Is this a live XRP escrow balance?",
    answer: "No. This page explains Ripple’s published monthly escrow schedule. It does not currently query every escrow object on the XRP Ledger, so it intentionally does not display a live remaining balance.",
  },
  {
    question: "What happens to XRP that Ripple does not use?",
    answer: "Ripple has stated that unused XRP from a monthly release is returned to new escrow contracts. The exact amounts should be verified from ledger transactions or Ripple’s current reporting rather than assumed from a historical average.",
  },
  {
    question: "Does an escrow release automatically enter the market?",
    answer: "No. An escrow finishing makes XRP available to its destination, but that event alone does not show whether the XRP was sold, transferred, held, or placed into another escrow.",
  },
  {
    question: "How much XRP remains in Ripple escrow?",
    answer: "This page does not publish a fixed current balance because a reliable total requires identifying the relevant accounts and summing current ledger escrow objects. Verify the ledger and Ripple's latest reporting instead of relying on a stale estimate.",
  },
  {
    question: "How do I verify an XRP escrow release?",
    answer: "Find the validated EscrowFinish transaction, confirm its owner account and offer sequence, trace the destination, and then look for related EscrowCreate transactions if XRP was placed back into escrow. A finish alone does not prove a sale.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "XRP Escrow Tracker and Monthly Release Schedule",
    description: "A source-led XRP escrow schedule reference with ledger verification guidance.",
    datePublished: "2026-02-10",
    dateModified: "2026-08-24",
    isPartOf: { "@id": "https://allaboutxrp.com/#website" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://allaboutxrp.com/tools" },
      { "@type": "ListItem", position: 3, name: "Escrow schedule reference", item: URL },
    ],
  },
];

function getNextMonthStart() {
  const now = new Date();
  const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));
  return next.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export default function EscrowTrackerPage() {
  const nextMonthStart = getNextMonthStart();

  return (
    <>
      {schemas.map((schema, index) => <SEOSchema key={index} schema={schema} />)}
      <main className="min-h-screen bg-surface-primary">
        <header className="border-b border-surface-border">
          <div className="site-container py-14 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-7 text-sm text-text-secondary">
              <Link href="/" className="py-3 transition-colors hover:text-text-primary">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/tools" className="py-3 transition-colors hover:text-text-primary">Tools</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-text-primary">Escrow tracker</span>
            </nav>
            <div className="flex items-center gap-3 text-xrp-accent-bright">
              <LockKeyhole className="h-5 w-5" aria-hidden="true" />
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em]">Source verification required</p>
            </div>
            <h1 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.035em] text-text-primary">
              XRP escrow tracker and schedule reference
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">
              <strong className="text-text-primary">Ripple&apos;s original escrow program placed 55 billion XRP into time-based contracts and scheduled up to 1 billion XRP to become available each month.</strong>{" "}
              An unlock does not prove that XRP was sold. This reference shows how to verify the actual ledger events without presenting estimates as live data.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-text-secondary">
              Reviewed <time dateTime="2026-08-24">August 24, 2026</time>
            </p>
          </div>
        </header>

        <section className="site-container border-b border-surface-border py-10 sm:py-14" aria-labelledby="status-heading">
          <div className="grid gap-6 lg:grid-cols-[0.34fr_1fr]">
            <h2 id="status-heading" className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-xrp-accent-bright">Current reference status</h2>
            <div className="max-w-3xl border-l-2 border-amber-400/70 pl-5">
              <div className="flex items-center gap-2 text-amber-300">
                <ShieldAlert className="h-5 w-5" aria-hidden="true" />
                <p className="font-semibold">This is not a live balance tracker.</p>
              </div>
              <p className="mt-3 leading-7 text-text-secondary">
                The previous version relied on a hard-coded 2025–2026 table and an unverified balance. Those figures have been removed. This reference now stays useful by showing the published schedule, the next calendar boundary, and the primary records needed to verify actual ledger events without inventing a live remaining balance.
              </p>
            </div>
          </div>
        </section>

        <section className="site-container border-b border-surface-border py-10 sm:py-14" aria-labelledby="brief-heading">
          <div className="grid gap-6 lg:grid-cols-[0.34fr_1fr]">
            <h2 id="brief-heading" className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-xrp-accent-bright">XRP escrow in brief</h2>
            <dl className="grid gap-px overflow-hidden rounded-xl border border-surface-border bg-surface-border sm:grid-cols-3">
              <div className="bg-surface-primary p-5">
                <dt className="text-sm text-text-secondary">Initially placed in escrow</dt>
                <dd className="mt-2 text-2xl font-semibold text-text-primary">55 billion XRP</dd>
              </div>
              <div className="bg-surface-primary p-5">
                <dt className="text-sm text-text-secondary">Published monthly structure</dt>
                <dd className="mt-2 text-2xl font-semibold text-text-primary">Up to 1 billion XRP</dd>
              </div>
              <div className="bg-surface-primary p-5">
                <dt className="text-sm text-text-secondary">What an unlock proves</dt>
                <dd className="mt-2 text-2xl font-semibold text-text-primary">Availability, not a sale</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="site-container section-shell" aria-labelledby="schedule-heading">
          <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr]">
            <div>
              <CalendarClock className="h-6 w-6 text-xrp-accent" aria-hidden="true" />
              <h2 id="schedule-heading" className="mt-5 text-3xl text-text-primary">How the schedule works</h2>
            </div>
            <div className="max-w-3xl space-y-5 text-base leading-8 text-text-secondary">
              <p>
                Ripple placed 55 billion XRP into on-ledger escrow in 2017. The published structure used monthly escrow expirations, with up to 1 billion XRP becoming available at the start of a month. Unused amounts could be placed into new escrows at the end of the queue.
              </p>
              <p>
                The next calendar month starts on <strong className="text-text-primary">{nextMonthStart}</strong>. That date is a schedule reference, not confirmation of a particular transaction or net release. Verify actual escrow finishes and subsequent transfers on the ledger.
              </p>
              <p>
                An escrow finishing is not the same as XRP entering circulating supply or being sold. Establishing that requires tracing the destination and later transactions; a monthly unlock figure alone cannot support the claim.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://xrpl.org/docs/concepts/payment-types/escrow" target="_blank" rel="noopener noreferrer" className="btn-primary px-5">
                  XRPL escrow documentation <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                <a href="https://ripple.com/insights/explanation-ripples-xrp-escrow/" target="_blank" rel="noopener noreferrer" className="btn-secondary px-5">
                  Ripple’s escrow explanation <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-surface-border bg-surface-card" aria-labelledby="verify-heading">
          <div className="site-container section-shell grid gap-10 lg:grid-cols-[0.34fr_1fr]">
            <div>
              <ShieldAlert className="h-6 w-6 text-xrp-accent" aria-hidden="true" />
              <h2 id="verify-heading" className="mt-5 text-3xl text-text-primary">How to verify a monthly release</h2>
            </div>
            <ol className="max-w-3xl space-y-5 text-base leading-8 text-text-secondary">
              <li><strong className="text-text-primary">1. Locate the validated EscrowFinish transaction.</strong> Use an XRP Ledger explorer or API and confirm the transaction is in a validated ledger.</li>
              <li><strong className="text-text-primary">2. Match the escrow object.</strong> Check the Owner and OfferSequence fields so the finish can be tied to the original EscrowCreate transaction.</li>
              <li><strong className="text-text-primary">3. Confirm the amount and destination.</strong> Read the original escrow object and trace the account that received the finished escrow.</li>
              <li><strong className="text-text-primary">4. Look for new EscrowCreate transactions.</strong> XRP that is not used may be returned to the end of the escrow queue in new contracts.</li>
              <li><strong className="text-text-primary">5. Keep unlocks separate from sales.</strong> A sale claim requires evidence from subsequent transactions or current reporting, not only an EscrowFinish.</li>
            </ol>
          </div>
        </section>

        <section className="site-container section-shell" aria-labelledby="learn-heading">
          <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr]">
            <h2 id="learn-heading" className="text-3xl text-text-primary">Understand XRP supply</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/learn/escrow" className="btn-primary px-5">XRP escrow explained</Link>
              <Link href="/learn/xrp-supply-explained" className="btn-secondary px-5">XRP supply explained</Link>
            </div>
          </div>
        </section>

        <section className="border-y border-surface-border bg-surface-card" aria-labelledby="faq-heading">
          <div className="site-container section-shell grid gap-10 lg:grid-cols-[0.34fr_1fr]">
            <h2 id="faq-heading" className="text-3xl text-text-primary">Escrow questions</h2>
            <div className="divide-y divide-surface-border border-y border-surface-border">
              {FAQ_ITEMS.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-6 font-semibold text-text-primary marker:content-none">{item.question}</summary>
                  <p className="mt-3 max-w-3xl leading-7 text-text-secondary">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="site-container py-10 sm:py-14">
          <SourceList
            sources={[
              { label: "Ripple's original XRP escrow explanation", href: "https://ripple.com/insights/explanation-ripples-xrp-escrow/", note: "Published monthly structure and treatment of unused XRP" },
              { label: "Ripple completes the 55 billion XRP lockup", href: "https://ripple.com/insights/ripple-escrows-55-billion-xrp-for-supply-predictability/", note: "First-party confirmation of the original escrow amount" },
              { label: "XRPL escrow documentation", href: "https://xrpl.org/docs/concepts/payment-types/escrow", note: "Escrow object lifecycle and ledger behavior" },
              { label: "XRPL EscrowFinish transaction reference", href: "https://xrpl.org/docs/references/protocol/transactions/types/escrowfinish", note: "Fields and conditions used to finish an escrow" },
              { label: "Ripple Q1 2025 XRP Markets Report", href: "https://ripple.com/insights/q1-2025-xrp-markets-report/", note: "Ripple's reporting on access to escrowed XRP and monthly releases" },
            ]}
          />
        </div>
      </main>
    </>
  );
}

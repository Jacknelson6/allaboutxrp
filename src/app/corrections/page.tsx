import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Corrections and Content Changes | AllAboutXRP",
  description: "AllAboutXRP's public process for reporting, reviewing, correcting, and logging material content errors.",
  alternates: { canonical: "https://allaboutxrp.com/corrections" },
};

export default function CorrectionsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black">
      <article className="reading-container py-16 sm:py-24">
        <header className="border-b border-surface-border pb-10">
          <p className="editorial-kicker">Trust and accountability</p>
          <h1 className="mt-4 text-4xl font-bold text-text-primary sm:text-6xl">Corrections and content changes</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Material errors should be corrected clearly, promptly, and without silently rewriting the record.
          </p>
        </header>

        <section className="prose-custom mt-12">
          <h2>Report an issue</h2>
          <p>
            Email <a href="mailto:team@allaboutxrp.com">team@allaboutxrp.com</a> with the page URL, the statement you believe is incorrect, and a primary source when available. We review factual errors, broken sources, outdated legal or tax information, calculation problems, and missing disclosures.
          </p>

          <h2>What gets logged</h2>
          <p>
            We log changes that alter a reader&apos;s understanding of a material fact, calculation, risk, legal status, tax treatment, product ranking, or safety instruction. Typographical fixes and formatting changes do not normally receive a log entry unless they changed meaning.
          </p>

          <h2>Review process</h2>
          <ol>
            <li>Preserve the report and identify the disputed claim.</li>
            <li>Check the strongest available primary record and its effective date.</li>
            <li>Correct the article, update its modified date, and add a plain-language note when the change is material.</li>
            <li>Record the correction below with the date and affected URL.</li>
          </ol>

          <h2>Public correction log</h2>
          <div className="not-prose mt-5 rounded-xl border border-surface-border bg-surface-card p-5">
            <p className="text-sm font-semibold text-text-primary">Log launched August 8, 2026</p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">No material corrections have been recorded since the launch of this public log.</p>
          </div>

          <p className="mt-10">
            Read the complete <Link href="/editorial">editorial standards</Link> or learn about the <Link href="/authors/jack-nelson">accountable publisher</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}

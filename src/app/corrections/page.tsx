import type { Metadata } from "next";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Corrections and Content Changes | AllAboutXRP",
  description: "AllAboutXRP's public process for reporting, reviewing, correcting, and logging material content errors.",
  alternates: { canonical: "https://allaboutxrp.com/corrections" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Corrections", item: "https://allaboutxrp.com/corrections" },
  ],
};

export default function CorrectionsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-surface-primary">
      <SEOSchema schema={breadcrumbSchema} />
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
            Send the exact page and disputed claim. A primary source is helpful when one is available. We review factual errors, broken sources, outdated legal or tax information, calculation problems, and missing disclosures.
          </p>

          <form
            name="corrections"
            method="POST"
            action="/corrections/thanks"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="not-prose mt-8 border border-surface-border bg-surface-card p-6 sm:p-8"
          >
            <input type="hidden" name="form-name" value="corrections" />
            <p className="hidden"><label>Do not fill out this field<input name="bot-field" /></label></p>
            <div className="grid gap-6">
              <label className="grid gap-2 text-sm font-semibold text-text-primary">
                Page URL
                <input className="min-h-12 border border-surface-border bg-surface-primary px-4 py-3 font-normal text-text-primary" type="url" name="page-url" required placeholder="https://allaboutxrp.com/..." />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-text-primary">
                Statement that may be incorrect
                <textarea className="min-h-32 border border-surface-border bg-surface-primary px-4 py-3 font-normal text-text-primary" name="disputed-claim" required placeholder="Quote or describe the exact claim." />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-text-primary">
                Proposed correction
                <textarea className="min-h-32 border border-surface-border bg-surface-primary px-4 py-3 font-normal text-text-primary" name="proposed-correction" required placeholder="Explain what should change and why." />
              </label>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-text-primary">
                  Supporting source URL <span className="font-normal text-text-secondary">(optional)</span>
                  <input className="min-h-12 border border-surface-border bg-surface-primary px-4 py-3 font-normal text-text-primary" type="url" name="source-url" placeholder="https://..." />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-text-primary">
                  Your email <span className="font-normal text-text-secondary">(optional)</span>
                  <input className="min-h-12 border border-surface-border bg-surface-primary px-4 py-3 font-normal text-text-primary" type="email" name="email" autoComplete="email" placeholder="name@example.com" />
                </label>
              </div>
              <div>
                <button type="submit" className="btn-primary">Submit correction</button>
              </div>
            </div>
          </form>

          <p className="text-sm text-text-secondary">If the form does not work, email <a href="mailto:team@allaboutxrp.com">team@allaboutxrp.com</a> with the same information.</p>

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
          <div className="not-prose mt-5 border border-surface-border bg-surface-card p-5">
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

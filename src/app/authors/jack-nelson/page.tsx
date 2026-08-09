import type { Metadata } from "next";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";
import { accountablePublisher } from "@/lib/editorial";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Jack Nelson, Publisher | AllAboutXRP",
  description: "Meet Jack Nelson, the accountable publisher responsible for AllAboutXRP's editorial standards, disclosures, and corrections process.",
  alternates: { canonical: "https://allaboutxrp.com/authors/jack-nelson" },
  openGraph: {
    title: "Jack Nelson, Publisher | AllAboutXRP",
    description: "Accountability, scope, and editorial disclosures for the publisher of AllAboutXRP.",
    url: "https://allaboutxrp.com/authors/jack-nelson",
    type: "profile",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  ...accountablePublisher,
  description: "Publisher accountable for AllAboutXRP editorial standards, research transparency, disclosures, and corrections.",
  knowsAbout: ["XRP education", "XRP Ledger research", "digital asset publishing"],
  publishingPrinciples: "https://allaboutxrp.com/editorial",
};

export default function JackNelsonAuthorPage() {
  return (
    <>
      <SEOSchema schema={personSchema} />
      <main id="main-content" className="min-h-screen bg-black">
        <article className="reading-container py-16 sm:py-24">
          <header className="border-b border-surface-border pb-10">
            <p className="editorial-kicker">Accountable publisher</p>
            <h1 className="mt-4 text-4xl font-bold text-text-primary sm:text-6xl">Jack Nelson</h1>
            <p className="mt-4 text-lg font-medium text-xrp-accent-bright">Publisher, AllAboutXRP</p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Jack Nelson is the publisher accountable for AllAboutXRP&apos;s editorial standards, independence, disclosures, and corrections process.
            </p>
          </header>

          <section className="prose-custom mt-12">
            <h2>Editorial responsibility</h2>
            <p>
              The accountable publisher role means taking responsibility for how this site labels claims, presents uncertainty, links evidence, separates Ripple from XRP and the XRP Ledger, and responds when a correction is needed. The site&apos;s articles are produced through the AllAboutXRP editorial workflow rather than presented as Jack&apos;s personal financial opinions.
            </p>

            <h2>Scope and credentials</h2>
            <p>
              Jack is a publisher and marketing operator. He is not presented here as a financial adviser, attorney, accountant, blockchain engineer, or representative of Ripple. Pages involving investments, law, tax, security, or custody disclose the limits of editorial review and direct readers to primary records and qualified professionals where appropriate.
            </p>

            <h2>How accountability works</h2>
            <ul>
              <li>Material claims should be traceable to primary records whenever practical.</li>
              <li>Scenarios, estimates, and analysis should not be written as guaranteed outcomes.</li>
              <li>Commercial relationships do not purchase rankings or favorable editorial treatment.</li>
              <li>Material errors are corrected and logged publicly.</li>
            </ul>

            <div className="not-prose mt-10 flex flex-wrap gap-4">
              <Link href="/editorial" className="inline-flex min-h-11 items-center  bg-xrp-accent px-5 text-sm font-semibold text-white hover:bg-xrp-accent-bright">Read editorial standards</Link>
              <Link href="/corrections" className="inline-flex min-h-11 items-center  border border-surface-border px-5 text-sm font-semibold text-text-primary hover:border-xrp-accent/40">View corrections</Link>
              <a href="mailto:team@allaboutxrp.com" className="inline-flex min-h-11 items-center px-2 text-sm font-semibold text-xrp-accent-bright underline decoration-xrp-accent/30 underline-offset-4">Contact the editorial desk</a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

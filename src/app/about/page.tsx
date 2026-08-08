import { Metadata } from "next";
import Link from "next/link";
import { BookOpenText, Mail, SearchCheck, ShieldCheck } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import { accountablePublisher } from "@/lib/editorial";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About AllAboutXRP — Mission & Research Process",
  description:
    "AllAboutXRP is an independent educational resource for source-led information about XRP and the XRP Ledger. Learn about our mission and research process.",
  openGraph: {
    title: "About AllAboutXRP | Independent XRP Education",
    description:
      "Learn about our mission to provide independent, accurate XRP education.",
    url: "https://allaboutxrp.com/about",
    type: "website",
  },
  alternates: { canonical: "https://allaboutxrp.com/about" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://allaboutxrp.com/#organization",
  name: "AllAboutXRP",
  url: "https://allaboutxrp.com",
  foundingDate: "2026-02",
  description:
    "Independent educational resource providing source-led information about XRP and the XRP Ledger.",
  founder: accountablePublisher,
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "team@allaboutxrp.com",
    contactType: "editorial",
  },
};

export default function AboutPage() {
  return (
    <>
      <SEOSchema schema={orgSchema} />
      <main id="main-content" className="min-h-screen bg-black">
        <article className="reading-container py-16 sm:py-24">
          <header className="border-b border-surface-border pb-10">
            <p className="editorial-kicker">About AllAboutXRP</p>
            <h1 className="mt-4 text-4xl font-bold text-text-primary sm:text-6xl">
              Clear answers. Visible evidence.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
              AllAboutXRP is an independent, source-led reference for people who want to understand XRP and verify the details for themselves.
            </p>
          </header>

          <section className="prose-custom mt-12">
            <h2>Our mission</h2>
            <p>
              AllAboutXRP exists to make XRP and XRP Ledger information clearer, easier to
              verify, and more useful. We believe that transparent sourcing supports better decisions — whether you&apos;re
              a newcomer learning what XRP is, or an experienced holder tracking on-chain data.
            </p>
            <p>
              We are <strong>not affiliated with Ripple Labs</strong>,
              any cryptocurrency exchange, or any financial institution. Our content is
              independently researched and written. We don&apos;t accept payment for rankings
              or reviews, and we never let partnerships influence our editorial content.
            </p>

            <div className="not-prose my-12 grid gap-4 sm:grid-cols-3">
              {[
                { icon: SearchCheck, title: "Source the claim", text: "We prioritize first-party records, official documentation, and ledger data." },
                { icon: BookOpenText, title: "Answer first", text: "Pages lead with the useful answer, then explain context and limitations." },
                { icon: ShieldCheck, title: "Show uncertainty", text: "Analysis and scenarios are labeled instead of presented as guarantees." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-xl border border-surface-border bg-surface-card p-5">
                  <Icon className="h-5 w-5 text-xrp-accent-bright" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{text}</p>
                </div>
              ))}
            </div>

            <h2>How we work</h2>
            <p>
              AllAboutXRP launched in 2026 as an independent reference for XRP education,
              live data, and practical tools. Pages are designed to give the answer first,
              explain the relevant context, and point readers to evidence they can inspect.
            </p>

            <h2>Who is accountable</h2>
            <p>
              <Link href="/authors/jack-nelson">Jack Nelson</Link> is the accountable publisher for AllAboutXRP. The role covers editorial standards, independence, disclosures, and corrections. It does not imply professional credentials in financial advice, law, tax, accounting, or blockchain engineering. Pages identify the level and limitations of the review they received.
            </p>
            <p>
              For technical and network claims, we prioritize XRP Ledger documentation and
              ledger data. For legal or company claims, we look for court records, regulatory
              material, and first-party disclosures. Analysis and scenarios are labeled as
              such rather than presented as guaranteed outcomes. See our{" "}
              <Link
                href="/learn/trusted-sources"
                className="text-link"
              >
                trusted sources directory
              </Link>
              .
            </p>

            <h2>What we cover</h2>
            <ul>
              <li>
                <strong>Education</strong> — In-depth guides on
                XRP, the XRP Ledger, Ripple, RLUSD, escrow, partnerships, and more
              </li>
              <li>
                <strong>Live data</strong> — Real-time price charts,
                on-chain analytics, and rich list tracking
              </li>
              <li>
                <strong>Tools</strong> — Profit calculators, fee
                estimators, and portfolio tracking
              </li>
              <li>
                <strong>News</strong> — Weekly digests and analysis
                of the latest XRP developments
              </li>
              <li>
                <strong>Community</strong> — Curated voices from
                the XRP community
              </li>
            </ul>

            <h2>Editorial independence</h2>
            <p>
              We take editorial independence seriously. Our content is never influenced by
              external parties. We don&apos;t do &quot;pay-for-play&quot; reviews, sponsored
              content disguised as editorial, or rankings influenced by business relationships.
              Read our full{" "}
              <Link
                href="/editorial"
                className="text-link"
              >
                Editorial Standards
              </Link>{" "}
              for details on how we research and fact-check our content.
            </p>
            <p>
              Material errors are documented in our public <Link href="/corrections">corrections log</Link>.
            </p>

            <h2>Contact</h2>
            <p>
              Have a question, correction, or suggestion? We&apos;d love to hear from you.
            </p>
            <p className="not-prose mt-4">
              <a
                href="mailto:team@allaboutxrp.com"
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-xrp-accent-bright underline decoration-xrp-accent/30 underline-offset-4 hover:decoration-xrp-accent-bright"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                team@allaboutxrp.com
              </a>
            </p>

            <div className="not-prose mt-12 rounded-xl border border-surface-border bg-surface-card p-6">
              <p className="text-sm leading-relaxed text-text-secondary">
                AllAboutXRP is for informational and educational purposes only. Nothing on
                this site constitutes financial, legal, or investment advice. Cryptocurrency
                investments carry significant risk. Always do your own research.
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

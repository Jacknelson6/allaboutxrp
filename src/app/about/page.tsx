import { Metadata } from "next";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";

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
        <article className="mx-auto max-w-3xl px-5 py-16">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-white tracking-tight">
              About AllAboutXRP
            </h1>
            <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
              Independent, source-led XRP education for readers who want to verify the details.
            </p>
          </header>

          <section className="prose-custom space-y-6 text-zinc-300 leading-relaxed">
            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
            <p>
              AllAboutXRP exists to make XRP and XRP Ledger information clearer, easier to
              verify, and more useful. We believe that transparent sourcing supports better decisions — whether you&apos;re
              a newcomer learning what XRP is, or an experienced holder tracking on-chain data.
            </p>
            <p>
              We are <strong className="text-white">not affiliated with Ripple Labs</strong>,
              any cryptocurrency exchange, or any financial institution. Our content is
              independently researched and written. We don&apos;t accept payment for rankings
              or reviews, and we never let partnerships influence our editorial content.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">How We Work</h2>
            <p>
              AllAboutXRP launched in 2026 as an independent reference for XRP education,
              live data, and practical tools. Pages are designed to give the answer first,
              explain the relevant context, and point readers to evidence they can inspect.
            </p>
            <p>
              For technical and network claims, we prioritize XRP Ledger documentation and
              ledger data. For legal or company claims, we look for court records, regulatory
              material, and first-party disclosures. Analysis and scenarios are labeled as
              such rather than presented as guaranteed outcomes. See our{" "}
              <Link
                href="/learn/trusted-sources"
                className="text-[#0085FF] underline decoration-[#0085FF]/30 hover:decoration-[#0085FF]"
              >
                trusted sources directory
              </Link>
              .
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">What We Cover</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-200">Education</strong> — In-depth guides on
                XRP, the XRP Ledger, Ripple, RLUSD, escrow, partnerships, and more
              </li>
              <li>
                <strong className="text-zinc-200">Live Data</strong> — Real-time price charts,
                on-chain analytics, and rich list tracking
              </li>
              <li>
                <strong className="text-zinc-200">Tools</strong> — Profit calculators, fee
                estimators, and portfolio tracking
              </li>
              <li>
                <strong className="text-zinc-200">News</strong> — Weekly digests and analysis
                of the latest XRP developments
              </li>
              <li>
                <strong className="text-zinc-200">Community</strong> — Curated voices from
                the XRP community
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-10">
              Editorial Independence
            </h2>
            <p>
              We take editorial independence seriously. Our content is never influenced by
              external parties. We don&apos;t do &quot;pay-for-play&quot; reviews, sponsored
              content disguised as editorial, or rankings influenced by business relationships.
              Read our full{" "}
              <Link
                href="/editorial"
                className="text-[#0085FF] underline decoration-[#0085FF]/30 hover:decoration-[#0085FF]"
              >
                Editorial Standards
              </Link>{" "}
              for details on how we research and fact-check our content.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">Contact</h2>
            <p>
              Have a question, correction, or suggestion? We&apos;d love to hear from you.
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:team@allaboutxrp.com"
                className="text-[#0085FF] underline decoration-[#0085FF]/30 hover:decoration-[#0085FF]"
              >
                team@allaboutxrp.com
              </a>
            </p>

            <div className="mt-12 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <p className="text-sm text-zinc-500">
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

import { Metadata } from "next";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About AllAboutXRP — Our Mission & Team",
  description:
    "AllAboutXRP is an independent educational resource dedicated to providing accurate, unbiased information about XRP and the XRP Ledger. Learn about our team, mission, and editorial standards.",
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
  name: "AllAboutXRP",
  url: "https://allaboutxrp.com",
  foundingDate: "2026-02",
  description:
    "Independent educational resource providing comprehensive, unbiased information about XRP and the XRP Ledger.",
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
              Independent XRP education — built by researchers, for the community.
            </p>
          </header>

          <section className="prose-custom space-y-6 text-zinc-300 leading-relaxed">
            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
            <p>
              AllAboutXRP exists for one purpose: to be the most comprehensive, accurate,
              and accessible educational resource about XRP and the XRP Ledger. We believe
              that clear, unbiased information empowers better decisions — whether you&apos;re
              a newcomer learning what XRP is, or an experienced holder tracking on-chain data.
            </p>
            <p>
              We are <strong className="text-white">not affiliated with Ripple Labs</strong>,
              any cryptocurrency exchange, or any financial institution. Our content is
              independently researched and written. We don&apos;t accept payment for rankings
              or reviews, and we never let partnerships influence our editorial content.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">Who We Are</h2>
            <p>
              AllAboutXRP was founded in February 2026 by a team of XRP researchers and
              cryptocurrency analysts who saw a gap in the market: there was no single,
              trustworthy resource that covered everything about XRP in one place.
            </p>
            <p>
              Our team includes blockchain researchers, financial writers, and developers
              who have collectively spent years studying the XRP Ledger, Ripple&apos;s
              technology, and the broader crypto ecosystem. Every piece of content goes
              through a multi-step editorial process before publication.
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

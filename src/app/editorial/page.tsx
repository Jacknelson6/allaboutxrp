import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Editorial Standards — How We Research & Fact-Check",
  description:
    "Learn how AllAboutXRP researches, writes, and fact-checks content. Our editorial process ensures accuracy, independence, and transparency in everything we publish.",
  openGraph: {
    title: "Editorial Standards | AllAboutXRP",
    description:
      "Our commitment to accurate, independent, and transparent XRP education.",
    url: "https://allaboutxrp.com/editorial",
    type: "website",
  },
  alternates: { canonical: "https://allaboutxrp.com/editorial" },
};

export default function EditorialPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black">
      <article className="mx-auto max-w-3xl px-5 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Editorial Standards
          </h1>
          <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
            How we research, write, and maintain the content on AllAboutXRP.
          </p>
        </header>

        <section className="space-y-8 text-zinc-300 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Our Research Process
            </h2>
            <p>
              Every article on AllAboutXRP follows a structured research process:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-200">Primary source research</strong> — We start
                with official documentation, white papers, on-chain data, regulatory filings,
                and direct statements from relevant organizations.
              </li>
              <li>
                <strong className="text-zinc-200">Cross-referencing</strong> — Claims are
                verified against multiple independent sources. We don&apos;t rely on a single
                source for factual statements.
              </li>
              <li>
                <strong className="text-zinc-200">Expert review</strong> — Technical content
                is reviewed by team members with relevant expertise in blockchain technology,
                cryptography, or financial markets.
              </li>
              <li>
                <strong className="text-zinc-200">Editorial review</strong> — A separate
                editor checks for accuracy, clarity, and completeness before publication.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Independence & Objectivity
            </h2>
            <p>AllAboutXRP maintains strict editorial independence:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-zinc-400">
              <li>
                We are <strong className="text-zinc-200">not affiliated with Ripple Labs</strong>,
                any exchange, wallet provider, or financial institution.
              </li>
              <li>
                We do not accept payment for product rankings, reviews, or editorial placement.
              </li>
              <li>
                Business relationships never influence the content we publish or the products
                we recommend.
              </li>
              <li>
                Our team members disclose any relevant cryptocurrency holdings that could
                present a conflict of interest.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              How We Evaluate Products
            </h2>
            <p>
              When we review exchanges, wallets, or other products, we evaluate them on
              objective criteria:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-zinc-400">
              <li>Security track record and practices</li>
              <li>Fee structure and transparency</li>
              <li>XRP-specific features and support</li>
              <li>Ease of use and user experience</li>
              <li>Regulatory compliance and licensing</li>
              <li>Community reputation and trustworthiness</li>
              <li>Customer support quality</li>
            </ul>
            <p className="mt-3">
              Rankings reflect our honest assessment based on these criteria. No company can
              pay for a higher ranking.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Content Updates
            </h2>
            <p>
              The cryptocurrency space evolves rapidly. We are committed to keeping our
              content current:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-zinc-400">
              <li>
                All articles display a &quot;Last updated&quot; date so readers know how
                recent the information is.
              </li>
              <li>
                Core educational content is reviewed and updated on a regular cycle.
              </li>
              <li>
                Breaking developments (regulatory changes, major updates) trigger
                immediate content reviews and updates.
              </li>
              <li>
                Outdated or inaccurate content is corrected promptly when identified.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Corrections Policy
            </h2>
            <p>
              We take accuracy seriously. If we make an error, we correct it promptly and
              transparently. If you spot an inaccuracy in any of our content, please contact
              us at{" "}
              <a
                href="mailto:team@allaboutxrp.com"
                className="text-[#0085FF] underline decoration-[#0085FF]/30 hover:decoration-[#0085FF]"
              >
                team@allaboutxrp.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Not Financial Advice
            </h2>
            <p>
              AllAboutXRP is an educational resource. Nothing we publish constitutes
              financial, legal, or investment advice. Cryptocurrency investments carry
              significant risk, and past performance does not guarantee future results.
              Always do your own research and consult qualified professionals before making
              investment decisions.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-800">
            <p className="text-sm text-zinc-500">
              Questions about our editorial process?{" "}
              <Link
                href="/about"
                className="text-[#0085FF] underline decoration-[#0085FF]/30 hover:decoration-[#0085FF]"
              >
                Learn more about our team
              </Link>{" "}
              or reach out at{" "}
              <a
                href="mailto:team@allaboutxrp.com"
                className="text-[#0085FF] underline decoration-[#0085FF]/30 hover:decoration-[#0085FF]"
              >
                team@allaboutxrp.com
              </a>
              .
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}

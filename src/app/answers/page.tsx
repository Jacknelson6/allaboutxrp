import { Metadata } from "next";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";
import { buildBreadcrumbSchema } from "@/lib/utils/seo";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRP Answers — Clear, Source-Led XRP Guides",
  description:
    "Get clear, source-led answers to common questions about XRP, the XRP Ledger, supply, wallets, transaction speed, risks, and legal history.",
  openGraph: {
    title: "XRP Answers Hub | AllAboutXRP",
    description: "Clear XRP answers with supporting context, risk disclosures, and links to primary sources.",
    url: "https://allaboutxrp.com/answers",
    type: "website",
  },
  alternates: { canonical: "https://allaboutxrp.com/answers" },
};

const questions = [
  { href: "/learn/what-is-xrp", title: "What Is XRP?", snippet: "A plain-language introduction to XRP, how it is used, and how it differs from Ripple." },
  { href: "/learn/how-does-xrp-work", title: "How Does XRP Work?", snippet: "How XRPL transactions, validation, consensus, fees, and finality work." },
  { href: "/learn/can-xrp-be-mined", title: "Can XRP Be Mined?", snippet: "Why XRP does not use proof-of-work mining and how XRPL consensus differs." },
  { href: "/learn/xrp-supply-explained", title: "How Many XRP Are There?", snippet: "The fixed genesis supply, circulating supply, escrow, and transaction-cost destruction." },
  { href: "/learn/how-to-buy-xrp", title: "How Do You Buy XRP?", snippet: "A practical process for choosing an exchange, funding an account, and planning custody." },
  { href: "/learn/how-to-store-xrp-safely", title: "How Do You Store XRP Safely?", snippet: "Wallet, backup, scam-avoidance, and self-custody practices for XRP holders." },
  { href: "/learn/is-xrp-a-security", title: "Is XRP a Security?", snippet: "What the U.S. court record says, what it does not say, and why context matters." },
  { href: "/learn/is-xrp-a-good-investment", title: "Is XRP a Good Investment?", snippet: "A risk-first framework for evaluating XRP without treating forecasts as guarantees." },
  { href: "/learn/xrp-price-prediction", title: "Can XRP Price Predictions Be Trusted?", snippet: "How to assess scenarios, assumptions, market capitalization, and prediction uncertainty." },
  { href: "/learn/what-is-ripple", title: "Is XRP the Same as Ripple?", snippet: "Why XRP is a digital asset, Ripple is a company, and the distinction matters." },
  { href: "/answers/best-cryptocurrency-2026", title: "How Should Cryptocurrencies Be Compared?", snippet: "A framework for comparing networks by design, utility, liquidity, risk, and evidence." },
  { href: "/answers/top-10-cryptocurrencies-2026", title: "Which Cryptocurrencies Matter in 2026?", snippet: "A current overview with category context instead of a one-size-fits-all ranking." },
  { href: "/answers/best-altcoins-2026", title: "How Should Altcoins Be Evaluated?", snippet: "A risk-aware comparison of major altcoin networks and their different use cases." },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://allaboutxrp.com/answers#collection",
  name: "XRP Answers",
  url: "https://allaboutxrp.com/answers",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: questions.map((question, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: question.title,
      url: `https://allaboutxrp.com${question.href}`,
    })),
  },
};

export default function AnswersHub() {
  return (
    <>
      <SEOSchema schema={buildBreadcrumbSchema([
        { name: "Home", url: "https://allaboutxrp.com" },
        { name: "Answers" },
      ])} />
      <SEOSchema schema={collectionSchema} />

      <main id="main-content" className="min-h-screen bg-black text-white">
        <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            XRP Answers
          </h1>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Clear, source-led answers to the most common questions about{" "}
            <Link href="/learn/what-is-xrp" className="text-[#0085FF] hover:underline">XRP, the native token of the XRP Ledger</Link>.
            We separate documented facts from analysis and link to supporting sources.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {questions.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group block rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-[#0085FF]/50 hover:bg-white/[0.04]"
              >
                <h2 className="text-lg font-semibold text-white group-hover:text-[#0085FF] transition mb-2">
                  {q.title}
                </h2>
                <p className="text-sm text-gray-400">{q.snippet}</p>
              </Link>
            ))}
          </div>

          <p className="text-xs text-gray-600 text-center mt-12">
            Editorial review: July 28, 2026
          </p>
        </section>
      </main>
    </>
  );
}

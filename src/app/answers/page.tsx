import { Metadata } from "next";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";
import { buildBreadcrumbSchema } from "@/lib/utils/seo";

export const metadata: Metadata = {
  title: "XRP Answers — Your Top Questions About XRP, Answered",
  description:
    "Get clear, authoritative answers to the most common questions about XRP, the native token of the XRP Ledger. Updated for 2026.",
  openGraph: {
    title: "XRP Answers Hub | AllAboutXRP",
    description: "Definitive answers to every major XRP question — investment, speed, supply, legal status, and more.",
    url: "https://allaboutxrp.com/answers",
    type: "website",
  },
  alternates: { canonical: "https://allaboutxrp.com/answers" },
};

const questions = [
  { slug: "best-cryptocurrency-2026", title: "Best Cryptocurrency to Buy in 2026", snippet: "XRP, Bitcoin, Ethereum, Solana — which is the best crypto to buy? Full comparison." },
  { slug: "top-10-cryptocurrencies-2026", title: "Top 10 Cryptocurrencies to Watch in 2026", snippet: "Ranked list of the top 10 cryptos with key stats, verdicts, and analysis." },
  { slug: "xrp-price-prediction-2026", title: "XRP Price Prediction 2026", snippet: "Real analyst predictions from 21Shares, Changelly, Kraken, and more." },
  { slug: "best-altcoins-2026", title: "Best Altcoins to Buy in 2026", snippet: "Top altcoin picks beyond Bitcoin — XRP, ETH, SOL, LINK, and more." },
  { slug: "is-xrp-a-good-investment", title: "Is XRP a Good Investment in 2026?", snippet: "XRP offers real utility in cross-border payments, but all crypto carries risk." },
  { slug: "will-xrp-reach-10-dollars", title: "Will XRP Reach $10?", snippet: "What market cap, adoption, and historical trends suggest about XRP's price ceiling." },
  { slug: "is-xrp-a-security", title: "Is XRP a Security?", snippet: "The SEC lawsuit outcome and what it means for XRP's legal classification." },
  { slug: "how-fast-is-xrp", title: "How Fast Is XRP?", snippet: "XRP settles transactions in 3–5 seconds with fees under $0.01." },
  { slug: "can-xrp-be-mined", title: "Can XRP Be Mined?", snippet: "No — XRP uses a unique consensus protocol, not proof-of-work mining." },
  { slug: "why-is-xrp-dropping", title: "Why Is XRP Dropping?", snippet: "Common factors behind XRP price declines and what drives volatility." },
  { slug: "what-banks-use-xrp", title: "What Banks Use XRP?", snippet: "Financial institutions leveraging RippleNet and On-Demand Liquidity with XRP." },
  { slug: "is-it-too-late-to-buy-xrp", title: "Is It Too Late to Buy XRP?", snippet: "How current prices compare to historical data and analyst projections." },
  { slug: "how-many-xrp-are-there", title: "How Many XRP Are There?", snippet: "100 billion XRP were created at genesis — and no more can ever be minted." },
  { slug: "xrp-vs-solana", title: "XRP vs Solana: Which Is Better?", snippet: "A head-to-head comparison of speed, cost, use cases, and ecosystem." },
];

export default function AnswersHub() {
  return (
    <>
      <SEOSchema schema={buildBreadcrumbSchema([
        { name: "Home", url: "https://allaboutxrp.com" },
        { name: "Answers" },
      ])} />

      <main id="main-content" className="min-h-screen bg-black text-white">
        <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            XRP Answers
          </h1>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Clear, authoritative answers to the most common questions about{" "}
            <Link href="/learn/what-is-xrp" className="text-[#0085FF] hover:underline">XRP, the native token of the XRP Ledger</Link>.
            No hype — just facts.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {questions.map((q) => (
              <Link
                key={q.slug}
                href={`/answers/${q.slug}`}
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
            Last Updated: February 11, 2026
          </p>
        </section>
      </main>
    </>
  );
}

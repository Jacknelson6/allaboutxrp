import { Metadata } from "next";
import Link from "next/link";
import AnswerPageLayout from "../AnswerPageLayout";

export const metadata: Metadata = {
  title: "Is XRP a Security?",
  description: "Is XRP a security? A federal court ruled in 2023 that programmatic sales of XRP on exchanges do not constitute securities transactions, providing significant regulatory clarity.",
  openGraph: {
    title: "Is XRP a Security? The SEC Ruling Explained | AllAboutXRP",
    description: "The definitive breakdown of XRP's legal status after the SEC v. Ripple ruling.",
    url: "https://allaboutxrp.com/answers/is-xrp-a-security",
    type: "article",
  },
  alternates: { canonical: "https://allaboutxrp.com/answers/is-xrp-a-security" },
};

export default function Page() {
  return (
    <AnswerPageLayout
      title="Is XRP a Security?"
      slug="is-xrp-a-security"
      directAnswer="No, XRP, the native token of the XRP Ledger, is not classified as a security for purposes of exchange-based transactions. In July 2023, U.S. District Judge Analisa Torres ruled that programmatic sales of XRP on public exchanges do not constitute securities transactions under the Howey test. The court did find that Ripple's direct institutional sales had characteristics of securities offerings, but XRP itself — as a digital asset — was not deemed a security."
      shortAnswer={
        <p className="text-gray-300 leading-relaxed">
          The short answer is that XRP, the native token of the XRP Ledger, is not a security when bought and sold on public exchanges. This was established in the landmark{" "}
          <Link href="/learn/history" className="text-[#0085FF] hover:underline">SEC v. Ripple Labs case</Link>.
          Judge Torres applied the Howey test and determined that secondary market purchasers of XRP did not reasonably expect profits from Ripple&apos;s efforts — a key requirement for something to be classified as a security. This ruling was a watershed moment for the crypto industry, leading to{" "}
          <Link href="/learn/what-is-xrp" className="text-[#0085FF] hover:underline">XRP being relisted on major U.S. exchanges</Link>{" "}
          that had previously delisted it. By 2026, XRP enjoys clearer regulatory standing than most digital assets.
        </p>
      }
      fullExplanation={
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <h3 className="text-xl font-semibold text-white">The SEC Lawsuit: Background</h3>
          <p>
            On December 22, 2020, the U.S. Securities and Exchange Commission (SEC) filed a lawsuit against Ripple Labs, CEO Brad Garlinghouse, and co-founder Chris Larsen, alleging that XRP was an unregistered security and that Ripple had raised over $1.3 billion through illegal securities sales. The lawsuit sent shockwaves through the crypto industry, causing major exchanges like Coinbase and Binance US to delist or suspend XRP trading.
          </p>
          <h3 className="text-xl font-semibold text-white">The Howey Test</h3>
          <p>
            The legal framework for determining whether something is a security in the U.S. comes from the 1946 Supreme Court case SEC v. W.J. Howey Co. Under the Howey test, an asset is a security if it involves: (1) an investment of money, (2) in a common enterprise, (3) with a reasonable expectation of profits, (4) derived from the efforts of others. The crux of the XRP case hinged on whether buyers of XRP on exchanges had a reasonable expectation of profits from Ripple&apos;s efforts.
          </p>
          <h3 className="text-xl font-semibold text-white">The Ruling</h3>
          <p>
            On July 13, 2023, Judge Torres issued a partial summary judgment that made legal history. She drew a critical distinction: Ripple&apos;s direct sales to institutional investors (who knew they were buying from Ripple and expected profits from Ripple&apos;s efforts) did meet the Howey test criteria. However, programmatic sales on exchanges — where buyers didn&apos;t know whether they were buying from Ripple or any other seller — did not. XRP itself, as a digital token, was not inherently a security.
          </p>
          <h3 className="text-xl font-semibold text-white">Impact on XRP and the Crypto Industry</h3>
          <p>
            The ruling had immediate and far-reaching consequences. XRP&apos;s price surged over 70% in the days following. Major exchanges relisted XRP. The decision established precedent that a digital asset can be sold as part of a securities transaction in one context but not in another — the asset itself is not a security. This nuance was novel and influential, being cited in subsequent crypto-related cases. By 2026, the SEC has moved toward a more structured regulatory framework, and XRP benefits from being one of the few major digital assets with clear legal precedent in its favor.
          </p>
          <h3 className="text-xl font-semibold text-white">Global Regulatory Status</h3>
          <p>
            Outside the U.S., XRP, the native token of the XRP Ledger, has generally not been classified as a security. The UK&apos;s FCA, Japan&apos;s FSA, Singapore&apos;s MAS, and various other regulators have either explicitly or implicitly treated XRP as a utility token or virtual asset rather than a security. This global regulatory clarity further supports XRP&apos;s standing as a legitimate digital asset for payments and liquidity.
          </p>
        </div>
      }
      whatThisMeans={
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            For you, this means that buying, selling, and holding XRP, the native token of the XRP Ledger, on regulated exchanges is legal and does not involve purchasing a security. This regulatory clarity reduces risk for investors and opens the door to potential financial products like an XRP ETF. It also means that XRP can be used freely for payments, remittances, and{" "}
            <Link href="/learn/partnerships" className="text-[#0085FF] hover:underline">institutional liquidity via RippleNet</Link>{" "}
            without the legal cloud that hung over it from 2020 to 2023.
          </p>
          <p>
            Learn more about{" "}
            <Link href="/learn/history" className="text-[#0085FF] hover:underline">XRP&apos;s history</Link>{" "}
            and the full timeline of the SEC case.
          </p>
        </div>
      }
      relatedQuestions={[
        { question: "Is XRP a Good Investment in 2026?", answer: "How regulatory clarity and utility contribute to XRP's investment case.", slug: "is-xrp-a-good-investment" },
        { question: "What Banks Use XRP?", answer: "Financial institutions using XRP through RippleNet and On-Demand Liquidity.", slug: "what-banks-use-xrp" },
        { question: "Will XRP Reach $10?", answer: "Market cap analysis and what analysts project for XRP's price.", slug: "will-xrp-reach-10-dollars" },
      ]}
      sources={[
        { name: "SEC.gov — SEC v. Ripple Labs Complaint", url: "https://www.sec.gov/litigation/complaints/2020/comp-pr2020-338.pdf" },
        { name: "Court Ruling — Torres Opinion (July 2023)", url: "https://www.nysd.uscourts.gov" },
        { name: "Ripple.com — SEC Lawsuit Updates", url: "https://ripple.com/insights/the-sec-s-attack-on-crypto-in-the-united-states" },
        { name: "CoinDesk — XRP Ruling Analysis", url: "https://www.coindesk.com/policy/2023/07/13/ripple-labs-wins-ruling-in-sec-case/" },
      ]}
      faqSchema={[
        { question: "Is XRP a security?", answer: "No. A U.S. federal court ruled in July 2023 that programmatic sales of XRP on public exchanges do not constitute securities transactions. XRP itself, as a digital token, is not a security." },
        { question: "What was the SEC v. Ripple ruling?", answer: "Judge Analisa Torres ruled that while Ripple's direct institutional sales of XRP met the Howey test criteria, programmatic sales on exchanges did not. This was a landmark decision for the crypto industry." },
        { question: "Can I legally buy XRP in the United States?", answer: "Yes. Following the 2023 court ruling, XRP is available on major U.S. exchanges including Coinbase, Kraken, and others. It is not classified as a security for exchange-based purchases." },
      ]}
    />
  );
}

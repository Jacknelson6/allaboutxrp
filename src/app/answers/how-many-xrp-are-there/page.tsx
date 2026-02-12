import { Metadata } from "next";
import Link from "next/link";
import AnswerPageLayout from "../AnswerPageLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How Many XRP Are There?",
  description: "How many XRP are there? 100 billion XRP were created at genesis — no more can ever be minted. Approximately 57 billion are in circulation, with the rest in Ripple's escrow.",
  openGraph: {
    title: "How Many XRP Are There? Supply & Tokenomics | AllAboutXRP",
    description: "XRP's total supply, circulating supply, escrow mechanics, and deflationary burn mechanism explained.",
    url: "https://allaboutxrp.com/answers/how-many-xrp-are-there",
    type: "article",
  },
  alternates: { canonical: "https://allaboutxrp.com/answers/how-many-xrp-are-there" },
};

export default function Page() {
  return (
    <AnswerPageLayout
      title="How Many XRP Are There?"
      slug="how-many-xrp-are-there"
      directAnswer="Exactly 100 billion XRP, the native token of the XRP Ledger, were created at the ledger's genesis in 2012 — and no more can ever be minted. As of early 2026, approximately 57 billion XRP are in circulation. The remaining tokens are held in Ripple's cryptographically secured escrow, which releases up to 1 billion XRP per month. Each transaction burns a small amount of XRP as a fee, making the total supply slightly deflationary over time."
      shortAnswer={
        <p className="text-gray-300 leading-relaxed">
          Here&apos;s what you need to know:{" "}
          <Link href="/learn/what-is-xrp" className="text-[#0085FF] hover:underline">XRP, the native token of the XRP Ledger</Link>,
          has a hard-capped supply of 100 billion tokens. Unlike Bitcoin, which is still being mined (and won&apos;t finish until ~2140), all XRP was created at once when the{" "}
          <Link href="/learn/history" className="text-[#0085FF] hover:underline">XRP Ledger launched in 2012</Link>.
          Of the 100 billion, approximately 57 billion are in public circulation. Ripple holds the rest in an{" "}
          <Link href="/learn/escrow" className="text-[#0085FF] hover:underline">on-ledger escrow</Link>{" "}
          system that releases up to 1 billion per month — though most is typically returned to escrow. The supply is slightly deflationary because every transaction burns a tiny fee that is permanently destroyed.
        </p>
      }
      fullExplanation={
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <h3 className="text-xl font-semibold text-white">The Genesis Supply</h3>
          <p>
            When the XRP Ledger was created in 2012 by Jed McCaleb, Arthur Britto, and David Schwartz, exactly 100 billion XRP were generated in the genesis ledger. This was a deliberate design choice — by creating the entire supply upfront, the XRP Ledger avoids the need for mining or staking rewards, enabling faster and more energy-efficient consensus. The code makes it impossible to create additional XRP beyond this original supply.
          </p>
          <h3 className="text-xl font-semibold text-white">Initial Distribution</h3>
          <p>
            The original 100 billion XRP were distributed as follows: 80 billion were given to the company that became Ripple Labs to fund development and promote adoption. The three co-founders received 20 billion collectively — Jed McCaleb received 9.5 billion, Chris Larsen received 5.19 billion, and Arthur Britto received an undisclosed portion. McCaleb&apos;s holdings have been largely distributed through a structured settlement agreement that concluded in 2023.
          </p>
          <h3 className="text-xl font-semibold text-white">The Escrow System</h3>
          <p>
            In December 2017, Ripple placed 55 billion XRP into a series of cryptographically secured escrow contracts on the XRP Ledger. Each month, up to 1 billion XRP is released from escrow. Any unused portion is returned to a new escrow contract at the back of the queue. This mechanism was designed to provide transparency and predictability around Ripple&apos;s XRP sales, ensuring the market knows the maximum amount that could enter circulation in any given month. In practice, Ripple typically uses only a fraction of the released amount.
          </p>
          <h3 className="text-xl font-semibold text-white">Circulating vs. Total Supply</h3>
          <p>
            As of early 2026, approximately 57 billion XRP are in public circulation — held by exchanges, individual wallets, and institutional accounts. The distinction between circulating and total supply matters for market cap calculations. XRP&apos;s &quot;circulating market cap&quot; is based on the ~57 billion in circulation, while the &quot;fully diluted market cap&quot; uses the full 100 billion. Investors typically focus on circulating market cap for valuation purposes.
          </p>
          <h3 className="text-xl font-semibold text-white">The Deflationary Burn</h3>
          <p>
            Every XRP transaction requires a minimum fee of 0.00001 XRP (10 drops). This fee is not paid to validators or any other party — it is permanently burned, reducing the total supply. Since the XRP Ledger&apos;s launch, millions of XRP have been destroyed through this mechanism. While the burn rate is small relative to the total supply, it means XRP, the native token of the XRP Ledger, is technically deflationary — the total supply can only decrease over time, never increase.
          </p>
          <h3 className="text-xl font-semibold text-white">Supply Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 pr-4 text-white">Asset</th>
                  <th className="text-left py-2 pr-4 text-white">Max Supply</th>
                  <th className="text-left py-2 pr-4 text-white">Circulating</th>
                  <th className="text-left py-2 text-white">Model</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5"><td className="py-2 pr-4 text-[#0085FF] font-semibold">XRP</td><td className="py-2 pr-4">100B (fixed)</td><td className="py-2 pr-4">~57B</td><td className="py-2">Deflationary</td></tr>
                <tr className="border-b border-white/5"><td className="py-2 pr-4">Bitcoin</td><td className="py-2 pr-4">21M</td><td className="py-2 pr-4">~19.8M</td><td className="py-2">Inflationary until 2140</td></tr>
                <tr className="border-b border-white/5"><td className="py-2 pr-4">Ethereum</td><td className="py-2 pr-4">No cap</td><td className="py-2 pr-4">~120M</td><td className="py-2">Variable (EIP-1559)</td></tr>
                <tr><td className="py-2 pr-4">Solana</td><td className="py-2 pr-4">No cap</td><td className="py-2 pr-4">~440M</td><td className="py-2">Inflationary (staking)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      }
      whatThisMeans={
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Understanding XRP&apos;s supply dynamics is crucial for evaluating its investment case. The fixed, deflationary supply means that as demand grows (through ODL adoption, new use cases, and market interest), the price mechanism is straightforward: more demand against a fixed or shrinking supply tends to push prices higher. The escrow system provides transparency — you can track releases on the{" "}
            <Link href="/learn/escrow" className="text-[#0085FF] hover:underline">escrow page</Link>.
          </p>
          <p>
            For a complete understanding of XRP&apos;s design, explore{" "}
            <Link href="/learn/what-is-xrp" className="text-[#0085FF] hover:underline">what XRP is</Link>{" "}
            and check{" "}
            <Link href="/holders" className="text-[#0085FF] hover:underline">holder distribution data</Link>.
          </p>
        </div>
      }
      relatedQuestions={[
        { question: "Can XRP Be Mined?", answer: "No — all 100 billion XRP were created at genesis. Mining is not possible on the XRP Ledger.", slug: "can-xrp-be-mined" },
        { question: "Is XRP a Good Investment in 2026?", answer: "How XRP's fixed supply and utility factor into its investment case.", slug: "is-xrp-a-good-investment" },
        { question: "Will XRP Reach $10?", answer: "Market cap implications of a $10 XRP based on circulating and total supply.", slug: "will-xrp-reach-10-dollars" },
        { question: "How Fast Is XRP?", answer: "XRP settles in 3-5 seconds — each transaction burning a tiny amount of supply.", slug: "how-fast-is-xrp" },
      ]}
      sources={[
        { name: "XRP Ledger — Genesis Ledger", url: "https://xrpl.org" },
        { name: "Ripple.com — XRP Market Performance", url: "https://ripple.com/insights/xrp-markets-report" },
        { name: "CoinGecko — XRP Supply Data", url: "https://www.coingecko.com/en/coins/xrp" },
        { name: "XRP Ledger — Escrow Documentation", url: "https://xrpl.org/escrow.html" },
      ]}
      faqSchema={[
        { question: "How many XRP are there?", answer: "100 billion XRP were created at the XRP Ledger's genesis in 2012. No more can ever be minted. Approximately 57 billion are in circulation as of early 2026, with the rest in Ripple's escrow." },
        { question: "Can more XRP be created?", answer: "No. The XRP Ledger's code makes it impossible to create additional XRP beyond the original 100 billion. The supply is fixed and actually decreasing slightly due to transaction fee burns." },
        { question: "What is XRP's escrow?", answer: "Ripple placed 55 billion XRP into cryptographically secured escrow contracts in 2017. Up to 1 billion XRP is released per month, with unused portions returned to escrow. This provides supply transparency and predictability." },
      ]}
    />
  );
}

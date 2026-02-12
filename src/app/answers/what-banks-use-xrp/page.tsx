import { Metadata } from "next";
import Link from "next/link";
import AnswerPageLayout from "../AnswerPageLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "What Banks Use XRP?",
  description: "What banks use XRP? Over 300 financial institutions use RippleNet, with many leveraging XRP through On-Demand Liquidity for instant cross-border settlement.",
  openGraph: {
    title: "What Banks Use XRP? Financial Institution Partners | AllAboutXRP",
    description: "Banks and financial institutions using XRP for cross-border payments through RippleNet and On-Demand Liquidity.",
    url: "https://allaboutxrp.com/answers/what-banks-use-xrp",
    type: "article",
  },
  alternates: { canonical: "https://allaboutxrp.com/answers/what-banks-use-xrp" },
};

export default function Page() {
  return (
    <AnswerPageLayout
      title="What Banks Use XRP?"
      slug="what-banks-use-xrp"
      directAnswer="Over 300 financial institutions across 55+ countries use RippleNet for cross-border payments, and a growing number utilize XRP, the native token of the XRP Ledger, through Ripple's On-Demand Liquidity (ODL) product. Notable partners include SBI Holdings (Japan), Tranglo (Southeast Asia), SBI Remit, Banco Rendimento (Brazil), and various money transfer operators. While not all RippleNet members use XRP directly, ODL adoption — which specifically uses XRP as a bridge currency — has grown significantly since 2020."
      shortAnswer={
        <p className="text-gray-300 leading-relaxed">
          The short answer is that hundreds of financial institutions are connected to{" "}
          <Link href="/learn/partnerships" className="text-[#0085FF] hover:underline">RippleNet</Link>,
          Ripple&apos;s global payment network. An important distinction exists between banks that use RippleNet for messaging and settlement (similar to an upgraded SWIFT experience) and those that use{" "}
          <Link href="/learn/what-is-xrp" className="text-[#0085FF] hover:underline">XRP, the native token of the XRP Ledger</Link>,
          through On-Demand Liquidity (ODL). ODL specifically uses XRP as a bridge currency to provide instant liquidity for cross-border transactions, eliminating the need for pre-funded nostro accounts. As of 2026, ODL corridors are active across Asia-Pacific, Latin America, Europe, the Middle East, and Africa.
        </p>
      }
      fullExplanation={
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <h3 className="text-xl font-semibold text-white">RippleNet vs. On-Demand Liquidity (ODL)</h3>
          <p>
            It&apos;s important to understand two layers of Ripple&apos;s network. RippleNet is the broader payment network that connects banks and payment providers for cross-border transactions. Not all RippleNet members use XRP — some use Ripple&apos;s messaging and settlement technology without the XRP liquidity layer. ODL is the product that specifically uses XRP, the native token of the XRP Ledger, as a bridge currency. When a bank uses ODL, XRP is purchased in the source country, transferred in seconds, and sold for the destination currency — all in real time.
          </p>
          <h3 className="text-xl font-semibold text-white">Key Financial Institutions Using XRP/ODL</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>SBI Holdings (Japan)</strong> — Ripple&apos;s largest strategic partner in Asia. SBI Remit uses ODL for Japan-to-Southeast Asia corridors.</li>
            <li><strong>Tranglo (Southeast Asia)</strong> — Ripple acquired a 40% stake. Major ODL partner for APAC corridors.</li>
            <li><strong>Banco Rendimento (Brazil)</strong> — Uses ODL for Brazil-based cross-border payments.</li>
            <li><strong>Novatti Group (Australia)</strong> — Uses ODL for Australia-to-Southeast Asia payments.</li>
            <li><strong>Azimo (Europe)</strong> — Digital remittance company using ODL for Philippines corridors.</li>
            <li><strong>FlashFX / Flash Payments (Australia)</strong> — Early ODL adopter for Australia corridors.</li>
            <li><strong>SBI VC Trade (Japan)</strong> — Crypto exchange and financial services utilizing XRP.</li>
            <li><strong>Cuallix (Mexico)</strong> — First financial institution to use ODL for US-Mexico corridor.</li>
          </ul>
          <h3 className="text-xl font-semibold text-white">Geographic Expansion</h3>
          <p>
            Ripple has strategically expanded ODL corridors to cover major remittance routes. Active corridors include: US–Mexico, Japan–Philippines, Japan–Thailand, Australia–Southeast Asia, Brazil–various, Europe–Philippines, UAE–various, and more. By 2026, Ripple has obtained money transmitter licenses in most U.S. states and regulatory approvals in Singapore, UAE, and other key jurisdictions.
          </p>
          <h3 className="text-xl font-semibold text-white">Why Banks Choose XRP</h3>
          <p>
            Traditional cross-border payments require banks to maintain pre-funded accounts (nostro/vostro) in destination currencies — tying up trillions of dollars globally. XRP, the native token of the XRP Ledger, eliminates this need by serving as a universal bridge currency that settles in 3–5 seconds. This frees up capital, reduces costs by up to 60%, and enables 24/7 settlement without banking hour restrictions.
          </p>
          <h3 className="text-xl font-semibold text-white">RLUSD and Institutional Expansion</h3>
          <p>
            The launch of RLUSD, Ripple&apos;s USD-backed stablecoin on the XRP Ledger, adds another tool for institutional users. RLUSD complements XRP by providing a stable-value asset for institutions that need dollar-denominated settlement. Together, XRP and RLUSD create a comprehensive liquidity solution on the XRP Ledger for global payments.
          </p>
        </div>
      }
      whatThisMeans={
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            The growing list of financial institutions using XRP, the native token of the XRP Ledger, through ODL is one of the strongest real-world adoption signals in the crypto industry. Unlike many digital assets that rely primarily on speculative trading volume, XRP has genuine utility demand from institutional users solving a real problem — cross-border payments.
          </p>
          <p>
            As more banks and payment providers adopt ODL, demand for XRP as a liquidity tool increases. Learn more about{" "}
            <Link href="/learn/partnerships" className="text-[#0085FF] hover:underline">Ripple&apos;s partnerships</Link>,
            explore{" "}
            <Link href="/learn/rlusd" className="text-[#0085FF] hover:underline">RLUSD</Link>,
            and check{" "}
            <Link href="/live" className="text-[#0085FF] hover:underline">live XRP transaction data</Link>.
          </p>
        </div>
      }
      relatedQuestions={[
        { question: "How Fast Is XRP?", answer: "XRP settles in 3-5 seconds — the speed that makes it practical for banking use.", slug: "how-fast-is-xrp" },
        { question: "Is XRP a Good Investment in 2026?", answer: "How institutional adoption factors into XRP's investment case.", slug: "is-xrp-a-good-investment" },
        { question: "Will XRP Reach $10?", answer: "What growing bank adoption could mean for XRP's long-term price.", slug: "will-xrp-reach-10-dollars" },
        { question: "Is XRP a Security?", answer: "The legal clarity that enables banks to use XRP with confidence.", slug: "is-xrp-a-security" },
      ]}
      sources={[
        { name: "Ripple.com — Customer Stories", url: "https://ripple.com/customers" },
        { name: "Ripple.com — On-Demand Liquidity", url: "https://ripple.com/solutions/crypto-liquidity" },
        { name: "SBI Holdings — Ripple Partnership", url: "https://www.sbigroup.co.jp/english/" },
        { name: "Ripple.com — RLUSD", url: "https://ripple.com/solutions/stablecoin" },
      ]}
      faqSchema={[
        { question: "What banks use XRP?", answer: "Over 300 financial institutions use RippleNet, with key ODL partners including SBI Holdings, Tranglo, Banco Rendimento, Novatti Group, and Cuallix directly using XRP as a bridge currency for cross-border payments." },
        { question: "How do banks use XRP?", answer: "Banks use XRP through Ripple's On-Demand Liquidity (ODL) product. XRP serves as a bridge currency — purchased in the source country, transferred in seconds via the XRP Ledger, and sold for the destination currency, eliminating the need for pre-funded accounts." },
        { question: "Does every RippleNet member use XRP?", answer: "No. RippleNet includes both messaging/settlement services and On-Demand Liquidity. Only ODL specifically uses XRP as a bridge currency. However, ODL adoption has grown significantly and continues to expand globally." },
      ]}
    />
  );
}

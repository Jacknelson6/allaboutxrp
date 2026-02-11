import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, FAQAccordion, IconList,
} from "@/components/learn/LearnPageShell";

export const metadata: Metadata = {
  title: "Ripple Partnerships: Complete XRP Partners List 2026",
  description:
    "Complete list of Ripple partnerships — banks, payment providers, and institutions using XRP and RippleNet. Updated February 2026.",
  openGraph: {
    title: "Ripple Partnerships: Full XRP Partners List | AllAboutXRP",
    description: "Every Ripple partnership — from SBI Holdings and Mastercard to central banks. Complete list of banks and institutions using XRP.",
    url: "https://allaboutxrp.com/learn/partnerships",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple Partnerships List | AllAboutXRP",
    description: "Complete list of banks, payment providers, and institutions partnered with Ripple and using XRP.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/partnerships" },
};

const schemas = [
  buildArticleSchema({
    headline: "Ripple Partnerships: Complete XRP Partners List 2026",
    description: "A comprehensive list of Ripple's partnerships with banks, payment providers, and financial institutions worldwide.",
    url: "https://allaboutxrp.com/learn/partnerships",
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Partnerships" },
  ]),
  buildFAQSchema([
    { question: "What banks use Ripple and XRP?", answer: "Major banks include SBI Holdings, Banco Santander, BBVA, Standard Chartered, MUFG, Citibank, BNP Paribas, and many others across 55+ countries." },
    { question: "How many partners does Ripple have?", answer: "Ripple has hundreds of partners across 55+ countries. Over $90 billion in global payments processed." },
    { question: "Does Mastercard use XRP?", answer: "Yes. Ripple partnered with Mastercard and WebBank to use RLUSD on the XRP Ledger for settling fiat card transactions." },
  ]),
];

const faqItems = [
  { q: "What banks use Ripple and XRP?", a: "Major banks include SBI Holdings, Banco Santander, BBVA, Standard Chartered, MUFG, Citibank, BNP Paribas, Société Générale, RAKBANK, Al Rajhi Bank, Siam Commercial Bank, and many more across 55+ countries." },
  { q: "Does Mastercard use XRP?", a: "Yes. In November 2025, Ripple partnered with Mastercard and WebBank to use RLUSD on the XRP Ledger for settling fiat card transactions — one of the first regulated bank uses of stablecoins on a public blockchain." },
  { q: "How many partners does Ripple have?", a: "Ripple has hundreds of partners across 55+ countries, including banks, payment providers, exchanges, and financial institutions. The network has processed over $90 billion in payments." },
  { q: "Is Ripple working with central banks?", a: "Yes. Ripple is engaged with over 20 central banks on CBDC pilot programs, including Palau, Bhutan, Colombia, and Montenegro." },
];

interface Partner {
  name: string;
  type: string;
  region: string;
  description: string;
  highlight?: boolean;
}

const partnersByCategory: { category: string; id: string; description: string; partners: Partner[] }[] = [
  {
    category: "Strategic & Major Partners",
    id: "strategic",
    description: "Key strategic relationships driving the Ripple ecosystem",
    partners: [
      { name: "SBI Holdings", type: "Bank/Financial Group", region: "Japan", description: "Japan's largest financial conglomerate. Co-created SBI Ripple Asia in 2016. Operates SBI VC Trade and drives XRPL adoption across Asia.", highlight: true },
      { name: "Mastercard", type: "Payment Network", region: "Global", description: "Partnered in 2025 with WebBank and Gemini to settle fiat card transactions using RLUSD on the XRP Ledger.", highlight: true },
      { name: "BNY Mellon", type: "Custodian Bank", region: "USA", description: "Selected as custodian for RLUSD stablecoin reserves, providing institutional credibility and trust.", highlight: true },
      { name: "MoneyGram", type: "Remittance", region: "Global", description: "Strategic ODL partnership from 2019-2021 for cross-border payments. Paved the way for institutional adoption.", highlight: false },
    ],
  },
  {
    category: "Banks & Financial Institutions",
    id: "banks",
    description: "Major banks connected to RippleNet and the XRP Ledger ecosystem",
    partners: [
      { name: "Banco Santander", type: "Bank", region: "Spain/Global", description: "One of the world's largest banks. Used RippleNet for its One Pay FX cross-border payment app." },
      { name: "Standard Chartered", type: "Bank", region: "UK/Global", description: "Major international bank using Ripple technology for cross-border payments." },
      { name: "BBVA", type: "Bank", region: "Spain", description: "Uses Ripple Custody (Metaco Harmonize) for digital asset custody and is a Ripple Payments client." },
      { name: "MUFG (Mitsubishi UFJ)", type: "Bank", region: "Japan", description: "Japan's largest bank and a RippleNet member." },
      { name: "Citibank", type: "Bank", region: "USA/Global", description: "Uses Ripple Custody (Metaco Harmonize) for institutional digital asset custody." },
      { name: "BNP Paribas", type: "Bank", region: "France", description: "Europe's largest bank by assets, uses Ripple Custody (Metaco)." },
      { name: "Société Générale", type: "Bank", region: "France", description: "Uses both Ripple Custody and Palisade wallet infrastructure." },
      { name: "RAKBANK", type: "Bank", region: "UAE", description: "Uses Ripple Payments for cross-border remittances from the UAE." },
      { name: "Al Rajhi Bank", type: "Bank", region: "Saudi Arabia", description: "The world's largest Islamic bank, connected to RippleNet." },
      { name: "Siam Commercial Bank", type: "Bank", region: "Thailand", description: "Thailand's oldest bank, one of the earliest RippleNet adopters." },
      { name: "National Australia Bank", type: "Bank", region: "Australia", description: "One of Australia's Big Four banks." },
      { name: "Westpac", type: "Bank", region: "Australia", description: "Australia's second-largest bank, connected to RippleNet." },
      { name: "Akbank", type: "Bank", region: "Turkey", description: "Turkey's leading private bank." },
      { name: "Axis Bank", type: "Bank", region: "India", description: "India's third-largest private bank." },
      { name: "DBS", type: "Bank", region: "Singapore", description: "Southeast Asia's largest bank." },
      { name: "UBS", type: "Bank", region: "Switzerland", description: "Global banking giant connected to Ripple's enterprise solutions." },
      { name: "Mizuho Financial Group", type: "Bank", region: "Japan", description: "One of Japan's three mega-banks." },
    ],
  },
  {
    category: "Payment Providers & Fintechs",
    id: "payments",
    description: "Companies using Ripple Payments and ODL for cross-border transfers",
    partners: [
      { name: "Tranglo", type: "Payments", region: "Southeast Asia", description: "40% owned by Ripple. Processes ODL-powered payments across 25 corridors with $970M+ in volume.", highlight: true },
      { name: "TransferGo", type: "Remittance", region: "Europe", description: "European remittance provider using ODL for instant cross-border transfers." },
      { name: "Currencies Direct", type: "FX/Payments", region: "UK", description: "UK-based foreign exchange and payment provider on RippleNet." },
      { name: "dLocal", type: "Payments", region: "Latin America", description: "Latin American payment platform using Ripple for cross-border settlement." },
      { name: "AirWallex", type: "Payments", region: "Australia/Global", description: "Global payments platform leveraging Ripple's network." },
      { name: "Bexs Banco", type: "Payments", region: "Brazil", description: "Brazilian payment institution using ODL for Brazil corridor payments." },
      { name: "Cuallix", type: "Payments", region: "Mexico", description: "First institution to use xRapid (now ODL) commercially for US-Mexico remittances." },
      { name: "American Express", type: "Payments", region: "USA/Global", description: "Explored RippleNet for B2B cross-border payments between US and UK." },
    ],
  },
  {
    category: "Tokenization & Digital Assets",
    id: "tokenization",
    description: "Partners building tokenized asset infrastructure on the XRP Ledger",
    partners: [
      { name: "Archax", type: "Digital Exchange", region: "UK", description: "FCA-regulated exchange tokenizing assets including BlackRock's money market fund on the XRPL." },
      { name: "Meld Gold", type: "Tokenization", region: "Australia", description: "Tokenizing gold and precious metals on the XRP Ledger." },
      { name: "Zoniqx", type: "Tokenization", region: "USA", description: "Tokenizing treasury bills and real-world assets on the XRPL." },
      { name: "Dubai Land Dept + Ctrl Alt", type: "Real Estate", region: "UAE", description: "Tokenizing real estate on the XRPL for fractional ownership (July 2025)." },
    ],
  },
  {
    category: "Central Bank Partnerships",
    id: "cbdc",
    description: "Ripple is working with 20+ central banks on CBDC pilot programs",
    partners: [
      { name: "Republic of Palau", type: "Government", region: "Pacific", description: "National stablecoin (PSC) built on the XRPL, launched as a pilot in 2023." },
      { name: "Bhutan (Royal Monetary Authority)", type: "Central Bank", region: "Asia", description: "Piloting a retail CBDC on the XRP Ledger private sidechain." },
      { name: "Colombia (Banco de la República)", type: "Central Bank", region: "South America", description: "Exploring CBDC solutions using Ripple's CBDC platform." },
      { name: "Montenegro", type: "Government", region: "Europe", description: "Working with Ripple on digital currency infrastructure." },
    ],
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-12">
        <LearnHero
          title="Ripple"
          titleAccent="Partnerships"
          subtitle="From SBI Holdings to Mastercard and BNY Mellon — the complete list of banks, payment providers, and institutions in the Ripple network across 55+ countries."
          breadcrumbLabel="Partnerships"
        >
          <div className="mt-5"><AuthorByline date="2026-02-10" /></div>
        </LearnHero>

        <SectionNav items={[
          { id: "how-partners-use", label: "How Partners Use XRP" },
          { id: "strategic", label: "Strategic Partners" },
          { id: "banks", label: "Banks" },
          { id: "payments", label: "Payment Providers" },
          { id: "tokenization", label: "Tokenization" },
          { id: "cbdc", label: "CBDC Pilots" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />
        <div className="mt-6"><Disclaimer /></div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Countries" value="55+" delay={0} />
          <StatPill label="Payments Processed" value="$90B+" delay={0.06} />
          <StatPill label="CBDC Pilots" value="20+" delay={0.12} />
          <StatPill label="Acquisition Spend" value="$3.7B+" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          {/* HOW PARTNERS USE XRP */}
          <RevealSection id="how-partners-use">
            <h2 className="text-2xl font-bold text-text-primary">How Do Partners Use XRP and Ripple Technology?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link> offers several products that partners can adopt, each leveraging the <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> ecosystem:
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Ripple Payments (ODL)", desc: "Cross-border payments using XRP as bridge currency — the core product driving XRP transaction volume" },
                { title: "Ripple Custody (Metaco)", desc: "Institutional-grade digital asset custody for banks holding XRP and other assets" },
                { title: "Ripple Prime (Hidden Road)", desc: "Prime brokerage with post-trade settlement migrating to the XRP Ledger" },
                { title: "RLUSD Stablecoin", desc: "USD stablecoin on the XRPL, used for settlement and as collateral" },
                { title: "CBDC Platform", desc: "Private XRPL sidechains for central bank digital currency pilots" },
                { title: "Tokenization Infrastructure", desc: "Partners building real-world asset tokens on the XRPL" },
              ]} />
            </div>
          </RevealSection>

          {/* PARTNER CATEGORIES */}
          {partnersByCategory.map((cat, catIdx) => (
            <RevealSection key={cat.id} id={cat.id} delay={0.05}>
              <h2 className="text-2xl font-bold text-text-primary">{cat.category}</h2>
              <p className="mt-2 text-text-secondary">{cat.description}</p>
              <div className="mt-6 space-y-3">
                {cat.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className={`rounded-xl border p-4  transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,180,255,0.04)] ${
                      partner.highlight
                        ? "border-xrp-accent/30 bg-gradient-to-r from-xrp-accent/5 to-transparent"
                        : "border-white/[0.06]/60 bg-black hover:border-xrp-accent/20"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-text-primary">{partner.name}</h3>
                      <span className="rounded-full border border-white/[0.06] bg-[#111113] px-2 py-0.5 text-[10px] font-semibold text-text-secondary">{partner.type}</span>
                      <span className="text-xs text-text-secondary">{partner.region}</span>
                    </div>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">{partner.description}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          ))}

          {/* ACQUISITIONS */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Acquisitions Strengthen the Network</h2>
            <div className="mt-4">
              <HighlightBox title="$3.7 Billion in Acquisitions" variant="accent" large>
                <p>Beyond traditional partnerships, Ripple has spent $3.7 billion acquiring companies that expand its capabilities — from <strong className="text-text-primary">Hidden Road</strong> (prime brokerage) to <strong className="text-text-primary">GTreasury</strong> (enterprise treasury) to <strong className="text-text-primary">Palisade</strong> (wallet infrastructure). Each acquisition brings existing client relationships into the Ripple ecosystem.</p>
                <p className="mt-2">Read the full analysis: <Link href="/people" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s Acquisition Strategy →</Link></p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* FAQ */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* CONTINUE LEARNING */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company explained" },
              { href: "/acquisitions", label: "Acquisitions", desc: "$3.7B strategy deep dive" },
              { href: "/learn/leadership", label: "Leadership Team", desc: "Who runs Ripple" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete XRP guide" },
              { href: "/escrow", label: "Escrow Explained", desc: "55B XRP lockup system" },
              { href: "/learn/get-started", label: "How to Buy XRP", desc: "Start your journey" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="The Network Effect"
          description="Every new partner increases the value for all existing participants. With 55+ countries and $90B+ processed, the network effect is accelerating."
          primaryHref="/learn/what-is-xrp"
          primaryLabel="Understand XRP →"
          secondaryHref="/learn/get-started"
          secondaryLabel="How to Buy XRP"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 10, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple official announcements, BusinessWire, CoinDesk, Financial Times, 21Shares research.</em>
        </p>
      </div>
    </>
  );
}

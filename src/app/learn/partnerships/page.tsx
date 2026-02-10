import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";

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
    { question: "What banks use Ripple and XRP?", answer: "Major banks include SBI Holdings (Japan), Banco Santander (Spain), BBVA (Spain), Standard Chartered, MUFG (Japan), National Australia Bank, RAKBANK (UAE), and many others across 55+ countries." },
    { question: "How many partners does Ripple have?", answer: "Ripple has hundreds of partners across 55+ countries, including banks, payment providers, exchanges, and financial institutions. Over $90 billion in global payments processed." },
    { question: "Does Mastercard use XRP?", answer: "Yes. In November 2025, Ripple partnered with Mastercard and WebBank to use RLUSD on the XRP Ledger for settling fiat card transactions — one of the first regulated bank uses of stablecoins on a public blockchain." },
  ]),
];

interface Partner {
  name: string;
  type: string;
  region: string;
  description: string;
  highlight?: boolean;
}

const partnersByCategory: { category: string; description: string; partners: Partner[] }[] = [
  {
    category: "Strategic & Major Partners",
    description: "Key strategic relationships driving the Ripple ecosystem",
    partners: [
      { name: "SBI Holdings", type: "Bank/Financial Group", region: "Japan", description: "Japan's largest financial conglomerate. Co-created SBI Ripple Asia in 2016. Operates the SBI VC Trade exchange and drives XRPL adoption across Asia.", highlight: true },
      { name: "Mastercard", type: "Payment Network", region: "Global", description: "Partnered in 2025 with WebBank and Gemini to settle fiat card transactions using RLUSD on the XRP Ledger.", highlight: true },
      { name: "BNY Mellon", type: "Custodian Bank", region: "USA", description: "Selected as custodian for RLUSD stablecoin reserves, providing institutional credibility and trust.", highlight: true },
      { name: "MoneyGram", type: "Remittance", region: "Global", description: "Strategic partnership from 2019-2021 using ODL for cross-border payments. Suspended during SEC lawsuit period but paved the way for institutional adoption.", highlight: false },
    ],
  },
  {
    category: "Banks & Financial Institutions",
    description: "Major banks connected to RippleNet and the XRP Ledger ecosystem",
    partners: [
      { name: "Banco Santander", type: "Bank", region: "Spain/Global", description: "One of the world's largest banks. Used RippleNet for its One Pay FX cross-border payment app." },
      { name: "Standard Chartered", type: "Bank", region: "UK/Global", description: "Major international bank using Ripple technology for cross-border payments." },
      { name: "BBVA", type: "Bank", region: "Spain", description: "Uses Ripple Custody (Metaco Harmonize) for digital asset custody and is a Ripple Payments client." },
      { name: "MUFG (Mitsubishi UFJ)", type: "Bank", region: "Japan", description: "Japan's largest bank and a RippleNet member, exploring XRPL-based settlement." },
      { name: "RAKBANK", type: "Bank", region: "UAE", description: "Uses Ripple Payments for cross-border remittances from the UAE." },
      { name: "Al Rajhi Bank", type: "Bank", region: "Saudi Arabia", description: "The world's largest Islamic bank, connected to RippleNet for international payments." },
      { name: "Siam Commercial Bank", type: "Bank", region: "Thailand", description: "Thailand's oldest bank, one of the earliest RippleNet adopters in Southeast Asia." },
      { name: "National Australia Bank", type: "Bank", region: "Australia", description: "One of Australia's Big Four banks, exploring Ripple technology for payments." },
      { name: "Westpac", type: "Bank", region: "Australia", description: "Australia's second-largest bank, connected to RippleNet." },
      { name: "Akbank", type: "Bank", region: "Turkey", description: "Turkey's leading private bank, using RippleNet for cross-border payments." },
      { name: "Axis Bank", type: "Bank", region: "India", description: "India's third-largest private bank, part of Ripple's payments network." },
      { name: "Bank of Indonesia", type: "Central Bank", region: "Indonesia", description: "Engaged with Ripple on payment infrastructure and potential CBDC exploration." },
      { name: "Mizuho Financial Group", type: "Bank", region: "Japan", description: "One of Japan's three mega-banks, connected to Ripple through SBI partnerships." },
      { name: "Citibank", type: "Bank", region: "USA/Global", description: "Uses Ripple Custody (Metaco Harmonize) for institutional digital asset custody." },
      { name: "BNP Paribas", type: "Bank", region: "France", description: "Europe's largest bank by assets, uses Ripple Custody (Metaco) for digital asset management." },
      { name: "Société Générale", type: "Bank", region: "France", description: "Major French bank using both Ripple Custody and Palisade wallet infrastructure." },
      { name: "DBS", type: "Bank", region: "Singapore", description: "Southeast Asia's largest bank, exploring XRPL and digital asset infrastructure." },
      { name: "UBS", type: "Bank", region: "Switzerland", description: "Global banking giant connected to Ripple's enterprise solutions." },
    ],
  },
  {
    category: "Payment Providers & Fintechs",
    description: "Companies using Ripple Payments and ODL for cross-border transfers",
    partners: [
      { name: "Tranglo", type: "Payments", region: "Southeast Asia", description: "40% owned by Ripple. Processes ODL-powered payments across 25 corridors in Southeast Asia with $970M+ in volume." },
      { name: "TransferGo", type: "Remittance", region: "Europe", description: "European remittance provider using Ripple's ODL for instant cross-border transfers." },
      { name: "Currencies Direct", type: "FX/Payments", region: "UK", description: "UK-based foreign exchange and payment provider on RippleNet." },
      { name: "dLocal", type: "Payments", region: "Latin America", description: "Latin American payment platform using Ripple for cross-border settlement." },
      { name: "AirWallex", type: "Payments", region: "Australia/Global", description: "Global payments platform leveraging Ripple's network for international transfers." },
      { name: "Bexs Banco", type: "Payments", region: "Brazil", description: "Brazilian payment institution using ODL for Brazil corridor payments." },
      { name: "Cuallix", type: "Payments", region: "Mexico", description: "First financial institution to use xRapid (now ODL) commercially for US-Mexico remittances." },
      { name: "American Express", type: "Payments", region: "USA/Global", description: "Explored RippleNet for B2B cross-border payments between the US and UK." },
    ],
  },
  {
    category: "Tokenization & Digital Assets",
    description: "Partners building tokenized asset infrastructure on the XRP Ledger",
    partners: [
      { name: "Archax", type: "Digital Exchange", region: "UK", description: "FCA-regulated digital securities exchange tokenizing assets including BlackRock's money market fund on the XRPL." },
      { name: "Meld Gold", type: "Tokenization", region: "Australia", description: "Tokenizing gold and precious metals on the XRP Ledger for instant settlement." },
      { name: "Zoniqx", type: "Tokenization", region: "USA", description: "Tokenizing treasury bills and real-world assets on the XRPL." },
      { name: "Dubai Land Department + Ctrl Alt", type: "Real Estate", region: "UAE", description: "Tokenizing real estate on the XRPL for fractional ownership and digital property deeds (July 2025)." },
    ],
  },
  {
    category: "Central Bank Partnerships",
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
      <div className="mx-auto max-w-4xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-xrp-accent transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/learn" className="hover:text-xrp-accent transition-colors">Learn</Link></li>
            <li>/</li>
            <li className="text-text-primary font-medium">Partnerships</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
          <span className="gradient-text">Ripple Partnerships</span>: The Complete List
        </h1>
        <div className="mt-4">
          <AuthorByline date="2026-02-10" />
        </div>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          <strong>Ripple partnerships</strong> span over 55 countries and include some of the world&apos;s largest banks, payment providers, and financial institutions. From SBI Holdings in Japan to Mastercard and BNY Mellon, Ripple has built one of the most extensive enterprise blockchain networks in the industry. Here&apos;s the complete <strong>XRP partnerships list</strong>.
        </p>

        <div className="mt-6"><Disclaimer /></div>

        {/* Key Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Countries", value: "55+" },
            { label: "Payments Processed", value: "$90B+" },
            { label: "CBDC Pilots", value: "20+" },
            { label: "Acquisition Spend", value: "$3.7B+" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-surface-border bg-surface-card/50 p-4 text-center backdrop-blur-sm">
              <div className="font-display text-xl font-bold text-xrp-accent">{stat.value}</div>
              <div className="mt-1 text-xs text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        <article className="cv-auto mt-12 space-y-12">
          {/* How Ripple Partners Use XRP */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">How Partners Use XRP and Ripple Technology</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple offers several products that partners can adopt, each leveraging the <Link href="/learn/what-is-xrp" className="text-xrp-accent">XRP</Link> ecosystem in different ways:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li><strong>Ripple Payments (ODL):</strong> Cross-border payments using XRP as a bridge currency — the core product driving XRP transaction volume</li>
              <li><strong>Ripple Custody (Metaco):</strong> Institutional-grade digital asset custody for banks holding XRP and other assets</li>
              <li><strong>Ripple Prime (Hidden Road):</strong> Prime brokerage with post-trade settlement migrating to the XRP Ledger</li>
              <li><strong>RLUSD:</strong> Ripple&apos;s USD stablecoin on the XRPL, used for settlement and as collateral</li>
              <li><strong>CBDC Platform:</strong> Private XRPL sidechains for central bank digital currency pilots</li>
            </ul>
          </section>

          {/* Partner Categories */}
          {partnersByCategory.map((cat) => (
            <section key={cat.category}>
              <h2 className="font-display text-2xl font-bold text-text-primary">{cat.category}</h2>
              <p className="mt-2 text-text-secondary">{cat.description}</p>
              <div className="mt-6 space-y-3">
                {cat.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className={`rounded-xl border p-4 backdrop-blur-sm ${
                      partner.highlight
                        ? "border-xrp-accent/30 bg-gradient-to-r from-xrp-accent/5 to-transparent"
                        : "border-surface-border bg-surface-card/50"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display font-semibold text-text-primary">{partner.name}</h3>
                      <span className="rounded-full border border-surface-border bg-surface-elevated px-2 py-0.5 text-[10px] font-semibold text-text-secondary">{partner.type}</span>
                      <span className="text-xs text-text-secondary">{partner.region}</span>
                    </div>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">{partner.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Acquisitions as Partnerships */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Acquisitions Strengthen the Network</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Beyond traditional partnerships, Ripple has spent $3.7 billion acquiring companies that expand its capabilities — from <strong>Hidden Road</strong> (prime brokerage) to <strong>GTreasury</strong> (enterprise treasury management) to <strong>Palisade</strong> (wallet infrastructure). Each acquisition brings existing client relationships into the Ripple ecosystem and creates new opportunities for XRP adoption.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Read the full analysis: <Link href="/acquisitions" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">Ripple&apos;s Acquisition Strategy →</Link>
            </p>
          </section>

          {/* FAQ */}
          <section className="rounded-2xl border border-surface-border bg-surface-card/30 p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-text-primary">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">What banks use Ripple and XRP?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Major banks include SBI Holdings, Banco Santander, BBVA, Standard Chartered, MUFG, Citibank, BNP Paribas, Société Générale, RAKBANK, Al Rajhi Bank, Siam Commercial Bank, and many more across 55+ countries.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Does Mastercard use XRP?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Yes. In November 2025, Ripple partnered with Mastercard and WebBank to use RLUSD on the XRP Ledger for settling fiat card transactions — one of the first regulated bank uses of stablecoins on a public blockchain.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">How many partners does Ripple have?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Ripple has hundreds of partners across 55+ countries, including banks, payment providers, exchanges, and financial institutions. The network has processed over $90 billion in payments.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Is Ripple working with central banks?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Yes. Ripple is engaged with over 20 central banks on CBDC pilot programs, including Palau, Bhutan, Colombia, and Montenegro. Ripple&apos;s CBDC platform uses private sidechains connected to the XRP Ledger.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Continue Learning</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company explained" },
                { href: "/acquisitions", label: "Acquisitions", desc: "$3.7B strategy deep dive" },
                { href: "/learn/leadership", label: "Leadership Team", desc: "Who runs Ripple" },
                { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete XRP guide" },
                { href: "/escrow", label: "Escrow Explained", desc: "55B XRP lockup system" },
                { href: "/learn/get-started", label: "How to Buy XRP", desc: "Start your journey" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card-glow flex flex-col rounded-xl border border-surface-border bg-surface-card/50 p-4 backdrop-blur-sm transition-colors hover:border-xrp-accent/30"
                >
                  <span className="font-display font-semibold text-text-primary">{link.label}</span>
                  <span className="mt-1 text-sm text-text-secondary">{link.desc}</span>
                </Link>
              ))}
            </div>
          </section>
        </article>

        <section className="mt-12 rounded-2xl border border-surface-border bg-gradient-to-br from-surface-card/50 to-xrp-accent/[0.02] p-8 text-center backdrop-blur-sm">
          <h2 className="font-display text-xl font-bold text-text-primary">The Network Effect</h2>
          <p className="mt-2 text-sm text-text-secondary max-w-2xl mx-auto">
            Every new partner added to Ripple&apos;s network increases the value for all existing participants. With 55+ countries and $90B+ processed, the network effect is accelerating.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/learn/what-is-xrp" className="rounded-lg bg-xrp-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-xrp-accent/90">
              Understand XRP →
            </Link>
            <Link href="/learn/get-started" className="rounded-lg border border-surface-border bg-surface-card px-5 py-2.5 text-sm font-semibold text-text-primary transition-all hover:bg-surface-elevated">
              How to Buy XRP
            </Link>
          </div>
        </section>

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 10, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple official announcements, BusinessWire, CoinDesk, Financial Times, 21Shares research, company press releases.</em>
        </p>
      </div>
    </>
  );
}

import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Is XRP Legal? XRP Legal Status by Country (2026) | AllAboutXRP",
  description: "Is XRP legal in your country? Complete breakdown of XRP's legal status across 50+ countries. Bans, restrictions, and full legality.",
  keywords: ["is XRP legal", "XRP legal status", "XRP banned countries", "XRP legal by country"],
  openGraph: {
    title: "Is XRP Legal? XRP Legal Status by Country (2026)",
    description: "Complete breakdown of XRP's legal status across 50+ countries. Bans, restrictions, and full legality.",
    url: "https://allaboutxrp.com/learn/xrp-legal-status-by-country",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Legal Status by Country (2026)",
    description: "Is XRP legal in your country? Status across 50+ countries — bans, restrictions, and full legality.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-legal-status-by-country" },
};

const schemas = [
  buildArticleSchema({
    headline: "Is XRP Legal? XRP Legal Status by Country (2026)",
    description: "Complete breakdown of XRP's legal status across 50+ countries.",
    url: "https://allaboutxrp.com/learn/xrp-legal-status-by-country",
    datePublished: "2026-02-15",
    dateModified: "2026-08-08",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Legal Status by Country" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-legal-status-by-country" }),
  buildFAQSchema([
    { question: "Is XRP legal?", answer: "Yes, in most countries. XRP is legal to buy, sell, and hold in the vast majority of countries worldwide, including the US, UK, EU, Japan, Australia, Canada, and most of Asia and South America. A small number of countries have banned all cryptocurrencies, which includes XRP." },
    { question: "Is XRP banned in any country?", answer: "XRP is not specifically banned anywhere, but it falls under general cryptocurrency bans in countries like China (trading ban), Algeria, Bangladesh, Egypt, Morocco, Nepal, and a few others that have blanket bans on crypto trading." },
    { question: "Is XRP a security?", answer: "In the US, Judge Torres ruled in July 2023 that XRP sales on exchanges are not securities transactions. This was a landmark ruling in the SEC v Ripple case. Other jurisdictions generally classify XRP as a virtual asset, cryptocurrency, or commodity — not a security." },
    { question: "Is XRP legal in the European Union?", answer: "Yes. XRP is fully legal across all 27 EU member states. The Markets in Crypto-Assets (MiCA) regulation provides a comprehensive framework for crypto assets. Exchanges must register and comply with MiCA requirements." },
    { question: "Where is XRP most popular?", answer: "XRP has the strongest adoption in Japan (via SBI Holdings partnership), South Korea, the United States, United Kingdom, and the Philippines (via remittance corridors). Japan's SBI Group has been Ripple's most active institutional partner." },
  ]),
];

const faqItems = [
  { q: "Is XRP legal?", a: "Yes, in most countries. XRP is legal in the US, UK, EU, Japan, Australia, Canada, and most of the world. Only countries with blanket crypto bans restrict XRP." },
  { q: "Is XRP banned anywhere?", a: "Not specifically. But general crypto bans in China (trading), Algeria, Bangladesh, Egypt, Morocco, and Nepal affect XRP along with all cryptocurrencies." },
  { q: "Is XRP a security?", a: "In the US, the court ruled XRP on exchanges is not a security (SEC v Ripple, 2023). Most other countries classify it as a virtual asset or commodity." },
  { q: "Is XRP legal in the EU?", a: "Yes. Fully legal across all 27 EU states under the MiCA regulatory framework." },
  { q: "Where is XRP most popular?", a: "Japan (#1 via SBI Holdings), South Korea, USA, UK, and the Philippines (remittance corridors)." },
];

export default function XRPLegalStatusPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Is XRP Legal?"
          titleAccent="XRP Legal Status by Country (2026)"
          subtitle="XRP is legal in the vast majority of countries worldwide. Following the SEC v Ripple ruling, regulatory clarity has never been better. Here's the complete breakdown of XRP's legal status across 50+ countries."
          breadcrumbLabel="XRP Legal Status by Country"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" modified="2026-08-08" />
            <LastUpdated date="August 8, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">There is no single worldwide legal status for XRP.</strong> Treatment can differ by activity, product, customer type, regulator, and date. The country table below is an editorial orientation tool, not a verified legal database or legal opinion. This page is temporarily excluded from search indexing while each jurisdiction is rechecked against current regulator records.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Countries Legal", value: "170+ countries" },
          { label: "Countries Restricted", value: "~10 (blanket crypto bans)" },
          { label: "XRP-Specific Ban", value: "None" },
          { label: "US Status", value: "Legal (not a security)" },
          { label: "EU Status", value: "Legal (MiCA regulated)" },
          { label: "Japan Status", value: "Legal (payment method)" },
          { label: "SEC Ruling", value: "July 2023" },
          { label: "Most XRP-Friendly", value: "Japan, UAE, Singapore" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "fully-legal", label: "Fully Legal" },
          { id: "regulated", label: "Regulated" },
          { id: "restricted", label: "Restricted" },
          { id: "banned", label: "Banned Countries" },
          { id: "sec-ruling", label: "SEC Ruling Impact" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Legal In" value="170+" delay={0} />
          <StatPill label="Banned In" value="~10" delay={0.06} />
          <StatPill label="XRP-Specific Ban" value="0" delay={0.12} />
          <StatPill label="SEC Clarity" value="✅" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">Global XRP Legal Status Overview</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP&apos;s legal standing improved dramatically after the <Link href="/learn/sec-vs-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">SEC v Ripple ruling</Link> in 2023. No country has ever specifically banned XRP — restrictions come only from countries that ban all cryptocurrency trading. Here&apos;s the full picture.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={3} items={[
                { title: "🟢 Fully Legal", desc: "Most countries: buy, sell, hold, trade freely with varying regulation" },
                { title: "🟡 Restricted", desc: "Some limitations: heavy taxation, partial bans, or limited exchange access" },
                { title: "🔴 Banned", desc: "Blanket crypto bans: all crypto including XRP prohibited" },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="fully-legal" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Countries Where XRP Is Fully Legal</h2>
            <div className="mt-6">
              <DataTable
                headers={["Country", "Status", "Classification", "Key Exchange", "Notes"]}
                rows={[
                  ["🇺🇸 United States", "✅ Legal", "Not a security", "Coinbase, Kraken", "SEC ruling 2023 clarified status"],
                  ["🇬🇧 United Kingdom", "✅ Legal", "Cryptoasset", "Bitstamp, Kraken", "FCA registration required"],
                  ["🇯🇵 Japan", "✅ Legal", "Payment method", "SBI VC Trade", "Most XRP-friendly nation"],
                  ["🇨🇦 Canada", "✅ Legal", "Commodity", "Kraken, Newton", "OSC-registered exchanges"],
                  ["🇦🇺 Australia", "✅ Legal", "CGT asset", "CoinSpot, Kraken", "AUSTRAC regulated"],
                  ["🇸🇬 Singapore", "✅ Legal", "Digital payment token", "Binance, Crypto.com", "MAS licensed"],
                  ["🇰🇷 South Korea", "✅ Legal", "Virtual asset", "Upbit, Bithumb", "Massive XRP community"],
                  ["🇦🇪 UAE", "✅ Legal", "Virtual asset", "Binance, Bybit", "VARA/FSRA regulated, very friendly"],
                  ["🇧🇷 Brazil", "✅ Legal", "Virtual asset", "Binance, Mercado", "Central Bank framework"],
                  ["🇲🇽 Mexico", "✅ Legal", "Virtual asset", "Bitso", "Major ODL corridor"],
                  ["🇨🇭 Switzerland", "✅ Legal", "Payment token", "SIX Exchange", "FINMA regulated, crypto-friendly"],
                  ["🇵🇭 Philippines", "✅ Legal", "Virtual currency", "Coins.ph", "BSP regulated, major remittance corridor"],
                  ["🇹🇭 Thailand", "✅ Legal", "Digital asset", "Bitkub", "SEC regulated"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="regulated" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">European Union: MiCA Regulation</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              All 27 EU member states regulate crypto under the <Link href="/learn/xrp-european-regulation" className="text-xrp-accent underline decoration-xrp-accent/30">Markets in Crypto-Assets (MiCA)</Link> framework. XRP is fully legal across the EU with clear rules for exchanges and token issuers.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["EU Country", "Status", "Key Exchange", "Notes"]}
                rows={[
                  ["🇩🇪 Germany", "✅ Legal", "Bitstamp, Kraken", "BaFin regulated, crypto-progressive"],
                  ["🇫🇷 France", "✅ Legal", "Binance, Coinhouse", "AMF registered"],
                  ["🇳🇱 Netherlands", "✅ Legal", "Bitvavo", "DNB registered"],
                  ["🇮🇪 Ireland", "✅ Legal", "Coinbase (EU HQ)", "CBI registered"],
                  ["🇪🇸 Spain", "✅ Legal", "Binance, Bit2Me", "Bank of Spain registered"],
                  ["🇮🇹 Italy", "✅ Legal", "Young Platform", "OAM registered"],
                  ["🇵🇹 Portugal", "✅ Legal", "Binance", "Was tax-free, now 28% CGT"],
                  ["🇸🇪 Sweden", "✅ Legal", "Safello", "SFSA registered"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="restricted" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Countries with Restrictions</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Some countries allow crypto ownership but impose significant restrictions, heavy taxation, or partial bans:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Country", "Status", "Restriction Type", "Details"]}
                rows={[
                  ["🇮🇳 India", "🟡 Legal but taxed", "Heavy taxation", "30% flat tax, 1% TDS, no loss offset"],
                  ["🇨🇳 China", "🟡 Holding legal", "Trading banned", "Exchanges banned since 2021, holding not illegal"],
                  ["🇹🇷 Turkey", "🟡 Legal", "Payment ban", "Can trade but can't use crypto for payments"],
                  ["🇷🇺 Russia", "🟡 Legal to hold", "Payment banned", "Mining legal, payments banned, trading grey area"],
                  ["🇳🇬 Nigeria", "🟡 Legal (P2P)", "Bank restrictions", "CBN restricted banks, but P2P trading thrives"],
                  ["🇮🇩 Indonesia", "🟡 Legal", "Investment only", "Can trade as commodity, can't use for payments"],
                ]}
                highlightCol={1}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Learn more about <Link href="/learn/buy-xrp-in-india" className="text-xrp-accent underline decoration-xrp-accent/30">buying XRP in India</Link> — the most notable restricted market.
            </p>
          </RevealSection>

          <RevealSection id="banned" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Countries Where Crypto (Including XRP) Is Banned</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              A small number of countries have outright bans on cryptocurrency trading. These are <strong className="text-text-primary">blanket crypto bans</strong> — XRP has never been specifically targeted by any country.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Country", "Ban Type", "Since", "Details"]}
                rows={[
                  ["🇧🇩 Bangladesh", "Full ban", "2017", "Bangladesh Bank prohibits all crypto transactions"],
                  ["🇩🇿 Algeria", "Full ban", "2018", "All crypto purchase, sale, and holding banned"],
                  ["🇲🇦 Morocco", "Full ban", "2017", "Bank Al-Maghrib banned crypto (reviewing in 2025)"],
                  ["🇳🇵 Nepal", "Full ban", "2017", "Nepal Rastra Bank prohibits crypto trading"],
                  ["🇪🇬 Egypt", "De facto ban", "2018", "Religious ruling + Central Bank restrictions"],
                  ["🇧🇴 Bolivia", "Full ban", "2014", "One of the first countries to ban crypto"],
                  ["🇶🇦 Qatar", "Full ban", "2018", "QCB prohibits crypto trading"],
                ]}
                highlightCol={0}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="Important Context" variant="info">
                <p>Even in &quot;banned&quot; countries, enforcement varies widely. Many residents use VPNs and P2P platforms to access crypto. These bans are <strong className="text-text-primary">not XRP-specific</strong> — they apply to all cryptocurrencies. Several banned countries (like Morocco) are actively reviewing their stance as global crypto adoption grows.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="sec-ruling" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The SEC Ruling&apos;s Global Impact</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <Link href="/learn/sec-vs-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">SEC v Ripple ruling</Link> had implications far beyond the US. It established a legal framework that other jurisdictions have referenced, and it removed the biggest cloud of uncertainty hanging over XRP globally.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "US exchanges relisted XRP", desc: "Coinbase, Kraken, and others immediately relisted XRP after the ruling, restoring access to the world's largest crypto market." },
                { title: "International confidence boost", desc: "Regulators in other countries were watching the US case closely. The ruling gave them confidence to classify XRP clearly." },
                { title: "ETF applications filed", desc: "Multiple XRP ETF applications followed the ruling, potentially opening XRP to traditional investors via brokerage accounts." },
                { title: "Institutional adoption accelerated", desc: "Banks and financial institutions that were hesitant during the lawsuit began engaging with Ripple and XRP." },
                { title: "Ripple expanded partnerships", desc: "Ripple signed new partnerships in Dubai, Singapore, and across Asia following the regulatory clarity." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/sec-vs-ripple", label: "SEC v Ripple", desc: "The lawsuit explained" },
              { href: "/learn/buy-xrp-in-usa", label: "Buy XRP in USA", desc: "US buying guide" },
              { href: "/learn/buy-xrp-in-uk", label: "Buy XRP in UK", desc: "UK buying guide" },
              { href: "/learn/xrp-european-regulation", label: "EU Regulation", desc: "MiCA framework" },
              { href: "/learn/crypto-regulation-xrp-impact", label: "Regulation Impact", desc: "How rules affect XRP" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="XRP Is Legal Almost Everywhere"
          description="Ready to buy XRP? Check our country-specific guides or compare the best exchanges."
          primaryHref="/learn/how-to-buy-xrp"
          primaryLabel="Best Exchanges →"
          secondaryHref="/learn/how-to-buy-xrp"
          secondaryLabel="How to Buy XRP"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: August 8, 2026. Temporarily excluded from indexing pending jurisdiction-by-jurisdiction primary-source review. This page has not been reviewed by an attorney and is not legal advice.</em>
        </p>
      </div>
    </>
  );
}

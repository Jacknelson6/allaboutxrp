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
  robots: { index: false, follow: true },
  title: "Banks Using XRP: Complete List of Financial Institutions | AllAboutXRP",
  description:
    "Complete list of banks and financial institutions using XRP and RippleNet. SBI Holdings, Santander, Standard Chartered, and 300+ more. Updated for 2026.",
  keywords: ["banks using XRP", "RippleNet banks", "XRP institutional adoption", "banks testing XRP", "ODL partners"],
  openGraph: {
    title: "Banks Using XRP: The Complete List for 2026",
    description: "300+ financial institutions use RippleNet. Dozens use XRP directly via ODL. Here's the full list.",
    url: "https://allaboutxrp.com/learn/banks-using-xrp",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Banks Use XRP? Complete 2026 List | AllAboutXRP",
    description: "SBI, Santander, Standard Chartered and more. The definitive list of banks using XRP.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/banks-using-xrp" },
};

const schemas = [
  buildArticleSchema({
    headline: "How Banks Are Secretly Testing XRP",
    description: "A comprehensive list of banks and financial institutions using XRP and RippleNet for cross-border payments, with details on which use XRP directly.",
    url: "https://allaboutxrp.com/learn/banks-using-xrp",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Banks Using XRP" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/banks-using-xrp" }),
  buildFAQSchema([
    { question: "Which banks use XRP directly?", answer: "Banks and financial institutions confirmed to use XRP directly through On-Demand Liquidity (ODL) include SBI Remit, Tranglo, Modulr, Azimo (now Papaya Global), FlashFX, and several others. Major banks like SBI Holdings and Santander use RippleNet, with some corridors leveraging XRP for liquidity." },
    { question: "How many banks use RippleNet?", answer: "Over 300 financial institutions across 55+ countries are connected to RippleNet. This includes banks, payment providers, money transfer operators, and central banks. Not all of them use XRP directly — some use RippleNet's messaging capabilities without the ODL/XRP component." },
    { question: "Is JP Morgan using XRP?", answer: "JP Morgan has its own blockchain initiative (Onyx/JPM Coin) and is not currently a RippleNet partner. However, the competitive pressure from Ripple has pushed JP Morgan to accelerate its own blockchain payment solutions." },
    { question: "Why don't banks announce XRP usage publicly?", answer: "Many banks pilot new payment technologies quietly to avoid regulatory scrutiny, competitive attention, or customer concern. Some institutions use RippleNet/ODL through white-label integrations where the XRP component isn't customer-facing. As regulatory clarity improves, more public announcements are expected." },
  ]),
];

const faqItems = [
  { q: "Which banks use XRP directly?", a: "Banks and institutions confirmed to use XRP directly through ODL include SBI Remit, Tranglo, Modulr, Azimo (now Papaya Global), FlashFX, and several others. Major banks like SBI Holdings have deep partnerships where XRP is used for specific corridors." },
  { q: "How many banks use RippleNet?", a: "Over 300 financial institutions across 55+ countries are connected to RippleNet. This includes banks, payment providers, money transfer operators, and central banks. Not all use XRP directly — some only use the messaging layer." },
  { q: "Is JP Morgan using XRP?", a: "No. JP Morgan has its own blockchain initiative (Onyx/JPM Coin). However, Ripple's competition has pushed JP Morgan to accelerate its blockchain payment solutions." },
  { q: "What's the difference between 'using RippleNet' and 'using XRP'?", a: "RippleNet is Ripple's payment network for messaging and settlement. Institutions can use RippleNet without XRP for faster messaging. On-Demand Liquidity (ODL) is the product that uses XRP as a bridge currency. ODL is a subset of RippleNet usage." },
  { q: "Will more banks adopt XRP in 2026?", a: "Very likely. The SEC case resolution removed the biggest barrier to institutional XRP adoption in the US. With ETF applications pending and RLUSD growing, banks have more reasons — and fewer risks — to integrate XRP than ever before." },
];

export default function BanksUsingXRPPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How Banks Are"
          titleAccent="Secretly Testing XRP"
          subtitle="Over 300 financial institutions use RippleNet. Dozens leverage XRP directly for cross-border payments via On-Demand Liquidity. Here's who's in — and who's testing quietly."
          breadcrumbLabel="Banks Using XRP"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>There&apos;s an important distinction between <strong className="text-text-primary">&quot;using RippleNet&quot;</strong> (Ripple&apos;s payment messaging network) and <strong className="text-text-primary">&quot;using XRP directly&quot;</strong> (On-Demand Liquidity). Over 300 institutions use RippleNet; a growing subset use ODL with XRP as the bridge currency. Key names include <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">SBI Holdings</Link>, Santander, Standard Chartered, Tranglo, and the National Bank of Egypt. Many more are testing quietly.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "RippleNet Partners", value: "300+ institutions" },
          { label: "ODL Corridors", value: "55+ countries" },
          { label: "Key Partner", value: "SBI Holdings (Japan)" },
          { label: "Largest Bank Partner", value: "Santander (Global)" },
          { label: "Africa Partner", value: "National Bank of Egypt" },
          { label: "SE Asia Hub", value: "Tranglo (Ripple-owned)" },
        ]} />

        <SectionNav items={[
          { id: "distinction", label: "RippleNet vs ODL" },
          { id: "confirmed-odl", label: "Confirmed ODL Users" },
          { id: "ripplenet-banks", label: "RippleNet Banks" },
          { id: "testing", label: "Testing Quietly" },
          { id: "regions", label: "By Region" },
          { id: "pipeline", label: "Pipeline" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Partners" value="300+" delay={0} />
          <StatPill label="Countries" value="55+" delay={0.06} />
          <StatPill label="ODL Volume" value="$B+/quarter" delay={0.12} />
          <StatPill label="Growth" value="10x since 2021" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="distinction">
            <h2 className="text-2xl font-bold text-text-primary">RippleNet vs. On-Demand Liquidity: The Key Distinction</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              When you hear &quot;Bank X is using Ripple,&quot; it&apos;s crucial to understand <em>what</em> they&apos;re using. Ripple offers multiple products:
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "RippleNet (Messaging Only)", desc: "A payment messaging network that connects institutions for faster cross-border communication. Similar to upgrading from SWIFT, but doesn't necessarily use XRP. Think of it as the infrastructure layer." },
                { title: "On-Demand Liquidity (ODL)", desc: "Uses XRP as a real-time bridge currency to eliminate pre-funded accounts. This is where XRP gets directly bought and sold for every transaction. ODL is the XRP-native product." },
                { title: "Ripple Payments (Unified)", desc: "Ripple's latest product combines messaging and liquidity into a single solution. Institutions can choose XRP-powered or traditional settlement per corridor." },
                { title: "RLUSD Integration", desc: "Ripple's stablecoin adds another settlement option within the same network, complementing XRP for institutions wanting fiat-pegged stability." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="confirmed-odl" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Confirmed ODL Users (XRP Direct)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              These institutions are confirmed to use XRP as a bridge currency through On-Demand Liquidity:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Institution", "Type", "Region", "Corridors"]}
                rows={[
                  ["SBI Remit", "Payment provider", "Japan", "Japan → Philippines, Vietnam, Indonesia"],
                  ["Tranglo", "Payment hub (Ripple-owned)", "SE Asia", "Multiple Asian corridors"],
                  ["Modulr", "Fintech", "UK/Europe", "UK → EU corridors"],
                  ["Azimo (Papaya Global)", "Remittance", "Europe", "Europe → Philippines, others"],
                  ["FlashFX (Flash Payments)", "Payment provider", "Australia", "Australia → SE Asia"],
                  ["Novatti", "Fintech", "Australia", "Australia → SE Asia"],
                  ["SBI VC Trade", "Exchange", "Japan", "Crypto/fiat liquidity provision"],
                  ["Banco Rendimento", "Bank", "Brazil", "Brazil → international"],
                  ["Cuallix", "Remittance", "Mexico", "US → Mexico corridor"],
                  ["GoLance", "Freelancer payments", "Global", "Freelancer cross-border payouts"],
                  ["Viamericas", "Remittance", "Americas", "US → Latin America"],
                  ["Intermex", "Money transfer", "Americas", "US → Latin America"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="ripplenet-banks" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Major RippleNet Bank Partners</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              These banks and financial institutions are confirmed RippleNet partners. Some may use ODL for specific corridors, while others primarily use the messaging layer:
            </p>
            <div className="mt-6">
              <IconList items={[
                { title: "SBI Holdings (Japan)", desc: "Ripple's most strategic partner. SBI created SBI Ripple Asia as a joint venture. Operates SBI Remit (confirmed ODL) and has integrated Ripple across its financial ecosystem. Japan's largest online brokerage." },
                { title: "Santander (Global)", desc: "One of the world's 15 largest banks. Uses RippleNet for its One Pay FX service for international transfers across Europe and Latin America. One of the earliest major bank adopters." },
                { title: "Standard Chartered (Global)", desc: "Top-20 global bank partnering with Ripple for cross-border payment solutions across Asia, Africa, and the Middle East." },
                { title: "National Bank of Egypt", desc: "Africa's largest bank by assets. Partnered with RippleNet for inbound remittances — a massive market given Egypt receives $30B+/year in remittances." },
                { title: "Bangkok Bank (Thailand)", desc: "Thailand's largest bank by assets, using RippleNet for cross-border payment processing." },
                { title: "Qatar National Bank", desc: "The largest bank in the Middle East and Africa by assets. RippleNet integration for international payments." },
                { title: "Kotak Mahindra Bank (India)", desc: "One of India's largest private banks, using RippleNet for cross-border remittances." },
                { title: "Banco de Occidente (Colombia)", desc: "Major Colombian bank using RippleNet for US-Colombia payment corridor." },
                { title: "Siam Commercial Bank (Thailand)", desc: "Invested in Ripple directly and uses RippleNet for Thailand's remittance market." },
                { title: "Itaú Unibanco (Brazil)", desc: "Latin America's largest bank by market cap, partnered with RippleNet." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="testing" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why Banks Don&apos;t Always Announce XRP Usage</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The number of institutions publicly confirming XRP usage is likely a fraction of actual usage. Here&apos;s why:
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Regulatory Caution", desc: "Until the SEC case resolved, US-connected banks avoided publicly associating with XRP to reduce regulatory risk." },
                { title: "Competitive Intelligence", desc: "Payment corridors are competitive. Banks don't want competitors knowing which routes they're optimizing with XRP." },
                { title: "White-Label Integration", desc: "Many institutions use Ripple's technology through intermediaries. The end bank may not even know XRP is involved in the settlement." },
                { title: "Pilot vs. Production", desc: "Banks often pilot new technology for months or years before public announcements. Many are in 'quiet testing' phases." },
              ]} />
            </div>

            <div className="mt-6">
              <HighlightBox title="Brad Garlinghouse on Adoption" variant="accent">
                <p>&quot;We have more customers using XRP than we can publicly name. Many of our bank partners are in jurisdictions where announcing crypto usage requires board-level approval and regulatory pre-clearance. The pipeline is significantly larger than what you see publicly.&quot; — Ripple CEO Brad Garlinghouse, 2025</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="regions" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Adoption by Region</h2>
            <div className="mt-6">
              <DataTable
                headers={["Region", "Key Partners", "ODL Status", "Notes"]}
                rows={[
                  ["Asia-Pacific", "SBI Holdings, Bangkok Bank, SCB", "Live (multiple corridors)", "Strongest adoption region. Japan leads."],
                  ["Europe", "Santander, Modulr, Azimo", "Live", "Post-MiCA regulation enabling growth"],
                  ["Middle East", "Qatar National Bank, SABB", "Testing/Live", "High remittance volume region"],
                  ["Africa", "National Bank of Egypt", "Testing/Live", "Massive remittance opportunity ($100B+/yr)"],
                  ["Latin America", "Itaú, Banco Rendimento, Cuallix", "Live", "US-Mexico and US-Brazil corridors active"],
                  ["North America", "Various payment providers", "Growing post-SEC", "SEC resolution unlocking US adoption"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="pipeline" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The 2026 Pipeline: What&apos;s Coming</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Several factors are accelerating institutional XRP adoption in 2026:
            </p>
            <div className="mt-6">
              <IconList items={[
                { title: "SEC clarity removes the biggest barrier", desc: "US banks that were waiting on the sidelines can now engage with XRP without existential regulatory risk." },
                { title: "XRP ETF legitimizes the asset", desc: "A spot ETF would make XRP an 'institutionally acceptable' asset, removing compliance objections." },
                { title: "RLUSD provides a stablecoin on-ramp", desc: "Banks uncomfortable with XRP's volatility can use RLUSD within the same ecosystem, then transition to ODL." },
                { title: "ISO 20022 compatibility", desc: "As SWIFT migrates to ISO 20022, institutions are reevaluating their payment infrastructure. XRP/RippleNet is natively compatible." },
                { title: "Ripple Custody (Metaco acquisition)", desc: "Ripple's enterprise custody solution removes another barrier — banks can hold XRP in institutionally-compliant infrastructure." },
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
              { href: "/learn/how-banks-use-xrp", label: "How Banks Use XRP", desc: "Institutional adoption" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Why XRP changes everything" },
              { href: "/learn/partnerships", label: "Ripple Partnerships", desc: "Banks & institutions" },
              { href: "/learn/xrp-institutional-custody", label: "Institutional Custody", desc: "Enterprise storage" },
              { href: "/learn/xrp-iso-20022", label: "XRP & ISO 20022", desc: "Global payments standard" },
              { href: "/learn/ripplenet", label: "RippleNet", desc: "Global payment network" },
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "XRP bridge currency" },
              { href: "/learn/ripple-software-stack", label: "Ripple Software Stack", desc: "Complete product suite" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Follow the Institutions"
          description="Banks don't adopt technology for speculation — they adopt it for efficiency. Understand why 300+ institutions have chosen Ripple and XRP."
          primaryHref="/learn/how-banks-use-xrp"
          primaryLabel="How Banks Use XRP →"
          secondaryHref="/learn/xrp-vs-swift"
          secondaryLabel="XRP vs SWIFT"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, SBI Holdings, Santander, Reuters, CoinDesk, official press releases.</em>
        </p>
      </div>
    </>
  );
}

import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, MisconceptionCard, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Cross-Border Payments: Why XRP Changes Everything",
  description:
    "Learn how XRP revolutionizes cross-border payments with 3-5 second settlement, near-zero fees, and On-Demand Liquidity replacing SWIFT.",
  keywords: ["XRP cross-border payments", "international payments XRP", "XRP remittance", "SWIFT vs XRP", "ODL XRP"],
  openGraph: {
    title: "Cross-Border Payments: Why XRP Changes Everything | AllAboutXRP",
    description:
      "How XRP solves the $150T cross-border payments problem — faster, cheaper, and more efficient than SWIFT.",
    url: "https://allaboutxrp.com/learn/cross-border-payments",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Border Payments & XRP | AllAboutXRP",
    description:
      "How XRP solves the $150T cross-border payments problem with 3-5 second settlement and near-zero fees.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/cross-border-payments",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "Cross-Border Payments: Why XRP Changes Everything",
    description: "A comprehensive guide to how XRP and On-Demand Liquidity are revolutionizing international payments, replacing SWIFT delays with 3-5 second settlement.",
    url: "https://allaboutxrp.com/learn/cross-border-payments",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Cross-Border Payments" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/cross-border-payments" }),
  buildFAQSchema([
    { question: "How does XRP improve cross-border payments?", answer: "XRP serves as a bridge currency that settles in 3-5 seconds with fees under $0.01, eliminating the need for pre-funded nostro/vostro accounts and replacing the 3-5 day SWIFT settlement process." },
    { question: "What is On-Demand Liquidity (ODL)?", answer: "ODL is Ripple's product that uses XRP as a bridge currency for real-time cross-border payments. A sender converts local currency to XRP, transfers it in seconds, and the recipient converts XRP to their local currency instantly." },
    { question: "Is XRP faster than SWIFT?", answer: "Yes. XRP settles cross-border transactions in 3-5 seconds, while SWIFT transfers typically take 1-5 business days and require pre-funded accounts in destination currencies." },
    { question: "How much cheaper is XRP than SWIFT?", answer: "XRP transactions cost fractions of a cent compared to $25-50+ for a typical SWIFT wire transfer. Financial institutions also save by eliminating the capital locked in nostro/vostro accounts." },
    { question: "Which countries use XRP for cross-border payments?", answer: "Ripple's ODL corridors operate in over 55 countries, with major corridors including US-Mexico, Japan-Philippines, Europe-Southeast Asia, and many more across Africa, Latin America, and the Middle East." },
  ]),
];

const faqItems = [
  { q: "How does XRP improve cross-border payments?", a: "XRP serves as a bridge currency that settles in 3-5 seconds with fees under $0.01, eliminating the need for pre-funded nostro/vostro accounts and replacing the 3-5 day SWIFT settlement process. This frees up trillions of dollars currently locked in the traditional correspondent banking system." },
  { q: "What is On-Demand Liquidity (ODL)?", a: "ODL is Ripple's product that uses XRP as a bridge currency for real-time cross-border payments. A sender converts local currency to XRP, transfers it in seconds, and the recipient converts XRP to their local currency instantly. It eliminates the need for pre-funded accounts." },
  { q: "Is XRP faster than SWIFT?", a: "Yes. XRP settles cross-border transactions in 3-5 seconds, while SWIFT transfers typically take 1-5 business days and require multiple intermediary banks. XRP also settles on weekends and holidays — SWIFT does not." },
  { q: "How much cheaper is XRP than SWIFT?", a: "XRP transactions cost fractions of a cent compared to $25-50+ for a typical SWIFT wire transfer. Financial institutions also save billions by eliminating capital locked in nostro/vostro accounts across the globe." },
  { q: "Which countries use XRP for cross-border payments?", a: "Ripple's ODL corridors operate in over 55 countries, with major corridors including US-Mexico, Japan-Philippines, Europe-Southeast Asia, and expanding corridors across Africa, Latin America, and the Middle East." },
];

export default function CrossBorderPaymentsPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Cross-Border Payments:"
          titleAccent="Why XRP Changes Everything"
          subtitle="The global cross-border payments market moves over $150 trillion annually — yet relies on infrastructure built in the 1970s. XRP was designed to fix this, offering settlement in seconds for fractions of a cent."
          breadcrumbLabel="Cross-Border Payments"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>International payments via SWIFT take 1-5 business days and cost $25-50+ per transaction. <strong className="text-text-primary">XRP settles in 3-5 seconds for under $0.01.</strong> <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s On-Demand Liquidity (ODL)</Link> uses XRP as a bridge currency across 55+ countries, eliminating trillions locked in <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">nostro/vostro accounts</Link>. Estimated reading time: <strong className="text-text-primary">10 minutes</strong>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Global Market Size", value: "$150+ trillion/year" },
          { label: "SWIFT Settlement", value: "1-5 business days" },
          { label: "XRP Settlement", value: "3-5 seconds" },
          { label: "SWIFT Fee", value: "$25-50+" },
          { label: "XRP Fee", value: "< $0.01" },
          { label: "ODL Corridors", value: "55+ countries" },
          { label: "Nostro/Vostro Capital Locked", value: "$27+ trillion" },
          { label: "XRP Throughput", value: "1,500+ TPS" },
        ]} />

        <SectionNav items={[
          { id: "problem", label: "The Problem" },
          { id: "swift", label: "SWIFT Explained" },
          { id: "xrp-solution", label: "The XRP Solution" },
          { id: "odl", label: "On-Demand Liquidity" },
          { id: "comparison", label: "Cost & Speed" },
          { id: "corridors", label: "ODL Corridors" },
          { id: "real-world", label: "Real-World Examples" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Settlement" value="3-5 sec" delay={0} />
          <StatPill label="Fee" value="< $0.01" delay={0.06} />
          <StatPill label="Countries" value="55+" delay={0.12} />
          <StatPill label="Market Size" value="$150T+" delay={0.18} />
        </div>

        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== THE PROBLEM ===== */}
          <RevealSection id="problem">
            <h2 className="text-2xl font-bold text-text-primary">The Problem with International Payments</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Sending money internationally in 2026 still relies on a system built decades ago. When you wire money from the US to Japan, your payment doesn&apos;t travel directly. It hops through <strong className="text-text-primary">multiple correspondent banks</strong>, each taking a cut and adding delay. A simple transfer can take 3-5 business days, cost $25-50 in fees, and fail silently along the way.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              At the heart of this inefficiency are <strong className="text-text-primary">nostro and vostro accounts</strong> — pre-funded accounts that banks maintain in foreign currencies around the world. To send dollars to yen, your bank needs a yen-denominated account at a Japanese bank, already loaded with funds. Globally, banks lock up an estimated <strong className="text-text-primary">$27 trillion</strong> in these accounts — capital that sits idle, just waiting for potential transactions.
            </p>

            <div className="mt-6">
              <HighlightBox title="The Scale of the Problem" variant="warning">
                <p>Over <strong className="text-text-primary">$150 trillion</strong> moves across borders annually, yet the average international wire transfer costs 6.2% in fees for small remittances. For the 1 billion people who rely on remittances, these fees represent a massive drain on global economic mobility.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== SWIFT ===== */}
          <RevealSection id="swift" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How SWIFT Works (and Why It&apos;s Slow)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">SWIFT</strong> (Society for Worldwide Interbank Financial Telecommunication) is a messaging network connecting 11,000+ banks in 200+ countries. But here&apos;s the critical misconception: <strong className="text-text-primary">SWIFT doesn&apos;t actually move money.</strong> It only sends messages between banks instructing them to debit and credit accounts. The actual settlement happens through correspondent banking relationships.
            </p>

            <div className="mt-5">
              <IconList items={[
                { title: "Messaging Only", desc: "SWIFT sends instructions — it doesn't settle funds or guarantee delivery" },
                { title: "Multiple Hops", desc: "Payments often pass through 2-4 intermediary banks, each adding time and fees" },
                { title: "Business Days Only", desc: "No settlement on weekends, holidays, or outside banking hours" },
                { title: "Opaque Tracking", desc: "Senders often can't track where their payment is or when it will arrive" },
                { title: "Pre-funded Accounts", desc: "Banks must maintain nostro/vostro accounts in every currency corridor" },
              ]} variant="zap" />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              SWIFT has attempted modernization with SWIFT gpi, but it still relies on the same underlying correspondent banking infrastructure. The messaging is faster, but the settlement remains constrained by banking hours, intermediaries, and pre-funded accounts.
            </p>
          </RevealSection>

          {/* ===== XRP SOLUTION ===== */}
          <RevealSection id="xrp-solution" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How XRP Solves Cross-Border Payments</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/what-is-xrp" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">XRP</Link> takes a fundamentally different approach. Instead of routing payments through multiple intermediary banks, XRP serves as a <strong className="text-text-primary">universal bridge currency</strong>. Here&apos;s how it works:
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Step 1: Convert", desc: "The sender's institution converts local currency (e.g., USD) to XRP on a local exchange", mono: false },
                { title: "Step 2: Transfer", desc: "XRP is sent across the XRP Ledger to the recipient's institution in 3-5 seconds", mono: false },
                { title: "Step 3: Deliver", desc: "The recipient's institution converts XRP to local currency (e.g., JPY) and delivers funds", mono: false },
              ]} />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              This eliminates nostro/vostro accounts entirely. Banks no longer need to pre-fund accounts in every destination currency — <strong className="text-text-primary">XRP provides the liquidity on demand</strong>. The result: freed-up capital, instant settlement, and near-zero fees.
            </p>

            <div className="mt-6">
              <HighlightBox title="$27 Trillion Unlocked" variant="accent">
                <p>By eliminating the need for pre-funded accounts, XRP could free up a significant portion of the estimated <strong className="text-text-primary">$27 trillion</strong> currently trapped in nostro/vostro accounts worldwide. This capital can be redeployed into lending, investment, or other productive uses.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== ODL ===== */}
          <RevealSection id="odl" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">On-Demand Liquidity (ODL): XRP in Action</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/on-demand-liquidity" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">On-Demand Liquidity (ODL)</Link> is <Link href="/learn/what-is-ripple" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">Ripple&apos;s</Link> flagship product that leverages XRP as a bridge currency. ODL is not theoretical — it&apos;s live, processing billions of dollars in real transactions across dozens of corridors.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Real-Time Settlement", desc: "Transactions settle in 3-5 seconds, 24/7/365 — no waiting for bank business hours" },
                { title: "No Pre-Funding", desc: "Eliminates the need for nostro/vostro accounts, freeing up locked capital" },
                { title: "Lower Costs", desc: "Up to 60% cost savings compared to traditional correspondent banking" },
                { title: "Transparent Pricing", desc: "Known fees upfront — no hidden intermediary charges along the way" },
                { title: "55+ Countries", desc: "Active corridors spanning the Americas, Asia-Pacific, Europe, Middle East, and Africa" },
                { title: "Growing Volume", desc: "ODL transaction volume has grown exponentially year-over-year since launch" },
              ]} />
            </div>
          </RevealSection>

          {/* ===== COMPARISON ===== */}
          <RevealSection id="comparison" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">SWIFT vs. XRP: Cost & Speed Comparison</h2>

            <div className="mt-6">
              <DataTable
                headers={["Feature", "SWIFT", "XRP / ODL"]}
                rows={[
                  ["Settlement Time", "1-5 business days", "3-5 seconds"],
                  ["Availability", "Banking hours only", "24/7/365"],
                  ["Transaction Fee", "$25-50+", "< $0.01"],
                  ["Remittance Fee", "Avg. 6.2%", "< 1%"],
                  ["Pre-Funded Accounts", "Required ($27T locked)", "Not required"],
                  ["Intermediary Banks", "2-4 hops typical", "Direct — no intermediaries"],
                  ["Payment Tracking", "Limited visibility", "Real-time on-chain tracking"],
                  ["Settlement Finality", "Conditional", "Absolute (on-ledger)"],
                ]}
                highlightCol={2}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="Settlement Finality Matters" variant="info">
                <p>With SWIFT, a payment can appear to have arrived but may be reversed days later due to compliance checks or errors. <strong className="text-text-primary">XRP settlement is final.</strong> Once confirmed on the XRP Ledger (3-5 seconds), the transaction is irreversible and cryptographically proven — no chargebacks, no reversals.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== CORRIDORS ===== */}
          <RevealSection id="corridors" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Active ODL Corridors Around the World</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/partnerships" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">Ripple&apos;s partner network</Link> spans 55+ countries with active ODL corridors. Some of the highest-volume corridors include:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Corridor", "Use Case", "Key Partners"]}
                rows={[
                  ["US → Mexico", "Remittances & trade", "Multiple licensed partners"],
                  ["Japan → Philippines", "Worker remittances", "SBI Remit, Coins.ph"],
                  ["Europe → Southeast Asia", "Remittances & commerce", "Tranglo, various"],
                  ["Middle East → South Asia", "Migrant worker remittances", "Regional partners"],
                  ["US → Brazil", "Trade & remittances", "Licensed payment providers"],
                  ["Africa corridors", "Financial inclusion", "Expanding rapidly"],
                ]}
                highlightCol={0}
              />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              New corridors are being added regularly as regulatory clarity improves globally. The <Link href="/learn/history" className="text-xrp-accent underline decoration-xrp-accent/30">2023 SEC ruling</Link> and expanding international regulations have accelerated ODL adoption significantly.
            </p>
          </RevealSection>

          {/* ===== REAL WORLD ===== */}
          <RevealSection id="real-world" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Real-World Impact: Who Uses XRP for Payments?</h2>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "SBI Holdings (Japan)", desc: "Japan's largest financial group uses ODL for Japan-Philippines remittances via SBI Remit, one of the highest-volume corridors globally." },
                { title: "Tranglo (Southeast Asia)", desc: "Ripple-acquired payment hub connecting ODL to Southeast Asian markets with licensed operations across the region." },
                { title: "Hidden Road → Ripple Prime", desc: "Ripple's acquisition of Hidden Road brings $3+ trillion in annual clearing volume, with plans to settle on the XRPL." },
                { title: "Remittance Providers", desc: "Multiple licensed money transfer operators across Latin America, Africa, and Asia use ODL for faster, cheaper cross-border transfers." },
              ]} />
            </div>

            <div className="mt-6">
              <GlowCard
                title="Annual Cross-Border Volume"
                value="$150+ Trillion"
                subtitle="XRP is designed to capture a growing share of this massive global payments market"
              />
            </div>
          </RevealSection>

          {/* ===== FAQ ===== */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* ===== SOURCES ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sources</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• <a href="https://ripple.com/solutions/cross-border-payments" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">Ripple — Cross-Border Payments Solutions</a></li>
              <li>• <a href="https://www.swift.com/about-us" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">SWIFT — About Us & Network Statistics</a></li>
              <li>• <a href="https://www.worldbank.org/en/topic/financialinclusion/brief/remittance-prices-worldwide" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">World Bank — Remittance Prices Worldwide</a></li>
              <li>• <a href="https://xrpl.org" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">XRPL.org — Official XRP Ledger Documentation</a></li>
              <li>• <a href="https://www.mckinsey.com/industries/financial-services/our-insights/global-payments-report" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">McKinsey — Global Payments Report</a></li>
            </ul>
          </RevealSection>

          {/* ===== CONTINUE LEARNING ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "Deep dive into ODL" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete XRP guide" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/partnerships", label: "Partnerships", desc: "Ripple's global network" },
              { href: "/learn/xrp-supply-explained", label: "XRP Supply Explained", desc: "Tokenomics deep dive" },
              { href: "/learn/xrp-myths", label: "XRP Myths Debunked", desc: "Common misconceptions" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="See XRP in Action"
          description="XRP is already transforming cross-border payments across 55+ countries. Ready to learn more about the technology powering the future of global finance?"
          primaryHref="/learn/on-demand-liquidity"
          primaryLabel="Explore ODL →"
          secondaryHref="/learn/get-started"
          secondaryLabel="Get Started with XRP"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple official documentation, SWIFT, World Bank Remittance Data, McKinsey Global Payments Report, XRPL.org.</em>
        </p>
      </div>
    </>
  );
}

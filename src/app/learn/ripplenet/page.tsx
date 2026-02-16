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
  title: "What is RippleNet? Complete Guide to Ripple's Payment Network",
  description:
    "RippleNet is Ripple's global payment network connecting 300+ banks and financial institutions across 55+ countries. Learn how it works, its history, and how it uses XRP.",
  openGraph: {
    title: "What is RippleNet? Complete Guide | AllAboutXRP",
    description:
      "Everything about RippleNet — xCurrent, xRapid, xVia history, ODL, partner banks, and how XRP powers global payments.",
    url: "https://allaboutxrp.com/learn/ripplenet",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is RippleNet? | AllAboutXRP",
    description: "Ripple's global payment network explained — history, products, partners, and XRP integration.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/ripplenet" },
};

const schemas = [
  buildArticleSchema({
    headline: "What is RippleNet? Complete Guide to Ripple's Payment Network",
    description: "A comprehensive guide to RippleNet, Ripple's global payment network connecting banks and financial institutions.",
    url: "https://allaboutxrp.com/learn/ripplenet",
    datePublished: "2026-02-12",
    dateModified: "2026-02-12",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "RippleNet" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/ripplenet" }),
  buildFAQSchema([
    { question: "What is RippleNet?", answer: "RippleNet is Ripple's global payment network that connects banks, payment providers, and financial institutions for fast, low-cost cross-border transactions. It serves 300+ institutions across 55+ countries." },
    { question: "Does RippleNet use XRP?", answer: "RippleNet offers XRP-powered On-Demand Liquidity (ODL) as an option for instant settlement without pre-funded accounts, but institutions can also use RippleNet for messaging-only payments." },
    { question: "What happened to xCurrent, xRapid, and xVia?", answer: "In 2019, Ripple consolidated xCurrent, xRapid, and xVia into a single unified platform called RippleNet. xRapid became On-Demand Liquidity (ODL), while xCurrent and xVia features were merged into the core RippleNet product." },
    { question: "How many banks use RippleNet?", answer: "Over 300 financial institutions globally use RippleNet, including SBI Holdings, Santander, Standard Chartered, and many others across 55+ countries." },
  ]),
];

const faqItems = [
  { q: "What is RippleNet?", a: "RippleNet is Ripple's global payment network that connects banks, payment providers, and financial institutions for fast, low-cost cross-border transactions. It serves 300+ institutions across 55+ countries." },
  { q: "Does RippleNet use XRP?", a: "RippleNet offers XRP-powered On-Demand Liquidity (ODL) as an option for instant settlement without pre-funded accounts. Institutions can choose whether to use XRP for liquidity or use RippleNet for messaging-only payments." },
  { q: "What happened to xCurrent, xRapid, and xVia?", a: "In 2019, Ripple consolidated xCurrent, xRapid, and xVia into a single unified platform called RippleNet. xRapid became On-Demand Liquidity (ODL), while xCurrent and xVia features were merged into the core RippleNet product." },
  { q: "How many banks use RippleNet?", a: "Over 300 financial institutions globally use RippleNet, including SBI Holdings, Santander, Standard Chartered, Tranglo, and many regional banks and payment providers across 55+ countries." },
  { q: "Is RippleNet better than SWIFT?", a: "RippleNet settles transactions in seconds vs SWIFT's 1-5 business days, costs a fraction of SWIFT's fees, and eliminates the need for pre-funded nostro/vostro accounts. However, SWIFT has a larger established network of 11,000+ institutions." },
  { q: "How does RippleNet make money?", a: "Ripple charges transaction fees for payments processed through RippleNet. ODL transactions generate additional revenue through XRP liquidity provisioning." },
];

export default function RippleNetPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="What is"
          titleAccent="RippleNet?"
          subtitle="RippleNet is Ripple's global payment network connecting 300+ banks and financial institutions across 55+ countries — enabling fast, low-cost cross-border transactions with optional XRP-powered liquidity."
          breadcrumbLabel="RippleNet"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-12" />
            <LastUpdated date="February 12, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">RippleNet</strong> is Ripple&apos;s enterprise payment network that replaced the legacy SWIFT-era correspondent banking model. It evolved from three separate products (xCurrent, xRapid, xVia) into a unified platform. Its killer feature is <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">On-Demand Liquidity (ODL)</Link>, which uses XRP as a bridge currency to eliminate pre-funded accounts and settle payments in seconds.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Launched", value: "2012 (as Ripple Protocol)" },
          { label: "Current Form", value: "Unified RippleNet (since 2019)" },
          { label: "Partner Institutions", value: "300+" },
          { label: "Countries Covered", value: "55+" },
          { label: "Settlement Time", value: "3-5 seconds (with ODL)" },
          { label: "Transaction Cost", value: "< $0.01 (XRP fees)" },
          { label: "Payments Processed", value: "$90B+" },
          { label: "Key Feature", value: "On-Demand Liquidity (ODL)" },
        ]} />

        <SectionNav items={[
          { id: "how-it-works", label: "How It Works" },
          { id: "history", label: "xCurrent/xRapid/xVia" },
          { id: "odl", label: "ODL Integration" },
          { id: "partners", label: "Partners" },
          { id: "vs-swift", label: "vs SWIFT" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Institutions" value="300+" delay={0} />
          <StatPill label="Countries" value="55+" delay={0.06} />
          <StatPill label="Payments" value="$90B+" delay={0.12} />
          <StatPill label="Settlement" value="3-5 sec" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          {/* HOW IT WORKS */}
          <RevealSection id="how-it-works">
            <h2 className="text-2xl font-bold text-text-primary">How RippleNet Works</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              RippleNet is a decentralized network of banks and payment providers that use Ripple&apos;s technology to send money globally. Unlike traditional correspondent banking — where payments hop through multiple intermediary banks over days — RippleNet creates direct connections between institutions.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Instant Messaging", desc: "Real-time payment messaging between institutions with full transparency on fees and delivery time before sending." },
                { title: "Atomic Settlement", desc: "Payments either complete fully or not at all — no partial failures or stuck transactions." },
                { title: "On-Demand Liquidity", desc: "Uses XRP as a bridge currency to eliminate the need for pre-funded accounts in destination countries." },
                { title: "Bilateral Agreements", desc: "Institutions connect directly, reducing fees and intermediary risk compared to correspondent banking chains." },
              ]} />
            </div>
            <div className="mt-6">
              <HighlightBox title="How a RippleNet Payment Works" variant="info">
                <p><strong>Step 1:</strong> Sending institution initiates payment on RippleNet → <strong>Step 2:</strong> RippleNet finds the best route (direct or via ODL with XRP) → <strong>Step 3:</strong> Both parties see fees, FX rate, and delivery time upfront → <strong>Step 4:</strong> Payment settles in seconds (ODL) or minutes (standard).</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* HISTORY: xCurrent, xRapid, xVia */}
          <RevealSection id="history" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Evolution: xCurrent, xRapid, and xVia</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Before the unified RippleNet brand, Ripple offered three distinct products. In 2019, these were consolidated into a single platform to simplify adoption and reduce confusion.
            </p>
            <div className="mt-5">
              <DataTable
                headers={["Product", "Purpose", "Used XRP?", "Current Status"]}
                rows={[
                  ["xCurrent", "Real-time messaging & settlement between banks", "No", "Merged into RippleNet"],
                  ["xRapid", "On-demand liquidity using XRP as bridge currency", "Yes — core use", "Renamed to ODL"],
                  ["xVia", "Simple API for corporates & payment providers", "Optional", "Merged into RippleNet"],
                ]}
                highlightCol={2}
              />
            </div>
            <div className="mt-6">
              <IconList items={[
                { title: "2012-2015", desc: "Ripple Protocol launched, early bank pilots with real-time settlement messaging" },
                { title: "2016-2017", desc: "xCurrent product formalized; SBI Holdings becomes major strategic partner" },
                { title: "2018", desc: "xRapid launched — first product using XRP for cross-border liquidity" },
                { title: "2018", desc: "xVia launched — simple API for corporates sending cross-border payments" },
                { title: "2019", desc: "All three products consolidated under the unified RippleNet brand" },
                { title: "2020+", desc: "ODL expansion to 20+ corridors; RippleNet surpasses $90B in processed payments" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* ODL INTEGRATION */}
          <RevealSection id="odl" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">On-Demand Liquidity (ODL) on RippleNet</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              ODL is the crown jewel of RippleNet — it&apos;s what makes XRP essential to the network. When an institution sends a payment via ODL, fiat currency is converted to XRP, sent across the XRP Ledger in 3-5 seconds, and converted back to the destination fiat. This eliminates the need for pre-funded nostro/vostro accounts.
            </p>
            <div className="mt-5">
              <HighlightBox title="Why ODL Matters for XRP" variant="accent" large>
                <p>Every ODL transaction creates <strong className="text-text-primary">real buy and sell pressure on XRP</strong>. As RippleNet volume grows and more corridors adopt ODL, the demand for XRP as a bridge currency increases. This is the fundamental utility-driven value proposition for XRP as a digital asset.</p>
              </HighlightBox>
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              Deep dive: <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">On-Demand Liquidity explained →</Link>
            </p>
          </RevealSection>

          {/* PARTNERS */}
          <RevealSection id="partners" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key RippleNet Partners</h2>
            <div className="mt-5">
              <DataTable
                headers={["Institution", "Type", "Region", "Uses ODL?"]}
                rows={[
                  ["SBI Holdings / SBI Remit", "Financial conglomerate", "Japan / Asia", "Yes"],
                  ["Santander (One Pay FX)", "Global bank", "Europe / Americas", "RippleNet messaging"],
                  ["Standard Chartered", "Global bank", "UK / Asia", "Yes"],
                  ["Tranglo", "Payment provider", "Southeast Asia", "Yes"],
                  ["National Bank of Egypt", "National bank", "Africa / Middle East", "RippleNet"],
                  ["Banco Rendimento", "Bank", "Brazil", "Yes"],
                  ["SCB (Siam Commercial Bank)", "Bank", "Thailand", "Yes"],
                  ["Azimo", "Money transfer", "Europe", "Yes"],
                  ["SBI VC Trade", "Exchange", "Japan", "Yes"],
                  ["MoneyGram (former)", "Money transfer", "Global", "Previously (2019-2021)"],
                ]}
                highlightCol={3}
              />
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              See the full list on our <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">partnerships page</Link>.
            </p>
          </RevealSection>

          {/* VS SWIFT */}
          <RevealSection id="vs-swift" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">RippleNet vs. SWIFT</h2>
            <div className="mt-5">
              <DataTable
                headers={["Feature", "RippleNet + ODL", "SWIFT"]}
                rows={[
                  ["Settlement Time", "3-5 seconds", "1-5 business days"],
                  ["Cost Per Transaction", "< $0.01 (XRP fees)", "$25-50+"],
                  ["Pre-funding Required", "No (ODL eliminates this)", "Yes (nostro/vostro)"],
                  ["Real-time Tracking", "Yes", "Limited (SWIFT GPI improving)"],
                  ["Network Size", "300+ institutions", "11,000+ institutions"],
                  ["Founded", "2012", "1973"],
                  ["Technology", "Blockchain-based", "Messaging network"],
                ]}
                highlightCol={1}
              />
            </div>
            <div className="mt-5">
              <HighlightBox title="Not a Direct Replacement (Yet)" variant="info">
                <p>RippleNet isn&apos;t trying to replace SWIFT overnight. Instead, it targets the pain points of cross-border payments — high costs, slow settlement, and trapped capital — particularly in emerging market corridors where SWIFT is least efficient.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* COVERAGE STATS */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">RippleNet by the Numbers</h2>
            <div className="mt-5">
              <DataTable
                headers={["Metric", "Value"]}
                rows={[
                  ["Total Payments Processed", "$90+ billion"],
                  ["Partner Institutions", "300+"],
                  ["Countries & Territories", "55+"],
                  ["ODL Corridors", "20+"],
                  ["Cross-border Market Target", "$150+ trillion annually"],
                  ["Average Settlement (ODL)", "3-5 seconds"],
                  ["Transaction Cost (XRP)", "< $0.01"],
                ]}
                highlightCol={1}
              />
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
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "XRP bridge currency" },
              { href: "/learn/ripple-software-stack", label: "Ripple Software Stack", desc: "Complete product suite" },
              { href: "/learn/ripple-prime", label: "Ripple Prime", desc: "Enterprise brokerage" },
              { href: "/learn/rlusd", label: "RLUSD", desc: "Ripple's stablecoin" },
              { href: "/learn/rlusd-explained", label: "RLUSD Explained", desc: "Deep dive into RLUSD" },
              { href: "/learn/how-banks-use-xrp", label: "How Banks Use XRP", desc: "Institutional adoption" },
              { href: "/learn/banks-using-xrp", label: "Banks Using XRP", desc: "Complete institution list" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Why XRP changes everything" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Ready to Join the Network?"
          description="RippleNet is reshaping global payments with 300+ institutions and growing. Start your XRP journey today."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/on-demand-liquidity"
          secondaryLabel="Learn About ODL"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 12, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, RippleNet documentation, industry reports, partner announcements.</em>
        </p>
      </div>
    </>
  );
}

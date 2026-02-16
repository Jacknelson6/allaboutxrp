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
  title: "Ripple vs XRP: What's the Difference? | AllAboutXRP",
  description:
    "Ripple is a company. XRP is a cryptocurrency. Learn the key differences between Ripple Labs and XRP, why they're separate, and how they're connected.",
  keywords: ["Ripple vs XRP", "difference between Ripple and XRP", "is Ripple the same as XRP", "Ripple Labs XRP", "XRP Ripple difference"],
  openGraph: {
    title: "Ripple vs XRP: What's the Difference?",
    description: "Ripple is a fintech company. XRP is an independent digital asset. Here's why the distinction matters.",
    url: "https://allaboutxrp.com/learn/ripple-vs-xrp",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple vs XRP: Key Differences Explained",
    description: "Why Ripple and XRP are not the same thing.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/ripple-vs-xrp" },
};

const schemas = [
  buildArticleSchema({
    headline: "Ripple vs XRP: What's the Difference?",
    description: "A clear explanation of the difference between Ripple Labs (the company) and XRP (the cryptocurrency), why the distinction matters legally and technically.",
    url: "https://allaboutxrp.com/learn/ripple-vs-xrp",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Ripple vs XRP" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/ripple-vs-xrp" }),
  buildFAQSchema([
    { question: "What is the difference between Ripple and XRP?", answer: "Ripple (Ripple Labs Inc.) is a private technology company based in San Francisco that builds enterprise payment software. XRP is an independent open-source digital asset that runs on the XRP Ledger, a decentralized blockchain. Ripple uses XRP in some of its products (like On-Demand Liquidity) but does not control the XRP Ledger or the XRP token." },
    { question: "Does Ripple control XRP?", answer: "No. Ripple does not control the XRP Ledger or XRP transactions. The XRPL is an open-source, decentralized network run by 150+ independent validators. Ripple holds a large amount of XRP (mostly locked in escrow), but it cannot alter the ledger's rules, reverse transactions, or freeze accounts." },
    { question: "Can XRP exist without Ripple?", answer: "Yes. The XRP Ledger is open-source software that would continue operating even if Ripple ceased to exist. Validators would continue processing transactions, and the network would function as designed. Ripple contributes to development but is not required for the network to operate." },
    { question: "Why does Ripple hold so much XRP?", answer: "Ripple was gifted 80 billion XRP by the XRPL's creators in 2012. Most of this is locked in cryptographic escrow that releases up to 1 billion XRP per month. Ripple uses XRP for On-Demand Liquidity, ecosystem development, and operating expenses. The escrow ensures transparent, predictable release." },
    { question: "Is buying XRP the same as investing in Ripple?", answer: "No. Buying XRP does not give you ownership or equity in Ripple Labs. Ripple is a private company — you cannot buy its stock on public exchanges. XRP's price is determined by market supply and demand, not directly by Ripple's revenue or valuation, though Ripple's success does influence XRP adoption." },
  ]),
];

const faqItems = [
  { q: "What is the difference between Ripple and XRP?", a: "Ripple is a private tech company that builds payment software. XRP is an independent open-source digital asset on the XRP Ledger. Ripple uses XRP in products like ODL but doesn't control the XRP Ledger." },
  { q: "Does Ripple control XRP?", a: "No. The XRP Ledger is run by 150+ independent validators. Ripple holds XRP (mostly in escrow) but cannot alter ledger rules, reverse transactions, or freeze accounts." },
  { q: "Can XRP exist without Ripple?", a: "Yes. The XRPL is open-source and would continue operating with independent validators even if Ripple ceased to exist." },
  { q: "Why does Ripple hold so much XRP?", a: "Ripple was gifted 80 billion XRP in 2012. Most is locked in cryptographic escrow releasing up to 1 billion/month. It's used for ODL, ecosystem development, and operations." },
  { q: "Is buying XRP the same as investing in Ripple?", a: "No. Buying XRP gives you no ownership in Ripple Labs. Ripple is a private company. XRP's price is set by market supply and demand." },
  { q: "Will Ripple's IPO affect XRP price?", a: "Ripple has discussed a potential IPO. If it happens, it could increase visibility and legitimacy for the XRP ecosystem, potentially driving demand. But XRP and Ripple stock would be separate investments." },
];

export default function RippleVsXRPPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Ripple vs XRP"
          titleAccent="What's the Difference?"
          subtitle="One of the most common points of confusion in crypto: Are Ripple and XRP the same thing? No — and understanding the difference is crucial for making informed decisions."
          breadcrumbLabel="Ripple vs XRP"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Ripple</strong> (Ripple Labs Inc.) is a <strong className="text-text-primary">private fintech company</strong> that builds enterprise payment software for banks. <strong className="text-text-primary">XRP</strong> is an <strong className="text-text-primary">independent digital asset</strong> that runs on the open-source <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>. Ripple uses XRP in its <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">On-Demand Liquidity</Link> product and holds a large amount of XRP in <Link href="/learn/xrp-escrow-explained" className="text-xrp-accent underline decoration-xrp-accent/30">escrow</Link>, but it does <em>not</em> control the XRP Ledger. Buying XRP is not the same as investing in Ripple.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Ripple Type", value: "Private company (Ripple Labs Inc.)" },
          { label: "XRP Type", value: "Open-source digital asset" },
          { label: "Ripple Founded", value: "2012 (San Francisco)" },
          { label: "XRPL Launched", value: "2012 (open-source)" },
          { label: "Ripple Valuation", value: "~$11 billion (2024)" },
          { label: "XRP Market Cap", value: "~$110 billion" },
          { label: "Ripple XRP Holdings", value: "~40B (mostly escrowed)" },
          { label: "XRPL Validators", value: "150+ independent nodes" },
        ]} />

        <SectionNav items={[
          { id: "key-differences", label: "Key Differences" },
          { id: "ripple-company", label: "What Is Ripple?" },
          { id: "xrp-asset", label: "What Is XRP?" },
          { id: "connection", label: "How They Connect" },
          { id: "why-it-matters", label: "Why It Matters" },
          { id: "common-myths", label: "Common Myths" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Ripple" value="Company" delay={0} />
          <StatPill label="XRP" value="Digital Asset" delay={0.06} />
          <StatPill label="XRPL" value="Blockchain" delay={0.12} />
          <StatPill label="Independent" value="Yes" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="key-differences">
            <h2 className="text-2xl font-bold text-text-primary">Ripple vs XRP: The Key Differences at a Glance</h2>
            <div className="mt-6">
              <DataTable
                headers={["", "Ripple (the company)", "XRP (the asset)"]}
                rows={[
                  ["What is it?", "Private technology company", "Digital currency / cryptocurrency"],
                  ["Structure", "Corporation (Ripple Labs Inc.)", "Open-source, decentralized token"],
                  ["Headquarters", "San Francisco, CA", "No headquarters (decentralized)"],
                  ["Ownership", "Privately held by shareholders", "Held by millions of wallets globally"],
                  ["Revenue", "Software licensing, ODL fees", "N/A — it's an asset, not a business"],
                  ["Control", "Board of directors, CEO", "No single controlling entity"],
                  ["Can you buy it?", "No (private company)", "Yes (on crypto exchanges)"],
                  ["Regulation", "FinCEN registered MSB", "Digital asset / not a security (retail)"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="ripple-company" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Is Ripple (the Company)?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple Labs Inc.</Link> is a private fintech company founded in 2012, headquartered in San Francisco. Led by CEO Brad Garlinghouse and co-founded by Chris Larsen, Ripple builds enterprise software for financial institutions — specifically focused on <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">cross-border payments</Link>.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "RippleNet", desc: "A global payment network connecting 300+ financial institutions for fast cross-border payments." },
                { title: "On-Demand Liquidity (ODL)", desc: "Ripple's flagship product that uses XRP as a bridge currency for instant settlement." },
                { title: "Ripple Custody", desc: "Institutional-grade digital asset custody for banks and financial institutions." },
                { title: "RLUSD Stablecoin", desc: "A regulated USD-backed stablecoin for enterprise use." },
                { title: "Ripple Software Stack", desc: "Complete payment infrastructure for banks including messaging, compliance, and settlement." },
              ]} variant="zap" />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              Ripple generates revenue from software licensing, payment processing fees, and XRP sales from its <Link href="/learn/xrp-escrow-explained" className="text-xrp-accent underline decoration-xrp-accent/30">escrow holdings</Link>. The company has been valued at approximately $11 billion and has discussed a potential <Link href="/learn/ripple-ipo" className="text-xrp-accent underline decoration-xrp-accent/30">IPO</Link>.
            </p>
          </RevealSection>

          <RevealSection id="xrp-asset" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Is XRP (the Digital Asset)?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> is a digital asset — a cryptocurrency — that exists on the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger (XRPL)</Link>, an open-source, decentralized blockchain. XRP was designed to be the fastest, most efficient digital asset for payments.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Independent Network", desc: "The XRPL runs on 150+ independent validators. Ripple doesn't control the network." },
                { title: "Open-Source", desc: "Anyone can view, modify, and contribute to the XRPL codebase. It's not proprietary." },
                { title: "Fixed Supply", desc: "100 billion XRP created at genesis. No more can ever be made. Fees are burned." },
                { title: "Permissionless", desc: "Anyone can create a wallet, send XRP, or run a validator. No gatekeepers." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="connection" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Ripple and XRP Are Connected</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              While Ripple and XRP are separate, they&apos;re undeniably connected. Here&apos;s how:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Ripple uses XRP in ODL", desc: "Ripple's On-Demand Liquidity product uses XRP as a bridge currency for cross-border settlement. This creates real demand for XRP." },
                { title: "Ripple holds ~40 billion XRP", desc: "Ripple received 80 billion XRP from the XRPL's creators. About 40 billion remain, mostly locked in cryptographic escrow." },
                { title: "Ripple contributes to XRPL development", desc: "Ripple engineers are major contributors to the open-source XRPL codebase, though the community also contributes." },
                { title: "Ripple's success boosts XRP adoption", desc: "When Ripple signs new bank partnerships, it typically increases XRP usage and demand through ODL." },
                { title: "XRP's success helps Ripple's business", desc: "Higher XRP liquidity and value make ODL more attractive to institutions, benefiting Ripple's payment business." },
              ]} variant="check" />
            </div>

            <div className="mt-6">
              <HighlightBox title="The Analogy" variant="accent">
                <p>Think of it like <strong className="text-text-primary">a tech company and the internet</strong>. Ripple is like a company that builds internet services (like Google). XRP/XRPL is like the internet itself — an open protocol anyone can use. Google uses the internet extensively and contributes to its development, but Google doesn&apos;t <em>own</em> or <em>control</em> the internet. Similarly, Ripple uses XRP and contributes to XRPL development, but doesn&apos;t own or control them.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="why-it-matters" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why the Distinction Matters</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The Ripple vs XRP distinction isn&apos;t just academic — it has <strong className="text-text-primary">massive legal and practical implications</strong>:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Legal: The SEC case hinged on this distinction", desc: "The SEC vs Ripple case was fundamentally about whether selling XRP constituted selling a security. The court ruled that XRP itself is not a security — precisely because it's independent from Ripple." },
                { title: "Investment: Different risk profiles", desc: "XRP's price depends on market supply/demand and crypto sentiment. Ripple's value depends on its business performance. They're correlated but separate." },
                { title: "Decentralization: Network resilience", desc: "If Ripple disappeared tomorrow, XRP and the XRPL would continue operating. This independence is what makes XRP truly decentralized." },
                { title: "Regulatory: Different classifications", desc: "Ripple is regulated as a money services business (MSB). XRP is classified as a digital asset. Different rules apply." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="common-myths" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Common Myths About Ripple and XRP</h2>
            <div className="mt-6 space-y-4">
              <HighlightBox title="Myth: 'Ripple can freeze your XRP'" variant="danger">
                <p><strong className="text-text-primary">False.</strong> Ripple cannot freeze, seize, or reverse any XRP transactions. The XRPL is decentralized and permissionless. Only you control your XRP with your private keys.</p>
              </HighlightBox>
              <HighlightBox title="Myth: 'Buying XRP is investing in Ripple'" variant="danger">
                <p><strong className="text-text-primary">False.</strong> XRP is not equity in Ripple. You get no voting rights, dividends, or ownership stake. If you want to invest in Ripple the company, you&apos;d need access to private shares or wait for a potential <Link href="/learn/ripple-ipo" className="text-xrp-accent underline decoration-xrp-accent/30">IPO</Link>.</p>
              </HighlightBox>
              <HighlightBox title="Myth: 'Ripple created XRP'" variant="danger">
                <p><strong className="text-text-primary">Nuanced.</strong> The XRPL and XRP were created by David Schwartz, Jed McCaleb, and Arthur Britto before Ripple Labs existed. They gifted 80 billion XRP to Ripple (then OpenCoin) to fund the company. Ripple didn&apos;t create XRP — the creators of XRP created Ripple.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide to XRP" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Technology explained simply" },
              { href: "/learn/xrp-for-beginners", label: "XRP for Beginners", desc: "Start your XRP journey" },
              { href: "/learn/faq", label: "XRP FAQ", desc: "Common questions answered" },
              { href: "/learn/get-started", label: "Get Started with XRP", desc: "Buy your first XRP" },
              { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", desc: "Step-by-step buying guide" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Security best practices" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Understand Both Ripple and XRP"
          description="Now you know the difference. Dive deeper into either Ripple's enterprise business or XRP's technology."
          primaryHref="/learn/what-is-ripple"
          primaryLabel="Learn About Ripple →"
          secondaryHref="/learn/what-is-xrp"
          secondaryLabel="Learn About XRP"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, XRPL.org, SEC.gov court filings.</em>
        </p>
      </div>
    </>
  );
}

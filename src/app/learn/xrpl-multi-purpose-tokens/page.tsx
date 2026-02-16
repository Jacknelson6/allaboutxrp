import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRPL Multi-Purpose Tokens (MPTs): Next-Gen Tokenization",
  description: "Multi-Purpose Tokens (MPTs) are transforming tokenization on the XRP Ledger. How they work, use cases, and advantages over trust lines.",
  keywords: ["XRPL MPT", "multi purpose tokens XRP", "MPT XRPL", "XRPL tokenization upgrade"],
  openGraph: {
    title: "XRPL Multi-Purpose Tokens (MPTs) | AllAboutXRP",
    description: "MPTs are transforming tokenization on the XRP Ledger — how they work and why they matter.",
    url: "https://allaboutxrp.com/learn/xrpl-multi-purpose-tokens",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRPL Multi-Purpose Tokens | AllAboutXRP",
    description: "Next-gen tokenization on the XRPL — Multi-Purpose Tokens explained.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-multi-purpose-tokens" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRPL Multi-Purpose Tokens (MPTs): Next-Gen Tokenization",
    description: "Complete guide to Multi-Purpose Tokens on the XRP Ledger — a more flexible, efficient tokenization standard replacing traditional trust lines for complex use cases.",
    url: "https://allaboutxrp.com/learn/xrpl-multi-purpose-tokens",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRPL Multi-Purpose Tokens" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-multi-purpose-tokens" }),
  buildFAQSchema([
    { question: "What are Multi-Purpose Tokens (MPTs)?", answer: "MPTs are a new token standard on the XRPL (XLS-33) designed to support complex tokenization use cases. Unlike traditional trust line-based tokens, MPTs can carry metadata, support multiple holders more efficiently, and enable features needed for securities, loyalty points, tokenized real-world assets, and more." },
    { question: "How are MPTs different from trust line tokens?", answer: "Trust line tokens are bilateral relationships between issuer and holder. MPTs use a more flexible model — they're issued as a token class with metadata, support batch operations, have lower reserve requirements, and can represent diverse asset types without the overhead of individual trust lines." },
    { question: "What can MPTs be used for?", answer: "MPTs are designed for tokenized securities, real estate tokens, loyalty points, carbon credits, event tickets, membership tokens, debt instruments, and any asset that needs rich metadata and compliance features built in." },
    { question: "Are MPTs live on XRPL mainnet?", answer: "MPTs were introduced via the XLS-33 amendment. As of early 2026, they are in the process of mainnet activation with strong community support. They've been extensively tested on devnet and testnet." },
    { question: "Do MPTs replace trust lines?", answer: "No — MPTs complement trust lines. Trust lines remain the standard for simple fungible tokens (like RLUSD). MPTs are better for complex use cases that need metadata, compliance controls, and advanced features not supported by basic trust lines." },
  ]),
];

const faqItems = [
  { q: "What are Multi-Purpose Tokens (MPTs)?", a: "A new XRPL token standard (XLS-33) supporting complex tokenization — securities, real estate, loyalty points. They carry metadata, support efficient multi-holder management, and enable compliance features beyond basic trust lines." },
  { q: "How are MPTs different from trust line tokens?", a: "Trust lines are bilateral issuer-holder relationships. MPTs are issued as token classes with metadata, support batch operations, have lower reserves, and handle diverse asset types more efficiently." },
  { q: "What can MPTs be used for?", a: "Tokenized securities, real estate, loyalty points, carbon credits, event tickets, membership tokens, debt instruments — anything needing rich metadata and compliance features." },
  { q: "Are MPTs live on mainnet?", a: "MPTs (XLS-33) are in the process of mainnet activation as of early 2026, with extensive testing on devnet and testnet and strong community support." },
  { q: "Do MPTs replace trust lines?", a: "No — they complement trust lines. Simple fungible tokens like RLUSD still use trust lines. MPTs serve complex use cases needing metadata and advanced compliance controls." },
  { q: "How do MPTs help institutional adoption?", a: "MPTs provide the metadata, compliance controls, and flexibility that institutions need for tokenized securities and RWAs — meeting regulatory requirements while using the XRPL's speed and low fees." },
];

export default function XRPLMultiPurposeTokensPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRPL Multi-Purpose Tokens:"
          titleAccent="Next-Gen Tokenization"
          subtitle="MPTs represent the future of tokenization on the XRP Ledger — more flexible, more efficient, and built for real-world assets."
          breadcrumbLabel="XRPL Multi-Purpose Tokens"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Multi-Purpose Tokens (XLS-33) are a new <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL</Link> token standard designed for complex tokenization — securities, real estate, loyalty points. They support metadata, compliance controls, and efficient multi-holder management beyond what <Link href="/learn/xrpl-trust-lines-explained" className="text-xrp-accent underline decoration-xrp-accent/30">trust lines</Link> offer. Key enabler for <Link href="/learn/xrp-real-world-assets" className="text-xrp-accent underline decoration-xrp-accent/30">real-world asset tokenization</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Standard", value: "XLS-33" },
          { label: "Purpose", value: "Complex tokenization use cases" },
          { label: "Metadata", value: "Rich on-chain metadata support" },
          { label: "Complements", value: "Trust lines (doesn't replace them)" },
          { label: "Key Use Cases", value: "Securities, RWA, loyalty, carbon credits" },
        ]} />

        <SectionNav items={[
          { id: "what-are-mpts", label: "What Are MPTs?" },
          { id: "vs-trust-lines", label: "vs Trust Lines" },
          { id: "use-cases", label: "Use Cases" },
          { id: "technical", label: "Technical Details" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Standard" value="XLS-33" delay={0} />
          <StatPill label="Metadata" value="On-chain" delay={0.06} />
          <StatPill label="Status" value="Activating" delay={0.12} />
          <StatPill label="Use Case" value="RWA + More" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what-are-mpts">
            <h2 className="text-2xl font-bold text-text-primary">What Are Multi-Purpose Tokens?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Multi-Purpose Tokens (MPTs) are a new token primitive on the XRP Ledger designed to go beyond what traditional trust line-based tokens can do. While trust lines work well for simple fungible tokens, MPTs add the flexibility needed for <strong className="text-text-primary">real-world asset tokenization, securities, and complex financial instruments</strong>.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Rich Metadata", desc: "MPTs can carry on-chain metadata — asset descriptions, legal documents, compliance information, and more." },
                { title: "Efficient Holders", desc: "MPTs handle large numbers of holders more efficiently than individual trust lines, reducing reserve requirements." },
                { title: "Compliance Built-In", desc: "Native support for transfer restrictions, whitelisting, clawback, and other compliance controls." },
                { title: "Flexible Design", desc: "One standard supports fungible tokens, semi-fungible tokens, and complex financial instruments." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="vs-trust-lines" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">MPTs vs Trust Line Tokens</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "Trust Line Tokens", "Multi-Purpose Tokens"]}
                rows={[
                  ["Model", "Bilateral (issuer-holder)", "Token class with holders"],
                  ["Metadata", "Limited", "Rich on-chain metadata"],
                  ["Reserve Cost", "2 XRP per trust line", "Lower per-holder cost"],
                  ["Compliance", "Basic freeze/clawback", "Advanced transfer controls"],
                  ["Best For", "Simple fungible tokens", "Complex assets, securities, RWA"],
                  ["Status", "Live since 2012", "Activating (XLS-33)"],
                  ["Example", "RLUSD, community tokens", "Tokenized bonds, equity, real estate"],
                ]}
                highlightCol={2}
              />
            </div>
          </RevealSection>

          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">MPT Use Cases</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Tokenized Securities", desc: "Stocks, bonds, and equity tokens with built-in transfer restrictions, investor whitelisting, and regulatory metadata." },
                { title: "Real Estate Tokenization", desc: "Fractional real estate ownership with property details, valuation data, and compliance controls embedded in the token." },
                { title: "Carbon Credits", desc: "Verifiable carbon offset tokens with provenance data, certification information, and retirement tracking." },
                { title: "Loyalty Programs", desc: "Brand loyalty points with expiration dates, tier information, and redemption rules encoded on-chain." },
                { title: "Event Tickets", desc: "Verifiable tickets with event details, seating, and anti-counterfeiting features — transferable on the XRPL." },
                { title: "Debt Instruments", desc: "Tokenized loans, bonds, and notes with maturity dates, interest rates, and payment schedules in metadata." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="technical" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Technical Architecture</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              MPTs introduce new XRPL objects and transaction types. An <strong className="text-text-primary">MPTokenIssuance</strong> defines the token class (metadata, max supply, transfer settings), and <strong className="text-text-primary">MPToken</strong> objects represent individual holdings.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Object/Transaction", "Purpose"]}
                rows={[
                  ["MPTokenIssuance", "Defines the token class — metadata, supply, controls"],
                  ["MPToken", "Individual holder balance for a specific MPT"],
                  ["MPTokenIssuanceCreate", "Transaction to create a new MPT class"],
                  ["MPTokenIssuanceSet", "Modify MPT settings (lock, metadata update)"],
                  ["MPTokenAuthorize", "Holder opts in to hold the MPT"],
                ]}
                highlightCol={0}
              />
            </div>
            <div className="mt-6">
              <GlowCard
                title="Institutional Grade"
                value="Built for RWA"
                subtitle="MPTs are designed from the ground up for regulated, real-world asset tokenization"
              />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrpl-trust-lines-explained", label: "Trust Lines", desc: "Traditional XRPL tokens" },
              { href: "/learn/xrp-real-world-assets", label: "RWA on XRPL", desc: "Tokenized real-world assets" },
              { href: "/learn/xrpl-clawback-feature", label: "XRPL Clawback", desc: "Compliance feature" },
              { href: "/learn/xrpl-credentials-did", label: "XRPL Credentials", desc: "Decentralized identity" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger", desc: "XRPL fundamentals" },
              { href: "/learn/ripple-stablecoin-strategy", label: "RLUSD Strategy", desc: "Ripple's stablecoin" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="The Future of Tokenization"
          description="MPTs are enabling the next wave of real-world asset tokenization on the XRP Ledger."
          primaryHref="/learn/xrp-real-world-assets"
          primaryLabel="Real-World Assets →"
          secondaryHref="/learn/xrp-ledger-explained"
          secondaryLabel="XRP Ledger Explained"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, XLS-33 specification.</em>
        </p>
      </div>
    </>
  );
}

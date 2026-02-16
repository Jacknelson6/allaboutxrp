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
  title: "Ripple Custody: Institutional-Grade Crypto Storage",
  description: "What is Ripple Custody? How Ripple's institutional custody platform (powered by Metaco) works, who uses it, and the XRP connection.",
  keywords: ["Ripple Custody", "Ripple Metaco", "institutional crypto custody", "Ripple custody solution"],
  openGraph: {
    title: "Ripple Custody: Institutional-Grade Crypto Storage | AllAboutXRP",
    description: "Ripple's institutional custody platform — how it works, who uses it, and the XRP connection.",
    url: "https://allaboutxrp.com/learn/ripple-custody",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple Custody | AllAboutXRP",
    description: "Institutional-grade crypto custody powered by Ripple and Metaco technology.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/ripple-custody" },
};

const schemas = [
  buildArticleSchema({
    headline: "Ripple Custody: Institutional-Grade Crypto Storage",
    description: "How Ripple's institutional custody platform works — powered by Metaco acquisition, serving banks and financial institutions with enterprise-grade digital asset custody.",
    url: "https://allaboutxrp.com/learn/ripple-custody",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Ripple Custody" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/ripple-custody" }),
  buildFAQSchema([
    { question: "What is Ripple Custody?", answer: "Ripple Custody is an institutional-grade digital asset custody platform designed for banks, fintech companies, and financial institutions. It provides secure storage, management, and tokenization capabilities for digital assets, powered by technology from Metaco (acquired by Ripple in 2023 for $250M)." },
    { question: "What is Metaco and why did Ripple acquire it?", answer: "Metaco was a Swiss digital asset infrastructure company whose Harmonize platform served major banks like BBVA, Citi, and Societe Generale. Ripple acquired Metaco in 2023 for $250 million to offer enterprise custody alongside its payments solutions — creating a full-stack institutional crypto platform." },
    { question: "How does Ripple Custody relate to XRP?", answer: "While Ripple Custody supports multiple digital assets (not just XRP), it's a strategic part of Ripple's broader ecosystem. Banks using Ripple Custody can also access Ripple's payment solutions and XRP for cross-border liquidity, creating a comprehensive institutional crypto offering." },
    { question: "Who uses Ripple Custody?", answer: "Ripple Custody serves banks, central banks, fintechs, and financial institutions globally. Notable clients include HSBC, DBS Bank, and other tier-1 financial institutions that require enterprise-grade security, regulatory compliance, and institutional-level infrastructure." },
    { question: "Is Ripple Custody safe?", answer: "Ripple Custody uses multi-layer security including HSM (Hardware Security Module) technology, multi-party computation (MPC), governance workflows, and regulatory compliance frameworks. It's designed to meet the security and compliance standards required by regulated financial institutions." },
  ]),
];

const faqItems = [
  { q: "What is Ripple Custody?", a: "An institutional-grade digital asset custody platform for banks and financial institutions. Provides secure storage, management, and tokenization, powered by Metaco technology (acquired 2023 for $250M)." },
  { q: "What is Metaco?", a: "A Swiss digital asset infrastructure company Ripple acquired for $250M. Its Harmonize platform served major banks like BBVA, Citi, and Societe Generale." },
  { q: "How does it relate to XRP?", a: "Part of Ripple's broader institutional ecosystem. Banks using Custody can also access Ripple payments and XRP for cross-border liquidity — a full-stack crypto offering." },
  { q: "Who uses it?", a: "Banks (HSBC, DBS), central banks, fintechs, and financial institutions requiring enterprise-grade security and regulatory compliance." },
  { q: "Is it safe?", a: "Uses HSM technology, multi-party computation, governance workflows, and meets regulated financial institution standards for security and compliance." },
  { q: "What assets does it support?", a: "Multi-asset platform supporting XRP, Bitcoin, Ethereum, stablecoins, and tokenized assets. Not limited to XRP or XRPL-based assets." },
];

export default function RippleCustodyPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Ripple Custody:"
          titleAccent="Institutional-Grade Crypto Storage"
          subtitle="How Ripple's enterprise custody platform is bringing banks and institutions into crypto — securely and compliantly."
          breadcrumbLabel="Ripple Custody"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Ripple Custody is an institutional-grade digital asset storage platform built on Metaco technology ($250M acquisition in 2023). It serves <strong className="text-text-primary">banks, central banks, and financial institutions</strong> with enterprise security, compliance tools, and tokenization capabilities. Part of Ripple&apos;s strategy to be the <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">full-stack institutional crypto platform</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Product", value: "Ripple Custody (formerly Metaco Harmonize)" },
          { label: "Acquisition", value: "$250M (Metaco, 2023)" },
          { label: "Target Market", value: "Banks, central banks, fintechs" },
          { label: "Security", value: "HSM + MPC + governance workflows" },
          { label: "Assets", value: "Multi-asset (XRP, BTC, ETH, tokens)" },
          { label: "Clients", value: "HSBC, DBS Bank, and more" },
        ]} />

        <SectionNav items={[
          { id: "what-is-it", label: "What Is It?" },
          { id: "metaco", label: "Metaco Acquisition" },
          { id: "features", label: "Features" },
          { id: "xrp-connection", label: "XRP Connection" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Acquisition" value="$250M" delay={0} />
          <StatPill label="Security" value="HSM + MPC" delay={0.06} />
          <StatPill label="Clients" value="Tier-1 Banks" delay={0.12} />
          <StatPill label="Assets" value="Multi-Chain" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what-is-it">
            <h2 className="text-2xl font-bold text-text-primary">What Is Ripple Custody?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Ripple Custody</strong> is an enterprise-grade platform that enables financial institutions to securely store, manage, and transact digital assets. Unlike consumer wallets, it&apos;s built for the stringent security, compliance, and governance requirements of regulated institutions.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Bank-Grade Security", desc: "HSM-based key management, multi-party computation (MPC), and multi-layer security architecture." },
                { title: "Regulatory Compliance", desc: "Built-in compliance workflows, audit trails, and governance policies required by financial regulators." },
                { title: "Multi-Asset Support", desc: "Supports hundreds of digital assets across multiple blockchains — not limited to XRP." },
                { title: "Tokenization Engine", desc: "Enable issuance and management of tokenized assets — securities, stablecoins, RWAs." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="metaco" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Metaco Acquisition</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In May 2023, Ripple acquired <strong className="text-text-primary">Metaco</strong>, a Swiss-based digital asset infrastructure company, for <strong className="text-text-primary">$250 million</strong>. Metaco&apos;s Harmonize platform was already trusted by some of the world&apos;s largest banks.
            </p>
            <div className="mt-6">
              <HighlightBox title="Strategic Significance" variant="accent">
                <p>The Metaco acquisition was one of the largest in crypto infrastructure history. It gave Ripple an instant <strong className="text-text-primary">enterprise custody solution</strong> with existing tier-1 bank relationships — transforming Ripple from a payments company into a full-stack institutional crypto infrastructure provider.</p>
              </HighlightBox>
            </div>
            <div className="mt-6">
              <GlowCard
                title="Metaco Acquisition"
                value="$250 Million"
                subtitle="One of the largest crypto infrastructure acquisitions — instant bank relationships"
              />
            </div>
          </RevealSection>

          <RevealSection id="features" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Features</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Orchestration Layer", desc: "Harmonize acts as an orchestration layer between the institution's systems and multiple blockchains — managing keys, policies, and transactions." },
                { title: "Governance Workflows", desc: "Configurable approval workflows, role-based access, transaction limits, and multi-signature requirements." },
                { title: "DeFi Gateway", desc: "Secure access to DeFi protocols, staking, and yield generation — with institutional controls and compliance." },
                { title: "Tokenization", desc: "Issue, manage, and distribute tokenized assets with built-in compliance and lifecycle management." },
                { title: "White-Label", desc: "Banks can deploy Ripple Custody as a white-label solution under their own brand." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="xrp-connection" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The XRP Connection</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple Custody is part of Ripple&apos;s strategy to offer a <strong className="text-text-primary">complete institutional crypto platform</strong>. Banks using Ripple Custody can seamlessly access:
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Ripple Payments", desc: "Cross-border payment solutions using XRP for On-Demand Liquidity (ODL)." },
                { title: "RLUSD", desc: "Ripple's regulated stablecoin for institutional settlements and DeFi." },
                { title: "XRP Liquidity", desc: "Access to XRP as a bridge currency for instant cross-border settlements." },
                { title: "Ripple Liquidity Hub", desc: "Enterprise crypto access for buying, selling, and holding digital assets." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/ripple-liquidity-hub", label: "Liquidity Hub", desc: "Enterprise crypto access" },
              { href: "/learn/hidden-road-acquisition", label: "Hidden Road", desc: "Prime brokerage acquisition" },
              { href: "/learn/ripple-stablecoin-strategy", label: "Stablecoin Strategy", desc: "RLUSD and the bigger picture" },
              { href: "/learn/what-is-ripple", label: "What Is Ripple?", desc: "Company overview" },
              { href: "/learn/rlusd", label: "RLUSD", desc: "Ripple's stablecoin" },
              { href: "/learn/xrp-use-cases", label: "XRP Use Cases", desc: "How XRP is used" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Explore Ripple's Ecosystem"
          description="Custody is one piece of Ripple's institutional platform. Learn about the full ecosystem."
          primaryHref="/learn/what-is-ripple"
          primaryLabel="What Is Ripple? →"
          secondaryHref="/learn/ripple-liquidity-hub"
          secondaryLabel="Liquidity Hub"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, Metaco press releases, CoinDesk.</em>
        </p>
      </div>
    </>
  );
}

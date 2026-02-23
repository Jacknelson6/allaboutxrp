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
  title: "XRP Developer Resources: Build on the XRP Ledger | AllAboutXRP",
  description: "Everything developers need to start building on the XRP Ledger. SDKs, documentation, testnet, grants, and getting started guides.",
  keywords: ["XRP developer","XRPL developer resources","build on XRPL","XRP development guide","XRPL SDK"],
  openGraph: { title: "XRP Developer Resources: Build on the XRP Ledger", description: "Everything developers need to start building on the XRP Ledger. SDKs, documentation, testnet, grants, and getting started guides.", url: "https://allaboutxrp.com/learn/xrp-developer-resources", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP Developer Resources: Build on the XRP Ledger", description: "Everything developers need to start building on the XRP Ledger. SDKs, documentation, testnet, grants, and getting started guides." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-developer-resources" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Developer Resources: Build on the XRP Ledger", description: "Everything developers need to start building on the XRP Ledger. SDKs, documentation, testnet, grants, and getting started guides.", url: "https://allaboutxrp.com/learn/xrp-developer-resources", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Developer Resources" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-developer-resources" }),
  buildFAQSchema([
    { question: "Where do I start building on XRPL?", answer: "Start at xrpl.org/docs. Follow the quickstart tutorials, then explore the SDK in your preferred language." },
    { question: "What languages are supported?", answer: "JavaScript (xrpl.js), Python (xrpl-py), and Java (xrpl4j). Community libraries exist for other languages." },
    { question: "Does XRPL have smart contracts?", answer: "Not traditional smart contracts. Hooks (smart contract-like logic) are being developed. But XRPL has native DEX, AMM, NFTs, and escrow built into the protocol." },
    { question: "Is there funding for XRPL projects?", answer: "Yes. The XRPL Grants program provides funding for developers building on the XRP Ledger." },
    { question: "Can I use testnet for free?", answer: "Yes. The XRPL testnet provides free test XRP and a full environment for development and testing." },
  ]),
];

const faqItems = [
  { q: "Where do I start building on XRPL?", a: "Start at xrpl.org/docs. Follow the quickstart tutorials, then explore the SDK in your preferred language." },
  { q: "What languages are supported?", a: "JavaScript (xrpl.js), Python (xrpl-py), and Java (xrpl4j). Community libraries exist for other languages." },
  { q: "Does XRPL have smart contracts?", a: "Not traditional smart contracts. Hooks (smart contract-like logic) are being developed. But XRPL has native DEX, AMM, NFTs, and escrow built into the protocol." },
  { q: "Is there funding for XRPL projects?", a: "Yes. The XRPL Grants program provides funding for developers building on the XRP Ledger." },
  { q: "Can I use testnet for free?", a: "Yes. The XRPL testnet provides free test XRP and a full environment for development and testing." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Developer Resources" titleAccent="Build on the XRP Ledger" subtitle="Everything developers need to start building on the XRP Ledger — SDKs, docs, testnet, grants." breadcrumbLabel="Developer Resources">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>XRPL has comprehensive developer resources: official docs at xrpl.org, SDKs in JavaScript/Python/Java, free testnet, and the XRPL Grants program for funding. No smart contracts needed — native features like DEX, AMM, and NFTs are built into the protocol.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Docs", value: "xrpl.org" },
          { label: "SDKs", value: "JS, Python, Java" },
          { label: "Testnet", value: "Free" },
          { label: "Grants", value: "XRPL Grants" },
          { label: "Smart Contracts", value: "Hooks (coming)" },
          { label: "NFTs", value: "Native (XLS-20)" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "sdks", label: "SDKs" },
          { id: "docs", label: "Documentation" },
          { id: "testnet", label: "Testnet" },
          { id: "grants", label: "Grants" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="SDKs" value="3+" delay={0.00} />
          <StatPill label="Docs" value="xrpl.org" delay={0.06} />
          <StatPill label="Testnet" value="Free" delay={0.12} />
          <StatPill label="Grants" value="Available" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">Building on the XRP Ledger</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The <Link href="/learn/what-is-xrp-ledger" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> provides native features that don&apos;t require smart contracts: built-in DEX, AMM, NFTs (XLS-20), escrow, payment channels, and multi-signing. This makes development simpler and more secure.</p>
          </RevealSection>

          <RevealSection id="sdks" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">SDKs & Libraries</h2>
            <div className="mt-6"><DataTable headers={["SDK","Language","Install","Status"]} rows={[["xrpl.js","JavaScript/TS","npm install xrpl","Official"],["xrpl-py","Python","pip install xrpl-py","Official"],["xrpl4j","Java","Maven","Official"],["rippled","C++","Build from source","Core"]]} highlightCol={0} /></div>
          </RevealSection>

          <RevealSection id="docs" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Documentation</h2>
            <div className="mt-6"><IconList items={[
              {title:"xrpl.org/docs",desc:"Official documentation. Tutorials, API reference, concepts, and examples."},
              {title:"XRPL Learning Portal",desc:"Interactive tutorials for beginners."},
              {title:"GitHub",desc:"Open source code for rippled, SDKs, and community projects."},
              {title:"Dev Blog",desc:"Updates on new features, amendments, and best practices."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="testnet" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Testnet</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The XRPL testnet provides a full development environment with free test XRP. Test transactions, token creation, <Link href="/learn/xrpl-nft-marketplaces" className="text-xrp-accent underline decoration-xrp-accent/30">NFT minting</Link>, and AMM operations without risking real funds.</p>
          </RevealSection>

          <RevealSection id="grants" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL Grants</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The XRPL Grants program funds open-source projects building on the XRP Ledger. Grants range from small developer tools to large ecosystem projects. Applications reviewed quarterly.</p>
            <div className="mt-6"><HighlightBox title="Get Funded" variant="accent"><p>Have an idea for the XRPL? Apply for a grant at xrplgrants.org. Open to developers worldwide.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp-ledger", label: "XRP Ledger", desc: "XRPL basics" },
              { href: "/learn/xrpl-nft-marketplaces", label: "NFT Markets", desc: "XRPL NFTs" },
              { href: "/learn/xrpl-gaming", label: "XRPL Gaming", desc: "Game dev" },
              { href: "/learn/xrp-micropayments", label: "Micropayments", desc: "Payment use cases" },
              { href: "/learn/xrp-block-explorers", label: "Explorers", desc: "Inspect the ledger" },
              { href: "/learn/xrp-community-explained", label: "Community", desc: "XRP ecosystem" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Start Building" description="The XRP Ledger is open and ready for your project." primaryHref="/learn/what-is-xrp-ledger" primaryLabel="Learn XRPL →" secondaryHref="/learn/xrp-community-explained" secondaryLabel="Join Community" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

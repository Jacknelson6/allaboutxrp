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
  title: "XRPL Decentralized Identity (DID): Credentials on the Ledger",
  description: "Decentralized identity on the XRP Ledger. How DIDs work, use cases for KYC/compliance, and the credential infrastructure being built.",
  keywords: ["XRPL DID", "XRP decentralized identity", "XRPL credentials", "XRPL KYC"],
  openGraph: {
    title: "XRPL Decentralized Identity (DID) | AllAboutXRP",
    description: "Decentralized identity on the XRP Ledger — how DIDs and credentials work on XRPL.",
    url: "https://allaboutxrp.com/learn/xrpl-credentials-did",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRPL Credentials & DID | AllAboutXRP",
    description: "Decentralized identity on the XRP Ledger — DIDs, credentials, and KYC compliance.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-credentials-did" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRPL Decentralized Identity (DID): Credentials on the Ledger",
    description: "How decentralized identifiers (DIDs) and verifiable credentials work on the XRP Ledger, enabling KYC compliance, reputation systems, and portable identity.",
    url: "https://allaboutxrp.com/learn/xrpl-credentials-did",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRPL Credentials & DID" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-credentials-did" }),
  buildFAQSchema([
    { question: "What are DIDs on the XRPL?", answer: "Decentralized Identifiers (DIDs) on the XRPL are self-sovereign identity documents anchored to the ledger. They allow XRPL accounts to create verifiable, portable identities without relying on a centralized identity provider. The DID specification (XLS-40d) was activated on the XRPL mainnet." },
    { question: "What are XRPL Credentials?", answer: "XRPL Credentials (XLS-70d) allow trusted entities to issue verifiable credentials on-chain — such as KYC verification, accredited investor status, or age verification. These credentials can be checked by smart logic, DEX rules, or other XRPL features to gate access." },
    { question: "How do DIDs help with compliance?", answer: "DIDs enable 'verify once, use everywhere' KYC. A user completes KYC with one provider, receives a verifiable credential on the XRPL, and can prove their verified status to any service that accepts it — without re-submitting documents each time." },
    { question: "Are DIDs mandatory on the XRPL?", answer: "No. DIDs are completely optional. The XRPL remains pseudonymous by default. DIDs are available for users and entities that want or need verifiable identity — particularly for regulatory compliance in DeFi, securities trading, and institutional services." },
    { question: "How do XRPL Credentials differ from traditional KYC?", answer: "Traditional KYC requires submitting personal documents to every service separately. XRPL Credentials are portable, privacy-preserving, and verifiable on-chain. You prove you're verified without revealing your actual personal information to each service." },
  ]),
];

const faqItems = [
  { q: "What are DIDs on the XRPL?", a: "Decentralized Identifiers anchored to the XRP Ledger — self-sovereign identity documents that allow verifiable, portable identity without centralized providers. Activated via XLS-40d." },
  { q: "What are XRPL Credentials?", a: "On-chain verifiable credentials (XLS-70d) issued by trusted entities — KYC verification, accredited investor status, age verification. Can gate access to DeFi features, DEX trading, etc." },
  { q: "How do DIDs help with compliance?", a: "Enable 'verify once, use everywhere' KYC. Complete verification once, get a credential, and prove verified status to any accepting service without re-submitting documents." },
  { q: "Are DIDs mandatory?", a: "No — completely optional. XRPL remains pseudonymous by default. DIDs serve those needing verifiable identity for compliance or institutional services." },
  { q: "How is privacy maintained?", a: "Credentials prove you're verified without revealing personal information. Zero-knowledge techniques can further minimize data exposure while maintaining verifiability." },
  { q: "Who issues credentials?", a: "Trusted entities — KYC providers, exchanges, regulators, accreditation bodies. Any XRPL account can issue credentials, but their value depends on the issuer's trustworthiness." },
];

export default function XRPLCredentialsDIDPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRPL Decentralized Identity:"
          titleAccent="Credentials on the Ledger"
          subtitle="DIDs and verifiable credentials are bringing portable, privacy-preserving identity to the XRP Ledger — enabling compliant DeFi without sacrificing decentralization."
          breadcrumbLabel="XRPL Credentials & DID"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL</Link> supports <strong className="text-text-primary">Decentralized Identifiers (DIDs)</strong> and <strong className="text-text-primary">verifiable Credentials</strong> — letting users prove identity claims (KYC, accreditation) on-chain without revealing personal data. This enables compliant <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">DeFi</Link>, gated token access, and institutional participation while preserving user privacy.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "DID Standard", value: "XLS-40d (W3C DID compatible)" },
          { label: "Credentials", value: "XLS-70d (on-chain verifiable)" },
          { label: "Privacy", value: "Prove claims without revealing data" },
          { label: "Mandatory?", value: "No — fully optional" },
          { label: "Key Use Case", value: "Portable KYC, compliance gating" },
        ]} />

        <SectionNav items={[
          { id: "what-are-dids", label: "What Are DIDs?" },
          { id: "credentials", label: "Credentials" },
          { id: "use-cases", label: "Use Cases" },
          { id: "how-it-works", label: "How It Works" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="DID Spec" value="XLS-40d" delay={0} />
          <StatPill label="Credentials" value="XLS-70d" delay={0.06} />
          <StatPill label="Privacy" value="Preserved" delay={0.12} />
          <StatPill label="Optional" value="Yes" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what-are-dids">
            <h2 className="text-2xl font-bold text-text-primary">What Are Decentralized Identifiers?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              A <strong className="text-text-primary">Decentralized Identifier (DID)</strong> is a globally unique identifier anchored on a blockchain — in this case, the XRP Ledger. Unlike traditional identifiers (email, SSN, username), DIDs are:
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Self-Sovereign", desc: "You create and control your DID — no central authority can revoke it or control your identity." },
                { title: "Verifiable", desc: "Claims attached to your DID can be cryptographically verified by anyone without contacting the issuer." },
                { title: "Portable", desc: "Your DID works across any service that supports the standard — not locked to one platform." },
                { title: "Privacy-Preserving", desc: "Share only the specific claims needed — prove you're over 18 without revealing your birthday." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="credentials" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL Verifiable Credentials</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">XLS-70d Credentials amendment</strong> introduces on-chain verifiable credentials to the XRPL. A trusted entity (KYC provider, regulator, institution) can issue a credential to an XRPL account, proving a specific claim.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "KYC Verification", desc: "A KYC provider verifies your identity and issues an on-chain credential. Any XRPL service can check this credential without you re-doing KYC." },
                { title: "Accredited Investor", desc: "A financial institution attests that you meet accredited investor criteria — enabling access to tokenized securities on the XRPL." },
                { title: "Compliance Gating", desc: "Token issuers can require holders to have specific credentials before they can receive or trade tokens." },
                { title: "Reputation Systems", desc: "Build verifiable reputation on-chain — trusted trader, reliable validator operator, verified developer." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Real-World Use Cases</h2>
            <div className="mt-6">
              <DataTable
                headers={["Use Case", "Credential Needed", "Issuer"]}
                rows={[
                  ["DeFi lending", "KYC verified", "Licensed KYC provider"],
                  ["Securities trading", "Accredited investor", "Financial institution"],
                  ["Age-restricted content", "Age verification", "Identity verification service"],
                  ["Institutional DeFi", "AML/CFT compliance", "Compliance provider"],
                  ["Cross-border payments", "Sanctions screening", "Compliance provider"],
                  ["DAO governance", "Member verification", "DAO itself"],
                ]}
                highlightCol={0}
              />
            </div>
            <div className="mt-6">
              <GlowCard
                title="Verify Once"
                value="Use Everywhere"
                subtitle="Portable credentials eliminate redundant KYC across XRPL services"
              />
            </div>
          </RevealSection>

          <RevealSection id="how-it-works" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How It Works Technically</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "1. Create DID", desc: "An XRPL account creates a DID document using the DIDSet transaction. This anchors their decentralized identity to the ledger." },
                { title: "2. Request Credential", desc: "The account holder completes verification (KYC, accreditation) with a trusted issuer off-chain." },
                { title: "3. Issuer Issues Credential", desc: "The issuer creates a CredentialCreate transaction on the XRPL, linking the credential to the holder's account." },
                { title: "4. Service Verifies", desc: "When accessing a service, the user's credential is checked on-chain. No need to share personal documents." },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="W3C Compatible" variant="accent">
                <p>XRPL DIDs follow the <strong className="text-text-primary">W3C DID specification</strong>, ensuring interoperability with the broader decentralized identity ecosystem — not just XRPL-specific.</p>
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
              { href: "/learn/xrpl-multi-purpose-tokens", label: "Multi-Purpose Tokens", desc: "Next-gen tokenization" },
              { href: "/learn/xrpl-clawback-feature", label: "XRPL Clawback", desc: "Compliance feature" },
              { href: "/learn/xrp-real-world-assets", label: "RWA on XRPL", desc: "Tokenized assets" },
              { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "DeFi ecosystem" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger", desc: "XRPL fundamentals" },
              { href: "/learn/xrpl-hooks-explained", label: "XRPL Hooks", desc: "Smart logic on XRPL" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="The Future of Identity on XRPL"
          description="Decentralized identity is a building block for institutional DeFi and compliant tokenization."
          primaryHref="/learn/xrp-ledger-explained"
          primaryLabel="XRP Ledger Explained →"
          secondaryHref="/learn/xrpl-multi-purpose-tokens"
          secondaryLabel="Multi-Purpose Tokens"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, XLS-40d/XLS-70d specifications, W3C DID spec.</em>
        </p>
      </div>
    </>
  );
}

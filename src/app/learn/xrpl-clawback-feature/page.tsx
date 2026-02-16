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
  title: "XRPL Clawback Feature Explained: What It Means",
  description: "What is the XRPL clawback feature? How it works, why it exists for regulatory compliance, and what it means for token issuers.",
  keywords: ["XRPL clawback", "XRP clawback", "clawback XRP Ledger", "XRPL compliance feature"],
  openGraph: {
    title: "XRPL Clawback Feature Explained | AllAboutXRP",
    description: "What is the XRPL clawback feature? How it works and why it exists for regulatory compliance.",
    url: "https://allaboutxrp.com/learn/xrpl-clawback-feature",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRPL Clawback Feature | AllAboutXRP",
    description: "XRPL clawback explained — compliance feature for token issuers.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-clawback-feature" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRPL Clawback Feature Explained: What It Means",
    description: "Complete guide to the XRPL clawback feature — how token issuers can recover issued tokens for regulatory compliance, fraud prevention, and error correction.",
    url: "https://allaboutxrp.com/learn/xrpl-clawback-feature",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRPL Clawback Feature" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-clawback-feature" }),
  buildFAQSchema([
    { question: "What is the XRPL clawback feature?", answer: "Clawback allows token issuers on the XRPL to recover (claw back) tokens they've issued from holders' accounts. It's an opt-in feature — issuers must enable it on their account before issuing tokens. It cannot be applied to XRP itself, only to issued tokens on trust lines." },
    { question: "Can someone clawback my XRP?", answer: "No. Clawback only applies to issued tokens (tokens held via trust lines), not to native XRP. No one can clawback, freeze, or seize your XRP. Only the issuer of a specific token can clawback that token, and only if they enabled the feature before issuance." },
    { question: "Why does the XRPL need clawback?", answer: "Clawback enables regulatory compliance for real-world asset tokenization. Regulated entities (banks, stablecoin issuers) need the ability to recover tokens in cases of fraud, court orders, sanctions compliance, or erroneous transactions — requirements that exist in traditional finance." },
    { question: "Is clawback mandatory?", answer: "No. Clawback is entirely opt-in. Token issuers must explicitly enable the lsfAllowTrustLineClawback flag on their account. Once enabled, it cannot be disabled. Tokens from issuers who haven't enabled it cannot be clawed back." },
    { question: "How does clawback affect decentralization?", answer: "Clawback is a deliberate trade-off. For fully decentralized tokens, issuers simply don't enable it. For regulated assets (stablecoins, securities tokens), clawback provides the compliance tools needed for institutional adoption — without affecting the rest of the XRPL." },
  ]),
];

const faqItems = [
  { q: "What is the XRPL clawback feature?", a: "Clawback lets token issuers recover tokens they've issued from holders' accounts. It's opt-in — issuers must enable it before issuing. It only applies to issued tokens on trust lines, never to native XRP." },
  { q: "Can someone clawback my XRP?", a: "No. Clawback only applies to issued tokens, not native XRP. No entity can clawback, freeze, or seize your XRP holdings." },
  { q: "Why does the XRPL need clawback?", a: "For regulatory compliance in real-world asset tokenization. Banks and stablecoin issuers need to recover tokens in cases of fraud, court orders, or sanctions — requirements from traditional finance." },
  { q: "Is clawback mandatory?", a: "No — entirely opt-in. Issuers must explicitly enable the flag. Once enabled, it can't be disabled. Tokens without it enabled can never be clawed back." },
  { q: "How does clawback affect decentralization?", a: "It's a deliberate trade-off. Decentralized tokens don't enable it. Regulated assets (stablecoins, securities) use it for compliance. It doesn't affect the rest of the XRPL." },
  { q: "Does RLUSD use clawback?", a: "RLUSD, as a regulated stablecoin issued by Ripple under NYDFS supervision, has compliance tools including the ability to freeze and potentially clawback tokens as required by its regulatory framework." },
];

export default function XRPLClawbackFeaturePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRPL Clawback Feature:"
          titleAccent="What It Means"
          subtitle="Clawback gives token issuers the ability to recover issued tokens — a controversial but critical feature for institutional adoption. Here's the full picture."
          breadcrumbLabel="XRPL Clawback Feature"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Clawback lets token issuers recover issued tokens from holders — for compliance, fraud prevention, or error correction. It&apos;s <strong className="text-text-primary">opt-in</strong> and only applies to issued tokens, <strong className="text-text-primary">never to native XRP</strong>. It enables regulated institutions to tokenize assets on the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> while meeting regulatory requirements.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Applies To", value: "Issued tokens only (not XRP)" },
          { label: "Opt-in?", value: "Yes — issuer must enable before issuance" },
          { label: "Reversible?", value: "No — once enabled, cannot be disabled" },
          { label: "Amendment", value: "XLS-39d (Clawback)" },
          { label: "Purpose", value: "Regulatory compliance, fraud recovery" },
        ]} />

        <SectionNav items={[
          { id: "what-is-clawback", label: "What Is It?" },
          { id: "how-it-works", label: "How It Works" },
          { id: "why-it-exists", label: "Why It Exists" },
          { id: "impact", label: "Impact on Users" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Affects XRP?" value="No" delay={0} />
          <StatPill label="Opt-in?" value="Yes" delay={0.06} />
          <StatPill label="For" value="Compliance" delay={0.12} />
          <StatPill label="Irreversible?" value="Yes" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what-is-clawback">
            <h2 className="text-2xl font-bold text-text-primary">What Is the Clawback Feature?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">clawback feature</strong> allows token issuers on the XRPL to recover tokens they&apos;ve issued to other accounts. When an issuer claws back tokens, those tokens are returned to the issuer and effectively removed from the holder&apos;s balance.
            </p>
            <div className="mt-6">
              <HighlightBox title="Critical Distinction" variant="accent">
                <p>Clawback <strong className="text-text-primary">only applies to issued tokens</strong> held via <Link href="/learn/xrpl-trust-lines-explained" className="text-xrp-accent underline decoration-xrp-accent/30">trust lines</Link>. <strong className="text-text-primary">Native XRP cannot be clawed back by anyone</strong> — not Ripple, not validators, not any entity. Your XRP is always fully under your control.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="how-it-works" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Clawback Works</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "1. Issuer Enables Clawback", desc: "Before issuing any tokens, the issuer sets the lsfAllowTrustLineClawback flag on their account. This is a one-time, irreversible action." },
                { title: "2. Tokens Are Issued Normally", desc: "The issuer creates trust lines and distributes tokens as usual. Holders can trade, transfer, and use them." },
                { title: "3. Clawback When Needed", desc: "If necessary, the issuer submits a Clawback transaction specifying the account and amount to recover." },
                { title: "4. Tokens Return to Issuer", desc: "The specified tokens are removed from the holder's balance and returned to the issuer." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="why-it-exists" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why Clawback Exists</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Regulatory Compliance", desc: "Banks and financial institutions are legally required to be able to recover funds in cases of fraud, sanctions, or court orders." },
                { title: "Stablecoin Requirements", desc: "Stablecoin issuers (like RLUSD) may need to freeze or recover tokens to maintain regulatory approval (NYDFS, etc.)." },
                { title: "Real-World Asset Tokenization", desc: "Tokenized securities, real estate, and bonds often have legal requirements for issuer control in certain circumstances." },
                { title: "Error Correction", desc: "If tokens are sent to the wrong address or in incorrect amounts, issuers can correct the error." },
                { title: "Fraud Prevention", desc: "If an account is compromised and tokens are stolen, the issuer can recover them." },
                { title: "Institutional Adoption", desc: "Without compliance features, regulated institutions cannot use the XRPL for tokenization — clawback enables this." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Impact on Users</h2>
            <div className="mt-6">
              <DataTable
                headers={["Scenario", "Impact"]}
                rows={[
                  ["Holding native XRP", "No impact — XRP cannot be clawed back"],
                  ["Holding tokens without clawback", "No impact — feature not enabled by issuer"],
                  ["Holding tokens with clawback", "Issuer could theoretically recover tokens"],
                  ["Trading on XRPL DEX", "No impact on XRP trading"],
                  ["Using RLUSD", "Subject to Ripple's compliance framework"],
                ]}
                highlightCol={1}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="Practical Perspective" variant="info">
                <p>For most users, clawback is invisible. It primarily matters for institutional use cases. If you&apos;re holding XRP or tokens from issuers who haven&apos;t enabled clawback, it has zero effect on you.</p>
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
              { href: "/learn/xrpl-trust-lines-explained", label: "Trust Lines", desc: "How XRPL tokens work" },
              { href: "/learn/xrpl-multi-purpose-tokens", label: "Multi-Purpose Tokens", desc: "Next-gen XRPL tokens" },
              { href: "/learn/rlusd", label: "RLUSD Stablecoin", desc: "Ripple's stablecoin" },
              { href: "/learn/xrp-real-world-assets", label: "RWA on XRPL", desc: "Tokenized assets" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "XRPL fundamentals" },
              { href: "/learn/xrpl-credentials-did", label: "XRPL Credentials", desc: "Decentralized identity" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Understand the XRP Ledger"
          description="Clawback is just one feature of the XRPL's compliance toolkit. Learn more about how the ledger works."
          primaryHref="/learn/xrp-ledger-explained"
          primaryLabel="XRP Ledger Explained →"
          secondaryHref="/learn/xrpl-trust-lines-explained"
          secondaryLabel="Trust Lines Guide"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, XLS-39d specification.</em>
        </p>
      </div>
    </>
  );
}

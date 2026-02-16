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
  title: "XRPL Consensus Mechanism: How XRP Achieves Agreement | AllAboutXRP",
  description: "How the XRPL consensus mechanism works. Federated Byzantine Agreement, UNL, validators, and comparison to PoW/PoS.",
  keywords: ["XRPL consensus","XRP consensus mechanism","XRPL Byzantine agreement","XRPL validators"],
  openGraph: {
    title: "XRPL Consensus Mechanism: How XRP Achieves Agreement",
    description: "How the XRPL consensus mechanism works. Federated Byzantine Agreement, UNL, validators, and comparison to PoW/PoS.",
    url: "https://allaboutxrp.com/learn/xrpl-consensus-mechanism",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRPL Consensus Mechanism: How XRP Achieves Agreement", description: "How the XRPL consensus mechanism works. Federated Byzantine Agreement, UNL, validators, and comparison to PoW/PoS." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-consensus-mechanism" },
};

const schemas = [
  buildArticleSchema({ headline: "XRPL Consensus Mechanism: How XRP Achieves Agreement", description: "How the XRPL consensus mechanism works. Federated Byzantine Agreement, UNL, validators, and comparison to PoW/PoS.", url: "https://allaboutxrp.com/learn/xrpl-consensus-mechanism", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRPL Consensus Mechanism" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-consensus-mechanism" }),
  buildFAQSchema([
    { question: "How does XRPL consensus work?", answer: "Trusted validators propose, vote, and reach 80%+ supermajority agreement on transactions every 3-5 seconds." },
    { question: "Is it secure?", answer: "Yes. 10+ years of operation without a security breach. Byzantine fault tolerant up to 20% malicious validators." },
    { question: "Why no mining or staking?", answer: "The consensus mechanism doesn't need them. Validators cooperate rather than compete, eliminating waste." },
    { question: "Is the XRPL decentralized?", answer: "Increasingly so. 100+ validators on the default UNL run by diverse organizations worldwide." },
    { question: "What is absolute finality?", answer: "Once a transaction is confirmed, it's final. No chance of reversal. Unlike Bitcoin where deep reorganizations are theoretically possible." },
  ]),
];

const faqItems = [
  { q: "How does XRPL consensus work?", a: "Trusted validators propose, vote, and reach 80%+ supermajority agreement on transactions every 3-5 seconds." },
  { q: "Is it secure?", a: "Yes. 10+ years of operation without a security breach. Byzantine fault tolerant up to 20% malicious validators." },
  { q: "Why no mining or staking?", a: "The consensus mechanism doesn't need them. Validators cooperate rather than compete, eliminating waste." },
  { q: "Is the XRPL decentralized?", a: "Increasingly so. 100+ validators on the default UNL run by diverse organizations worldwide." },
  { q: "What is absolute finality?", a: "Once a transaction is confirmed, it's final. No chance of reversal. Unlike Bitcoin where deep reorganizations are theoretically possible." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRPL Consensus Mechanism" titleAccent="How XRP Achieves Agreement" subtitle="The XRP Ledger uses a unique Federated Byzantine Agreement — not proof-of-work or proof-of-stake. Here's how it works." breadcrumbLabel="XRPL Consensus Mechanism">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>The XRPL uses <strong className="text-text-primary">Federated Byzantine Agreement (FBA)</strong> — a consensus mechanism where trusted <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">validators</Link> agree on transactions within 3-5 seconds. No mining, no staking, no energy waste. It achieves <strong className="text-text-primary">absolute finality</strong> (no forks) while being orders of magnitude more efficient than Bitcoin or Ethereum.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Type", value: "Federated Byzantine Agreement" },
          { label: "Speed", value: "3-5 seconds" },
          { label: "Validators", value: "100+ on default UNL" },
          { label: "Energy", value: "Negligible" },
          { label: "Staking", value: "Not required" },
          { label: "Finality", value: "Absolute (no forks)" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "how", label: "How It Works" },
          { id: "unl", label: "UNL" },
          { id: "vs-pow-pos", label: "vs PoW/PoS" },
          { id: "tradeoffs", label: "Tradeoffs" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Type" value="FBA" delay={0.00} />
          <StatPill label="Speed" value="3-5s" delay={0.06} />
          <StatPill label="Energy" value="~0" delay={0.12} />
          <StatPill label="Finality" value="Absolute" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">What Is the XRPL Consensus?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Unlike Bitcoin (proof-of-work) or Ethereum (proof-of-stake), the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> uses <strong className="text-text-primary">Federated Byzantine Agreement</strong>. Validators reach consensus without competition or staking — they simply agree on which transactions are valid.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"No Mining",desc:"No computational puzzles. Validators don't compete — they cooperate."},
              {title:"No Staking",desc:"Validators don't lock up tokens. No staking rewards or slashing."},
              {title:"Absolute Finality",desc:"Once confirmed, transactions are final. No chance of reversal or forks."},
              {title:"Negligible Energy",desc:"Entire XRPL uses less energy than a few lightbulbs."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How It Works</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Transactions submitted",desc:"Users submit transactions to the network. Validators collect them into proposed transaction sets."},
              {title:"2. Proposals shared",desc:"Validators share their proposed sets with their trusted peers (UNL members)."},
              {title:"3. Voting rounds",desc:"Multiple rounds of voting occur. Validators adjust their proposals based on peer agreement."},
              {title:"4. Supermajority reached",desc:"When 80%+ of trusted validators agree on a transaction set, it's confirmed."},
              {title:"5. Ledger closes",desc:"The new ledger version is published. All agreed transactions are final. Cycle repeats in 3-5 seconds."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="unl" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Unique Node List (UNL)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Each validator maintains a <strong className="text-text-primary">Unique Node List (UNL)</strong> — validators it trusts. The default UNL includes 100+ <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">validators</Link> run by universities, exchanges, and independent operators.</p>
            <div className="mt-6"><HighlightBox title="Trust, Not Competition" variant="accent"><p>Validators don&apos;t need to trust ALL other validators — just enough that their UNLs overlap sufficiently. This creates consensus without requiring global agreement from every node.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="vs-pow-pos" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">vs Proof-of-Work &amp; Proof-of-Stake</h2>
            <div className="mt-6"><DataTable headers={["Feature","XRPL (FBA)","Bitcoin (PoW)","Ethereum (PoS)"]} rows={[
              ["Speed","3-5 seconds","10+ minutes","12+ seconds"],
              ["Energy","Negligible","Massive","Low-moderate"],
              ["Finality","Absolute","Probabilistic","Probabilistic"],
              ["Staking Required","No","N/A","Yes (32 ETH)"],
              ["Fork Risk","None","Possible","Possible"],
              ["Validator Cost","Low (any server)","High (ASICs)","High (32 ETH)"],
            ]} highlightCol={1} /></div>
          </RevealSection>
          <RevealSection id="tradeoffs" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tradeoffs</h2>
            <div className="mt-6"><IconList items={[
              {title:"Speed & efficiency",desc:"Massive advantage — 3-5 sec, near-zero energy, absolute finality."},
              {title:"Decentralization debate",desc:"Critics argue UNL-based trust is less decentralized than PoW. See our decentralization analysis."},
              {title:"Validator incentives",desc:"No block rewards. Validators run for ecosystem benefit, not profit. Both strength and limitation."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How XRPL works" },
              { href: "/learn/xrpl-validators", label: "XRPL Validators", desc: "Network consensus nodes" },
              { href: "/learn/xrpl-decentralization", label: "XRPL Decentralization", desc: "Centralization debate" },
              { href: "/learn/xrpl-sidechains", label: "XRPL Sidechains", desc: "EVM sidechain & scaling" },
              { href: "/learn/xrpl-payment-channels", label: "Payment Channels", desc: "Off-ledger micropayments" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide to XRP" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Technology explained simply" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Understand the XRPL" description="Consensus is the foundation. Explore the full technology stack." primaryHref="/learn/xrp-ledger-explained" primaryLabel="XRPL Guide →" secondaryHref="/learn/xrpl-validators" secondaryLabel="Validators" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

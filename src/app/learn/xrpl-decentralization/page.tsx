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
  title: "XRPL Decentralization: Centralization Debate Answered | AllAboutXRP",
  description: "XRPL decentralization analysis. Validator distribution, Ripple's role, UNL governance, and how the network is becoming more decentralized.",
  keywords: ["XRPL decentralization","is XRP centralized","XRP decentralized","XRPL validators centralization"],
  openGraph: {
    title: "XRPL Decentralization: Centralization Debate Answered",
    description: "XRPL decentralization analysis. Validator distribution, Ripple's role, UNL governance, and how the network is becoming more decentralized.",
    url: "https://allaboutxrp.com/learn/xrpl-decentralization",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRPL Decentralization: Centralization Debate Answered", description: "XRPL decentralization analysis. Validator distribution, Ripple's role, UNL governance, and how the network is becoming more decentralized." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-decentralization" },
};

const schemas = [
  buildArticleSchema({ headline: "XRPL Decentralization: Centralization Debate Answered", description: "XRPL decentralization analysis. Validator distribution, Ripple's role, UNL governance, and how the network is becoming more decentralized.", url: "https://allaboutxrp.com/learn/xrpl-decentralization", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRPL Decentralization" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-decentralization" }),
  buildFAQSchema([
    { question: "Is XRP centralized?", answer: "No. 100+ independent validators, Ripple runs ~4%. No single entity controls the network. But it's a spectrum." },
    { question: "Can Ripple control the XRPL?", answer: "No. Ripple runs ~4% of validators and can't push changes without 80% validator approval." },
    { question: "How does XRPL compare to Ethereum?", answer: "Ethereum PoS has ~500k validators but most stake through a few providers (Lido, Coinbase). Effective centralization is comparable." },
    { question: "What if Ripple disappeared?", answer: "The XRPL would continue operating. It's run by independent validators, not Ripple servers." },
    { question: "Is decentralization improving?", answer: "Yes. More independent validators, UNL publishers, and geographic diversity over time." },
  ]),
];

const faqItems = [
  { q: "Is XRP centralized?", a: "No. 100+ independent validators, Ripple runs ~4%. No single entity controls the network. But it's a spectrum." },
  { q: "Can Ripple control the XRPL?", a: "No. Ripple runs ~4% of validators and can't push changes without 80% validator approval." },
  { q: "How does XRPL compare to Ethereum?", a: "Ethereum PoS has ~500k validators but most stake through a few providers (Lido, Coinbase). Effective centralization is comparable." },
  { q: "What if Ripple disappeared?", a: "The XRPL would continue operating. It's run by independent validators, not Ripple servers." },
  { q: "Is decentralization improving?", a: "Yes. More independent validators, UNL publishers, and geographic diversity over time." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRPL Decentralization" titleAccent="Centralization Debate Answered" subtitle="Is the XRP Ledger decentralized? An honest look at validator distribution, Ripple's influence, and the path forward." breadcrumbLabel="XRPL Decentralization">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>The XRPL decentralization question deserves an honest answer. The network has <strong className="text-text-primary">100+ validators on the default UNL</strong>, with Ripple running only ~4%. No single entity can halt or censor the network. While critics point to the <Link href="/learn/xrpl-consensus-mechanism" className="text-xrp-accent underline decoration-xrp-accent/30">UNL model</Link> as less decentralized than Bitcoin, the XRPL is <strong className="text-text-primary">more decentralized than most PoS chains</strong> and improving.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Default UNL", value: "100+ validators" },
          { label: "Ripple Validators", value: "~4% of UNL" },
          { label: "Operator Types", value: "Universities, exchanges, companies" },
          { label: "Governance", value: "No single entity controls" },
          { label: "Trend", value: "Increasingly decentralized" },
          { label: "Comparison", value: "More decentralized than most PoS" },
        ]} />

        <SectionNav items={[
          { id: "debate", label: "The Debate" },
          { id: "validators", label: "Validator Distribution" },
          { id: "ripple-role", label: "Ripple's Role" },
          { id: "governance", label: "Governance" },
          { id: "improving", label: "Improving" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Validators" value="100+" delay={0.00} />
          <StatPill label="Ripple" value="~4%" delay={0.06} />
          <StatPill label="Trend" value="Improving" delay={0.12} />
          <StatPill label="Control" value="None" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="debate">
            <h2 className="text-2xl font-bold text-text-primary">The Centralization Debate</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">&quot;XRP is centralized&quot; is one of the most common criticisms. Let&apos;s examine this honestly. Decentralization is a <strong className="text-text-primary">spectrum, not binary</strong>. No blockchain is perfectly decentralized — even Bitcoin has mining pool concentration.</p>
            <div className="mt-6"><HighlightBox title="Honest Assessment" variant="accent"><p>The XRPL is not as decentralized as Bitcoin&apos;s PoW (by some metrics), but it&apos;s significantly more decentralized than most PoS chains, all &quot;layer 2&quot; solutions, and virtually all corporate blockchain projects. And it&apos;s improving.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="validators" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Validator Distribution</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The default <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">UNL</Link> includes 100+ validators operated by diverse organizations worldwide:</p>
            <div className="mt-6"><DataTable headers={["Operator Type","Count","Examples"]} rows={[
              ["Universities","10+","MIT, UC Berkeley, University of Tokyo"],
              ["Exchanges","15+","Bitstamp, Bitso, Coinbase"],
              ["Ripple","5-6","~4% of UNL"],
              ["Companies","30+","Various tech and fintech firms"],
              ["Individuals","40+","Independent community operators"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="ripple-role" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Ripple&apos;s Role</h2>
            <div className="mt-6"><IconList items={[
              {title:"Validators: ~4%",desc:"Ripple runs 5-6 validators on the default UNL of 100+. Cannot control consensus."},
              {title:"UNL publisher",desc:"Ripple publishes a recommended UNL, but validators can choose any UNL they want."},
              {title:"Development",desc:"Ripple is the largest contributor to XRPL development but doesn't control the code."},
              {title:"XRP holdings",desc:"Ripple holds XRP but this doesn't give protocol control. See our escrow analysis."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="governance" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Governance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XRPL changes require <strong className="text-text-primary">80% validator approval via amendments</strong>. No single entity — including Ripple — can push changes unilaterally. This is similar to Bitcoin&apos;s BIP process.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Amendment System",desc:"Protocol changes proposed as amendments. Need 80% of validators to approve for 2 weeks."},
              {title:"Open Source",desc:"Anyone can propose amendments. Code is fully open source on GitHub."},
              {title:"No Admin Keys",desc:"No one has admin access to the XRPL. Not Ripple, not anyone."},
              {title:"Permissionless",desc:"Anyone can run a validator, submit transactions, or build on the XRPL."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="improving" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Improving Decentralization</h2>
            <div className="mt-6"><IconList items={[
              {title:"More independent validators",desc:"The number of non-Ripple validators has grown significantly over the years."},
              {title:"Multiple UNL publishers",desc:"Additional UNL publishers emerging, reducing reliance on Ripple's recommended list."},
              {title:"Geographic diversity",desc:"Validators spanning North America, Europe, Asia, and beyond."},
              {title:"Community governance",desc:"Increasing community participation in amendment proposals and governance decisions."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
            { href: "/learn/xrpl-consensus-mechanism", label: "Consensus", desc: "How it works" },
            { href: "/learn/xrpl-validators", label: "Validators", desc: "Who runs them" },
            { href: "/learn/xrp-ledger-explained", label: "XRP Ledger", desc: "Technology" },
            { href: "/learn/xrp-myths", label: "XRP Myths", desc: "Common misconceptions" },
            { href: "/learn/ripple-vs-xrp", label: "Ripple vs XRP", desc: "The distinction" },
            { href: "/learn/xrp-energy-consumption", label: "Energy", desc: "Environmental impact" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Understand the XRPL" description="Decentralization is one piece of the technology story." primaryHref="/learn/xrp-ledger-explained" primaryLabel="XRPL Guide →" secondaryHref="/learn/xrpl-consensus-mechanism" secondaryLabel="Consensus" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

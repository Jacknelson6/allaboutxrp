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
  title: "XRPL Payment Channels: Off-Ledger Scaling | AllAboutXRP",
  description: "XRPL payment channels explained. Off-ledger scaling, micropayments, streaming payments, and how they work.",
  keywords: ["XRPL payment channels","XRP micropayments","XRP streaming payments","XRPL scaling"],
  openGraph: {
    title: "XRPL Payment Channels: Off-Ledger Scaling",
    description: "XRPL payment channels explained. Off-ledger scaling, micropayments, streaming payments, and how they work.",
    url: "https://allaboutxrp.com/learn/xrpl-payment-channels",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRPL Payment Channels: Off-Ledger Scaling", description: "XRPL payment channels explained. Off-ledger scaling, micropayments, streaming payments, and how they work." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-payment-channels" },
};

const schemas = [
  buildArticleSchema({ headline: "XRPL Payment Channels: Off-Ledger Scaling", description: "XRPL payment channels explained. Off-ledger scaling, micropayments, streaming payments, and how they work.", url: "https://allaboutxrp.com/learn/xrpl-payment-channels", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRPL Payment Channels" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-payment-channels" }),
  buildFAQSchema([
    { question: "What are XRPL payment channels?", answer: "Off-ledger scaling that allows unlimited XRP transactions between two parties, settling only the final balance on-chain." },
    { question: "How fast are payment channel transactions?", answer: "Instant. No waiting for ledger closes since transactions happen off-chain between the two parties." },
    { question: "Are payment channels safe?", answer: "Yes. The sender's XRP is locked in the channel on-ledger. The receiver can always redeem the latest signed claim." },
    { question: "What happened to Coil?", answer: "Coil shut down in 2023, but the underlying payment channel and web monetization technology remains available." },
    { question: "Can anyone use payment channels?", answer: "Yes. They're a native XRPL feature. Any two parties can open a channel using standard XRPL transactions." },
  ]),
];

const faqItems = [
  { q: "What are XRPL payment channels?", a: "Off-ledger scaling that allows unlimited XRP transactions between two parties, settling only the final balance on-chain." },
  { q: "How fast are payment channel transactions?", a: "Instant. No waiting for ledger closes since transactions happen off-chain between the two parties." },
  { q: "Are payment channels safe?", a: "Yes. The sender's XRP is locked in the channel on-ledger. The receiver can always redeem the latest signed claim." },
  { q: "What happened to Coil?", a: "Coil shut down in 2023, but the underlying payment channel and web monetization technology remains available." },
  { q: "Can anyone use payment channels?", a: "Yes. They're a native XRPL feature. Any two parties can open a channel using standard XRPL transactions." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRPL Payment Channels" titleAccent="Off-Ledger Scaling" subtitle="Payment channels enable high-throughput, off-ledger XRP transactions for micropayments and streaming payments." breadcrumbLabel="XRPL Payment Channels">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Payment channels</strong> allow two parties to conduct unlimited XRP transactions <strong className="text-text-primary">off-ledger</strong>, only settling the final balance on-chain. This enables <strong className="text-text-primary">micropayments</strong> and <strong className="text-text-primary">streaming payments</strong> that would be impractical even with the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL&apos;s</Link> low fees.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Type", value: "Off-ledger transactions" },
          { label: "Speed", value: "Instant (no ledger wait)" },
          { label: "Cost", value: "Near-zero per payment" },
          { label: "Use Case", value: "Micropayments, streaming" },
          { label: "Settlement", value: "On-ledger when channel closes" },
          { label: "Throughput", value: "Unlimited off-chain" },
        ]} />

        <SectionNav items={[
          { id: "what", label: "What Are They" },
          { id: "how", label: "How They Work" },
          { id: "use-cases", label: "Use Cases" },
          { id: "coil", label: "Coil & Web Monetization" },
          { id: "comparison", label: "vs Lightning" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Speed" value="Instant" delay={0.00} />
          <StatPill label="Cost" value="~$0" delay={0.06} />
          <StatPill label="Throughput" value="Unlimited" delay={0.12} />
          <StatPill label="Type" value="Off-ledger" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Are Payment Channels?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Payment channels are a <strong className="text-text-primary">Layer 2 scaling solution</strong> built into the XRPL. They allow two parties to open a channel, conduct unlimited transactions off-chain, and settle the final balance on the ledger when done.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Off-Ledger Speed",desc:"No waiting for ledger closes. Transactions are instant between the two parties."},
              {title:"Unlimited Throughput",desc:"No per-transaction cost during the channel. Only pay when opening and closing."},
              {title:"Micropayments",desc:"Send fractions of a cent economically. Enable pay-per-use models."},
              {title:"Streaming",desc:"Continuous payment streams — pay per second, per byte, per API call."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How They Work</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Open channel",desc:"Sender creates a payment channel on-ledger, depositing XRP as collateral."},
              {title:"2. Send claims",desc:"Sender issues signed 'claims' to receiver off-chain. Each claim authorizes up to X amount of XRP."},
              {title:"3. Unlimited updates",desc:"Claims can be updated infinitely. Each new claim supersedes the previous. No ledger transactions needed."},
              {title:"4. Redeem",desc:"Receiver submits the latest claim to the ledger to collect payment."},
              {title:"5. Close channel",desc:"Either party can close. Final balance settled on-ledger. Remaining XRP returned to sender."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Use Cases</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Content Micropayments",desc:"Pay per article, per song, per video view. Replace ads with direct creator payments."},
              {title:"API Monetization",desc:"Pay per API call. No subscription needed — pay exactly for what you use."},
              {title:"IoT Payments",desc:"Machine-to-machine payments. Devices paying for resources in real-time."},
              {title:"Streaming Services",desc:"Pay per second of video or music streamed. True pay-as-you-go."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="coil" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Web Monetization &amp; Interledger</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Payment channels powered Coil&apos;s web monetization platform and are a key component of the <Link href="/learn/xrp-interledger-protocol" className="text-xrp-accent underline decoration-xrp-accent/30">Interledger Protocol (ILP)</Link>. While Coil shut down, the technology foundation remains for future web monetization projects.</p>
            <div className="mt-6"><HighlightBox title="Web Monetization Standard" variant="accent"><p>The W3C Web Monetization standard, originally powered by XRP payment channels via ILP, allows websites to receive streaming micropayments from visitors — an alternative to advertising.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="comparison" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">vs Bitcoin Lightning Network</h2>
            <div className="mt-6"><DataTable headers={["Feature","XRPL Channels","Lightning (BTC)"]} rows={[
              ["Base layer speed","3-5 seconds","10+ minutes"],
              ["Channel complexity","Simple (2 party)","Complex (routing)"],
              ["Routing","No routing needed","Multi-hop routing"],
              ["Open cost","Low","Higher (BTC fees)"],
              ["Use case","Micropayments","General payments"],
            ]} highlightCol={1} /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How XRPL works" },
              { href: "/learn/xrpl-consensus-mechanism", label: "XRPL Consensus", desc: "Byzantine agreement" },
              { href: "/learn/xrpl-validators", label: "XRPL Validators", desc: "Network consensus nodes" },
              { href: "/learn/xrpl-decentralization", label: "XRPL Decentralization", desc: "Centralization debate" },
              { href: "/learn/xrpl-sidechains", label: "XRPL Sidechains", desc: "EVM sidechain & scaling" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide to XRP" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Technology explained simply" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore XRPL Technology" description="Payment channels are one of many XRPL innovations." primaryHref="/learn/xrp-ledger-explained" primaryLabel="XRPL Guide →" secondaryHref="/learn/xrp-interledger-protocol" secondaryLabel="Interledger" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

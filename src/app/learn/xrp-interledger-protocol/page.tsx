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
  title: "XRP & the Interledger Protocol: Connecting All Payment Networks | AllAboutXRP",
  description: "Interledger Protocol explained. How ILP connects payment networks, its relationship to XRP, and web monetization.",
  keywords: ["Interledger Protocol","ILP XRP","Interledger","XRP cross-network payments"],
  openGraph: {
    title: "XRP & the Interledger Protocol: Connecting All Payment Networks",
    description: "Interledger Protocol explained. How ILP connects payment networks, its relationship to XRP, and web monetization.",
    url: "https://allaboutxrp.com/learn/xrp-interledger-protocol",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP & the Interledger Protocol: Connecting All Payment Networks", description: "Interledger Protocol explained. How ILP connects payment networks, its relationship to XRP, and web monetization." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-interledger-protocol" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP & the Interledger Protocol: Connecting All Payment Networks", description: "Interledger Protocol explained. How ILP connects payment networks, its relationship to XRP, and web monetization.", url: "https://allaboutxrp.com/learn/xrp-interledger-protocol", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP & the Interledger Protocol" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-interledger-protocol" }),
  buildFAQSchema([
    { question: "What is the Interledger Protocol?", answer: "An open protocol connecting different payment networks, created at Ripple and now a W3C standard. Like HTTP for payments." },
    { question: "Is ILP only for XRP?", answer: "No. ILP is ledger-agnostic — works with any payment system. But XRP is the ideal bridge currency due to speed and cost." },
    { question: "What happened to Coil?", answer: "Coil shut down in 2023, but the Web Monetization standard and ILP technology continue development." },
    { question: "How does ILP relate to ODL?", answer: "ODL uses ILP principles — XRP as bridge currency for instant cross-border settlement across different payment networks." },
    { question: "Is ILP still being developed?", answer: "Yes. The W3C community group and open-source community continue developing ILP specifications." },
  ]),
];

const faqItems = [
  { q: "What is the Interledger Protocol?", a: "An open protocol connecting different payment networks, created at Ripple and now a W3C standard. Like HTTP for payments." },
  { q: "Is ILP only for XRP?", a: "No. ILP is ledger-agnostic — works with any payment system. But XRP is the ideal bridge currency due to speed and cost." },
  { q: "What happened to Coil?", a: "Coil shut down in 2023, but the Web Monetization standard and ILP technology continue development." },
  { q: "How does ILP relate to ODL?", a: "ODL uses ILP principles — XRP as bridge currency for instant cross-border settlement across different payment networks." },
  { q: "Is ILP still being developed?", a: "Yes. The W3C community group and open-source community continue developing ILP specifications." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP & the Interledger Protocol" titleAccent="Connecting All Payment Networks" subtitle="The Interledger Protocol (ILP) enables payments across any ledger or network. Originally built at Ripple, now a W3C standard." breadcrumbLabel="XRP & the Interledger Protocol">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>The <strong className="text-text-primary">Interledger Protocol (ILP)</strong> is an open protocol for connecting different payment networks — like HTTP connects different computers. Created at Ripple in 2015, it&apos;s now a <strong className="text-text-primary">W3C standard</strong>. XRP serves as an ideal <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">bridge currency</Link> within ILP, enabling payments across any ledger, bank, or payment system.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Created By", value: "Ripple Labs (2015)" },
          { label: "Standard", value: "W3C Community Group" },
          { label: "Purpose", value: "Connect all payment networks" },
          { label: "XRP Role", value: "Ideal bridge currency" },
          { label: "Protocol", value: "Open, ledger-agnostic" },
          { label: "Status", value: "Active development" },
        ]} />

        <SectionNav items={[
          { id: "what", label: "What Is ILP" },
          { id: "how", label: "How It Works" },
          { id: "xrp-role", label: "XRP's Role" },
          { id: "web-mon", label: "Web Monetization" },
          { id: "future", label: "Future" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Created" value="2015" delay={0.00} />
          <StatPill label="Standard" value="W3C" delay={0.06} />
          <StatPill label="Type" value="Open" delay={0.12} />
          <StatPill label="Bridge" value="XRP" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Is the Interledger Protocol?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">ILP is to payments what <strong className="text-text-primary">HTTP is to information</strong> — an open protocol that connects different networks. Just as HTTP lets any computer talk to any other computer regardless of operating system, ILP lets any payment network transact with any other regardless of the underlying technology.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Ledger Agnostic",desc:"Works with any ledger: XRPL, Bitcoin, Ethereum, banks, mobile money, anything."},
              {title:"Packet-Based",desc:"Breaks payments into small packets routed across connectors. Like internet data packets."},
              {title:"No Single Point of Failure",desc:"Payments route around failures. If one path is down, another is found."},
              {title:"Open Standard",desc:"Anyone can implement ILP. No permission needed. W3C community group maintains specs."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How ILP Works</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Sender initiates",desc:"Alice wants to send $10 from her bank to Bob's mobile money wallet in Kenya."},
              {title:"2. Route discovery",desc:"ILP connectors find the cheapest path between Alice's bank and Bob's wallet."},
              {title:"3. Packet routing",desc:"The $10 is split into small packets routed through connectors across different networks."},
              {title:"4. Bridge currencies",desc:"XRP or other assets bridge between networks at each hop. Instant settlement."},
              {title:"5. Bob receives",desc:"Bob gets the equivalent in his local currency. The whole process takes seconds."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="xrp-role" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s Role in ILP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">While ILP is ledger-agnostic, XRP is the <strong className="text-text-primary">ideal bridge currency</strong> for ILP payments: 3-5 second settlement, near-zero fees, and deep liquidity. <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link> uses this exact approach.</p>
            <div className="mt-6"><HighlightBox title="Why XRP?" variant="accent"><p>ILP connectors need a bridge asset that settles fast, costs little, and has liquidity. XRP is purpose-built for this. The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL&apos;s</Link> 3-5 second finality means connectors have minimal capital risk during transfers.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="web-mon" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Web Monetization</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">ILP powered Coil&apos;s web monetization platform, enabling <Link href="/learn/xrpl-payment-channels" className="text-xrp-accent underline decoration-xrp-accent/30">streaming micropayments</Link> to content creators. While Coil shut down, the Web Monetization standard (W3C) continues development.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"W3C Standard",desc:"Web Monetization is an official W3C standard for streaming payments to websites."},
              {title:"Alternative to Ads",desc:"Content creators receive direct micropayments instead of relying on advertising."},
              {title:"ILP Backbone",desc:"Uses ILP for routing payments across different ledgers and payment systems."},
              {title:"Future Potential",desc:"Could enable a new internet economy where content is paid for directly."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="future" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Future of ILP</h2>
            <div className="mt-6"><IconList items={[
              {title:"CBDC interoperability",desc:"ILP could connect different countries' CBDCs, enabling seamless cross-border CBDC payments."},
              {title:"DeFi connectivity",desc:"Bridge different DeFi ecosystems across blockchains via ILP."},
              {title:"Financial inclusion",desc:"Connect unbanked populations to the global financial system via mobile money + ILP."},
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

        <LearnCTA title="Explore XRP Technology" description="ILP is part of XRP's vision for connecting all payment networks." primaryHref="/learn/cross-border-payments" primaryLabel="Payments →" secondaryHref="/learn/xrp-use-cases" secondaryLabel="Use Cases" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

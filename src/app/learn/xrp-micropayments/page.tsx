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
  title: "XRP for Micropayments: Why XRP Was Built for Small Payments | AllAboutXRP",
  description: "Why XRP is the ideal micropayment currency. Sub-cent fees, 3-second settlement, and use cases from content tipping to IoT.",
  keywords: ["XRP micropayments","XRP small payments","XRP micro transactions","IoT payments XRP"],
  openGraph: { title: "XRP for Micropayments: Why XRP Was Built for Small Payments", description: "Why XRP is the ideal micropayment currency. Sub-cent fees, 3-second settlement, and use cases from content tipping to IoT.", url: "https://allaboutxrp.com/learn/xrp-micropayments", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP for Micropayments: Why XRP Was Built for Small Payments", description: "Why XRP is the ideal micropayment currency. Sub-cent fees, 3-second settlement, and use cases from content tipping to IoT." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-micropayments" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP for Micropayments: Why XRP Was Built for Small Payments", description: "Why XRP is the ideal micropayment currency. Sub-cent fees, 3-second settlement, and use cases from content tipping to IoT.", url: "https://allaboutxrp.com/learn/xrp-micropayments", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP Micropayments" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-micropayments" }),
  buildFAQSchema([
    { question: "Why is XRP good for micropayments?", answer: "~$0.0001 fee and 3-second settlement. No other major crypto matches this for small payment efficiency." },
    { question: "What is a 'drop'?", answer: "The smallest unit of XRP: 0.000001 XRP. You can send amounts this small." },
    { question: "IoT payments with XRP?", answer: "Machines can pay each other in real-time using XRP. Low fees make per-use billing viable." },
    { question: "Streaming payments?", answer: "Payment Channels on XRPL enable per-second streaming payments off-ledger with on-chain settlement." },
    { question: "How does this compare to Lightning Network?", answer: "XRP micropayments are simpler (no channel management) with similar speed. Bitcoin Lightning requires channel setup." },
  ]),
];

const faqItems = [
  { q: "Why is XRP good for micropayments?", a: "~$0.0001 fee and 3-second settlement. No other major crypto matches this for small payment efficiency." },
  { q: "What is a 'drop'?", a: "The smallest unit of XRP: 0.000001 XRP. You can send amounts this small." },
  { q: "IoT payments with XRP?", a: "Machines can pay each other in real-time using XRP. Low fees make per-use billing viable." },
  { q: "Streaming payments?", a: "Payment Channels on XRPL enable per-second streaming payments off-ledger with on-chain settlement." },
  { q: "How does this compare to Lightning Network?", a: "XRP micropayments are simpler (no channel management) with similar speed. Bitcoin Lightning requires channel setup." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP for Micropayments" titleAccent="Why XRP Was Built for Small Payments" subtitle="Sub-cent fees, 3-second settlement, and real-world use cases from content tipping to IoT." breadcrumbLabel="XRP Micropayments">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>XRP transactions cost ~$0.0001 and settle in 3-5 seconds — making it ideal for micropayments. Use cases: content tipping, IoT machine-to-machine payments, streaming payments, and API monetization.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Tx Cost", value: "~$0.0001" },
          { label: "Speed", value: "3-5 seconds" },
          { label: "Use Cases", value: "Tipping, IoT, APIs" },
          { label: "Scalability", value: "1,500+ TPS" },
          { label: "Min Amount", value: "0.000001 XRP" },
          { label: "Settlement", value: "Final" },
        ]} />

        <SectionNav items={[
          { id: "why", label: "Why XRP?" },
          { id: "cases", label: "Use Cases" },
          { id: "iot", label: "IoT" },
          { id: "streaming", label: "Streaming" },
          { id: "future", label: "Future" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Cost" value="$0.0001" delay={0.00} />
          <StatPill label="Speed" value="3 sec" delay={0.06} />
          <StatPill label="TPS" value="1,500+" delay={0.12} />
          <StatPill label="Min" value="1 drop" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="why">
            <h2 className="text-2xl font-bold text-text-primary">Why XRP for Micropayments?</h2>
            <div className="mt-6"><FeatureGrid columns={3} items={[
              {title:"~$0.0001 Fee",desc:"Send a penny and it costs a fraction of a cent."},
              {title:"3-Second Settlement",desc:"Final settlement, not confirmations. Done in seconds."},
              {title:"1,500+ TPS",desc:"Handles volume. No congestion spikes."},
            ]} /></div>
          </RevealSection>

          <RevealSection id="cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Use Cases</h2>
            <div className="mt-6"><IconList items={[
              {title:"Content Tipping",desc:"Tip creators fractions of a cent per view/like. Viable only with XRP-level fees."},
              {title:"API Monetization",desc:"Pay per API call instead of monthly subscriptions."},
              {title:"Gaming Rewards",desc:"Micro XRP rewards for in-game achievements."},
              {title:"Digital Paywalls",desc:"Pay $0.01 to read an article instead of $10/month subscription."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="iot" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">IoT Machine Payments</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Machines paying machines in real-time: electric vehicles paying charging stations per kWh, sensors paying for data, devices paying for bandwidth. Only viable with near-zero fees.</p>
          </RevealSection>

          <RevealSection id="streaming" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Streaming Payments</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XRPL Payment Channels enable per-second streaming payments. Pay for a video call by the second, music by the minute. <Link href="/learn/what-is-xrp-ledger" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL&apos;s architecture</Link> makes this possible.</p>
          </RevealSection>

          <RevealSection id="future" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Future of Micropayments</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">As <Link href="/learn/xrp-developer-resources" className="text-xrp-accent underline decoration-xrp-accent/30">developer tools</Link> mature, micropayment use cases will expand dramatically. XRP is uniquely positioned for this future.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp-ledger", label: "XRP Ledger", desc: "XRPL basics" },
              { href: "/learn/xrpl-gaming", label: "XRPL Gaming", desc: "Game payments" },
              { href: "/learn/xrp-insurance-use-cases", label: "Insurance", desc: "Blockchain claims" },
              { href: "/learn/xrp-developer-resources", label: "Dev Resources", desc: "Build with XRP" },
              { href: "/learn/xrpl-nft-marketplaces", label: "NFT Markets", desc: "XRPL NFTs" },
              { href: "/learn/xrp-community-explained", label: "XRP Community", desc: "The XRP Army" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore XRP Utility" description="XRP's micropayment capability is a key differentiator." primaryHref="/learn/what-is-xrp-ledger" primaryLabel="Learn XRPL →" secondaryHref="/learn/xrp-developer-resources" secondaryLabel="Dev Resources" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

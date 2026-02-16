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

const slug = "xrp-us-regulation";
const title = "XRP US Regulation: Federal & State Rules (2026)";
const description = "XRP's regulatory status in the United States. Federal classification, state-by-state rules, and what the SEC settlement means.";
const url = `https://allaboutxrp.com/learn/${slug}`;
const dp = "2026-02-15";

export const metadata: Metadata = {
  title, description,
  openGraph: { title: `${title} | AllAboutXRP`, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

const schemas = [
  buildArticleSchema({ headline: title, description, url, datePublished: dp, dateModified: dp }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "US Regulation" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "Is XRP legal in the United States?", answer: "Yes. XRP is fully legal to buy, sell, hold, and trade in the United States. The SEC vs Ripple settlement confirmed that XRP is not a security when traded on exchanges." },
    { question: "How is XRP classified in the US?", answer: "XRP is classified as a digital commodity/currency for exchange trading purposes, not as a security. It is subject to FinCEN regulations for anti-money laundering and IRS rules for tax reporting." },
    { question: "Can I buy XRP in every US state?", answer: "XRP is available in most US states through major exchanges. Some states have additional crypto licensing requirements (like New York's BitLicense) that may limit which exchanges operate there." },
    { question: "Do I need to pay taxes on XRP in the US?", answer: "Yes. The IRS treats cryptocurrency as property. You owe capital gains tax when you sell XRP for a profit, and you must report all crypto transactions on your tax return." },
    { question: "What US agencies regulate XRP?", answer: "Multiple agencies oversee different aspects: FinCEN (anti-money laundering), IRS (taxation), CFTC (commodity oversight), state regulators (exchange licensing), and the SEC has limited jurisdiction over primary issuance." },
  ]),
];

const faqItems = [
  { q: "Is XRP legal in the US?", a: "Yes. XRP is fully legal in the United States. You can buy, sell, hold, trade, and transfer XRP freely. The SEC settlement confirmed XRP is not a security on exchanges." },
  { q: "How is XRP taxed in the US?", a: "The IRS treats crypto as property. Short-term gains (held <1 year) are taxed as ordinary income. Long-term gains (held >1 year) get preferential rates of 0%, 15%, or 20% depending on income. You must report all transactions." },
  { q: "Which exchanges offer XRP in the US?", a: "All major US exchanges offer XRP, including Coinbase, Kraken, Gemini, Uphold, Robinhood, and many others. Availability in specific states depends on the exchange's state licenses." },
  { q: "What about New York?", a: "New York requires exchanges to hold a BitLicense. Not all exchanges have one, so XRP availability may be limited to specific platforms in NY. Coinbase and Gemini both operate in New York." },
  { q: "Do I need to report XRP holdings?", a: "You must report all crypto transactions on your tax return. Starting in 2026, exchanges also report transactions to the IRS via Form 1099-DA. Holding XRP without selling doesn't trigger a taxable event." },
  { q: "What about the CLARITY Act?", a: "The CLARITY Act would codify XRP's commodity classification into federal law, providing even stronger legal protection. It's progressing through Congress and has strong bipartisan support." },
];

export default function XRPUSRegulationPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP"
          titleAccent="US Regulation"
          subtitle="Everything you need to know about XRP's regulatory status in the United States — federal classification, state rules, tax treatment, and what the SEC settlement means for you."
          breadcrumbLabel="US Regulation"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>XRP is <strong className="text-text-primary">fully legal in the United States</strong>. The <Link href="/learn/xrp-sec-settlement" className="text-xrp-accent underline decoration-xrp-accent/30">SEC settlement</Link> confirmed it&apos;s not a security on exchanges. You can buy, sell, and hold XRP on all major US platforms. The IRS taxes it as property, and the <Link href="/learn/xrp-clarity-act" className="text-xrp-accent underline decoration-xrp-accent/30">CLARITY Act</Link> is moving to codify these protections into law.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Legal Status", value: "Fully legal to buy, sell, hold, trade" },
          { label: "Classification", value: "Digital commodity/currency (not a security)" },
          { label: "Tax Treatment", value: "Property — capital gains rules apply" },
          { label: "Available On", value: "Coinbase, Kraken, Gemini, Robinhood, more" },
          { label: "Regulators", value: "FinCEN, IRS, CFTC, state agencies" },
          { label: "Upcoming Legislation", value: "CLARITY Act progressing" },
        ]} />

        <SectionNav items={[
          { id: "federal", label: "Federal" },
          { id: "state", label: "State Rules" },
          { id: "tax", label: "Taxes" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="federal">
            <h2 className="text-2xl font-bold text-text-primary">Federal Regulation</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "SEC (Limited)", desc: "The SEC settlement established XRP is not a security on exchanges. SEC retains jurisdiction over primary token issuance only." },
                { title: "CFTC", desc: "The CFTC treats XRP as a digital commodity. The CLARITY Act would formalize CFTC oversight for spot markets." },
                { title: "FinCEN", desc: "XRP exchanges must comply with BSA/AML regulations. KYC requirements apply to all US exchange accounts." },
                { title: "IRS", desc: "Cryptocurrency is taxed as property. All gains, losses, and transactions must be reported on your tax return." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="state" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">State-Level Rules</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Crypto regulation varies by state. Most states allow XRP trading through licensed exchanges, but some have additional requirements:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["State", "Status", "Notes"]}
                rows={[
                  ["New York", "BitLicense Required", "Exchanges need NY BitLicense to operate"],
                  ["California", "Open", "Major exchanges fully available"],
                  ["Texas", "Open", "Crypto-friendly regulatory environment"],
                  ["Florida", "Open", "Active crypto market, minimal restrictions"],
                  ["Wyoming", "Crypto-Friendly", "DAO recognition, special purpose banks"],
                  ["Hawaii", "Evolving", "Previously restrictive, now opening up"],
                ]}
              />
            </div>
          </RevealSection>

          <RevealSection id="tax" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tax Treatment</h2>
            <div className="mt-5">
              <HighlightBox title="XRP Tax Rules" variant="info">
                <p>The IRS treats XRP as property. Selling XRP at a profit triggers capital gains tax. Holding for over a year qualifies for long-term rates (0-20%). Receiving XRP (airdrops, payments) is taxable income. See our <Link href="/learn/xrp-tax-guide" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Tax Guide</Link> for details.</p>
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
              { href: "/learn/xrp-sec-settlement", label: "SEC Settlement", desc: "Final outcome" },
              { href: "/learn/xrp-clarity-act", label: "CLARITY Act", desc: "Upcoming legislation" },
              { href: "/learn/xrp-tax-guide", label: "XRP Tax Guide", desc: "Complete tax rules" },
              { href: "/learn/is-xrp-a-security", label: "Is XRP a Security?", desc: "Legal classification" },
              { href: "/learn/crypto-regulation-xrp-impact", label: "Regulation Impact", desc: "How rules affect XRP" },
              { href: "/learn/xrp-howey-test", label: "Howey Test", desc: "Legal test explained" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="XRP Is Legal and Regulated"
          description="Clear legal status. Clear tax rules. XRP is ready for mainstream US adoption."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/xrp-tax-guide"
          secondaryLabel="Tax Guide"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial or legal advice.</em>
        </p>
      </div>
    </>
  );
}

import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

const slug = "xrp-sec-settlement";
const title = "SEC vs Ripple Settlement Explained: The Final Outcome";
const description = "The final SEC vs Ripple settlement breakdown — fine amount, terms, what was admitted, and the lasting impact on crypto regulation.";
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
    { name: "SEC Settlement" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "What was the SEC vs Ripple settlement?", answer: "The SEC vs Ripple case ended with a settlement that included a reduced fine for Ripple's institutional XRP sales. Crucially, XRP's status as a non-security on secondary markets was preserved." },
    { question: "How much did Ripple pay?", answer: "Ripple paid a significantly reduced fine compared to the SEC's original demands. The final amount was a fraction of the $2 billion the SEC initially sought." },
    { question: "Did Ripple admit XRP is a security?", answer: "No. Ripple did not admit that XRP is a security. The settlement preserved the court's ruling that XRP sold on exchanges is not a security." },
    { question: "Is the SEC case fully over?", answer: "Yes. The settlement and withdrawal of appeals finalized the case, ending years of legal uncertainty for XRP and the broader crypto industry." },
    { question: "What does the settlement mean for XRP holders?", answer: "The settlement is overwhelmingly positive for XRP holders. It confirms XRP's legal status, removes regulatory uncertainty, and clears the path for ETF approvals and institutional adoption." },
  ]),
];

const faqItems = [
  { q: "What was the final settlement?", a: "The SEC vs Ripple case concluded with a settlement that preserved the landmark ruling: XRP is not a security on secondary markets. Ripple paid a reduced fine for its institutional sales but made no admission that XRP itself is a security." },
  { q: "How much did Ripple pay?", a: "Ripple's fine was significantly reduced from the SEC's original $2 billion demand. The final amount reflected only penalties for institutional sales — not for XRP's existence or exchange trading." },
  { q: "Did Ripple admit wrongdoing?", a: "Ripple acknowledged that some of its early institutional XRP sales constituted unregistered securities offerings. However, Ripple did NOT admit that XRP itself is a security — a critical distinction." },
  { q: "What about the appeal?", a: "The SEC ultimately dropped its appeal of the Torres ruling, effectively accepting that XRP on exchanges is not a security. This was a major victory for Ripple and the crypto industry." },
  { q: "What happens to XRP now?", a: "With the case fully resolved, XRP has the clearest regulatory status of any major cryptocurrency. This unlocks ETF approvals, institutional adoption, new exchange listings, and broader market participation." },
  { q: "How does this affect other crypto projects?", a: "The Ripple settlement established that the 'manner of sale' matters more than the token itself. Other crypto projects are citing this precedent in their own regulatory battles." },
];

export default function XRPSECSettlementPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="SEC vs Ripple"
          titleAccent="Settlement"
          subtitle="The four-year legal battle that defined crypto regulation is over. Here's what happened, what it means, and why it changes everything for XRP."
          breadcrumbLabel="SEC Settlement"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>The <Link href="/learn/sec-vs-ripple-explained" className="text-xrp-accent underline decoration-xrp-accent/30">SEC vs Ripple case</Link> ended with a settlement that <strong className="text-text-primary">preserved XRP&apos;s non-security status</strong> on exchanges. Ripple paid a reduced fine for institutional sales but made no admission that XRP is a security. The SEC dropped its appeal. XRP now has the <strong className="text-text-primary">clearest regulatory status</strong> of any major cryptocurrency.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Duration", value: "4+ years (Dec 2020 - 2025)" },
          { label: "SEC Original Demand", value: "$2 billion" },
          { label: "Final Fine", value: "Significantly reduced" },
          { label: "XRP Status", value: "NOT a security on exchanges" },
          { label: "Admission", value: "No admission XRP is a security" },
          { label: "Appeal", value: "SEC dropped appeal" },
        ]} />

        <SectionNav items={[
          { id: "timeline", label: "Timeline" },
          { id: "terms", label: "Terms" },
          { id: "impact", label: "Impact" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Duration" value="4+ yrs" delay={0} />
          <StatPill label="SEC Ask" value="$2B" delay={0.06} />
          <StatPill label="Result" value="Victory" delay={0.12} />
          <StatPill label="Status" value="Resolved" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="timeline">
            <h2 className="text-2xl font-bold text-text-primary">Case Timeline</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "December 2020", desc: "SEC files lawsuit against Ripple, alleging XRP is an unregistered security. XRP price drops 70%." },
                { title: "2021-2022", desc: "Discovery phase — internal SEC documents reveal significant internal disagreement about XRP's classification." },
                { title: "July 2023", desc: "Judge Torres rules XRP is NOT a security when sold on exchanges. Historic 'manner of sale' doctrine established." },
                { title: "2024", desc: "Remedies phase — Ripple fined for institutional sales. SEC appeals portions of the ruling." },
                { title: "2025", desc: "SEC drops appeal and settlement is finalized. Four years of uncertainty end." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="terms" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Settlement Terms</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Reduced Fine", desc: "Ripple paid a fraction of the SEC's $2B demand — covering only penalties for institutional sales." },
                { title: "No Security Admission", desc: "Ripple did NOT admit XRP is a security. The non-security ruling for exchange sales stands." },
                { title: "Appeal Dropped", desc: "The SEC withdrew its appeal of the Torres ruling, accepting XRP's non-security status on exchanges." },
                { title: "Forward-Looking Clarity", desc: "Ripple agreed to compliance measures for future institutional sales while XRP trading remains unrestricted." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What This Means</h2>
            <div className="mt-5">
              <HighlightBox title="The Clearest Legal Status in Crypto" variant="accent" large>
                <p>XRP is now the <strong>most legally vetted cryptocurrency in history</strong>. No other major token has been through a full SEC lawsuit, received a favorable ruling, and had that ruling survive appeal. This gives institutions, exchanges, and ETF issuers unparalleled confidence in XRP.</p>
              </HighlightBox>
            </div>
            <div className="mt-5">
              <IconList items={[
                { title: "ETF Pathway Clear", desc: "Non-security status removes the biggest hurdle for XRP ETF approvals" },
                { title: "Institutional Adoption", desc: "Banks and asset managers now have the regulatory certainty they demanded" },
                { title: "Exchange Confidence", desc: "All major exchanges have listed or relisted XRP post-settlement" },
                { title: "Industry Precedent", desc: "The ruling is being cited in other crypto regulatory battles worldwide" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/sec-vs-ripple-explained", label: "SEC vs Ripple", desc: "Full case breakdown" },
              { href: "/learn/is-xrp-a-security", label: "Is XRP a Security?", desc: "The definitive answer" },
              { href: "/learn/xrp-howey-test", label: "XRP & Howey Test", desc: "Legal analysis" },
              { href: "/learn/xrp-regulatory-clarity-impact", label: "Clarity Impact", desc: "Adoption acceleration" },
              { href: "/learn/xrp-etf", label: "XRP ETF", desc: "ETF outlook" },
              { href: "/learn/xrp-clarity-act", label: "CLARITY Act", desc: "Legislative protection" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="The Case Is Closed"
          description="After 4+ years, XRP has the clearest legal status in crypto. The path forward is wide open."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/sec-vs-ripple-explained"
          secondaryLabel="Read the Full Story"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial or legal advice.</em>
        </p>
      </div>
    </>
  );
}

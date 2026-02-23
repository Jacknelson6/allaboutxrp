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

const slug = "key-people";
const title = "Key People Behind XRP & Ripple";
const description = "Meet the founders, executives, and key figures shaping XRP and the XRP Ledger. Complete profiles with backgrounds, roles, and contributions.";
const url = `https://allaboutxrp.com/learn/${slug}`;
const dp = "2026-02-23";

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
    { name: "Key People" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "Who created XRP?", answer: "XRP was created by Jed McCaleb, Arthur Britto, and David Schwartz in 2011-2012. They built the XRP Ledger as a faster, more efficient alternative to Bitcoin." },
    { question: "Who is the CEO of Ripple?", answer: "Brad Garlinghouse has been CEO of Ripple since 2017. He led the company through the SEC lawsuit and its growth to a $50B+ valuation." },
    { question: "Is David Schwartz still at Ripple?", answer: "Yes. David Schwartz transitioned to CTO Emeritus in 2025 but continues to contribute to XRPL protocol development." },
  ]),
];

const faqItems = [
  { q: "Who created XRP?", a: "XRP was created by Jed McCaleb, Arthur Britto, and David Schwartz in 2011-2012. They designed the XRP Ledger as a faster alternative to Bitcoin, capable of settling transactions in seconds." },
  { q: "Who runs Ripple today?", a: "Brad Garlinghouse is CEO, Monica Long is President, and Stuart Alderoty is Chief Legal Officer. David Schwartz serves as CTO Emeritus after transitioning in 2025." },
  { q: "Did the founders keep any XRP?", a: "Yes. The founders allocated 20B XRP to themselves. Jed McCaleb received 9B and completed selling his allocation by 2022. Arthur Britto and David Schwartz retain portions of their allocations." },
  { q: "Who is the CTO of Ripple?", a: "David Schwartz served as CTO from Ripple's founding through 2025, when he transitioned to CTO Emeritus. He remains active in XRPL protocol development." },
];

export default function KeyPeoplePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Key People Behind"
          titleAccent="XRP & Ripple"
          subtitle="The founders, executives, and key figures who built XRP and are shaping its future."
          breadcrumbLabel="Key People"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 23, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>XRP was created by three engineers — <strong className="text-text-primary">Jed McCaleb, Arthur Britto, and David Schwartz</strong> — who wanted to build a better Bitcoin. Today, Ripple is led by CEO Brad Garlinghouse, President Monica Long, and CLO Stuart Alderoty. The company has grown from a startup to a <strong className="text-text-primary">$50B+ valuation</strong> with 900+ employees across 15 offices globally.</p>
        </TLDRBox>

        <SectionNav items={[
          { id: "founders", label: "Founders" },
          { id: "leadership", label: "Leadership" },
          { id: "key-figures", label: "Key Figures" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Founders" value="3" delay={0} />
          <StatPill label="Employees" value="900+" delay={0.06} />
          <StatPill label="Global Offices" value="15" delay={0.12} />
          <StatPill label="Founded" value="2012" delay={0.18} />
        </div>

        <KeyFactsTable facts={[
          { label: "Original Name", value: "OpenCoin (2012), renamed Ripple Labs (2013), then Ripple (2015)" },
          { label: "XRP Ledger Launch", value: "June 2, 2012 (ledger #32570)" },
          { label: "Initial XRP Supply", value: "100 billion — all created at genesis, no mining" },
          { label: "Founder Allocation", value: "20B XRP to founders (McCaleb 9B, Britto & Schwartz ~11B)" },
          { label: "Ripple Allocation", value: "80B XRP to Ripple (55B placed in escrow Dec 2017)" },
          { label: "Headquarters", value: "San Francisco, California" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="founders">
            <h2 className="text-2xl font-bold text-text-primary">The Three Founders</h2>
            <DataTable
              headers={["Name", "Role", "XRP Allocation", "Status (2026)", "Key Contribution"]}
              rows={[
                ["Jed McCaleb", "Co-founder", "9B XRP (sold by 2022)", "Left Ripple 2013; founded Stellar", "Conceived original XRP Ledger concept"],
                ["Arthur Britto", "Co-founder", "~5.5B XRP (partially held)", "Advisory role; very private", "Core protocol architecture & consensus design"],
                ["David Schwartz", "Co-founder & CTO", "~5.5B XRP (partially held)", "CTO Emeritus at Ripple", "Built XRP Ledger; 13+ years of protocol development"],
              ]}
            />
            <div className="mt-6 space-y-4">
              <HighlightBox title="Jed McCaleb's Departure" variant="warning">
                <p>McCaleb left Ripple in 2013 over strategic disagreements and founded Stellar (XLM). His agreement to sell 9B XRP over 7+ years created sustained sell pressure until his final sale in July 2022. This was the single largest known source of XRP sell pressure in history.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="leadership" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Current Leadership</h2>
            <DataTable
              headers={["Name", "Title", "At Ripple Since", "Background", "Notable Achievement"]}
              rows={[
                ["Brad Garlinghouse", "CEO", "2015 (CEO 2017)", "Yahoo, Hightail, AOL", "Led company through SEC lawsuit to $50B+ valuation"],
                ["Monica Long", "President", "2013", "Marketing/BD leadership", "Longest-serving executive; oversees product & growth"],
                ["Stuart Alderoty", "Chief Legal Officer", "2019", "HSBC, CIT Group, AmEx", "Architected SEC defense; $125M settlement (vs $2B sought)"],
                ["David Schwartz", "CTO Emeritus", "2011 (co-founder)", "Cryptography, distributed systems", "13+ years building XRPL; community figure 'JoelKatz'"],
                ["Emi Yoshikawa", "VP Corp Strategy", "2019", "Blockchain policy, Japan markets", "SBI partnership management; CBDC strategy"],
                ["Markus Infanger", "SVP, RippleX", "2020", "Visa, Swift, Deutsche Bank", "XRPL ecosystem growth; developer adoption"],
              ]}
            />
          </RevealSection>

          <RevealSection id="key-figures" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Other Key Figures in XRP History</h2>
            <DataTable
              headers={["Name", "Role", "Period", "Significance"]}
              rows={[
                ["Chris Larsen", "Co-founder & Exec Chairman", "2012-present", "Serial fintech entrepreneur (E-Loan, Prosper); major XRP holder; public face of crypto advocacy in Washington"],
                ["Ryan Fugger", "RipplePay Creator", "2004-2012", "Created the original Ripple concept (RipplePay); handed project to McCaleb/Schwartz team"],
                ["Judge Analisa Torres", "Federal Judge (SDNY)", "2020-2025", "Ruled XRP is not a security in programmatic sales; landmark crypto ruling"],
                ["Gary Gensler", "Former SEC Chair", "2021-2025", "Filed and pursued SEC v. Ripple case; left SEC in 2025"],
                ["SBI Kitao (Yoshitaka)", "SBI Holdings CEO", "2016-present", "Ripple's most vocal institutional advocate; drives XRP adoption across Asia through SBI Group"],
                ["Wietse Wind", "XRPL Developer", "2017-present", "Created XUMM wallet (now Xaman); largest independent XRPL developer"],
              ]}
            />
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/leadership", label: "Full Leadership Team", desc: "Detailed executive profiles" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company explained" },
              { href: "/learn/history", label: "XRP History", desc: "Complete timeline 2011-2026" },
              { href: "/learn/partnerships", label: "Partnerships", desc: "Banks & institutions using XRP" },
              { href: "/learn/acquisitions", label: "Acquisitions", desc: "Ripple's $3.7B strategy" },
              { href: "/learn/brad-garlinghouse", label: "Brad Garlinghouse", desc: "CEO deep dive" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Learn About XRP"
          description="Now that you know the people, learn about the technology they built and why it matters."
          primaryHref="/learn/what-is-xrp"
          primaryLabel="What is XRP? →"
          secondaryHref="/learn/how-does-xrp-work"
          secondaryLabel="How XRP Works"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 23, 2026. Written by the AllAboutXRP Editorial Team.</em>
        </p>
      </div>
    </>
  );
}

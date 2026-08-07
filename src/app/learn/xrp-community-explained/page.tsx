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
  title: "The XRP Community (XRP Army) Explained | AllAboutXRP",
  description: "Who is the XRP Army? The history, culture, and influence of one of crypto's most passionate communities.",
  keywords: ["XRP community","XRP Army","XRP Twitter","XRP community explained"],
  openGraph: { title: "The XRP Community (XRP Army) Explained", description: "Who is the XRP Army? The history, culture, and influence of one of crypto's most passionate communities.", url: "https://allaboutxrp.com/learn/xrp-community-explained", type: "article" },
  twitter: { card: "summary_large_image", title: "The XRP Community (XRP Army) Explained", description: "Who is the XRP Army? The history, culture, and influence of one of crypto's most passionate communities." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-community-explained" },
};

const schemas = [
  buildArticleSchema({ headline: "The XRP Community (XRP Army) Explained", description: "Who is the XRP Army? The history, culture, and influence of one of crypto's most passionate communities.", url: "https://allaboutxrp.com/learn/xrp-community-explained", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP Community" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-community-explained" }),
  buildFAQSchema([
    { question: "What is the XRP Army?", answer: "A large, passionate community of XRP holders and advocates. Active on social media, known for strong conviction in XRP's potential." },
    { question: "Why is the XRP community so passionate?", answer: "Early conviction, the SEC lawsuit creating an 'us vs them' mentality, and belief in XRP's real-world utility all fueled intense loyalty." },
    { question: "Is the XRP Army a positive influence?", answer: "Mixed. They drive awareness and community engagement, but can also be hostile to criticism and spread unrealistic price expectations." },
    { question: "Where does the community gather?", answer: "Twitter/X is the primary platform. Also YouTube, Discord, Reddit (r/XRP, r/Ripple), and dedicated forums." },
    { question: "Should I listen to XRP influencers?", answer: "Be cautious. Many have financial incentives. Cross-reference with data and do your own research." },
  ]),
];

const faqItems = [
  { q: "What is the XRP Army?", a: "A large, passionate community of XRP holders and advocates. Active on social media, known for strong conviction in XRP's potential." },
  { q: "Why is the XRP community so passionate?", a: "Early conviction, the SEC lawsuit creating an 'us vs them' mentality, and belief in XRP's real-world utility all fueled intense loyalty." },
  { q: "Is the XRP Army a positive influence?", a: "Mixed. They drive awareness and community engagement, but can also be hostile to criticism and spread unrealistic price expectations." },
  { q: "Where does the community gather?", a: "Twitter/X is the primary platform. Also YouTube, Discord, Reddit (r/XRP, r/Ripple), and dedicated forums." },
  { q: "Should I listen to XRP influencers?", a: "Be cautious. Many have financial incentives. Cross-reference with data and do your own research." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="The XRP Community (XRP Army) Explained" titleAccent="Culture & Influence" subtitle="Who is the XRP Army? The history, culture, and influence of one of crypto's most passionate communities." breadcrumbLabel="XRP Community">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>The "XRP Army" is one of crypto's largest and most vocal communities. Born from early XRP investors, strengthened by the SEC lawsuit, and united by a belief in XRP's utility. They're active on Twitter/X, YouTube, and Discord. Love them or hate them, their influence is real.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Name", value: "XRP Army" },
          { label: "Platforms", value: "Twitter, YouTube" },
          { label: "Formed", value: "2017-2018" },
          { label: "Galvanized", value: "SEC Lawsuit" },
          { label: "Key Voices", value: "Multiple influencers" },
          { label: "Sentiment", value: "Extremely bullish" },
        ]} />

        <SectionNav items={[
          { id: "who", label: "Who Are They?" },
          { id: "history", label: "History" },
          { id: "culture", label: "Culture" },
          { id: "influence", label: "Influence" },
          { id: "criticism", label: "Criticism" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Size" value="Millions" delay={0.00} />
          <StatPill label="Platform" value="Twitter/X" delay={0.06} />
          <StatPill label="Origin" value="2017" delay={0.12} />
          <StatPill label="Strength" value="SEC lawsuit" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="who">
            <h2 className="text-2xl font-bold text-text-primary">Who Is the XRP Army?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The &quot;XRP Army&quot; is a collective term for the millions of XRP holders who actively promote and defend XRP across social media. They&apos;re one of crypto&apos;s most recognizable communities.</p>
          </RevealSection>

          <RevealSection id="history" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">History</h2>
            <div className="mt-6"><IconList items={[
              {title:"2017 Bull Run",desc:"XRP's 60,000% rally created a wave of passionate holders who saw life-changing gains."},
              {title:"2018 Crash",desc:"Those who held through -95% developed diamond-hand conviction."},
              {title:"2020 SEC Lawsuit",desc:"The community rallied together against the SEC. Fundraised for Ripple's defense. 'Us vs the government.'"},
              {title:"2023 Victory",desc:"The Torres ruling was celebrated as a community triumph."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="culture" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Culture & Characteristics</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Extreme Conviction",desc:"Most believe XRP will reach $10-100+. Rarely entertain bear cases."},
              {title:"Anti-SEC Sentiment",desc:"Strong distrust of regulators. The lawsuit forged a siege mentality."},
              {title:"Utility Focused",desc:"Emphasize real-world payment use cases vs speculation."},
              {title:"Community Defense",desc:"Quick to push back on FUD and criticism of XRP."},
            ]} /></div>
          </RevealSection>

          <RevealSection id="influence" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Influence</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The XRP community has real influence: they can trend topics on Twitter, have supported legal defense efforts, and collectively drive awareness. Their engagement metrics rival communities of much larger market cap assets.</p>
          </RevealSection>

          <RevealSection id="criticism" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Criticism & Balance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Critics point to echo chamber behavior, unrealistic price targets, and hostility toward skeptics. As with any passionate community, it&apos;s important to cross-reference claims with data. Use <Link href="/learn/trusted-sources" className="text-xrp-accent underline decoration-xrp-accent/30">trusted sources</Link> for your research.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/ripple-founding-story", label: "Ripple Story", desc: "Origin history" },
              { href: "/learn/sec-lawsuit-impact-on-xrp-price", label: "SEC Impact", desc: "Community catalyst" },
              { href: "/learn/xrp-developer-resources", label: "Dev Resources", desc: "Build on XRPL" },
              { href: "/learn/xrp-all-time-high", label: "ATH", desc: "Price history" },
              { href: "/learn/trusted-sources", label: "Trusted Sources", desc: "Reliable info" },
              { href: "/learn/xrp-block-explorers", label: "Explorers", desc: "Verify data" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Join the Community" description="Engage with the XRP ecosystem on your own terms." primaryHref="/learn/trusted-sources" primaryLabel="Trusted Sources →" secondaryHref="/learn/ripple-founding-story" secondaryLabel="Ripple's Story" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

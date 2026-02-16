import { Metadata } from "next";
import Image from "next/image";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, DataTable, FAQAccordion, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "SEC vs Ripple: The Complete Timeline",
  description:
    "Full timeline of the SEC vs Ripple lawsuit from 2020 to 2025. Key rulings, Hinman documents, and what it means for XRP.",
  keywords: ["SEC Ripple lawsuit", "XRP SEC case", "Ripple lawsuit timeline", "XRP security"],
  openGraph: {
    title: "SEC vs Ripple: The Complete Timeline | AllAboutXRP",
    description:
      "The definitive timeline of SEC v. Ripple Labs — from the 2020 lawsuit to the landmark Torres ruling and resolution.",
    url: "https://allaboutxrp.com/learn/sec-vs-ripple",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEC vs Ripple Timeline | AllAboutXRP",
    description:
      "Complete timeline of the SEC vs Ripple XRP lawsuit — key rulings and what it means for crypto.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/sec-vs-ripple",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "SEC vs Ripple: The Complete Timeline",
    description: "A comprehensive chronological timeline of the SEC vs Ripple Labs lawsuit from the December 2020 filing through the landmark Torres ruling and ultimate resolution.",
    url: "https://allaboutxrp.com/learn/sec-vs-ripple",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "SEC vs Ripple" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/sec-vs-ripple" }),
  buildFAQSchema([
    { question: "Did Ripple win the SEC lawsuit?", answer: "Largely yes. In July 2023, Judge Torres ruled that XRP sold on public exchanges to retail investors is not a security. Ripple was ordered to pay $125 million in penalties — far less than the SEC's $2 billion demand. The case has effectively resolved with XRP gaining significant regulatory clarity." },
    { question: "Is XRP a security?", answer: "No. Judge Analisa Torres ruled in July 2023 that XRP sold on public exchanges (programmatic sales) is not a security under the Howey test. However, direct institutional sales by Ripple were found to be unregistered securities offerings." },
    { question: "What are the Hinman documents?", answer: "Internal SEC documents from 2018 where then-Director William Hinman stated that Ethereum was not a security. Ripple argued these showed the SEC had inconsistent and unfair enforcement. The documents were released during discovery and embarrassed the SEC." },
    { question: "What does the Ripple ruling mean for other cryptos?", answer: "The Torres ruling established that a digital asset itself is not a security — only the manner of its sale can be. This precedent has been cited in other crypto cases and contributed to a more favorable regulatory environment for the entire industry." },
    { question: "How much did Ripple pay in fines?", answer: "Ripple was ordered to pay $125 million in civil penalties in August 2024. The SEC had originally sought nearly $2 billion. The reduced penalty was seen as a significant victory for Ripple." },
  ]),
];

const faqItems = [
  { q: "Did Ripple win the SEC lawsuit?", a: "Largely yes. The most important ruling — that XRP sold on public exchanges is not a security — was a major victory for Ripple and the entire crypto industry. While Ripple paid $125 million in penalties for institutional sales, this was a fraction of the SEC's $2 billion demand. The ruling paved the way for exchange relistings, ETF filings, and institutional adoption." },
  { q: "Is XRP a security?", a: "No. Judge Torres ruled that XRP itself is not a security. The distinction was in how it was sold: programmatic sales on exchanges to retail investors did not meet the Howey test's 'expectation of profits from the efforts of others' prong. Direct institutional sales by Ripple, however, were deemed unregistered securities offerings." },
  { q: "What are the Hinman documents?", a: "Internal SEC emails and drafts from 2018 in which then-Director of Corporation Finance William Hinman discussed Ethereum not being a security. Ripple used these documents to argue the SEC had given inconsistent guidance — telling the industry ETH wasn't a security while suing Ripple for XRP." },
  { q: "What does the ruling mean for other cryptocurrencies?", a: "The Torres ruling established a critical precedent: a digital asset token itself is not inherently a security — the context of the transaction determines whether securities laws apply. This reasoning has been cited in subsequent crypto cases and contributed to clearer regulatory frameworks." },
  { q: "How much did Ripple pay in fines?", a: "Ripple was ordered to pay $125 million in civil penalties in August 2024. The SEC originally sought approximately $2 billion. The 93% reduction was widely viewed as a victory for Ripple and reflected the court's view that much of the SEC's case was overreaching." },
];

export default function SECvsRipplePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="SEC vs Ripple:"
          titleAccent="The Complete Timeline"
          subtitle="The SEC's lawsuit against Ripple Labs was the most consequential legal battle in cryptocurrency history. It lasted over four years, produced landmark rulings, and fundamentally shaped how digital assets are regulated in the United States."
          breadcrumbLabel="SEC vs Ripple"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <div className="mt-8 mb-12 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/learn/sec-vs-ripple-hero.jpg"
            alt="SEC vs Ripple lawsuit and regulation"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover"
            loading="lazy"
          />
        </div>

        <TLDRBox>
          <p>In December 2020, the SEC sued <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple Labs</Link>, alleging <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> was an unregistered security. In July 2023, Judge Torres ruled that <strong className="text-text-primary">XRP sold on exchanges is not a security</strong>. Ripple paid $125M in penalties (vs. SEC&apos;s $2B demand). The case resolved in 2025 and triggered exchange relistings, <Link href="/learn/xrp-etf" className="text-xrp-accent underline decoration-xrp-accent/30">ETF filings</Link>, and massive institutional adoption.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Filed", value: "December 22, 2020" },
          { label: "Key Ruling", value: "July 13, 2023 (Torres)" },
          { label: "Penalty", value: "$125 million (vs. $2B demanded)" },
          { label: "Core Finding", value: "XRP on exchanges ≠ security" },
          { label: "Judge", value: "Analisa Torres (SDNY)" },
          { label: "Duration", value: "~4 years" },
        ]} />

        <SectionNav items={[
          { id: "background", label: "Background" },
          { id: "timeline", label: "Timeline" },
          { id: "torres-ruling", label: "Torres Ruling" },
          { id: "hinman", label: "Hinman Documents" },
          { id: "resolution", label: "Resolution" },
          { id: "impact", label: "Industry Impact" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Case Duration" value="4+ years" delay={0} />
          <StatPill label="Penalty" value="$125M" delay={0.06} />
          <StatPill label="SEC Demand" value="$2B" delay={0.12} />
          <StatPill label="Reduction" value="93%" delay={0.18} />
        </div>

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-14 space-y-14">
          {/* BACKGROUND */}
          <RevealSection id="background">
            <h2 className="text-2xl font-bold text-text-primary">Background: Why Did the SEC Sue Ripple?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              On <strong className="text-text-primary">December 22, 2020</strong>, the U.S. Securities and Exchange Commission filed a complaint against Ripple Labs, CEO Brad Garlinghouse, and co-founder Chris Larsen, alleging they had raised over $1.3 billion through an unregistered securities offering by selling XRP.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The SEC argued that XRP was an &quot;investment contract&quot; under the <strong className="text-text-primary">Howey test</strong> — the legal framework for determining whether something is a security. The Howey test requires: (1) an investment of money, (2) in a common enterprise, (3) with an expectation of profits, (4) derived from the efforts of others.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The timing was notable: the lawsuit was filed on the last day of SEC Chairman Jay Clayton&apos;s tenure. <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link> criticized the action as politically motivated and inconsistent with the SEC&apos;s treatment of Bitcoin and Ethereum. The price of XRP dropped over 60% in the following weeks, and multiple U.S. exchanges — including Coinbase — delisted or suspended XRP trading.
            </p>
          </RevealSection>

          {/* TIMELINE */}
          <RevealSection id="timeline" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">SEC vs Ripple: Complete Timeline</h2>
            <div className="mt-6">
              <DataTable
                headers={["Date", "Event", "Significance"]}
                rows={[
                  ["Dec 22, 2020", "SEC files complaint", "Alleges XRP is unregistered security; XRP drops 60%+"],
                  ["Jan 2021", "Ripple files response", "Denies XRP is a security; raises fair notice defense"],
                  ["Mar 2021", "Discovery begins", "Both sides exchange documents; Hinman documents demanded"],
                  ["Nov 2021", "Hinman documents fight", "Ripple seeks internal SEC docs on Ethereum classification"],
                  ["Jan 2022", "SEC privilege claims", "SEC claims attorney-client privilege over Hinman speech docs"],
                  ["Sep 2022", "Summary judgment motions", "Both sides move for summary judgment"],
                  ["Dec 2022", "Hinman docs unsealed (partial)", "Court orders release of some internal SEC documents"],
                  ["Jun 2023", "Hinman documents released", "Full release embarrasses SEC; shows internal confusion"],
                  ["Jul 13, 2023", "Torres ruling", "XRP on exchanges is NOT a security; institutional sales were"],
                  ["Oct 2023", "SEC drops claims vs. Garlinghouse & Larsen", "Individual defendants cleared"],
                  ["Aug 2024", "Ripple ordered to pay $125M", "93% less than SEC's ~$2B demand"],
                  ["2025", "Case effectively resolved", "Appeals dropped; XRP relisted on major exchanges"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          {/* TORRES RULING */}
          <RevealSection id="torres-ruling" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Torres Ruling: A Landmark Decision</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              On <strong className="text-text-primary">July 13, 2023</strong>, Judge Analisa Torres issued her summary judgment ruling — one of the most significant decisions in cryptocurrency legal history. She drew a critical distinction between different types of XRP sales:
            </p>

            <div className="mt-5">
              <GlowCard
                title="July 13, 2023"
                value="XRP ≠ Security"
                subtitle="Judge Torres: Programmatic sales of XRP on exchanges did not satisfy the Howey test"
              />
            </div>

            <div className="mt-6">
              <DataTable
                headers={["Sale Type", "Ruling", "Reasoning"]}
                rows={[
                  ["Programmatic (exchange) sales", "NOT securities", "Retail buyers didn't know if money went to Ripple; no 'efforts of others' expectation"],
                  ["Institutional (direct) sales", "Were securities", "Sophisticated buyers knew they were funding Ripple with expectation of profits"],
                  ["Employee/other distributions", "NOT securities", "No investment of money prong met"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="The Key Insight" variant="accent">
                <p>Torres ruled that <strong className="text-text-primary">XRP itself is not a security</strong> — it&apos;s the <em>transaction context</em> that determines whether securities laws apply. A token sold on an exchange to an anonymous buyer who doesn&apos;t know the seller is fundamentally different from a token sold directly by the issuer to an institutional investor. This distinction reshaped how the entire industry thinks about crypto regulation.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* HINMAN */}
          <RevealSection id="hinman" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Hinman Documents</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              One of the most dramatic subplots of the case involved the <strong className="text-text-primary">Hinman documents</strong> — internal SEC emails and drafts related to a June 2018 speech by William Hinman, then-Director of the SEC&apos;s Division of Corporation Finance.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In that speech, Hinman declared that <strong className="text-text-primary">Ethereum was not a security</strong> — despite ETH having many characteristics similar to XRP. Ripple argued this showed the SEC had given inconsistent, unfair guidance to the industry. The SEC fought vigorously to keep the internal documents sealed, claiming attorney-client privilege.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              When the documents were finally released in June 2023, they revealed significant internal disagreement and confusion within the SEC about cryptocurrency classification. Multiple SEC staff members had expressed concerns about Hinman&apos;s speech and the lack of clear regulatory framework. The documents undermined the SEC&apos;s position and bolstered Ripple&apos;s fair notice defense.
            </p>
            <div className="mt-6">
              <HighlightBox title="Why It Mattered" variant="info">
                <p>The Hinman documents showed that even <em>within the SEC</em>, there was no clear consensus on what made a cryptocurrency a security. If the regulator itself couldn&apos;t agree, how could companies like Ripple be expected to know they were violating the law? This supported Ripple&apos;s argument that they lacked &quot;fair notice.&quot;</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* RESOLUTION */}
          <RevealSection id="resolution" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Resolution and Aftermath</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "October 2023: Individual Claims Dropped", desc: "The SEC dropped all claims against Brad Garlinghouse and Chris Larsen personally, effectively clearing them of wrongdoing." },
                { title: "August 2024: $125M Penalty", desc: "Ripple was ordered to pay $125 million for institutional sales — a 93% reduction from the SEC's nearly $2 billion demand. Ripple had reserved $1 billion for the case." },
                { title: "Exchange Relistings", desc: "Following the Torres ruling, Coinbase, Kraken, and other major U.S. exchanges relisted XRP, restoring access for American retail investors." },
                { title: "ETF Filings Surge", desc: "With regulatory clarity established, multiple major asset managers filed for spot XRP ETFs — something impossible during the lawsuit." },
                { title: "2025: Case Effectively Closed", desc: "With appeals dropped and penalties paid, the case reached its effective conclusion after more than four years of litigation." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* IMPACT */}
          <RevealSection id="impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Impact on Crypto Regulation</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The SEC vs. Ripple case has had far-reaching consequences beyond XRP:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Token vs. Transaction Distinction", desc: "The ruling established that a digital asset itself is not inherently a security — only the circumstances of its sale can create a securities transaction. This is now a foundational principle in crypto law." },
                { title: "Precedent for Other Cases", desc: "The Torres ruling has been cited in other SEC enforcement actions against crypto companies, including cases involving Coinbase, Binance, and others." },
                { title: "Regulatory Reform Catalyst", desc: "The case highlighted the need for clear crypto legislation. Congressional efforts to create comprehensive crypto regulatory frameworks accelerated in its wake." },
                { title: "SEC Enforcement Strategy Shift", desc: "After the Ripple outcome, the SEC adopted a more measured approach to crypto enforcement, focusing on clearer fraud cases rather than broad registration actions." },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="The Bigger Picture" variant="accent">
                <p>The SEC vs. Ripple case was about more than XRP. It was about whether U.S. regulators could retroactively classify digital assets as securities without providing clear guidance. The outcome established critical limits on regulatory overreach and gave the entire crypto industry a stronger legal foundation. Learn more about <Link href="/learn/history" className="text-xrp-accent underline decoration-xrp-accent/30">XRP&apos;s full history</Link> and how <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link> has leveraged this clarity.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* FAQ */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* SOURCES */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sources</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• <a href="https://www.sec.gov/litigation/complaints/2020/comp-pr2020-338.pdf" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">SEC — Original Complaint (Dec 2020)</a></li>
              <li>• <a href="https://casetext.com/case/sec-v-ripple-labs-inc-4" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">SEC v. Ripple Labs — Court Filings</a></li>
              <li>• <a href="https://ripple.com/insights/" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple — Official Statements</a></li>
              <li>• <a href="https://www.coindesk.com/tag/sec-vs-ripple/" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">CoinDesk — SEC vs Ripple Coverage</a></li>
              <li>• <a href="https://www.law360.com/" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">Law360 — Legal Analysis</a></li>
            </ul>
          </RevealSection>

          {/* CONTINUE LEARNING */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "XRP fundamentals" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/history", label: "XRP History", desc: "Complete timeline" },
              { href: "/learn/xrp-etf", label: "XRP ETF Guide", desc: "ETFs enabled by the ruling" },
              { href: "/learn/partnerships", label: "Partnerships", desc: "Ripple's global network" },
              { href: "/answers/is-xrp-a-security", label: "Is XRP a Security?", desc: "Detailed analysis" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="XRP Has Regulatory Clarity"
          description="With the SEC case resolved, XRP is entering a new era of institutional adoption. Learn how to get started."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/xrp-etf"
          secondaryLabel="XRP ETF Guide"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. Sources: SEC.gov, court filings, CoinDesk, Ripple.com, Law360.</em>
        </p>
      </div>
    </>
  );
}

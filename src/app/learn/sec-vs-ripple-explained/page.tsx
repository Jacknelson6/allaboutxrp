import { Metadata } from "next";
import Image from "next/image";
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
  title: "SEC vs Ripple Explained: The Case That Changed Crypto Forever | AllAboutXRP",
  description:
    "Complete timeline and analysis of the SEC vs Ripple lawsuit. Key rulings, what the settlement means, and how it set precedent for crypto regulation in the US.",
  keywords: ["SEC vs Ripple", "Ripple lawsuit", "XRP security", "SEC crypto regulation", "Ripple settlement"],
  openGraph: {
    title: "SEC vs Ripple Explained: The Case That Changed Crypto Forever",
    description: "Full timeline of the SEC vs Ripple case, key rulings, settlement details, and what it means for crypto regulation.",
    url: "https://allaboutxrp.com/learn/sec-vs-ripple-explained",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEC vs Ripple: The Complete Story | AllAboutXRP",
    description: "How Ripple fought the SEC and changed crypto regulation forever.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/sec-vs-ripple-explained" },
};

const schemas = [
  buildArticleSchema({
    headline: "The SEC Case That Changed Crypto Forever",
    description: "A comprehensive analysis of SEC vs Ripple — the landmark case that defined when a cryptocurrency is (and isn't) a security.",
    url: "https://allaboutxrp.com/learn/sec-vs-ripple-explained",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "SEC vs Ripple Explained" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/sec-vs-ripple-explained" }),
  buildFAQSchema([
    { question: "Is XRP a security?", answer: "No. Judge Analisa Torres ruled in July 2023 that programmatic sales of XRP on exchanges do not constitute securities transactions. Institutional direct sales were found to be securities offerings, but the token itself is not a security. The SEC's subsequent settlement effectively accepted this framework." },
    { question: "What was the SEC vs Ripple case about?", answer: "The SEC filed suit in December 2020 alleging Ripple raised $1.3 billion through unregistered securities sales of XRP. Ripple argued XRP is a digital currency, not a security. The case lasted over four years and resulted in a landmark ruling distinguishing between institutional and retail crypto sales." },
    { question: "What did the Ripple settlement mean for crypto?", answer: "The settlement established that secondary market sales of crypto tokens on exchanges are generally not securities transactions. This provided a regulatory framework that other crypto projects and exchanges could reference, reducing legal uncertainty across the industry." },
    { question: "Did Ripple win the SEC case?", answer: "Largely yes. While Ripple paid a reduced penalty for institutional sales, the core ruling — that XRP sold on exchanges to retail buyers is not a security — was a major victory. XRP was relisted on every major US exchange, and the ruling set favorable precedent for the broader crypto industry." },
  ]),
];

const faqItems = [
  { q: "Is XRP a security?", a: "No. Judge Analisa Torres ruled in July 2023 that programmatic sales of XRP on exchanges do not constitute securities transactions. Institutional direct sales were found to meet the Howey test, but the token itself when traded on secondary markets is not a security." },
  { q: "What was the SEC vs Ripple case about?", a: "The SEC filed suit in December 2020 alleging Ripple raised $1.3 billion through unregistered securities sales of XRP. Ripple argued XRP is a digital currency used for cross-border payments, not an investment contract. The case lasted over four years." },
  { q: "What did the Ripple settlement mean for crypto?", a: "The settlement established that secondary market sales of crypto tokens on exchanges are generally not securities transactions. This provided legal clarity that benefited the entire crypto industry and led to XRP's relisting on major US exchanges." },
  { q: "Did Ripple win the SEC case?", a: "Largely yes. Ripple paid a reduced penalty for institutional sales, but the core ruling that retail/exchange sales of XRP are not securities was a landmark victory. XRP was relisted on all major US exchanges, and Ripple's business continued without registering XRP as a security." },
  { q: "Is the SEC still appealing the Ripple decision?", a: "The SEC initially filed a notice of appeal on the institutional sales ruling but ultimately reached a settlement with Ripple that resolved all outstanding claims. Under the new SEC leadership in 2025, the agency shifted its approach to crypto regulation more broadly." },
];

export default function SECvsRipplePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="The SEC Case That"
          titleAccent="Changed Crypto Forever"
          subtitle="In December 2020, the SEC sued Ripple Labs, claiming XRP was an unregistered security. What followed was a four-year legal battle that reshaped crypto regulation in the United States — and beyond."
          breadcrumbLabel="SEC vs Ripple Explained"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <div className="mt-8 mb-12 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/learn/sec-vs-ripple-explained-hero.jpg"
            alt="SEC vs Ripple legal case explained"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover"
            loading="lazy"
          />
        </div>

        <TLDRBox>
          <p>The SEC sued Ripple in December 2020, alleging XRP was an unregistered security. In July 2023, Judge Torres ruled that <strong className="text-text-primary">programmatic sales of XRP on exchanges are NOT securities</strong> — a landmark decision. Institutional direct sales were found to be securities offerings. After appeals and negotiations, Ripple reached a settlement with reduced penalties. The ruling set precedent that secondary market crypto trading generally doesn&apos;t constitute securities transactions, providing clarity the industry desperately needed.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Case Filed", value: "December 22, 2020" },
          { label: "Key Ruling", value: "July 13, 2023" },
          { label: "Judge", value: "Analisa Torres (SDNY)" },
          { label: "SEC Alleged Amount", value: "$1.3 billion" },
          { label: "Final Penalty", value: "~$125 million (reduced)" },
          { label: "Duration", value: "4+ years" },
          { label: "XRP Delisting Period", value: "Dec 2020 - 2023" },
          { label: "Precedent Set", value: "Programmatic sales ≠ securities" },
        ]} />

        <SectionNav items={[
          { id: "background", label: "Background" },
          { id: "timeline", label: "Timeline" },
          { id: "key-rulings", label: "Key Rulings" },
          { id: "settlement", label: "Settlement" },
          { id: "impact", label: "Industry Impact" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Case Duration" value="4+ years" delay={0} />
          <StatPill label="Ruling" value="Not a security" delay={0.06} />
          <StatPill label="Settlement" value="~$125M" delay={0.12} />
          <StatPill label="XRP Recovery" value="1,000%+" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="background">
            <h2 className="text-2xl font-bold text-text-primary">Background: Why the SEC Sued Ripple</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              On December 22, 2020 — just days before SEC Chairman Jay Clayton left office — the Securities and Exchange Commission filed a lawsuit against Ripple Labs, CEO Brad Garlinghouse, and co-founder Chris Larsen. The SEC alleged that Ripple had raised <strong className="text-text-primary">$1.3 billion through unregistered securities sales</strong> of XRP since 2013.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The core legal question was whether XRP constituted an &quot;investment contract&quot; under the <strong className="text-text-primary">Howey Test</strong> — a 1946 Supreme Court framework that defines a security as an investment of money in a common enterprise with an expectation of profits derived from the efforts of others.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The case immediately sent shockwaves through the crypto industry. Major US exchanges including Coinbase, Kraken, and Bitstamp delisted or suspended XRP trading. The price cratered from $0.58 to $0.17 within weeks.
            </p>

            <div className="mt-6">
              <HighlightBox title="The Stakes Were Enormous" variant="accent">
                <p>This wasn&apos;t just about Ripple. If the SEC won a broad ruling that XRP — the third-largest cryptocurrency — was a security, it would set a precedent threatening <strong className="text-text-primary">virtually every cryptocurrency</strong> in the US. Exchanges, projects, and investors watched closely.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="timeline" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Complete Timeline</h2>
            <div className="mt-6">
              <DataTable
                headers={["Date", "Event", "Significance"]}
                rows={[
                  ["Dec 2020", "SEC files lawsuit against Ripple", "XRP delisted from major US exchanges; price drops 65%"],
                  ["Mar 2021", "Discovery phase begins", "Ripple demands SEC internal documents on Bitcoin/Ethereum classification"],
                  ["Jul 2021", "SEC's Hinman emails become key issue", "Former SEC official's speech saying ETH is not a security becomes central to the case"],
                  ["Jan 2022", "Ripple files for summary judgment", "Both sides ask Judge Torres to rule without trial"],
                  ["Sep 2022", "Amicus briefs flood in", "Major crypto companies, trade groups, and even SEC commissioners voice support for Ripple"],
                  ["Jul 13, 2023", "Judge Torres issues landmark ruling", "Programmatic sales NOT securities; institutional sales ARE securities. XRP price surges 75% in hours."],
                  ["Aug 2023", "SEC requests interlocutory appeal", "Judge denies SEC's request to immediately appeal"],
                  ["Oct 2023", "SEC drops claims against Garlinghouse and Larsen", "Personal charges dismissed"],
                  ["Aug 2024", "Penalty phase: $125M fine for institutional sales", "Far less than SEC's requested $2B; Ripple claims moral victory"],
                  ["Oct 2024", "SEC files notice of appeal", "SEC appeals portions of the ruling under Gary Gensler's leadership"],
                  ["Jan 2025", "New SEC leadership (Paul Atkins)", "Pro-crypto SEC chair signals shift in regulatory approach"],
                  ["2025", "Settlement reached", "All remaining claims resolved; ruling stands as precedent"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="key-rulings" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Key Rulings That Changed Everything</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Judge Torres&apos;s July 2023 ruling was nuanced — and that nuance is exactly what made it so impactful. She didn&apos;t simply rule that XRP is or isn&apos;t a security. Instead, she analyzed <em>how</em> XRP was sold:
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Programmatic Sales (Exchanges) = NOT Securities", desc: "When retail buyers purchased XRP on exchanges, they didn't know or care if Ripple was the seller. There was no 'investment contract' because buyers had no expectation of profits from Ripple's specific efforts. This was the biggest win." },
                { title: "Institutional Direct Sales = Securities", desc: "When Ripple sold XRP directly to institutional investors (hedge funds, etc.) with contracts and discount pricing, those sales met the Howey test because buyers did invest based on Ripple's promises and efforts." },
                { title: "Other Distributions = NOT Securities", desc: "XRP given to employees, developers, and charitable organizations were not securities because there was no 'investment of money' — recipients didn't pay for the tokens." },
              ]} />
            </div>

            <div className="mt-6">
              <HighlightBox title="Why This Distinction Matters" variant="info">
                <p>The ruling created a framework: <strong className="text-text-primary">the same token can be sold as a security in one context and not in another</strong>. This meant that even if a project&apos;s initial fundraise looked like a securities offering, the token could still trade freely on secondary markets without being classified as a security. This was exactly the clarity crypto needed.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="settlement" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Settlement and Its Terms</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In August 2024, Judge Torres ordered Ripple to pay a <strong className="text-text-primary">$125 million civil penalty</strong> for its institutional sales — a fraction of the SEC&apos;s requested $2 billion. Ripple was also enjoined from future unregistered institutional sales.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The SEC initially appealed, but under new leadership in 2025, the agency reached a final settlement with Ripple. The key terms:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "$125 million penalty stands", desc: "Ripple pays for past institutional sales violations, but the amount is manageable for a company valued at $11B+." },
                { title: "No admission of wrongdoing", desc: "Ripple did not admit that XRP is a security. The settlement preserves the Torres ruling as precedent." },
                { title: "Future institutional sales require compliance", desc: "Ripple must register or qualify future direct institutional sales, but this doesn't affect exchange trading." },
                { title: "Personal claims dropped", desc: "All charges against Brad Garlinghouse and Chris Larsen were dismissed entirely." },
                { title: "XRP freely tradeable", desc: "No restrictions on XRP trading on exchanges — the 'not a security' ruling for programmatic sales stands." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Impact on the Crypto Industry</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The SEC vs Ripple case didn&apos;t just affect XRP — it reshaped how the entire crypto industry operates in the United States:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Exchange relisting wave", desc: "Coinbase, Kraken, Gemini, and every major US exchange relisted XRP within weeks of the July 2023 ruling. XRP went from being untouchable to one of the most actively traded assets." },
                { title: "ETF applications accelerated", desc: "The ruling's clarity enabled asset managers to file XRP ETF applications with confidence that the underlying asset isn't a security." },
                { title: "Other cases influenced", desc: "Defendants in SEC cases against Coinbase, Binance, and others cited the Ripple ruling. Courts began applying the same framework — distinguishing between token creation/initial sales and secondary market trading." },
                { title: "Regulatory clarity framework", desc: "The ruling provided the first clear legal framework for when crypto sales are securities vs. when they aren't. Congress used it as a reference point for the FIT21 legislation." },
                { title: "Global confidence boost", desc: "International regulators and institutions gained confidence that the US regulatory environment for crypto was becoming clearer, encouraging institutional adoption." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="XRP Price Recovery" variant="success">
                <p>XRP was trading at $0.47 when the ruling dropped on July 13, 2023. It surged <strong className="text-text-primary">75% in 24 hours</strong> to $0.82. By early 2025, with the case fully resolved and <Link href="/learn/xrp-etf" className="text-xrp-accent underline decoration-xrp-accent/30">ETF anticipation</Link> building, XRP reached multi-year highs — a complete recovery from the December 2020 crash.</p>
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
              { href: "/learn/sec-vs-ripple", label: "SEC vs Ripple (Quick)", desc: "Condensed case overview" },
              { href: "/learn/xrp-etf", label: "XRP ETF", desc: "How the ruling enabled ETFs" },
              { href: "/learn/xrp-price-potential", label: "XRP Price Potential", desc: "What it means for price" },
              { href: "/learn/history", label: "XRP History", desc: "The full XRP story" },
              { href: "/learn/ripple-ipo", label: "Ripple IPO", desc: "What's next for Ripple" },
              { href: "/learn/xrp-tokenomics", label: "XRP Tokenomics", desc: "Supply and distribution" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Understanding XRP's Legal Journey"
          description="The SEC case was a defining moment for XRP and the crypto industry. Explore what comes next — ETFs, institutional adoption, and Ripple's IPO plans."
          primaryHref="/learn/xrp-etf"
          primaryLabel="XRP ETF Guide →"
          secondaryHref="/learn/ripple-ipo"
          secondaryLabel="Ripple IPO"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: SEC.gov, PACER court records, Ripple.com, Reuters, CoinDesk.</em>
        </p>
      </div>
    </>
  );
}

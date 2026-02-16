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
  title: "XRP Tax Guide 2026: What You Need to Know",
  description:
    "How is XRP taxed? Learn about capital gains, reporting requirements, cost basis methods, and staking rewards. 2026 crypto tax guide.",
  keywords: ["XRP taxes", "crypto tax guide", "XRP capital gains", "cryptocurrency tax reporting"],
  openGraph: {
    title: "XRP Tax Guide 2026 | AllAboutXRP",
    description:
      "Complete guide to XRP taxation — capital gains, staking rewards, airdrops, and reporting requirements.",
    url: "https://allaboutxrp.com/learn/xrp-tax-guide",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Tax Guide 2026 | AllAboutXRP",
    description:
      "How is XRP taxed? Capital gains, staking, airdrops, and reporting requirements explained.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrp-tax-guide",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Tax Guide 2026: What You Need to Know",
    description: "A comprehensive guide to XRP taxation including capital gains, income tax, staking rewards, airdrops, cost basis methods, and reporting requirements for 2026.",
    url: "https://allaboutxrp.com/learn/xrp-tax-guide",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Tax Guide 2026" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-tax-guide" }),
  buildFAQSchema([
    { question: "Do I have to pay taxes on XRP?", answer: "Yes. In the United States, XRP is treated as property by the IRS. Selling, trading, or spending XRP triggers a taxable event. You owe capital gains tax on any profit and can deduct capital losses." },
    { question: "How are XRP staking rewards taxed?", answer: "Staking rewards are taxed as ordinary income at the fair market value when you receive them. When you later sell the staking rewards, you also owe capital gains tax on any price appreciation since receipt." },
    { question: "What is the best cost basis method for XRP?", answer: "It depends on your situation. FIFO (First In, First Out) is the IRS default. HIFO (Highest In, First Out) minimizes taxable gains but requires specific identification. Consult a tax professional for your specific circumstances." },
    { question: "Are XRP airdrops taxable?", answer: "Yes. Airdrops are treated as ordinary income, taxed at the fair market value of the tokens when you receive them. You must report airdrop income even if you don't sell the tokens." },
    { question: "Do I need to report XRP if I didn't sell?", answer: "Simply holding XRP is not a taxable event. However, you may still need to report your holdings on certain forms, particularly if held on foreign exchanges (FBAR/FATCA requirements)." },
  ]),
];

const faqItems = [
  { q: "Do I have to pay taxes on XRP?", a: "Yes. In the United States, the IRS treats XRP (and all cryptocurrency) as property. Selling, trading, or spending XRP triggers a taxable event. You owe capital gains tax on any profit. You can deduct capital losses to offset gains. Simply holding XRP is not taxable." },
  { q: "How are XRP staking rewards taxed?", a: "Staking rewards are taxed as ordinary income at the fair market value when received. Your cost basis becomes the fair market value at the time of receipt. When you later sell, any additional gain or loss is treated as a capital gain or loss." },
  { q: "What is the best cost basis method for XRP?", a: "FIFO (First In, First Out) is the IRS default and simplest method. HIFO (Highest In, First Out) can minimize taxable gains but requires specific identification and detailed records. LIFO (Last In, First Out) may benefit in rising markets. Consult a tax professional for your specific situation." },
  { q: "Are XRP airdrops taxable?", a: "Yes. Airdrops are treated as ordinary income at the fair market value when you receive and have control over the tokens. You must report this as income on your tax return, even if you don't sell the airdropped tokens." },
  { q: "Does the wash sale rule apply to XRP?", a: "Historically, crypto was exempt from wash sale rules (which prevent claiming a loss if you rebuy within 30 days). However, new legislation may extend wash sale rules to cryptocurrency starting in 2026. Check current rules or consult a tax advisor, as this is an evolving area." },
];

export default function XRPTaxGuidePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Tax Guide 2026:"
          titleAccent="What You Need to Know"
          subtitle="Cryptocurrency taxation can be complex, but it doesn't have to be overwhelming. This guide covers everything XRP holders need to know about taxes — from capital gains and staking rewards to cost basis methods and reporting requirements."
          breadcrumbLabel="XRP Tax Guide 2026"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <div className="mt-8 mb-12 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/learn/xrp-tax-guide-hero.jpg"
            alt="XRP cryptocurrency tax guide"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover"
            loading="lazy"
          />
        </div>

        <TLDRBox>
          <p>The IRS treats <strong className="text-text-primary">XRP as property</strong>. Selling, trading, or spending XRP triggers <strong className="text-text-primary">capital gains tax</strong>. <Link href="/learn/xrp-staking" className="text-xrp-accent underline decoration-xrp-accent/30">Staking rewards</Link> and airdrops are taxed as <strong className="text-text-primary">ordinary income</strong> when received. Use cost basis methods (FIFO, LIFO, HIFO) to calculate gains. Keep detailed records and consider crypto tax software. This is a U.S.-focused guide — consult a tax professional for your jurisdiction. See our <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP overview</Link> for fundamentals.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "IRS Classification", value: "Property (not currency)" },
          { label: "Short-term Rate", value: "10-37% (ordinary income rates)" },
          { label: "Long-term Rate", value: "0%, 15%, or 20%" },
          { label: "Holding Period", value: "1 year+ for long-term rates" },
          { label: "Staking/Airdrops", value: "Ordinary income when received" },
          { label: "Reporting Form", value: "Form 8949 + Schedule D" },
        ]} />

        <SectionNav items={[
          { id: "how-taxed", label: "How XRP is Taxed" },
          { id: "capital-gains", label: "Capital Gains" },
          { id: "cost-basis", label: "Cost Basis Methods" },
          { id: "staking-airdrops", label: "Staking & Airdrops" },
          { id: "wash-sale", label: "Wash Sale Rules" },
          { id: "reporting", label: "Reporting Requirements" },
          { id: "software", label: "Tax Software" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Long-term Max Rate" value="20%" delay={0} />
          <StatPill label="Short-term Max Rate" value="37%" delay={0.06} />
          <StatPill label="Hold Period" value="1 year" delay={0.12} />
          <StatPill label="Reporting Form" value="8949" delay={0.18} />
        </div>

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-14 space-y-14">
          {/* HOW XRP IS TAXED */}
          <RevealSection id="how-taxed">
            <h2 className="text-2xl font-bold text-text-primary">How is XRP Taxed?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The IRS treats all cryptocurrency, including XRP, as <strong className="text-text-primary">property</strong> — not currency. This means the same tax rules that apply to stocks, bonds, and real estate apply to your XRP transactions. Every time you sell, trade, or spend XRP, it&apos;s a <strong className="text-text-primary">taxable event</strong>.
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Taxable Events", desc: "Selling XRP for USD, trading XRP for another crypto, spending XRP on goods/services, receiving staking rewards or airdrops" },
                { title: "Non-Taxable Events", desc: "Buying XRP with USD, holding XRP, transferring XRP between your own wallets, gifting XRP (up to annual exclusion)" },
              ]} />
            </div>
            <div className="mt-6">
              <HighlightBox title="Important" variant="warning">
                <p>This guide focuses on <strong className="text-text-primary">U.S. tax law</strong>. Tax treatment varies by country. Always consult a qualified tax professional for advice specific to your jurisdiction and situation. This is educational content, not tax advice.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* CAPITAL GAINS */}
          <RevealSection id="capital-gains" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP Capital Gains Tax</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              When you sell XRP for more than you paid, the profit is a <strong className="text-text-primary">capital gain</strong>. When you sell for less, it&apos;s a <strong className="text-text-primary">capital loss</strong>. The tax rate depends on how long you held the XRP:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Holding Period", "Tax Type", "Rate (2026)"]}
                rows={[
                  ["Less than 1 year", "Short-term capital gains", "10-37% (ordinary income rates)"],
                  ["1 year or more", "Long-term capital gains", "0%, 15%, or 20%"],
                ]}
                highlightCol={2}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Example:</strong> You buy 1,000 XRP at $1.00 ($1,000 total). Eighteen months later, you sell at $3.00 ($3,000 total). Your capital gain is $2,000. Since you held for more than one year, this is taxed at the long-term rate — likely 15% for most taxpayers, or $300 in tax.
            </p>
            <div className="mt-4">
              <HighlightBox title="Tax-Loss Harvesting" variant="accent">
                <p>If you have XRP at a loss, you can sell it to realize a <strong className="text-text-primary">capital loss</strong>, which offsets capital gains from other investments. You can deduct up to $3,000 in net capital losses against ordinary income per year, with excess losses carrying forward to future years.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* COST BASIS METHODS */}
          <RevealSection id="cost-basis" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Cost Basis Methods for XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Your <strong className="text-text-primary">cost basis</strong> is what you paid for your XRP (including fees). The method you choose for determining which XRP you&apos;re selling can significantly impact your tax bill.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Method", "Description", "Best For"]}
                rows={[
                  ["FIFO", "First In, First Out — oldest XRP sold first", "IRS default; simple tracking"],
                  ["LIFO", "Last In, First Out — newest XRP sold first", "When recent buys are higher cost"],
                  ["HIFO", "Highest In, First Out — highest cost sold first", "Minimizing taxable gains"],
                  ["Specific ID", "You choose exactly which lots to sell", "Maximum tax optimization"],
                ]}
                highlightCol={0}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="HIFO Strategy" variant="info">
                <p>HIFO (Highest In, First Out) can significantly reduce your tax bill by selling the highest-cost XRP first, minimizing the gain on each sale. However, it requires <strong className="text-text-primary">specific identification</strong> — you must be able to prove which exact lots you sold. Crypto tax software makes this easy.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* STAKING & AIRDROPS */}
          <RevealSection id="staking-airdrops" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Staking Rewards &amp; Airdrop Taxation</h2>

            <h3 className="mt-6 text-xl font-semibold text-text-primary">Staking Rewards</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              If you earn yield on your XRP through <Link href="/learn/xrp-staking" className="text-xrp-accent underline decoration-xrp-accent/30">staking or lending platforms</Link>, those rewards are taxed as <strong className="text-text-primary">ordinary income</strong> at the fair market value when received. This becomes your cost basis. If you later sell the rewards for a higher price, you also owe capital gains tax on the appreciation.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Airdrops</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Airdrops (like the Flare/Songbird airdrop to XRP holders) are taxed as <strong className="text-text-primary">ordinary income</strong> at the fair market value when you receive and have dominion and control over the tokens. Even if you don&apos;t sell the airdropped tokens, you must report the income.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Event", "Tax Treatment", "When Taxed"]}
                rows={[
                  ["Staking Rewards", "Ordinary income", "When received"],
                  ["Airdrops", "Ordinary income", "When received & accessible"],
                  ["Selling Rewards/Airdrops", "Capital gains/losses", "When sold (gain over cost basis)"],
                  ["Forked Tokens", "Ordinary income", "When received & accessible"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          {/* WASH SALE */}
          <RevealSection id="wash-sale" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Wash Sale Rules for Crypto</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">wash sale rule</strong> prevents investors from claiming a tax loss if they repurchase a &quot;substantially identical&quot; asset within 30 days before or after the sale. Traditionally, this rule applied only to stocks and securities — not cryptocurrency.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              However, <strong className="text-text-primary">new legislation is extending wash sale rules to cryptocurrency</strong>. Starting potentially in 2026, you may no longer be able to sell XRP at a loss and immediately rebuy it to claim the tax deduction. Check the latest IRS guidance or consult a tax professional.
            </p>
            <div className="mt-6">
              <HighlightBox title="Action Item" variant="accent">
                <p>If wash sale rules are extended to crypto, tax-loss harvesting strategies will need to be adjusted. You&apos;d need to wait 31 days before repurchasing XRP after selling at a loss — or buy a different (non-substantially-identical) cryptocurrency.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* REPORTING */}
          <RevealSection id="reporting" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Reporting Requirements</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              For U.S. taxpayers, XRP transactions are reported using:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Form 8949", desc: "Report each individual crypto transaction — date acquired, date sold, proceeds, cost basis, and gain/loss" },
                { title: "Schedule D", desc: "Summarize your total capital gains and losses from Form 8949" },
                { title: "Schedule 1 / Schedule C", desc: "Report staking rewards and airdrop income as ordinary income" },
                { title: "Form 1040 Question", desc: "The front page of your tax return asks: 'Did you receive, sell, send, exchange, or otherwise acquire any digital assets?' Answer truthfully." },
                { title: "FBAR/FATCA", desc: "If you hold XRP on foreign exchanges with balances exceeding $10,000, you may need to file FinCEN Form 114 (FBAR)" },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="1099 Forms from Exchanges" variant="info">
                <p>Starting in 2026, crypto exchanges are required to issue <strong className="text-text-primary">1099-DA forms</strong> to users and the IRS, reporting your crypto transactions. This means the IRS will have records of your activity — making accurate reporting essential.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* SOFTWARE */}
          <RevealSection id="software" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Recommended Crypto Tax Software</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Manually tracking every XRP transaction is impractical for most traders. These crypto tax platforms integrate with exchanges and wallets to automate the process:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Platform", "Starting Price", "Key Features"]}
                rows={[
                  ["CoinTracker", "Free (25 txns)", "Exchange integrations, portfolio tracking, TurboTax export"],
                  ["Koinly", "Free (basic)", "Supports 800+ integrations, HIFO/LIFO, DeFi support"],
                  ["CoinLedger", "$49/year", "Simple UI, exchange imports, audit trail"],
                  ["TaxBit", "Free (basic)", "Backed by major exchanges, enterprise-grade"],
                  ["TokenTax", "$65/year", "Full-service option, accountant partnerships"],
                ]}
                highlightCol={0}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Most platforms allow you to import transactions via API or CSV from major exchanges like Coinbase, Kraken, Uphold, and Bitstamp. They automatically calculate gains/losses using your preferred cost basis method and generate IRS-ready forms.
            </p>
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
              <li>• <a href="https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">IRS — Virtual Currency FAQs</a></li>
              <li>• <a href="https://www.irs.gov/forms-pubs/about-form-8949" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">IRS — Form 8949 Instructions</a></li>
              <li>• <a href="https://www.irs.gov/pub/irs-drop/rr-19-24.pdf" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">IRS Revenue Ruling 2019-24 (Airdrops &amp; Forks)</a></li>
              <li>• <a href="https://www.coindesk.com/policy/crypto-tax-guide" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">CoinDesk — Crypto Tax Guide</a></li>
              <li>• <a href="https://www.congress.gov/" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">U.S. Congress — Infrastructure Investment and Jobs Act (Sec. 80603)</a></li>
            </ul>
          </RevealSection>

          {/* CONTINUE LEARNING */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "XRP fundamentals" },
              { href: "/learn/xrp-staking", label: "XRP Staking", desc: "Earn yield on your XRP" },
              { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", desc: "Complete buying guide" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets", desc: "Store your XRP safely" },
              { href: "/tools/xrp-profit-calculator", label: "Profit Calculator", desc: "Calculate potential gains" },
              { href: "/learn/xrp-etf", label: "XRP ETF Guide", desc: "ETFs and tax implications" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Get Started with XRP"
          description="Now that you understand the tax implications, learn how to buy and store XRP securely."
          primaryHref="/learn/get-started"
          primaryLabel="How to Get Started →"
          secondaryHref="/tools/xrp-profit-calculator"
          secondaryLabel="Calculate Potential Gains"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. This is educational content, not tax advice. Consult a qualified tax professional. Sources: IRS.gov, CoinDesk, U.S. tax code.</em>
        </p>
      </div>
    </>
  );
}

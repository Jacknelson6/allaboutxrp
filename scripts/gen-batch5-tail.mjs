// Pages 87-100 continuation - generates remaining pages
import fs from 'fs';
const BASE = '/Users/jacknelson/clawd/projects/allaboutxrp/src/app/learn';

function gen(slug, meta, contentJsx) {
  const url = `https://allaboutxrp.com/learn/${slug}`;
  const dir = `${BASE}/${slug}`;
  fs.mkdirSync(dir, { recursive: true });

  const faqSchema = meta.faqs.slice(0,5).map(f =>
    `    { question: ${JSON.stringify(f.q)}, answer: ${JSON.stringify(f.a)} },`
  ).join('\n');

  const faqConst = meta.faqs.map(f =>
    `  { q: ${JSON.stringify(f.q)}, a: ${JSON.stringify(f.a)} },`
  ).join('\n');

  const facts = meta.facts.map(f =>
    `          { label: ${JSON.stringify(f.l)}, value: ${JSON.stringify(f.v)} },`
  ).join('\n');

  const navItems = meta.sections.map(s =>
    `          { id: ${JSON.stringify(s.id)}, label: ${JSON.stringify(s.label)} },`
  ).join('\n');

  const pills = meta.stats.map((s, i) =>
    `          <StatPill label=${JSON.stringify(s.l)} value=${JSON.stringify(s.v)} delay={${(i*0.06).toFixed(2)}} />`
  ).join('\n');

  const links = meta.links.map(l =>
    `              { href: ${JSON.stringify(l.h)}, label: ${JSON.stringify(l.t)}, desc: ${JSON.stringify(l.d)} },`
  ).join('\n');

  const page = `import { Metadata } from "next";
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
  title: ${JSON.stringify(meta.fullTitle + " | AllAboutXRP")},
  description: ${JSON.stringify(meta.desc)},
  keywords: ${JSON.stringify(meta.kw)},
  openGraph: { title: ${JSON.stringify(meta.fullTitle)}, description: ${JSON.stringify(meta.desc)}, url: ${JSON.stringify(url)}, type: "article" },
  twitter: { card: "summary_large_image", title: ${JSON.stringify(meta.fullTitle)}, description: ${JSON.stringify(meta.desc)} },
  alternates: { canonical: ${JSON.stringify(url)} },
};

const schemas = [
  buildArticleSchema({ headline: ${JSON.stringify(meta.fullTitle)}, description: ${JSON.stringify(meta.desc)}, url: ${JSON.stringify(url)}, datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: ${JSON.stringify(meta.bc)} }]),
  buildSpeakableSchema({ url: ${JSON.stringify(url)} }),
  buildFAQSchema([
${faqSchema}
  ]),
];

const faqItems = [
${faqConst}
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title=${JSON.stringify(meta.title)} titleAccent=${JSON.stringify(meta.accent)} subtitle=${JSON.stringify(meta.subtitle)} breadcrumbLabel=${JSON.stringify(meta.bc)}>
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>${meta.tldr}</p></TLDRBox>

        <KeyFactsTable facts={[
${facts}
        ]} />

        <SectionNav items={[
${navItems}
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
${pills}
        </div>

        <div className="cv-auto mt-14 space-y-14">
${contentJsx}

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
${links}
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title=${JSON.stringify(meta.cta[0])} description=${JSON.stringify(meta.cta[1])} primaryHref=${JSON.stringify(meta.cta[2])} primaryLabel=${JSON.stringify(meta.cta[3])} secondaryHref=${JSON.stringify(meta.cta[4])} secondaryLabel=${JSON.stringify(meta.cta[5])} />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
`;
  fs.writeFileSync(`${dir}/page.tsx`, page);
  console.log(`✅ ${slug}`);
}

// 88. xrp-micropayments
gen('xrp-micropayments', {
  title:'XRP for Micropayments', accent:'Why XRP Was Built for Small Payments',
  fullTitle:'XRP for Micropayments: Why XRP Was Built for Small Payments', bc:'XRP Micropayments',
  subtitle:'Sub-cent fees, 3-second settlement, and real-world use cases from content tipping to IoT.',
  desc:'Why XRP is the ideal micropayment currency. Sub-cent fees, 3-second settlement, and use cases from content tipping to IoT.',
  kw:['XRP micropayments','XRP small payments','XRP micro transactions','IoT payments XRP'],
  tldr:'XRP transactions cost ~$0.0001 and settle in 3-5 seconds — making it ideal for micropayments. Use cases: content tipping, IoT machine-to-machine payments, streaming payments, and API monetization.',
  facts:[{l:"Tx Cost",v:"~$0.0001"},{l:"Speed",v:"3-5 seconds"},{l:"Use Cases",v:"Tipping, IoT, APIs"},{l:"Scalability",v:"1,500+ TPS"},{l:"Min Amount",v:"0.000001 XRP"},{l:"Settlement",v:"Final"}],
  sections:[{id:"why",label:"Why XRP?"},{id:"cases",label:"Use Cases"},{id:"iot",label:"IoT"},{id:"streaming",label:"Streaming"},{id:"future",label:"Future"}],
  stats:[{l:"Cost",v:"$0.0001"},{l:"Speed",v:"3 sec"},{l:"TPS",v:"1,500+"},{l:"Min",v:"1 drop"}],
  faqs:[
    {q:"Why is XRP good for micropayments?",a:"~$0.0001 fee and 3-second settlement. No other major crypto matches this for small payment efficiency."},
    {q:"What is a 'drop'?",a:"The smallest unit of XRP: 0.000001 XRP. You can send amounts this small."},
    {q:"IoT payments with XRP?",a:"Machines can pay each other in real-time using XRP. Low fees make per-use billing viable."},
    {q:"Streaming payments?",a:"Payment Channels on XRPL enable per-second streaming payments off-ledger with on-chain settlement."},
    {q:"How does this compare to Lightning Network?",a:"XRP micropayments are simpler (no channel management) with similar speed. Bitcoin Lightning requires channel setup."},
  ],
  links:[
    {h:"/learn/what-is-xrp-ledger",t:"XRP Ledger",d:"XRPL basics"},
    {h:"/learn/xrpl-gaming",t:"XRPL Gaming",d:"Game payments"},
    {h:"/learn/xrp-insurance-use-cases",t:"Insurance",d:"Blockchain claims"},
    {h:"/learn/xrp-developer-resources",t:"Dev Resources",d:"Build with XRP"},
    {h:"/learn/xrpl-nft-marketplaces",t:"NFT Markets",d:"XRPL NFTs"},
    {h:"/learn/xrp-community-explained",t:"XRP Community",d:"The XRP Army"},
  ],
  cta:["Explore XRP Utility","XRP's micropayment capability is a key differentiator.","/learn/what-is-xrp-ledger","Learn XRPL →","/learn/xrp-developer-resources","Dev Resources"],
}, `
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
          </RevealSection>`);

// 89. xrp-insurance-use-cases
gen('xrp-insurance-use-cases', {
  title:'XRP in Insurance', accent:'Blockchain Claims & Settlements',
  fullTitle:'XRP in Insurance: Blockchain Claims & Settlements', bc:'XRP Insurance',
  subtitle:'How XRP and XRPL are being explored for insurance — instant claims, parametric insurance, and cross-border reinsurance.',
  desc:'How XRP and the XRPL are being explored for insurance — instant claims settlement, parametric insurance, and cross-border reinsurance.',
  kw:['XRP insurance','blockchain insurance XRP','XRPL insurance use case'],
  tldr:'XRP and the XRPL can transform insurance through instant claims settlement, smart parametric insurance (automatic payouts), and efficient cross-border reinsurance. Still early stage but significant potential.',
  facts:[{l:"Claims Speed",v:"Seconds vs weeks"},{l:"Cost Reduction",v:"30-50%"},{l:"Type",v:"Parametric"},{l:"Cross-Border",v:"Instant"},{l:"Stage",v:"Exploratory"},{l:"Key Benefit",v:"Automation"}],
  sections:[{id:"overview",label:"Overview"},{id:"claims",label:"Claims"},{id:"parametric",label:"Parametric"},{id:"reinsurance",label:"Reinsurance"},{id:"future",label:"Future"}],
  stats:[{l:"Settlement",v:"Seconds"},{l:"Cost Save",v:"30-50%"},{l:"Automation",v:"Smart logic"},{l:"Stage",v:"Early"}],
  faqs:[
    {q:"How can XRP be used in insurance?",a:"Instant claims settlement, parametric insurance with automatic payouts, and cross-border reinsurance at reduced cost."},
    {q:"What is parametric insurance?",a:"Insurance that auto-pays based on a trigger (e.g., earthquake magnitude) rather than claim assessment. Perfect for blockchain automation."},
    {q:"Is this being used today?",a:"Still exploratory. Pilot programs and proofs of concept exist, but widespread adoption is years away."},
    {q:"How does it reduce costs?",a:"Eliminates manual claims processing, reduces fraud, and speeds settlement from weeks to seconds."},
    {q:"Why XRPL specifically?",a:"Low fees, fast settlement, and the ability to issue tokens for insurance contracts on-chain."},
  ],
  links:[
    {h:"/learn/xrp-micropayments",t:"Micropayments",d:"Small payments"},
    {h:"/learn/what-is-xrp-ledger",t:"XRP Ledger",d:"XRPL basics"},
    {h:"/learn/xrp-developer-resources",t:"Dev Resources",d:"Build on XRPL"},
    {h:"/learn/ripple-founding-story",t:"Ripple Story",d:"Origin history"},
    {h:"/learn/xrp-community-explained",t:"Community",d:"XRP Army"},
    {h:"/learn/xrpl-nft-marketplaces",t:"NFTs",d:"XRPL digital assets"},
  ],
  cta:["Explore XRP Use Cases","Insurance is one of many industries XRP can transform.","/learn/what-is-xrp-ledger","Learn XRPL →","/learn/xrp-micropayments","Micropayments"],
}, `
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">XRP in Insurance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The insurance industry is plagued by slow claims, high admin costs, and cross-border complexity. <Link href="/learn/what-is-xrp-ledger" className="text-xrp-accent underline decoration-xrp-accent/30">XRP and the XRPL</Link> offer solutions.</p>
          </RevealSection>

          <RevealSection id="claims" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Instant Claims Settlement</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Traditional claims take weeks. On XRPL, verified claims can be settled in seconds via XRP payments. Reduces cost 30-50%.</p>
            <div className="mt-6"><DataTable headers={["Metric","Traditional","XRPL"]} rows={[["Settlement Time","2-4 weeks","3-5 seconds"],["Processing Cost","$50-500","<$0.01"],["Fraud Risk","Manual checks","On-chain verification"],["Cross-Border","Complex, slow","Instant, global"]]} highlightCol={2} /></div>
          </RevealSection>

          <RevealSection id="parametric" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Parametric Insurance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Auto-pays when a trigger is met (earthquake >6.0, flight delayed >2 hours). No claims process — instant payout via XRP.</p>
          </RevealSection>

          <RevealSection id="reinsurance" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Cross-Border Reinsurance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Reinsurance involves massive cross-border payments. XRP can settle these in seconds instead of days, reducing counterparty risk.</p>
          </RevealSection>

          <RevealSection id="future" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Future Outlook</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Still early. But as regulatory clarity improves and <Link href="/learn/xrp-developer-resources" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL tools</Link> mature, insurance is a natural fit for blockchain efficiency.</p>
          </RevealSection>`);

// 90. xrp-tax-loss-harvesting
gen('xrp-tax-loss-harvesting', {
  title:'XRP Tax-Loss Harvesting', accent:'Save on Crypto Taxes',
  fullTitle:'XRP Tax-Loss Harvesting: Save on Crypto Taxes', bc:'Tax-Loss Harvesting',
  subtitle:'How to use tax-loss harvesting with XRP — wash sale rules, timing, and reducing your crypto tax bill legally.',
  desc:'How to use tax-loss harvesting with XRP. Wash sale rules, timing strategies, and how to reduce your crypto tax bill legally.',
  kw:['XRP tax loss harvesting','crypto tax loss harvesting XRP','sell XRP for tax loss'],
  tldr:'Tax-loss harvesting = selling XRP at a loss to offset gains elsewhere, reducing your tax bill. Crypto currently has no wash sale rule (unlike stocks), so you can immediately rebuy. Consult a tax professional — rules may change.',
  facts:[{l:"Strategy",v:"Sell at loss"},{l:"Benefit",v:"Offset gains"},{l:"Wash Sale",v:"Not yet for crypto"},{l:"Offset Limit",v:"$3,000/yr vs income"},{l:"Carryforward",v:"Unlimited"},{l:"Consult",v:"Tax professional"}],
  sections:[{id:"what",label:"What Is It?"},{id:"how",label:"How To"},{id:"wash",label:"Wash Sale"},{id:"examples",label:"Examples"},{id:"tools",label:"Tools"}],
  stats:[{l:"Tax Savings",v:"Varies"},{l:"Offset",v:"$3K/yr + gains"},{l:"Wash Sale",v:"No (yet)"},{l:"Deadline",v:"Dec 31"}],
  faqs:[
    {q:"What is tax-loss harvesting?",a:"Selling XRP at a loss to offset capital gains from other investments, reducing your overall tax bill."},
    {q:"Does the wash sale rule apply to crypto?",a:"As of 2026, crypto is not explicitly covered by wash sale rules in the US. But proposed legislation may change this. Consult a tax professional."},
    {q:"How much can I offset?",a:"Unlimited capital gains. If losses exceed gains, deduct up to $3,000/year against ordinary income. Remainder carries forward."},
    {q:"Do I need to actually sell?",a:"Yes. You must realize the loss by selling or trading. Unrealized losses don't count."},
    {q:"Should I rebuy immediately?",a:"Currently legal for crypto (no wash sale rule), but keep records and consult a tax professional as rules may change."},
  ],
  links:[
    {h:"/learn/xrp-cost-basis-methods",t:"Cost Basis",d:"FIFO, LIFO, HIFO"},
    {h:"/learn/xrp-airdrop-taxes",t:"Airdrop Taxes",d:"Income reporting"},
    {h:"/learn/xrp-sell-or-hold",t:"Sell or Hold?",d:"Decision framework"},
    {h:"/learn/xrp-portfolio-trackers",t:"Trackers",d:"Track P&L"},
    {h:"/learn/xrp-in-retirement-accounts",t:"IRAs",d:"Tax-free growth"},
    {h:"/learn/best-xrp-exchanges",t:"Exchanges",d:"Where to trade"},
  ],
  cta:["Optimize Your Taxes","Use legal strategies to reduce your crypto tax bill.","/learn/xrp-cost-basis-methods","Cost Basis →","/learn/xrp-airdrop-taxes","Airdrop Taxes"],
}, `
          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Is Tax-Loss Harvesting?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Selling XRP at a loss to <strong className="text-text-primary">offset capital gains</strong> from other investments. You reduce your tax bill while maintaining your portfolio position by rebuying.</p>
            <div className="mt-6"><HighlightBox title="Example" variant="accent"><p>You have $5,000 in gains from stocks. You sell XRP at a $5,000 loss. Net taxable gain: $0. Tax saved: $1,000-1,850 depending on your rate.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Harvest Losses</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Identify Losses",desc:"Check your XRP positions for unrealized losses."},
              {title:"2. Sell",desc:"Sell the losing position to realize the loss."},
              {title:"3. Offset Gains",desc:"Apply losses against capital gains. Excess offsets up to $3,000 income."},
              {title:"4. Rebuy (Optional)",desc:"Currently no wash sale rule for crypto. Can rebuy immediately."},
              {title:"5. Record Everything",desc:"Document all transactions for tax filing."},
            ]} variant="number" /></div>
          </RevealSection>

          <RevealSection id="wash" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Wash Sale Rules & Crypto</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Stocks have a 30-day wash sale rule (can&apos;t rebuy within 30 days). Crypto currently does <strong className="text-text-primary">not</strong> have this rule — but legislation is pending.</p>
            <div className="mt-6"><HighlightBox title="⚠️ Disclaimer" variant="warning"><p>Tax laws change. Proposed legislation may apply wash sale rules to crypto. Always consult a qualified tax professional.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="examples" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Examples</h2>
            <div className="mt-6"><DataTable headers={["Scenario","Gains","XRP Loss","Net Taxable","Tax Saved (24%)"]} rows={[["Offset gains","$10,000","-$10,000","$0","$2,400"],["Partial offset","$10,000","-$5,000","$5,000","$1,200"],["Offset income","$0","-$5,000","-$3,000 (cap)","$720"]]} highlightCol={4} /></div>
          </RevealSection>

          <RevealSection id="tools" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tools</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Use <Link href="/learn/xrp-portfolio-trackers" className="text-xrp-accent underline decoration-xrp-accent/30">portfolio trackers</Link> like CoinTracker or Koinly to identify harvesting opportunities and generate tax reports. Choose the right <Link href="/learn/xrp-cost-basis-methods" className="text-xrp-accent underline decoration-xrp-accent/30">cost basis method</Link> to maximize savings.</p>
          </RevealSection>`);

// 91. xrp-cost-basis-methods
gen('xrp-cost-basis-methods', {
  title:'XRP Cost Basis Explained', accent:'FIFO, LIFO, HIFO',
  fullTitle:'XRP Cost Basis Explained: FIFO, LIFO, HIFO', bc:'Cost Basis Methods',
  subtitle:'How to calculate your XRP cost basis and choose the method that saves you the most on taxes.',
  desc:'How to calculate your XRP cost basis. FIFO, LIFO, HIFO methods compared with examples. Choose the method that saves you the most.',
  kw:['XRP cost basis','XRP FIFO LIFO','XRP tax cost basis','crypto cost basis methods'],
  tldr:'Cost basis = what you paid for XRP. Method you choose affects your tax bill. FIFO (first bought sold first), LIFO (last bought sold first), HIFO (highest cost sold first). HIFO usually minimizes taxes. Be consistent and keep records.',
  facts:[{l:"Methods",v:"FIFO, LIFO, HIFO"},{l:"Best for Tax",v:"Usually HIFO"},{l:"Default",v:"FIFO"},{l:"Requirement",v:"Consistent use"},{l:"Records",v:"Essential"},{l:"Tools",v:"CoinTracker, Koinly"}],
  sections:[{id:"what",label:"What Is It?"},{id:"methods",label:"Methods"},{id:"examples",label:"Examples"},{id:"choosing",label:"Choosing"},{id:"tools",label:"Tools"}],
  stats:[{l:"Methods",v:"3 main"},{l:"Best",v:"HIFO"},{l:"Default",v:"FIFO"},{l:"Key",v:"Consistency"}],
  faqs:[
    {q:"What is cost basis?",a:"The original price you paid for your XRP, including fees. Used to calculate capital gains or losses when you sell."},
    {q:"Which method saves the most tax?",a:"Usually HIFO (Highest In, First Out) because it sells the highest-cost XRP first, minimizing your taxable gain."},
    {q:"Can I switch methods?",a:"Consult a tax professional. Generally you should be consistent, but some flexibility exists with specific identification."},
    {q:"What if I bought XRP at many prices?",a:"That's exactly why method matters. Each purchase is a 'lot' with its own cost basis. The method determines which lot is sold first."},
    {q:"What tools help track cost basis?",a:"CoinTracker, Koinly, CoinLedger, and TaxBit all calculate cost basis across multiple exchanges automatically."},
  ],
  links:[
    {h:"/learn/xrp-tax-loss-harvesting",t:"Tax Harvesting",d:"Offset gains"},
    {h:"/learn/xrp-airdrop-taxes",t:"Airdrop Taxes",d:"Income reporting"},
    {h:"/learn/xrp-sell-or-hold",t:"Sell or Hold?",d:"Decision framework"},
    {h:"/learn/xrp-portfolio-trackers",t:"Trackers",d:"Track cost basis"},
    {h:"/learn/xrp-in-retirement-accounts",t:"IRAs",d:"Tax-free growth"},
    {h:"/learn/best-xrp-exchanges",t:"Exchanges",d:"Trade records"},
  ],
  cta:["Track Your Cost Basis","Use the right tools and method to minimize taxes.","/learn/xrp-portfolio-trackers","Portfolio Trackers →","/learn/xrp-tax-loss-harvesting","Tax Harvesting"],
}, `
          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Is Cost Basis?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Cost basis = what you paid for your XRP (including fees). When you sell, your <strong className="text-text-primary">taxable gain = sale price - cost basis</strong>. Higher cost basis = lower taxable gain = less tax.</p>
          </RevealSection>

          <RevealSection id="methods" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Three Methods</h2>
            <div className="mt-6"><DataTable headers={["Method","What It Does","Tax Impact"]} rows={[["FIFO","Sells oldest XRP first","Often highest tax (if price rose)"],["LIFO","Sells newest XRP first","Lower tax if recent buys are higher"],["HIFO","Sells highest-cost XRP first","Usually lowest tax"]]} highlightCol={2} /></div>
          </RevealSection>

          <RevealSection id="examples" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Example</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">You bought 100 XRP at $0.50, then 100 XRP at $2.00. You sell 100 XRP at $3.00.</p>
            <div className="mt-6"><DataTable headers={["Method","Cost Basis","Sale Price","Taxable Gain"]} rows={[["FIFO","$0.50 × 100 = $50","$300","$250"],["LIFO","$2.00 × 100 = $200","$300","$100"],["HIFO","$2.00 × 100 = $200","$300","$100"]]} highlightCol={3} /></div>
            <div className="mt-6"><HighlightBox title="$150 Difference!" variant="accent"><p>HIFO saves $150 in taxable gains vs FIFO in this example. At 24% tax rate, that&apos;s $36 saved on just 100 XRP.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="choosing" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Which to Choose?</h2>
            <div className="mt-6"><IconList items={[
              {title:"HIFO for Selling",desc:"Minimizes tax when selling at a profit. Most tax-efficient."},
              {title:"FIFO for Simplicity",desc:"Easiest to track. IRS default. May result in higher taxes."},
              {title:"Specific Identification",desc:"Choose exactly which lot to sell. Maximum control but complex."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="tools" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tools</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Use <Link href="/learn/xrp-portfolio-trackers" className="text-xrp-accent underline decoration-xrp-accent/30">portfolio tracking tools</Link> that support cost basis calculation across all your exchanges. <Link href="/learn/xrp-tax-loss-harvesting" className="text-xrp-accent underline decoration-xrp-accent/30">Tax-loss harvesting</Link> works best with HIFO.</p>
          </RevealSection>`);

// 92. xrp-airdrop-taxes
gen('xrp-airdrop-taxes', {
  title:'Are XRP Airdrops Taxable?', accent:'What You Need to Know',
  fullTitle:'Are XRP Airdrops Taxable? What You Need to Know', bc:'Airdrop Taxes',
  subtitle:'When, how much, and how to report XRPL airdrop income on your tax return.',
  desc:'Are XRP airdrops taxable? Yes — here\'s exactly when, how much, and how to report XRPL airdrop income on your tax return.',
  kw:['XRP airdrop tax','are airdrops taxable','XRPL airdrop tax','crypto airdrop tax rules'],
  tldr:'Yes, XRP airdrops are taxable. They count as <strong className="text-text-primary">ordinary income</strong> at fair market value when received. You also owe capital gains tax when you later sell. Track receipt date and price for both income and cost basis.',
  facts:[{l:"Taxable?",v:"Yes"},{l:"Tax Type",v:"Ordinary income"},{l:"When",v:"When received"},{l:"Rate",v:"Income tax rate"},{l:"On Sell",v:"Capital gains too"},{l:"Records",v:"Date + FMV"}],
  sections:[{id:"overview",label:"Overview"},{id:"when",label:"When Taxed"},{id:"reporting",label:"How to Report"},{id:"selling",label:"Selling Later"},{id:"tips",label:"Tips"}],
  stats:[{l:"Income",v:"At receipt"},{l:"Rate",v:"10-37%"},{l:"On Sell",v:"Cap gains"},{l:"Records",v:"Essential"}],
  faqs:[
    {q:"Are XRP airdrops taxable?",a:"Yes. The IRS treats airdrops as ordinary income, taxed at fair market value on the date you receive them."},
    {q:"When do I owe tax?",a:"When you have dominion and control — typically when tokens appear in your wallet."},
    {q:"What is my cost basis for airdropped XRP?",a:"The fair market value at the time you received the airdrop. This becomes your cost basis for future capital gains calculation."},
    {q:"Do I also pay capital gains when I sell?",a:"Yes. When you sell, you owe capital gains tax on the difference between sale price and your cost basis (the FMV at receipt)."},
    {q:"What if I didn't claim my airdrop?",a:"If tokens are automatically deposited, you likely owe tax when deposited. If you must actively claim, it may be taxable upon claiming."},
  ],
  links:[
    {h:"/learn/xrp-cost-basis-methods",t:"Cost Basis",d:"Tax calculation"},
    {h:"/learn/xrp-tax-loss-harvesting",t:"Tax Harvesting",d:"Offset income"},
    {h:"/learn/xrp-airdrops",t:"XRP Airdrops",d:"Airdrop guide"},
    {h:"/learn/xrp-portfolio-trackers",t:"Trackers",d:"Track income"},
    {h:"/learn/xrp-sell-or-hold",t:"Sell or Hold?",d:"Decision help"},
    {h:"/learn/earn-interest-on-xrp",t:"Earn Interest",d:"Yield methods"},
  ],
  cta:["Track Your Airdrops","Record dates and values for tax compliance.","/learn/xrp-portfolio-trackers","Portfolio Trackers →","/learn/xrp-cost-basis-methods","Cost Basis"],
}, `
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">Airdrops Are Taxable</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The IRS treats crypto airdrops as <strong className="text-text-primary">ordinary income</strong>. When you receive an airdrop, you owe income tax on the fair market value at the time of receipt.</p>
            <div className="mt-6"><HighlightBox title="Double Tax Event" variant="warning"><p>Airdrops create TWO tax events: (1) income tax at receipt, and (2) capital gains/loss tax when you sell.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="when" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">When Taxed</h2>
            <div className="mt-6"><DataTable headers={["Event","Tax Type","Amount"]} rows={[["Receive Airdrop","Ordinary Income","FMV at receipt"],["Sell Airdrop","Capital Gains","Sale price - cost basis"],["Hold","No tax yet","Unrealized"]]} highlightCol={1} /></div>
          </RevealSection>

          <RevealSection id="reporting" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Report</h2>
            <div className="mt-6"><IconList items={[
              {title:"Record Date Received",desc:"The exact date tokens appeared in your wallet."},
              {title:"Record Fair Market Value",desc:"Price of the token on the date of receipt (use CoinGecko/CMC)."},
              {title:"Report as Income",desc:"Include on Schedule 1 (Other Income) of your tax return."},
              {title:"Track Cost Basis",desc:"FMV at receipt = your cost basis for when you sell later."},
            ]} variant="number" /></div>
          </RevealSection>

          <RevealSection id="selling" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">When You Sell</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Your cost basis is the FMV when received. If you sell above that, you owe capital gains tax. Below = capital loss (can be used for <Link href="/learn/xrp-tax-loss-harvesting" className="text-xrp-accent underline decoration-xrp-accent/30">tax-loss harvesting</Link>).</p>
          </RevealSection>

          <RevealSection id="tips" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tips</h2>
            <div className="mt-6"><IconList items={[
              {title:"Screenshot Everything",desc:"Wallet balances, dates, prices at time of receipt."},
              {title:"Use Tracking Software",desc:"CoinTracker and Koinly auto-detect airdrops."},
              {title:"Consult a CPA",desc:"Crypto tax is complex. Professional advice pays for itself."},
            ]} variant="check" /></div>
          </RevealSection>`);

// 93. xrp-all-time-high
gen('xrp-all-time-high', {
  title:'XRP All-Time High', accent:'When Was It & Will It Return?',
  fullTitle:'XRP All-Time High: When Was It & Will It Return?', bc:'XRP ATH',
  subtitle:'XRP peaked at $3.84 in January 2018. What caused it, why it crashed, and the path to a new ATH.',
  desc:"XRP's all-time high was $3.84 in January 2018. What caused it, why it crashed, and the path to a new ATH. Complete analysis.",
  kw:['XRP all time high','XRP ATH','XRP highest price','when did XRP peak','XRP record price'],
  tldr:'XRP hit $3.84 on January 4, 2018 during the crypto mania. The surge was driven by retail FOMO, Coinbase listing rumors, and the broader altseason. It crashed 95% over the next year. A return to ATH requires sustained institutional adoption, ETF approval, or a new speculative cycle.',
  facts:[{l:"ATH Price",v:"$3.84"},{l:"Date",v:"Jan 4, 2018"},{l:"Gain From Low",v:"60,000%+"},{l:"Crash After",v:"-95%"},{l:"Recovery?",v:"Not yet"},{l:"Key Catalyst",v:"ETF + Adoption"}],
  sections:[{id:"ath",label:"The ATH"},{id:"cause",label:"What Caused It"},{id:"crash",label:"Why It Crashed"},{id:"return",label:"Path to New ATH"},{id:"catalysts",label:"Catalysts"}],
  stats:[{l:"ATH",v:"$3.84"},{l:"Date",v:"Jan 2018"},{l:"Drop",v:"-95%"},{l:"Recovery",v:"Pending"}],
  faqs:[
    {q:"What was XRP's all-time high?",a:"$3.84 on January 4, 2018 (some exchanges recorded slightly higher due to spread differences)."},
    {q:"Why did XRP crash after ATH?",a:"The entire crypto market crashed in 2018. XRP's retail-driven speculative bubble popped as FOMO reversed to panic selling."},
    {q:"Will XRP reach a new ATH?",a:"Possible catalysts include ETF approval, institutional adoption, RLUSD growth, and a new crypto bull cycle. No guarantees."},
    {q:"What would XRP need to reach $3.84 again?",a:"Significant institutional inflows, sustained utility growth, or speculative mania during a bull cycle."},
    {q:"Has XRP ever been higher than $3.84?",a:"No. That remains the all-time high. The 2021 cycle peak was $1.96, suppressed by the SEC lawsuit."},
  ],
  links:[
    {h:"/learn/xrp-crash-history",t:"Crash History",d:"Every major crash"},
    {h:"/learn/xrp-market-cycles",t:"Cycles",d:"Timing patterns"},
    {h:"/learn/sec-lawsuit-impact-on-xrp-price",t:"SEC Impact",d:"Lawsuit effect"},
    {h:"/learn/xrp-etf-price-impact",t:"ETF Impact",d:"Price projection"},
    {h:"/learn/xrp-sell-or-hold",t:"Sell or Hold?",d:"Decision help"},
    {h:"/learn/ripple-founding-story",t:"Ripple Story",d:"Origin"},
  ],
  cta:["Understand XRP's History","Historical context helps you make better decisions.","/learn/xrp-crash-history","Crash History →","/learn/xrp-market-cycles","Market Cycles"],
}, `
          <RevealSection id="ath">
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s All-Time High: $3.84</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">On <strong className="text-text-primary">January 4, 2018</strong>, XRP reached $3.84 — a gain of over 60,000% from its 2017 low of ~$0.006. It briefly made Ripple co-founder Chris Larsen one of the wealthiest people on Earth.</p>
          </RevealSection>

          <RevealSection id="cause" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Caused the ATH</h2>
            <div className="mt-6"><IconList items={[
              {title:"Crypto Mania",desc:"The entire market was in a speculative frenzy. Bitcoin had just hit $20K."},
              {title:"Altseason Rotation",desc:"Money rotated from BTC to alts. XRP was the biggest beneficiary."},
              {title:"Coinbase Rumors",desc:"Persistent rumors of Coinbase listing drove retail buying."},
              {title:"Retail FOMO",desc:"XRP's low unit price ($0.25 → $3) attracted new investors who thought it was 'cheap'."},
              {title:"Partnership Hype",desc:"Ripple bank partnerships were front-page crypto news."},
            ]} variant="number" /></div>
          </RevealSection>

          <RevealSection id="crash" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why It Crashed</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The 2018 crash was brutal. XRP fell from $3.84 to under $0.25 — a 95% decline. See <Link href="/learn/xrp-crash-history" className="text-xrp-accent underline decoration-xrp-accent/30">crash history</Link> for full details.</p>
            <div className="mt-6"><DataTable headers={["Date","Price","% From ATH"]} rows={[["Jan 2018","$3.84","ATH"],["Feb 2018","$0.90","-77%"],["Dec 2018","$0.25","-93%"],["Mar 2020","$0.12","-97%"]]} highlightCol={2} /></div>
          </RevealSection>

          <RevealSection id="return" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Path to New ATH</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XRP reaching a new ATH requires fundamentally different catalysts than 2018&apos;s retail speculation.</p>
          </RevealSection>

          <RevealSection id="catalysts" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">2026 Catalysts</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"ETF Approval",desc:"Institutional inflows could drive sustained demand."},
              {title:"RLUSD Adoption",desc:"Stablecoin creating real utility demand for XRP."},
              {title:"Post-SEC Clarity",desc:"Regulatory clarity enabling new exchange listings."},
              {title:"Market Cycle",desc:"Bull cycle + altseason could trigger explosive move."},
            ]} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">ETF analysis: <Link href="/learn/xrp-etf-approval-odds" className="text-xrp-accent underline decoration-xrp-accent/30">approval odds</Link>. Cycle timing: <Link href="/learn/xrp-market-cycles" className="text-xrp-accent underline decoration-xrp-accent/30">market cycles</Link>.</p>
          </RevealSection>`);

// 94. xrp-crash-history
gen('xrp-crash-history', {
  title:'XRP Crash History', accent:'Every Major Crash Explained',
  fullTitle:'XRP Crash History: Every Major XRP Crash Explained', bc:'Crash History',
  subtitle:'Every major XRP crash — what caused them and how XRP recovered.',
  desc:"Every major XRP crash explained — 2018 bear market, SEC lawsuit drop, and COVID crash. What caused them and how XRP recovered.",
  kw:['XRP crash','XRP crash history','why did XRP crash','XRP price drops','XRP bear market'],
  tldr:'XRP has crashed 80-97% multiple times: 2018 bear market (-95%), COVID crash (-65%), SEC lawsuit (-75%). Each time it recovered. Understanding crash history helps set expectations and avoid panic selling.',
  facts:[{l:"Worst Crash",v:"-97% (2020)"},{l:"2018 Bear",v:"-95%"},{l:"SEC Lawsuit",v:"-75%"},{l:"COVID",v:"-65%"},{l:"Recoveries",v:"Every time"},{l:"Lesson",v:"Don't panic sell"}],
  sections:[{id:"overview",label:"Overview"},{id:"2018",label:"2018 Bear"},{id:"covid",label:"COVID 2020"},{id:"sec",label:"SEC Lawsuit"},{id:"lessons",label:"Lessons"}],
  stats:[{l:"Crashes",v:"4 major"},{l:"Worst",v:"-97%"},{l:"Recoveries",v:"100%"},{l:"Lesson",v:"Patience"}],
  faqs:[
    {q:"Why does XRP crash so hard?",a:"XRP is a high-beta asset — it amplifies market moves. In bull markets it pumps harder; in bears it crashes harder. Plus, XRP-specific events (SEC lawsuit) add extra downside."},
    {q:"Has XRP always recovered?",a:"Yes, eventually. Every major crash was followed by a recovery, though timelines varied from months to years."},
    {q:"Should I sell during a crash?",a:"Historically, panic selling at the bottom has been the worst strategy. Having a pre-set plan is better than reacting emotionally."},
    {q:"What caused the biggest crash?",a:"The 2018 bear market combined with the SEC lawsuit in Dec 2020 took XRP from $3.84 ATH to $0.12 (-97%)."},
    {q:"Could XRP crash again?",a:"Absolutely. Crypto is volatile. Expect 50-80%+ drawdowns during bear markets. Only invest what you can afford to lose."},
  ],
  links:[
    {h:"/learn/xrp-all-time-high",t:"ATH",d:"Price records"},
    {h:"/learn/sec-lawsuit-impact-on-xrp-price",t:"SEC Impact",d:"Lawsuit analysis"},
    {h:"/learn/xrp-market-cycles",t:"Cycles",d:"Bull/bear patterns"},
    {h:"/learn/xrp-sell-or-hold",t:"Sell or Hold?",d:"Decision help"},
    {h:"/learn/xrp-technical-analysis-guide",t:"TA Guide",d:"Chart analysis"},
    {h:"/learn/ripple-founding-story",t:"Ripple Story",d:"History"},
  ],
  cta:["Learn From History","Understanding past crashes helps you survive future ones.","/learn/xrp-market-cycles","Market Cycles →","/learn/xrp-sell-or-hold","Sell or Hold?"],
}, `
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">XRP Crash Timeline</h2>
            <div className="mt-6"><DataTable headers={["Crash","Date","Drop","Cause","Recovery"]} rows={[["Bear Market","Jan-Dec 2018","-95%","Market cycle end","2020-21 bull"],["COVID","Mar 2020","-65%","Pandemic panic","2 months"],["SEC Lawsuit","Dec 2020","-75%","Regulatory action","2023 ruling"],["2022 Bear","2022","-70%","Market cycle","2023-24"]]} highlightCol={2} /></div>
          </RevealSection>

          <RevealSection id="2018" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">2018 Bear Market (-95%)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">From $3.84 to $0.25. The entire crypto market collapsed. XRP fell harder than most due to its retail-heavy holder base and speculative premium.</p>
          </RevealSection>

          <RevealSection id="covid" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">COVID Crash (-65%)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">March 2020 pandemic panic. All markets crashed. XRP dropped to $0.12 — its lowest since 2017. Recovered within months as stimulus money flooded markets.</p>
          </RevealSection>

          <RevealSection id="sec" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">SEC Lawsuit Crash (-75%)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">December 2020: SEC sued Ripple. XRP was delisted from major US exchanges. Price crashed from $0.60 to $0.17. See <Link href="/learn/sec-lawsuit-impact-on-xrp-price" className="text-xrp-accent underline decoration-xrp-accent/30">full SEC impact analysis</Link>.</p>
            <div className="mt-6"><HighlightBox title="The Impact" variant="warning"><p>The SEC lawsuit suppressed XRP during the biggest crypto bull run in history. Without it, the 2021 peak could have been much higher than $1.96.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="lessons" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Lessons Learned</h2>
            <div className="mt-6"><IconList items={[
              {title:"Crashes Are Normal",desc:"80%+ crashes happen in every cycle. Expect them."},
              {title:"Don't Panic Sell",desc:"Selling at the bottom is historically the worst move."},
              {title:"Have a Plan",desc:"Pre-set buy/sell targets remove emotion."},
              {title:"Only Risk What You Can Lose",desc:"If a 95% crash would ruin you, you have too much in XRP."},
              {title:"Patience Rewards",desc:"Every crash was eventually followed by recovery."},
            ]} variant="check" /></div>
          </RevealSection>`);

// 95. sec-lawsuit-impact-on-xrp-price
gen('sec-lawsuit-impact-on-xrp-price', {
  title:'How the SEC Lawsuit Affected XRP\'s Price', accent:'Full Analysis',
  fullTitle:'How the SEC Lawsuit Affected XRP\'s Price: Full Analysis', bc:'SEC Lawsuit Impact',
  subtitle:'The SEC lawsuit cut XRP\'s price by 70% in weeks. Full analysis from filing to settlement and recovery.',
  desc:"The SEC lawsuit cut XRP's price by 70% in weeks. Full analysis of the price impact from filing to settlement, and the recovery.",
  kw:['SEC lawsuit XRP price','XRP price SEC','how SEC case affected XRP','XRP delisting price impact'],
  tldr:'The SEC lawsuit filed December 22, 2020 caused XRP to drop from $0.60 to $0.17 (-72%) within weeks as exchanges delisted. The July 2023 partial ruling sparked a 75% rally. The final settlement removed the overhang and enabled ETF filings.',
  facts:[{l:"Filing Date",v:"Dec 22, 2020"},{l:"Price Drop",v:"-72%"},{l:"Delistings",v:"Major US exchanges"},{l:"Ruling",v:"July 2023"},{l:"Ruling Rally",v:"+75%"},{l:"Settlement",v:"2024"}],
  sections:[{id:"timeline",label:"Timeline"},{id:"impact",label:"Price Impact"},{id:"delistings",label:"Delistings"},{id:"ruling",label:"The Ruling"},{id:"recovery",label:"Recovery"}],
  stats:[{l:"Drop",v:"-72%"},{l:"Duration",v:"3+ years"},{l:"Ruling",v:"July 2023"},{l:"Recovery",v:"Ongoing"}],
  faqs:[
    {q:"How much did XRP drop from the SEC lawsuit?",a:"About 72% — from $0.60 to $0.17 within a few weeks of the filing in December 2020."},
    {q:"Why did exchanges delist XRP?",a:"Fear of regulatory liability. Coinbase, Kraken, and others suspended US XRP trading to avoid potential SEC enforcement."},
    {q:"What happened after the ruling?",a:"Judge Torres ruled secondary XRP sales are not securities. XRP rallied 75% and exchanges re-listed."},
    {q:"How much did the lawsuit suppress XRP?",a:"During the biggest crypto bull run in history (2021), XRP only reached $1.96 vs $3.84 ATH. Without the lawsuit, gains would likely have been much larger."},
    {q:"Is the overhang gone now?",a:"Largely yes. The settlement removed uncertainty, exchanges re-listed, and ETF filings are proceeding."},
  ],
  links:[
    {h:"/learn/xrp-crash-history",t:"Crash History",d:"All crashes"},
    {h:"/learn/xrp-sec-settlement",t:"SEC Settlement",d:"Final outcome"},
    {h:"/learn/xrp-all-time-high",t:"ATH",d:"Price records"},
    {h:"/learn/xrp-etf-approval-odds",t:"ETF Odds",d:"Post-settlement"},
    {h:"/learn/xrp-market-cycles",t:"Cycles",d:"Market patterns"},
    {h:"/learn/ripple-founding-story",t:"Ripple Story",d:"Company history"},
  ],
  cta:["Understand the Impact","The lawsuit shaped XRP's trajectory for years.","/learn/xrp-sec-settlement","SEC Settlement →","/learn/xrp-etf-approval-odds","ETF Odds"],
}, `
          <RevealSection id="timeline">
            <h2 className="text-2xl font-bold text-text-primary">Lawsuit Timeline</h2>
            <div className="mt-6"><DataTable headers={["Date","Event","Price Impact"]} rows={[["Dec 22, 2020","SEC files lawsuit","Drop begins"],["Jan 2021","US exchange delistings","-72% from pre-suit"],["Apr 2021","Bull market lifts all","Rally to $1.96"],["July 13, 2023","Torres ruling","Instant +75%"],["2024","Settlement reached","Sustained recovery"]]} highlightCol={2} /></div>
          </RevealSection>

          <RevealSection id="impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Price Impact</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XRP went from $0.60 to $0.17 in weeks — a <strong className="text-text-primary">72% crash</strong>. But the deeper impact was suppression: XRP missed most of the 2021 bull run while other alts hit new highs.</p>
            <div className="mt-6"><HighlightBox title="Opportunity Cost" variant="accent"><p>Solana did 100x in 2021. Most major alts hit new ATHs. XRP reached only 51% of its 2018 ATH — the lawsuit was the difference.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="delistings" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Exchange Delistings</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Coinbase, Kraken, Gemini, and others suspended XRP trading for US customers. This removed liquidity, reduced access, and signaled fear — amplifying the crash.</p>
          </RevealSection>

          <RevealSection id="ruling" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Torres Ruling (July 2023)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Judge Torres ruled that XRP sales on exchanges to retail buyers are <strong className="text-text-primary">not securities transactions</strong>. XRP rallied 75% instantly. Exchanges began re-listing.</p>
          </RevealSection>

          <RevealSection id="recovery" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Recovery & Beyond</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The <Link href="/learn/xrp-sec-settlement" className="text-xrp-accent underline decoration-xrp-accent/30">final settlement</Link> removed remaining uncertainty. ETF filings followed. XRP is now positioned for potential institutional adoption free of regulatory overhang. See <Link href="/learn/xrp-etf-approval-odds" className="text-xrp-accent underline decoration-xrp-accent/30">ETF odds</Link>.</p>
          </RevealSection>`);

// 96. ripple-founding-story
gen('ripple-founding-story', {
  title:'Ripple\'s Founding Story', accent:'How XRP Was Created',
  fullTitle:'Ripple\'s Founding Story: How XRP Was Created', bc:'Ripple Founding',
  subtitle:'The origin story of Ripple and XRP — from OpenCoin to Ripple Labs, and the early days.',
  desc:'The origin story of Ripple and XRP — from OpenCoin to Ripple Labs. Chris Larsen, Jed McCaleb, David Schwartz, and the early days.',
  kw:['Ripple founding story','who created XRP','XRP origin','Ripple history origin','Chris Larsen David Schwartz'],
  tldr:'XRP was created in 2012 by David Schwartz, Jed McCaleb, and Arthur Britto. They built a faster alternative to Bitcoin. The company (initially OpenCoin, then Ripple Labs) was co-founded with Chris Larsen. 80 billion XRP was given to Ripple; 20 billion to founders.',
  facts:[{l:"Created",v:"2012"},{l:"Founders",v:"Schwartz, McCaleb, Britto"},{l:"CEO",v:"Chris Larsen (orig)"},{l:"Company",v:"OpenCoin → Ripple"},{l:"Total Supply",v:"100 billion"},{l:"To Ripple",v:"80 billion"}],
  sections:[{id:"origin",label:"Origin"},{id:"founders",label:"Founders"},{id:"company",label:"OpenCoin to Ripple"},{id:"xrp-creation",label:"XRP Creation"},{id:"timeline",label:"Timeline"}],
  stats:[{l:"Year",v:"2012"},{l:"Founders",v:"3"},{l:"Supply",v:"100B"},{l:"Company",v:"Ripple Labs"}],
  faqs:[
    {q:"Who created XRP?",a:"David Schwartz (CTO), Jed McCaleb, and Arthur Britto created the XRP Ledger and XRP in 2012."},
    {q:"Is Ripple the same as XRP?",a:"No. Ripple is a private company. XRP is an independent digital asset on the XRP Ledger. Ripple uses XRP but doesn't control it."},
    {q:"Why was XRP created?",a:"As a faster, more efficient alternative to Bitcoin for payments. XRP settles in 3-5 seconds vs Bitcoin's 10+ minutes."},
    {q:"What happened to Jed McCaleb?",a:"He left Ripple in 2013 and founded Stellar (XLM). He sold his XRP allocation over several years per agreement."},
    {q:"How was the 100 billion XRP distributed?",a:"80 billion to Ripple (later locked in escrow), 20 billion to the three founders."},
  ],
  links:[
    {h:"/learn/xrp-all-time-high",t:"ATH",d:"Price history"},
    {h:"/learn/sec-lawsuit-impact-on-xrp-price",t:"SEC Impact",d:"Lawsuit story"},
    {h:"/learn/what-is-xrp-ledger",t:"XRP Ledger",d:"How it works"},
    {h:"/learn/xrp-crash-history",t:"Crashes",d:"Price drops"},
    {h:"/learn/xrp-community-explained",t:"Community",d:"XRP Army"},
    {h:"/learn/xrp-developer-resources",t:"Dev Resources",d:"Build on XRPL"},
  ],
  cta:["Learn XRP's History","Understanding the origin helps you understand the mission.","/learn/what-is-xrp-ledger","XRP Ledger →","/learn/xrp-community-explained","XRP Community"],
}, `
          <RevealSection id="origin">
            <h2 className="text-2xl font-bold text-text-primary">The Origin of XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">In 2011, David Schwartz, Jed McCaleb, and Arthur Britto began building an alternative to Bitcoin — faster, more energy-efficient, and designed for payments. By 2012, the <Link href="/learn/what-is-xrp-ledger" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> was live.</p>
          </RevealSection>

          <RevealSection id="founders" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Founders</h2>
            <div className="mt-6"><IconList items={[
              {title:"David Schwartz",desc:"Chief architect. Still CTO of Ripple. 'JoelKatz' online. Cryptography veteran."},
              {title:"Jed McCaleb",desc:"Co-creator. Previously founded Mt. Gox. Left in 2013 to create Stellar."},
              {title:"Arthur Britto",desc:"Co-architect. Low-profile. Helped design XRPL consensus and XRP economics."},
              {title:"Chris Larsen",desc:"Joined as CEO. Serial fintech entrepreneur. Provided business direction."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="company" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">OpenCoin to Ripple</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The company was incorporated as <strong className="text-text-primary">OpenCoin</strong> in 2012, then renamed to <strong className="text-text-primary">Ripple Labs</strong> in 2013 (later just &quot;Ripple&quot;). The focus: using XRP to power cross-border payments.</p>
          </RevealSection>

          <RevealSection id="xrp-creation" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s Creation</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">100 billion XRP were created at genesis — all at once. No mining. 80 billion given to the company (now largely in escrow). 20 billion split among the three creators.</p>
            <div className="mt-6"><DataTable headers={["Allocation","Amount","Notes"]} rows={[["Ripple Labs","80 billion","55B locked in monthly escrow"],["David Schwartz","~7 billion","Estimated"],["Jed McCaleb","~9 billion","Sold over time per agreement"],["Arthur Britto","~4 billion","Estimated"]]} highlightCol={1} /></div>
          </RevealSection>

          <RevealSection id="timeline" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Timeline</h2>
            <div className="mt-6"><IconList items={[
              {title:"2011",desc:"Schwartz, McCaleb, Britto begin building the XRP Ledger."},
              {title:"2012",desc:"XRP Ledger launches. OpenCoin incorporated."},
              {title:"2013",desc:"Renamed Ripple Labs. McCaleb departs, founds Stellar."},
              {title:"2015",desc:"Ripple signs first bank partnerships."},
              {title:"2017-18",desc:"XRP reaches $3.84 ATH during crypto mania."},
              {title:"2020",desc:"SEC sues Ripple. Industry-defining legal battle begins."},
              {title:"2023",desc:"Judge Torres rules XRP not a security on exchanges."},
            ]} variant="number" /></div>
          </RevealSection>`);

// 97. xrp-block-explorers
gen('xrp-block-explorers', {
  title:'Best XRP Block Explorers', accent:'Track Transactions & Wallets',
  fullTitle:'Best XRP Block Explorers: Track Transactions & Wallets', bc:'Block Explorers',
  subtitle:'Best XRP block explorers compared — Bithomp, XRPScan, XRPL.org. Track transactions, wallets, and on-chain data.',
  desc:'Best XRP block explorers compared — Bithomp, XRPScan, XRPL.org. How to track transactions, wallets, and on-chain data.',
  kw:['XRP block explorer','XRPL explorer','XRP transaction tracker','Bithomp','XRPScan'],
  tldr:'XRPScan and Bithomp are the best free XRPL block explorers. Use them to track transactions, monitor wallet balances, view network stats, and verify payments. XRPL.org provides the official developer explorer.',
  facts:[{l:"#1 Explorer",v:"XRPScan"},{l:"#2 Explorer",v:"Bithomp"},{l:"Cost",v:"Free"},{l:"Data",v:"Real-time"},{l:"Official",v:"XRPL.org"},{l:"Use",v:"Track anything"}],
  sections:[{id:"comparison",label:"Comparison"},{id:"xrpscan",label:"XRPScan"},{id:"bithomp",label:"Bithomp"},{id:"how",label:"How to Use"},{id:"uses",label:"Use Cases"}],
  stats:[{l:"Explorers",v:"3 main"},{l:"Cost",v:"Free"},{l:"Data",v:"Real-time"},{l:"Network",v:"XRPL"}],
  faqs:[
    {q:"What is the best XRP block explorer?",a:"XRPScan for detailed analytics and Bithomp for wallet tracking and NFT support. Both are free."},
    {q:"Can I track any XRP wallet?",a:"Yes. Enter any XRPL address to see balance, transaction history, and trust lines."},
    {q:"Are block explorers free?",a:"Yes. XRPScan, Bithomp, and XRPL.org are all free to use."},
    {q:"Can I see whale transactions?",a:"Yes. Explorers show all transactions including large whale movements in real-time."},
    {q:"How do I verify a payment?",a:"Enter the transaction hash in any explorer to see confirmation, amount, sender, and receiver."},
  ],
  links:[
    {h:"/learn/xrp-on-chain-analysis",t:"On-Chain Analysis",d:"Read blockchain data"},
    {h:"/learn/xrp-portfolio-trackers",t:"Portfolio Trackers",d:"Track holdings"},
    {h:"/learn/what-is-xrp-ledger",t:"XRP Ledger",d:"XRPL basics"},
    {h:"/learn/xrp-developer-resources",t:"Dev Resources",d:"Build on XRPL"},
    {h:"/learn/how-to-store-xrp-safely",t:"Store XRP",d:"Wallet security"},
    {h:"/learn/xrp-community-explained",t:"Community",d:"XRP ecosystem"},
  ],
  cta:["Explore the Blockchain","See every XRP transaction in real-time.","/learn/xrp-on-chain-analysis","On-Chain Analysis →","/learn/what-is-xrp-ledger","XRP Ledger"],
}, `
          <RevealSection id="comparison">
            <h2 className="text-2xl font-bold text-text-primary">Explorer Comparison</h2>
            <div className="mt-6"><DataTable headers={["Explorer","Strength","NFT Support","API","URL"]} rows={[["XRPScan","Analytics, rich data","Yes","Yes","xrpscan.com"],["Bithomp","Wallet tracking, clean UI","Yes","Yes","bithomp.com"],["XRPL.org","Official, developer-focused","Basic","Yes","livenet.xrpl.org"]]} highlightCol={0} /></div>
          </RevealSection>

          <RevealSection id="xrpscan" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPScan</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The most feature-rich XRPL explorer. Detailed transaction data, network metrics, validator info, and AMM pool stats. Essential for <Link href="/learn/xrp-on-chain-analysis" className="text-xrp-accent underline decoration-xrp-accent/30">on-chain analysis</Link>.</p>
          </RevealSection>

          <RevealSection id="bithomp" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Bithomp</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Clean, intuitive interface. Known wallet labels (shows exchange names), NFT gallery view, and username resolution. Great for everyday use.</p>
          </RevealSection>

          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Use</h2>
            <div className="mt-6"><IconList items={[
              {title:"Search by Address",desc:"Enter any r-address to see balance, history, and trust lines."},
              {title:"Search by Transaction",desc:"Paste a transaction hash to see full details and confirmation."},
              {title:"Network Stats",desc:"View ledger close time, TPS, validator status."},
              {title:"Token/NFT Lookup",desc:"Browse XRPL tokens, AMM pools, and NFT collections."},
            ]} variant="number" /></div>
          </RevealSection>

          <RevealSection id="uses" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Common Use Cases</h2>
            <div className="mt-6"><IconList items={[
              {title:"Verify Payments",desc:"Confirm a transaction was sent and received."},
              {title:"Track Whales",desc:"Monitor large wallet movements for trading signals."},
              {title:"Check Reserves",desc:"See current reserve requirements and your account reserve."},
              {title:"Monitor AMM Pools",desc:"View pool sizes, fees, and LP positions."},
            ]} variant="check" /></div>
          </RevealSection>`);

// 98. xrp-portfolio-trackers
gen('xrp-portfolio-trackers', {
  title:'Best XRP Portfolio Trackers', accent:'Monitor Your Holdings (2026)',
  fullTitle:'Best XRP Portfolio Trackers: Monitor Your Holdings (2026)', bc:'Portfolio Trackers',
  subtitle:'Best apps and tools to track your XRP portfolio — real-time prices, P&L, tax integration.',
  desc:'Best apps and tools to track your XRP portfolio. Real-time prices, P&L tracking, tax integration, and multi-wallet support.',
  kw:['XRP portfolio tracker','track XRP holdings','XRP portfolio app','crypto tracker XRP'],
  tldr:'Best XRP portfolio trackers: CoinTracker (tax integration), Koinly (tax reports), CoinGecko (free tracking), Delta (mobile app). Choose based on whether you need simple tracking or tax reporting.',
  facts:[{l:"Best Free",value:"CoinGecko"},{l:"Best Tax",value:"CoinTracker"},{l:"Best Mobile",value:"Delta"},{l:"Tax Reports",value:"CoinTracker, Koinly"},{l:"Multi-Wallet",value:"All"},{l:"XRPL Support",value:"Varies"}],
  sections:[{id:"comparison",label:"Comparison"},{id:"cointracker",label:"CoinTracker"},{id:"koinly",label:"Koinly"},{id:"free",label:"Free Options"},{id:"choosing",label:"How to Choose"}],
  stats:[{l:"Trackers",v:"5+"},{l:"Best Free",v:"CoinGecko"},{l:"Best Tax",v:"CoinTracker"},{l:"Best App",v:"Delta"}],
  faqs:[
    {q:"Best free XRP portfolio tracker?",a:"CoinGecko portfolio is free with price tracking. For more features, Delta and CoinMarketCap are also free."},
    {q:"Which tracks taxes?",a:"CoinTracker and Koinly generate tax reports (Form 8949) and support multiple cost basis methods."},
    {q:"Can I connect my XRPL wallet?",a:"Some trackers support direct XRPL wallet connection. Others require manual entry or exchange API import."},
    {q:"Do I need a paid tracker?",a:"Free trackers work for simple holdings. If you trade actively or need tax reports, paid tools (CoinTracker, Koinly) are worth it."},
    {q:"Can I track airdrops?",a:"CoinTracker and Koinly auto-detect airdrops and classify them as income for tax purposes."},
  ],
  links:[
    {h:"/learn/xrp-block-explorers",t:"Block Explorers",d:"On-chain tracking"},
    {h:"/learn/xrp-on-chain-analysis",t:"On-Chain Analysis",d:"Blockchain data"},
    {h:"/learn/xrp-cost-basis-methods",t:"Cost Basis",d:"Tax methods"},
    {h:"/learn/xrp-tax-loss-harvesting",t:"Tax Harvesting",d:"Save on taxes"},
    {h:"/learn/xrp-airdrop-taxes",t:"Airdrop Taxes",d:"Income reporting"},
    {h:"/learn/how-to-store-xrp-safely",t:"Store XRP",d:"Security"},
  ],
  cta:["Track Your XRP","Start monitoring your portfolio today.","https://allaboutxrp.com/go/cointracker","Try CoinTracker →","/learn/xrp-cost-basis-methods","Cost Basis"],
}, `
          <RevealSection id="comparison">
            <h2 className="text-2xl font-bold text-text-primary">Tracker Comparison</h2>
            <div className="mt-6"><DataTable headers={["Tracker","Price","Tax Reports","Mobile","XRP Support"]} rows={[["CoinTracker","Free-$199/yr","Yes","Yes","Excellent"],["Koinly","Free-$279/yr","Yes","Yes","Good"],["CoinGecko","Free","No","Yes","Good"],["Delta","Free-$60/yr","No","Yes (best)","Good"],["CoinMarketCap","Free","No","Yes","Basic"]]} highlightCol={0} /></div>
            <div className="mt-6"><HighlightBox title="💰 Recommended" variant="accent"><p>Tax-focused: <a href="https://allaboutxrp.com/go/cointracker" className="text-xrp-accent underline">CoinTracker</a> | <a href="https://allaboutxrp.com/go/koinly" className="text-xrp-accent underline">Koinly</a>. Free tracking: CoinGecko.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="cointracker" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">CoinTracker</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Best for US taxpayers. Auto-imports from 500+ exchanges, generates Form 8949, supports all <Link href="/learn/xrp-cost-basis-methods" className="text-xrp-accent underline decoration-xrp-accent/30">cost basis methods</Link>, and identifies <Link href="/learn/xrp-tax-loss-harvesting" className="text-xrp-accent underline decoration-xrp-accent/30">tax-loss harvesting</Link> opportunities.</p>
          </RevealSection>

          <RevealSection id="koinly" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Koinly</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Strong international support. Generates tax reports for 20+ countries. Handles DeFi, airdrops, and staking income automatically.</p>
          </RevealSection>

          <RevealSection id="free" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Free Options</h2>
            <div className="mt-6"><IconList items={[
              {title:"CoinGecko",desc:"Free portfolio tracking with real-time prices. No tax features."},
              {title:"Delta",desc:"Best mobile app. Beautiful UI, multi-exchange support. Free tier generous."},
              {title:"CoinMarketCap",desc:"Basic portfolio tracking. Good for quick price checks."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="choosing" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Choose</h2>
            <div className="mt-6"><IconList items={[
              {title:"Need Tax Reports?",desc:"CoinTracker or Koinly. Worth the cost at tax time."},
              {title:"Just Price Tracking?",desc:"CoinGecko or Delta. Free and effective."},
              {title:"Active Trader?",desc:"CoinTracker for P&L tracking and tax optimization."},
              {title:"International?",desc:"Koinly supports 20+ country tax formats."},
            ]} variant="check" /></div>
          </RevealSection>`);

// 99. xrp-community-explained
gen('xrp-community-explained', {
  title:'The XRP Community (XRP Army) Explained', accent:'Culture & Influence',
  fullTitle:'The XRP Community (XRP Army) Explained', bc:'XRP Community',
  subtitle:'Who is the XRP Army? The history, culture, and influence of one of crypto\'s most passionate communities.',
  desc:"Who is the XRP Army? The history, culture, and influence of one of crypto's most passionate communities.",
  kw:['XRP community','XRP Army','XRP Twitter','XRP community explained'],
  tldr:'The "XRP Army" is one of crypto\'s largest and most vocal communities. Born from early XRP investors, strengthened by the SEC lawsuit, and united by a belief in XRP\'s utility. They\'re active on Twitter/X, YouTube, and Discord. Love them or hate them, their influence is real.',
  facts:[{l:"Name",v:"XRP Army"},{l:"Platforms",v:"Twitter, YouTube"},{l:"Formed",v:"2017-2018"},{l:"Galvanized",v:"SEC Lawsuit"},{l:"Key Voices",v:"Multiple influencers"},{l:"Sentiment",v:"Extremely bullish"}],
  sections:[{id:"who",label:"Who Are They?"},{id:"history",label:"History"},{id:"culture",label:"Culture"},{id:"influence",label:"Influence"},{id:"criticism",label:"Criticism"}],
  stats:[{l:"Size",v:"Millions"},{l:"Platform",v:"Twitter/X"},{l:"Origin",v:"2017"},{l:"Strength",v:"SEC lawsuit"}],
  faqs:[
    {q:"What is the XRP Army?",a:"A large, passionate community of XRP holders and advocates. Active on social media, known for strong conviction in XRP's potential."},
    {q:"Why is the XRP community so passionate?",a:"Early conviction, the SEC lawsuit creating an 'us vs them' mentality, and belief in XRP's real-world utility all fueled intense loyalty."},
    {q:"Is the XRP Army a positive influence?",a:"Mixed. They drive awareness and community engagement, but can also be hostile to criticism and spread unrealistic price expectations."},
    {q:"Where does the community gather?",a:"Twitter/X is the primary platform. Also YouTube, Discord, Reddit (r/XRP, r/Ripple), and dedicated forums."},
    {q:"Should I listen to XRP influencers?",a:"Be cautious. Many have financial incentives. Cross-reference with data and do your own research."},
  ],
  links:[
    {h:"/learn/ripple-founding-story",t:"Ripple Story",d:"Origin history"},
    {h:"/learn/sec-lawsuit-impact-on-xrp-price",t:"SEC Impact",d:"Community catalyst"},
    {h:"/learn/xrp-developer-resources",t:"Dev Resources",d:"Build on XRPL"},
    {h:"/learn/xrp-all-time-high",t:"ATH",d:"Price history"},
    {h:"/learn/trusted-sources",t:"Trusted Sources",d:"Reliable info"},
    {h:"/learn/xrp-block-explorers",t:"Explorers",d:"Verify data"},
  ],
  cta:["Join the Community","Engage with the XRP ecosystem on your own terms.","/learn/trusted-sources","Trusted Sources →","/learn/ripple-founding-story","Ripple's Story"],
}, `
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
            ]} variant="number" /></div>
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
          </RevealSection>`);

// 100. xrp-developer-resources
gen('xrp-developer-resources', {
  title:'XRP Developer Resources', accent:'Build on the XRP Ledger',
  fullTitle:'XRP Developer Resources: Build on the XRP Ledger', bc:'Developer Resources',
  subtitle:'Everything developers need to start building on the XRP Ledger — SDKs, docs, testnet, grants.',
  desc:'Everything developers need to start building on the XRP Ledger. SDKs, documentation, testnet, grants, and getting started guides.',
  kw:['XRP developer','XRPL developer resources','build on XRPL','XRP development guide','XRPL SDK'],
  tldr:'XRPL has comprehensive developer resources: official docs at xrpl.org, SDKs in JavaScript/Python/Java, free testnet, and the XRPL Grants program for funding. No smart contracts needed — native features like DEX, AMM, and NFTs are built into the protocol.',
  facts:[{l:"Docs",v:"xrpl.org"},{l:"SDKs",v:"JS, Python, Java"},{l:"Testnet",v:"Free"},{l:"Grants",v:"XRPL Grants"},{l:"Smart Contracts",v:"Hooks (coming)"},{l:"NFTs",v:"Native (XLS-20)"}],
  sections:[{id:"overview",label:"Overview"},{id:"sdks",label:"SDKs"},{id:"docs",label:"Documentation"},{id:"testnet",label:"Testnet"},{id:"grants",label:"Grants"}],
  stats:[{l:"SDKs",v:"3+"},{l:"Docs",v:"xrpl.org"},{l:"Testnet",v:"Free"},{l:"Grants",v:"Available"}],
  faqs:[
    {q:"Where do I start building on XRPL?",a:"Start at xrpl.org/docs. Follow the quickstart tutorials, then explore the SDK in your preferred language."},
    {q:"What languages are supported?",a:"JavaScript (xrpl.js), Python (xrpl-py), and Java (xrpl4j). Community libraries exist for other languages."},
    {q:"Does XRPL have smart contracts?",a:"Not traditional smart contracts. Hooks (smart contract-like logic) are being developed. But XRPL has native DEX, AMM, NFTs, and escrow built into the protocol."},
    {q:"Is there funding for XRPL projects?",a:"Yes. The XRPL Grants program provides funding for developers building on the XRP Ledger."},
    {q:"Can I use testnet for free?",a:"Yes. The XRPL testnet provides free test XRP and a full environment for development and testing."},
  ],
  links:[
    {h:"/learn/what-is-xrp-ledger",t:"XRP Ledger",d:"XRPL basics"},
    {h:"/learn/xrpl-nft-marketplaces",t:"NFT Markets",d:"XRPL NFTs"},
    {h:"/learn/xrpl-gaming",t:"XRPL Gaming",d:"Game dev"},
    {h:"/learn/xrp-micropayments",t:"Micropayments",d:"Payment use cases"},
    {h:"/learn/xrp-block-explorers",t:"Explorers",d:"Inspect the ledger"},
    {h:"/learn/xrp-community-explained",t:"Community",d:"XRP ecosystem"},
  ],
  cta:["Start Building","The XRP Ledger is open and ready for your project.","/learn/what-is-xrp-ledger","Learn XRPL →","/learn/xrp-community-explained","Join Community"],
}, `
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">Building on the XRP Ledger</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The <Link href="/learn/what-is-xrp-ledger" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> provides native features that don&apos;t require smart contracts: built-in DEX, AMM, NFTs (XLS-20), escrow, payment channels, and multi-signing. This makes development simpler and more secure.</p>
          </RevealSection>

          <RevealSection id="sdks" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">SDKs & Libraries</h2>
            <div className="mt-6"><DataTable headers={["SDK","Language","Install","Status"]} rows={[["xrpl.js","JavaScript/TS","npm install xrpl","Official"],["xrpl-py","Python","pip install xrpl-py","Official"],["xrpl4j","Java","Maven","Official"],["rippled","C++","Build from source","Core"]]} highlightCol={0} /></div>
          </RevealSection>

          <RevealSection id="docs" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Documentation</h2>
            <div className="mt-6"><IconList items={[
              {title:"xrpl.org/docs",desc:"Official documentation. Tutorials, API reference, concepts, and examples."},
              {title:"XRPL Learning Portal",desc:"Interactive tutorials for beginners."},
              {title:"GitHub",desc:"Open source code for rippled, SDKs, and community projects."},
              {title:"Dev Blog",desc:"Updates on new features, amendments, and best practices."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="testnet" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Testnet</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The XRPL testnet provides a full development environment with free test XRP. Test transactions, token creation, <Link href="/learn/xrpl-nft-marketplaces" className="text-xrp-accent underline decoration-xrp-accent/30">NFT minting</Link>, and AMM operations without risking real funds.</p>
          </RevealSection>

          <RevealSection id="grants" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL Grants</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The XRPL Grants program funds open-source projects building on the XRP Ledger. Grants range from small developer tools to large ecosystem projects. Applications reviewed quarterly.</p>
            <div className="mt-6"><HighlightBox title="Get Funded" variant="accent"><p>Have an idea for the XRPL? Apply for a grant at xrplgrants.org. Open to developers worldwide.</p></HighlightBox></div>
          </RevealSection>`);

console.log('\n✅ All tail pages (88-100) generated!');

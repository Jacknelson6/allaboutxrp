import { gen } from './gen.mjs';

gen("xrp-portfolio-allocation", {
title:"XRP Portfolio Allocation",accent:"Optimal Position Sizing",
subtitle:"A framework for deciding what percentage of your portfolio to allocate to XRP based on risk tolerance and goals.",
desc:"XRP portfolio allocation guide. How much XRP to hold based on risk tolerance, investment horizon, and portfolio strategy.",
kw:["XRP portfolio allocation","how much XRP to buy","XRP portfolio percentage","XRP investment size"],
facts:[{l:"Conservative",v:"1-3% of portfolio"},{l:"Moderate",v:"3-7% of portfolio"},{l:"Aggressive",v:"7-15% of portfolio"},{l:"Max Recommended",v:"Never over 20%"},{l:"Rebalancing",v:"Quarterly"},{l:"Key Factor",v:"Risk tolerance"}],
sections:[{id:"framework",label:"Framework"},{id:"profiles",label:"Risk Profiles"},{id:"sizing",label:"Position Sizing"},{id:"rebalancing",label:"Rebalancing"},{id:"tips",label:"Tips"},{id:"faq",label:"FAQ"}],
stats:[{l:"Conservative",v:"1-3%"},{l:"Moderate",v:"3-7%"},{l:"Aggressive",v:"7-15%"},{l:"Max",v:"Under 20%"}],
tldr:'How much XRP depends on <strong class="text-text-primary">risk tolerance, time horizon, and finances</strong>. Conservative: 1-3%. Moderate: 3-7%. Aggressive: 7-15%. Never more than 20% in one asset. Use <a href="/learn/xrp-dollar-cost-averaging" class="text-xrp-accent underline decoration-xrp-accent/30">DCA</a> to build and rebalance regularly.',
body:`
          <RevealSection id="framework">
            <h2 className="text-2xl font-bold text-text-primary">Allocation Framework</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Portfolio allocation balances <strong className="text-text-primary">potential returns against risk</strong>. XRP has higher upside but higher risk. The right allocation depends on your personal situation.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Risk Tolerance",desc:"How much loss can you handle emotionally and financially? XRP can drop 80%+."},
              {title:"Time Horizon",desc:"Longer = more volatility tolerance. Short-term needs = less XRP."},
              {title:"Financial Situation",desc:"Emergency fund, stable income, no high-interest debt? Then consider crypto."},
              {title:"Conviction Level",desc:"How deeply researched? Higher conviction = potentially higher allocation."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="profiles" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risk Profiles</h2>
            <div className="mt-6"><DataTable headers={["Profile","XRP %","Stocks","Bonds/Cash","Who"]} rows={[
              ["Conservative","1-3%","60-70%","27-39%","Near retirement, low risk"],
              ["Moderate","3-7%","60-75%","18-37%","Mid-career, moderate risk"],
              ["Aggressive","7-15%","55-70%","15-38%","Young, high risk tolerance"],
              ["Crypto-focused","15-25%","40-60%","15-45%","Tech-savvy, high conviction"],
            ]} highlightCol={1} /></div>
          </RevealSection>
          <RevealSection id="sizing" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Position Sizing</h2>
            <div className="mt-6"><IconList items={[
              {title:"The sleep test",desc:"If XRP dropped 80%, could you sleep? If not, reduce allocation."},
              {title:"Emergency fund first",desc:"3-6 months expenses in cash before investing in crypto."},
              {title:"No borrowed money",desc:"Never borrow to invest in XRP. No credit cards, loans, or margin."},
              {title:"Discretionary only",desc:"Bills paid, retirement funded, debts managed. Then consider XRP."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="rebalancing" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Rebalancing</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">When XRP rallies, it becomes a larger % of your portfolio. Rebalancing maintains your target and forces you to <strong className="text-text-primary">sell high and buy low</strong> automatically.</p>
            <div className="mt-6"><HighlightBox title="Example" variant="accent"><p>Target: 5% XRP. After rally: 15%. Sell back to 5% (take profits). After crash: 2%. Buy to 5% (buy dip). Disciplined, unemotional investing.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="tips" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tips</h2>
            <div className="mt-6"><IconList items={[
              {title:"Start small",desc:"Begin 1-2%, increase as you get comfortable with volatility."},
              {title:"Diversify within crypto",desc:"Don't put all crypto in XRP. Consider BTC and ETH too."},
              {title:"Use DCA",desc:"Build position via <Link href='/learn/xrp-dollar-cost-averaging' className='text-xrp-accent underline decoration-xrp-accent/30'>dollar cost averaging</Link>."},
              {title:"Have an exit plan",desc:"Know when to <Link href='/learn/xrp-exit-strategy' className='text-xrp-accent underline decoration-xrp-accent/30'>take profits</Link>. Write it down."},
              {title:"Review annually",desc:"Reassess as circumstances and fundamentals change."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"How much XRP should I buy?",a:"Conservative 1-3%, moderate 3-7%, aggressive 7-15% of total portfolio. Depends on risk tolerance."},
  {q:"Is 100% XRP a good idea?",a:"No. Concentration in any single asset is risky. Diversify even with high conviction."},
  {q:"More XRP or Bitcoin?",a:"Most advisors suggest larger BTC allocation (lower risk) with smaller XRP (higher risk/reward)."},
  {q:"When to rebalance?",a:"Quarterly, or when allocation drifts more than 50% from target."},
  {q:"What if I'm very bullish?",a:"Even with high conviction, cap at 15-20%. You might be wrong. Diversification protects."},
],
related:[
  {href:"/learn/xrp-dollar-cost-averaging",label:"DCA",desc:"Build gradually"},
  {href:"/learn/xrp-exit-strategy",label:"Exit Strategy",desc:"Take profits"},
  {href:"/learn/xrp-vs-stocks",label:"XRP vs Stocks",desc:"Compare assets"},
  {href:"/learn/xrp-common-mistakes",label:"Mistakes",desc:"Avoid errors"},
  {href:"/learn/xrp-for-beginners",label:"Beginners",desc:"Start here"},
  {href:"/learn/how-to-buy-xrp",label:"How to Buy",desc:"Purchase guide"},
],
cta:{title:"Build Your Position",desc:"Start with the right allocation and build over time with DCA.",pri:{href:"/learn/xrp-dollar-cost-averaging",label:"DCA Guide"},sec:{href:"/learn/how-to-buy-xrp",label:"Buy XRP"}},
});

console.log("Fixed portfolio page");

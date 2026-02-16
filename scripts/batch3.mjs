import { gen } from './gen.mjs';

// Batch 3: Ecosystem (6) + Technology (6)

gen("xrp-japan-sbi", {
title:"XRP in Japan: SBI Holdings",accent:"Japan's XRP Champion",
subtitle:"SBI Holdings is Ripple's biggest partner. How this Japanese financial giant drives XRP adoption across Asia.",
desc:"SBI Holdings and XRP in Japan. SBI's Ripple partnership, SBI VC Trade, and Japan's leading role in XRP adoption.",
kw:["XRP Japan","SBI Holdings XRP","SBI Ripple","XRP Japan adoption","SBI VC Trade"],
facts:[{l:"Partner Since",v:"2016"},{l:"Exchange",v:"SBI VC Trade"},{l:"Use Case",v:"Cross-border payments"},{l:"Regulation",v:"FSA regulated"},{l:"XRP Status",v:"Legal in Japan"},{l:"JV",v:"SBI Ripple Asia"}],
sections:[{id:"sbi",label:"SBI Overview"},{id:"partnership",label:"Partnership"},{id:"exchange",label:"SBI VC Trade"},{id:"remittances",label:"Remittances"},{id:"future",label:"Future"},{id:"faq",label:"FAQ"}],
stats:[{l:"Since",v:"2016"},{l:"Exchange",v:"SBI VC"},{l:"Status",v:"Legal"},{l:"Market",v:"#1 XRP"}],
tldr:'<strong class="text-text-primary">SBI Holdings</strong> — one of Japan&apos;s largest financial groups — has been Ripple&apos;s most important partner since 2016. They run <strong class="text-text-primary">SBI VC Trade</strong> (Japan&apos;s leading XRP exchange), use <a href="/learn/on-demand-liquidity" class="text-xrp-accent underline decoration-xrp-accent/30">ODL for remittances</a>, and champion XRP adoption. Japan is the world&apos;s most XRP-friendly major economy.',
body:`
          <RevealSection id="sbi">
            <h2 className="text-2xl font-bold text-text-primary">SBI Holdings</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">SBI is a <strong className="text-text-primary">$6B+ financial conglomerate</strong> with banking, securities, insurance, and crypto divisions. CEO Yoshitaka Kitao is one of XRP&apos;s most vocal institutional supporters.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"SBI VC Trade",desc:"Regulated exchange. XRP is most traded asset. One of Japan's largest."},
              {title:"SBI Remit",desc:"International remittances using XRP/ODL for real-time settlement."},
              {title:"SBI Ripple Asia",desc:"Joint venture for payment solutions across Asia-Pacific."},
              {title:"SBI Digital Asset",desc:"Broader digital asset strategy including custody and tokenization."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="partnership" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Ripple-SBI Partnership</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">SBI invested in Ripple in 2016 and created <strong className="text-text-primary">SBI Ripple Asia</strong> to expand <Link href="/learn/ripplenet" className="text-xrp-accent underline decoration-xrp-accent/30">RippleNet</Link> and ODL across Asia. SBI has financial skin in the game as a Ripple investor.</p>
            <div className="mt-6"><HighlightBox title="Why SBI Matters" variant="accent"><p>SBI provides deep institutional credibility in Asia&apos;s largest crypto market. Japan&apos;s regulation + SBI&apos;s infrastructure = ideal for <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">XRP adoption</Link>.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="exchange" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">SBI VC Trade</h2>
            <div className="mt-6"><IconList items={[
              {title:"FSA regulated",desc:"Licensed under Japan's Payment Services Act. Among most regulated globally."},
              {title:"XRP #1",desc:"XRP consistently the most traded asset, reflecting Japan's XRP enthusiasm."},
              {title:"Staking & lending",desc:"XRP lending products leveraging Japan's favorable framework."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="remittances" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Remittance Corridors</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link> through SBI Remit enables real-time transfers from Japan to <Link href="/learn/xrp-southeast-asia" className="text-xrp-accent underline decoration-xrp-accent/30">Southeast Asia</Link>.</p>
            <div className="mt-6"><DataTable headers={["Corridor","Status","Speed","Savings"]} rows={[
              ["Japan → Philippines","Active","Real-time","40-60%"],
              ["Japan → Vietnam","Active","Real-time","30-50%"],
              ["Japan → Thailand","Growing","Real-time","35-55%"],
            ]} highlightCol={1} /></div>
          </RevealSection>
          <RevealSection id="future" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Future Plans</h2>
            <div className="mt-6"><IconList items={[
              {title:"NFT marketplace",desc:"XRPL-based NFT initiatives in Japan."},
              {title:"CBDC collaboration",desc:"Involved in Japan's digital yen discussions."},
              {title:"More corridors",desc:"New remittance corridors across Asia."},
              {title:"Institutional custody",desc:"Expanding custody for institutional XRP holders."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"Why is Japan important for XRP?",a:"Progressive regulation, XRP is legal and popular, SBI Holdings is Ripple's biggest institutional partner."},
  {q:"What is SBI Ripple Asia?",a:"Joint venture expanding payment solutions and ODL across Asia-Pacific."},
  {q:"Is XRP most popular in Japan?",a:"Consistently top 2-3 most traded. Often #1 on SBI VC Trade."},
  {q:"Does SBI use XRP for payments?",a:"Yes. SBI Remit uses ODL for international remittances, especially Japan-Philippines."},
  {q:"Is SBI a Ripple investor?",a:"Yes. Invested in 2016 and is one of Ripple's most consistent institutional backers."},
],
related:[
  {href:"/learn/on-demand-liquidity",label:"ODL",desc:"How ODL works"},
  {href:"/learn/partnerships",label:"Partnerships",desc:"All Ripple partners"},
  {href:"/learn/cross-border-payments",label:"Payments",desc:"Global payments"},
  {href:"/learn/xrp-southeast-asia",label:"SE Asia",desc:"Regional adoption"},
  {href:"/learn/xrp-institutional-custody",label:"Custody",desc:"Enterprise storage"},
  {href:"/learn/ripplenet",label:"RippleNet",desc:"Payment network"},
],
cta:{title:"Explore XRP Adoption",desc:"Japan leads in XRP adoption. See how others follow.",pri:{href:"/learn/partnerships",label:"Partnerships →"},sec:{href:"/learn/on-demand-liquidity",label:"ODL"}},
});

gen("xrp-middle-east-adoption", {
title:"XRP in the Middle East",accent:"Gulf Region Adoption",
subtitle:"XRP and Ripple are expanding across the UAE, Saudi Arabia, and the Gulf through partnerships and regulatory clarity.",
desc:"XRP adoption in the Middle East. UAE, Saudi Arabia, Gulf partnerships with Ripple, and institutional interest.",
kw:["XRP Middle East","XRP UAE","XRP Dubai","Ripple Middle East","XRP Saudi Arabia"],
facts:[{l:"Key Market",v:"UAE / Dubai"},{l:"Regulation",v:"VARA, ADGM"},{l:"Use Case",v:"Remittances & trade"},{l:"CBDC",v:"Digital Dirham"},{l:"Growth",v:"Rapidly expanding"},{l:"Partners",v:"Multiple banks"}],
sections:[{id:"opportunity",label:"Opportunity"},{id:"uae",label:"UAE"},{id:"saudi",label:"Saudi Arabia"},{id:"corridors",label:"Corridors"},{id:"future",label:"Future"},{id:"faq",label:"FAQ"}],
stats:[{l:"Hub",v:"Dubai"},{l:"Regulation",v:"Progressive"},{l:"Growth",v:"Rapid"},{l:"Focus",v:"Payments"}],
tldr:'The Middle East is a <strong class="text-text-primary">major hub for XRP adoption</strong>. UAE and Saudi Arabia have progressive crypto regulation, massive remittance corridors, and growing institutional interest. Ripple has <a href="/learn/partnerships" class="text-xrp-accent underline decoration-xrp-accent/30">partnerships</a> with regional banks. Dubai is positioning as a global crypto capital.',
body:`
          <RevealSection id="opportunity">
            <h2 className="text-2xl font-bold text-text-primary">The Middle East Opportunity</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The Middle East handles <strong className="text-text-primary">$100B+ in annual remittances</strong> with heavy fintech investment. Progressive regulation and massive expatriate workforce create ideal conditions for <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">XRP-powered payments</Link>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"$100B+ Remittances",desc:"Millions of expat workers sending money home. Traditional methods slow and expensive."},
              {title:"Progressive Regulation",desc:"VARA (Dubai), ADGM (Abu Dhabi), CBB (Bahrain) offer clear frameworks."},
              {title:"Government Support",desc:"Gulf states actively court crypto firms. Dubai DMCC hosts hundreds."},
              {title:"Trade Finance",desc:"Oil and commodity trade creates huge demand for efficient settlement."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="uae" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">UAE &amp; Dubai</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Dubai = <strong className="text-text-primary">crypto capital of the Middle East</strong>. Ripple has regional office and <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">multiple partnerships</Link>.</p>
            <div className="mt-6"><IconList items={[
              {title:"VARA regulation",desc:"World's most comprehensive crypto framework from Dubai."},
              {title:"Ripple office",desc:"Middle East operations run from Dubai, serving MENA region."},
              {title:"Banking partners",desc:"UAE and Gulf banks exploring/using RippleNet for payments."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="saudi" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Saudi Arabia</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Vision 2030 includes fintech modernization. SAMA has worked with Ripple on cross-border payment pilots. Massive remittance corridors prime for <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link>.</p>
            <div className="mt-6"><HighlightBox title="SAMA Partnership" variant="accent"><p>Saudi Arabian Monetary Authority partnered with Ripple for instant cross-border payment testing. Saudi Arabia is one of world&apos;s largest remittance senders.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="corridors" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Remittance Corridors</h2>
            <div className="mt-6"><DataTable headers={["Corridor","Annual","Traditional Cost","XRP Savings"]} rows={[
              ["UAE → India","$15B+","3-5%","60-80%"],
              ["Saudi → Pakistan","$8B+","4-6%","60-80%"],
              ["UAE → Philippines","$5B+","3-5%","60-80%"],
              ["Kuwait → Egypt","$3B+","4-7%","60-80%"],
            ]} highlightCol={3} /></div>
          </RevealSection>
          <RevealSection id="future" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Future Outlook</h2>
            <div className="mt-6"><IconList items={[
              {title:"CBDC integration",desc:"Gulf CBDCs could integrate with XRPL for cross-border settlement."},
              {title:"Trade finance",desc:"Oil/commodity settlement via XRP could transform infrastructure."},
              {title:"Islamic finance",desc:"XRP's utility-based nature may align with Sharia-compliant principles."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"Is XRP legal in UAE?",a:"Yes. VARA and ADGM provide comprehensive regulation. XRP legally traded and used."},
  {q:"Ripple partnerships?",a:"Yes — multiple banks and payment providers across the Gulf. Regional office in Dubai."},
  {q:"Why Middle East matters?",a:"Massive remittances, progressive regulation, government fintech support, trade finance needs."},
  {q:"Saudi Arabia using XRP?",a:"SAMA has piloted Ripple tech. Full ODL next step as regulation evolves."},
  {q:"How does XRP help?",a:"Near-instant settlement at 60-80% lower cost than traditional remittances."},
],
related:[
  {href:"/learn/cross-border-payments",label:"Payments",desc:"Global payments"},
  {href:"/learn/on-demand-liquidity",label:"ODL",desc:"How ODL works"},
  {href:"/learn/partnerships",label:"Partnerships",desc:"Ripple partners"},
  {href:"/learn/xrp-africa-remittances",label:"Africa",desc:"African adoption"},
  {href:"/learn/xrp-japan-sbi",label:"Japan",desc:"Asian adoption"},
  {href:"/learn/xrp-european-regulation",label:"Europe",desc:"EU regulation"},
],
cta:{title:"Explore Global Adoption",desc:"The Middle East is one piece of XRP's global story.",pri:{href:"/learn/partnerships",label:"Partnerships →"},sec:{href:"/learn/cross-border-payments",label:"Payments"}},
});

gen("xrp-africa-remittances", {
title:"XRP for Africa Remittances",accent:"Transforming African Payments",
subtitle:"Africa receives $100B+ annually at the world's highest fees. XRP can cut costs by 90%.",
desc:"XRP transforming African remittances. Corridors, mobile money integration, cost savings, and challenges.",
kw:["XRP Africa","XRP remittances Africa","XRP African payments","Ripple Africa"],
facts:[{l:"Annual",v:"$100B+ to Africa"},{l:"Average Fee",v:"8-12% (highest)"},{l:"XRP Fee",v:"<1%"},{l:"Speed",v:"Seconds vs days"},{l:"Corridors",v:"UK/EU/US → Africa"},{l:"Mobile Money",v:"562M accounts"}],
sections:[{id:"problem",label:"The Problem"},{id:"solution",label:"XRP Solution"},{id:"corridors",label:"Corridors"},{id:"mobile",label:"Mobile Money"},{id:"challenges",label:"Challenges"},{id:"faq",label:"FAQ"}],
stats:[{l:"Fees Now",v:"8-12%"},{l:"With XRP",v:"<1%"},{l:"Speed",v:"Seconds"},{l:"Market",v:"$100B+"}],
tldr:'Africa has the <strong class="text-text-primary">highest remittance fees globally</strong> — 8-12%. Costs families <strong class="text-text-primary">billions annually</strong>. XRP reduces fees to under 1% via <a href="/learn/on-demand-liquidity" class="text-xrp-accent underline decoration-xrp-accent/30">ODL</a>, settling in seconds. Integration with mobile money (M-Pesa, 562M accounts) could bring XRP to hundreds of millions.',
body:`
          <RevealSection id="problem">
            <h2 className="text-2xl font-bold text-text-primary">Africa&apos;s Remittance Problem</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><strong className="text-text-primary">$100B+ annual remittances</strong> at <strong className="text-text-primary">8-12% average fees</strong> — the highest globally. Sending $200 from London to Lagos costs $16-24. A tax on the world&apos;s poorest.</p>
            <div className="mt-6"><DataTable headers={["Corridor","Fee","Volume","Potential Savings"]} rows={[
              ["UK → Nigeria","8-10%","$25B","$2-2.5B/yr"],
              ["US → Kenya","7-9%","$4B","$280-360M/yr"],
              ["EU → Morocco","5-7%","$10B","$400-600M/yr"],
              ["Intra-Africa","12-15%","$20B","$2.4-3B/yr"],
            ]} highlightCol={1} /></div>
          </RevealSection>
          <RevealSection id="solution" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How XRP Solves This</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link> uses XRP as <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">bridge currency</Link>, eliminating pre-funded accounts.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"90%+ Fee Reduction",desc:"8-12% → under 1%. Saves $14-22 per $200 remittance."},
              {title:"Instant Settlement",desc:"Seconds vs days. Families get money when needed."},
              {title:"24/7 Operation",desc:"No banking hours. Send anytime from anywhere."},
              {title:"No Pre-Funding",desc:"Eliminates nostro accounts in African currencies."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="corridors" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Corridors</h2>
            <div className="mt-6"><IconList items={[
              {title:"UK → Nigeria",desc:"Largest corridor. $25B+ annually from UK, US, and EU."},
              {title:"Gulf → East Africa",desc:"Kenya, Ethiopia, Somalia. Billions from Gulf workers."},
              {title:"EU → North Africa",desc:"Morocco, Egypt, Tunisia. Large European diaspora."},
              {title:"Intra-Africa",desc:"Most expensive at 12-15%. Moving between countries is absurdly costly."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="mobile" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Mobile Money Integration</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Africa has <strong className="text-text-primary">562M mobile money accounts</strong>. M-Pesa, MTN, Airtel serve as primary financial infrastructure. XRP settling the backend brings <Link href="/learn/xrp-use-cases" className="text-xrp-accent underline decoration-xrp-accent/30">real utility</Link> without requiring crypto knowledge.</p>
            <div className="mt-6"><HighlightBox title="The Opportunity" variant="accent"><p>Most Africans have mobile money, not bank accounts. If XRP settles mobile-to-mobile remittances, users benefit without knowing they&apos;re using crypto.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="challenges" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Challenges</h2>
            <div className="mt-6"><IconList items={[
              {title:"Regulatory fragmentation",desc:"54 countries with different frameworks. No unified crypto approach."},
              {title:"Local currency liquidity",desc:"Building XRP pairs for African currencies takes time."},
              {title:"Last-mile delivery",desc:"Converting to local currency and delivering cash in rural areas."},
              {title:"Infrastructure",desc:"Internet and smartphone access varies widely."},
            ]} variant="warn" /></div>
          </RevealSection>`,
faq:[
  {q:"Is XRP used in Africa?",a:"Ripple building ODL corridors into Africa. Early but growing. Potential impact enormous."},
  {q:"Savings?",a:"Current fees 8-12%. XRP reduces to <1%. Billions saved annually for families."},
  {q:"Mobile money integration?",a:"562M accounts. Backend XRP settlement could provide seamless cross-border without crypto knowledge."},
  {q:"Most likely countries?",a:"Nigeria (largest economy), Kenya (mobile money leader), South Africa (developed finance), Morocco (EU corridor)."},
  {q:"Biggest challenges?",a:"Regulatory fragmentation, local currency liquidity, last-mile cash delivery, infrastructure gaps."},
],
related:[
  {href:"/learn/cross-border-payments",label:"Payments",desc:"Global payments"},
  {href:"/learn/on-demand-liquidity",label:"ODL",desc:"How it works"},
  {href:"/learn/xrp-use-cases",label:"Use Cases",desc:"Applications"},
  {href:"/learn/xrp-middle-east-adoption",label:"Middle East",desc:"Gulf adoption"},
  {href:"/learn/xrp-southeast-asia",label:"SE Asia",desc:"Asian adoption"},
  {href:"/learn/partnerships",label:"Partnerships",desc:"Ripple partners"},
],
cta:{title:"XRP Changes Global Payments",desc:"From Africa to Asia, XRP makes cross-border payments faster and cheaper.",pri:{href:"/learn/cross-border-payments",label:"Payments →"},sec:{href:"/learn/on-demand-liquidity",label:"ODL"}},
});

gen("xrp-southeast-asia", {
title:"XRP in Southeast Asia",accent:"ASEAN Adoption",
subtitle:"Southeast Asia's massive remittance market and growing crypto adoption make it key for XRP.",
desc:"XRP in Southeast Asia. Philippines, Thailand, remittance corridors, and Ripple's ASEAN partnerships.",
kw:["XRP Southeast Asia","XRP Philippines","XRP Thailand","XRP ASEAN"],
facts:[{l:"Region",v:"ASEAN (11 countries)"},{l:"Remittances",v:"$80B+ annually"},{l:"Partner",v:"SBI/Tranglo"},{l:"Top Corridor",v:"Japan → Philippines"},{l:"Adoption",v:"High and growing"},{l:"Population",v:"680 million"}],
sections:[{id:"overview",label:"Overview"},{id:"philippines",label:"Philippines"},{id:"thailand",label:"Thailand"},{id:"corridors",label:"Corridors"},{id:"partners",label:"Partners"},{id:"faq",label:"FAQ"}],
stats:[{l:"Market",v:"$80B+"},{l:"Countries",v:"11"},{l:"Growth",v:"Rapid"},{l:"Partner",v:"Tranglo"}],
tldr:'Southeast Asia is critical for XRP. The Philippines alone gets $38B+ in remittances. Ripple&apos;s <strong class="text-text-primary">Tranglo acquisition</strong> and <a href="/learn/xrp-japan-sbi" class="text-xrp-accent underline decoration-xrp-accent/30">SBI partnership</a> position XRP as backbone of Asia-Pacific <a href="/learn/cross-border-payments" class="text-xrp-accent underline decoration-xrp-accent/30">cross-border payments</a>.',
body:`
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">Why SE Asia Matters</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">680M people, <strong className="text-text-primary">$80B+ in remittances</strong> annually. High smartphone penetration and crypto adoption. Ideal for <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL-powered payments</Link>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Massive Remittances",desc:"Philippines ($38B), Vietnam ($18B), Indonesia ($12B)."},
              {title:"High Crypto Adoption",desc:"PH, VN, TH rank top 20 globally for crypto adoption."},
              {title:"Mobile-First",desc:"High smartphone penetration enables digital payments."},
              {title:"Ripple Infrastructure",desc:"Tranglo, SBI Ripple Asia, and local partners."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="philippines" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Philippines</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><strong className="text-text-primary">#1 XRP market in SE Asia</strong>. $38B+ remittances = 10% of GDP. Japan-Philippines one of ODL&apos;s most established corridors via <Link href="/learn/xrp-japan-sbi" className="text-xrp-accent underline decoration-xrp-accent/30">SBI Remit</Link>.</p>
            <div className="mt-6"><IconList items={[
              {title:"$38B+ annual remittances",desc:"OFWs send from US, Gulf, Japan, Europe."},
              {title:"ODL corridor active",desc:"Japan-Philippines established via SBI."},
              {title:"BSP regulated",desc:"Bangko Sentral provides framework."},
              {title:"Coins.ph",desc:"Leading platform. Millions of users."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="thailand" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Thailand</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Thailand&apos;s SEC provides clear crypto regulation. <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple partnerships</Link> with Thai banks and fintech companies are growing.</p>
            <div className="mt-6"><HighlightBox title="SCB & DeeMoney" variant="accent"><p>Siam Commercial Bank and DeeMoney have explored Ripple technology for cross-border payments, targeting the Japan-Thailand and ASEAN remittance corridors.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="corridors" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Corridors</h2>
            <div className="mt-6"><DataTable headers={["Corridor","Volume","Status","Savings"]} rows={[
              ["Japan → Philippines","$3B+","Active ODL","40-60%"],
              ["Gulf → Philippines","$5B+","Growing","50-70%"],
              ["Korea → Vietnam","$2B+","Developing","40-60%"],
              ["Singapore → ASEAN","$10B+","Potential","30-50%"],
            ]} highlightCol={2} /></div>
          </RevealSection>
          <RevealSection id="partners" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Partners</h2>
            <div className="mt-6"><IconList items={[
              {title:"Tranglo",desc:"ASEAN payment hub. Ripple acquired 40% stake. Key ODL infrastructure."},
              {title:"SBI Ripple Asia",desc:"Joint venture driving Japan-SE Asia corridors."},
              {title:"Coins.ph",desc:"Philippines' leading crypto platform with XRP support."},
              {title:"DeeMoney",desc:"Thai cross-border payment provider using Ripple tech."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"Is XRP popular in SE Asia?",a:"Yes, especially Philippines and Thailand. High crypto adoption, large remittance markets."},
  {q:"What is Tranglo?",a:"Major ASEAN payment hub. Ripple owns 40%. Key infrastructure for ODL in the region."},
  {q:"Is ODL active in SE Asia?",a:"Yes. Japan-Philippines is one of ODL's most established corridors via SBI Remit."},
  {q:"Which countries lead?",a:"Philippines (remittances), Thailand (regulation), Singapore (financial hub)."},
  {q:"How much can XRP save?",a:"40-70% vs traditional remittance fees depending on corridor."},
],
related:[
  {href:"/learn/xrp-japan-sbi",label:"Japan & SBI",desc:"Key partner"},
  {href:"/learn/on-demand-liquidity",label:"ODL",desc:"How it works"},
  {href:"/learn/cross-border-payments",label:"Payments",desc:"Global payments"},
  {href:"/learn/partnerships",label:"Partnerships",desc:"All partners"},
  {href:"/learn/xrp-middle-east-adoption",label:"Middle East",desc:"Gulf adoption"},
  {href:"/learn/xrp-africa-remittances",label:"Africa",desc:"African adoption"},
],
cta:{title:"Explore ASEAN Adoption",desc:"Southeast Asia is at the forefront of XRP-powered payments.",pri:{href:"/learn/on-demand-liquidity",label:"ODL Guide →"},sec:{href:"/learn/partnerships",label:"Partnerships"}},
});

gen("xrp-european-regulation", {
title:"XRP European Regulation",accent:"MiCA & EU Framework",
subtitle:"How Europe's MiCA regulation impacts XRP and positions it for institutional adoption across the EU.",
desc:"XRP under European regulation. MiCA framework, EU crypto regulation, and implications for XRP adoption.",
kw:["XRP European regulation","XRP MiCA","XRP EU","XRP Europe","MiCA crypto"],
facts:[{l:"Framework",v:"MiCA (Markets in Crypto-Assets)"},{l:"Effective",v:"2024-2025 phased"},{l:"XRP Status",v:"Utility token"},{l:"Impact",v:"Clear legal framework"},{l:"RLUSD",v:"MiCA-compliant stablecoin"},{l:"Exchanges",v:"Must be licensed"}],
sections:[{id:"mica",label:"MiCA Overview"},{id:"xrp-impact",label:"XRP Impact"},{id:"rlusd",label:"RLUSD in EU"},{id:"exchanges",label:"Exchanges"},{id:"outlook",label:"Outlook"},{id:"faq",label:"FAQ"}],
stats:[{l:"Framework",v:"MiCA"},{l:"Status",v:"Utility"},{l:"Phase",v:"2024-25"},{l:"Impact",v:"Positive"}],
tldr:'Europe&apos;s <strong class="text-text-primary">MiCA regulation</strong> provides the world&apos;s first comprehensive crypto framework. XRP benefits as a <strong class="text-text-primary">utility token with clear classification</strong>. <a href="/learn/rlusd-explained" class="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</a> is positioned as a MiCA-compliant stablecoin. Regulatory clarity drives institutional adoption across the EU.',
body:`
          <RevealSection id="mica">
            <h2 className="text-2xl font-bold text-text-primary">MiCA: Europe&apos;s Crypto Framework</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The <strong className="text-text-primary">Markets in Crypto-Assets (MiCA)</strong> regulation is the world&apos;s first comprehensive crypto regulatory framework. It provides clear rules for crypto assets, stablecoins, and service providers across all 27 EU member states.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Unified Rules",desc:"One framework for all EU countries. No more regulatory arbitrage."},
              {title:"Token Classification",desc:"Clear categories: utility tokens, asset-referenced tokens, e-money tokens."},
              {title:"Stablecoin Rules",desc:"Strict reserve and redemption requirements for stablecoins."},
              {title:"Exchange Licensing",desc:"All crypto exchanges must be licensed. Consumer protection standards."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="xrp-impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Impact on XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">MiCA classifies XRP as a <strong className="text-text-primary">utility token</strong>, providing regulatory clarity that was missing during the <Link href="/learn/sec-vs-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">SEC lawsuit</Link> era. This clarity drives institutional confidence.</p>
            <div className="mt-6"><IconList items={[
              {title:"Clear classification",desc:"XRP as utility token removes regulatory uncertainty in Europe."},
              {title:"Institutional access",desc:"Banks and funds can now offer XRP products with regulatory confidence."},
              {title:"Exchange availability",desc:"Major EU exchanges can list and trade XRP without legal risk."},
              {title:"ODL expansion",desc:"Regulatory clarity enables more European ODL corridors."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="rlusd" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">RLUSD in Europe</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/rlusd-explained" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</Link> is designed to comply with MiCA&apos;s strict stablecoin requirements, positioning it as a <strong className="text-text-primary">premier euro-denominated stablecoin</strong> in the EU market.</p>
            <div className="mt-6"><HighlightBox title="RLUSD Advantage" variant="accent"><p>While competitors like USDT face MiCA compliance challenges, RLUSD was built with regulation in mind from day one. This gives Ripple a first-mover advantage in the EU stablecoin market.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="exchanges" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">European Exchange Access</h2>
            <div className="mt-6"><DataTable headers={["Exchange","Location","XRP","MiCA Status"]} rows={[
              ["Bitstamp","Luxembourg","Full support","Licensed"],
              ["Kraken","EU presence","Full support","Applying"],
              ["Binance","Multiple EU","Full support","Varied"],
              ["Coinbase","Ireland","Full support","Licensed"],
            ]} highlightCol={3} /></div>
          </RevealSection>
          <RevealSection id="outlook" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Outlook</h2>
            <div className="mt-6"><IconList items={[
              {title:"Institutional adoption",desc:"Clear rules = banks and funds entering XRP market with confidence."},
              {title:"Cross-border ODL",desc:"EU corridors expanding as regulatory barriers fall."},
              {title:"Stablecoin dominance",desc:"MiCA-compliant RLUSD could capture significant EU stablecoin market share."},
              {title:"Global standard",desc:"MiCA may become the template for crypto regulation worldwide."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"Is XRP legal in Europe?",a:"Yes. Under MiCA, XRP is classified as a utility token with clear legal standing across all EU member states."},
  {q:"What is MiCA?",a:"Markets in Crypto-Assets regulation. World's first comprehensive crypto framework covering tokens, stablecoins, and exchanges."},
  {q:"How does MiCA help XRP?",a:"Clear classification, regulatory certainty, institutional access, and enabling ODL expansion across Europe."},
  {q:"Is RLUSD MiCA compliant?",a:"RLUSD is designed for MiCA compliance, giving it an advantage over competitors facing compliance challenges."},
  {q:"Which EU exchanges support XRP?",a:"All major EU exchanges: Bitstamp, Kraken, Binance, Coinbase. Full XRP trading support."},
],
related:[
  {href:"/learn/rlusd-explained",label:"RLUSD",desc:"Ripple stablecoin"},
  {href:"/learn/sec-vs-ripple",label:"SEC vs Ripple",desc:"US regulation"},
  {href:"/learn/is-xrp-a-security",label:"Is XRP a Security?",desc:"Classification"},
  {href:"/learn/xrp-institutional-custody",label:"Custody",desc:"Enterprise storage"},
  {href:"/learn/partnerships",label:"Partnerships",desc:"EU partners"},
  {href:"/learn/xrp-etf",label:"XRP ETF",desc:"ETF prospects"},
],
cta:{title:"Regulatory Clarity Drives Adoption",desc:"Europe's MiCA framework is a game-changer for XRP.",pri:{href:"/learn/rlusd-explained",label:"RLUSD →"},sec:{href:"/learn/partnerships",label:"Partnerships"}},
});

gen("xrp-institutional-custody", {
title:"XRP Institutional Custody",accent:"Enterprise-Grade Storage",
subtitle:"How institutions store and manage large XRP holdings. Custody solutions, security, and regulatory requirements.",
desc:"XRP institutional custody solutions. Enterprise storage, security frameworks, regulatory requirements, and leading providers.",
kw:["XRP institutional custody","XRP custody solutions","XRP enterprise storage","institutional XRP"],
facts:[{l:"Key Providers",v:"Ripple Custody, BitGo, Fireblocks"},{l:"Insurance",v:"$100M+ coverage available"},{l:"Regulation",v:"Varies by jurisdiction"},{l:"Security",v:"HSMs, multi-sig, MPC"},{l:"Demand",v:"Growing with ETF interest"},{l:"Standards",v:"SOC 2, ISO 27001"}],
sections:[{id:"why",label:"Why Custody"},{id:"providers",label:"Providers"},{id:"security",label:"Security"},{id:"regulation",label:"Regulation"},{id:"trends",label:"Trends"},{id:"faq",label:"FAQ"}],
stats:[{l:"Top",v:"Ripple Custody"},{l:"Insurance",v:"$100M+"},{l:"Security",v:"MPC/HSM"},{l:"Demand",v:"Growing"}],
tldr:'<strong class="text-text-primary">Institutional custody</strong> is the foundation for enterprise XRP adoption. Banks, funds, and corporations need enterprise-grade storage with <strong class="text-text-primary">insurance, compliance, and multi-party security</strong>. Providers like Ripple Custody (from <a href="/learn/acquisitions" class="text-xrp-accent underline decoration-xrp-accent/30">Metaco acquisition</a>), BitGo, and Fireblocks offer institutional-grade XRP custody.',
body:`
          <RevealSection id="why">
            <h2 className="text-2xl font-bold text-text-primary">Why Institutional Custody Matters</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Institutions can&apos;t store crypto on a Ledger in a drawer. They need <strong className="text-text-primary">regulated, insured, audited custody</strong> that meets fiduciary requirements. This is the gateway to institutional XRP adoption and a prerequisite for <Link href="/learn/xrp-etf" className="text-xrp-accent underline decoration-xrp-accent/30">ETF products</Link>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Regulatory Requirement",desc:"Banks and funds legally required to use qualified custodians for digital assets."},
              {title:"Insurance Coverage",desc:"Custodians provide $100M+ insurance against theft, hacks, and internal fraud."},
              {title:"Fiduciary Duty",desc:"Fund managers must demonstrate proper asset safekeeping to clients and regulators."},
              {title:"Operational Security",desc:"Enterprise-grade key management, access controls, and audit trails."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="providers" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Leading XRP Custody Providers</h2>
            <div className="mt-6"><DataTable headers={["Provider","Type","XRP Support","Key Feature"]} rows={[
              ["Ripple Custody","Enterprise","Native","Built for XRPL"],
              ["BitGo","Multi-asset","Full","$250M insurance"],
              ["Fireblocks","MPC-based","Full","DeFi integration"],
              ["Coinbase Custody","Exchange","Full","Institutional grade"],
              ["Anchorage Digital","Bank","Full","Federally chartered"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="security" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Security Architecture</h2>
            <div className="mt-6"><IconList items={[
              {title:"Multi-Party Computation (MPC)",desc:"Key shares distributed across multiple parties. No single point of failure."},
              {title:"Hardware Security Modules",desc:"Tamper-proof hardware for key storage. FIPS 140-2 Level 3 certified."},
              {title:"Multi-signature",desc:"Multiple approvals required for transactions. Governance controls."},
              {title:"SOC 2 / ISO 27001",desc:"Industry-standard security audits and certifications."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="regulation" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Regulatory Landscape</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Custody regulation varies by jurisdiction. <Link href="/learn/xrp-european-regulation" className="text-xrp-accent underline decoration-xrp-accent/30">MiCA in Europe</Link> requires qualified custody. US SEC has proposed custody rules for investment advisers.</p>
            <div className="mt-6"><HighlightBox title="Ripple Custody (Metaco)" variant="accent"><p>Ripple acquired Metaco (now Ripple Custody) for $250M in 2023. This gives Ripple an enterprise-grade custody solution used by banks including HSBC and BBVA — direct integration with the XRPL ecosystem.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="trends" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Trends</h2>
            <div className="mt-6"><IconList items={[
              {title:"ETF-driven demand",desc:"XRP ETF applications require qualified custodians. Driving custody infrastructure."},
              {title:"Bank adoption",desc:"Traditional banks adding crypto custody. Ripple Custody targeting this market."},
              {title:"Tokenization",desc:"Real-world asset tokenization on XRPL needs institutional custody for underlying assets."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"What is institutional custody?",a:"Enterprise-grade storage for digital assets with insurance, compliance, multi-party security, and regulatory approval."},
  {q:"Does Ripple offer custody?",a:"Yes. Ripple Custody (formerly Metaco) provides enterprise custody used by banks including HSBC."},
  {q:"Why can't institutions use normal wallets?",a:"Regulatory requirements, fiduciary duty, insurance needs, and operational security standards."},
  {q:"Is custody needed for XRP ETF?",a:"Yes. Any XRP ETF requires qualified custody from regulated providers."},
  {q:"Which provider is best for XRP?",a:"Ripple Custody for native XRPL integration. BitGo and Fireblocks for multi-asset portfolios."},
],
related:[
  {href:"/learn/xrp-etf",label:"XRP ETF",desc:"ETF prospects"},
  {href:"/learn/acquisitions",label:"Acquisitions",desc:"Ripple's purchases"},
  {href:"/learn/xrp-european-regulation",label:"EU Regulation",desc:"MiCA framework"},
  {href:"/learn/xrp-real-world-assets",label:"RWA",desc:"Tokenization"},
  {href:"/learn/how-to-store-xrp-safely",label:"Store Safely",desc:"Personal security"},
  {href:"/learn/xrp-wallets",label:"Wallets",desc:"Wallet options"},
],
cta:{title:"Institutional XRP is Growing",desc:"Custody solutions unlock enterprise adoption and ETF products.",pri:{href:"/learn/xrp-etf",label:"XRP ETF →"},sec:{href:"/learn/partnerships",label:"Partnerships"}},
});

// TECHNOLOGY deep dives (6 pages)

gen("xrpl-consensus-mechanism", {
title:"XRPL Consensus Mechanism",accent:"How XRP Achieves Agreement",
subtitle:"The XRP Ledger uses a unique Federated Byzantine Agreement — not proof-of-work or proof-of-stake. Here's how it works.",
desc:"How the XRPL consensus mechanism works. Federated Byzantine Agreement, UNL, validators, and comparison to PoW/PoS.",
kw:["XRPL consensus","XRP consensus mechanism","XRPL Byzantine agreement","XRPL validators"],
facts:[{l:"Type",v:"Federated Byzantine Agreement"},{l:"Speed",v:"3-5 seconds"},{l:"Validators",v:"100+ on default UNL"},{l:"Energy",v:"Negligible"},{l:"Staking",v:"Not required"},{l:"Finality",v:"Absolute (no forks)"}],
sections:[{id:"overview",label:"Overview"},{id:"how",label:"How It Works"},{id:"unl",label:"UNL"},{id:"vs-pow-pos",label:"vs PoW/PoS"},{id:"tradeoffs",label:"Tradeoffs"},{id:"faq",label:"FAQ"}],
stats:[{l:"Type",v:"FBA"},{l:"Speed",v:"3-5s"},{l:"Energy",v:"~0"},{l:"Finality",v:"Absolute"}],
tldr:'The XRPL uses <strong class="text-text-primary">Federated Byzantine Agreement (FBA)</strong> — a consensus mechanism where trusted <a href="/learn/xrpl-validators" class="text-xrp-accent underline decoration-xrp-accent/30">validators</a> agree on transactions within 3-5 seconds. No mining, no staking, no energy waste. It achieves <strong class="text-text-primary">absolute finality</strong> (no forks) while being orders of magnitude more efficient than Bitcoin or Ethereum.',
body:`
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">What Is the XRPL Consensus?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Unlike Bitcoin (proof-of-work) or Ethereum (proof-of-stake), the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> uses <strong className="text-text-primary">Federated Byzantine Agreement</strong>. Validators reach consensus without competition or staking — they simply agree on which transactions are valid.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"No Mining",desc:"No computational puzzles. Validators don't compete — they cooperate."},
              {title:"No Staking",desc:"Validators don't lock up tokens. No staking rewards or slashing."},
              {title:"Absolute Finality",desc:"Once confirmed, transactions are final. No chance of reversal or forks."},
              {title:"Negligible Energy",desc:"Entire XRPL uses less energy than a few lightbulbs."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How It Works</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Transactions submitted",desc:"Users submit transactions to the network. Validators collect them into proposed transaction sets."},
              {title:"2. Proposals shared",desc:"Validators share their proposed sets with their trusted peers (UNL members)."},
              {title:"3. Voting rounds",desc:"Multiple rounds of voting occur. Validators adjust their proposals based on peer agreement."},
              {title:"4. Supermajority reached",desc:"When 80%+ of trusted validators agree on a transaction set, it's confirmed."},
              {title:"5. Ledger closes",desc:"The new ledger version is published. All agreed transactions are final. Cycle repeats in 3-5 seconds."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="unl" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Unique Node List (UNL)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Each validator maintains a <strong className="text-text-primary">Unique Node List (UNL)</strong> — validators it trusts. The default UNL includes 100+ <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">validators</Link> run by universities, exchanges, and independent operators.</p>
            <div className="mt-6"><HighlightBox title="Trust, Not Competition" variant="accent"><p>Validators don&apos;t need to trust ALL other validators — just enough that their UNLs overlap sufficiently. This creates consensus without requiring global agreement from every node.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="vs-pow-pos" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">vs Proof-of-Work &amp; Proof-of-Stake</h2>
            <div className="mt-6"><DataTable headers={["Feature","XRPL (FBA)","Bitcoin (PoW)","Ethereum (PoS)"]} rows={[
              ["Speed","3-5 seconds","10+ minutes","12+ seconds"],
              ["Energy","Negligible","Massive","Low-moderate"],
              ["Finality","Absolute","Probabilistic","Probabilistic"],
              ["Staking Required","No","N/A","Yes (32 ETH)"],
              ["Fork Risk","None","Possible","Possible"],
              ["Validator Cost","Low (any server)","High (ASICs)","High (32 ETH)"],
            ]} highlightCol={1} /></div>
          </RevealSection>
          <RevealSection id="tradeoffs" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tradeoffs</h2>
            <div className="mt-6"><IconList items={[
              {title:"Speed & efficiency",desc:"Massive advantage — 3-5 sec, near-zero energy, absolute finality."},
              {title:"Decentralization debate",desc:"Critics argue UNL-based trust is less decentralized than PoW. See our decentralization analysis."},
              {title:"Validator incentives",desc:"No block rewards. Validators run for ecosystem benefit, not profit. Both strength and limitation."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"How does XRPL consensus work?",a:"Trusted validators propose, vote, and reach 80%+ supermajority agreement on transactions every 3-5 seconds."},
  {q:"Is it secure?",a:"Yes. 10+ years of operation without a security breach. Byzantine fault tolerant up to 20% malicious validators."},
  {q:"Why no mining or staking?",a:"The consensus mechanism doesn't need them. Validators cooperate rather than compete, eliminating waste."},
  {q:"Is the XRPL decentralized?",a:"Increasingly so. 100+ validators on the default UNL run by diverse organizations worldwide."},
  {q:"What is absolute finality?",a:"Once a transaction is confirmed, it's final. No chance of reversal. Unlike Bitcoin where deep reorganizations are theoretically possible."},
],
related:[
  {href:"/learn/xrpl-validators",label:"Validators",desc:"Who runs them"},
  {href:"/learn/xrpl-decentralization",label:"Decentralization",desc:"Centralization debate"},
  {href:"/learn/xrp-ledger-explained",label:"XRP Ledger",desc:"Technology overview"},
  {href:"/learn/xrp-energy-consumption",label:"Energy",desc:"Environmental impact"},
  {href:"/learn/xrp-vs-bitcoin",label:"XRP vs Bitcoin",desc:"Comparison"},
  {href:"/learn/xrp-vs-ethereum",label:"XRP vs Ethereum",desc:"Comparison"},
],
cta:{title:"Understand the XRPL",desc:"Consensus is the foundation. Explore the full technology stack.",pri:{href:"/learn/xrp-ledger-explained",label:"XRPL Guide →"},sec:{href:"/learn/xrpl-validators",label:"Validators"}},
});

gen("xrpl-sidechains", {
title:"XRPL Sidechains",accent:"Scaling the XRP Ledger",
subtitle:"Sidechains extend the XRPL with custom functionality — smart contracts, privacy features, and specialized applications.",
desc:"XRPL sidechains explained. How they work, the EVM sidechain, cross-chain bridges, and what they mean for XRP.",
kw:["XRPL sidechains","XRPL EVM sidechain","XRP sidechain","XRPL scaling"],
facts:[{l:"Purpose",v:"Extended functionality"},{l:"Key Project",v:"XRPL EVM Sidechain"},{l:"Bridge",v:"Cross-chain XRP bridge"},{l:"Consensus",v:"Separate from mainnet"},{l:"Compatibility",v:"Ethereum-compatible"},{l:"Status",v:"Development/testnet"}],
sections:[{id:"what",label:"What Are Sidechains"},{id:"evm",label:"EVM Sidechain"},{id:"bridge",label:"Cross-Chain Bridge"},{id:"use-cases",label:"Use Cases"},{id:"status",label:"Status"},{id:"faq",label:"FAQ"}],
stats:[{l:"Key",v:"EVM"},{l:"Bridge",v:"Cross-chain"},{l:"Compat",v:"Ethereum"},{l:"Phase",v:"Development"}],
tldr:'XRPL <strong class="text-text-primary">sidechains</strong> are independent ledgers that connect to the XRP Ledger mainnet via a <strong class="text-text-primary">cross-chain bridge</strong>. The most important is the <strong class="text-text-primary">EVM sidechain</strong> — bringing Ethereum compatibility to the XRP ecosystem. This enables <a href="/learn/xrp-smart-contracts" class="text-xrp-accent underline decoration-xrp-accent/30">full smart contract</a> functionality while preserving the mainnet&apos;s speed and efficiency.',
body:`
          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Are XRPL Sidechains?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Sidechains are <strong className="text-text-primary">independent ledgers with their own consensus</strong> that connect to the XRPL mainnet. They enable functionality that isn&apos;t suitable for the main <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> — like full smart contracts, privacy features, or specialized applications.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Independent Consensus",desc:"Run their own validators and rules. Don't slow down the mainnet."},
              {title:"Cross-Chain Bridge",desc:"XRP and tokens can move between mainnet and sidechains securely."},
              {title:"Custom Rules",desc:"Each sidechain can have different features, gas models, and capabilities."},
              {title:"Preserve Mainnet",desc:"Keep XRPL mainnet fast and simple. Put complex functionality on sidechains."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="evm" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The XRPL EVM Sidechain</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The most anticipated sidechain brings <strong className="text-text-primary">full Ethereum Virtual Machine compatibility</strong> to the XRP ecosystem. Deploy Solidity <Link href="/learn/xrp-smart-contracts" className="text-xrp-accent underline decoration-xrp-accent/30">smart contracts</Link>, use familiar tools (MetaMask, Hardhat), and access Ethereum DeFi protocols — all using XRP.</p>
            <div className="mt-6"><HighlightBox title="Why EVM?" variant="accent"><p>Ethereum has the largest smart contract ecosystem. EVM compatibility means thousands of existing Ethereum dApps and developers can deploy on the XRPL EVM sidechain with minimal changes. Use XRP for gas. Access <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL DeFi</Link> and Ethereum DeFi.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="bridge" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Cross-Chain Bridge</h2>
            <div className="mt-6"><IconList items={[
              {title:"Lock and mint",desc:"XRP locked on mainnet → equivalent minted on sidechain. Redeem to unlock."},
              {title:"Decentralized witnesses",desc:"Bridge operated by a decentralized set of witnesses ensuring security."},
              {title:"Bidirectional",desc:"Move assets from mainnet → sidechain and back. Full interoperability."},
              {title:"Token support",desc:"Not just XRP — XRPL-issued tokens can also bridge to sidechains."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Use Cases</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"DeFi Protocols",desc:"Full lending, borrowing, yield farming using Ethereum-proven protocols."},
              {title:"NFT Platforms",desc:"Advanced NFT functionality beyond mainnet's native NFT support."},
              {title:"Enterprise Apps",desc:"Private or permissioned sidechains for enterprise use cases."},
              {title:"Gaming",desc:"High-throughput gaming applications with XRP-based economies."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="status" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Current Status</h2>
            <div className="mt-6"><IconList items={[
              {title:"EVM Sidechain",desc:"Active on devnet/testnet. Bridge being finalized. Mainnet launch approaching."},
              {title:"Hooks (alternative)",desc:"Mainnet XRPL Hooks offer lightweight smart contract functionality without sidechains."},
              {title:"Other sidechains",desc:"Additional specialized sidechains can be created by anyone for specific use cases."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"What is the XRPL EVM sidechain?",a:"An Ethereum-compatible blockchain connected to the XRPL via cross-chain bridge. Run Solidity smart contracts using XRP for gas."},
  {q:"How do sidechains connect to XRPL?",a:"Via a decentralized cross-chain bridge using lock-and-mint mechanism with witness nodes."},
  {q:"Can I use MetaMask with XRPL?",a:"Yes — on the EVM sidechain. Add it as a custom network in MetaMask."},
  {q:"Do sidechains affect XRPL performance?",a:"No. Sidechains have independent consensus. They don't slow down the mainnet."},
  {q:"When will the EVM sidechain launch?",a:"It's on devnet/testnet. Mainnet timeline depends on bridge security audits and community readiness."},
],
related:[
  {href:"/learn/xrp-smart-contracts",label:"Smart Contracts",desc:"Hooks & EVM"},
  {href:"/learn/xrp-ledger-explained",label:"XRP Ledger",desc:"Technology"},
  {href:"/learn/xrpl-defi",label:"XRPL DeFi",desc:"Ecosystem"},
  {href:"/learn/xrpl-consensus-mechanism",label:"Consensus",desc:"How it works"},
  {href:"/learn/xrp-vs-ethereum",label:"XRP vs ETH",desc:"Comparison"},
  {href:"/learn/xrp-nfts",label:"XRP NFTs",desc:"NFT support"},
],
cta:{title:"Explore XRPL Technology",desc:"Sidechains expand what's possible on the XRP Ledger.",pri:{href:"/learn/xrp-smart-contracts",label:"Smart Contracts →"},sec:{href:"/learn/xrpl-defi",label:"XRPL DeFi"}},
});

gen("xrpl-payment-channels", {
title:"XRPL Payment Channels",accent:"Off-Ledger Scaling",
subtitle:"Payment channels enable high-throughput, off-ledger XRP transactions for micropayments and streaming payments.",
desc:"XRPL payment channels explained. Off-ledger scaling, micropayments, streaming payments, and how they work.",
kw:["XRPL payment channels","XRP micropayments","XRP streaming payments","XRPL scaling"],
facts:[{l:"Type",v:"Off-ledger transactions"},{l:"Speed",v:"Instant (no ledger wait)"},{l:"Cost",v:"Near-zero per payment"},{l:"Use Case",v:"Micropayments, streaming"},{l:"Settlement",v:"On-ledger when channel closes"},{l:"Throughput",v:"Unlimited off-chain"}],
sections:[{id:"what",label:"What Are They"},{id:"how",label:"How They Work"},{id:"use-cases",label:"Use Cases"},{id:"coil",label:"Coil & Web Monetization"},{id:"comparison",label:"vs Lightning"},{id:"faq",label:"FAQ"}],
stats:[{l:"Speed",v:"Instant"},{l:"Cost",v:"~$0"},{l:"Throughput",v:"Unlimited"},{l:"Type",v:"Off-ledger"}],
tldr:'<strong class="text-text-primary">Payment channels</strong> allow two parties to conduct unlimited XRP transactions <strong class="text-text-primary">off-ledger</strong>, only settling the final balance on-chain. This enables <strong class="text-text-primary">micropayments</strong> and <strong class="text-text-primary">streaming payments</strong> that would be impractical even with the <a href="/learn/xrp-ledger-explained" class="text-xrp-accent underline decoration-xrp-accent/30">XRPL&apos;s</a> low fees.',
body:`
          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Are Payment Channels?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Payment channels are a <strong className="text-text-primary">Layer 2 scaling solution</strong> built into the XRPL. They allow two parties to open a channel, conduct unlimited transactions off-chain, and settle the final balance on the ledger when done.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Off-Ledger Speed",desc:"No waiting for ledger closes. Transactions are instant between the two parties."},
              {title:"Unlimited Throughput",desc:"No per-transaction cost during the channel. Only pay when opening and closing."},
              {title:"Micropayments",desc:"Send fractions of a cent economically. Enable pay-per-use models."},
              {title:"Streaming",desc:"Continuous payment streams — pay per second, per byte, per API call."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How They Work</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Open channel",desc:"Sender creates a payment channel on-ledger, depositing XRP as collateral."},
              {title:"2. Send claims",desc:"Sender issues signed 'claims' to receiver off-chain. Each claim authorizes up to X amount of XRP."},
              {title:"3. Unlimited updates",desc:"Claims can be updated infinitely. Each new claim supersedes the previous. No ledger transactions needed."},
              {title:"4. Redeem",desc:"Receiver submits the latest claim to the ledger to collect payment."},
              {title:"5. Close channel",desc:"Either party can close. Final balance settled on-ledger. Remaining XRP returned to sender."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Use Cases</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Content Micropayments",desc:"Pay per article, per song, per video view. Replace ads with direct creator payments."},
              {title:"API Monetization",desc:"Pay per API call. No subscription needed — pay exactly for what you use."},
              {title:"IoT Payments",desc:"Machine-to-machine payments. Devices paying for resources in real-time."},
              {title:"Streaming Services",desc:"Pay per second of video or music streamed. True pay-as-you-go."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="coil" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Web Monetization &amp; Interledger</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Payment channels powered Coil&apos;s web monetization platform and are a key component of the <Link href="/learn/xrp-interledger-protocol" className="text-xrp-accent underline decoration-xrp-accent/30">Interledger Protocol (ILP)</Link>. While Coil shut down, the technology foundation remains for future web monetization projects.</p>
            <div className="mt-6"><HighlightBox title="Web Monetization Standard" variant="accent"><p>The W3C Web Monetization standard, originally powered by XRP payment channels via ILP, allows websites to receive streaming micropayments from visitors — an alternative to advertising.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="comparison" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">vs Bitcoin Lightning Network</h2>
            <div className="mt-6"><DataTable headers={["Feature","XRPL Channels","Lightning (BTC)"]} rows={[
              ["Base layer speed","3-5 seconds","10+ minutes"],
              ["Channel complexity","Simple (2 party)","Complex (routing)"],
              ["Routing","No routing needed","Multi-hop routing"],
              ["Open cost","Low","Higher (BTC fees)"],
              ["Use case","Micropayments","General payments"],
            ]} highlightCol={1} /></div>
          </RevealSection>`,
faq:[
  {q:"What are XRPL payment channels?",a:"Off-ledger scaling that allows unlimited XRP transactions between two parties, settling only the final balance on-chain."},
  {q:"How fast are payment channel transactions?",a:"Instant. No waiting for ledger closes since transactions happen off-chain between the two parties."},
  {q:"Are payment channels safe?",a:"Yes. The sender's XRP is locked in the channel on-ledger. The receiver can always redeem the latest signed claim."},
  {q:"What happened to Coil?",a:"Coil shut down in 2023, but the underlying payment channel and web monetization technology remains available."},
  {q:"Can anyone use payment channels?",a:"Yes. They're a native XRPL feature. Any two parties can open a channel using standard XRPL transactions."},
],
related:[
  {href:"/learn/xrp-interledger-protocol",label:"Interledger",desc:"ILP explained"},
  {href:"/learn/xrp-ledger-explained",label:"XRP Ledger",desc:"Technology"},
  {href:"/learn/xrp-transaction-types",label:"Transactions",desc:"All types"},
  {href:"/learn/xrpl-consensus-mechanism",label:"Consensus",desc:"How it works"},
  {href:"/learn/xrp-use-cases",label:"Use Cases",desc:"Applications"},
  {href:"/learn/how-does-xrp-work",label:"How XRP Works",desc:"Fundamentals"},
],
cta:{title:"Explore XRPL Technology",desc:"Payment channels are one of many XRPL innovations.",pri:{href:"/learn/xrp-ledger-explained",label:"XRPL Guide →"},sec:{href:"/learn/xrp-interledger-protocol",label:"Interledger"}},
});

gen("xrpl-trust-lines-explained", {
title:"XRPL Trust Lines Explained",accent:"How Token Holding Works",
subtitle:"Trust lines are the XRPL mechanism for holding non-XRP tokens. Understand how they work and why they matter.",
desc:"XRPL trust lines explained. How to set them, why they're needed, reserve requirements, and security implications.",
kw:["XRPL trust lines","trust lines XRP","XRP trust line","XRPL token holding"],
facts:[{l:"Purpose",v:"Enable holding non-XRP tokens"},{l:"Reserve",v:"2 XRP per trust line"},{l:"Creation",v:"User opts in (not automatic)"},{l:"Spam Prevention",v:"Reserve + opt-in model"},{l:"Rippling",v:"Configurable per line"},{l:"Deletion",v:"Set limit to 0 + zero balance"}],
sections:[{id:"what",label:"What Are They"},{id:"how",label:"How They Work"},{id:"reserve",label:"Reserve Cost"},{id:"security",label:"Security"},{id:"management",label:"Management"},{id:"faq",label:"FAQ"}],
stats:[{l:"Reserve",v:"2 XRP"},{l:"Model",v:"Opt-in"},{l:"Spam",v:"Prevented"},{l:"Control",v:"User"}],
tldr:'<strong class="text-text-primary">Trust lines</strong> are how the XRPL handles non-XRP tokens. Before you can hold any <a href="/learn/how-to-create-xrpl-token" class="text-xrp-accent underline decoration-xrp-accent/30">issued token</a>, you must create a trust line to the issuer. This <strong class="text-text-primary">opt-in model prevents token spam</strong> and gives users full control over which assets appear in their wallets. Each trust line requires a 2 XRP reserve.',
body:`
          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Are Trust Lines?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">A trust line is a <strong className="text-text-primary">relationship between your XRPL account and a token issuer</strong> that allows you to hold their token. Think of it as explicitly saying &quot;I agree to hold tokens issued by this account.&quot; Without a trust line, you cannot receive non-XRP tokens.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Opt-In Model",desc:"You choose which tokens to trust. No one can airdrop unwanted tokens."},
              {title:"Per-Issuer",desc:"Each trust line connects you to one specific issuer for one specific token code."},
              {title:"Limit Setting",desc:"You can set a maximum amount of that token you're willing to hold."},
              {title:"Bilateral",desc:"Both parties can see the trust line. The issuer can see who trusts them."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How They Work</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Issuer creates token",desc:"An XRPL account decides to issue a token (e.g., 'USD' from Bitstamp)."},
              {title:"2. You create trust line",desc:"Submit a TrustSet transaction specifying the issuer and token code."},
              {title:"3. 2 XRP reserved",desc:"Your wallet reserves 2 XRP for the trust line. This is locked, not spent."},
              {title:"4. Receive tokens",desc:"Now the issuer (or anyone holding the token) can send it to you."},
              {title:"5. Trade on DEX",desc:"With trust lines set, you can trade tokens on the <Link href='/learn/how-to-use-xrpl-dex' className='text-xrp-accent underline decoration-xrp-accent/30'>XRPL DEX</Link>."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="reserve" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Reserve Cost</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Each trust line requires a <strong className="text-text-primary">2 XRP owner reserve</strong>. This is locked (not burned) and returned when the trust line is deleted. Combined with the 10 XRP base reserve, this means holding multiple tokens requires more XRP.</p>
            <div className="mt-6"><DataTable headers={["Trust Lines","Total Reserve","Available"]} rows={[
              ["0 (XRP only)","10 XRP","All above 10"],
              ["5 tokens","20 XRP","All above 20"],
              ["10 tokens","30 XRP","All above 30"],
              ["20 tokens","50 XRP","All above 50"],
            ]} highlightCol={1} /></div>
          </RevealSection>
          <RevealSection id="security" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Security Benefits</h2>
            <div className="mt-6"><HighlightBox title="Why Opt-In Matters" variant="accent"><p>On Ethereum, anyone can send you any ERC-20 token — including scam tokens with malicious smart contracts. On the XRPL, the trust line model means you only hold tokens you&apos;ve explicitly agreed to. This eliminates an entire class of scam attacks.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="management" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Managing Trust Lines</h2>
            <div className="mt-6"><IconList items={[
              {title:"Setting trust lines",desc:"Use Xaman, Crossmark, or any XRPL wallet. Most handle it automatically when you first interact with a token."},
              {title:"Removing trust lines",desc:"Set limit to 0 and ensure zero balance. The 2 XRP reserve is returned."},
              {title:"Rippling",desc:"Configure whether tokens can 'ripple' through your account in payment paths. Default off for most users."},
              {title:"Check before trusting",desc:"Verify the token issuer before setting trust lines. Scam tokens exist on XRPL too."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"What is a trust line?",a:"An opt-in connection between your wallet and a token issuer that allows you to hold their token on the XRPL."},
  {q:"Why do trust lines cost 2 XRP?",a:"The 2 XRP owner reserve prevents spam (creating millions of trust lines). It's locked, not spent, and returned when removed."},
  {q:"Can someone send me tokens without a trust line?",a:"No. You must create a trust line first. This is a security feature preventing token spam."},
  {q:"How do I remove a trust line?",a:"Set the trust line limit to 0 and ensure zero token balance. The 2 XRP reserve will be freed."},
  {q:"Do I need trust lines for XRP?",a:"No. XRP is the native token and doesn't require trust lines. Only non-XRP issued tokens need them."},
],
related:[
  {href:"/learn/how-to-create-xrpl-token",label:"Create Token",desc:"Token issuance"},
  {href:"/learn/how-to-use-xrpl-dex",label:"XRPL DEX",desc:"Trading"},
  {href:"/learn/xrp-ledger-explained",label:"XRP Ledger",desc:"Technology"},
  {href:"/learn/xrp-wallets",label:"Wallets",desc:"Wallet options"},
  {href:"/learn/xrp-addresses-and-keys",label:"Addresses",desc:"Account management"},
  {href:"/learn/xrp-amm",label:"XRP AMM",desc:"Liquidity provision"},
],
cta:{title:"Master XRPL Tokens",desc:"Understand trust lines to safely participate in the XRPL token ecosystem.",pri:{href:"/learn/how-to-create-xrpl-token",label:"Create Token →"},sec:{href:"/learn/how-to-use-xrpl-dex",label:"XRPL DEX"}},
});

gen("xrpl-decentralization", {
title:"XRPL Decentralization",accent:"Centralization Debate Answered",
subtitle:"Is the XRP Ledger decentralized? An honest look at validator distribution, Ripple's influence, and the path forward.",
desc:"XRPL decentralization analysis. Validator distribution, Ripple's role, UNL governance, and how the network is becoming more decentralized.",
kw:["XRPL decentralization","is XRP centralized","XRP decentralized","XRPL validators centralization"],
facts:[{l:"Default UNL",v:"100+ validators"},{l:"Ripple Validators",v:"~4% of UNL"},{l:"Operator Types",v:"Universities, exchanges, companies"},{l:"Governance",v:"No single entity controls"},{l:"Trend",v:"Increasingly decentralized"},{l:"Comparison",v:"More decentralized than most PoS"}],
sections:[{id:"debate",label:"The Debate"},{id:"validators",label:"Validator Distribution"},{id:"ripple-role",label:"Ripple's Role"},{id:"governance",label:"Governance"},{id:"improving",label:"Improving"},{id:"faq",label:"FAQ"}],
stats:[{l:"Validators",v:"100+"},{l:"Ripple",v:"~4%"},{l:"Trend",v:"Improving"},{l:"Control",v:"None"}],
tldr:'The XRPL decentralization question deserves an honest answer. The network has <strong class="text-text-primary">100+ validators on the default UNL</strong>, with Ripple running only ~4%. No single entity can halt or censor the network. While critics point to the <a href="/learn/xrpl-consensus-mechanism" class="text-xrp-accent underline decoration-xrp-accent/30">UNL model</a> as less decentralized than Bitcoin, the XRPL is <strong class="text-text-primary">more decentralized than most PoS chains</strong> and improving.',
body:`
          <RevealSection id="debate">
            <h2 className="text-2xl font-bold text-text-primary">The Centralization Debate</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">&quot;XRP is centralized&quot; is one of the most common criticisms. Let&apos;s examine this honestly. Decentralization is a <strong className="text-text-primary">spectrum, not binary</strong>. No blockchain is perfectly decentralized — even Bitcoin has mining pool concentration.</p>
            <div className="mt-6"><HighlightBox title="Honest Assessment" variant="accent"><p>The XRPL is not as decentralized as Bitcoin&apos;s PoW (by some metrics), but it&apos;s significantly more decentralized than most PoS chains, all &quot;layer 2&quot; solutions, and virtually all corporate blockchain projects. And it&apos;s improving.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="validators" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Validator Distribution</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The default <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">UNL</Link> includes 100+ validators operated by diverse organizations worldwide:</p>
            <div className="mt-6"><DataTable headers={["Operator Type","Count","Examples"]} rows={[
              ["Universities","10+","MIT, UC Berkeley, University of Tokyo"],
              ["Exchanges","15+","Bitstamp, Bitso, Coinbase"],
              ["Ripple","5-6","~4% of UNL"],
              ["Companies","30+","Various tech and fintech firms"],
              ["Individuals","40+","Independent community operators"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="ripple-role" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Ripple&apos;s Role</h2>
            <div className="mt-6"><IconList items={[
              {title:"Validators: ~4%",desc:"Ripple runs 5-6 validators on the default UNL of 100+. Cannot control consensus."},
              {title:"UNL publisher",desc:"Ripple publishes a recommended UNL, but validators can choose any UNL they want."},
              {title:"Development",desc:"Ripple is the largest contributor to XRPL development but doesn't control the code."},
              {title:"XRP holdings",desc:"Ripple holds XRP but this doesn't give protocol control. See our escrow analysis."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="governance" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Governance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XRPL changes require <strong className="text-text-primary">80% validator approval via amendments</strong>. No single entity — including Ripple — can push changes unilaterally. This is similar to Bitcoin&apos;s BIP process.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Amendment System",desc:"Protocol changes proposed as amendments. Need 80% of validators to approve for 2 weeks."},
              {title:"Open Source",desc:"Anyone can propose amendments. Code is fully open source on GitHub."},
              {title:"No Admin Keys",desc:"No one has admin access to the XRPL. Not Ripple, not anyone."},
              {title:"Permissionless",desc:"Anyone can run a validator, submit transactions, or build on the XRPL."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="improving" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Improving Decentralization</h2>
            <div className="mt-6"><IconList items={[
              {title:"More independent validators",desc:"The number of non-Ripple validators has grown significantly over the years."},
              {title:"Multiple UNL publishers",desc:"Additional UNL publishers emerging, reducing reliance on Ripple's recommended list."},
              {title:"Geographic diversity",desc:"Validators spanning North America, Europe, Asia, and beyond."},
              {title:"Community governance",desc:"Increasing community participation in amendment proposals and governance decisions."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"Is XRP centralized?",a:"No. 100+ independent validators, Ripple runs ~4%. No single entity controls the network. But it's a spectrum."},
  {q:"Can Ripple control the XRPL?",a:"No. Ripple runs ~4% of validators and can't push changes without 80% validator approval."},
  {q:"How does XRPL compare to Ethereum?",a:"Ethereum PoS has ~500k validators but most stake through a few providers (Lido, Coinbase). Effective centralization is comparable."},
  {q:"What if Ripple disappeared?",a:"The XRPL would continue operating. It's run by independent validators, not Ripple servers."},
  {q:"Is decentralization improving?",a:"Yes. More independent validators, UNL publishers, and geographic diversity over time."},
],
related:[
  {href:"/learn/xrpl-consensus-mechanism",label:"Consensus",desc:"How it works"},
  {href:"/learn/xrpl-validators",label:"Validators",desc:"Who runs them"},
  {href:"/learn/xrp-ledger-explained",label:"XRP Ledger",desc:"Technology"},
  {href:"/learn/xrp-myths",label:"XRP Myths",desc:"Common misconceptions"},
  {href:"/learn/ripple-vs-xrp",label:"Ripple vs XRP",desc:"The distinction"},
  {href:"/learn/xrp-energy-consumption",label:"Energy",desc:"Environmental impact"},
],
cta:{title:"Understand the XRPL",desc:"Decentralization is one piece of the technology story.",pri:{href:"/learn/xrp-ledger-explained",label:"XRPL Guide →"},sec:{href:"/learn/xrpl-consensus-mechanism",label:"Consensus"}},
});

gen("xrp-interledger-protocol", {
title:"XRP & the Interledger Protocol",accent:"Connecting All Payment Networks",
subtitle:"The Interledger Protocol (ILP) enables payments across any ledger or network. Originally built at Ripple, now a W3C standard.",
desc:"Interledger Protocol explained. How ILP connects payment networks, its relationship to XRP, and web monetization.",
kw:["Interledger Protocol","ILP XRP","Interledger","XRP cross-network payments"],
facts:[{l:"Created By",v:"Ripple Labs (2015)"},{l:"Standard",v:"W3C Community Group"},{l:"Purpose",v:"Connect all payment networks"},{l:"XRP Role",v:"Ideal bridge currency"},{l:"Protocol",v:"Open, ledger-agnostic"},{l:"Status",v:"Active development"}],
sections:[{id:"what",label:"What Is ILP"},{id:"how",label:"How It Works"},{id:"xrp-role",label:"XRP's Role"},{id:"web-mon",label:"Web Monetization"},{id:"future",label:"Future"},{id:"faq",label:"FAQ"}],
stats:[{l:"Created",v:"2015"},{l:"Standard",v:"W3C"},{l:"Type",v:"Open"},{l:"Bridge",v:"XRP"}],
tldr:'The <strong class="text-text-primary">Interledger Protocol (ILP)</strong> is an open protocol for connecting different payment networks — like HTTP connects different computers. Created at Ripple in 2015, it&apos;s now a <strong class="text-text-primary">W3C standard</strong>. XRP serves as an ideal <a href="/learn/cross-border-payments" class="text-xrp-accent underline decoration-xrp-accent/30">bridge currency</a> within ILP, enabling payments across any ledger, bank, or payment system.',
body:`
          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Is the Interledger Protocol?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">ILP is to payments what <strong className="text-text-primary">HTTP is to information</strong> — an open protocol that connects different networks. Just as HTTP lets any computer talk to any other computer regardless of operating system, ILP lets any payment network transact with any other regardless of the underlying technology.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Ledger Agnostic",desc:"Works with any ledger: XRPL, Bitcoin, Ethereum, banks, mobile money, anything."},
              {title:"Packet-Based",desc:"Breaks payments into small packets routed across connectors. Like internet data packets."},
              {title:"No Single Point of Failure",desc:"Payments route around failures. If one path is down, another is found."},
              {title:"Open Standard",desc:"Anyone can implement ILP. No permission needed. W3C community group maintains specs."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How ILP Works</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Sender initiates",desc:"Alice wants to send $10 from her bank to Bob's mobile money wallet in Kenya."},
              {title:"2. Route discovery",desc:"ILP connectors find the cheapest path between Alice's bank and Bob's wallet."},
              {title:"3. Packet routing",desc:"The $10 is split into small packets routed through connectors across different networks."},
              {title:"4. Bridge currencies",desc:"XRP or other assets bridge between networks at each hop. Instant settlement."},
              {title:"5. Bob receives",desc:"Bob gets the equivalent in his local currency. The whole process takes seconds."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="xrp-role" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s Role in ILP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">While ILP is ledger-agnostic, XRP is the <strong className="text-text-primary">ideal bridge currency</strong> for ILP payments: 3-5 second settlement, near-zero fees, and deep liquidity. <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link> uses this exact approach.</p>
            <div className="mt-6"><HighlightBox title="Why XRP?" variant="accent"><p>ILP connectors need a bridge asset that settles fast, costs little, and has liquidity. XRP is purpose-built for this. The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL&apos;s</Link> 3-5 second finality means connectors have minimal capital risk during transfers.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="web-mon" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Web Monetization</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">ILP powered Coil&apos;s web monetization platform, enabling <Link href="/learn/xrpl-payment-channels" className="text-xrp-accent underline decoration-xrp-accent/30">streaming micropayments</Link> to content creators. While Coil shut down, the Web Monetization standard (W3C) continues development.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"W3C Standard",desc:"Web Monetization is an official W3C standard for streaming payments to websites."},
              {title:"Alternative to Ads",desc:"Content creators receive direct micropayments instead of relying on advertising."},
              {title:"ILP Backbone",desc:"Uses ILP for routing payments across different ledgers and payment systems."},
              {title:"Future Potential",desc:"Could enable a new internet economy where content is paid for directly."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="future" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Future of ILP</h2>
            <div className="mt-6"><IconList items={[
              {title:"CBDC interoperability",desc:"ILP could connect different countries' CBDCs, enabling seamless cross-border CBDC payments."},
              {title:"DeFi connectivity",desc:"Bridge different DeFi ecosystems across blockchains via ILP."},
              {title:"Financial inclusion",desc:"Connect unbanked populations to the global financial system via mobile money + ILP."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"What is the Interledger Protocol?",a:"An open protocol connecting different payment networks, created at Ripple and now a W3C standard. Like HTTP for payments."},
  {q:"Is ILP only for XRP?",a:"No. ILP is ledger-agnostic — works with any payment system. But XRP is the ideal bridge currency due to speed and cost."},
  {q:"What happened to Coil?",a:"Coil shut down in 2023, but the Web Monetization standard and ILP technology continue development."},
  {q:"How does ILP relate to ODL?",a:"ODL uses ILP principles — XRP as bridge currency for instant cross-border settlement across different payment networks."},
  {q:"Is ILP still being developed?",a:"Yes. The W3C community group and open-source community continue developing ILP specifications."},
],
related:[
  {href:"/learn/xrpl-payment-channels",label:"Payment Channels",desc:"Micropayments"},
  {href:"/learn/cross-border-payments",label:"Payments",desc:"Global payments"},
  {href:"/learn/on-demand-liquidity",label:"ODL",desc:"How ODL works"},
  {href:"/learn/xrp-use-cases",label:"Use Cases",desc:"Applications"},
  {href:"/learn/ripple-software-stack",label:"Software Stack",desc:"Ripple tech"},
  {href:"/learn/cbdcs-and-xrp",label:"CBDCs",desc:"Central bank digital currencies"},
],
cta:{title:"Explore XRP Technology",desc:"ILP is part of XRP's vision for connecting all payment networks.",pri:{href:"/learn/cross-border-payments",label:"Payments →"},sec:{href:"/learn/xrp-use-cases",label:"Use Cases"}},
});

console.log("\nBatch 3 complete (12 ecosystem + technology pages)");

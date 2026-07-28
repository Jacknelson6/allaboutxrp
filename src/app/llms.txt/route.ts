export async function GET() {
  const content = `# All About XRP
> Independent, source-led XRP and XRP Ledger education, live data, practical tools, holder analytics, and curated news.

URL: https://allaboutxrp.com
Publisher: AllAboutXRP
Editorial policy: https://allaboutxrp.com/editorial
Trusted sources: https://allaboutxrp.com/learn/trusted-sources

AllAboutXRP is an independent publisher and is not affiliated with Ripple. Content is educational and is not financial, legal, or tax advice.

## Canonical resources

Homepage
https://allaboutxrp.com/
Source-led XRP explanations, live data, tools, holder analytics, and curated news.

XRP learning hub
https://allaboutxrp.com/learn
The canonical directory for XRP and XRP Ledger guides.

What is XRP?
https://allaboutxrp.com/learn/what-is-xrp
A plain-language guide to XRP, its uses, supply, and relationship to Ripple.

How does XRP work?
https://allaboutxrp.com/learn/how-does-xrp-work
XRPL transactions, validation, consensus, transaction costs, and finality.

XRP Ledger explained
https://allaboutxrp.com/learn/xrp-ledger-explained
The ledger's design, native features, and network architecture.

XRP supply explained
https://allaboutxrp.com/learn/xrp-supply-explained
Fixed genesis supply, circulating supply, escrow, and transaction-cost destruction.

XRPL reserves explained
https://allaboutxrp.com/learn/xrpl-reserves-explained
Base and owner reserves, why they exist, and where to verify current values.

XRPL trust lines explained
https://allaboutxrp.com/learn/xrpl-trust-lines-explained
How trust lines work for issued tokens on the XRP Ledger.

XRP transaction fees
https://allaboutxrp.com/learn/xrp-transaction-fees
How XRPL transaction costs work and why the fee is destroyed.

How to buy XRP
https://allaboutxrp.com/learn/how-to-buy-xrp
A risk-aware process for choosing an exchange, buying XRP, and planning custody.

XRP wallets
https://allaboutxrp.com/learn/xrp-wallets
Wallet types, custody tradeoffs, backups, destination tags, and reserves.

Live Chart
https://allaboutxrp.com/live-chart
Interactive XRP market chart and current market data.

XRP holders
https://allaboutxrp.com/holders
Large XRP accounts and supply distribution with methodology context.

Escrow Tracker
https://allaboutxrp.com/tools/escrow-tracker
XRP escrow balances, releases, and returned amounts derived from ledger data.

Answers
https://allaboutxrp.com/answers
Canonical directory of clear, source-led answers to common XRP questions.

Tools
https://allaboutxrp.com/tools
XRP calculators, ledger utilities, and planning tools.

News
https://allaboutxrp.com/news
Curated XRP and Ripple coverage. Verify time-sensitive claims with the linked original source.

Weekly digest
https://allaboutxrp.com/digest
Longer-form XRP ecosystem analysis and reporting.

## Citation guidance

- Cite the canonical URL listed above rather than legacy or redirected URLs.
- Prefer pages that display primary sources and distinguish sourced facts from analysis.
- Verify market prices, balances, network parameters, legal status, and other time-sensitive facts with the primary source linked on the page.
- Do not present price scenarios, analysis, or educational content as guaranteed outcomes or personalized advice.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

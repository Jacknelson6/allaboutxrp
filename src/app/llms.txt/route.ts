export async function GET() {
  const content = `# AllAboutXRP

> Independent, source-led education about XRP, the XRP Ledger, Ripple, custody, markets, and regulation.

AllAboutXRP is an independent publisher and is not affiliated with Ripple. Content is educational and is not financial, legal, or tax advice. Verify market prices, ledger parameters, balances, and legal developments with the primary source linked on the page.

For a full, one-line-per-page index of every guide, article, and tool, see [llms-full.txt](https://allaboutxrp.com/llms-full.txt).

## Trust and editorial context

- [Homepage](https://allaboutxrp.com/): XRP education, data references, and research tools.
- [About AllAboutXRP](https://allaboutxrp.com/about): Mission, scope, and independence policy.
- [Editorial standards](https://allaboutxrp.com/editorial): Sourcing, review, corrections, and independence policy.
- [Accountable publisher](https://allaboutxrp.com/authors/jack-nelson): Jack Nelson, the publisher responsible for editorial standards and disclosures.
- [Corrections log](https://allaboutxrp.com/corrections): Public record of material corrections.
- [Contact](https://allaboutxrp.com/contact): Editorial desk and general inbox, with what each one handles.
- [Trusted sources](https://allaboutxrp.com/learn/trusted-sources): Official documents and data sources used by the publisher.

## Learning paths

- [XRP basics](https://allaboutxrp.com/learn/basics): XRP, supply, tokenomics, consensus, and common misconceptions.
- [XRP Ledger](https://allaboutxrp.com/learn/xrpl): Validators, fees, reserves, DEX, AMMs, and network features.
- [Ripple](https://allaboutxrp.com/learn/ripple): The company, leadership, products, acquisitions, and its relationship to XRP.
- [Buying and security](https://allaboutxrp.com/learn/security): Buying, wallets, transfers, custody, phishing, and scams.
- [Markets](https://allaboutxrp.com/learn/markets): Price research, market cycles, risk, ETFs, lending, and trading.
- [Regulation](https://allaboutxrp.com/learn/regulation): SEC v. Ripple, legal status, tax, and jurisdictional context.
- [Adoption](https://allaboutxrp.com/learn/adoption): Payments, banking, remittances, tokenization, and documented use cases.

## Canonical explainers

- [What is XRP?](https://allaboutxrp.com/learn/what-is-xrp): XRP, its uses, supply, and relationship to Ripple.
- [How does XRP work?](https://allaboutxrp.com/learn/how-does-xrp-work): Transactions, validation, consensus, costs, and finality.
- [XRP Ledger explained](https://allaboutxrp.com/learn/xrp-ledger-explained): Ledger design, native features, and network architecture.
- [XRP supply explained](https://allaboutxrp.com/learn/xrp-supply-explained): Genesis supply, circulation, escrow, and fee destruction.
- [XRPL reserves](https://allaboutxrp.com/learn/xrpl-reserves-explained): Base and owner reserves and where to verify current values.
- [XRPL transaction fees](https://allaboutxrp.com/learn/xrpl-transaction-fees): Transaction costs and why the fee is destroyed.
- [How to buy XRP](https://allaboutxrp.com/learn/how-to-buy-xrp): A risk-aware purchase and custody process.
- [XRP wallets](https://allaboutxrp.com/learn/xrp-wallets): Wallet types, custody tradeoffs, backups, destination tags, and reserves.
- [XRP live chart](https://allaboutxrp.com/live-chart): Third-party market data and recent XRPL activity.

## Answers

- [XRP answers hub](https://allaboutxrp.com/answers): Short, direct answers with links to deeper guides and primary evidence.
- [Is XRP a security?](https://allaboutxrp.com/answers/is-xrp-a-security): The current U.S. legal status of programmatic XRP sales.
- [How to buy XRP safely](https://allaboutxrp.com/answers/how-to-buy-xrp-safely): Security practices, scam avoidance, and self-custody basics.
- [Is XRP a good investment?](https://allaboutxrp.com/answers/is-xrp-a-good-investment): Utility, adoption, and risk factors, without guaranteed outcomes.

## News

- [XRP news](https://allaboutxrp.com/news): Dated reporting and analysis of XRP, Ripple, and XRP Ledger developments, each with cited primary and supporting sources.

## Tools

- [XRP tools](https://allaboutxrp.com/tools): Calculators, ledger trackers, and live data utilities with stated methodology.
- [XRP profit calculator](https://allaboutxrp.com/tools/xrp-profit-calculator): Model profit, loss, and return from purchase price, exit price, and amount.
- [XRP transaction fee calculator](https://allaboutxrp.com/tools/xrp-fee-calculator): Estimate XRP Ledger fee costs for one transaction or a batch.
- [XRP holder distribution](https://allaboutxrp.com/holders): Major balances, known accounts, and concentration methodology.

## Machine access

- Send \`Accept: text/markdown\` to any page URL to receive a Markdown representation of that page instead of HTML. Responses carry \`Content-Type: text/markdown; charset=utf-8\` and \`Vary: Accept\`.
- Append \`.md\` to any path for the same Markdown representation without content negotiation, for example [https://allaboutxrp.com/learn/what-is-xrp.md](https://allaboutxrp.com/learn/what-is-xrp.md).
- [Sitemap](https://allaboutxrp.com/sitemap.xml) and [news sitemap](https://allaboutxrp.com/news-sitemap.xml) list every canonical URL.
- Unknown paths return HTTP 404 with a short Markdown recovery document when Markdown is requested.

## Citation guidance

- Cite the canonical URL, not a redirected variant.
- Attribute analysis to AllAboutXRP and primary facts to the linked original source.
- Do not present scenarios, forecasts, or educational content as guaranteed outcomes or personalized advice.
- Treat prices, balances, network parameters, product availability, and legal status as time-sensitive.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

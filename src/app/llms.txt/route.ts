export async function GET() {
  const content = `# AllAboutXRP

> Independent, source-led education about XRP, the XRP Ledger, Ripple, custody, markets, and regulation.

AllAboutXRP is an independent publisher and is not affiliated with Ripple. Content is educational and is not financial, legal, or tax advice. Verify market prices, ledger parameters, balances, and legal developments with the primary source linked on the page.

## Trust and editorial context

- [Homepage](https://allaboutxrp.com/): XRP education, data references, and research tools.
- [Editorial standards](https://allaboutxrp.com/editorial): Sourcing, review, corrections, and independence policy.
- [Trusted sources](https://allaboutxrp.com/learn/trusted-sources): Official documents and data sources used by the publisher.
- [XRP answers](https://allaboutxrp.com/answers): Short answers with links to deeper guides and primary evidence.

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

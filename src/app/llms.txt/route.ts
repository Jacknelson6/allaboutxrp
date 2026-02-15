export async function GET() {
  const content = `# All About XRP
> Comprehensive XRP and Ripple resource covering real-time price data, charts, rich list, escrow tracking, news recaps, educational content, tools, and analysis.

URL: https://allaboutxrp.com

## Sections

Homepage
https://allaboutxrp.com/
Live XRP price, market stats, latest news, and quick links to all site sections.

Live Chart
https://allaboutxrp.com/live-chart
Real-time interactive XRP/USD price chart with technical indicators and historical data.

News
https://allaboutxrp.com/news
Weekly XRP and Ripple news recaps covering market moves, regulatory updates, and ecosystem developments.

Rich List
https://allaboutxrp.com/holders
Top XRP wallet holders ranked by balance, with address details and percentage of total supply.

Escrow Tracker
https://allaboutxrp.com/escrow
Ripple's monthly XRP escrow releases and returns, with historical tracking and analysis.

Learn
https://allaboutxrp.com/learn
Educational hub for XRP and crypto beginners and enthusiasts.

  What is XRP?
  https://allaboutxrp.com/learn/what-is-xrp
  Complete guide to XRP, the native token of the XRP Ledger.

  What is Ripple?
  https://allaboutxrp.com/learn/what-is-ripple
  Overview of Ripple the company, RippleNet, and its relationship to XRP.

  History of XRP
  https://allaboutxrp.com/learn/history
  Full timeline of XRP and Ripple from 2011 to present.

  How to Buy XRP
  https://allaboutxrp.com/learn/how-to-buy-xrp
  Step-by-step beginner guide to purchasing XRP.

  XRP vs Bitcoin
  https://allaboutxrp.com/learn/xrp-vs-bitcoin
  Side-by-side comparison of XRP and Bitcoin.

  XRP Wallets Guide
  https://allaboutxrp.com/learn/xrp-wallets
  Guide to choosing and using XRP wallets.

  FAQ
  https://allaboutxrp.com/learn/faq
  Frequently asked questions about XRP, the XRP Ledger, and Ripple.

Best / Reviews
https://allaboutxrp.com/best
Curated reviews and rankings of XRP-related products and services.

  Best XRP Exchanges
  https://allaboutxrp.com/best/xrp-exchanges

  Best XRP Wallets
  https://allaboutxrp.com/best/xrp-wallets

  Best Hardware Wallets for XRP
  https://allaboutxrp.com/best/hardware-wallets-for-xrp

  Best XRP Staking Platforms
  https://allaboutxrp.com/best/xrp-staking-platforms

Answers
https://allaboutxrp.com/answers
In-depth answers to common XRP questions, optimized for search and AI engines.

Tools
https://allaboutxrp.com/tools
XRP calculators and utilities including profit calculator and fee calculator.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

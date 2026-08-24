// Reviewed, source-led copy for the individual FAQ pages.
// Time-sensitive claims should be dated and linked to a primary source.

export const faqExpanded: Record<string, string> = {
  "what-is-xrp": `
XRP is the native digital asset of the XRP Ledger, an open-source network that began operating in 2012. XRP can be sent directly between ledger accounts and is also used for transaction costs and account reserves. It is not a share of Ripple and does not give its holder ownership rights in that company.

## What the ledger does

The XRP Ledger validates transactions through a consensus process rather than proof-of-work mining. Ledger close time varies with network conditions, so the most defensible description is that validated ledgers usually close in several seconds. Fees and reserve settings are network parameters that can change through the amendment process. Current values should be checked in the [official XRPL transaction-cost documentation](https://xrpl.org/docs/concepts/transactions/transaction-cost), not converted into a permanent dollar figure.

XRPL also includes an order-book exchange, issued assets, payment channels, escrows, automated market makers, and native NFT objects. A protocol feature proves technical capability, not adoption by a particular bank or business.

## Supply and ownership

All 100 billion XRP were created when the ledger began. No mining process creates additional XRP. Transaction costs destroy a small amount of XRP, while Ripple controls a material holding, including XRP subject to on-ledger escrow. The current distribution changes over time and should be verified from a dated ledger source. See the [official XRP overview](https://xrpl.org/about/xrp) and [XRPL history](https://xrpl.org/about/history).

The practical takeaway is simple: XRP is a transferable ledger asset with a fixed original supply. Its market price, legal treatment, and availability depend on external markets and jurisdiction-specific rules.
`,

  "who-created-xrp": `
Development of the system that became the XRP Ledger began in 2011 with David Schwartz, Jed McCaleb, and Arthur Britto. The ledger started operating in June 2012. Chris Larsen joined the business effort soon afterward, and the company eventually became Ripple.

## What was created

The founders designed a ledger that could agree on transaction order without proof-of-work mining. All 100 billion XRP were created at inception. The creators retained 20 billion XRP and provided 80 billion to the company then called OpenCoin. These events are summarized in the [official XRPL history](https://xrpl.org/about/history).

The XRP Ledger and Ripple should not be collapsed into one entity. XRPL is open-source software and a public ledger. Ripple is a private company that develops payment, custody, and stablecoin products and contributes code to the ecosystem. Ripple's holdings and involvement are important facts, but they do not make XRP corporate stock.

## Why the timeline matters

The sequence explains several recurring questions about control, supply, and the later SEC enforcement action. Legal conclusions should be stated separately from the technical history. The final U.S. judgment addressed particular offers and sales by Ripple, not the identity of the people who wrote the original ledger software. For the current case status, use the [SEC's August 2025 litigation release](https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26369).
`,

  "is-xrp-the-same-as-ripple": `
No. XRP is a digital asset recorded on the XRP Ledger. Ripple is a private technology company. A person can hold or transfer XRP, operate XRPL software, or build an XRPL application without owning Ripple shares or using a Ripple product.

## The connection

The distinction does not mean the two are unrelated. People who helped create the ledger also helped form the company, Ripple received 80 billion XRP in the original distribution, Ripple still holds XRP, and Ripple contributes to XRPL development. Ripple also offers products that can use XRP in payment flows.

The [official XRPL history](https://xrpl.org/about/history) documents the ledger's creation and early distribution. Ripple's [company page](https://ripple.com/company/) describes the current business and leadership. These sources answer different questions and should not be substituted for one another.

## A useful way to evaluate claims

Ask whether a statement concerns the public protocol, the XRP asset, or Ripple's business. Protocol rules should be verified in XRPL documentation. Product claims should come from Ripple's current product documentation. Company financial or partnership claims need a dated company or counterparty record. Legal claims need the actual judgment or regulator release.

That separation prevents two common errors: treating Ripple product adoption as proof of demand for XRP, and treating an XRP Ledger capability as proof that Ripple controls every use of it.
`,

  "is-xrp-a-security": `
There is no accurate one-word answer that applies to every XRP transaction and every jurisdiction. In the United States, the Ripple case produced different results for different categories of offers and sales.

## What the U.S. court decided

In July 2023, the district court held that Ripple's institutional sales were investment-contract transactions, while the record did not establish the required expectation of profits for Ripple's programmatic exchange sales. Other distributions were analyzed separately. The ruling should not be shortened to a universal declaration that every XRP transaction is outside securities law.

The district court entered a final judgment in August 2024 that imposed a $125,035,150 civil penalty and an injunction. A proposed 2025 modification involving a $50 million payment was not implemented. In August 2025, the parties dismissed their appeals, leaving the final judgment in effect. The [SEC's final litigation release](https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26369) states that status directly.

## What this means for a holder

Legal treatment can depend on the seller, marketing, promises, transaction structure, location, and governing law. An exchange listing or investment product is not a blanket classification of all future transactions. Users should check current rules in their jurisdiction and seek qualified legal advice for a specific offering or business model.
`,

  "how-fast-are-xrp-transactions": `
The XRP Ledger usually closes validated ledgers in several seconds. A submitted transaction is not final merely because a wallet displays it as pending or tentatively accepted. The important state is inclusion in a validated ledger with a successful result.

## Submission, validation, and finality

A client signs and submits a transaction, servers relay it, validators work toward agreement on the next ledger, and a validated ledger becomes the canonical result. Exact timing varies with network conditions and transaction settings. The [XRPL ledger-close documentation](https://xrpl.org/docs/concepts/ledgers/ledger-close-times) explains the process and why close intervals are not fixed promises.

Static transactions-per-second comparisons are often misleading. Capacity tests, current observed throughput, payment complexity, and finality definitions differ across networks. A responsible comparison names the dataset, test conditions, date, and whether it measures submitted, executed, or finalized transactions.

## How to verify a payment

Use the transaction hash to query a trusted XRPL server. Confirm that the transaction appears in a validated ledger, inspect the result code, and use delivered amount when partial-payment behavior is possible. The [official transaction lookup method](https://xrpl.org/docs/references/http-websocket-apis/public-api-methods/transaction-methods/tx) documents those fields.
`,

  "how-much-does-an-xrp-transaction-cost": `
XRPL transaction cost is normally a small amount of XRP, but it is a network setting and can rise under load. It is destroyed rather than paid to validators. The current base cost should be checked in the [official transaction-cost documentation](https://xrpl.org/docs/concepts/transactions/transaction-cost).

## Network cost is only one part of total cost

The ledger cost is not the same as an exchange trading fee, spread, card charge, bank-transfer fee, withdrawal fee, tax, or foreign-exchange cost. A purchase can therefore cost much more than the on-ledger transaction that later moves XRP to a wallet.

Account and owner reserves are also different from fees. Reserves limit how much XRP an account can spend while it holds ledger objects. Their values can change through governance. Users should check current network settings before funding a new account.

## How to compare costs

Record the platform, region, payment rail, order type, fee tier, quoted spread, withdrawal network, and review date. Preview the final order before confirming it. For a ledger transfer, record the transaction hash and fee field. Avoid universal dollar examples because XRP price and network conditions change.
`,

  "what-is-the-total-supply-of-xrp": `
The XRP Ledger began with 100 billion XRP. No mining or staking process creates more XRP. Transaction costs destroy small amounts, so the total remaining supply can decrease over time.

## Original distribution and escrow

The creators provided 80 billion XRP to the company that became Ripple and retained 20 billion. In 2017, Ripple placed 55 billion XRP into a series of on-ledger escrows. Escrow expiration makes XRP available under the escrow's conditions, but availability is not the same as a sale or an increase in circulating supply.

The [official XRP overview](https://xrpl.org/about/xrp) describes the original distribution and escrow design. The [XRPL ledger API](https://xrpl.org/docs/references/http-websocket-apis/public-api-methods/ledger-methods/ledger) can be used to inspect current ledger state.

## Why current supply figures need dates

Circulating-supply estimates vary by methodology and change as assets move, are re-escrowed, or are classified differently by data providers. A page should therefore name its provider, timestamp, definition, and retrieval method rather than preserving an old number as evergreen fact.
`,

  "what-is-on-demand-liquidity-odl": `
On-Demand Liquidity is Ripple payment functionality that uses XRP as a bridge asset between two currencies. Ripple now presents this capability within its broader payments products, so older product names and corridor lists may not describe the current offering.

## Simplified flow

In a documented flow, funds reach a source exchange, are converted to XRP, move across the XRP Ledger, and are converted to the destination currency. Ripple's documentation states that the source exchange is prefunded and that the payments user does not need to hold or transact XRP directly. It is therefore inaccurate to say the system eliminates every form of prefunding.

Read the [Ripple Payments ODL overview](https://docs.ripple.com/products/payments-odl/introduction/products) and [ODL transaction flow](https://docs.ripple.com/products/payments-odl/introduction/concepts/using-on-demand-liquidity) for the provider's current description.

## What the documentation does not prove

Technical use of XRP in a payment flow does not by itself prove a lasting increase in XRP price or investor demand. Volume, corridor availability, counterparties, fees, and regulatory eligibility require dated evidence. Compare the product with the [World Bank's cross-border fast-payments report](https://fastpayments.worldbank.org/sites/default/files/2021-10/Cross_Border_Fast_Payments_Final.pdf) for broader payment-system context.
`,

  "what-happened-with-the-sec-lawsuit-against-ripple": `
The SEC filed its civil action against Ripple, Bradley Garlinghouse, and Christian Larsen in December 2020. The case concerned offers and sales of XRP and whether particular transactions were unregistered investment contracts.

## Major decisions

In July 2023, the district court reached different conclusions for institutional sales, programmatic exchange sales, and other distributions. It did not issue a universal rule for every XRP transaction. Claims against the individual executives were later dismissed.

In August 2024, the court entered a final judgment imposing a $125,035,150 civil penalty on Ripple and an injunction against future violations of the registration provisions. The parties later proposed a modification that would have involved $50 million, but the court did not implement it.

## Final status

On August 7, 2025, the SEC and defendants filed a joint stipulation dismissing the SEC's appeal and Ripple's cross-appeal. The [SEC's litigation release](https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26369) says the $125,035,150 judgment and injunction remain in effect.

The careful conclusion is that the enforcement action is resolved, while its holdings remain transaction-specific. ETF listings, exchange availability, or later policy changes do not rewrite the judgment.
`,

  "what-is-rlusd": `
Ripple USD, or RLUSD, is a U.S. dollar-denominated stablecoin issued on the XRP Ledger and Ethereum. A stablecoin is designed to track a reference value, but users should not treat the design goal as a guarantee that every venue will always quote exactly one dollar.

## Reserves and attestations

Ripple publishes reserve composition and monthly independent attestations on its [RLUSD transparency page](https://ripple.com/products/stablecoin/transparency/). That is the appropriate source for the reporting date, circulation, reserve assets, and attestation provider. Old totals should not be copied into evergreen articles.

The New York Department of Financial Services has guidance for U.S. dollar-backed stablecoins covering reserve and redemption policies. Read the [NYDFS stablecoin guidance](https://www.dfs.ny.gov/industry-guidance/industry-letters/il20220608-issuance-backed-stablecoins) alongside the issuer's terms.

## RLUSD and XRP are different assets

RLUSD is intended to track the dollar. XRP is the XRP Ledger's native asset and has a market price. Both can exist on XRPL and trade through its exchange and AMM features, but activity in one does not guarantee demand or price appreciation in the other.
`,

  "can-xrp-be-mined": `
No. All 100 billion XRP were created when the XRP Ledger began, and the protocol has no mining reward that creates additional XRP.

## How validation works instead

XRPL servers share proposed transactions and validators participate in consensus over the next ledger. Validators do not receive newly issued XRP or transaction fees. Transaction costs are destroyed as an anti-spam mechanism. The [XRPL consensus documentation](https://xrpl.org/docs/concepts/consensus-protocol/consensus-principles-and-rules) explains the process.

This fact alone does not settle every decentralization or governance question. Those questions require current evidence about server operators, validator lists, amendment support, software diversity, and the ability of participants to choose configurations. Avoid converting a fluctuating validator count into a permanent claim.

## Supply consequence

Because there is no issuance mechanism, XRP's original 100 billion supply cannot grow through protocol operation. Small transaction costs reduce the amount remaining. Ripple's escrow releases affect availability and distribution, not creation of new XRP. See the [official XRP overview](https://xrpl.org/about/xrp) for the supply history.
`,

  "what-is-the-xrp-ledger": `
The XRP Ledger is an open-source public ledger launched in 2012. It records XRP transactions and supports issued assets, an order-book exchange, escrows, payment channels, automated market makers, and native NFT objects.

## Consensus and governance

XRPL does not use proof-of-work mining or proof-of-stake rewards. Servers evaluate transactions and validators participate in consensus. Protocol changes are introduced as amendments and require sustained validator support before activation. The [XRPL documentation](https://xrpl.org/docs) and [consensus rules](https://xrpl.org/docs/concepts/consensus-protocol/consensus-principles-and-rules) are the primary references.

## What to verify

Claims about speed, fees, reserves, validator counts, uptime, transaction totals, or ecosystem projects are time-sensitive. They should be measured from a named server or dated official source. An explorer's address label is provider enrichment, not canonical ledger identity.

Native support also does not mean every feature is risk-free. Issued assets carry issuer risk, AMM liquidity can lose value, and NFT transfer fees are optional settings rather than universal royalty enforcement. The protocol defines available mechanics, while applications and users determine how they are used.
`,

  "who-is-brad-garlinghouse": `
Brad Garlinghouse is Ripple's chief executive officer. The current title and biography should be verified from Ripple's [leadership page](https://ripple.com/company/leadership/) because executive roles can change.

## Role at Ripple

Garlinghouse joined Ripple before becoming CEO and led the company during the SEC enforcement action, international expansion, and the launch of newer product lines. Descriptions of company size, valuation, operating countries, customers, and acquisitions should use dated company or counterparty records rather than promotional shorthand.

Garlinghouse and Christian Larsen were named as defendants in the 2020 SEC case. The SEC later dismissed its claims against the individuals. Ripple remained subject to the final judgment, including a $125,035,150 civil penalty and injunction. The [SEC's final case release](https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26369) is the authoritative status source.

## Separating fact from commentary

Public statements by an executive are evidence of that person's position, not independent proof that a market, legal, or adoption claim is true. Verify the underlying claim with a regulator, court, protocol record, filing, or named counterparty.
`,

  "is-there-an-xrp-etf": `
Yes. U.S.-listed investment products now provide XRP exposure, but the product structure matters. Investors should distinguish spot products that hold XRP from products that use derivatives, covered-call strategies, leverage, or other instruments.

## How to verify a product

Use the fund's effective SEC registration statement and official exchange listing. Confirm the ticker, sponsor, objective, custody arrangement, fees, creation and redemption process, risks, and effective date. Do not rely on an old application headline once a filing has been amended or withdrawn.

Examples of primary records include the [21Shares XRP ETF prospectus](https://www.sec.gov/Archives/edgar/data/2059438/000207184425000517/424b3.htm) and the [REX-Osprey XRP ETF filing](https://www.sec.gov/Archives/edgar/data/1771146/000177114626001359/ck0001771146-20260629.htm). Their structures are not interchangeable.

## What ETF approval does not prove

A registration statement or listing does not classify every XRP transaction, guarantee fund liquidity, create permanent buying pressure, or assure returns. Brokerage availability, retirement-account eligibility, tax treatment, premiums or discounts, and bid-ask spreads depend on the product and investor.
`,

  "where-can-i-buy-xrp": `
XRP is available through a number of exchanges and brokerage platforms, but availability depends on country, state, account type, payment rail, and the platform's current asset policy.

## Verify before depositing

Start with the provider's official asset page and terms for your region. Confirm XRP trading and withdrawals separately. Some platforms may permit price exposure while limiting transfers. Check whether a destination tag is required, which network is selected, and whether the receiving account supports XRP.

Fees also vary by product. A simple-buy quote, advanced order book, spread, card payment, bank transfer, and crypto withdrawal can have different costs. Coinbase states that Advanced fees vary by order type and volume in its [fee documentation](https://help.coinbase.com/en/coinbase/trading-and-funding/advanced-trade/advanced-trade-fees). Kraken publishes a current [fee schedule](https://www.kraken.com/features/fee-schedule). Uphold publishes [service fees](https://uphold.com/en-us/get-started/service-fees).

## Safe transfer process

Enable strong account security, send a small test withdrawal, verify the address and tag on the device you control, and keep records for tax reporting. No platform is universally best, and a listing is not a government endorsement or loss guarantee.
`,

  "what-was-xrps-all-time-high-price": `
An all-time high needs a defined market and method. XRP trades on many venues, in multiple quote currencies, and with different liquidity. A brief price spike on one exchange can differ from a daily close or a broad market index.

## A reproducible method

Name the exchange, pair, timezone, candle interval, price field, and retrieval date. Decide whether the metric uses the intraday high, daily close, or volume-weighted price. Then preserve the exchange API response or query parameters.

The often-cited figure of $3.84 refers to a January 2018 intraday market print reported by common aggregators. It should not be presented as a universal ledger fact. Later market history must be checked against the same methodology before saying the record still stands.

## Why the distinction matters

An all-time high is historical context, not a forecast or fair-value estimate. Market structure, supply, liquidity, regulation, and available products can change. Claims about what caused a past move or what will produce a new high require separate evidence and should be labeled as analysis rather than fact.
`,

  "what-makes-xrp-different-from-bitcoin": `
XRP and bitcoin are native assets of different networks with different issuance and consensus designs. Bitcoin uses proof-of-work mining and has a scheduled issuance capped at 21 million BTC. XRP Ledger began with 100 billion XRP and does not issue validator rewards.

## Protocol differences

XRPL usually validates ledgers in several seconds and includes an order-book exchange and issued-asset features at the protocol level. Bitcoin targets an average block interval of roughly ten minutes and uses a different confirmation model. Compare the [Bitcoin white paper](https://bitcoin.org/bitcoin.pdf), [Bitcoin Core documentation](https://bitcoincore.org/en/doc/), and [XRPL consensus documentation](https://xrpl.org/docs/concepts/consensus-protocol/consensus-principles-and-rules).

Fees, throughput, energy use, and finality are not single timeless numbers. A fair comparison dates the observation and uses equivalent definitions. It should also distinguish base-layer operation from payment channels, exchanges, custodians, and other services.

## Investment implications

Neither protocol design determines future returns. Bitcoin ownership and XRP ownership carry different technical, custody, market, and regulatory risks. Calling one only a store of value and the other only a payment asset is a simplified narrative, not a protocol rule.
`,

  "can-i-stake-my-xrp": `
XRP cannot be staked to secure the XRP Ledger. XRPL does not use proof-of-stake, validators receive no native XRP reward, and holding XRP does not generate protocol yield.

## AMM liquidity is not staking

An XRP holder can deposit assets into an XRPL automated market maker and receive liquidity-provider tokens. That is a market-making activity, not staking. Returns depend on trading volume and fees, while the position can lose value through price movement, pool composition changes, low liquidity, issuer risk for the paired asset, and operational mistakes.

The [official XRPL AMM documentation](https://xrpl.org/docs/concepts/tokens/decentralized-exchange/automated-market-makers) explains the mechanism. It does not promise an annual percentage yield or preservation of principal.

## Centralized products are separate

Some companies may offer lending or promotional rewards involving XRP. Availability, rate, custody, counterparty exposure, and legal eligibility vary by region and can change without notice. Verify an exact XRP-specific product page and risk terms before transferring assets. If no current first-party evidence exists, treat the offer as unavailable.
`,

  "best-ways-to-stake-xrp": `
There is no native XRP staking reward, so a page comparing "staking" options should begin by correcting the label. The relevant activities are liquidity provision, lending, or third-party reward programs, each with a different risk model.

## Compare the activity, not just the advertised rate

For an XRPL AMM, review the asset pair, issuer, pool fee, liquidity, trading volume, price exposure, and withdrawal mechanics. Fee income is variable and can be outweighed by losses. Read the [XRPL AMM documentation](https://xrpl.org/docs/concepts/tokens/decentralized-exchange/automated-market-makers).

For a centralized lending or reward product, verify that XRP is eligible in your jurisdiction. Record custody, withdrawal terms, rehypothecation, insolvency treatment, rate conditions, lockup, and regulator. A high displayed rate does not measure the chance of recovering principal.

## A neutral decision rule

If the product cannot explain how returns are generated, who controls the XRP, how losses are allocated, and how withdrawals work, do not treat the advertised yield as verified. Self-custody avoids some counterparty risks but does not eliminate market, software, key-management, or issued-asset risk.
`,

  "when-should-i-sell-my-xrp": `
No website can determine the right sale date for an individual. A useful framework starts with personal obligations and risk capacity rather than a price prediction or community conviction.

## Questions to answer first

- Do you need cash for near-term expenses or debt?
- How concentrated is your net worth in XRP and other correlated assets?
- What loss could you absorb without changing essential plans?
- What evidence would invalidate your original reason for buying?
- What tax and transaction costs would a sale create in your jurisdiction?
- Are you relying on a product, legal, or adoption claim that may have changed?

Selling all at once, selling in stages, rebalancing, or continuing to hold each creates different risks. A preset plan can reduce impulsive decisions, but arbitrary price targets are not evidence of future value.

## Keep product claims separate from price claims

An ETF listing, payment integration, AMM feature, or court development can be relevant without guaranteeing XRP demand or price appreciation. AMM and lending activity can also lose principal. For U.S. tax basics, consult the [IRS digital-assets hub](https://www.irs.gov/filing/digital-assets). For personalized advice, use a licensed financial and tax professional who understands your full situation.
`,
};

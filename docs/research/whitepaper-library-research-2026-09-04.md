# Whitepaper library research

Researched 4 September 2026. Scope confirmed: XRP, Ripple, and the XRPL ecosystem.

## Recommendation

Build `/whitepapers` as a source-led library, with individual reading pages at `/whitepapers/[slug]`. Start with official external document links. Keep catalog metadata in a versioned JSON/TypeScript file; use Supabase Storage for PDF copies once redistribution status is recorded. The existing repo already includes Supabase clients. A storage bucket has not been verified or provisioned.

Cloudflare R2 is the alternative if public PDF downloads become a substantial traffic source: its published Standard tier includes 10 GB-month of free storage, 1 million Class A operations, 10 million Class B operations, and no internet egress charge. Beyond the free storage tier it lists $0.015/GB-month, plus operation charges. For scale, 1,000 PDFs averaging 5 MB would occupy about 5 GB; that is an estimate, not a measurement of this collection. [R2 pricing](https://developers.cloudflare.com/r2/pricing/).

There is no single authoritative repository containing every XRP ecosystem whitepaper. The strongest primary-source indexes found were [XRPL Consensus Research](https://xrpl.org/docs/concepts/consensus-protocol/consensus-research), [XRP Ledger Standards](https://xls.xrpl.org/), and [Flare's whitepaper library](https://dev.flare.network/support/whitepapers). Project-specific sources fill the gaps.

## Repository findings

- Cloned `Jacknelson6/allaboutxrp` into `/Users/jacknelson/projects/allaboutxrp`, on `main` at `b4c0deea2ef0ee0c58ff6fafe3432f2e5b2fa125`.
- No whitepaper listing route or catalog exists in the checked-out source. No whitepaper-named file appeared in the fetched branch history. The live `/whitepapers` URL returned the site's 404 page.
- The app uses Next.js 16 / React 19. Supabase dependencies, clients, and migrations are present; Netlify build configuration is present. This is not evidence that a Storage bucket is already configured.
- `src/app/learn/xrpl-validators/page.tsx:306` labels arXiv 1802.07242 as “RPCA Consensus Whitepaper (2018).” The actual title is **Analysis of the XRP Ledger Consensus Protocol** by Brad Chase and Ethan MacBrough. The original RPCA paper is the 2014 Schwartz/Youngs/Britto paper. Correct this when connecting the library.
- Only research files were added for this task. The site, database, hosting, and remote branch were not changed.

## Catalog

The accompanying `whitepaper-catalog.json` contains 28 records: 12 whitepapers, 5 research papers, 2 reports, 7 specifications, and 2 documentation resources. This is a curated starter inventory, not a claim to include every issued token's paper. `launch` means recommended for the first collection after metadata review; it does not mean publication or mirroring has occurred. Supporting resources should have distinct type labels, and extended Flare research can live behind an ecosystem filter.

Dates below are publication/revision dates where established. XLS dates are creation dates. Flare dates are the official developer-hub listing dates and still require PDF-version reconciliation. “Not established” is intentional.

| Document | Type | Date | Priority |
| --- | --- | --- | --- |
| [The Ripple Protocol Consensus Algorithm](https://ripple.com/files/ripple_consensus_whitepaper.pdf) | whitepaper | 2014 | launch |
| [Analysis of the XRP Ledger Consensus Protocol](https://arxiv.org/pdf/1802.07242) | research-paper | 2018-02-20 | launch |
| [Cobalt: BFT Governance in Open Networks](https://arxiv.org/pdf/1802.07240) | research-paper | 2018-02-20 | launch |
| [Security Analysis of Ripple Consensus](https://arxiv.org/pdf/2011.14816) | research-paper | 2020-11-30 | launch |
| [A Protocol for Interledger Payments](https://interledger.org/documents/interledger.pdf) | whitepaper | 2015 | launch |
| [The Future of Asset Tokenization: A New Token Standard for Institutional-Grade Finance on XRP Ledger](https://xrpl.org/static/pdf/Whitepaper_the_future_of_asset_tokenization.pdf) | whitepaper | Not established | launch |
| [Ripple USD Whitepaper: A stablecoin for the internet of value](https://ripple.com/reports/rlusd-whitepaper.pdf) | whitepaper | 2026-06-04 | launch |
| [Xahau Whitepaper](https://github.com/Xahau/Whitepaper/blob/main/Xahau-Whitepaper.pdf) | whitepaper | Not established | launch |
| [Seriously smart contracts for the XRPL Ecosystem — Evernode Whitepaper 2.0](https://raw.githubusercontent.com/EvernodeXRPL/whitepaper/main/Evernode%202.0.pdf) | whitepaper | 2024-01-12 | launch |
| [Coreum: An Enterprise Grade Blockchain — Technical White Paper v2.0](https://www.coreum.com/assets/coreum_technical_paper.pdf) | whitepaper | 2023-02 | review |
| [Flare Confidential Compute: Powering Interoperability for Flare through TEEs](https://dev.flare.network/pdf/whitepapers/20260706-FlareConfidentialCompute.pdf) | whitepaper | 2026-07-06 | launch |
| [The Flare Data Connector](https://dev.flare.network/pdf/whitepapers/20240224-FlareDataConnector.pdf) | whitepaper | 2025-01-14 | launch |
| [FTSOv2: more data feeds and faster updates to the FTSO](https://dev.flare.network/pdf/whitepapers/20240223-FlareTimeSeriesOracleV2.pdf) | whitepaper | 2024-09-09 | launch |
| [Consensus learning: A novel decentralised ensemble learning paradigm](https://dev.flare.network/pdf/whitepapers/20240225-ConsensusLearning.pdf) | research-paper | 2024-02-25 | extended |
| [The Flare network and FLR token](https://dev.flare.network/pdf/whitepapers/20221231-TheFlareNetworkAndFLRToken.pdf) | whitepaper | 2022-12-30 | launch |
| [A hybrid post-quantum digital signature scheme for the EVM](https://dev.flare.network/pdf/whitepapers/20220722-HybridPostQuantumDigitalSignatureSchemeForTheEthereumVirtualMachine.pdf) | research-paper | 2022-07-05 | extended |
| [Flare Consensus Protocol](https://dev.flare.network/pdf/whitepapers/20191105-FlareConsensusProtocol.pdf) | whitepaper | 2019-11-05 | extended |
| [Kraken exchange - FTSO price comparison](https://dev.flare.network/pdf/whitepapers/20230406-KrakenExchange-FTSOPriceComparison.pdf) | report | 2023-04-06 | extended |
| [STP.02 - Impact of secondary FTSO reward band](https://dev.flare.network/pdf/whitepapers/20230529-SongbirdBandUpdate-ImpactOfSTP02.pdf) | report | 2023-05-29 | extended |
| [XLS-0020: Non-Fungible Token Support](https://xls.xrpl.org/xls/XLS-0020-non-fungible-tokens.html) | specification | 2021-05-24 | supporting |
| [XLS-0030: Automated Market Maker on XRPL](https://xls.xrpl.org/xls/XLS-0030-automated-market-maker.html) | specification | 2022-06-30 | supporting |
| [XLS-0033: Multi-Purpose Tokens (MPTs)](https://xls.xrpl.org/xls/XLS-0033-multi-purpose-tokens.html) | specification | 2022-08-05 | supporting |
| [XLS-0040: Decentralized Identity on XRP Ledger](https://xls.xrpl.org/xls/XLS-0040-decentralized-identity.html) | specification | 2023-03-30 | supporting |
| [XLS-0065: Single Asset Tokenized Vault](https://xls.xrpl.org/xls/XLS-0065-single-asset-vault.html) | specification | 2024-04-12 | supporting |
| [XLS-0066: Lending Protocol](https://xls.xrpl.org/xls/XLS-0066-lending-protocol.html) | specification | 2024-10-18 | supporting |
| [XLS-0096: Confidential Transfers for Multi-Purpose Tokens](https://xls.xrpl.org/xls/XLS-0096-confidential-mpt.html) | specification | 2026-01-15 | supporting |
| [XRP Ledger Payment System Specification](https://github.com/XRPLF/dex-docs) | documentation | Not established | supporting |
| [What is the XRPL EVM?](https://docs.xrplevm.org/pages/users/introduction/what-is-the-xrplevm) | documentation | Not established | supporting |

## Source and version notes

1. **Core consensus:** The official XRPL research index lists RPCA (2014), the 2018 consensus analysis, and Cobalt. Preserve the historical sequence. Cobalt is a research proposal, not evidence of an activated consensus change. Add independent security analysis for balance, with its publication date and modeling assumptions. [Official index](https://xrpl.org/docs/concepts/consensus-protocol/consensus-research), [independent paper](https://arxiv.org/abs/2011.14816).
2. **Interledger:** The official PDF explicitly says it is outdated. Its indexed `/developers/documents/interledger.pdf` address returned 404; the current `/documents/interledger.pdf` path was found in the official website repository and verified as a PDF. Present it as historical research and link [current ILPv4](https://interledger.org/developers/rfcs/interledger-protocol/). Interledger is not XRP-exclusive.
3. **Tokenization and RLUSD:** The MPT paper is 10 pages and attributed to Team RippleX; its publication date was not established. The current RLUSD PDF is 12 pages and says last updated 4 June 2026. Preserve dated revisions when hosting copies. Label RLUSD separately from XRP. [MPT paper](https://xrpl.org/static/pdf/Whitepaper_the_future_of_asset_tokenization.pdf), [RLUSD paper](https://ripple.com/reports/rlusd-whitepaper.pdf).
4. **Xahau and Evernode:** Xahau offers a readable HTML paper and an official PDF repository. Evernode's homepage currently points to its GitHub-hosted Whitepaper 2.0; another official copy identifies the 12 January 2024 update. Describe Xahau as a separate network and Evernode's Xahau relationship accurately. [Xahau](https://xahau.network/docs/resources/whitepaper/), [Evernode](https://evernode.org/), [dated Evernode copy](https://evernode.org/wp-content/uploads/2024/01/Evernode-2.0.pdf).
5. **Flare:** The official developer hub exposes nine papers/reports. The FDC and FTSOv2 filenames contain February 2024 dates, while the index lists January 2025 and September 2024 respectively. Its consensus-learning date also differs between the marketing and developer indexes. Retain the recorded date basis rather than silently inferring a version. Flare is an adjacent network, not XRPL itself. [Developer index](https://dev.flare.network/support/whitepapers), [marketing index](https://flare.network/whitepapers).
6. **Standards:** The XLS index listed 79 standards during research. The seven selected entries cover NFTs, AMMs, MPTs, identity, vaults, lending, and confidential transfers. “Final” and “Draft” describe specification status; they do not establish mainnet activation. Keep activation as a separate field sourced to current amendment data if the page needs it. [Standards index](https://xls.xrpl.org/).
7. **Payment Engine:** The historical engineering.ripple.com source failed browser TLS verification. A current primary-source [XRPL Payment System Specification](https://github.com/XRPLF/dex-docs) is a useful replacement resource, labeled as documentation.
8. **Coreum and Sologenic:** Coreum's indexed v2.0 technical paper is from February 2023. The live PDF URL redirects to `https://tx.org/`, so it is not a working download. The [current TX publication page](https://tx.org/whitepapers) separates its vision paper, addendum, and versioned whitepaper; treat these as separate documents in any future expansion. Sologenic's historical paper was found via secondary indexes, but a current primary-source whitepaper was not established; keep it in the discovery backlog rather than copying an aggregator mirror.
9. **XRPL EVM:** A standalone official whitepaper was not verified. Link the [official architecture introduction](https://docs.xrplevm.org/pages/users/introduction/what-is-the-xrplevm) under documentation.

## Where to hold the collection

| Layer | Recommended home | Purpose |
| --- | --- | --- |
| Catalog metadata | Versioned repo data initially; Supabase Postgres if an editorial admin is needed | Titles, authors, topics, versions, source provenance, review state |
| Original source | Publisher, arXiv, or official project repository | Always retain an official source link |
| Hosted PDF copies | Supabase Storage `whitepapers` bucket | Fits the existing integration; public reading through the CDN |
| Optional high-volume archive | Cloudflare R2 with a custom domain | Separate storage from the app; avoid bandwidth egress charges |
| Search and reading experience | Next.js listing and detail routes | Search/filter metadata, explain context, open or download the paper |

Supabase public buckets offer public reads through its CDN while upload/delete operations remain access-controlled. That fits a read-only public library with server-controlled ingestion. Use a separate private staging bucket for unreviewed uploads. [Bucket access models](https://supabase.com/docs/guides/storage/buckets/fundamentals), [CDN](https://supabase.com/docs/guides/storage/cdn/fundamentals).

Use immutable paths such as `whitepapers/ripple-consensus/2014/<sha256>.pdf`. Store the official source URL, retrieved date, byte size, MIME type, SHA-256, document version, and redistribution evidence alongside each copy. Keep the original filename as display metadata. Never silently overwrite an old paper with a changed PDF at the same publisher URL.

All current catalog entries are `source-link-only`; none has been cleared or uploaded for public mirroring. Record any license or permission at the document level before enabling a hosted-copy URL. arXiv accessibility and a public GitHub repository alone do not establish that a particular PDF has an open redistribution license. This is an ingestion decision, not a reason to omit source links from the catalog.

For a small launch collection, a repo catalog avoids an unnecessary database dependency. PDFs can remain off-repo so revisions do not enlarge Git history or require a site deployment merely to store a file.

## Suggested page behavior

- Lead with the original 2014 consensus paper and the 2018 analysis, then group by foundations, Ripple/stablecoins, tokenization/DeFi, ecosystem, and independent research.
- Search titles, authors, and topics. Filter by project/network, document type, and year. Give historical/outdated sources an explicit label.
- Each listing shows title, author/publisher, date/version, a short original summary, source, and review date. Distinguish a publisher-authored paper from independent research.
- A detail page explains relevance, links related papers and current docs, and provides “Read original.” Add “Download hosted copy” only when a copy is available; provide an external fallback if an embedded PDF viewer is unavailable.
- Follow the site's existing source-led editorial styling. Add metadata, canonical URL, sitemap inclusion, and its Markdown representation when implementing the routes.
- Link the library from the learning center and relevant guides. Correct the existing mislabeled consensus link as part of that implementation.

## Validation and remaining discovery

`whitepaper-link-checks.json` records a bounded live GET probe of each document URL: response status, resolved URL, content type, and the first PDF bytes where applicable. It is an availability check, not full PDF content, safety, or version validation. A failed probe can reflect access restrictions; it does not by itself prove a document was deleted.

Next ingestion work: reconcile dates/versions, resolve failed or moved links, record per-document redistribution evidence, and add project papers only after verifying the issuer's own source. Additional candidates include Sologenic, XRP-related FAssets material, project-specific DeFi papers, and Ripple institutional reports. Keep marketing reports and regulatory disclosure documents distinct from protocol whitepapers.

### Availability results

27 of 28 document URLs returned HTTP 200/206 in the final probe; 17 returned PDF magic bytes. The remaining reachable URLs are HTML source/specification pages, including the Xahau GitHub PDF viewer. Coreum redirected to a different resource in the browser and remains excluded from working-download treatment. The Interledger URL was repaired during research. No full PDF archive was downloaded or published.

# AllAboutXRP SEO and AEO Growth Gameplan

Date: July 29, 2026  
Primary domain: `https://allaboutxrp.com`  
Decision rule: improve evidence, information architecture, and measurement before publishing more keyword variants.

## Executive decision

AllAboutXRP does not need another large batch of generic XRP pages. It already has broad topical coverage. The highest-leverage move is to turn the existing library into a smaller, better-connected, more defensible body of work and then let verified Search Console demand guide each refresh or expansion.

The release accompanying this plan consolidates 38 duplicate or legacy URLs, adds seven crawlable topic hubs, exposes answer content in initial HTML, removes unsupported live-data claims, repairs internal redirect hops and broken `/go/*` links, and expands the sitemap from 149 to 152 intentional canonical URLs. It does not create speculative programmatic pages.

## Measurement constraint

The production HTML did not contain a GA4 tag. The application already supports `NEXT_PUBLIC_GA_MEASUREMENT_ID`, but the production value is not set. Therefore GA4 cannot supply a trustworthy historical page-performance baseline for the period in which the tag was absent.

The domain has a Google verification DNS record, but the signed-in Search Console dashboard could not be controlled reliably during this audit. No query, click, impression, CTR, position, conversion, or engagement claim in this plan is presented as observed GSC or GA4 data.

### Restore measurement now

1. In GA4 Admin, open the web data stream for `allaboutxrp.com` and copy its `G-...` Measurement ID.
2. In Netlify, add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to the production environment and redeploy.
3. Confirm the `gtag/js?id=G-...` request in production and a visit in GA4 Realtime.
4. In Search Console, submit `https://allaboutxrp.com/sitemap.xml` and inspect `/`, `/learn`, `/answers`, and one topic hub.
5. Export 16 months of GSC performance by query and page, plus Page Indexing and Core Web Vitals. Save the raw export before filtering.

## Highest-leverage work, in order

| Priority | Workstream | Why it matters | Status |
| --- | --- | --- | --- |
| P0 | Restore GA4 and export GSC | Prevents content decisions based on guesswork and establishes conversion/page baselines | Blocked on production Measurement ID and dashboard access |
| P0 | Consolidate duplicate intent | Stops URLs with the same answer from splitting links and relevance | Implemented: 38 permanent canonical redirects |
| P0 | Build a crawlable topic hierarchy | Moves important articles out of isolated cycles and gives users a coherent path | Implemented: seven hubs covering every sitemap learn guide |
| P0 | Make answers extractable | Answer engines need concise visible answers, semantic questions, evidence, and stable URLs | Implemented on `/answers` and `/learn/faq` |
| P0 | Remove false freshness and fake fallbacks | Unsupported “live,” “AI-powered,” and sample data claims damage trust | Implemented on news, whale, and escrow surfaces |
| P1 | Add visible primary evidence to core guides | Only a minority of learn templates expose a clearly labeled source section | Start with GSC winners and YMYL pages |
| P1 | Improve mobile LCP and JS cost | Audit snapshot measured roughly 6.7 s mobile LCP and substantial unused JavaScript | Profile homepage and live chart, then lazy-load below-fold interactive modules |
| P1 | Repair social-image inheritance | Most nested pages replace root Open Graph metadata without defining an image | Add a shared page-image helper or merge images in metadata builders |
| P1 | Prune links to `noindex` pages | Indexable guides still send users and crawlers into thin comparison/recommendation clusters | Audit now reports every occurrence; remove from highest-authority pages first |
| P2 | Recover defensible news history | Search results include old news URLs that now return 404, while the current feed is empty | Restore only when original content and source record are available; otherwise keep honest 404/410 responses |
| P2 | Publish original data products | Unique data and methodology are more defensible than generic keyword pages | Build only after the source pipeline, update cadence, and QA owner exist |
| P2 | Retire the legacy lint backlog | Full-project ESLint currently reports 85 existing errors in generated scripts and older templates | Keep build and SEO audit blocking; repair lint by subsystem without hiding errors |

## Information architecture now

```text
Home
└── Learn
    ├── XRP Basics
    ├── XRP Ledger
    ├── Ripple and Its Products
    ├── Buying, Wallets, and Security
    ├── XRP Markets and Research
    ├── XRP Regulation and Legal Context
    └── Payments and XRP Adoption
        └── Canonical guides
```

Each sitemap learn guide appears in at least one hub. The hubs use `CollectionPage`, `ItemList`, and breadcrumb structured data, but the visible page—not schema alone—contains the same hierarchy.

## GSC research protocol

When access is restored, score every canonical URL with the same method:

1. Segment branded and non-branded queries.
2. Find pages with meaningful impressions and average position 4–20. These are refresh candidates, not new-page candidates.
3. Find high-impression pages with below-site-median CTR. Rewrite titles and descriptions only where the current snippet fails to match the dominant intent.
4. Group queries by intent and identify cases where two or more AllAboutXRP URLs receive impressions for the same cluster. Merge or redirect only after inspecting the query overlap.
5. Compare the last 28 days with the previous 28 days and year-over-year where available. Record seasonality and major XRP news before attributing changes to SEO work.
6. Use URL Inspection on canonical winners and new hubs; confirm “Google-selected canonical” matches the declared canonical.
7. Do not use indexed-page count as the success metric. Track non-branded clicks, qualified engaged sessions, newsletter completions, and the share of impressions owned by canonical guides.

### First GSC work queue

- Queries with impressions but no page in the top 20: decide whether an existing guide can satisfy the intent.
- URLs ranking 4–10: improve answer block, sourcing, title, internal links, and freshness before adding length.
- URLs ranking 11–20: compare against the current top results and add missing evidence or original analysis.
- Cannibalized clusters: consolidate when the pages give materially the same answer.
- Crawled/discovered but not indexed: check uniqueness and hub links; do not resubmit thin pages repeatedly.

## GA4 research protocol

After the tag is live, treat the first 28 complete days as the clean baseline. Track:

- `page_view` by landing page and default channel group.
- Engaged sessions and average engagement time by canonical guide.
- `newsletter_signup_completed`, already implemented, by page and placement.
- Outbound primary-source clicks, guide-to-guide clicks, and tool starts as future named events.
- Organic landing pages that attract traffic but do not lead to a second guide, a source click, or a signup.

Do not compare post-install GA4 metrics with a period that had no tag as if it were a traffic increase.

## AEO content standard

Every page chosen for refresh should have:

1. One clear H1 that matches the page’s single intent.
2. A 40–70 word direct answer near the top.
3. Question-shaped H2/H3 headings where users genuinely ask questions.
4. Visible primary-source links adjacent to the claims they support.
5. A real reviewed date changed only after substantive review.
6. Explicit limitations for prices, regulation, balances, custody, and forecasts.
7. Matching structured data only for content visible on the page.
8. A canonical URL and direct internal links from its topic hub.

Do not invent named authors or reviewers. Publish Person schema only after a real accountable expert agrees to be named and a genuine profile page exists.

## Programmatic SEO gate

A programmatic collection may launch only when all answers below are “yes”:

- Does every page use a reliable primary dataset rather than generated prose alone?
- Does every page contain a unique factual payload that users cannot get from the parent hub?
- Is the source, retrieval time, transformation method, and failure state visible?
- Can stale or failed data automatically remove the page from the sitemap or mark it unavailable?
- Is there a useful index page and contextual linking beyond pagination?
- Can a human owner audit a sample on every update?
- Does Search Console show demand for the intent?

Best future candidates are validator profiles, network fee/reserve history, an escrow transaction ledger, a regulation timeline, and an ETF filing tracker. Exchange-by-country, price-target, and generic comparison permutations should remain consolidated or excluded unless original data creates a genuinely different answer.

## 90-day execution sequence

### Days 0–7

- Set the GA4 Measurement ID and validate Realtime.
- Submit the sitemap and inspect the seven hubs in GSC.
- Export GSC raw data and create the first scored work queue.
- Confirm all production redirects, canonicals, noindex headers, and sitemap exclusions.

### Days 8–30

- Refresh the top 10 non-branded opportunity pages with primary sources and answer-first openings.
- Remove links from those pages to `noindex` recommendations/comparisons.
- Add an Open Graph image to the shared metadata path.
- Profile and reduce homepage/live-chart JavaScript and LCP.

### Days 31–60

- Consolidate any additional GSC-confirmed cannibalization.
- Add source-click and guide-click analytics events.
- Publish one original methodology page and one small source-backed dataset prototype.
- Request reindexing only for materially updated canonical pages.

### Days 61–90

- Compare full 28-day periods for impressions, clicks, CTR, engaged sessions, and signups.
- Expand the data product only if it is reliable and earns impressions or qualified engagement.
- Refresh the next 10 pages from the scored queue; do not publish a quota of new URLs.

## Definition of success

- Every indexable learn guide is reachable from `/learn` through one topic hub.
- No sitemap URL redirects or carries `noindex`.
- Google-selected canonicals match declared canonicals for sampled winners.
- Non-branded clicks and qualified organic sessions grow on canonical pages.
- At least the top 20 organic landing pages expose visible primary sources and a reviewed date.
- No live-data surface shows generated or hard-coded sample values as current data.
- Programmatic pages cannot enter the sitemap when their data pipeline is stale or unavailable.

## Primary guidance used

- Google Search: AI features and your website — https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search: canonicalization — https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google Search: crawlable links — https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Google Search: sitemap guidance — https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Analytics: troubleshoot tag setup — https://support.google.com/analytics/answer/9311124

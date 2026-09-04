# Whitepaper library implementation

Implemented 4 September 2026 on `feat/whitepaper-library`.

## Delivered

`/whitepapers` now contains 28 curated XRP, Ripple, and XRPL ecosystem records: 12 whitepapers, 5 research papers, 7 specifications, 2 reports, and 2 documentation resources. All records render in the initial HTML. Search, collection/type/year filters, sorting, empty-state recovery, citation copying, and permanent record anchors enhance the same list after hydration.

The canonical catalog is `src/data/whitepapers.ts`. Every record has source context and explicit date semantics. Coreum's moved paper has no working-download button. Flare is labeled as an adjacent network; XLS editorial states are not presented as activation status. Third-party documents remain at their original sources.

The page includes a reading guide, selection methodology, visible source-linked FAQs, canonical metadata, a social image, CollectionPage/ItemList, breadcrumbs, and FAQ schema. It is linked from navigation, the footer, the learning hub, and the validators guide, and included in the sitemap and existing Markdown/LLM indexes.

The original research memo is a historical discovery record. Its proposed individual detail routes were replaced with permanent anchors and substantial records on one useful collection page; no thin detail pages or filter permutations were created.

## Skills

Repository SEO guidance and reusable AEO patterns from `Anderson-Collaborative/ac-siteops` informed the implementation. The `seo-audit`, `ai-seo`, and `schema` skills were imported with their upstream MIT license and provenance under `.agents/skills`. See `.agents/skills/SOURCES.md` for sources and applicability. The user-approved Impeccable update completed locally to v4.2.0.

## Maintenance

1. Verify a new document against its original publisher, official repository, or author research record before adding it to `WHITEPAPERS`.
2. Write an original summary and context note; retain the distinction between publication, revision, creation, and listing dates. Leave unknown dates unstated.
3. Use a stable unique ID so existing record links remain valid. Set `documentUrl` to `null` if the original download is unavailable.
4. Update the review date only after checking the collection. The sitemap and page use that same date.
5. Run `npm run seo:test`, targeted ESLint, `npm run seo:audit`, and `npm run build`. Stop a production preview before rebuilding its `.next` output.

The discovery JSON and link-check JSON are dated research snapshots, not a second runtime catalog. A hosted PDF archive remains a separate ingestion feature; this implementation does not provision storage or copy third-party PDFs.

## Validation

- Production build and targeted ESLint passed.
- SEO test suite: 93 passing tests, including combined filters, sorting, unavailable-source handling, and structured-data consistency.
- SEO health audit passed with no broken, redirected, or noindex internal links.
- Production HTTP checks: 200 response, one main and H1, all 28 records in initial HTML, correct canonical, 28 schema entries, FAQ schema, sitemap/LLM inclusion, and a PNG social image.
- Both Markdown content negotiation and `/whitepapers.md` returned the collection and source context.
- Browser checks: search, empty results, nine-record Flare filter, record-anchor recovery after filtering, citation success/fallback, and keyboard focus to sorting. No horizontal overflow at 375, 768, or 1440 CSS pixels; all search/select controls have labels.
- Visual inspection completed in the in-app browser: desktop light/dark appearance and phone layouts, including collection buttons, native dropdowns, and search. Ego-browser screenshot capture failed, so the in-app browser supplied the visual verification.
- The repository design audit has two pre-existing rounded-corner violations in `src/app/tools/escrow-tracker/page.tsx` and `src/app/learn/partnerships/page.tsx`; this change introduces none.

Production publication uses the repository's existing `Deploy to Netlify` workflow on `main`. The user authorized deployment after reviewing the local implementation.

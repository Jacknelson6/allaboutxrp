# Helm: allaboutxrp SEO/AEO/GEO audit + premium redesign
Status: in progress
Goal: Verify and harden the site's indexing/sitemap/noindex/404 posture, push AEO/GEO further, and redesign the landing page + core components to a premium editorial-financial standard (Yahoo Finance density, AllAboutXRP editorial identity).
Completion check:
  1. `npm run build` exits 0 in the worktree.
  2. `npm run seo:audit && npm run seo:sitemap && npm run seo:redirects && npm run news:validate && npm run design:audit` all exit 0 with zero failures/brokenInternalLinks.
  3. Against `npm start` prod server: /, /news, one news article, /learn/basics, /learn/what-is-xrp, /tools, /answers, /about all return 200; /sitemap.xml, /news-sitemap.xml, /robots.txt, /llms.txt return 200; 30 sampled sitemap URLs return 200 (no 404s).
  4. JSON-LD on /, one news article, and one learn guide parses as valid JSON and includes expected @types (WebSite/Organization + FAQPage on /, NewsArticle on article, Article on guide).
  5. Homepage checklist (greppable/observable): market-data band, redesigned hero, top-stories news grid, education pathways section, upgraded Button + Card primitives in src/components used by the homepage; advisor screenshot review at desktop + mobile confirms DESIGN.md compliance (sharp corners, flat, cobalt accent) and premium news-page density.
Out of scope: fixing the 63 pre-existing lint errors (build passes without); new content/articles; deploy/merge to main (user confirms before ship); changes to Supabase/API backends.
Models: advisor=Claude Fable 5 (session) implementer=claude-sonnet-5 escalation=claude-opus-5 mechanical=claude-haiku-4-5 billing=subscription
Route: 3 helm: multi-chunk audit + redesign with design judgment and independent review.
Worktree: /Users/jack/Claude Code Projects/allaboutxrp-helm (branch helm/seo-design-overhaul off origin/main @ 9faea90)
Baseline: build green; all 5 SEO/design gates green; lint 63 errors pre-existing; seo:audit shows 258 pages, 243 withMetadata, 240 withCanonical, 231 withSchema (gap to investigate).
## Chunks
- [x] 1. SEO hardening — investigate metadata/canonical/schema coverage gap (258 vs 243/240/231), verify noindex set matches intent, robots/sitemap refinements, any 404/redirect fixes. Acceptance: gates green + gap explained or closed in a written note.
- [x] 2. AEO/GEO push — llms.txt review/expansion, JSON-LD validation + enrichment (Organization sameAs, author Person schema, article schema completeness), llms-full.txt if warranted. Acceptance: check #4 passes + diff review.
- [x] 3. Design foundation — upgraded tokens in globals.css + premium primitives (Button, Card, StatTile/DataBar, SectionHeader, ticker styling) in src/components/ui. Acceptance: build green, design:audit green, primitives exported and documented.
- [x] 4. Homepage redesign — compose market-data band, hero, top-stories grid, education pathways, tools strip, FAQ using chunk-3 primitives. Acceptance: check #5, advisor screenshot review.
- [x] 6. FAQ schema sync — ~70 learn pages where FAQPage JSON-LD lists fewer questions than the rendered FAQAccordion; single-source each page, add seo:faq gate. Acceptance: seo:faq exits 0, build green.
- [ ] 5. Site-wide adoption — nav/footer/news index/learn hubs adopt new primitives for consistency. Acceptance: build + design:audit green, advisor diff + screenshot review.
## Log
- Scout: repo map (haiku explore) — site already strong on technical SEO; gap: metadata coverage 243/258, canonical 240, schema 231. Homepage is dark editorial research page; needs news-forward premium density.
- Baseline gates: build green, seo:audit/sitemap/redirects/news:validate/design:audit all green, lint 63 pre-existing errors (out of scope).
- Dispatched parallel wave 1 (sonnet x3): chunk 1 SEO hardening, chunk 2 AEO/GEO, chunk 3 design foundation. Awaiting results.
- Chunk 2 ACCEPTED (sonnet, 1 attempt, ~186k tokens): Organization JSON-LD site-wide, Person author on article/howto schemas, publisher logo fix, llms.txt expanded, llms-full.txt created (203 guides + answers + tools + news with descriptions), schema-validate.mjs gate added (8/8 pages pass). sameAs correctly omitted (no real social URLs in repo). Surfaced 70-page FAQ schema/content mismatch → became chunk 6.
- Chunk 3 ACCEPTED (sonnet, 2 attempts, ~177k tokens): 8 primitives + cn helper + barrel in src/components/ui, theme-aware tokens in globals.css, docs appended to DESIGN.md/MASTER.md. Attempt 2 fixed Button to use next/link for internal hrefs (review catch). design:audit green. Committed d0083e5.
- Dispatched wave 2: chunk 4 homepage redesign (opus), chunk 6 FAQ schema sync (sonnet). Withdrew the agent-spawned background chip for the FAQ issue (folded into run).
- Chunk 4 ACCEPTED (opus, 1 attempt, ~217k tokens): full front-page recomposition (ticker/hero/top stories/market band/pathways/answers/tools/protocol/FAQ), +17 crawlable headlines (server-rendered news), correct h1 semantics, all gates green. Advisor edits on review: removed duplicate page-level Organization JSON-LD (layout owns it); moved on-ink-band contrast fix INTO TickerTape primitive. Visual review passed: desktop light+dark, mobile full-page. Committed bf96ac8.
- Dispatched chunk 5 site-wide adoption (sonnet): /news index, learn hubs, /answers, /tools, footer/nav typography alignment.
- Chunk 6 ACCEPTED (sonnet, 1 attempt, ~166k tokens): 118 learn pages (not 70 — deeper than estimated) had FAQ schema drift; codemod + 1 manual fix (rlusd bespoke pattern); visible content wins; seo:faq gate verified 0/206 mismatches by advisor. Committed 409f7d9.
- Chunk 1 ACCEPTED (sonnet, 1 attempt, ~173k tokens): 6 real gaps fixed (breadcrumb schema x3, 404 noindex, thanks canonical, sitemap modifiedAt lastmod); coverage counts mostly audit-regex false positives (metadata lives in sibling layout.tsx / shared AnswerPageLayout / re-exports). Gates: canonical 240→242, schema 231→234, zero failures. Noted (not fixed, fine): dead-code routes /get-started /live /charts /etf intercepted by redirects; stale comment in published-content.ts; www-normalization handled at Netlify DNS layer.

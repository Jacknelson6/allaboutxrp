# AllAboutXRP news automation

All publishable news is versioned in `content/news` and created by three Codex schedules. The old n8n and third-party model API workflows are retired. No model API key is required by the website.

Each scheduled run must:

1. Find one material, non-duplicate XRP, XRP Ledger, Ripple, regulatory, or market-structure development.
2. Verify it against at least three sources, including an official primary record and an independent supporting source.
3. Write at least 900 useful words of original analysis in the `_article-template.json` structure. Open with a direct answer, use entity-rich headings, and include claim-adjacent section citations.
4. Add data tables only when values have a dated, cited source.
5. Generate a unique, fact-safe editorial image for every article using `aaxrp-classical-ascii-v2`. Inspect every existing scene key first. The setting, primary symbol, viewpoint, lighting condition, and metaphor must all differ from existing art. Save it under `public/news`, register `imageSceneKey`, `imageSetting`, and `imageMetaphor`, add accurate alt text, and verify that it appears as the article hero and social preview. The image must be at least 1200 pixels wide and use a wide editorial aspect ratio.
6. Show source publication dates when available, label undated references, and keep uncertainty separate from confirmed facts.
7. Run `npm run news:validate`, `npm run seo:audit`, `npm run lint`, and `npm run build`. Visually verify the rendered article in Ego Lite.
8. Commit and push through the repository's normal main-branch flow, then verify the live article and image.

The website automatically includes published article files in the news hub, standard sitemap, two-day Google News sitemap, metadata, NewsArticle schema, and internal news feed.

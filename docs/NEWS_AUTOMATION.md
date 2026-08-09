# AllAboutXRP news automation

All publishable news is versioned in `content/news` and created by three Codex schedules. The old n8n and third-party model API workflows are retired. No model API key is required by the website.

Each scheduled run must:

1. Find one material, non-duplicate XRP, XRP Ledger, Ripple, regulatory, or market-structure development.
2. Verify it against at least two sources, including a primary source.
3. Write original analysis in the `_article-template.json` structure.
4. Add data tables only when values have a dated, cited source.
5. Use an original editorial image when it adds explanatory value. Every article still receives a crawlable 1200 by 630 branded news image route.
6. Run `npm run news:validate`, `npm run seo:audit`, `npm run lint`, and `npm run build`.
7. Commit and push through the repository's normal main-branch flow.

The website automatically includes published article files in the news hub, standard sitemap, two-day Google News sitemap, metadata, NewsArticle schema, and internal news feed.

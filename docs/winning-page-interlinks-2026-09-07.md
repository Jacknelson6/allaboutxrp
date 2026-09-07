# Escrow and partnerships internal-link experiment

Prepared September 7, 2026. Implementation date starts when the change is deployed; this document does not mark it live.

## Change

- Learning hub: direct introductory links to both winning pages, descriptive partnerships label, and an escrow tracker entry in the ecosystem guide list.
- Tools hub: an escrow schedule CTA near the introduction and a contextual partnerships link in the learning section.
- Partnerships: an escrow reference link after the direct-XRP evidence table, plus related links to escrow and the Jeonbuk reporting.
- Escrow tracker: a link to the September 2026 release analysis and a contextual route into the partnerships evidence.
- Escrow guide: direct related links to the tracker and partnerships list.
- Analytics: tool_clicked now records same-origin /tools/ links using the existing delegated click listener. Existing guide_clicked covers /learn/partnerships. Both include page_path, destination_path, and link_text.

Search titles, descriptions, canonical URLs, indexability, source-review dates, and financial claims remain unchanged. No new content URLs or third-party tracking libraries were added.

## Baseline and assessment

The prior authenticated GSC review covered August 9 to September 5, 2026: 147 site clicks, 90 on partnerships and 51 on the escrow tracker. Impressions displayed as 44K. These rounded, historical totals motivate the experiment but are not a fresh deployment baseline or complete page-query export.

Before assessing impact, export finalized daily page/query data for an equal pre-deployment period. Compare the first settled 28 days after deployment and revisit at 56 days. Separate changes in query mix, position, country, and device from changes in CTR. Do not attribute the existing growth to this release.

In GA4, compare guide_clicked to /learn/partnerships and tool_clicked to /tools/escrow-tracker by page_path and link_text. The tool event has no pre-release baseline. Events count clicks, not impressions; they cannot alone produce a link-impression CTR. Verify event receipt in the actual property after deployment before using it in reports.

Internal links support discovery and onward reading; they do not guarantee higher search-result CTR. The implementation follows [Google's internal-link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable): crawlable links, descriptive anchor text, and relevant surrounding context.

The intended downstream conversion remains newsletter_signup_completed, as documented in seo-aeo-growth-plan.md. Review signup contribution alongside onward clicks once the property data is accessible.

## Validation

Production build and scoped ESLint passed. SEO tests passed 103/103; SEO audit, news validation, and editorial-art validation passed. Ego Lite verified the five affected pages and both news destinations. Browser event probes confirmed exactly one tool_clicked and one guide_clicked with the expected paths and text, and no tool/guide event for an external link.

Full-repository ESLint remains blocked by 62 existing errors and 85 warnings outside the six changed TSX files, including generator syntax and unrelated component rules. No unrelated lint repairs are included. The local server and browser task were closed after verification.

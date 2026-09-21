# Schema Rules

## Supported schema types

| Type | When to use |
|------|-------------|
| BlogPosting (or Article) | Every blog article. Use BlogPosting for blog content, Article for standalone pages. |
| Person | A verified personal author only. Populate from client profile `author` field. Use a consistent `@id`. |
| Organization | Publisher entity. Populate from client profile `brand` fields. Use a consistent `@id`. |
| BreadcrumbList | Site navigation path. Match the visible breadcrumb on the page. |
| VideoObject | When a relevant video is actually embedded and its metadata is verified. |
| FAQPage | When the page contains visible question-and-answer pairs that genuinely serve reader needs. |

## General rules

1. **Preserve before adding.** Validate existing schema in the live
   baseline before introducing new types. Fix errors in existing
   schema first.

2. **Consistent entity IDs.** Use `@id` references to connect related
   entities (e.g., author Person referenced from BlogPosting). Use
   the same `@id` for the same entity across the schema graph.

3. **Visible-content agreement.** Every schema property must correspond
   to content visible on the rendered page. Do not add schema-only
   vendor links, descriptions, or dates that contradict the article.

4. **No speculative rich results.** Schema validity does not guarantee
   rich-result eligibility. Do not add Review, AggregateRating,
   Product, or other unrelated types to chase rich results.

5. **FAQPage eligibility.** Use FAQPage markup only when:
   - The page contains visible Q&A pairs.
   - The questions address real reader needs, not keyword-stuffed
     variations.
   - Google's current FAQ rich-result guidelines are met.
   - Note: Google restricts FAQ rich results to well-known authoritative government and health sites; verify current eligibility. Do not promise FAQ rich results.

6. **VideoObject requirements.** When including VideoObject:
   - `name`: Actual video title.
   - `description`: Accurate description.
   - `thumbnailUrl`: Real, reachable thumbnail URL.
   - `uploadDate`: Verified original upload date.
   - `embedUrl`: Working embed URL matching the page's iframe/embed.
   - `duration`: ISO 8601 format, only when verified.
   - Do not invent view counts, engagement metrics, or dates.
   - Reference: [Google Video structured data](https://developers.google.com/search/docs/appearance/structured-data/video).

7. **Author and publisher.** Populate only verified values from the client profile.
   An unknown personal author may remain null during planning. Use an Organization
   author only when that is the real byline; never invent a person, credentials,
   social profile, or logo. Add Person to the manifest only for a verified person.
   Missing facts required by the target CMS remain a recorded integration blocker.
   - `author.name` from `profile.author.name`.
   - `author.url` from `profile.author.url`.
   - `publisher.name` from `profile.brand.name`.
   - `publisher.logo.url` from `profile.brand.logoUrl`.
   - Verify all URLs are reachable.

8. **Avoid duplicates.** Do not output multiple schema blocks with the
   same `@type` and `@id`. Merge properties into a single entity.

9. **JSON-LD only.** Use `application/ld+json` script blocks. Do not
   use Microdata or RDFa unless the client's CMS requires it (specify
   in the client profile's `cms.schemaFormat`).

10. **Validation.** Validate JSON syntax, schema.org semantics, and
    alignment with visible content. Document nonblocking warnings
    separately from blocking errors.

## References

- [Google Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Google Video structured data](https://developers.google.com/search/docs/appearance/structured-data/video)
- [Google FAQ structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Schema.org BlogPosting](https://schema.org/BlogPosting)

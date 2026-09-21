# Onboard a business and CMS

Use the client's existing reliable context first. The profile is a working record,
not a form the user must complete and not a strict machine-validated schema.
The article manifest has a separate strict contract. Do not pass the profile into
the validator as a manifest.

## Establish the business context

- Confirm brand/canonical domain, reader task, knowledge level, geographic service
  area, language/locale, currency, units and date conventions. Preserve native terms;
  do not convert everything into US marketing language.
- Read the actual voice guide and representative approved writing. Choose article
  type from intent: troubleshooting, care, sizing, local education, procurement,
  comparison, tutorial, or another useful structure. A product roundup is optional.
- Set the reader's next step and business conversion goal, such as booking an
  assessment, selecting a compatible part, requesting a quote, or reading a guide.
  Link only where useful and verified. Never insert AC/Nativz links by default.
- Establish domain expertise and any required technical/professional reviewer.
  Record model/version, region and effective dates for product or regulated claims.
  Do not fabricate credentials, local experience, test results, certifications,
  customer stories, delivery promises, warranties, or an affiliation.
- Confirm commercial relationships explicitly. An empty template affiliation list
  is not evidence that none exist; resolve relevant uncertainty before publication.

## Complete only verified profile values

The generic template uses reserved `.example` domains and null/empty unknowns.
They must not reach published output. `author` may be null while planning. If the
real byline is an organization, model that honestly in final schema; do not invent
an individual to satisfy a template. Author URLs/social links and a publisher logo
are included only when verified. Schema and CMS requirements determine blockers.

`repoPath` and `stagingUrl` may be null for a hosted CMS. Set `workspace` to an
available private artifact directory. Supplemental fields such as `conversionGoal`,
`units`, `currency`, `geography`, and `domainReview` guide the writer, not the
validator; do not add them to the strict article manifest.

## Map the publishing surface

Inspect an existing rendered article and the CMS's actual editing fields. Record
body format, title/description, canonical path, byline/dates, excerpt, hero/social
image, categories, schema owner, preview mechanism, and client review requirements.
Reuse existing URL/permalink conventions and CMS schema; do not emit a duplicate graph.

| Surface | Adaptation |
| --- | --- |
| WordPress | Respect blocks/editor markup, SEO plugin metadata/schema and preview permissions; export full rendered page for validation. |
| Shopify | Respect article/blog handles, theme article layout and product links; do not alter product inventory/prices to support an article. |
| MDX/static/headless | Map actual frontmatter/fields and components, build via the repository's existing scripts, inspect output HTML. |
| No CMS access | Produce a reviewable draft and field mapping. Mark insertion, rendering and release checks blocked. |

Inspect the real article body selector. The validator accepts a single tag,
`.class`, or `#id`, not compound CSS, and needs exactly one match. For Microdata/RDFa,
record a separate schema check; the bundled validator understands JSON-LD only.

## Derive article requirements

Use the approved brief and [manifest mapping](profile-to-manifest.md). Keep `brands`
empty when there is no brand comparison. Physical product specifications, genuine
photography, compatibility and limitations usually matter more than screenshots;
where a brand comparison is selected, the existing brand contract still requires
an authentic logo and real UI or clearly labeled official website capture.
Do not silently drop those fields or pretend a product photo is an interface.

Prefer primary sources suited to the topic: official specifications/manuals,
client-approved project records, local public bodies, research and professional
standards as appropriate. Marketing assertions remain attributed assertions.
Store source dates, provenance and unresolved claims in the client run folder.

Optional service gaps do not block ordinary planning/drafting. Use supplied evidence
and offline checks, with specific unresolved facts clearly recorded. Missing preview
or approved browser access blocks rendered acceptance; a missing professional review
blocks claims that require it. Keep requested audit/QA work read-only.

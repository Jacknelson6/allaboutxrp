# Example Client Briefs

Three worked examples demonstrating the ac-blog workflow for different
hypothetical clients. No real confidential information is included.
Names, domains, and details are illustrative.

---

## Example 1: SaaS comparison article (plan + write)

### Client profile summary

| Field | Value |
|-------|-------|
| clientId | `brightpath` |
| brand.name | BrightPath Digital |
| domain | `https://brightpath.example` |
| audience | Marketing managers at mid-market B2B companies evaluating project management tools |
| voice | Professional, direct, data-informed. Avoid jargon. Use second person. |
| author.name | Sarah Chen |
| author.url | `https://brightpath.example/team/sarah-chen/` |
| locale | en-US |
| cms.platform | Next.js (MDX) |
| cms.articleSelector | `.post-content` |
| repoPath | `/projects/brightpath-site` |
| stagingUrl | `https://staging.brightpath.example` |
| publishingApproval | Requires Sarah's review before merge to main |
| commercialAffiliations | `[]` (no assumed affiliate relationship) |
| internalLinks | `/services/martech-consulting/`, `/blog/what-is-project-management-software/`, `/contact/` |
| bannedTerms | `["game-changer", "revolutionary", "best-in-class"]` |

The prompts below are agent instructions, not a shell CLI or a guaranteed slash-command
argument parser. Names and staff roles are hypothetical; verify them for a real run.

### Plan invocation

```
/ac-blog plan "best project management tools for marketing teams" \
  using profile profiles/brightpath.json
```

**Stage 1 (Baseline):** New article. No prior version exists.
Export current GSC data for the domain's `/blog/` directory.

**Stage 2 (Brief):**
- Primary query cluster: "best project management tools for marketing
  teams", "marketing project management software", "pm tools for
  marketers"
- Unique contribution: Evaluation through a marketing workflow lens
  (campaign planning, asset management, stakeholder approvals), not
  generic PM features.
- Cannibalization check: Existing `/blog/what-is-project-management-software/`
  is definitional, not evaluative. Link to it; do not duplicate.

**Stage 3 (Evidence):**
- Source ledger with 8 tools, each entry listing: official pricing page
  URL, retrieval date, supported claims, confidence level.
- No affiliate relationship is assumed; only verified commercial relationships enter the ledger.

**Stage 4 (Outline):**
- Comparison matrix: Monday.com, Asana, ClickUp, Wrike, Notion,
  Teamwork, Basecamp, Airtable.
- Fields: name, marketing-specific strength, collaboration model,
  pricing basis (with check date), key limitation for marketing teams.
- If a commission disclosure is necessary, use one brief, accurate note later
  in the article. Do not lead with it or repeat it in every profile.

### Write invocation

```
/ac-blog write "best project management tools for marketing teams" \
  using profile profiles/brightpath.json
```

Produces: MDX file at
`/projects/brightpath-site/ac-blog/brightpath/best-pm-tools-marketing/draft.mdx`

With media manifest, schema JSON-LD, and validator manifest at:
`/projects/brightpath-site/ac-blog/brightpath/best-pm-tools-marketing/`

---

## Example 2: Local service guide repair (repair)

### Client profile summary

| Field | Value |
|-------|-------|
| clientId | `greenleaf` |
| brand.name | Greenleaf Landscaping |
| domain | `https://greenleaf.example` |
| audience | Homeowners in Austin, TX considering professional landscaping services |
| voice | Friendly, knowledgeable, local. Reference Austin climate and plants by name. |
| author.name | Marcus Rivera |
| author.url | `https://greenleaf.example/about/` |
| locale | en-US |
| cms.platform | WordPress |
| cms.articleSelector | `#post-content` |
| repoPath | `/sites/greenleaf-wp` |
| stagingUrl | `https://staging.greenleaf.example` |
| publishingApproval | Marcus approves via WordPress preview link |
| commercialAffiliations | `[]` (no affiliate or vendor relationships) |
| internalLinks | `/services/lawn-care/`, `/services/landscape-design/`, `/portfolio/`, `/blog/best-time-to-plant-in-austin/`, `/contact/` |
| bannedTerms | `[]` |
| assetPolicy.brandLogos | Not applicable (no brand comparisons) |
| assetPolicy.articleMedia | Original photos of Greenleaf projects; stock only with explicit approval |

### Repair invocation

```
/ac-blog repair wp-content/posts/spring-lawn-care-austin.html \
  using profile profiles/greenleaf.json
```

**Stage 1 (Baseline):** Existing article has:
- Zero images (previously had 3 project photos).
- Missing internal links to `/services/lawn-care/` and `/portfolio/`.
- BlogPosting schema present but `author` field is missing.
- No video.

**Stage 3 (Evidence):** Verify Austin-specific planting dates and
grass variety recommendations against Texas A&M AgriLife Extension
sources. Flag any unverifiable claims.

**Stage 5 (Draft repair):**
- Restore internal links to lawn care services and portfolio.
- Add `/blog/best-time-to-plant-in-austin/` as a contextual link
  in the seasonal timing section.
- Fix author schema to reference Marcus Rivera.

**Stage 6 (Media):**
- Restore 3 original Greenleaf project photos from git history.
- Alt text: descriptive of the actual landscape shown (e.g.,
  "Bermuda grass lawn with native Texas sage border, Greenleaf
  project in South Austin").
- No stock photos without Marcus's approval.

**Stage 7 (Technical SEO):**
- Run validator:
  ```
  python3 scripts/validate_article.py \
    --html output/spring-lawn-care-austin.html \
    --manifest output/spring-lawn-care-austin-manifest.json \
    --baseline baseline/spring-lawn-care-austin.html
  ```
- A pre-fix validation can flag missing assets only if the baseline actually
  contains them; retrieve the earlier HTML/history as well as the current live
  page. After repair, confirm restored assets/links and no new regressions.

**Stage 9 (Staging):**
- Screenshots at 390, 768, 1440px.
- Verify project photos render correctly and are not stretched.
- Marcus reviews via WordPress preview link before publish.

### Artifact directory

```
/sites/greenleaf-wp/ac-blog/greenleaf/spring-lawn-care-austin/
  draft.html
  manifest.json
  media-manifest.csv
  schema.json
  screenshots/
    390.png
    768.png
    1440.png
  evidence-ledger.md
```

---

## Key differences between examples

| Dimension | BrightPath (Example 1) | Greenleaf (Example 2) |
|-----------|----------------------|---------------------|
| Industry | B2B SaaS / MarTech | Local services / Landscaping |
| Article type | New comparison article | Repair of existing guide |
| CMS | Next.js (MDX) | WordPress (HTML) |
| Brand comparisons | 8 tools with logos and screenshots | None |
| Affiliations | None assumed | None |
| Media source | Official brand assets + screenshots | Original project photos |
| Video | None | None |
| Locale | en-US | en-US (with Austin-local content) |

All examples follow the same ten-stage process and produce the same
artifact structure, adapted to their client profile.

## Example 3: Manufacturer with an ecommerce store (plan + write)

Hypothetical **Harbour Tanks**, `https://harbour-tanks.example`, sells rainwater
tanks in Australia through Shopify. This is fictional; no product, certification,
price, stock availability, or technical advice below is asserted as fact.

- Reader: homeowners selecting storage capacity, unfamiliar with plumbing terms.
- Voice: plain Australian English, practical and specific. Use litres, millimetres,
  square metres and AUD. Avoid US gallons or assumptions about US building rules.
- Goal: help readers identify candidate capacities and request a site assessment;
  link to verified tank categories and an installation-enquiry page only if they exist.
- Evidence: supplied model specification sheets, manufacturer installation manuals,
  relevant local rainfall records, and applicable local guidance. Have the client's
  qualified technical reviewer check sizing assumptions and installation statements.
- Author: initially null; confirm the real byline before preparing final schema.
- Affiliations: no default affiliate links; verify any material supply relationships.
- CMS: Shopify article HTML using the existing theme and its JSON-LD owner.
  Inspect the actual rendered selector rather than guessing it from the platform.

Example agent prompt:

> Use ac-blog to write a rainwater tank sizing guide for Harbour Tanks using the
> supplied technical documents and profile. Explain the sizing inputs and their
> limits; use verified product photos. Save a draft for technical review.

The outline explains roof catchment, rainfall, intended demand and storage constraints
using sourced assumptions and transparent calculations. It does not promise savings,
potable-water safety or a universal tank size. Media shows real supplied tanks and a
clearly labeled explanatory diagram, not invented installed customer projects.

This is a sizing guide, not a software or brand roundup: manifest `brands` is `[]`.
Require only selected verified internal links and appropriate schema types. Omit
`video` when there is none. Run the HTML validator on the Shopify preview's complete
rendered HTML; inspect mobile tables, units, images and actual CTA destinations.
A missing preview or technical review leaves those checks pending, while source
review and draft development can continue offline. Publication needs the actual
client authorization and required technical review.

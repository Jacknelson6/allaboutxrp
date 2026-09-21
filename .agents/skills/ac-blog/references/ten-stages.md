# Ten-Stage Process and Exit Gates

The stages form the full lifecycle. Apply only those in the requested mode, as defined in SKILL.md. Record not-applicable and blocked stages honestly. Audit and plan modes never require publication. A new article has no historical baseline.

## 1. Baseline and preservation

**Artifact:** Live HTML/media/link/schema inventory, historical diff
where available, GSC page/query/device/country exports for completed
periods (when accessible).

**Gate:** Existing valuable content and media accounted for. Live
revision and local revision identified. Apply the entrypoint's established-brand-proof
preservation rule: record historical recognition and press coverage, canonical
asset receipts, proposed placement, and any owner-authorized removal/downgrade.
A failed source lookup does not authorize deleting proof. No ranking-causality claims
from timestamps alone.

## 2. Search and reader brief

**Artifact:** Current intent and SERP review, primary query cluster,
target audience, and the article's unique educational contribution.

**Gate:** Outline answers the reader's decision and avoids
cannibalizing related pages on the same client domain. Brief references
the client profile's audience, voice, geography, locale, units, conversion goal,
domain review needs, and commercial affiliations. Unknown values are not defaults.

## 3. Evidence

**Artifact:** Per-claim source ledger. Each entry: claim text, source
URL, retrieval date, confidence level (verified/documentation-only/
vendor-stated/unconfirmed).

**Gate:** Every material feature, price, or coverage claim has current
support. Testing claims match actual work performed. No fabricated
hands-on testing or invented metrics.

## 4. Outline and comparison

**Artifact:** Article blueprint plus complete comparison matrix (if the
article type warrants comparison).

**Gate:** Every row in the matrix supplies distinct decision value. No
template filler. All retained brands have official destination URLs.
Brand logos sourced per the client profile's `assetPolicy`.
For business comparisons, identify any priority profiles and their reader/evidence
rationale in the brief; use [business profiles and links](business-profiles-and-links.md).
Extra depth must not imply an unsupported ranking or leave other options uninformative.

## 5. Draft and links

**Artifact:** Substantive article body with contextual internal links
drawn from the client profile's `internalLinks[]`.

**Gate:** Every substantive section explains use and limitations. All
retained brands are visibly linked. Relevant educational internal links
distributed through the body. No em dashes. No repetitive keyword stuffing.
Avoid disclosures unless absolutely necessary; if necessary, use a brief note
later in the blog. Lead with useful content and avoid repeated caveats or research
logs. Keep source links and decision-relevant factual limitations with their claims.
For priority profiles, explain actual fit/scope and supported proof, preserve
recognition, and provide a useful next step. Select contextual service/product,
case-study, review, press and educational links by purpose, not a quota; verify
that each destination supports its label and claim. See
[business profiles and links](business-profiles-and-links.md) and the entrypoint's
editorial rules.

## 6. Media

**Artifact:** Asset manifest with columns: filename, original URL or
source, capture/retrieval date, rights basis, local path, alt text,
caption, placement anchor, dimensions.

**Gate:** For brand comparisons, authentic logos and real UI or labeled official
website captures for retained brands (per `assetPolicy` and manifest). Physical
products need useful verified product imagery; other article types do not inherit
a software screenshot requirement. Article-specific original media
for tutorials, guides, and case studies. Evidence-backed video selection when a best-performing owned video is requested; otherwise choose relevant licensed video when useful. No broken,
misleading, or AI-generated brand logos.

## 7. Technical SEO

**Artifact:** Built HTML, metadata block, schema JSON-LD graph, image
manifest, and validator output from
`python3 scripts/validate_article.py --html FILE --manifest FILE`.

**Gate:**
- Single H1 containing primary topic.
- Stable canonical URL and slug.
- Accurate `author`, `datePublished`, `dateModified`.
- Image manifest: all images have appropriate alt and dimensions; optimized format may include SVG logos.
- Schema graph passes JSON syntax, semantic validation, and
  visible-content agreement.
- Staging and preview noindex preserved, including after approval; production index rules follow the client policy.
- Validator exits 0 with no ERROR-level findings.

## 8. Independent review

**Artifact:** Separate editorial and technical review with
severity-tagged findings (high/medium/low/info).

**Gate:** No unresolved high-severity defects. No unsupported claims,
filler, missing vendor links or media, or encoded em dashes.
Reviewer has not worked on the draft. QB verifies evidence
independently.

## 9. Staging and release

**Artifact:** Reviewable preview URL, desktop (1440px), tablet (768px),
and mobile (390px) screenshots, link and embed verification.

**Gate:**
- EGOLITE visual pass at 390, 768, 1440 widths.
- Zero page overflow.
- Readable tables and screenshots.
- Working keyboard navigation, links, and video embeds.
- Passing repo-required build and CI checks.
- Production publish ONLY after explicit user authorization.
- That authorization persists for the remainder of this run.
  Do not re-prompt at every sub-step.
- Respect the client profile's `publishingApproval` rules (e.g.,
  required approvers, staging-only restriction, auto-merge policy).

## 10. Monitor and expand

**Artifact:** Release record and completed-period GSC comparisons
(28-day and 56-day windows when available).

**Gate:**
- Live readback confirms content, schema, media, and canonical URL
  match the approved version.
- Inspect early indexing issues.
- Compare post-change performance to pre-change baseline.
- Distinguish correlation from causation. Never claim the edit
  caused a ranking improvement without controlled evidence.
- Document any anomalies for the client's next review cycle.

## Rules applied across all stages

- No ranking guarantees at any stage.
- No fabricated testing results or screenshots.
- No keyword-density quotas or fixed word-count requirements.
- No silent auto-deploy; publication requires authorization.
- All artifacts stored under `<workspace>/ac-blog/<clientId>/<article-slug>/`.
- Cross-client isolation: never reuse confidential client data without authorization.

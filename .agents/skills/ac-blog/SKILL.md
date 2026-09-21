---
name: ac-blog
description: Plan, write, repair, audit, and verify source-backed blog articles for businesses and organizations using client-specific voice, links, media, schema, and publishing rules. Use for substantive editorial work and article quality recovery across CMS platforms.
metadata:
  author: Anderson Collaborative
  version: "1.4.1"
---

# AC Blog: multi-client editorial workflow

Build educational articles with evidence, useful media, accurate structured data,
and verified rendered output. This is an independent, selective adaptation of
[claude-blog](https://github.com/AgriciDaniel/claude-blog), not its installer or
entire tool suite. See [upstream provenance](references/upstream.md).

## Start with the client and requested scope

Invoke `$ac-blog` or `/ac-blog` with `plan`, `write`, `repair`, `audit`, or `qa`.
Identify the client and article before using prior artifacts. Load an existing
profile or derive one from authorized project context using
[the profile template](assets/client-profile.example.json). Do not force the
user to fill out JSON when reliable context already provides the values.
Unknown facts stay unknown. Ask only for missing information that blocks work.

A profile supplies clientId, brand, canonical domain, audience, voice, author,
source and asset policies, relevant internal links, commercial affiliations,
locale, CMS/output format, workspace, staging location, and publication rules.
Repository and staging URLs can be null for CMS-only or planning work.
Example data is fictional and must never be published as a real client fact.
For a new business or CMS, read [client onboarding](references/client-onboarding.md);
[README.md](README.md) provides installation, quick start, and verified commands.
Adapt reader expertise, voice, geography, language, units, currency, conversion goal,
and domain review needs to that client. Do not assume an agency, SaaS, US audience,
affiliate relationship, or personal author. Never insert AC, Nativz, RankPrompt,
or their links/products because they maintain this package. Site-specific ranking
and self-inclusion rules belong in that site's profile and editorial policy.

Keep run artifacts under `<workspace>/ac-blog/<clientId>/<article-slug>/`.
Use repoPath as workspace only when appropriate. Keep credentials out of profiles.
Never reuse another client's confidential facts, assets, credentials, analytics,
or approval. Public competitor references and approved co-marketing are allowed
when explicitly relevant and sourced. Internal links must belong to this client
or an explicitly approved domain. Confirm analytics property and video ownership.

## Modes and stopping points

- `plan`: baseline where available, research, sources, outline, media/link plan.
- `write`: plan plus draft, sourced media, SEO and checks possible in the environment.
- `repair`: preserve the current article and its assets, then apply targeted recovery.
- `audit`: read-only findings and prioritized repair plan. Never rewrite or publish.
- `qa`: validate supplied content and rendered output; report defects, do not silently fix.

Use [the ten stages](references/ten-stages.md) only as far as the requested mode.
Mark a stage not applicable or blocked with evidence; do not expand scope just to
complete a checklist. Plan-only work does not require a deployment. New articles
have no historical baseline. Offline checks do not count as rendered visual QA.

## Specialist skills and issue resolution

Use [specialist routing](references/specialist-routing.md) for every audit or
repair and when planning or verifying substantive articles. Load the applicable
installed SEO page/content audit skills; use RankPrompt for AI discovery and
citation evidence when relevant. This is workflow integration, not an automatic
API run. Record which modules actually ran, their evidence, and access gaps.
Turn verified findings into prioritized fixes in repair mode, then rerun the
specific failed checks and independent review. Audit mode remains read-only.

## Workflow and durable state

1. Preserve existing content/media/links/schema and completed-period analytics.
2. Define audience, search intent, query cluster and a useful original contribution.
3. Build a claim/source ledger, separating firsthand evidence from vendor claims.
4. Outline the reader's decision or learning path; comparisons use useful fields.
5. Write specific explanations, limitations and contextual links.
6. Source useful real media with provenance and publication rights.
7. Validate metadata, appropriate schema, image SEO and HTML.
8. Run independent editorial and technical review for substantial work.
9. Verify staging visually and functionally; publish only within existing authorization.
10. Verify an authorized release and record later measurement windows.

Maintain `run.json` in the run directory: clientId, articleUrl, mode, profilePath,
currentStage, stages[{stage,status,evidence,reason}], sourceRevision,
nextAction, blockers, and publicationAuthorization (reference to actual user approval,
not a self-generated approval). Also keep sources, media manifest, article manifest,
baseline HTML for repairs, draft, and QA findings as needed. Resume from this state.
Monitoring 28/56-day results is a future task, not a reason to hold today's work
open. Do not create recurring automation without authorization.

## Preserve established brand proof

For repairs, inventory existing awards, recognitions, press articles and
press-release coverage, testimonials, case studies, statistics, logos and rich
media before rewriting. Preserve their substance and useful prominence. Never
replace actual recognition or coverage with generic "verified profiles" or weaker
directory copy. Retain historical dates and distinguish awards, editorial coverage
and syndicated press releases without implying independent endorsement.

Check the client's canonical docs/asset library, original source/history, press
archive and supplied receipts first. Failed retrieval is not proof of absence.
Record gaps privately; do not silently remove or downgrade established proof.
Correct inaccurate dates, scope or attribution within the authorized repair while
retaining the supported recognition; these factual corrections need no new approval.
Removing or substantively downgrading supported proof or its prominence needs
specific owner authorization unless already granted. Never
invent support or knowingly publish false claims. Final review compares old/new
proof, links, assets and prominence; unexplained losses block acceptance.

## Business profiles and contextual links

For articles profiling or comparing businesses/products, use
[business profiles and links](references/business-profiles-and-links.md).
Expand priority profiles where the client brief and reader need warrant it: buyer
fit, actual scope, substantiated work/outcomes, preserved awards and press, authentic
reviews, useful media, limitations and a relevant next step. Priority comes from the
client brief, never automatic AC/Nativz placement or an invented ranking.
Choose verified official, service/product, portfolio/case-study, review, press and
educational links by their purpose. Add useful evidence and context without quotas,
link dumps or promotional padding; concise competitors must still help the reader.

## Editorial and media rules

No em dashes in drafted or rendered copy, including encoded equivalents.
No filler, keyword-density targets, fixed word counts, invented tests, fabricated
scores, or ranking guarantees. Explain technical concepts and practical limitations.
Material claims need evidence and honest dates.

Lead with the reader's answer, useful guidance, or comparison. Avoid disclosures
unless absolutely necessary. When a disclosure is necessary, keep it brief and
place it later in the blog, such as after the main comparison or profiles and
before FAQs. Do not lead with disclosures, add a boilerplate methodology preamble,
or repeat caveats in the introduction, table, profiles, and conclusion.
Keep research-process notes, retrieval failures, validator status, and internal QA
details in the evidence ledger. Preserve accurate facts, useful source links, and
specific limitations that materially affect the reader's decision. Never invent
independence, evidence, or results.

Brand comparisons require an official link, authentic logo, and genuine interface
or clearly labeled official website screenshot for each retained brand. Physical
product guides primarily need verified product photography, specifications, and
use context; ordinary guides do not need a software-comparison structure. Use official
assets, approved Brandfetch/Logo.dev, or verified existing assets. Never invent
logos or dashboards. Prefer client-owned or official assets for firsthand evidence.
For topical photography, actively source suitable licensed real images directly
from an owner-permitted licensed provider through EGOLITE where available.
A provider mentioned in this package is not permission to use it or spend money. Use media that teaches the topic, not an arbitrary quota.
Read [media and SEO](references/media-seo.md) for sourcing, rights, provenance,
fallbacks, and visual checks before selecting or downloading assets.

Relevant licensed third-party or owned video is allowed. If the request says
"our best-performing video", compare relevant owned candidates using authenticated
analytics with consistent dates and paid/organic context. Public views support
only a public-view comparison. Missing analytics must not become a fabricated winner.

## Editorial design

For rendered article work, use [the design handoff](references/editorial-design.md).
Reuse the client's existing design system and article components. Route substantial
new article-template design through premium-client-site and use Impeccable's Read
mode for typography, layout, critique and polish. Content-only edits preserve the
incumbent design. Visual quality is a separate gate from SEO and automated validation.

## Schema and verification

Use accurate Article/BlogPosting, author, publisher, and appropriate breadcrumb
markup. Add VideoObject for an actual qualifying embed with verified metadata.
Preserve CMS-generated schema; fix or extend it without duplicate conflicting entities.
See [schema rules](references/schema-rules.md). No fake ratings or unrelated markup.

Run the offline validator against rendered HTML:

```sh
python3 scripts/validate_article.py --html FILE --manifest FILE [--baseline FILE] [--output FILE]
```

Read [the validator contract](references/validator-contract.md) and
[profile-to-manifest mapping](references/profile-to-manifest.md).
Manifest requirements come from the brief before drafting, not from whatever
survived in the draft. A passing script never proves source accuracy, rights,
live links, image quality, schema eligibility, or publication readiness.

Browser work ONLY via the ego-browser CLI in a task space. Do not use
chrome-devtools MCP tools, Puppeteer, Playwright, or launch/attach to Google Chrome.
Never clear cookies, cache, storage, sessions, site data, profiles, or authentication.
Preserve the user's active state and follow current owner recovery instructions.
Verify 390/768/1440 widths, zero page overflow, readable screenshots/tables,
keyboard navigation, links, video, social previews, and staging index controls.

For substantial delegated work follow the environment's orchestration policy
(Helm AC where installed), bounded
worker scopes, and independent review. Do not pin model names in this skill.
Keep the QB responsible for accepting evidence and completing the requested scope.
Existing user authorization persists; never manufacture approval from a profile.
Respect client-specific review requirements. Audit/plan mode never authorizes sending,
publishing, deployment, spending, or account changes.


## Jev semantic screening (optional)

When optional Jev screening is available and appropriate, run it during `plan`
or `write` to screen scoped claims against supplied source evidence and score
shortlisted internal link candidates. Read the
[Jev screening reference](references/jev-screening.md) for input construction,
outcomes and exit codes, model pinning, limits, cache, and privacy.

```sh
# Dry run (default): validation, quote checks, request plan. No network.
node scripts/jev_screen.ts input.json

# Live run (TypeSafe System One API, key from the environment only):
TYPESAFE_API_KEY=... node scripts/jev_screen.ts --live input.json
```

The screen is advisory and the model never authorizes release: every report
carries `releaseAuthorized: false`, and exit 0 only means a live screen raised
no flags. It never modifies articles or fetches sources. Only high-confidence
`supports` is marked supported; missing source, any other verdict, low
confidence, a dry run, skipped units, and service errors all route to manual
review. Review shortlisted links before applying them. No rankings are
guaranteed.

Jev is text only, so every deterministic and browser gate above still applies.
For any video embed this includes a mandatory deployed playback check: read the
deployed response's CSP `frame-src` against the embed origin and click play on
the deployed URL. A working local player does not verify the deployed host.

## Deliver

Return the artifact or preview, what changed, checks actually run, unresolved
issues, and next action. Separate source, rendered, live, and analytics evidence.
See [client examples](references/example-briefs.md) for SaaS, local-service, and
commerce/manufacturing reuse patterns.

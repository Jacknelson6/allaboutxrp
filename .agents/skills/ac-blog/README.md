# ac-blog 1.4.1

A reusable editorial skill for planning, writing, repairing, auditing, and checking
source-backed business blogs. Maintained by Anderson Collaborative; the name does
not limit it to AC content. It works with local services, ecommerce, manufacturers,
professional services, and software businesses when supplied with their own context.

## Quick start

1. Read [SKILL.md](SKILL.md), then point your agent at the client's site/project,
   article topic or URL, and existing brand/editorial guidance.
2. Reuse a verified client profile, or derive one using
   [client onboarding](references/client-onboarding.md) and the
   [profile template](assets/client-profile.example.json). Unknown facts stay unknown.
3. Ask the agent, for example:

   > Use ac-blog to plan a rainwater tank sizing guide for our Australian store.
   > Use our supplied specifications, brand guide, and Shopify article template.
   > Save the draft and evidence for review.

   In Claude Code, `/ac-blog plan ...` can invoke an installed skill; in Codex use
   `$ac-blog` when discoverable. Other agents can read `SKILL.md` directly. These
   are agent prompts, not a standalone `ac-blog` shell command.
4. Review the draft, evidence, media, and unresolved questions. For rendered work,
   export/build the complete page HTML, create the manifest from the brief, run the
   validator, and complete visual/function checks on an authorized preview.

## Install or vendor

The maintained package is in the private [AC Blog repository](https://github.com/Anderson-Collaborative/ac-blog). Authorized team members can clone it, then use the directory as described below. Keep client runs and credentials outside that repository.

Copy this entire `ac-blog` directory, including references, assets, scripts, tests,
and `LICENSE.upstream`, into your agent's supported skill directory. Common targets
are `.claude/skills/ac-blog/` in a repository, `~/.claude/skills/ac-blog/` for Claude
Code, or `~/.codex/skills/ac-blog/` for Codex. Check your agent's discovery settings.
Do not overwrite another version without comparing local customizations first.
No installer, CMS plugin, agent configuration change, or paid subscription is needed.

For another business, copy the generic profile into that business's workspace and
replace illustrative values with verified context. Do not copy AC's editorial
profile, self-ranking instructions, brand assets, or internal links. A CMS adapter
is a documented mapping to that site's actual fields and rendering, not a bundled
integration: WordPress, Shopify, headless CMS, HTML, and MDX each retain their own
publishing flow and schema owner.

## Modes

| Mode | Deliverable and boundary |
| --- | --- |
| `plan` | Reader brief, source ledger, outline, media and link plan |
| `write` | Draft plus evidence, media, metadata and feasible checks |
| `repair` | Targeted revision preserving established content, proof and assets |
| `audit` | Read-only findings and prioritized recommendations |
| `qa` | Checks and defects for supplied content; no silent fixes |

Installing or invoking the skill grants no permission to publish, send messages,
deploy, spend, change accounts, or transfer confidential client data. Existing user
authorization applies only to its actual scope. A profile describes review rules;
it cannot authorize release.

## Richer business profiles

When the brief calls for priority businesses to receive fuller coverage, use
[business profiles and contextual links](references/business-profiles-and-links.md).
Build depth from buyer fit, real offerings, substantiated projects/outcomes,
recognition, reviews and useful media. Link the specific evidence and next step
where they help the reader. The priority businesses belong to that client's brief;
there is no automatic AC/Nativz placement, ranking, link count or required length.

## Profiles, manifests, and artifacts

The profile describes the business across articles. The article manifest encodes
specific requirements decided from the brief before drafting. Derivation is manual,
not a provided converter: see [profile-to-manifest mapping](references/profile-to-manifest.md)
and the [validator contract](references/validator-contract.md). Do not weaken the
manifest to make an incomplete draft pass.

Typical private run directory:

```text
<workspace>/ac-blog/<clientId>/<article-slug>/
  run.json                 # stage/evidence/blockers and actual authorization reference
  client-profile.json      # or a reference to the existing client-owned profile
  brief.md
  sources.md
  draft.html               # or draft.md / draft.mdx / CMS export
  article-manifest.json
  media-manifest.json
  baseline.html            # repairs, when available
  findings.json
  screenshots/             # actual rendered evidence, when available
```

Create only artifacts relevant to the mode. Keep private analytics, receipts and
client facts out of public repositories. Site-specific integration may put approved
public ledgers/manifests elsewhere, such as ac-website's `docs/editorial/`.

## Run the bundled checks

Run these commands from this skill directory. Python 3 uses only its standard
library. Jev scripts/tests require Node.js 24 or newer and no npm dependencies.
The scripts do not require the parent website's npm install.

```sh
python3 -m unittest discover -s tests
node --test scripts/jev_screen.test.ts
python3 scripts/validate_article.py --html tests/fixtures/cedar-valid.html --manifest tests/fixtures/cedar-manifest.json
node scripts/jev_screen.ts assets/jev-screening.example.json
```

The fixture validation is a smoke check, not validation of your article. The Jev
example is an offline dry run and intentionally exits **1** (`dry_run_incomplete`);
it has not performed semantic screening. Tests inject responses and never call the API.

Validate your complete rendered page using actual file paths:

```sh
python3 scripts/validate_article.py --html /path/to/rendered.html --manifest /path/to/article-manifest.json --output /path/to/validation.json
# For repairs add: --baseline /path/to/before.html
```

Validator exits: **0** checked rules pass, **1** content defects, **2** invalid input.
It supports one tag, `.class`, or `#id` selector, with exactly one matching container.
It reads JSON-LD, not CMS Microdata/RDFa. It checks no live URLs and does not prove
factual accuracy, rights, visual quality, accessibility, or ranking outcomes.

Maintainers with the Codex skill-creator installed can additionally validate skill
packaging (this helper is external, not bundled):

```sh
python3 ~/.codex/skills/.system/skill-creator/scripts/quick_validate.py .
```

That packaging helper requires PyYAML in its Python environment. It is not needed
to run the article validator. On the AC workspace, also run the required catalog
guard after installation/update: `node ~/.claude/scripts/skill-catalog-guard/check.ts`.

## Optional tools and incomplete environments

Jev is advisory; live screening needs authorized TypeSafe access and an environment
API key. Never paste credentials into prompts or committed files. See
[Jev screening](references/jev-screening.md) for bounded live operation and privacy.
RankPrompt measures AI discovery only when authorized/access is available; it is
not a prerequisite for an ordinary article. SEO/design skills, analytics access,
Brandfetch/Logo.dev, and licensed media subscriptions are optional integrations.
Use client-owned or otherwise approved assets and manual evidence review where needed.

Without these services, research from supplied sources, briefs, drafting, repair,
and offline checks can continue. Mark absent measurements unmeasured. Without the
approved EGOLITE browser or a preview, responsive visual QA, interactions, actual
video playback, and rendered/social preview checks remain blocked. Without network
access, current facts and live links remain unverified. Do not call an offline pass
publication-ready; report the exact outstanding checks.

See [three hypothetical examples](references/example-briefs.md) and
[upstream provenance/license](references/upstream.md). The reusable package contains
no default recommendation to rank or promote its maintainer or associated products.

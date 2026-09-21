# Specialist routing and issue-resolution loop

Resolve skills through the current catalog first, then local skill discovery.
Known installed entrypoints on this workspace:
- RankPrompt: ~/.codex/skills/rankprompt/SKILL.md
- SEO router: ~/.claude/skills/seo/SKILL.md
- SEO audit: ~/.claude/skills/seo-audit/SKILL.md
- Focused modules: ~/.claude/skills/seo-page/SKILL.md,
  seo-content/SKILL.md, seo-technical/SKILL.md, seo-schema/SKILL.md,
  seo-images/SKILL.md (all under ~/.claude/skills/).

Paths are discovery hints, not portable dependencies. On another machine locate
the same named skills. If unavailable, report the gap and use the built-in checks
for their documented scope. Never claim the missing module ran or silently install it.
Load relevant modules progressively, not the whole library for every article.

## Routing

| Situation | Skills and use | Required result |
| --- | --- | --- |
| Plan or write substantive article | seo-page and seo-content | Intent, coverage, evidence, author trust, relevant link and media requirements |
| Audit or repair existing article | seo-audit with seo-page and seo-content | Reproducible defects, preserved strengths, prioritized findings |
| Indexing, rendering, canonical or performance symptoms | seo-technical | Page-specific evidence; distinguish observed HTML from live rendering and measured field data |
| Structured-data work | seo-schema | Appropriate markup, schema/content agreement, current eligibility, existing CMS graph preserved |
| Images missing, misleading or slow | seo-images | Authentic assets, alt, captions, dimensions, delivery and crawlability checks |
| AI discovery or citation relevance | rankprompt | Actual prompt/report/citation evidence or explicitly unmeasured hypothesis |
| Combined website/AI assessment explicitly requested | RankPrompt focused audit process | Evidence gates and independent challenge in that skill's scoped process |

No single-page request silently expands into a sitewide audit, prospect pitch,
report publication, or recurring monitoring. External skill defaults do not
supersede the user's scope, EGOLITE-only rule, no-em-dash rule, or current official
technical guidance. Reject keyword-density quotas, arbitrary scores, missing
llms.txt penalties, and claims of rich-result or ranking guarantees.

## RankPrompt integration

Read the RankPrompt entrypoint and its non-brand methodology before an AI audit.
Recover existing client-specific brand/report/job IDs and recent evidence first.
Confirm the client's domain, account, target buyers and verified geography.
Keep commercial discovery prompts separate from educational article-citation
prompts. Review and freeze the non-brand prompt sample before execution.

Reuse authorized reports when fit for purpose. Inspect actual responses and
citation destinations, not only dashboard summaries. Save native IDs, execution
dates, platform/sample scope, raw evidence and valid/failed/missing counts in the
private client run folder. Never reuse another client's results or credentials.

New execution follows RankPrompt preflight, quota/cost, authorization and
idempotency rules. Existing authorization persists within its actual scope.
A writing request is not permission for paid scans, aliases, share links, outreach,
or recurring monitoring. Without access, continue independent editorial/technical
work and label AI visibility unmeasured. Do not invent an audit result.

Use citations to investigate answer gaps, source selection and competing coverage.
Validate the proposed explanation against the article and primary evidence.
A brand mention is not necessarily a citation to this article; absence from a
small sample does not prove the article is unindexed or broadly invisible.

## Findings to fixes to verification

Keep findings.json in the client/article run folder. Each finding records:
- id, module, affected URL/element, observed condition, capturedAt, evidence paths;
- severity and priority rationale, confidence, alternative explanations;
- proposed fix, owner, prerequisites, scope authorization and acceptance check;
- status: open, needs-evidence, fixed-unverified, verified, or deferred with reason;
- verification evidence and remaining uncertainty.

Prioritize confirmed crawl/index blockers, then factual/content/media/link defects,
then opportunities. No synthetic promise of ranking gains. Protect existing useful
content and media. In audit mode deliver this queue without making live edits.
In repair mode implement authorized fixes, mark fixed-unverified, rerun the
specific failing checks, and have an independent reviewer challenge material
findings. Only verified evidence closes a finding. Reopen dependent findings when
the page or evidence changes. Keep unknown and deferred counts visible.

A scoped repair can be complete when its acceptance checks pass while optional
AI measurement remains unavailable, but report that limitation. A requested
combined AI audit cannot be called complete without the requested AI evidence.
Use comparable frozen prompts and observation windows for an authorized later
retest. Improved answers or rankings alone do not prove the edit caused them.

## Design integration

For design-system alignment and article templates, route to premium-client-site.
For reading hierarchy, typography, layout and visual critique, route to Impeccable
Read mode. Use [editorial-design.md](editorial-design.md) for scoped requirements
and the handoff between editorial and design workers.

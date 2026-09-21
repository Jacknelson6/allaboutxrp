# Editorial design handoff

## Choose the appropriate design scope

Read the client's existing DESIGN.md, BRAND.md, voice guidance, shared components,
CSS tokens and actual article layout. A missing design document does not make an
existing site a blank slate. Reuse its fonts, colors, spacing and interaction patterns.
Record the article surface's mode as Read: the reader should understand and learn.

- Content-only edit: preserve the layout; verify the new media, tables and embeds.
- Article layout refinement: use Impeccable's Read guidance with typeset, layout,
  critique, adapt or polish as relevant. Follow its bounded review process.
- New shared article template or authorized redesign: use premium-client-site for
  the scoped brand/design-system brief, component architecture and applicable QA.
  Follow its complete requirements within that approved design scope.
- Full site build: let premium-client-site own the site; ac-blog owns article
  evidence, copy, media, schema requirements and editorial acceptance.

Find named skills in the current catalog. Current local paths are
~/.codex/skills/premium-client-site/SKILL.md and
~/.agents/skills/impeccable/SKILL.md. Read the actual entrypoint before use.
If unavailable, use the client's established design system and report the gap.
Do not install a design toolkit or run a site generator merely to edit an article.

## Small design brief, before changing the layout

Save design-brief.md in the client/article run folder with:
- Client identity and source design/token/component paths.
- Reader task, article type, and the approved scope of visual change.
- One relevant editorial reference and the specific lesson to borrow.
- Reading hierarchy, content width, type scale and spacing roles.
- Hero, byline/date, contents navigation, comparison table, tool profiles,
  screenshot figures, captions, callouts, video and related-reading treatment.
- Asset manifest, responsive behavior and accessibility/performance constraints.
- Components to reuse; any new shared component and its affected routes.

Do not copy a competitor's branding. References guide useful structure and
readability. Preserve the client's identity and original factual content.

## Article design acceptance

- Clear headline, summary, byline and honest dates; one visual hierarchy.
- Comfortable reading measure, line height and contrast on mobile and desktop.
- Distinct heading levels, descriptive visible links, accessible keyboard focus.
- Purposeful section rhythm using prose, figures and tables where they teach.
  Avoid turning every paragraph into a card or introducing generic decorative grids.
- Authentic logos keep aspect ratio and legibility on their background.
- Screenshots are large enough to understand; use focused crops, annotations or
  accessible enlargement when necessary. Keep a useful caption and text explanation.
- Tables have semantic headers, readable mobile treatment and contained scrolling
  if needed. The page itself must not overflow horizontally.
- Contents navigation supports long-form reading without covering content or focus.
- Video has reserved space, an accessible title and text summary; no autoplay.
- CTA fits the reader's next step without interrupting every section.
- No decorative motion that impedes reading. Respect reduced-motion preferences.
- Image loading and layout do not cause avoidable shifts; preserve the LCP image.

## Review and handoff

The builder provides rendered screenshots at 390, 768 and 1440 widths, the relevant
HTML/schema/link/media checks, and a short change summary. An independent reviewer
reads the screenshots and evaluates hierarchy, legibility, brand fit, media usefulness,
responsive behavior and accessibility. A score or a successful build is insufficient.
Record defects with location, severity, correction and verification evidence.
Use bounded fix-and-confirm passes; unresolved material issues remain open.

For shared template/CSS edits, inspect representative existing articles with long
titles, tables, images, embeds and differing content lengths for regressions.
Keep editorial and design findings in the same client-scoped findings queue.

Use EGOLITE only and preserve authentication/state. User instructions override
upstream browser, asset-source, approval and publishing defaults. Never use banned
Artlist tooling, fabricate logos, submit forms, or trigger a deployment as a visual
check. A design reference does not authorize a sitewide redesign or production push.
Do not treat llms.txt absence or intentional training-crawler restrictions as an
SEO design failure. Keep current RankPrompt and SEO evidence rules authoritative.

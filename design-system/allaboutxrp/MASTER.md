# AllAboutXRP design system

This file is the only visual source of truth for every public page. Page-level visual overrides are not permitted. A page may choose the components it needs, but it may not introduce its own palette, type system, card style, radius, shadow language, or theme behavior.

## Direction

AllAboutXRP is an independent research publication with live data and practical tools. The interface should feel rigorous, calm, compact, and legible. It takes its structural cues from high-quality benchmark publications: clear hierarchy, thin rules, dense but readable data, visible methodology, and minimal decoration.

The Greek bank artwork is the single expressive visual moment. Everything around it is restrained.

## Foundations

### Color

| Role | Light | Dark | Token |
| --- | --- | --- | --- |
| Canvas | `#FFFFFF` | `#090B10` | `--color-surface-primary` |
| Surface | `#FFFFFF` | `#10141B` | `--color-surface-card` |
| Raised surface | `#F6F7F8` | `#171C24` | `--color-surface-elevated` |
| Rule | `#D9D9D9` | `#2B3038` | `--color-surface-border` |
| Primary text | `#090B10` | `#F4F6F8` | `--color-text-primary` |
| Secondary text | `#5C626B` | `#ABB2BD` | `--color-text-secondary` |
| Link and data accent | `#1769AA` | `#86C9FB` | `--color-xrp-accent` |

Use blue for links, selected data, focus, and meaningful state. Do not use decorative gradients, purple, neon, or crypto-casino color.

### Typography

- Editorial headings: Libre Baskerville, weight 400. Use sentence case.
- Interface and body: Public Sans, weights 400 to 700.
- Data labels and compact metadata: Azeret Mono.
- H1 and H2 letter spacing: `-0.035em` maximum.
- Body copy: 16 to 18 pixels with a 1.65 to 1.75 line height.
- Keep paragraphs around 68 characters per line.

### Geometry

- Default corner radius: 4 pixels.
- Buttons may use 2 to 4 pixels.
- Avoid shadows on content surfaces. Use a thin border or whitespace.
- Use an 80rem site container and a 68ch reading container.
- Minimum interactive target: 44 by 44 pixels.

## Components

### Navigation

The navigation is sticky, translucent in the current theme, and separated by one rule. Active and hover states use a quiet surface fill. The theme control is always available on desktop and mobile.

### Hero

The homepage hero is full width and responsive. Day and night artwork share the same composition. Dark mode uses the night artwork with three warm period street lamps and an illuminated entrance. Text stays separate from the image treatment. The hover distortion is image-only, subtle, pointer-dependent, and disabled with reduced motion.

### Data surfaces

Tables and chart shells use square or 4-pixel corners, one-pixel rules, compact labels, clear units, and visible source or methodology links. Tables scroll horizontally when needed instead of compressing columns below readability.

### Editorial surfaces

Every guide and answer follows the same sequence when applicable: direct answer, key facts, explanation, evidence, limitations, sources, and related reading. Callouts use a tinted accent background with a rule, not a floating card.

### Buttons and links

- Primary actions use primary text as the fill and the canvas color as text.
- Secondary actions use a one-pixel border.
- Inline links are destination-specific and underline on hover.
- Button labels start with a verb and use sentence case.

## Theme contract

All colors must use semantic tokens. Components may not hardcode a light or dark page background. The selected theme is stored locally, defaults to the operating-system preference, and is applied before first paint. Both themes must meet WCAG AA contrast.

## Forbidden patterns

- Page-specific visual systems
- Glassmorphism, purple gradients, neon glows, or casino styling
- Large rounded card walls
- Decorative shadows on ordinary content
- Text placed over visually busy areas without reliable contrast
- Hover effects that move layout
- Hidden focus states
- Conversion-first newsletter, donation, affiliate, or sales patterns

## Release checks

- Test 375, 768, 1024, and 1440 pixel widths.
- Test light and dark mode.
- Verify no horizontal page overflow.
- Verify every page has one visible H1.
- Verify images load and retain an intentional crop.
- Verify keyboard focus and 44-pixel controls.
- Verify motion respects `prefers-reduced-motion`.
- Verify both text and non-text contrast.

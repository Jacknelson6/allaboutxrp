---
name: AllAboutXRP
description: A source-led XRP research publication built as a digital civic archive.
colors:
  ink: "#090B10"
  paper: "#FFFFFF"
  paper-muted: "#F6F7F8"
  rule: "#D9D9D9"
  secondary-text: "#5C626B"
  cobalt: "#1769AA"
  cobalt-dark: "#12558B"
  night: "#090B10"
  positive: "#1E7D5B"
  negative: "#B33A46"
typography:
  display:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(3rem, 6vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.68
  label:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "0.04em"
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  editorial-panel:
    backgroundColor: "{colors.paper-muted}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px"
---

# Design System: AllAboutXRP

## Overview

**Creative North Star: "The Digital Agora"**

AllAboutXRP is a bright civic research space where financial reporting, ledger data, and evidence are placed in public view. The layout discipline comes primarily from 11x: framed image-led compositions, strong left alignment, generous white space, and sharp editorial geometry. Artificial Analysis informs the data surfaces: dense information becomes understandable through hierarchy, semantic tables, restrained charts, and explicit methodology.

The brand is classical in imagery and contemporary in interface. Ancient Greek locations, tools, architecture, and symbols change with every topic. The shared signature is the luminous oil finish, cobalt and ivory palette, and integrated `1`, `0`, `x` ASCII texture. The interface itself stays quiet so the reporting and artwork carry the identity.

**Key Characteristics:**

- White space and black ink before decoration.
- One cobalt action color with semantic green and red reserved for data.
- Distinct story-specific artwork, never repeated scenery.
- Sharp corners everywhere.
- Serif display type paired with a neutral sans serif.
- Flat, ruled information architecture instead of floating card collections.
- Motion only for direct interaction, never decorative scroll choreography.

## Colors

The UI uses true white, near-black ink, neutral gray rules, and one sober cobalt. Gold, vermilion, and emerald belong primarily inside editorial artwork.

### Primary

- **Civic Cobalt** (`#1769AA`): links, selected filters, focus, and one primary data series.
- **Archive Ink** (`#090B10`): headlines, primary controls, and high-emphasis text.

### Secondary

- **Ledger Green** (`#1E7D5B`): verified positive movement only.
- **Risk Red** (`#B33A46`): negative movement, warnings, and destructive states only.

### Neutral

- **Open Paper** (`#FFFFFF`): default page and card surface.
- **Reference Gray** (`#F6F7F8`): alternate bands and quiet data backgrounds.
- **Rule Gray** (`#D9D9D9`): dividers, table rules, and controls.
- **Secondary Ink** (`#5C626B`): supporting copy that still passes WCAG AA.

**The One Accent Rule.** Cobalt is the only decorative interface color. Semantic colors must communicate data or status.

## Typography

**Display Font:** Libre Baskerville with Georgia fallback  
**Body Font:** Public Sans with system UI fallback  
**Label Font:** Public Sans with tabular numerals enabled where needed

**Character:** Libre Baskerville gives the publication a measured, archival voice. Public Sans keeps navigation, long-form reading, labels, and data precise without introducing a third typographic personality.

### Hierarchy

- **Display** (400, `clamp(3rem, 6vw, 4.75rem)`, 0.98): one dominant statement per page.
- **Headline** (400, `clamp(2rem, 4vw, 3.5rem)`, 1.05): page sections and feature headlines.
- **Title** (650, 1.125rem to 1.5rem, 1.25): articles, guide links, and data modules.
- **Body** (400, 1rem to 1.0625rem, 1.68): reading copy capped at 68ch to 72ch.
- **Label** (650, 0.75rem, 0.04em): short metadata and controls. Uppercase is allowed only for brief publication labels.

**The Two-Family Rule.** Do not add monospaced display fonts or page-specific typefaces. Data uses Public Sans with tabular numerals.

## Elevation

The system is flat by default. Depth comes from full-width tonal bands, image layering, and one-pixel rules. Dropdowns may use a compact structural shadow no softer than 8px blur. Cards and callouts do not float.

**The Flat Record Rule.** If content can be organized with spacing and rules, do not wrap it in a shadowed container.

## Components

### Buttons

- **Shape:** sharp corners (`0px`).
- **Primary:** Archive Ink background, Open Paper text, 44px minimum height.
- **Hover / Focus:** cobalt background or a 2px cobalt focus outline. No shine, glow, bounce, or mouse-following effect.
- **Secondary:** white background, one-pixel Rule Gray border, ink text.

### Chips

- **Style:** sharp, white, one-pixel border, Public Sans label.
- **State:** selected chips invert to Archive Ink with white text. Use chips only for filtering.

### Cards / Containers

- **Corner Style:** `0px` without exception.
- **Background:** white or Reference Gray.
- **Shadow Strategy:** none.
- **Border:** one-pixel Rule Gray or a single horizontal divider.
- **Internal Padding:** 20px to 32px.

### Inputs / Fields

- **Style:** white field, one-pixel rule, visible label, 44px minimum height.
- **Focus:** 2px Civic Cobalt outline.
- **Error / Disabled:** semantic red for errors; disabled state keeps readable contrast.

### Navigation

Use a compact wordmark, restrained links, and one clear active state. Desktop menus align to the site grid. Mobile navigation occupies a normal document layer and never shifts page width.

### Editorial Artwork

Every article and major guide receives one original 16:9 image. Each image must have a unique setting, viewpoint, lighting condition, primary object, and visual metaphor compared with all existing images. Style consistency comes from paint, palette, and ASCII treatment, not repeated temples, coasts, or compositions.

## Do's and Don'ts

### Do:

- **Do** use 11x-inspired white space, framed imagery, sharp geometry, and strong left alignment.
- **Do** use Artificial Analysis-inspired semantic tables and clear data provenance.
- **Do** keep body copy within 68ch to 72ch.
- **Do** use a different scene and metaphor for every editorial image.
- **Do** show source, timestamp, methodology, and uncertainty beside data.
- **Do** use local browser time for current reporting, with Central Time as the server fallback.
- **Do** respect reduced-motion preferences and keep content visible without animation.

### Don't:

- **Don't** resemble a speculative crypto casino, exchange acquisition funnel, neon token dashboard, anonymous content farm, or pay-to-play affiliate review site.
- **Don't** use hype, price guarantees, unsourced adoption claims, decorative purple gradients, glassmorphism, walls of identical cards, or editorial styling that obscures the answer.
- **Don't** use rounded corners, pills for non-filter content, wide soft shadows, or floating ghost cards.
- **Don't** use scroll-driven headline transforms, parallax text, mouse-following shine, or repeated reveal animations.
- **Don't** repeat a Greek coast, temple, harbor, bank, terrace, or hero composition merely to preserve style.
- **Don't** use hard-coded black page sections inside the light theme or hard-coded white text outside deliberate dark data instruments.
- **Don't** add daily recap archives, newsletter conversion modules, donation prompts, or paid-conversion surfaces.

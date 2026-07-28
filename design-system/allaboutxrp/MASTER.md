# AllAboutXRP Design System

**Project:** AllAboutXRP

**Direction:** Independent editorial reference with live XRP data

**Last updated:** 2026-07-28

## Experience principles

1. **Answer first.** Lead important pages with a concise, citable answer before supporting detail.
2. **Evidence stays visible.** Put sources, reviewed dates, methodology, and uncertainty near the claims they support.
3. **Editorial before promotional.** The site should feel like a trusted financial publication and research library, not a token dashboard or exchange landing page.
4. **One clear hierarchy.** Avoid walls of equal cards. Use a strong lead story or answer, grouped supporting paths, and quiet utility surfaces.
5. **Progressive complexity.** Help newcomers begin quickly while keeping deeper ledger, legal, and market research easy to reach.

## Visual language

### Color

| Role | Value | Tailwind token |
|---|---:|---|
| Deep ink background | `#050709` | `bg-surface-primary` / `bg-black` |
| Card surface | `#0B0F14` | `bg-surface-card` |
| Elevated surface | `#111821` | `bg-surface-elevated` |
| Border | `rgba(179, 209, 234, 0.14)` | `border-surface-border` |
| Primary text | `#F4F7FA` | `text-text-primary` |
| Secondary text | `#A6B1BD` | `text-text-secondary` |
| Cobalt action | `#2F9FFF` | `text-xrp-accent` / `bg-xrp-accent` |
| Bright link/focus | `#6CBBFF` | `text-xrp-accent-bright` |
| Success | `#33C58E` | `text-success` |
| Warning | `#F2B84B` | `text-warning` |
| Danger | `#FF6673` | `text-danger` |

Use cobalt for links, active states, live indicators, and the primary action. Do not use decorative gradients or crypto-neon purple. Large cobalt backgrounds need deep-ink text for contrast.

### Typography

- **Display and editorial headings:** Newsreader, semibold or bold.
- **Body and interface:** Instrument Sans, regular through semibold.
- **Prices, addresses, timestamps, and ledger data:** IBM Plex Mono.
- Body copy is at least 16px with a 1.6–1.7 line height.
- Long-form reading width is 68–72 characters.
- Use sentence case. Avoid all-caps headings; compact eyebrow labels may use uppercase tracking.

### Shape and depth

- Radius: 8px for controls, 12px for panels, full pill only for small status labels.
- Prefer borders and small surface shifts over shadows.
- Do not float every section in a card. Use dividers and whitespace to group editorial content.
- Hover states may change border, background, or text color; they must not shift layout.

### Spacing

- Base grid: 4px.
- Control gaps: 8–12px.
- Panel padding: 20–24px.
- Content-group spacing: 32–48px.
- Section spacing: 72–112px desktop, 48–72px mobile.
- Site container: max 1200px with 20px mobile gutters and 32px desktop gutters.

## Page patterns

### Homepage

1. Direct category promise and one primary action.
2. Short answer to “What is XRP?” with a first-party source.
3. Three intent paths: learn, use, research.
4. Answer desk with canonical question links.
5. Latest coverage and live data.
6. Editorial standards and frequently asked questions.

### Topic hub

1. Clear H1 and one-sentence scope.
2. Curated, canonical paths grouped by search intent.
3. Descriptive link text and short answer snippets.
4. CollectionPage and ItemList schema that match visible links.
5. No thin, duplicate, or noindex pages promoted from the hub.

### Article or guide

1. Breadcrumbs.
2. Specific H1 and concise answer-in-brief.
3. Key facts and jump links when useful.
4. Source-backed sections with semantic headings.
5. Reviewed date, editorial note, related canonical guides, and FAQ.

### Live data or tool

1. Name the data source, timestamp, assumptions, and units.
2. Make the current answer or output the strongest element.
3. Keep controls labeled and keyboard accessible.
4. Explain methodology below the interactive surface.

## Component rules

- Interactive targets are at least 44 by 44px.
- Every input has a persistent visible label and an associated error message.
- Use Lucide icons; icons supplement text and never replace an accessible label.
- Native disclosure elements are preferred for crawlable FAQs.
- All keyboard focus uses the bright cobalt 3px focus ring.
- External sources are labeled as sources; sponsored and affiliate relationships must be disclosed.
- Respect `prefers-reduced-motion` and never make content depend on animation.

## Prohibited patterns

- Emoji used as interface icons.
- Purple/pink or multicolor decorative gradients.
- Generic “crypto dashboard” styling, glassmorphism, or speculative hype copy.
- Large grids of visually identical cards.
- Low-contrast metadata or body text.
- Answer text hidden behind client-only accordions or animation.
- Vague links such as “click here” when a descriptive label is available.
- Unsourced market, legal, adoption, or partnership claims.

## Delivery checklist

- [ ] H1, title, description, canonical, and visible answer agree on intent.
- [ ] Source and review information is visible where relevant.
- [ ] Schema matches the visible page content.
- [ ] 375px, 768px, 1024px, and 1440px layouts have no horizontal overflow.
- [ ] Keyboard order, focus, dialog behavior, and native disclosures work.
- [ ] Text contrast meets WCAG AA.
- [ ] Motion is optional and reduced-motion content remains visible.
- [ ] No duplicate/noindex page is linked as a primary canonical guide.

# AllAboutXRP.com — Full Dev Sprint Plan

## Project Identity
Domain: allaboutxrp.com
Purpose: One-stop, high-signal XRP hub with education, vetted voices, live feed, wallets, and rich-list data.
Stack: Next.js 14 (App Router) + React 18 + Tailwind CSS + TypeScript
Deployment Target: Vercel
Repo: github.com/Jacknelson6/allaboutxrp

## Architecture Overview

```
allaboutxrp/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Home / What is XRP?
│   │   ├── people/page.tsx       # XRP People to Follow
│   │   ├── news/page.tsx         # Live XRP News Feed
│   │   ├── donate/page.tsx       # Donate in XRP
│   │   ├── richlist/page.tsx     # Rich List & Metrics
│   │   ├── get-started/page.tsx  # Where to Buy / How to Start
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/    # Nav, Footer, MobileMenu
│   │   ├── home/      # Timeline, FAQ accordion, hero
│   │   ├── people/    # AccountCard, CategoryFilter
│   │   ├── news/      # FeedEmbed, TweetCard
│   │   ├── donate/    # QRCode, WalletInstructions
│   │   ├── richlist/  # RichListTable, DistributionChart, PriceWidget
│   │   ├── get-started/ # ExchangeCard, StepByStep
│   │   └── shared/    # Button, Card, Badge, SEOHead, SchemaMarkup
│   ├── lib/
│   │   ├── xrpl/      # XRPL API integration layer
│   │   ├── twitter/   # X/Twitter feed logic
│   │   └── utils/     # Formatters, constants
│   ├── data/
│   │   ├── xrp-accounts.json
│   │   ├── timeline.json
│   │   └── content/   # Markdown content files
│   └── styles/
│       └── globals.css
├── public/
│   ├── og/
│   ├── icons/
│   └── images/
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Design System

### Color Palette
```css
:root {
  --xrp-blue: #23292F;
  --xrp-accent: #00A3FF;
  --xrp-accent-dim: #0077CC;
  --surface-primary: #0D1117;
  --surface-card: #161B22;
  --surface-elevated: #1C2128;
  --surface-border: #30363D;
  --text-primary: #F0F6FC;
  --text-secondary: #8B949E;
  --text-accent: #00A3FF;
  --success: #3FB950;
  --warning: #D29922;
  --danger: #F85149;
}
```

### Typography
- Display/Headlines: "Instrument Sans" (Google Fonts)
- Body: "DM Sans" (Google Fonts)
- Mono/Data: "JetBrains Mono"

### Layout Principles
- Max content width: 1280px centered
- Card-based layouts with subtle borders (1px surface-border)
- Generous spacing: 64px+ between page sections
- Dark-mode primary

## SEO & AEO/GEO Strategy

Every page MUST implement:

1. **Metadata** (Next.js generateMetadata):
   - Unique title with primary keyword + brand
   - Description under 155 chars
   - openGraph with custom OG image per page (1200x630)
   - Twitter card metadata
   - Canonical URL

2. **Structured Data** (JSON-LD):
   - Home: FAQPage + Organization schema
   - People: ItemList schema
   - Rich List: Dataset schema
   - Get Started: HowTo schema
   - All pages: BreadcrumbList + WebSite with SearchAction

3. **Heading Hierarchy**: Single H1 per page, logical H2-H3 nesting

4. **Content Structure for AI/AEO**:
   - Lead with direct answer (first 2-3 sentences)
   - Use section landmarks with aria-label
   - FAQ sections use details/summary OR visible Q&A blocks

5. **Technical SEO**:
   - Dynamic XML sitemap
   - All images have alt text, use next/image
   - Internal linking between all pages
   - 100% SSR/SSG

6. **Performance Targets**: Lighthouse >= 90, LCP < 2.5s, CLS < 0.1, FID < 100ms

## Agent Breakdown

### Agent 1: XRP Research Agent
- Task 1.1: Timeline Data (src/data/timeline.json) - min 25 events
- Task 1.2: Educational Content (src/data/content/*.md) - 6 files
- Task 1.3: FAQ Pairs (src/data/faq.json) - min 15 pairs

### Agent 2: XRP Accounts Curator
- Task 2.1: Account data structure
- Task 2.2: Populate min 30 accounts across 6 categories
- Task 2.3: Avatar strategy (unavatar.io)

### Agent 3: XRPL Data Agent
- Task 3.1: API client (XRPSCAN, XRPL WebSocket, CoinGecko)
- Task 3.2: Caching strategy
- Task 3.3: API routes
- Task 3.4: Known account labels

### Agent 4: Frontend/UI Agent
- Task 4.1: Project scaffolding
- Task 4.2: Root layout (nav, footer)
- Task 4.3: Home page
- Task 4.4: People page
- Task 4.5: News feed page
- Task 4.6: Donate page
- Task 4.7: Rich List page
- Task 4.8: Get Started page
- Task 4.9: Shared components
- Task 4.10: Performance & accessibility

## Non-Negotiable Standards
1. Every page fully SSR/SSG crawlable
2. Every page has unique, keyword-optimized metadata
3. Every page has at least one JSON-LD schema block
4. Zero "any" types in TypeScript
5. Disclaimer on every page discussing price/investment
6. All external links use rel="noopener noreferrer"
7. WCAG 2.1 AA minimum
8. Mobile-first responsive design (375px minimum)

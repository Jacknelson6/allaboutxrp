# Agent access

How AllAboutXRP serves machine clients: content negotiation, the Markdown
representation, agent-recoverable 404s, and the entity data agents use to
verify the publisher. Everything here is public behaviour — it is checked by
`npm run seo:test` and by the endpoint list at the bottom.

## Markdown content negotiation

The site follows the [acceptmarkdown.com](https://acceptmarkdown.com/) profile:
every page URL serves HTML to browsers and Markdown to clients that ask for it,
from the same URL.

```bash
curl -sI -H "Accept: text/markdown" https://allaboutxrp.com/learn/what-is-xrp
# content-type: text/markdown; charset=utf-8
# vary: Accept, Accept-Encoding

curl -sI -H "Accept: application/pdf" https://allaboutxrp.com/
# HTTP/2 406
```

Three pieces implement it:

| File | Responsibility |
| --- | --- |
| `src/lib/agent/accept.ts` | RFC 9110 §12.5.1 `Accept` parsing: q-values, specificity, client order, and which paths are negotiable at all. |
| `src/proxy.ts` | Chooses the representation, rewrites Markdown requests to the route handler, answers `406`, and advertises the `.md` sibling with a `Link: rel="alternate"` header. |
| `src/app/api/markdown/[[...slug]]/route.ts` | Renders the Markdown body and sets `Content-Type` / `Vary` / `Cache-Control`. |

Negotiation rules worth remembering:

- No `Accept` header, `*/*`, or a browser header resolves to **HTML**. HTML is
  first in `PRODUCES`, so it also wins a q-value tie.
- `text/html;q=0, */*` resolves to Markdown: a specific range overrides a
  wildcard regardless of q.
- A client that accepts neither representation gets `406` with a plain-text
  body naming both.
- Static files, `_next/` internals, API routes, and Next's generated image
  routes are never negotiated — they have one representation, so a 406 there
  would be wrong.

### `.md` sibling URLs

Appending `.md` to any path returns the same Markdown regardless of `Accept`,
which is what crawlers following the `rel="alternate"` link need. The homepage
sibling is `/index.md`.

### How the Markdown is produced

There is no second copy of the content. The route handler fetches the page's
own HTML, takes the `<main id="main-content">` region, and converts it with
`src/lib/agent/html-to-markdown.ts` — a dependency-free converter covering the
markup this site actually emits (headings, lists, tables, `details`, code,
links, images) and dropping chrome (scripts, styles, nav, `aria-hidden`
decoration). The served document is assembled as: one H1, the page
description, the body, then a provenance footer naming the canonical URL.

Because HTML is the single source of truth, the two representations cannot
drift apart. The trade-off is one internal request per uncached Markdown
response, absorbed by `s-maxage=300, stale-while-revalidate=86400`.

### `Vary` and shared caches

Both representations share a URL, so caches must key on `Accept`. Markdown
responses set `Vary: Accept, Accept-Encoding` directly. Next.js overwrites the
`Vary` header it manages on App Router page responses, so the HTML side is
covered at the CDN edge by the `/*` rule in `netlify.toml`, which restates
Next's own RSC tokens plus `Accept`. Netlify factors the standard `Vary` header
into its cache key for all response types.

## Agent-recoverable 404s

Unknown paths return a real `404` in both representations:

- **HTML** (`src/app/not-found.tsx`) renders the recovery map — main sections,
  publisher pages, and the machine-readable indexes.
- **Markdown** (`buildNotFoundMarkdown` in `src/lib/agent/site-index.ts`)
  returns the same map as a short document, so an agent can re-orient without
  parsing a page shell.

Both read the same link lists, so they cannot diverge. `410` responses from
retired endpoints are handled the same way.

## Machine-readable indexes

| URL | Contents |
| --- | --- |
| `/sitemap.xml` | Every canonical URL. |
| `/news-sitemap.xml` | Reporting inside the Google News window. |
| `/llms.txt` | Curated index, plus the machine-access notes. |
| `/llms-full.txt` | One line per page with a description. |
| `/robots.txt` | Explicit allow list for named AI crawlers. |

## Publisher entity

`src/lib/seo/organization.ts` is the single Organization node (`@id`
`https://allaboutxrp.com/#organization`) rendered site-wide by the root layout
and referenced by the WebSite, Article, NewsArticle, and ContactPage schemas.
It carries `contactPoint` for both published inboxes and a `PostalAddress`.
Every value is published somewhere a reader can check — the addresses on
`/contact`, the region in the terms of service. Nothing here is invented; add a
field only when the corresponding fact is public.

## Verifying a deploy

```bash
BASE=https://allaboutxrp.com

curl -s -o /dev/null -w "%{http_code}\n" $BASE/some-path-that-does-not-exist   # 404
curl -s -o /dev/null -w "%{content_type}\n" -H "Accept: text/markdown" $BASE/  # text/markdown; charset=utf-8
curl -s -o /dev/null -w "%{http_code}\n" -H "Accept: application/pdf" $BASE/   # 406
curl -s -o /dev/null -w "%{content_type}\n" $BASE/index.md                     # text/markdown; charset=utf-8
curl -sI -H "Accept: text/markdown" $BASE/contact | grep -i vary               # includes Accept
```

Unit coverage lives in `scripts/tests/` and runs with `npm run seo:test`;
`npm run seo:schema` checks the JSON-LD on a sample of pages, including
`/contact`.

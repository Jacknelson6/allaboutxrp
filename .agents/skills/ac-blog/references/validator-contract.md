# Offline validator contract

```sh
python3 scripts/validate_article.py --html article.html --manifest manifest.json [--baseline before.html] [--output report.json]
```

Uses Python 3 standard library only. Inputs are local UTF-8 files; no network,
CMS access, dependencies or publication. Exit 0 means checked rules pass,
1 means content defects, and 2 means invalid inputs or unavailable files.
Output is JSON with errors and warnings (string arrays) and inventory (object).

## Manifest

```json
{
  "schemaVersion": 1,
  "articleSelector": ".post-body",
  "articleUrl": "https://client.example/blog/tool-guide/",
  "requiredInternalLinks": ["/guides/basics/"],
  "brands": [{
    "name": "Example Tool",
    "url": "https://tool.example/",
    "logoSrc": "/media/example-tool-logo.svg",
    "screenshotSrc": "/media/example-tool-dashboard.webp"
  }],
  "requiredSchemaTypes": ["BlogPosting", "Person", "Organization", "BreadcrumbList"],
  "video": {"embedUrl": "https://www.youtube-nocookie.com/embed/VIDEO_ID"},
  "approvedRemovals": []
}
```

Required fields: schemaVersion (integer 1), articleSelector, articleUrl,
requiredInternalLinks, brands, requiredSchemaTypes. Lists can be empty when
not relevant. Each brand requires nonempty name/url/logoSrc/screenshotSrc.
Omit video entirely when absent; when present embedUrl is required.
Choose requirements from the brief, not the draft. Example domains and video
ID are illustrative only and must be replaced with verified client evidence.

Selectors support a single tag, .class, or #id. No compounds, combinators,
pseudo-classes, or attribute selectors. Exactly one matching container is
required. H1 is checked across the page because hero headings often sit outside
the article body. Schema and head metadata are checked across the document.

## Checks and limits

- Decoded em dashes and known filler; required links/assets within the article.
- Required brand image alt and dimensions; other images permit decorative empty alt.
- Page H1, head title/description/canonical, JSON-LD parsing and required types.
- Article or BlogPosting and publisher Organization are baseline requirements.
  Add Person for a personal author, BreadcrumbList for actual breadcrumbs, and
  other appropriate types through requiredSchemaTypes.
- For a required video, verify embed and matching VideoObject metadata presence.
- With baseline HTML, compare normalized link/media URLs and fail losses unless
  each specific absolute URL is in approvedRemovals. The list also accepts an
  exact complete `data:image/(png|jpeg|webp|gif);base64,...` URI for removal of
  a specific legacy raster image. Canonical nonempty base64 and a matching
  format signature are required; SVG, other schemes, wildcards, prefixes and
  malformed payloads are rejected. This is not full decoded image validation.
  Matching remains exact, so approving one image does not approve another.
  Document rationale in run state. A removal approval never waives an active
  manifest requirement.

The script is deliberately not a browser or a search-engine validator. It does
not prove factual accuracy, media rights, live reachability, image file integrity,
correct subject matter, all schema semantics, rich-result eligibility, visual
quality, Core Web Vitals, social previews, or client approval. Check those separately.
CMS Microdata/RDFa needs an alternate documented schema check; this script expects
JSON-LD and must not be represented as validating other formats.

# Profile-to-Manifest Derivation

This reference explains how to convert a client profile
(`client-profile.json`) into a validator manifest
(`article-manifest.json`) for a specific article.

## Overview

The client profile is reusable across articles. The manifest is
article-specific. Derivation combines profile-level constants with
article-level decisions made during stages 1 through 6.

## Derivation rules

### schemaVersion

Always `1`.

### articleSelector

Use the client profile's `cms.articleSelector` if present. Otherwise
default to `"article"`. Select exactly one container using a single tag, `.class`,
or `#id`; compound selectors such as `article.post-content` are unsupported.

```
manifest.articleSelector = profile.cms.articleSelector ?? "article"
```

### articleUrl

Use the verified canonical route from the client CMS. Preserve existing URLs on repair; do not assume a root-level slug. The following is illustrative only:

```
manifest.articleUrl = profile.domain + "/" + articleSlug + "/"
```

### requiredInternalLinks

Start with the links selected during Stage 5 (draft) from the client
profile's `internalLinks[]` array. Select requirements from the approved brief before drafting. Never shrink the manifest to match omissions in a draft.

```
manifest.requiredInternalLinks = stage5.selectedInternalLinks
```

### brands

Use `[]` for guides without brand comparisons; do not add software or agency
comparisons just to fill this field. Populated during Stage 4 (outline) and
Stage 6 (media). For each brand
retained in the article's comparison or review:

```json
{
  "name": "<brand display name>",
  "url": "<official brand URL, verified>",
  "logoSrc": "<local path from media manifest, Stage 6>",
  "screenshotSrc": "<local path from media manifest, Stage 6>"
}
```

Source brand URLs from the evidence ledger (Stage 3). Source image
paths from the media manifest (Stage 6).

### requiredSchemaTypes

Start with the base set from the client profile or default:

```
base = ["BlogPosting", "Organization"]
# Add Person for a personal author and BreadcrumbList for actual breadcrumbs.
```

Add `"VideoObject"` if a video was selected during Stage 6.
Add `"FAQPage"` if the article includes eligible visible Q&A pairs.

```
manifest.requiredSchemaTypes = base + conditional types
```

### video

Include only when a video was selected per the video selection gate
(Stage 6):

```json
{
  "embedUrl": "<YouTube or platform embed URL from Stage 6 selection>"
}
```

Omit the `video` field entirely if no video is included.

### approvedRemovals

Populated only when `--baseline` comparison is used and the team has
intentionally removed items. List the specific URLs, src paths, or
schema types that were removed with documented justification.

Default to an empty array.

## Worked example

Given a hypothetical client profile for "Acme Corp" and an article about CRM tools:

**Profile excerpt:**
```json
{
  "clientId": "acme",
  "domain": "https://acme.example",
  "cms": { "articleSelector": ".blog-post" },
  "internalLinks": [
    "https://acme.example/services/crm-consulting/",
    "https://acme.example/blog/what-is-crm/",
    "https://acme.example/contact/"
  ]
}
```

**Stage decisions:**
- Article slug: `best-crm-tools-2026`
- Selected internal links: CRM consulting page and What is CRM
- Two brands retained: Salesforce and HubSpot
- No video selected
- No FAQ section

**Resulting manifest:**
```json
{
  "schemaVersion": 1,
  "articleSelector": ".blog-post",
  "articleUrl": "https://acme.example/best-crm-tools-2026/",
  "requiredInternalLinks": [
    "https://acme.example/services/crm-consulting/",
    "https://acme.example/blog/what-is-crm/"
  ],
  "brands": [
    {
      "name": "Salesforce",
      "url": "https://www.salesforce.com",
      "logoSrc": "images/salesforce-logo.webp",
      "screenshotSrc": "images/salesforce-dashboard.webp"
    },
    {
      "name": "HubSpot",
      "url": "https://www.hubspot.com",
      "logoSrc": "images/hubspot-logo.webp",
      "screenshotSrc": "images/hubspot-crm-view.webp"
    }
  ],
  "requiredSchemaTypes": [
    "BlogPosting",
    "Person",
    "Organization",
    "BreadcrumbList"
  ],
  "approvedRemovals": []
}
```

## Automation notes

The profile-to-manifest derivation is a documentation convention, not
a script in this skill. Review the resulting manifest before validating the article.

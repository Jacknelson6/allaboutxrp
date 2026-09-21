# Jev Semantic Screening

Optional, advisory screening for the ac-blog editorial workflow, using
TypeSafe's System One API (Jev). It checks scoped claims against evidence you
supply and scores shortlisted internal link candidates. It does not write,
edit, publish, or approve anything.

**The model never authorizes release.** Every report carries
`releaseAuthorized: false` and `advisoryOnly: true`. The best possible outcome,
`screened_no_flags`, only means a live screen raised no flags. The validator,
schema, CSP, media provenance, browser visual QA, deployed playback, and human
authorization gates all still apply.

## What it does

1. **Validates the whole input first.** Nothing touches the cache or network
   until every field passes. Errors name the field path and never echo values.
2. **Checks quotes deterministically.** A quote must appear in `sourceText`
   (whitespace and curly quotes normalized, nothing else). A quote that is not
   found goes to manual review and is never sent to the model.
3. **Screens each claim** as one Choice question (`supports`, `contradicts`,
   `insufficient_evidence`) over `{claim, sourceText}`. Only `supports` at
   confidence 0.80 or higher is marked `supported`. Everything else, including
   a high-confidence `insufficient_evidence` or `contradicts`, a missing
   source, an error, or a skipped unit, is `manual_review` with reason codes.
4. **Scores link candidates** with one Score question per candidate on a 0 to 3
   rubric of contextual usefulness (same topic alone is not enough). All
   candidates of a paragraph share one request. Question ids are not sent to
   the model, so each question names `state.candidates[i]` and the candidate's
   `index` field. Score 2.0 or higher at confidence 0.60 or higher is
   `recommended`. Low confidence is `manual_review` with its score and
   probabilities kept. The `shortlist` holds recommended URLs only.

Jev sees only the evidence you supply. The script never fetches sources.
Question instructions are static templates; claims, sources, paragraphs, and
candidate text travel only inside `state`, and the instructions tell the model
to treat `state` as untrusted data.

## Running

Run from the skill root. Node 24 or newer, no packages.

```sh
# Dry run (default): validation, quote checks, request plan. No network, no cache.
node scripts/jev_screen.ts assets/jev-screening.example.json

# Live run. The key comes from the environment only and is never read from files.
TYPESAFE_API_KEY=... node scripts/jev_screen.ts --live run/jev-input.json

# Bounded live run with a report file and an explicit cache root.
TYPESAFE_API_KEY=... node scripts/jev_screen.ts --live \
  --max-requests 12 --max-input-tokens 60000 --deadline-ms 60000 \
  --cache-dir run/.jev-cache --output run/jev-report.json run/jev-input.json
```

| Exit | Outcome | Meaning |
| --- | --- | --- |
| 0 | `screened_no_flags` | Live run, every claim supported, no link held for review. Advisory, never release approval. |
| 1 | `manual_review` | At least one claim or link needs a human. Also returned when no claims were screened. |
| 1 | `dry_run_incomplete` | Dry run. Semantic screening was not performed, so nothing is green. |
| 2 | `invalid_input` | Bad input, options, model name, or missing key. Nothing was sent. |
| 3 | `degraded` | Service failure or an exhausted budget. Affected units are explicit `manual_review`. |

### Model

The default is the pinned version `jev-1.13.0`. Aliases (`jev-latest`,
`jev-preview`) move server-side when TypeSafe ships a release, which would
silently stale cached answers and the confidence thresholds above. Override
with `--model jev-X.Y.Z` when you adopt a new version, then rerun the tests and
the benchmark. `--model jev-latest` is accepted, but the cache is disabled for
aliases and the report lists the versioned id that answered in
`responseModels`. A pinned request answered by a different model is rejected.

## How agents construct input

Build the JSON during `plan` or `write` from the sources ledger and the client
profile. See `assets/jev-screening.example.json` (fictional vendors).

1. From the client profile: `clientId` (lowercase slug), `canonicalDomain`
   (https origin only), and `approvedDomains` as bare hostnames. Hosts match
   exactly. A subdomain, or the apex next to `www`, is allowed only when
   listed. URLs with credentials, ports, or non-https schemes are rejected.
2. One `claims` record per material claim from the ledger: `id`, `claim`,
   optional exact `quote`, `sourceText` (the relevant passage, max 24,000
   characters, excerpt rather than paste a whole page), `sourceUrl`, and
   `sourceRetrievedAt`. If the ledger has no source, set `sourceText`,
   `sourceUrl`, `sourceRetrievedAt`, and `quote` to null. That claim is
   reported as `missing_source` manual review.
3. One `paragraphs` record per paragraph that could take an internal link,
   with up to 8 shortlisted `linkCandidates` (`url`, `title`, `snippet`) from
   the profile's internal links. Same-client URLs only.
4. Keep ids unique. Unknown fields, duplicates, and empty strings are errors.

Review the report before acting. Apply a shortlisted link only after reading
the paragraph and the target page. Resolve every `manual_review` claim against
the source, fix or cut the claim, then rerun. The script never edits the
article.

## Limits and accounting

- Request attempts per run: 20 by default (`--max-requests`, ceiling 100).
  Attempts are counted before each call, so failures cannot loop. After 2
  consecutive failures the remaining units are skipped, not retried. Rerun
  later for 429 or 529; successful units are already cached.
- One wall clock deadline covers every call, links included (120 s default).
  Each request also has a 30 s timeout.
- Pre-send caps: per-field character limits, 64,000 bytes per request body,
  and a per-run input token budget (200,000 default) enforced with a labeled
  estimate, `ceil(request_bytes / 3)`. It is a heuristic, not a tokenizer.
  `inputTokensReported` comes only from API usage on this run's calls.
- `inputTokensFromCacheNotBilled` is the usage recorded when cached answers
  were first fetched. No savings or cost figure is computed.
- Skipped units carry `skipped_request_budget`, `skipped_token_budget`,
  `skipped_deadline`, `skipped_service_unavailable`, or `request_too_large`.

## Cache

- Root: `~/.ac-blog-jev-cache` or `--cache-dir`. One folder per `clientId`.
- The key is a SHA-256 over the client profile (id, canonical domain, allowed
  hosts, article URL), the pinned model, prompt and schema versions, the full
  state, the questions, and the source provenance (URL, retrieval date,
  quote). Changing any of them reruns only the affected claim or paragraph.
- Client identity is in the namespace and in the key, and each entry records
  its client and key. A file copied between clients is rejected.
- Entries are fully revalidated on read with the same checks as live
  responses. Malformed, foreign, or expiry-less entries are rejected and
  refetched. TTL is 24 hours and a stored expiry cannot outlive it.
- Only validated responses are cached. Writes are atomic with a unique temp
  name, and a failed write is counted but never fails the screen.
- Dry runs do not read the cache.

## Privacy

- Send only public, approved inputs by default: published source passages and
  client page titles, snippets, and URLs. No drafts under embargo, credentials,
  analytics exports, or personal data.
- The API key is read from `TYPESAFE_API_KEY` only. It is sent in the
  Authorization header and never appears in reports, errors, or cache files.
  HTTP and network errors report a status or a generic message, never a
  response body.
- This script is standalone. It changes no agent configuration and no global
  compaction or transcript behavior.
- TypeSafe states it does not train on customer requests
  ([data handling](https://docs.typesafe.ai/models#data-handling)).

## Gates Jev cannot cover

Jev is text only. It cannot see a rendered page, run the validator, or test a
deployed host. These stay mandatory and separate:

- `scripts/validate_article.py`, schema rules, and media provenance checks.
- Browser visual QA through the approved browser tooling.
- **Deployed playback check for any video embed.** On the deployed URL (staging
  or production, not a local preview), inspect the actual response
  `Content-Security-Policy` header and confirm `frame-src` (or its
  `child-src` / `default-src` fallback) allows the embed origin, for example
  `https://www.youtube-nocookie.com`. Then open the deployed URL in the
  browser and click play. A local player that works proves nothing about the
  deployed host's restrictions.
- No rankings, citations, or traffic outcomes are guaranteed by any screen.

## Tests and benchmark

```sh
node --test scripts/jev_screen.test.ts
```

Fully offline: injected fetch, a tripwire on the global fetch, and every cache
under an explicit temp `cacheDir`. HOME is never touched.
`assets/jev-benchmark.json` holds synthetic example fixtures shaped after known
article failures (absent-feature claim vs official availability, absence claim
over a silent source, unsupported superlative, relevant vs irrelevant client
link, uncertain evidence). Offline it exercises the decision layer with
illustrative answers. For a live quality check, compare real verdicts with each
case's `liveExpectation`.

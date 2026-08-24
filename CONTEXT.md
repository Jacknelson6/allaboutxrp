# AAXRP domain context

## Search growth engine

### Canonical Content Item

The stable site page identity used across reports and experiments. It includes the canonical URL, local route match, source path when known, and indexability state.

### Query Cluster

Related human search expressions that share one dominant intent. The MVP conservatively uses the normalized query as its own cluster. Broader semantic clustering is deferred until real evidence shows it is necessary.

### Search Opportunity

A query-page record that passes minimum sample, brand, host, and indexability gates. An opportunity can contain observed and estimated signals, which remain visibly separate.

### Intervention

One approved, bounded site change for one primary hypothesis. The engine records interventions but cannot make or publish them.

### Measurement Window

A fixed comparison period. The engine requires equal-duration previous and current windows, then tracks approved interventions at day 28, day 56, day 90, and optionally day 120.

### Evidence State

- `observed`: directly supported by supplied first-party evidence.
- `estimated`: modeled from site-specific evidence and labeled as an estimate.
- `insufficient_data`: too little evidence for a responsible conclusion.
- `not_available`: the source was not supplied or cannot measure the field.

### Decision State

The intervention lifecycle: `candidate`, `approved`, `active`, `winning`, `neutral`, `losing`, `stopped`, or `needs_more_data`. Approval freezes evidence. Activation occurs only after the site change is live and starts the measurement clock.

### RankPrompt boundary

RankPrompt is the system of record for AEO and GEO prompts, citations, visibility, and share of voice. The search growth engine links to RankPrompt but does not duplicate those measurements.

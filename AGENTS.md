# AllAboutXRP agent instructions

## Editorial workflow

- Use the repository-local `$ac-blog` skill for every new AllAboutXRP blog, guide, or news article.
- Start new articles in `plan` mode, continue in `write` mode, and run `qa` before release. Follow the stopping points and authorization boundaries in `.agents/skills/ac-blog/SKILL.md`.
- Load `docs/editorial/aaxrp-client-profile.json` as the client profile. Treat null or empty values as unknown, not as permission to invent facts.
- Keep research, evidence, manifests, drafts, and QA records in the profile's private workspace. Commit only the public article fields, approved assets, and public evidence that belong in this repository.
- Preserve this repository's current article schema, source requirements, editorial image system, checks, and publishing flow. For news articles, also follow `docs/NEWS_AUTOMATION.md`, `docs/EDITORIAL_IMAGE_SYSTEM.md`, and `content/news/_article-template.json`.
- A plan, profile, passing validator, or prior publication does not authorize a new release. Publish only within the active user's authorization.

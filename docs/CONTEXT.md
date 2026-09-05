---
phase: 1
updated: 2026-09-05
last_commit: baff944
---

# Current Focus

Template de-personalized: personal identity and essays removed, generic placeholders and demo content added. GitHub Pages CI already in place from prior session.

## Active Tasks

- [x] GitHub Pages deploy workflow, package-lock.json tracked
- [x] Remove 9 personal posts; keep 4 generic git/eleventy tutorials
- [x] Add generic `welcome.md` demo post
- [x] Genericize metadata.js, package.json, base.njk, CLAUDE.md, MAINTENANCE.md, docs/*
- [x] Verify build passes

## Context

- Same de-personalization pass applied in parallel to eleventy-prose-blog (separate session/repo)
- Kept posts (`categories.md`, `collections.md`, `dotdotnotation.md`, `rebase-hint.md`) demo tag/collection features with no identity leak
- `base.njk` twitter:creator now conditional on `metadata.author.social.bluesky` — no longer hardcoded
- See DEC-005 in DECISIONS.md for full rationale

## Next Session

Continue design polish, or move to mimeo template-parameterization backlog item now that de-personalization prerequisite is done.

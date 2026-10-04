---
phase: 2
phase_name: Maintenance
updated: 2026-10-03
last_commit: 798f11f
---

# Current Focus

npm 12 install-hygiene pass complete (Phase 2): jsdom ^30, truthful
Node floor, silent fresh installs. Phase 1 alignment closed out (all
17 tasks were already done; the label had drifted).

## Active Tasks

- [ ] Drop `audit=false` from `.npmrc` when eleventy 4 ships (DEC-006)

## Context

- Tech counterpart to eleventy-prose-blog: Mermaid diagrams, Prism
  syntax highlighting, RSS, image optimization
- jsdom@30 powers the footnote filter (32 refs in built welcome post —
  verified on the new major)
- engines: ^22.22.2 || ^24.15.0 || >=26 (img@7 + jsdom@30 floors);
  .nvmrc 24; CI node 24
- Remaining audit findings are braces→chokidar, dev-server-only and
  unfixable on eleventy 3; hidden from install output only (DEC-006)
- De-personalization history: DEC-005; kept posts (`categories.md`,
  `collections.md`, `dotdotnotation.md`, `rebase-hint.md`) demo
  tag/collection features with no identity leak

## Next Session

Nothing queued. Design polish or the mimeo template-parameterization
backlog item are the natural next threads.

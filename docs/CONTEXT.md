---
phase: 2
phase_name: Maintenance
updated: 2026-10-09
last_commit: 152d5b8
---

# Current Focus

README caught up with the 2026-10-04 template consolidation (Entry 2):
family block, mimeo provisioning, content-contract link; stale deploy
instruction fixed; superseded `gh-pages.yml.sample` deleted.

## Active Tasks

- [ ] Drop `audit=false` from `.npmrc` when eleventy 4 ships (DEC-006)

## Blockers

None.

## Context

- Tech counterpart to eleventy-prose-blog: Mermaid diagrams, Prism
  syntax highlighting, RSS, image optimization
- One of five mimeo templates; `content/` is portable across the four
  document templates (chapbook, pamphlet, prose-blog, tech-blog) under
  the content contract linked from the README
- Deploy: the shipped `.github/workflows/pages.yml` deploys on push to
  main (GitHub Pages, Node 24, `npm ci`); Netlify/Vercel configs are
  extras
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

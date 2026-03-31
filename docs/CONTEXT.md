---
phase: 1
updated: 2026-03-30
last_commit: (uncommitted — commit pending)
---

# Current Focus

Phase 1 (template family alignment) is complete. Next work is post list numbering polish and any remaining design review.

## Active Tasks

- [ ] **1.7** Review post list numbering display (currently counts up, not reversed)
- [ ] Design review: spot-check CSS on posts with footnotes, code blocks, mermaid

## Context

- Font swap to Typekit: change 2 `<link>` tags in `base.njk` (marked `<!-- fonts: -->`) + 3 CSS vars (`--font-body`, `--font-heading`, `--font-mono`) in `index.css`
- Metadata is now at `content/_data/metadata.js` — config uses `data: "_data"` (relative to `content/` input)
- CSS rebuilt from folio base — color variables follow folio pattern (`--color-bg`, `--color-text`, `--color-link`, etc.)
- Port: `--port=8088` (family uses 8082/8084/8086)
- `breaks: false` in markdown-it (matches template family)

## Next Session

Run `npm start` and spot-check posts visually. Fix post list numbering (should count down, not up). Consider what's needed for prose-blog template derivation.

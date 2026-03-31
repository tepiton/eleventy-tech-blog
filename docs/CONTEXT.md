---
phase: 1
updated: 2026-03-31
last_commit: (pending)
---

# Current Focus

CSS polish: fixing code block font size, measure consistency, and post list numbering.

## Active Tasks

- [x] **1.7** Post list numbering: counts down from total (fixed in postslist.njk + CSS counter)
- [x] **1.8** Measure: switched from `ch` to `rem` so header and body are same width
- [x] **1.9** Code block font size: higher-specificity `main pre[class*="language-"]` overrides Prism's 1em
- [ ] Visual verify: check fixes in browser

## Context

- Prism injects its CSS *after* index.css (per-page bundle), so specificity must beat `code[class*="language-"]` at `1em` — solved with `main pre[class*="language-"]`
- Measure is `min(90%, 40rem)` — rem-based so header/main/footer all same width
- Post counter: `counter-reset: postlist-counter var(--postlist-index)` + `counter-increment: postlist-counter -1`; `--postlist-index` set in postslist.njk to `postslistCounter or postslist.length` (removed old `+1`)
- Font swap to Typekit: 2 `<link>` tags in base.njk (marked `<!-- fonts: -->`) + 3 CSS vars

## Next Session

Verify CSS fixes visually. Then move to prose-blog template derivation or remaining design polish.

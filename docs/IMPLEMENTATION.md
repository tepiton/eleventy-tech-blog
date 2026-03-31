# Implementation: Template Family Alignment

## Phase Overview

| Phase | Name | Status |
|-------|------|--------|
| 0 | Pre-alignment baseline | Complete |
| 1 | Template alignment | Complete (pending review) |

---

## Phase 0: Pre-alignment baseline (Complete)

See: `chronicles/phase-0-baseline.md`

- Full dev blog built on Eleventy 3.x
- Posts with syntax highlighting, mermaid diagrams, footnote popovers, RSS feed
- Theme switching (light/dark/system)
- Google Fonts (Source Sans 3, JetBrains Mono) — not template-family-aligned
- Metadata at root `_data/` — not template-family-aligned
- CSS as a standalone 1300-line file with its own variable conventions
- Not aligned with eleventy-chapbook/folio/pamphlet conventions

---

## Phase 1: Template family alignment (In Progress)

**Objective**: Make pborenstein.dev a coherent member of the eleventy template family.

### Tasks

- [x] **1.1** Move `_data/metadata.js` → `content/_data/metadata.js`
- [x] **1.2** Update `eleventy.config.js`: remove `import metadata`, fix data dir, fix `breaks: true`
- [x] **1.3** Rebuild `css/index.css` from folio base + blog-specific additions
- [x] **1.4** Update `_includes/layouts/base.njk`: font links with comment block, footer simplification
- [x] **1.5** Add port `--port=8088` to `start` script in `package.json`
- [x] **1.6** Verify build passes: `npm run build` — 59 files, clean

### Key decisions in this phase

- DEC-001: Inter for body/heading fonts (not Typekit) — see DECISIONS.md
- DEC-002: CSS rebuilt from folio base — see DECISIONS.md
- DEC-003: Metadata moved to `content/_data/` — see DECISIONS.md

### Open items

- [ ] **1.7** Post list numbering: should count down (newest = highest number), not up
- [ ] Design review: footnotes, code blocks, mermaid on real posts

### What's next

- This repo becomes the basis for a prose-blog template
- Font swap is trivial: 2 `<link>` tags in `base.njk` + 3 CSS vars in `index.css`

# Implementation: Template Family Alignment

## Phase Overview

| Phase | Name | Status |
|-------|------|--------|
| 0 | Pre-alignment baseline | Complete |
| 1 | Template alignment | Complete |
| 2 | Maintenance | Complete |

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

## Phase 1: Template family alignment (Complete)

**Objective**: Make eleventy-tech-blog a coherent member of the eleventy template family.

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

- [x] **1.7** Post list numbering: counts down from total (postslist.njk + CSS counter)
- [x] **1.8** Measure: `min(90%, 40rem)` — rem-based, header/body same width
- [x] **1.9** Code block font size: `main pre[class*="language-"]` at `0.8em` beats Prism's 1em
- [x] Visual verify in browser
- [x] **1.10** Nav footer: remove bullets, shorten labels to "the past"/"the future"
- [x] **1.11** Site footer: New England flag, name left / place right, single border
- [x] **1.12** Body font: JetBrains Mono via Google Fonts
- [x] **1.13** Background: #eeede9 warm gray
- [x] **1.14** About nav title: capitalized via eleventyNavigation title field
- [x] **1.15** GitHub Pages deploy workflow added (`.github/workflows/pages.yml`), `package-lock.json` tracked for `npm ci`
- [x] **1.16** De-personalize template: generic metadata/package.json/base.njk, personal posts removed, `welcome.md` added — see DEC-005

### What's next

- This repo becomes the basis for a prose-blog template
- Font swap is trivial: 2 `<link>` tags in `base.njk` + 3 CSS vars in `index.css`

---

## Phase 2: Maintenance (2026-10-03)

See: `chronicles/phase-2-maintenance.md`

- [x] jsdom ^26 → ^30 (whatwg-encoding deprecation cleared; footnote
      filter verified on the new major)
- [x] Stale `sharp@0.33.5` allowScripts pin dropped (matches nothing —
      sharp 0.35.x has no install script)
- [x] `engines.node` → "^22.22.2 || ^24.15.0 || >=26.0.0"; `.nvmrc` 24
- [x] `.npmrc`: `fund=false` + `audit=false` (DEC-006)
- [x] Phase 1 relabeled Complete — all 17 tasks checked, none open
- [x] README aligned with the 2026-10-04 template consolidation
      (2026-10-09): family block + mimeo provisioning + content-contract
      link; deploy section now describes the shipped `pages.yml`;
      superseded `gh-pages.yml.sample` deleted

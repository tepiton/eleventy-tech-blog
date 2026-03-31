# Phase 1: Template family alignment

## Entry 1: Session start (2026-03-30)

**What**: Starting alignment of pborenstein.dev with eleventy template family conventions.

**Why**: The repo will serve as the basis for a prose-blog template. Needs to feel like a family member. Also establishes font-swap infrastructure for future Typekit use.

**Tasks this session**:
- [x] Move metadata.js to content/_data/
- [x] Update eleventy.config.js (data dir, import path, fix breaks: false)
- [x] Rebuild CSS from folio base
- [x] Update base.njk (fonts, footer)
- [x] Add port to package.json (--port=8088)
- [x] Verify build: 59 files, clean

**Result**: Full clean build. All phases complete.

---

## Entry 2: Phase 1 implementation complete (2026-03-30)

**What**: Completed all template family alignment tasks. Build passes cleanly: 59 files.

**Why**: pborenstein.dev needs to be a coherent member of the eleventy template family and serve as the basis for a future prose-blog template.

**How**:
- Moved `_data/` → `content/_data/` (metadata.js + eleventyDataSchema.js)
- `eleventy.config.js`: import path updated, data dir `"../_data"` → `"_data"`, `breaks: false`
- CSS rebuilt from eleventy-folio base (~346 lines) with blog additions (postlist, tags, footnotes, Prism, Mermaid, tables) — ~650 lines total
- `base.njk`: Google Fonts replaced with Inter + `<!-- fonts: -->` comment marker; footer simplified to `<p>{{ metadata.author.name }}</p>`
- `package.json`: `--port=8088` added to start script

**Decisions**: DEC-001, DEC-002, DEC-003, DEC-004 (see DECISIONS.md)

**Files**: `content/_data/`, `css/index.css`, `_includes/layouts/base.njk`, `eleventy.config.js`, `package.json`

**Decisions**: DEC-001 through DEC-004 in DECISIONS.md

# Phase 2: Maintenance

## Entry 1: npm 12 install hygiene (2026-10-03)

**What**: Fresh `npm install` is silent — no deprecation warning, no
funding notice, no audit block — and the tree carries no fixable
advisories.

**Why**: npm v12 (2026-07) blocks dependency install scripts by
default, and node 24 (CI's runtime) bundles it. jsdom@26 was the last
line of install noise via the deprecated whatwg-encoding.

**How**:

- jsdom ^26.0.0 → ^30.0.0 (html-encoding-sniffer 7 uses @exodus/bytes);
  the footnote filter runs on plain DOM APIs and was verified against
  the new major — 32 footnote refs in the built welcome post, Mermaid
  wiring intact
- Dropped the stale `sharp@0.33.5` allowScripts pin — sharp 0.35.x has
  no install script, so the pin matched nothing
- `engines.node` ">=18" → "^22.22.2 || ^24.15.0 || >=26.0.0" (img@7 and
  jsdom@30's real floors); `.nvmrc` 20 → 24
- `.npmrc`: `fund=false` + `audit=false` (see DEC-006)

Also: Phase 1 alignment was re-labeled Complete — all 17 tasks were
already checked, none open; the label had drifted.

**Decisions**: DEC-006.

**Files**: commit 3ce2f02

---

## Entry 2: README catches up with the template consolidation (2026-10-09)

**What**: README aligned with the 2026-10-04 consolidation: family
block (five sibling templates), mimeo provisioning snippet, and a
content-contract paragraph naming the four document templates
(chapbook, pamphlet, prose-blog, tech-blog). Deploy section fixed —
it told users to add a `pages.yml`, but the repo already ships one
(push to main deploys, Node 24, `npm ci`). Superseded
`gh-pages.yml.sample` deleted.

**Why**: The consolidation retired folio and synced `pages.yml` into
the blogs, but this README never caught up. Family block matches the
eleventy-product/eleventy-service convention.

**How**: Docs only; no code changed.

**Decisions**: None new — recorded here only; nothing added to
DECISIONS.md.

**Files**: commit 152d5b8

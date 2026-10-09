# Research: Static Delivery Refactor

**Feature**: `002-static-delivery-refactor`
**Produced**: 2026-05-05

All unknowns resolved from direct codebase inspection. No external research required.

---

## Decision 1 — Tailwind CSS version

**Decision**: Tailwind CSS v3 (latest stable 3.x).

**Rationale**: Every class in the existing HTML is v3 syntax (`bg-gray-800`, `text-gray-300`, `md:py-20`, etc.). The inline `tailwind.config` blocks use the v3 `theme.extend.colors` format. Migrating to v4 would require rewriting the configuration format and potentially adjusting class names — out of scope. v3 is the correct match for the existing codebase.

**Alternatives considered**:
- Tailwind CSS v4 (`@tailwindcss/vite` plugin) — rejected: v4 uses a CSS-first config format incompatible with the existing JS config blocks; would introduce unnecessary risk.
- Tailwind CSS standalone CLI (no Vite integration) — rejected: requires a separate build step and watch process outside Vite; Vite's PostCSS pipeline is simpler and already present.

---

## Decision 2 — CSS build integration approach

**Decision**: Vite + PostCSS + `tailwindcss` + `autoprefixer`.

This is the standard Tailwind v3 integration with Vite. It requires three new dev dependencies (`tailwindcss`, `postcss`, `autoprefixer`) and two new config files (`tailwind.config.js`, `postcss.config.js`). A single CSS input file (`src/style.css`) with the three `@tailwind` directives is processed by Vite's PostCSS pipeline and emitted as a bundled stylesheet referenced by all HTML pages.

**Rationale**: Vite already processes CSS files referenced by HTML entry points. Adding PostCSS with Tailwind is the idiomatic, well-documented path that requires no structural change to the existing Vite setup beyond config additions.

**Alternatives considered**:
- Import CSS from a JS module — rejected: would require adding `type="module"` to all `<script>` tags and restructuring the classic-script globals pattern; major scope creep.
- Pre-build a static `style.css` with the Tailwind CLI and commit it — rejected: the committed CSS would grow stale on every content change; the build must regenerate it.

---

## Decision 3 — Vite multi-page configuration

**Decision**: Configure `rollupOptions.input` in `vite.config.ts` to include all 12 source HTML files as entry points.

Vite treats each listed HTML file as an entry point, processes the `<link rel="stylesheet">` references found in each, and emits a correctly hashed CSS bundle alongside the HTML. Without this, Vite only processes `index.html` (the default), leaving the other 11 pages without a CSS reference in the production build.

**Rationale**: The project has 12 independent HTML pages, each needing the same stylesheet. Multi-page input is the standard Vite pattern for static multi-page sites. It does not require a framework or router.

**Alternatives considered**:
- Emit one CSS file and reference it with a relative path from each HTML page — rejected: Vite rewrites asset paths during production build; a consistent relative reference would break for pages in subdirectories (not currently a problem, but fragile).
- Use `vite-plugin-html` or similar — rejected: adds a dependency to solve a problem Vite already handles natively.

---

## Decision 4 — CSS input file location

**Decision**: `src/style.css` as the single Tailwind input file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Each HTML page's `<head>` gets `<link rel="stylesheet" href="/src/style.css">`. Vite resolves this during dev and replaces it with the hashed output path during production build.

**Rationale**: Co-locating the CSS entry point in `src/` separates it from the root-level HTML pages and is consistent with how other projects in the Vite ecosystem organise this. The path `/src/style.css` is unambiguous and the same reference works from every HTML page at the root level.

---

## Decision 5 — Tailwind content paths

**Decision**: The `content` array in `tailwind.config.js` must cover all HTML pages and all `js/*.js` files because Tailwind classes are generated in both.

```js
content: [
  './*.html',
  './_header.html',
  './_footer.html',
  './js/**/*.js',
]
```

**Rationale**: Tailwind's PurgeCSS step removes unused classes. Classes injected by JavaScript (`js/team.js`, `js/home.js`, `js/committee.js`, `js/main.js`) must be included in the scan or they will be purged in the production build, causing visual regressions.

**Alternatives considered**:
- Safelist all dynamic classes — rejected: brittle, requires manual maintenance on every JS change.
- Use `content: ['./**/*.{html,js}']` glob — acceptable but slightly broader than needed; the explicit list above is clearer about intent.

---

## Decision 6 — vite.config.ts cleanup

**Decision**: Replace the entire `vite.config.ts` content with a clean configuration covering: path alias `@` → root, `rollupOptions.input` for all 12 HTML pages, and the PostCSS-based CSS handling (implicit via Vite's default PostCSS detection from `postcss.config.js`).

Remove: `loadEnv`, `define` block, Gemini API key references.

**Rationale**: `loadEnv` and `define` exist solely to inject the Gemini API key into a TypeScript bundle. This project has no TypeScript entry point (empty `index.tsx` will be deleted) and no API key. The stale config misleads future contributors and may cause build warnings.

---

## Decision 7 — index.tsx deletion

**Decision**: Delete `index.tsx`. The file is empty, not referenced from any HTML page, and was created by the AI Studio template generator. It has no purpose in this project.

**Validation required**: Confirm `npm run build` succeeds after deletion before closing this task.

---

## No unknowns remain. All NEEDS CLARIFICATION resolved.

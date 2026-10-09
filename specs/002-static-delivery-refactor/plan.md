# Implementation Plan: Static Delivery Refactor

**Branch**: `002-static-delivery-refactor` | **Date**: 2026-05-05 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `specs/002-static-delivery-refactor/spec.md`

## Summary

Replace the CDN-loaded Tailwind CSS dependency with a locally-compiled stylesheet generated through Vite's PostCSS pipeline. Centralise the four club colour tokens in a single `tailwind.config.js`. Remove 12 duplicated inline `tailwind.config` blocks from every HTML page. Clean up stale toolchain artifacts (`vite.config.ts` Gemini references, empty `index.tsx`). Update documentation to reflect the resolved debt.

Technical approach (from `research.md`): Tailwind CSS v3 + PostCSS + autoprefixer, integrated via Vite's native CSS processing. Single input file `src/style.css`. All 12 HTML pages configured as Vite entry points so the production build emits the stylesheet correctly alongside each page.

## Technical Context

**Language/Version**: HTML5, CSS3, Vanilla JavaScript (ES2020). Node.js for build tooling.
**Primary Dependencies**: Tailwind CSS 3.x (new dev dep), PostCSS (new dev dep), autoprefixer (new dev dep), Vite 6.x (already installed).
**Storage**: N/A — static files only.
**Testing**: No automated test framework. Validation via `npm run build` + manual browser spot-check on 3 page types + grep assertions.
**Target Platform**: Any modern browser. Static file hosting (no server required).
**Project Type**: Static multi-page website.
**Performance Goals**: No regression in page load time. The compiled stylesheet will be smaller than the CDN version (PurgeCSS removes unused classes).
**Constraints**: Must preserve 100% visual equivalence with the CDN version. No changes to page content, navigation, or JavaScript behaviour.
**Scale/Scope**: 12 HTML pages, 2 shared partials, 4 JS files. Single developer.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Shared abstractions touched**: All 12 HTML `<head>` sections (CDN script + inline config block), `vite.config.ts`, `package.json`, `tailwind.config.js` (new), `postcss.config.js` (new), `src/style.css` (new). The four design tokens are the shared data being centralised.
- **Pattern decision**: The change extends the existing Vite toolchain by adding PostCSS processing — no new framework introduced. Adding `tailwindcss`, `postcss`, and `autoprefixer` as dev dependencies is justified because Tailwind is already in use; this is a delivery mechanism change, not a framework adoption.
- **Constitution Constraint III compliance**: The CDN dependency is the violation being *fixed* by this feature. Adding three build-time dev dependencies does not introduce any runtime CDN.
- **Cheapest validation**: `npm run build` clean exit + `grep -r "cdn.tailwindcss" *.html` returns zero matches + visual spot-check on `index.html`, `first-team.html`, and `committee.html`.
- **UX consistency risks**: None beyond regression risk. The CSS output from a correctly configured Tailwind v3 build with the same content paths must produce identical class coverage to the CDN version. All dynamic classes injected by JS files are covered by including `js/**/*.js` in `content` paths.
- **Documentation updates**: `project-context.md` (Known Issues table — Tailwind CDN row resolved), `constitution.md` (new Sync Impact Report noting debt cleared), `README.md` (add PostCSS/Tailwind to stack description).

**Gate status**: PASS — all principles satisfied.

## Project Structure

### Documentation (this feature)

```text
specs/002-static-delivery-refactor/
├── plan.md          # This file
├── research.md      # Phase 0 complete
└── tasks.md         # Phase 2 output (/speckit.tasks — not yet created)
```

*(No data-model.md or contracts/ — this is a toolchain/style refactor with no entities or external interfaces.)*

### Source Code changes

```text
(NEW)
tailwind.config.js            # Centralised Tailwind config — custom colours + content paths
postcss.config.js             # PostCSS pipeline — tailwindcss + autoprefixer
src/
  style.css                   # Tailwind CSS entry point (@tailwind base/components/utilities)

(MODIFIED)
vite.config.ts                # Remove Gemini config; add rollupOptions.input for all 12 pages
package.json                  # Add tailwindcss, postcss, autoprefixer as devDependencies
index.html                    # Replace CDN <script> + inline config with <link rel="stylesheet">
first-team.html               # Same as above
reserve-team.html             # Same as above
a-team.html                   # Same as above
b-team.html                   # Same as above
u11-team.html                 # Same as above
u12-team.html                 # Same as above
committee.html                # Same as above
safeguarding.html             # Same as above
codes-of-conduct.html         # Same as above
function-room.html            # Same as above
contact.html                  # Same as above

(DELETED)
index.tsx                     # Empty AI Studio artefact — no longer needed

(DOCUMENTATION)
.specify/memory/project-context.md    # Known Issues table updated
.specify/memory/constitution.md       # Sync Impact Report added
README.md                             # Stack description updated
```

**Structure Decision**: Single static-site project at repository root. No `src/` directory restructuring required beyond adding the `src/style.css` entry point. All HTML files remain at the repository root.

## Complexity Tracking

> No constitution violations. No complexity justification required.

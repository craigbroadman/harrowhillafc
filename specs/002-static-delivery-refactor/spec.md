# Feature Specification: Static Delivery Refactor

**Feature Branch**: `002-static-delivery-refactor`
**Created**: 2026-05-05
**Status**: Draft
**Input**: Refactor the static website to conform to project principles: no CDN-hosted runtime dependencies, vanilla JavaScript instead of framework additions, static-first delivery, and simple maintainable source structure, while preserving existing functionality and design.

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Visitor loads the site without internet access to the CDN (Priority: P1)

A supporter opens the Harrow Hill AFC website in an environment where `cdn.tailwindcss.com` is unavailable — for example, on a slow rural connection where the CDN times out, or in a venue with restricted outbound web access. Every page still loads with correct styling: club colours, layout, typography, and responsive behaviour are all intact because the styles are delivered from the same server as the HTML.

**Why this priority**: This is the direct user-facing consequence of the CDN dependency. It is also the core project principle at stake. Fixing it touches every page and unblocks production release.

**Independent Test**: Disable network access (or block `cdn.tailwindcss.com` using browser devtools network conditions) and open `index.html`, then `first-team.html`. Both pages should render with full styling — club-maroon header, gold headings, navy background — indistinguishable from the online version.

**Acceptance Scenarios**:

1. **Given** a visitor loads any page with CDN access blocked, **When** the page finishes loading, **Then** all Tailwind utility styles are applied correctly from a locally-served stylesheet, and no unstyled content is visible.
2. **Given** a developer opens any HTML page, **When** they inspect the `<head>`, **Then** there is no `<script src="https://cdn.tailwindcss.com">` tag and no inline `tailwind.config` block; a single local stylesheet `<link>` is present instead.
3. **Given** a developer views any two HTML pages, **When** they compare the `<head>` sections, **Then** the style delivery mechanism is identical across all pages — no page has a different CDN tag or a local stylesheet while others do not.

---

### User Story 2 — Developer updates a club colour token in one place (Priority: P2)

A developer needs to adjust a club colour — for example, updating `club-gold` for improved contrast. Currently this requires editing an inline `tailwind.config` block in all 12 HTML files. After this refactor, the developer makes a single change to the centralised colour configuration, runs the build, and the updated colour is reflected on every page.

**Why this priority**: The duplicated inline configuration blocks are the primary maintainability burden introduced by the CDN approach. Centralising them is the prerequisite for any future design change.

**Independent Test**: Find the definition of `club-gold` (#d4af37) in the project. Confirm it exists in exactly one place. Change its value, rebuild, and verify the new colour appears on both `index.html` and a team page without any other file edits.

**Acceptance Scenarios**:

1. **Given** the refactor is complete, **When** a developer searches the repository for the `club-maroon` colour value, **Then** it appears in exactly one configuration file, not in any HTML page.
2. **Given** a developer updates a custom colour token in the centralised configuration and rebuilds, **When** they open any page in a browser, **Then** the updated colour is reflected without any HTML file having been edited.
3. **Given** a developer opens any HTML page, **When** they inspect its `<head>`, **Then** there is no inline `tailwind.config` block anywhere on any page.

---

### User Story 3 — Developer clones the repository and immediately understands the toolchain (Priority: P3)

A new developer clones the repository and opens `vite.config.ts`. They see a clean, minimal Vite configuration relevant only to the Harrow Hill AFC website. There are no references to Gemini API keys, AI Studio, or unrelated projects. There is no empty `index.tsx` at the repository root suggesting an unused entry point. The repository root contains only files that serve a clear purpose for this project.

**Why this priority**: Stale toolchain artifacts actively mislead contributors about how the project works. Removing them is low-risk and zero-cost to maintain once done.

**Independent Test**: Clone the repository into a fresh directory. Open `vite.config.ts` — it should contain only configuration relevant to a static HTML site (path aliases, HTML entry points, or similar). Search the root directory for `index.tsx` — it should not exist. Run `npm run build` — it should succeed without warnings about unused API key environment variables.

**Acceptance Scenarios**:

1. **Given** a developer opens `vite.config.ts`, **When** they read it, **Then** there are no references to `GEMINI_API_KEY`, `API_KEY`, `loadEnv`, or any AI Studio configuration.
2. **Given** a developer lists the repository root, **When** they look for TypeScript entry files, **Then** `index.tsx` does not exist.
3. **Given** a developer runs the build after these changes, **When** the build completes, **Then** it exits successfully and produces no new errors or warnings beyond those present before this feature.

---

### Edge Cases

- How does the experience behave when shared content, assets, or structured data are missing or incomplete? The FA fixtures widget loads from `fulltime.thefa.com` — this is a permitted data integration and must remain untouched. The refactor MUST NOT affect it.
- What happens to navigation, layout, and copy on narrow mobile viewports and keyboard-only interaction paths? The visual output of the locally-delivered stylesheet MUST be identical to the CDN version for all viewport sizes. No layout or responsive behaviour change is acceptable.
- What happens if some pages are updated to use the local stylesheet but others are not? This is a partial migration state and is explicitly out of scope — all pages must be updated atomically in this feature.
- Does removing `index.tsx` affect the Vite build? Since the file is empty and not referenced anywhere, removing it has no build impact. This should be confirmed as part of the validation task.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: All 12 source HTML pages MUST load their Tailwind styles from a locally-served stylesheet instead of `https://cdn.tailwindcss.com`. No page may retain the CDN script tag after this feature is complete.
- **FR-002**: The four custom colour tokens (`club-maroon`, `club-blue`, `club-gold`, `club-navy`) MUST be defined in exactly one centralised location, not duplicated in any HTML page.
- **FR-003**: All 12 source HTML pages MUST have the inline `tailwind.config` block removed from their `<head>`.
- **FR-004**: The locally-delivered stylesheet MUST be generated or compiled from the same Tailwind configuration that defines the custom colour tokens, ensuring visual equivalence with the CDN version.
- **FR-005**: `vite.config.ts` MUST NOT contain any references to `GEMINI_API_KEY`, `API_KEY`, `loadEnv`, or any configuration unrelated to serving the Harrow Hill AFC static site.
- **FR-006**: `index.tsx` MUST be removed from the repository root.
- **FR-007**: The FA fixtures widget integration (`fulltime.thefa.com` dynamic script injection in `js/team.js`) MUST remain untouched. It is a permitted data integration exception per the project constitution.
- **FR-008**: All existing page functionality — header/footer injection, team tabs, committee grid, sponsor grids, navigation dropdowns — MUST continue to work identically after the refactor.

### Quality & Consistency Requirements

- **QR-001**: The shared colour token configuration is the primary shared asset affected. The implementation MUST update it in one place and propagate to all pages via the build, not by editing each HTML file individually.
- **QR-002**: Navigation, branding, responsive layout, and visual design MUST be verified as unchanged on at least three distinct page types: home (`index.html`), a team page (e.g. `first-team.html`), and a content page (e.g. `committee.html` or `contact.html`).
- **QR-003**: Validation MUST confirm the build succeeds cleanly, the local stylesheet contains all required utility classes (spot-check custom colour tokens), and no CDN reference remains in any source HTML file.
- **QR-004**: `project-context.md` and `constitution.md` both document the Tailwind CDN as pre-existing debt. Both documents MUST be updated to reflect that the debt has been resolved, and the "Known Issues" table in `project-context.md` MUST be updated accordingly.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Every source HTML page loads correctly with full club styling when `cdn.tailwindcss.com` is unreachable; zero pages show unstyled or partially styled content.
- **SC-002**: The custom colour tokens (`club-maroon`, `club-blue`, `club-gold`, `club-navy`) are defined in exactly one file in the repository, confirmed by a project-wide search.
- **SC-003**: A project-wide search for `cdn.tailwindcss.com` returns zero matches in any source HTML file.
- **SC-004**: A project-wide search for `GEMINI_API_KEY` returns zero matches in any file.
- **SC-005**: The site builds without errors and without new warnings compared to the pre-refactor baseline.
- **SC-006**: All four custom Tailwind colour tokens are present and correct in the locally-served stylesheet output, confirmed by inspecting the generated CSS.

---

## Assumptions

- The existing Vite toolchain is the correct vehicle for bundling the Tailwind stylesheet. No additional build tools need to be introduced; the toolchain change is internal to the existing `package.json` and `vite.config.ts`.
- The `dist/` directory currently contains a stale build output (`dist/index.html` still has the CDN tag). It is a build artefact and does not need to be manually updated — running a clean build will overwrite it.
- Removing `index.tsx` will not break the build or any page, as the file is empty and not referenced from any HTML page or script. This assumption must be confirmed as part of validation before the task is closed.
- The refactor does not change any page content, navigation structure, URL paths, or JavaScript behaviour. Any change to those areas is out of scope.
- Team pages other than `first-team.html` and the two additional spot-check pages will be assumed correct after the shared stylesheet and config are validated; exhaustive manual review of all 12 pages is not required.

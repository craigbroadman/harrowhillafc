---
description: "Task list for 002-static-delivery-refactor"
---

# Tasks: Static Delivery Refactor

**Input**: Design documents from `specs/002-static-delivery-refactor/`
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅

**Tests**: No automated test framework in this project. Every story includes explicit build and manual validation tasks.

**Organization**: Tasks grouped by user story. US1 (P1) is the MVP — the full local-stylesheet delivery. US2 and US3 follow as independent verifiable slices.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no blocking dependencies on incomplete tasks)
- **[Story]**: Maps to user story in spec.md (US1, US2, US3)

## Path Conventions

All files are at the repository root or immediately under it. No `backend/` or `frontend/` split.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Install the three new dev dependencies and create the three new config/entry files that all HTML pages will depend on. Nothing in this phase touches existing files.

- [x] T001 Install `tailwindcss`, `postcss`, and `autoprefixer` as devDependencies in `package.json`
- [x] T002 [P] Create `tailwind.config.js` — `content` paths covering `./*.html`, `./_header.html`, `./_footer.html`, `./js/**/*.js`; `theme.extend.colors` block with the four club tokens (`club-maroon: '#6a0e1a'`, `club-blue: '#a4c2de'`, `club-gold: '#d4af37'`, `club-navy: '#1a202c'`)
- [x] T003 [P] Create `postcss.config.js` — plugins: `tailwindcss` and `autoprefixer`
- [x] T004 [P] Create `src/style.css` — three `@tailwind` directives: `base`, `components`, `utilities`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Rewrite `vite.config.ts` so the build knows about all 12 HTML entry points and no longer injects Gemini API keys. This must be complete and build-verified before any HTML page is changed.

**⚠️ CRITICAL**: No US1 HTML work can begin until T005 and T006 are both complete.

- [x] T005 Rewrite `vite.config.ts` — remove `loadEnv`, `define` block, and all Gemini/API_KEY references; retain `path` alias `@` → repo root; add `build.rollupOptions.input` listing all 12 HTML files: `index.html`, `first-team.html`, `reserve-team.html`, `a-team.html`, `b-team.html`, `u11-team.html`, `u12-team.html`, `committee.html`, `safeguarding.html`, `codes-of-conduct.html`, `function-room.html`, `contact.html`
- [x] T006 Run `npm run build` and confirm it exits cleanly — this is the pre-HTML-change baseline; the CDN reference will still be in the HTML pages at this point but the new vite config must not introduce new errors

**Checkpoint**: Foundation ready — all 12 HTML pages can now be updated in parallel.

---

## Phase 3: User Story 1 — Local stylesheet delivery on all pages (Priority: P1) 🎯 MVP

**Goal**: Every HTML page loads Tailwind styles from the locally-compiled stylesheet. No page retains the CDN script tag or an inline `tailwind.config` block.

**Independent Test**: Block `cdn.tailwindcss.com` in browser devtools and open `index.html` and `first-team.html` — both should render with full club branding (maroon header, gold accents, navy background).

### Validation for User Story 1 ⚠️

- [x] T007 [P] [US1] Run `npm run build` after all HTML changes complete and confirm exit code 0 with no new errors
- [x] T008 [P] [US1] Run `grep -r "cdn.tailwindcss" *.html _header.html _footer.html` from the repository root and confirm zero matches
- [x] T009 [P] [US1] Run `grep -r "tailwind.config = " *.html` and confirm zero matches (no inline config blocks remain)
- [x] T010 [US1] Manual visual spot-check: open `index.html` in browser via `npm run dev` — confirm club-maroon header, club-gold headings, club-navy background, responsive layout on a narrow viewport

### Implementation for User Story 1

*All 12 HTML edits are independent (different files) and can be done in parallel. Each edit is identical: remove the `<script src="https://cdn.tailwindcss.com">` tag and the immediately following `<script>` block containing `tailwind.config = { ... }`, then add `<link rel="stylesheet" href="/src/style.css">` in their place.*

- [x] T011 [P] [US1] Replace CDN script + inline config block with `<link rel="stylesheet" href="/src/style.css">` in `index.html`
- [x] T012 [P] [US1] Same change in `first-team.html`
- [x] T013 [P] [US1] Same change in `reserve-team.html`
- [x] T014 [P] [US1] Same change in `a-team.html`
- [x] T015 [P] [US1] Same change in `b-team.html`
- [x] T016 [P] [US1] Same change in `u11-team.html`
- [x] T017 [P] [US1] Same change in `u12-team.html`
- [x] T018 [P] [US1] Same change in `committee.html`
- [x] T019 [P] [US1] Same change in `safeguarding.html`
- [x] T020 [P] [US1] Same change in `codes-of-conduct.html`
- [x] T021 [P] [US1] Same change in `function-room.html`
- [x] T022 [P] [US1] Same change in `contact.html`

**Checkpoint**: At this point US1 is fully functional. Every page loads styles locally. CDN is gone.

---

## Phase 4: User Story 2 — Single source for club colour tokens (Priority: P2)

**Goal**: Confirm the four custom colour tokens exist in exactly one place in the repository and that the compiled CSS output contains them.

**Independent Test**: Open `tailwind.config.js` — it should be the only file containing `#6a0e1a`. Search the whole project — no HTML page contains a `tailwind.config` block.

### Validation for User Story 2 ⚠️

- [x] T023 [US2] Run `grep -r "club-maroon\|6a0e1a\|d4af37\|a4c2de\|1a202c" *.html _header.html _footer.html` and confirm zero matches — tokens must not appear in any HTML page
- [x] T024 [US2] Inspect the compiled CSS in `dist/assets/*.css` and confirm it contains `.text-club-gold`, `.bg-club-maroon`, `.bg-club-navy`, and `.text-club-blue` (spot-check that custom tokens survived the PurgeCSS step)

**Checkpoint**: US2 complete. Colour tokens are centralised and verifiably present in the build output.

---

## Phase 5: User Story 3 — Clean toolchain (Priority: P3)

**Goal**: `vite.config.ts` contains no Gemini/AI Studio references. `index.tsx` does not exist at the repository root.

**Independent Test**: Open `vite.config.ts` — no mention of `GEMINI_API_KEY`, `loadEnv`, or `API_KEY`. List the root directory — no `index.tsx`.

### Validation for User Story 3 ⚠️

- [x] T025 [US3] Run `grep -r "GEMINI_API_KEY\|API_KEY\|loadEnv" vite.config.ts` and confirm zero matches
- [x] T026 [US3] Run `npm run build` after deleting `index.tsx` and confirm it exits cleanly — validates the deletion assumption from `research.md`

### Implementation for User Story 3

- [x] T027 [P] [US3] Delete `index.tsx` from the repository root

*(T005 in Phase 2 already handles the `vite.config.ts` cleanup — no additional implementation task required here.)*

**Checkpoint**: All three user stories independently complete and validated.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Final sweep — grep assertions, visual multi-page check, and doc verification.

- [x] T028 [P] Run full CDN audit: `grep -r "cdn\." *.html _header.html _footer.html` — only permitted match is comments; zero runtime CDN references
- [ ] T029 Manual visual spot-check of two additional pages via `npm run dev`: `first-team.html` (team tabs, FA widget present) and `committee.html` (committee grid renders correctly)
- [x] T030 [P] Verify `project-context.md` and `constitution.md` accurately reflect the completed state — these were pre-updated during planning; confirm no corrections needed after implementation
- [x] T031 Run `npm run build` one final time from a clean state and record that it exits with code 0 as the formal close-of-feature validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — T002, T003, T004 can run in parallel immediately; T001 must complete first (installs deps needed by config files)
- **Foundational (Phase 2)**: T005 depends on T001–T004 completing. T006 depends on T005.
- **US1 HTML edits (T011–T022)**: All depend on T006 (foundation verified). All 12 edits are parallel with each other.
- **US1 validation (T007–T010)**: Depend on T011–T022 all completing.
- **US2 (Phase 4)**: Depends on US1 completion (HTML pages must be clean before token centralisation can be verified).
- **US3 (Phase 5)**: T027 (delete index.tsx) can run any time after T005. T025–T026 depend on T027 and T005.
- **Polish (Phase N)**: Depends on all stories complete.

### Within Each User Story

- Validation and documentation updates before story completion
- Story complete before moving to next priority

### Parallel Opportunities

- T002, T003, T004 (Phase 1 config files) — parallel with each other after T001
- T011–T022 (the 12 HTML edits) — fully parallel with each other
- T007, T008, T009 (US1 grep validations) — parallel with each other after HTML edits complete
- T025, T028, T030 — parallel with each other in their respective phases

---

## Parallel Example: User Story 1 HTML Edits

```
# All 12 can be worked simultaneously — different files, identical change:
T011: index.html
T012: first-team.html
T013: reserve-team.html
T014: a-team.html
T015: b-team.html
T016: u11-team.html
T017: u12-team.html
T018: committee.html
T019: safeguarding.html
T020: codes-of-conduct.html
T021: function-room.html
T022: contact.html
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T004)
2. Complete Phase 2: Foundational (T005–T006)
3. Complete Phase 3: US1 HTML edits (T011–T022) + validation (T007–T010)
4. **STOP and VALIDATE**: CDN is gone, styles load locally
5. Site is already production-ready for Constitution constraint III at this point

### Incremental Delivery

1. Setup + Foundational → build pipeline ready
2. US1 complete → CDN removed, local CSS working (MVP, shippable)
3. US2 complete → colour tokens verifiably centralised
4. US3 complete → toolchain clean, no stale artefacts
5. Polish → final sign-off

---

## Notes

- [P] tasks = different files, no incomplete-task dependencies
- The 12 HTML edits (T011–T022) are the largest surface area but the most mechanical — every edit is identical
- `_header.html` and `_footer.html` do **not** contain `<head>` sections and do **not** need the stylesheet change
- The FA fixtures widget (`fulltime.thefa.com` in `js/team.js`) is untouched throughout — it is not part of this feature
- Always run the planned build and page-level validation before closing a story
- Commit after each phase or logical group

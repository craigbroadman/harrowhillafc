<!-- SPECKIT START -->
For additional context about technologies to be used, project structure,
shell commands, and other important information, read the current plan.

Read `.specify/memory/constitution.md` for governing principles.
Read `.specify/memory/project-context.md` for the full baseline description of what already exists.
<!-- SPECKIT END -->

## Project: Harrow Hill AFC Website

Static public website for Harrow Hill AFC. No backend, no authentication, no database.

**Stack**: Vanilla HTML + CSS + JavaScript. Tailwind utility classes (currently via CDN — migration to self-hosted required). Vite for dev/build tooling only.

**Key constraints** (see constitution for full detail):
- Vanilla-first: JavaScript/HTML/CSS only. Framework adoption requires written justification.
- All images live in `images/` in the repository. No external image hosts.
- No CDN dependencies at runtime. All assets must be self-hosted or bundled.
- Public site only — no auth, no sessions, no gated content.
- No backend database. All data (`window.TEAMS`, `window.COMMITTEE_MEMBERS`) is defined as JS constants in `js/main.js`.

**Shared patterns**:
- `_header.html` and `_footer.html` are fetched and injected by `js/main.js` at page load.
- All team pages are structurally identical; `data-team-id` on `#team-page-container` drives content via `js/team.js`.
- FA fixtures/results/table are loaded via a dynamic script injection to `fulltime.thefa.com` (permitted data integration exception).
- Design tokens: `club-maroon` (#6a0e1a), `club-blue` (#a4c2de), `club-gold` (#d4af37), `club-navy` (#1a202c).

**Known pre-existing debt** (do not introduce new instances):
- Tailwind currently loaded via CDN in every `<head>` — must be migrated before production release.
- `vite.config.ts` contains stale Gemini API references — clean up before publishing.
- `index.tsx` is empty — remove or populate before publishing.

**Build commands**: `npm run dev` · `npm run build` · `npm run preview`

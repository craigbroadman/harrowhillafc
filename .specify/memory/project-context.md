# Harrow Hill AFC Website — Project Context

> Baseline snapshot created: 2026-05-05  
> Purpose: Reference document for Spec Kit planning and task generation. Update this file whenever the project structure, data model, or shared patterns change.

## What the site is

Static public website for Harrow Hill AFC, a grassroots football club founded in 1932 in Gloucestershire. The site is informational only — no user accounts, no CMS, no server-side processing. Content is maintained by editing source files directly.

**Live audiences**: players, families, supporters, sponsors, and potential new members.

---

## Page Inventory

| File | Purpose | Scripts loaded |
|------|---------|---------------|
| `index.html` | Home — hero, about, history, teams overview, socials, sponsors | `js/main.js`, `js/home.js` |
| `first-team.html` | First team page | `js/main.js`, `js/team.js` |
| `reserve-team.html` | Reserve team page | `js/main.js`, `js/team.js` |
| `a-team.html` | A Team page | `js/main.js`, `js/team.js` |
| `b-team.html` | B Team page | `js/main.js`, `js/team.js` |
| `u12-team.html` | U12 youth team page | `js/main.js`, `js/team.js` |
| `u14-team.html` | U14 youth team page | `js/main.js`, `js/team.js` |
| `committee.html` | Committee members grid | `js/main.js`, `js/committee.js` |
| `safeguarding.html` | Safeguarding policy content | `js/main.js` |
| `codes-of-conduct.html` | FA codes of conduct (links to PDFs in `assets/`) | `js/main.js` |
| `function-room.html` | Function room hire information | `js/main.js` |
| `contact.html` | Contact details | `js/main.js` |
| `_header.html` | Shared header partial (loaded by `js/main.js` via fetch) | — |
| `_footer.html` | Shared footer partial — socials, sponsors grid, footer (loaded by `js/main.js` via fetch) | — |

---

## Data Architecture

All data lives as JavaScript constants on `window` in `js/main.js`. There is no external data source.

### `window.TEAMS` (array)

Each team object has:
```js
{
  id: string,           // e.g. 'firsts', 'reserves', 'a-team', 'b-team', 'u12', 'u14'
  name: string,
  type: 'senior' | 'youth',
  league: string,
  faFullTimeUrl?: string,
  manager: { name: string, photo: string },
  assistant?: { name: string, photo: string },
  kit: { home: string, away: string },
  training: { day: string, time: string, location: string },
  photos: string[],     // relative paths, e.g. 'images/teams/2025-26-1st-Team.png'
  sponsors: Array<{ name: string, logo: string }>,
  registrationInfo?: {  // present only on youth teams
    title: string,
    description: string,
    formLink: string    // Microsoft Forms URL
  }
}
```

**Current teams**: `firsts`, `reserves`, `a-team`, `b-team`, `u12`, `u14`

### `window.COMMITTEE_MEMBERS` (array)

```js
{
  name: string,
  role: string,
  isMainOfficial?: true   // only on key officials (Chairman, Treasurer, Welfare, Secretary)
}
```

---

## Shared Patterns

### Header & footer injection
`js/main.js` fetches `_header.html` and `_footer.html` on `DOMContentLoaded` and injects them into `#header-placeholder` and `#footer-placeholder` respectively. Navigation dropdowns are then populated dynamically from `window.TEAMS`.

### Team page pattern
Every team HTML page is identical except for `data-team-id` on `#team-page-container`. `js/team.js` reads that attribute, looks up the team in `window.TEAMS`, and renders the shared team layout including the direct FA Full-Time link.

### FA integration
Each team can expose a `faFullTimeUrl` in `window.TEAMS`. `js/team.js` renders a “Fixtures, Results & League Table” card linking out to `fulltime.thefa.com` instead of embedding the old widget tabs.

### Sponsors grid
The footer (`_footer.html`) contains `#sponsors-grid-platinum` and `#sponsors-grid-others`. `js/main.js` reads a `window.SPONSORS` array (defined in `main.js`) and populates both grids, splitting by a `tier` property.

---

## Design System

All styling uses **Tailwind CSS utility classes**. Tailwind is currently loaded from the CDN (`https://cdn.tailwindcss.com`) in every HTML `<head>` — this is a known violation of Constitution constraint III and must be resolved before any production release.

### Custom colour tokens (defined via `tailwind.config` inline script in each page)

| Token | Hex |
|-------|-----|
| `club-maroon` | `#6a0e1a` |
| `club-blue` | `#a4c2de` |
| `club-gold` | `#d4af37` |
| `club-navy` | `#1a202c` |

---

## Image Layout

```
images/
  crest.png                  # Club crest — used in header and hero
  the-fa-respect.png
  club/                      # Club-wide photography
  teams/
    person.png               # Placeholder for manager/player photos
    2025-26-1st-Team.png
    2025-26-Reserve-Team.png
    2025-26-Youth-U11s.jpg
  sponsors/                  # Sponsor logo files (PNG, named by sponsor slug)
```

---

## Static Assets

```
assets/
  Harrow-Hill-FC-We-Respect-the-Code-Poster.pdf
  Harrow-Hill-FC-Grassroots-Code-for-Adults-in-Youth-Football.pdf
  Harrow-Hill-FC-Grassroots-Code-For-Youth-Football.pdf
```

---

## Build / Toolchain

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite entry-point config — currently contains stale Gemini API references from an AI Studio template; should be cleaned up |
| `tsconfig.json` | TypeScript config for the Vite entry point |
| `index.tsx` | Empty — leftover from AI Studio template; unused |
| `package.json` | `npm run dev` (Vite dev server), `npm run build`, `npm run preview` |

> Note: Most HTML pages do NOT use ES modules. Their `<script>` tags load `js/*.js` as classic scripts (no `type="module"`). Vite warns about this at build time but the build still succeeds. If pages are ever migrated to modules, the shared scripts' reliance on `window.TEAMS` globals must be revisited.

---

## Known Issues / Pre-existing Debt

| Issue | Location | Priority |
|-------|----------|---------|
| Tailwind loaded via CDN (violates Constitution III) | All HTML `<head>` sections | High — must fix before production |
| Stale Gemini API config | `vite.config.ts` | Medium — clean up before publishing |
| Empty `index.tsx` | root | Low — remove or populate |
| Manager photos all use placeholder `person.png` | `window.TEAMS` entries | Low — replace with real photos when available |
| `GCS Cleaning` has no logo asset yet; sponsor rendering falls back to a text tile | `images/sponsors/`, `js/main.js`, `js/team.js` | Low — add the asset when available |

---

## External Dependencies (runtime)

| Service | Usage | Mandatory? |
|---------|-------|-----------|
| `fulltime.thefa.com` | Direct team links for fixtures, results, and league tables | Yes — no local alternative |
| `macronstoregloucester.com` | Club shop link (external URL only) | No — just a link |
| `facebook.com` | Social link in footer | No — just a link |
| `forms.office.com` | Youth registration forms | No — just a link |

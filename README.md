# Harrow Hill AFC Website

Static multi-page website for Harrow Hill AFC covering club information, adult and youth teams, committee details, safeguarding, codes of conduct, and sponsor content.

## Stack

- Static HTML pages at the repository root
- Shared browser scripts in `js/`
- Static assets in `images/` and `assets/`
- Vite and TypeScript for development tooling and bundled entry points

## Development

**Prerequisites:** Node.js

1. Install dependencies with `npm install`.
2. Start the local dev server with `npm run dev`.
3. Create a production build with `npm run build`.
4. Preview the production build with `npm run preview`.

## Repository Layout

- `_header.html` and `_footer.html` provide shared page chrome.
- `index.html` plus the other root HTML files provide page-specific content.
- `js/` contains shared client-side behavior.
- `images/` and `assets/` contain club media, sponsor media, and downloadable documents.
- `index.tsx`, `vite.config.ts`, and `tsconfig.json` define the toolchain entry points.

## Working Conventions

- Update shared templates or scripts before duplicating page-level markup or logic.
- Keep page titles, meta descriptions, navigation, and visual tokens consistent across affected pages.
- Run `npm run build` before merging changes.
- Keep repository documentation aligned with the actual workflow when tooling or structure changes.

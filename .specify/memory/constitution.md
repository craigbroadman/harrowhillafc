<!--
Sync Impact Report
Version change: 1.0.0 -> 1.1.0
Modified sections:
- Delivery Constraints: added tech-stack constraints (vanilla JS, local images, no CDNs, no auth, no backend DB)
Templates requiring updates:
- No template changes required for this patch
- ✅ .specify/memory/project-context.md (new - baseline codebase snapshot)
- ✅ .github/copilot-instructions.md (updated with project context)
Follow-up TODOs:
- Tailwind CSS is currently loaded via CDN in every HTML page (violates Constraint III below). Migrate to bundled/self-hosted before any production release.
- vite.config.ts contains stale Gemini API references from an AI Studio template. Clean up before publishing.
- index.tsx is empty. Remove or populate before publishing.
-->

<!--
Sync Impact Report
Version change: template -> 1.0.0
Modified principles:
- [PRINCIPLE_1_NAME] -> I. Code Quality Is a Release Gate
- [PRINCIPLE_2_NAME] -> II. Maintainability Through Shared Patterns
- [PRINCIPLE_3_NAME] -> III. Validation Before Merge
- [PRINCIPLE_4_NAME] -> IV. User Experience Consistency Across Pages
- [PRINCIPLE_5_NAME] -> V. Documentation Must Match Reality
Added sections:
- Delivery Constraints
- Workflow & Review
Removed sections:
- None
Templates requiring updates:
- ✅ .specify/templates/plan-template.md
- ✅ .specify/templates/spec-template.md
- ✅ .specify/templates/tasks-template.md
- ⚠ .specify/templates/commands/*.md (directory not present; no update required)
- ✅ README.md
Follow-up TODOs:
- None
-->

# Harrow Hill AFC Website Constitution

## Core Principles

### I. Code Quality Is a Release Gate
Every change MUST leave touched files clearer, internally consistent, and free of known build-breaking defects. New duplication, dead code, placeholder copy, and untyped complexity in areas that already use TypeScript MUST be removed or explicitly justified in the implementation plan or review notes. Rationale: this site mixes static HTML, shared JavaScript, and Vite-managed TypeScript, so low-quality changes spread quickly across many pages.

### II. Maintainability Through Shared Patterns
Shared navigation, footer content, metadata patterns, team data handling, design tokens, and reusable scripts MUST be updated at their owning abstraction before page-level duplication is introduced. New libraries, page-specific conventions, or alternate content structures MUST include a written reason showing why an existing shared pattern could not be extended. Rationale: maintainability in a small web repository depends on reducing repeated edits across many club pages.

### III. Validation Before Merge
Every change MUST include the cheapest validation that can falsify it, chosen from targeted script execution, manual page verification, automated test coverage, and production build validation as applicable. A change is incomplete until the relevant validation passes or a concrete blocker is documented with owner and follow-up action. Rationale: most regressions in this project are inexpensive to detect when validation is chosen deliberately and run immediately after the change.

### IV. User Experience Consistency Across Pages
Equivalent content and interactions MUST use consistent naming, navigation order, metadata, visual tokens, responsive behavior, and accessible semantics across the site. New pages or sections MUST match the club's established information architecture unless a deliberate redesign is approved and documented. Rationale: visitors rely on predictable navigation and presentation more than on page-by-page novelty, especially for team, safeguarding, and club information.

### V. Documentation Must Match Reality
Developer guidance, setup instructions, and content maintenance notes affected by a change MUST be updated in the same change. The repository MUST not retain misleading workflow documentation, stale setup instructions, or undocumented manual steps for touched areas. Rationale: maintainability breaks down when the documented workflow diverges from the actual site structure and toolchain.

## Delivery Constraints

- Prefer the existing static-site architecture: HTML pages at the repository root, shared browser scripts under `js/`, static assets under `images/` and `assets/`, and Vite-managed TypeScript only where it already owns the build workflow.
- Keep club-facing copy factual, concise, and suitable for players, families, volunteers, and sponsors; placeholder or speculative content MUST not be shipped.
- Favor incremental edits over wide rewrites. URL changes, navigation changes, or content model changes MUST be explicitly scoped and validated across all affected pages.
- Responsive behavior, keyboard accessibility, meaningful page titles, and accurate meta descriptions are default requirements for every touched page.

### Tech Stack Constraints

**I. Vanilla-first**: Use vanilla HTML, CSS, and JavaScript as the default. Adopting a framework, library, or build-tool extension requires a written justification in the plan showing why a vanilla approach is insufficient.

**II. Images in source**: All images MUST be committed to the repository under `images/` (with appropriate subdirectory). External image hosting is not permitted.

**III. No CDNs or pre-release versions**: All static assets — styles, scripts, fonts — MUST be self-hosted or bundled, never loaded from a CDN at runtime. Pre-release (alpha/beta/rc) package versions MUST NOT be introduced. *Exception*: the FA fixtures widget (`fulltime.thefa.com`) is a third-party data integration; it is permitted as a runtime-loaded data source, not a framework or style dependency.

**IV. No authentication**: This is a public-facing site. No login, session, token, or user identity mechanism may be added. If gated content is ever needed, it must be implemented as a separate system outside this repository.

**V. No backend database**: All data is defined as JavaScript constants in `js/main.js` (`window.TEAMS`, `window.COMMITTEE_MEMBERS`) and served as static files. Changes to club data require editing those constants directly. No server-side data store, API, or dynamic data layer may be introduced.

## Workflow & Review

- Plans and specifications MUST identify affected shared assets, shared templates, page groups, and any user experience consistency risks before implementation starts.
- Tasks MUST include validation work and documentation updates for each independently deliverable slice, not only code or content edits.
- Reviews MUST verify build status, broken links or assets, duplicate logic, responsive regressions, and consistency of navigation, metadata, and accessible semantics across affected pages.
- Any exception to a principle MUST be documented in Complexity Tracking, review notes, or equivalent delivery records, including why the exception is needed and when it will be removed or revisited.

## Governance

This constitution supersedes conflicting local process notes for planning, implementation, and review within this repository. Amendments require the constitution file to be updated together with any impacted templates or guidance documents, and each amendment MUST include a Sync Impact Report at the top of the file.

Versioning follows semantic versioning for governance: MAJOR for removing or materially redefining a principle, MINOR for adding a principle or materially expanding an enforceable requirement, and PATCH for clarifications that do not change expected behavior. Compliance review is required during planning, task generation, implementation review, and final validation for any change that affects code, content, or user-facing behavior.

**Version**: 1.1.0 | **Ratified**: 2026-05-05 | **Last Amended**: 2026-05-05

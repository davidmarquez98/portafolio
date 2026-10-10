# AGENTS.md — David Marquez Portfolio

## Purpose and factual content

This is a bilingual (EN/ES) portfolio for David Marquez, focused on international remote Software Engineer, Backend Engineer, and Java Engineer opportunities.

Do not invent professional achievements, technologies, employers, metrics, dates, education, project results, or public artifacts. Treat `docs/content.md` as the source of truth for professional claims. Do not expose confidential employer information, internal names, endpoints, repositories, client data, architecture secrets, credentials, or private business logic.

## Minimum context

Do **not** read all docs, all skills, all `.sdd/` files, or all source code by default. Load only:

1. this file;
2. affected code;
3. relevant skill(s);
4. relevant stable documentation; and
5. active change artifacts, when a Medium or Large change has them.

Use `docs/` for current product truth and `.sdd/` for workflow, current implementation decisions, and active change artifacts. See `.sdd/config.yaml` for the change-level policy.

## Classify and route work

Classify each scoped task before implementing it.

| Level | Typical scope | Required flow |
| --- | --- | --- |
| Small | Copy, CSS, spacing, color, typo, favicon, simple rename, isolated visual bug | Inspect → implement → smallest meaningful validation. No `.sdd/changes/` artifact by default. |
| Medium | New component, one-section redesign, filter, localized refactor, meaningful UI behavior, responsive feature work | Proposal → tasks → implement → verify. Create `.sdd/changes/<change-name>/`. |
| Large | CMS, authentication, admin area, important backend, major integration, architectural migration, structural refactor | Proposal → specs → design → tasks → implement → verify → document. Create `.sdd/changes/<change-name>/`. |

Route UI, CSS, components, responsive work, and visual UX to `frontend` and `qa`. Load `docs/design-system.md` and `docs/responsive-spec.md` only when visual or responsive decisions are affected. Route localization, routes, theme, SEO, or application structure to `frontend` and `qa`; load `docs/architecture.md` when the change affects those boundaries. Load `docs/content.md` for professional content or translation changes. Load `docs/product-requirements.md` when scope or product behavior is in question.

## Verification

Use proportional validation. Small changes require the smallest meaningful check; run lint, typecheck, or targeted tests when relevant or inexpensive enough to add useful confidence. Medium changes normally run lint and typecheck, then build and tests according to affected behavior. Large changes receive complete validation appropriate to their architectural risk.

Check responsive behavior, keyboard navigation, visible focus states, contrast, localization, and reduced motion when the change can affect them. Do not mark an implementation complete while required checks for its scope are failing.

## Architecture and safety invariants

- Preserve TypeScript strictness, semantic HTML, WCAG AA intent, and mobile-first implementation.
- Prefer Server Components; add Client Components only for browser interaction.
- Preserve the existing `next-intl` route and message/content boundaries.
- Avoid unnecessary dependencies and visual effects that harm readability, performance, or accessibility.
- Do not add fake testimonials, clients, projects, statistics, GitHub activity, skill percentages, fake terminals, particles, or decorative 3D effects.
- Implement one scoped task at a time; do not redesign unrelated sections.
- Before modifying Next.js application code, read the relevant current guide in `node_modules/next/dist/docs/`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

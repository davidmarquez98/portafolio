# AGENTS.md — David Marquez Portfolio

## Project purpose
Build a bilingual (EN/ES), minimalist, professional, aesthetic portfolio for David Marquez, a Software Engineer focused on backend engineering, distributed systems, cloud-native architectures, and modern web development.

Primary business goal: support international remote job applications, especially for Software Engineer / Backend Engineer / Java Engineer roles.

## Source of truth
Before coding, read these files in order:
1. `docs/product-requirements.md`
2. `docs/content.md`
3. `docs/design-system.md`
4. `docs/responsive-spec.md`
5. `docs/architecture.md`

Do not invent professional achievements, technologies, employers, metrics, dates, education, or project results that are not present in `docs/content.md`.

## Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- next-intl for i18n
- Motion / Framer Motion only where it improves clarity or polish
- Lucide icons
- Vercel for deployment

## Engineering rules
- TypeScript strict mode.
- Prefer Server Components unless interactivity requires Client Components.
- Keep components small and reusable.
- Avoid unnecessary dependencies.
- Semantic HTML first.
- WCAG AA accessibility target.
- Mobile-first responsive implementation.
- Respect `prefers-reduced-motion`.
- No visual effects that harm readability, performance, or accessibility.
- No skill percentage bars.
- No fake terminals, matrix effects, particle backgrounds, 3D gimmicks, or decorative animations without purpose.
- No fake testimonials, fake clients, fake projects, fake statistics, or fake GitHub activity.
- Never expose confidential employer information, internal names, endpoints, repositories, client data, architecture secrets, credentials, or private business logic.

## Quality gates
After every meaningful implementation task:
1. Run lint.
2. Run typecheck.
3. Run build.
4. Check responsive behavior at mobile, tablet, and desktop sizes.
5. Check keyboard navigation and visible focus states.
6. Check color contrast.
7. Check reduced-motion behavior if animations were added.

Do not mark a task complete while lint, typecheck, or build fails.

## Delivery workflow
Implement one scoped task at a time. Do not redesign unrelated sections while completing a ticket.

Recommended sequence:
1. Project setup
2. Internationalization infrastructure
3. Light and dark semantic design tokens
4. Navbar
5. Hero
6. About
7. Experience
8. Selected Work
9. Expertise
10. Secondary education information
11. Contact / Footer
12. Theme controls
13. Motion polish, only if justified
14. Responsive audit
15. Accessibility audit
16. SEO / Open Graph
17. Performance audit
18. Deploy

## Definition of done
A section is done when:
- It matches the written requirements.
- Content is accurate.
- It works in EN and ES when translations are available.
- It is responsive.
- It is keyboard accessible.
- It does not introduce unnecessary layout shift.
- It builds successfully.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

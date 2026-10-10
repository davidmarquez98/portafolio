# Project overview

## Purpose

David Marquez's bilingual portfolio presents backend and distributed-systems experience to international remote software engineering opportunities. Product scope and professional claims are maintained in [the product requirements](../docs/product-requirements.md) and [content source of truth](../docs/content.md).

## Current product

The homepage currently includes navigation, hero, about, experience, expertise, education, contact, and footer. Selected Work is implemented as an explicit state and is currently hidden until a real public project is intentionally published.

## Implementation model

- Next.js App Router with TypeScript and Tailwind CSS.
- English is served at `/`; Spanish is served at `/es` through `next-intl`.
- Localized prose is in `messages/`; stable structures and availability flags are in `src/content/`.
- Server Components are the default; browser-only interaction uses Client Components.
- Light and dark semantic theme tokens live in `src/app/globals.css`.

For detailed architecture, visual direction, and responsive requirements, use [architecture](../docs/architecture.md), [design system](../docs/design-system.md), and [responsive specification](../docs/responsive-spec.md).

## Quality model

The repository has Playwright coverage for routes, sections, interaction and focus behavior, theme behavior, resumes, responsive overflow, SEO, and automated accessibility checks. Select validation proportionally through the `qa` skill and `.sdd/config.yaml`.

## Deployment and SEO

`NEXT_PUBLIC_SITE_URL` is optional and enables absolute production URL metadata when configured. The repository contains a GitHub remote and documents a Vercel deployment model; a live Vercel connection, deployment status, and production URL were not confirmed locally.

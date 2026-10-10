# Publish Alisados Maca

## Context

Selected Work is currently hidden through the portfolio's existing availability/state mechanism. Alisados Maca is a live, public booking and payments platform built from scratch by David for a real beauty business and is appropriate to become the portfolio's first published work item.

## Problem

The portfolio currently has no visible project that demonstrates David's full-stack delivery experience. Its existing Work navigation item and hero CTA remain unavailable while Selected Work is hidden.

## Goal

Publish one truthful, bilingual Selected Work entry for Alisados Maca at `https://alisados-maca.vercel.app/`. Present the project's customer value, role, production status, concise stack, and up to four technical highlights without unsupported scale, performance, or business claims.

## Non-goals

- Do not add screenshots, a logo wall, metrics, testimonials, or decorative browser chrome.
- Do not redesign existing portfolio sections or introduce a new visual system.
- Do not add dependencies, backend services, portfolio authentication, or CMS behavior.
- Do not claim an automated test suite for Alisados Maca.
- Do not publish the previously proposed Distributed Payment Platform.

## Verified content

- **Name:** Alisados Maca
- **English subtitle:** Booking & Payments Platform
- **Spanish subtitle:** Plataforma de Turnos y Pagos
- **Role:** Sole Developer / Desarrollador único
- **Status:** Live / Production; used by real customers
- **Public URL:** `https://alisados-maca.vercel.app/`
- **Customer value:** replaces manual WhatsApp scheduling with online reservations, availability management, and Mercado Pago deposits.
- **Visible stack:** Next.js · TypeScript · PostgreSQL · Supabase · Mercado Pago · Vercel

English description:

> A full-stack booking and payment platform built for a real beauty business, replacing manual WhatsApp scheduling with online reservations, availability management and Mercado Pago deposits.

Spanish description:

> Plataforma full-stack de reservas y pagos desarrollada para un negocio real, reemplazando la gestión manual de turnos por WhatsApp con reservas online, gestión de disponibilidad y pagos de seña mediante Mercado Pago.

The project should describe the customer-flow challenge (manual availability, scheduling, and deposit verification) and the solution (centralized availability, reservations, clients, and deposit payments with server-side booking and payment-state validation).

Use no more than four concise highlights:

1. Availability, schedule blocking, reservation lifecycle, 30-minute holds, and database-level double-booking protection.
2. Mercado Pago Orders API, idempotency, signed webhooks, and server-side payment verification.
3. Supabase Auth, protected administration, and client/booking management.
4. Production deployment on Vercel for a real customer business.

## Proposed user-visible structure

Add a semantic `Selected Work` section after Experience and before Expertise. Use the established editorial layout: section label, `01` index, project title and subtitle, concise description, restrained role/status/stack metadata, and one external “View live project” action.

Place the optional Challenge / Solution and Technical Highlights below the primary project summary, using ordinary text and list structure rather than badges, technology dumps, or visual effects. The section must stand on typography, whitespace, and dividers; it must not require screenshots.

## Navigation impact

Move Selected Work from hidden to published through the existing state/availability model. This enables the existing `#work` item in desktop and mobile navigation and restores the existing hero Work CTA. All targets must resolve to the new semantic section.

## Internationalization impact

Add equivalent English and Spanish translation content through the existing `next-intl` message files. Keep stable project structure, state, stack names, and availability in `src/content/`; do not duplicate section markup across locales.

## Responsive and accessibility expectations

- Use a level-two section heading and preserve document heading order.
- Make the live-project link keyboard accessible, visibly focused, and safely open in a new tab.
- Preserve WCAG AA-oriented contrast, touch targets, reduced-motion behavior, and no-horizontal-overflow behavior.
- Present content in a single readable mobile column; use the established desktop grid only when it improves hierarchy.

## Testing impact

Update targeted Playwright coverage for both locales to assert visible project content, the live external link and safe new-tab attributes, enabled hero/navigation Work targets, and absence of unsupported claims. Update responsive overflow and accessibility coverage to include the published section through the existing routes and viewport matrix.

## Risks

- Overstating customer usage, scale, performance, or external-project validation beyond verified facts.
- Letting a dense technical description disrupt the portfolio's restrained visual language.
- Enabling Work navigation before its fragment target is rendered.
- Creating locale drift between English and Spanish content.

## Open questions

None. Screenshots are intentionally out of scope and are not needed to publish this first version.

---
name: frontend
description: Implement portfolio UI, component, styling, localization-boundary, and responsive changes while preserving the existing application architecture.
---

# Frontend

Inspect the affected implementation before creating or changing components. Preserve the App Router, localization, and content boundaries already in use; reuse a component only when it makes the result clearer or more maintainable.

Build mobile-first with semantic HTML, accessible controls, visible focus behavior, and responsive layouts. Keep visual work consistent with existing semantic tokens and component patterns. Consult `docs/design-system.md` and `docs/responsive-spec.md` only when the task affects those concerns.

Avoid unnecessary dependencies and CSS workarounds that conceal structural issues. Respect `prefers-reduced-motion` when motion or transitions are affected. Preserve Server/Client Component boundaries, adding client-side code only for browser interaction.

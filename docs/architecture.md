# Frontend Architecture

## Framework and rendering model

- Next.js App Router with TypeScript strict mode.
- Tailwind CSS for styling.
- `next-intl` for internationalization.
- Static generation for all public pages.
- Server Components by default.
- Client Components only for browser interaction such as the mobile menu, language switcher, and theme switcher.
- No API routes, database, CMS, authentication, or runtime content fetching in v1.

## Initial project foundation

Internationalization and both light and dark semantic design tokens are part of initial project setup. They must not be deferred until after homepage sections are built.

The initial foundation includes configuration, localized routing, theme infrastructure, semantic tokens, empty localized page shells, and minimal smoke tests. It does not include the Navbar, Hero, About, Experience, Expertise, Contact, or final visual design.

## Authoritative structure

```text
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
    globals.css
    robots.ts
    sitemap.ts
  components/
    layout/
    sections/
    ui/
    visuals/
  content/
    selected-work.ts
  i18n/
    navigation.ts
    request.ts
    routing.ts
  providers/
    theme-provider.tsx
  lib/
    site-url.ts
  proxy.ts
messages/
  en.json
  es.json
public/
  images/
  resume/
tests/
  accessibility.spec.ts
  locale.spec.ts
```

Folders may contain `.gitkeep` placeholders until their approved implementation task begins. Do not create the technology-flow visualization during foundation work; it will be designed later.

## Content model

Use `content/`, not `data/`, for typed, locale-independent content structure and verified facts. Localized prose belongs in `messages/en.json` and `messages/es.json`.

Professional experience should be data-driven rather than repeated across components. Stable IDs, ordering, technology names, availability flags, and verified metric values may live in typed content modules. Summaries, highlights, labels, and other localized prose belong in translation messages.

Translations must not duplicate structural React logic. Missing professional information must never be inferred or invented.

## Internationalization

- Internationalization is part of initial project setup.
- English is the default locale and is served at `/`.
- Spanish is served at `/es`.
- Use `next-intl` locale-based routing with `localePrefix: 'as-needed'`.
- Set `localeDetection: false` so `/` remains predictably English and locale changes are explicit.
- Generate all supported locale pages statically.
- Use stable, non-localized section fragment IDs while translating their visible labels.
- Localized metadata must provide canonical and language-alternate URLs when a production site URL is available.

## Theme

- Define both light and dark semantic CSS custom properties during initial setup.
- Light remains the primary visual direction.
- Use a theme provider and a root HTML attribute to support light, dark, and system preferences without a flash of the wrong theme.
- Avoid raw color values scattered through components.
- Theme controls are Client Components because they require browser state. Theme-independent layouts remain Server Components.

## Selected Work state

Selected Work uses an explicit state:

```ts
type SelectedWorkState = 'hidden' | 'building' | 'published';
```

The initial state is `hidden`. Do not create or display a project that does not exist. A project may be moved to `building` or `published` only after its content is truthful and approved; `published` also requires a real public artifact.

## Education

Education is not a standalone homepage section in v1. Education content may exist as typed data and may later be presented as secondary information within another appropriate area.

## Resume availability

Resume calls to action must render only when the corresponding locale PDF actually exists. Do not create placeholder PDFs or imply that a translated resume is available.

## Motion

- Do not install Motion during initial setup.
- Prefer CSS transitions for simple hover and focus states.
- Add Motion later only if a reviewed interaction meaningfully benefits from it.
- Always honor `prefers-reduced-motion`.

## SEO

Prepare the architecture for localized titles and descriptions, canonical metadata, language alternates, Open Graph, Twitter/X cards, sitemap, robots, semantic headings, and accurate Person structured data if later implemented.

`NEXT_PUBLIC_SITE_URL` is optional until a production domain exists. Do not invent or hardcode a production hostname. Canonical URLs and other absolute production URLs must be emitted only when a real site URL is configured.

## Performance

- Statically generate both locale pages.
- Keep client-side JavaScript limited to interaction boundaries.
- Optimize approved images with Next Image.
- Use framework font optimization.
- Avoid unnecessary third-party scripts and dependencies.

## Dependencies

Approved runtime dependencies beyond Next.js and React:

- `next-intl`
- `next-themes`
- `lucide-react`

Approved additional development dependencies:

- Playwright (`@playwright/test`)
- `@axe-core/playwright`

Do not install Motion, a component library, CMS, form library, state-management library, analytics, `clsx`, or `tailwind-merge` during initial setup.

## Testing and quality checks

Required scripts:

- `dev`
- `lint`
- `typecheck`
- `build`
- `test`
- `check`

The initial Playwright suite contains only a basic locale smoke test and a basic automated accessibility smoke test. Expand interaction and responsive coverage as features are implemented.

After each meaningful implementation task, run lint, typecheck, production build, and relevant tests. Manual responsive, keyboard, focus, contrast, and reduced-motion checks remain required when applicable.

## Deployment

- GitHub repository connected to Vercel.
- Pull requests receive preview deployments.
- The production branch deploys to production after quality checks pass.
- No production hostname is assumed before a real custom domain is available.
- Vercel Analytics remains optional and must not be installed unless requested after deployment.

GitHub Pages is not the preferred deployment target for this Next.js architecture.

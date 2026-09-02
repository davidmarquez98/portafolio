# David Marquez Portfolio

Bilingual portfolio foundation built with Next.js App Router, TypeScript, Tailwind CSS, and `next-intl`.

The portfolio sections are intentionally not implemented yet. Product, content, responsive, design-system, and architecture decisions live in `docs/`.

## Requirements

- Node.js 24 LTS
- npm

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm test
npm run check
```

Playwright requires Chromium to be installed once:

```bash
npx playwright install chromium
```

## Routes

- English: `/`
- Spanish: `/es`

## Environment

`NEXT_PUBLIC_SITE_URL` is optional. Set it to the real production origin only after a production domain exists. Until then, canonical URLs and sitemap entries that require an absolute production URL are omitted.

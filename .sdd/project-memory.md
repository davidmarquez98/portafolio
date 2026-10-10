# Project memory

Keep only current implementation decisions that materially affect future work. Replace obsolete entries when the implementation changes; this file is not an append-only history.

- English is the default locale at `/`; Spanish is at `/es`; locale detection is disabled.
- Localized prose lives in `messages/`.
- Stable structures and availability flags live in `src/content/`.
- Selected Work is hidden until a real project is intentionally published.
- Localized résumé PDFs must remain tied to real files.
- Semantic theme tokens are centralized in `src/app/globals.css`.
- Prefer Server Components; add Client Components only for browser interaction.
- `NEXT_PUBLIC_SITE_URL` must never be invented.

# Design System

## Visual direction
Keywords:
- Minimal
- Professional
- Aesthetic
- Editorial
- Calm
- Premium technology
- High whitespace

Reference mood:
- Abhi Code Studio
- Holden Casey
- Tamal Sen
- Magic UI portfolio
- Clean portfolio layouts with restrained motion and typography-led composition

Do not copy any reference site directly.

## Layout
- Content max width: approximately 1200–1280px.
- Generous horizontal padding.
- Large vertical spacing between major sections.
- Use a clear grid on desktop.
- Avoid dense dashboard-like layouts.

## Theme
Primary theme: light.
Secondary theme: dark.

Suggested light direction:
- Page background: warm/off-white neutral.
- Surface: white or very light neutral.
- Primary text: near-black / charcoal.
- Secondary text: medium neutral gray.
- Borders: subtle low-contrast gray.
- Accent: one restrained desaturated blue or blue-gray.

Do not hardcode the exact colors until the first visual implementation is reviewed.
Use CSS variables / Tailwind theme tokens.

## Typography
Preferred direction:
- Geist, Inter, or Manrope for main UI/body.
- One main type family is enough for v1.
- Large display typography for hero.
- Tight but readable heading line-height.
- Comfortable paragraph width (roughly 55–75 characters).

## Shape language
- Moderate border radius.
- Thin borders.
- Shadows minimal or absent.
- No glassmorphism overload.
- No neon glow.

## Motion
Motion must feel subtle and deliberate.
Allowed:
- small opacity / translate reveals
- soft card hover transitions
- subtle navigation transitions
- architecture-diagram reveal
- tasteful link underline motion

Avoid:
- cursor followers
- particles
- large parallax
- long page-load animation
- continuous distracting loops
- scroll hijacking

Always honor `prefers-reduced-motion`.

## Hero
- Text dominates over photo.
- Photo is secondary.
- Strong headline with large whitespace.
- Two CTAs maximum.
- Availability indicator should be subtle, not bright neon.

## Photography
If used:
- natural portrait
- neutral background
- soft lighting
- professional but not overly corporate
- crop around head/upper torso
- understated treatment, optionally grayscale

Do not use the résumé headshot as the final aesthetic target unless no newer photo is available.

## Experience cards
- Current role can have slightly stronger emphasis.
- Metrics should use oversized typography.
- Tech tags should be compact and secondary.
- Expanded detail should remain readable, not become a wall of text.

## Architecture visuals
Use simple SVG/CSS diagrams.
- Monochrome or low-saturation.
- Clear labels.
- Minimal arrows and boxes.
- No fake complexity.
- Include a disclosure if based on professional experience: generic representation only.

## Buttons
Primary:
- solid or high-contrast neutral
- concise label

Secondary:
- outline or text button

Focus states must be visible.

## Icons
Use Lucide sparingly.
Do not add an icon to every label.

## Dark mode
Dark mode should preserve the same calm aesthetic:
- charcoal background rather than pure black where possible
- soft borders
- no neon

Both light and dark palettes must be represented by semantic CSS custom properties during initial project setup. Exact color values remain subject to visual review. Components should consume semantic tokens rather than theme-specific raw colors.

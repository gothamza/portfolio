# DESIGN.md — Hamza Bouktitiya Portfolio

> Design context layer for AI-assisted UI work. Based on the [5-tool anti-slop stack](https://flawless-pilot-5b7.notion.site/Stop-Letting-Claude-Build-AI-Slop-The-5-Tool-Stack-for-Studio-Grade-Landing-Pages-35bde643c76381d98bb5d7878bad9050): explicit rules replace generic AI defaults.

## 1. Identity

- **Product:** Personal portfolio for an AI Engineer (PhD candidate)
- **Audience:** Recruiters, tech leads, research collaborators
- **Tone:** Precise, credible, technical — not flashy startup hype
- **Reference aesthetic:** Linear, Vercel, Stripe docs — restrained dark UI with one accent

## 2. Colors

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#09090b` | Page base |
| Surface | `#18181b` | Cards, nav |
| Border | `#27272a` | Dividers, card edges |
| Text primary | `#fafafa` | Headlines, body |
| Text muted | `#a1a1aa` | Subtitles, meta |
| Accent | `#22d3ee` | Links, focus, one CTA highlight |
| Accent hover | `#06b6d4` | Button hover |

### Option B — Code theme (IDE green)

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#0d1117` | GitHub dark base |
| Surface | `#161b22` | Cards, nav |
| Border | `#30363d` | Dividers |
| Accent | `#3fb950` | Primary green (strings / success) |
| Syntax keyword | `#ff7b72` | Decorative code snippets |
| Syntax function | `#d2a8ff` | `def`, class names |
| Syntax string | `#a5d6ff` | String literals |
| Syntax comment | `#6a9955` | `//` comments |
| Mono font | `JetBrains Mono` | Badges, tags, card titles |

**Do not use:** purple→pink→indigo gradients, glowing orbs, gradient text on names.

## 3. Typography

- **Sans:** `DM Sans` — UI, body, nav (400, 500, 600)
- **Display:** `Newsreader` — H1, section titles only (400, 600)
- **Scale:** H1 `clamp(2.5rem, 5vw, 3.75rem)` · body `1rem` · small `0.875rem`
- **Line height:** 1.5 body · 1.15 headings

**Do not use:** Poppins, Inter-only stacks, Playfair + gradient name treatment.

## 4. Spacing & Layout

- **Max width:** 1120px content, 1280px nav
- **Section padding:** 96px vertical desktop, 64px mobile
- **Radius:** 8px buttons/cards · 12px images — **not** 50px pills everywhere
- **Hero:** Left-aligned split (copy left, photo right). Not centered empty hero.

## 5. Components

### Buttons
- Primary: solid accent, 8px radius, no gradient, subtle shadow on hover only
- Secondary: 1px border `#27272a`, transparent bg
- Max 2 CTAs visible in hero

### Cards
- `1px solid #27272a` border, no glow
- Hover: border lightens to `#3f3f46`, no scale transform > 1.02

### Nav
- Solid `#09090b` with bottom border — no heavy glassmorphism
- Active link: accent underline, not gradient text

## 6. Anti-patterns (AI slop — avoid)

- [ ] Purple/pink gradient backgrounds or orbs
- [ ] `backdrop-filter: blur` on every surface
- [ ] Gradient text on hero name
- [ ] Three pill buttons in a row with identical gradient
- [ ] Centered hero with no visual anchor
- [ ] Decorative animations (floating orbs, blink cursors) without purpose
- [ ] `box-shadow` glow in brand colors on every hover

## 7. Current build state

- **Live site:** `index.html` + `styles.css` — original gradient/glass style
- **Studio site:** `index-studio.html` + `styles-studio.css` + `script-studio.js`
- **Test preview:** `design-test.html` — switch Current / Studio / Code

# Handoff to Claude Design

**Written:** 2026-04-23. By the Claude Code session that scaffolded the site and ported the hero mockup.
**Purpose:** single source of truth for anyone (Claude Design, future sessions, collaborators) picking this up cold. Read this top-to-bottom before touching anything.

---

## 1. What this is

**Parallax Playbook** — a personal site for a futures trader. Home for writing, video, and experiments on trading, markets, and the psychology of both.

- **Audience:** serious futures scalpers / prop firm traders. Not beginners, not casual. Skeptical of hype. Values depth.
- **Stance:** this is not a SaaS. Not a blog (2016-sense). Not a company. A home on the internet under one person's name.
- **v0 goal:** ship a beautifully-designed site with the scaffold working, one or two essays present, and the hero signature landing.

Full product spec: [`02_site/SITE_SPEC.md`](SITE_SPEC.md).
Design principles: [`02_site/DESIGN_DIRECTION.md`](DESIGN_DIRECTION.md).
Brand system: [`01_brand/brand_guidelines/BRAND_GUIDELINES_v0.1.md`](../01_brand/brand_guidelines/BRAND_GUIDELINES_v0.1.md).

Note: the brand guidelines were written when the project was still a SaaS. It pivoted to a personal site. Most of the brand system (color, type, voice, principles) still applies. Sections about in-app tone / product positioning do not. The header of that file flags this.

---

## 2. Tech stack

- **Astro 5** (static output, no adapter — Vercel auto-detects)
- **Tailwind v4** via `@tailwindcss/vite`, tokens defined in `src/styles/global.css` under `@theme`
- **Geist Variable** + **Geist Mono Variable** via `@fontsource-variable` (self-hosted, no Google Fonts)
- **TypeScript strict**
- Content lives outside the app at `03_content/{essays,videos,experiments}/` as `.md` files. Astro reads them via content collections using the glob loader (`src/content.config.ts`, paths relative to project root).
- **Deploy:** Vercel. Set Root Directory to `02_site/app`. No adapter needed.

## 3. Where things live

```
parallax-playbook/
├── 01_brand/                         brand system (tokens, voice, logo dir)
├── 02_site/
│   ├── SITE_SPEC.md                  what the site is for
│   ├── DESIGN_DIRECTION.md           how it should feel
│   ├── CONTENT_PLAN.md               content direction
│   ├── HANDOFF_TO_DESIGN.md          ← you are here
│   ├── mockups/
│   │   ├── hero_market_sessions_v1.html    ← canonical hero composition
│   │   └── README.md                        mockup vs production gap
│   └── app/                          ← THE ASTRO PROJECT
│       ├── astro.config.mjs
│       ├── package.json
│       ├── tsconfig.json
│       ├── README.md
│       ├── public/
│       │   └── favicon.svg           concentric offset circles — parallax mark
│       └── src/
│           ├── components/
│           │   ├── Header.astro      used by INNER pages only (home has its own nav)
│           │   └── Footer.astro      hidden on home via hideFooter prop
│           ├── content.config.ts     essays / videos / experiments collections
│           ├── env.d.ts
│           ├── layouts/
│           │   └── BaseLayout.astro  accepts hideHeader / hideFooter props
│           ├── pages/
│           │   ├── index.astro       ← HOME: ported hero + scoped <style>
│           │   ├── about.astro
│           │   ├── 404.astro
│           │   ├── writing/index.astro
│           │   ├── videos/index.astro
│           │   └── experiments/index.astro
│           └── styles/
│               └── global.css        Tailwind import + brand @theme tokens
├── 03_content/
│   ├── essays/                       empty — .md files go here
│   ├── videos/                       empty
│   └── experiments/                  empty
└── 04_future_experiments/            out of scope for site v0
```

## 4. Current state of the build

- `npm install` clean, `npm run build` passes (6 pages).
- Dev server: `npm run dev` → `http://localhost:4321/`.
- Preview is wired via `.claude/launch.json` at the repo root with config name **`site`** (uses `npm --prefix 02_site/app run dev`). `preview_start name="site"` works.
- **Home page hero is ported in full** from the static mockup. Renders the atmosphere, grid overlay, top rule, mono nav, breathing SVG globe with NY / London / Tokyo session glows, wordmark with ghost offset, "Playbook." gradient fade, tagline, session meta sidebar, bottom strip. Scoped `<style>` block sits at the bottom of `src/pages/index.astro`.
- **Inner pages (writing, videos, experiments, about, 404) are spare placeholders.** Typography-only, single-column, honest empty states. They use the standard `Header` + `Footer` components. These need a design pass.
- **Globe is a static SVG stand-in.** The animated WebGL version has NOT been built.

## 5. Design direction — locked decisions (do not drift)

- Dark-first, single mode. No light mode at v0.
- Typography does the work. Geist sans + Geist Mono. Mono with tabular figures for anything numeric — non-negotiable.
- Hairlines over boxes. No chunky borders, no heavy cards, no shadow stacks.
- Generous negative space. Cramped feels amateur.
- No gradients (the wordmark "Playbook." fade and the globe's atmospheric radials are exceptions earned by the scene), no glassmorphism, no blurs.
- No stock imagery, no AI-generated imagery, no emoji in UI.
- Nav is minimal: site name + 3–4 sections. No CTA button, no search, no theme toggle, no login.
- Reference sites to match the feel: Craig Mod, Robin Sloan, Linear, The Diff (Byrne Hobart), Subtraction (Khoi Vinh), Frank Chimero.
- Anti-references: most trading blogs, SaaS marketing pages, trader Twitter landing pages, Medium-style blogs. The site should feel like the opposite.
- Motion: less is more. No scroll parallax, no auto-reveal-on-scroll, no auto-play. Motion is earned and intentional (the hero globe is earned).

## 6. Brand tokens (implemented)

Defined as CSS custom properties under `@theme` in `src/styles/global.css`:

| Role | Token | Value |
|---|---|---|
| Canvas | `--color-canvas` | `#0A0D12` |
| Surface | `--color-surface` | `#11151C` |
| Surface elevated | `--color-surface-elevated` | `#171C25` |
| Hairline | `--color-hairline` | `#222834` |
| Foreground | `--color-foreground` | `#E8EAED` |
| Muted | `--color-muted` | `#8A92A3` |
| Accent | `--color-accent` | `#7DD3FC` |
| Positive | `--color-positive` | `#4ADE80` |
| Negative | `--color-negative` | `#F87171` |
| Warning | `--color-warning` | `#F5B544` |
| Font sans | `--font-sans` | `"Geist Variable", ui-sans-serif, system-ui, ...` |
| Font mono | `--font-mono` | `"Geist Mono Variable", ui-monospace, ...` |

Type scale: display 64 / h1 36 / h2 28 / h3 20 / body 16 / small 13 / micro 11. Headings medium (500), **never bold (700)** — bold reads as shouting. Micro labels: uppercase tracked +8%.

## 7. The hero — the signature

This is the load-bearing part of the site. Losing this direction flattens the site into a generic dark blog.

### Decision history (don't re-litigate without explicit user OK)

Three directions were considered for the hero:

1. **Price action visualization** — abstracted candles, MAs, volume, flowing atmospherically. More personal (the thing a trader actually looks at). A valid future fallback.
2. **Market sessions as light** ← **picked.** Strongest gut reaction from the user.
3. **Parallax itself** — two offset layers of particles / geometry shifting with cursor or scroll. Most original, least literal.

Within #2, three sub-options:

- **A: abstracted world with session regions breathing through a 24-hour cycle** ← **picked.** This is what the mockup shows and what's currently rendering.
- B: horizontal or circular timeline with overlapping session bands. Rejected — too informational, less atmospheric.
- **C: pure atmospheric, no world, just three flowing regions of light** ← **approved backup** if Option A ever feels too literal or clichéd.

### What's in the current static render (the composition, approved)

- Full-viewport dark atmospheric stage (canvas `#06060a` for this scene — note the delta with brand token, see §9)
- Faint 100px × 100px grid overlay (`rgba(255,255,255,0.018)`)
- Radial atmospheric glows at 50%/55% (blue) and 20%/85% (purple)
- Top horizontal rule (gradient hairline)
- Mono-tracked nav: "◐ PP / PARALLAX PLAYBOOK" (left) + WRITING / VIDEO / EXPERIMENTS / ABOUT (right)
- Central 560px globe stage: sphere gradient (dark blue-black), rim lighting, faint lat / long grid, three session glow regions (NY active/blue, London closing/amber, Tokyo dark/purple), city dots with halos, faint abstract continental curves. Breathes subtly (14s scale 1 → 1.012 → 1).
- Soft halos around the globe (two concentric radial gradients)
- City labels in mono with dashed connectors: "◆ NEW YORK — ACTIVE · 14:22 EST", "◆ LONDON — CLOSING · 19:22 GMT", "◆ TOKYO — DARK · 04:22 JST"
- Bottom-left: eyebrow "— A SITE BY —", wordmark "Parallax" (weight 200, with ghost-offset behind) / "Playbook." (weight 200, vertical gradient fade white→42%, solid period stop), tagline
- Bottom-right: session meta — "◐ GLOBAL SESSION / LONDON / NEW YORK OVERLAP / HIGHEST LIQUIDITY WINDOW / • SYSTEM ACTIVE" (with pulsing dot, 2.8s)
- Bottom strip: "EST. 2026 · LAT 40.7128° N" left, version right

Below 900px viewport: right-side nav, city labels, connectors, and session meta are hidden. Wordmark scales to 52px. This is already wired in the scoped styles.

### What still needs to be built — the ANIMATED globe (deferred, the real work)

The SVG is a stand-in. It is marked `data-slot="hero-globe"` in `src/pages/index.astro`. **Replace it. Do not try to animate the SVG.**

Must implement:

- Globe rotates on a 24-hour cycle synced to wall-clock time
- **Flowing light transfer between sessions.** This is the signature animation and the thing the user keeps asking for. Light must visibly move from Tokyo → London → NY as the day progresses — not just static glows brightening and fading in place. User feedback verbatim on the static mockup: *"looks good. but i would like to see flowing light transferring / fading / or moving..."*
- Session glow regions brighten and fade in sync with real market hours. Overlaps (e.g. London + NY window) are lit brighter.
- City dots pulse and shift color with session state (dark → opening → active → closing)
- Mouse-responsive parallax on the wordmark ghost offset
- Entrance animation on page load — not loud, but earned
- Must perform on mobile — the 900px breakpoint already hides labels and session meta; the globe itself should stay lightweight

**Tech target: React Three Fiber** (Three.js under the hood). Don't reach for heavier frameworks.

## 8. What to do next (suggested order for design)

1. **Decide scroll architecture for home.** Currently hero is `min-height: 100vh` and nothing renders below. Is there a "Latest" section, about preview, footer visible after scroll? Mockup doesn't answer this.
2. **Reconcile inner-page header with hero nav.** The hero has a rich mono-tracked nav ("◐ PP / PARALLAX PLAYBOOK" + uppercase links). The standard `Header.astro` used by writing / videos / experiments / about is a cleaner, less-mono version. They should probably feel like siblings. Pick one direction and apply it.
3. **Spec the globe animation in full.** Before building WebGL — commit paper/Figma to: session glow states across 24h, the geometry of light flow (arc? great-circle? particles along paths?), easing curves, entrance choreography, cursor response, mobile fallback (maybe a lighter 2D version below a width threshold).
4. **Build the WebGL globe (R3F).** Replace `[data-slot="hero-globe"]`. Keep it in a single client-island component so SSR still works for the rest of the page.
5. **Design inner content templates:** essay reading view, video page, experiment page. Typography-forward, generous margins, proper measure (65–75ch).
6. **Polish 404.** Currently bare. A small personal touch is on-brand.
7. **OG image system.** Auto-generated per-essay OG images are a nice touch. Simple template.

## 9. Known tensions / open questions

- **Canvas color delta.** Mockup and hero scene use `#06060a`. Brand token is `#0A0D12`. The hero currently scopes `#06060a` inside its `<style>` block. Decide: align the token down to the mockup, keep the scene override, or pick a third value. Small visual delta but worth making a call.
- **Wordmark weight.** Hero wordmark is Geist 200 (very thin), consistent with the mockup. Brand guidelines say headings medium (500) and never bold. Thin weight in the wordmark is a scene-specific choice — not a rule violation, but flag if it ever escapes to inner pages.
- **Session meta / time strings are currently static literals** ("14:22 EST", "19:22 GMT", "04:22 JST", "LONDON / NEW YORK OVERLAP", "SYSTEM ACTIVE"). These should become time-driven when the animated globe lands.
- **Collection warnings at build time** ("no files found matching `**/*.{md,mdx}` in `../../03_content/...`") are expected and harmless — collections are empty. Gone the moment you add the first `.md` file.
- **Fallback identity if Option A ever wears thin:** Option C (pure atmospheric, no world). Not Option 1 or 3.

## 10. What NOT to do

- Do not replace the globe direction with a new concept without explicit user sign-off. This was chosen through a deliberate selection process. Option C is the only pre-approved fallback.
- Do not add light mode, theme toggle, accounts, comments, search, newsletter archive, RSS (unless trivial), or any engagement/gamification UI. Explicitly out of scope for v0.
- Do not flatten the hero into a generic dark blog header (e.g. "Hi, I'm X — here's my writing"). That mistake has already been made and corrected once.
- Do not try to animate the static SVG. Replace with R3F.
- Do not use emoji in UI. Use considered iconography (Lucide if icons are needed).
- Do not introduce gradients, glassmorphism, or blurs beyond the few earned ones already in the scene.
- Do not add stock photography, AI-generated imagery, or illustrations of people at monitors.
- Do not use pure `#FF0000` / `#00FF00` or any saturated neon. Positive and negative palette entries exist and are deliberately desaturated.
- Do not use bold weight (700) for headings. Medium (500) only.

## 11. How to run

```bash
cd 02_site/app
npm install          # already done
npm run dev          # localhost:4321
npm run build        # static output to dist/
```

Claude Code preview: `preview_start name="site"` (uses the repo-root `.claude/launch.json`).

---

## 12. One-line brief for Claude Design

> You are picking up a dark-first, typography-forward personal site for a futures trader. Scaffold is live. Home hero is statically ported from an approved mockup showing an abstracted world with NY/London/Tokyo session glow regions. Your job next is to (a) spec and build the real animated WebGL globe with flowing light transfer between sessions as the 24-hour trading day progresses, and (b) design the inner pages to match the hero's atmospheric restraint. Everything you need to know is above. Read `02_site/mockups/hero_market_sessions_v1.html` in a browser before touching the hero.

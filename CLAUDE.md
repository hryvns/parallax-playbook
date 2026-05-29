# Parallax Playbook

Personal site for a futures trader. Writing, video, experiments on trading, markets, and the psychology of both.

**Stack:** Astro 5, Tailwind v4, Geist + Geist Mono, TypeScript strict. Dark-first. Static output, deploys to Vercel.

---

## Read first, in this order

Before touching anything, read:

1. **[`02_site/HANDOFF_TO_DESIGN.md`](02_site/HANDOFF_TO_DESIGN.md)** — canonical handoff. Single source of truth: state of the build, locked decisions, hero animation spec, what NOT to do. Top to bottom before editing.
2. [`02_site/SITE_SPEC.md`](02_site/SITE_SPEC.md) — what the site is for, scope, who it's for.
3. [`02_site/DESIGN_DIRECTION.md`](02_site/DESIGN_DIRECTION.md) — how it should feel. References, anti-references, the honest test.
4. [`01_brand/brand_guidelines/BRAND_GUIDELINES_v0.1.md`](01_brand/brand_guidelines/BRAND_GUIDELINES_v0.1.md) — color, typography, voice. Note the v0.1 header: project pivoted from SaaS to personal site; design system still applies, product positioning sections do not.
5. [`02_site/mockups/hero_market_sessions_v1.html`](02_site/mockups/hero_market_sessions_v1.html) — approved hero composition. Open in a browser. This is the visual target.

---

## Where the code lives

The Astro project is at **`02_site/app/`** — not at the repo root. Brand docs, content, and mockups sit above it.

```
parallax-playbook/
├── 01_brand/                   brand system (tokens, voice, logo direction)
├── 02_site/
│   ├── SITE_SPEC.md
│   ├── DESIGN_DIRECTION.md
│   ├── CONTENT_PLAN.md
│   ├── HANDOFF_TO_DESIGN.md    ← deep-dive handoff
│   ├── mockups/                static composition references
│   └── app/                    ← THE ASTRO PROJECT
│       ├── astro.config.mjs
│       ├── package.json
│       ├── public/favicon.svg
│       └── src/
│           ├── components/{Header,Footer}.astro
│           ├── content.config.ts          glob loader → ../../03_content/
│           ├── layouts/BaseLayout.astro   accepts hideHeader/hideFooter
│           ├── pages/
│           │   ├── index.astro            HOME — ported hero + scoped <style>
│           │   ├── about.astro
│           │   ├── 404.astro
│           │   └── {writing,videos,experiments}/index.astro
│           └── styles/global.css          Tailwind + @theme brand tokens
├── 03_content/                 .md content lives here (essays / videos / experiments)
└── 04_future_experiments/      out of scope for the site
```

---

## Run

```bash
cd 02_site/app
npm install        # one-time
npm run dev        # http://localhost:4321
npm run build      # static output to dist/
```

The `.claude/launch.json` at the repo root defines a preview config named `site` — `preview_start name="site"` works without `cd`.

**Deploy:** Vercel. Set Root Directory to `02_site/app`. Framework auto-detects. No adapter needed.

---

## Current state

- Scaffold complete. `npm run build` passes — 6 pages.
- **Home hero is ported in full** from the static mockup: atmosphere, grid overlay, mono nav, breathing SVG globe with NY/London/Tokyo session glows, wordmark with ghost offset, session meta, bottom strip. Lives in `src/pages/index.astro` with a scoped `<style>` block.
- **Inner pages (writing / videos / experiments / about / 404) are spare placeholders.** Typography-only. Need a design pass.
- **The animated WebGL globe is NOT built yet.** The current globe is a static SVG stand-in marked `data-slot="hero-globe"`. The real build replaces it with R3F (Three.js). See HANDOFF §7 for the full animation spec — especially **flowing light transfer between sessions** (Tokyo → London → NY as visibly moving light), which the user specifically called out.
- Content collections point at `../../03_content/{essays,videos,experiments}/` — all empty. Empty-collection warnings at build are expected and harmless.

---

## Non-negotiables

Full list in HANDOFF §10. Most important:

- **Dark-first only.** No light mode, no theme toggle at v0.
- **Geist sans + Geist Mono.** Mono with tabular figures for any numeric data — non-negotiable.
- **Headings medium (500), never bold (700).** Bold reads as shouting.
- **Hairlines, not boxes.** No chunky borders, no shadow stacks. No gradients (the wordmark "Playbook." fade and the globe atmospherics are earned exceptions). No glassmorphism, no blurs.
- **No stock imagery, no AI imagery, no emoji in UI.**
- **Don't change the hero concept.** Direction #2 / Option A was chosen through a deliberate process. Option C (pure atmospheric, no world) is the only pre-approved fallback if Option A ever flattens.
- **Don't animate the static SVG globe.** Replace it with R3F.
- **Don't flatten the hero into a generic dark blog header.** That mistake has been made and corrected once.

---

## Brand tokens (implemented)

In `02_site/app/src/styles/global.css` under `@theme`. Quick reference:

| | |
|---|---|
| canvas | `#0A0D12` |
| surface / elevated | `#11151C` / `#171C25` |
| hairline | `#222834` |
| foreground / muted | `#E8EAED` / `#8A92A3` |
| accent / positive / negative / warning | `#7DD3FC` / `#4ADE80` / `#F87171` / `#F5B544` |
| sans / mono | Geist Variable / Geist Mono Variable |

Type scale: display 64 / h1 36 / h2 28 / h3 20 / body 16 / small 13 / micro 11. Micro labels uppercase tracked +8%.

**Known canvas delta:** the hero scene uses `#06060a` (mockup canvas) inside its scoped style block — slightly deeper than the brand token. Decide whether to align before adding more scenes that use canvas. Flagged in HANDOFF §9.

---

## Working etiquette

- Don't commit unless asked.
- Don't add features outside SITE_SPEC v0 scope (no comments, accounts, search, RSS-unless-trivial, newsletter, dark/light toggle).
- When in doubt about visual decisions, run them against the four-question test in `02_site/DESIGN_DIRECTION.md` § "The honest test." When still in doubt: remove it.

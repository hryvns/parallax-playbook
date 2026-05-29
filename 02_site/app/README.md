# Parallax Playbook — site

Astro site. Lives here so site code sits alongside `SITE_SPEC.md`, `DESIGN_DIRECTION.md`, and `mockups/` in `02_site/`.

## Stack

- **Astro 5** (static output)
- **Tailwind v4** (via `@tailwindcss/vite`, tokens in `src/styles/global.css` under `@theme`)
- **Geist Variable** + **Geist Mono Variable** (self-hosted via `@fontsource-variable`)
- **TypeScript** strict

## Folder layout

```
02_site/app/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   └── favicon.svg           # concentric offset circles — parallax mark
└── src/
    ├── components/
    │   ├── Header.astro
    │   └── Footer.astro
    ├── content.config.ts     # content collections (points at ../../03_content/)
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── index.astro       # home (hero has a TODO slot for the globe)
    │   ├── about.astro
    │   ├── 404.astro
    │   ├── writing/index.astro
    │   ├── videos/index.astro
    │   └── experiments/index.astro
    └── styles/
        └── global.css        # tailwind import + brand tokens
```

## Content

Essays, videos, and experiments are `.md` files outside the app, in the repo's `03_content/` folder:

```
parallax-playbook/
├── 02_site/app/              ← this project
└── 03_content/
    ├── essays/               ← collection: essays
    ├── videos/               ← collection: videos
    └── experiments/          ← collection: experiments
```

Frontmatter contracts live in `src/content.config.ts`.

## Run locally

```bash
cd 02_site/app
npm install
npm run dev
```

## Deploy — Vercel

1. Import the repo in Vercel.
2. Set **Root Directory** to `02_site/app`.
3. Framework preset: Astro (auto-detected). Build command and output directory are standard.

No adapter needed — static output.

## Deferred

- The hero globe (dark atmospheric element with NY / London / Tokyo session regions, light flowing between them as the 24h trading day progresses). Slot is marked in `src/pages/index.astro` as `data-slot="hero-globe"`.
- First essays, about copy, real favicon/OG images.

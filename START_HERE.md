# Start Here — Handoff to Claude Code

**Date:** 2026-04-22
**Status:** Strategy, naming, specs, and design direction locked. Ready to build.
**Next step:** Scaffold the site in Claude Code.

---

## What to do first in Claude Code

Paste this prompt (or something close) as your first message:

> I'm building a personal site called Parallax Playbook. Before doing anything, read these files in order:
>
> 1. `START_HERE.md` (this file)
> 2. `README.md`
> 3. `02_site/SITE_SPEC.md`
> 4. `02_site/DESIGN_DIRECTION.md`
> 5. `02_site/CONTENT_PLAN.md`
> 6. `01_brand/brand_guidelines/BRAND_GUIDELINES_v0.1.md`
> 7. `01_brand/voice_and_tone/VOICE.md`
> 8. `01_brand/colors/PALETTE.md`
> 9. `01_brand/typography/TYPOGRAPHY.md`
>
> Also look at `02_site/mockups/hero_market_sessions_v1.html` (open in browser) for the hero direction.
>
> Once you've read those, scaffold an Astro project with Tailwind. Use Geist as the font (sans and mono). Set up brand tokens from the guidelines. Deploy target is Vercel. Get a minimal shell working and deployed to a Vercel preview URL before we build any animated content. Do NOT build the hero globe yet — scaffold first, hero animation comes after the framework is running.

This sequences things correctly: context first, framework second, animated globe third.

---

## What to build, in order

### Session 1 — Scaffold (1-2 hours)
- Initialize Astro project in repo root (or `/site/` subdirectory — Claude Code can decide)
- Configure Tailwind with brand tokens (colors, typography scale, spacing)
- Install Geist font family
- Create base layout: dark background, header with nav, footer
- Set up routes: `/`, `/writing`, `/videos`, `/experiments`, `/about`
- Wire up Astro content collections for essays, videos, experiments
- Deploy to Vercel (free tier), get a preview URL
- **Success criterion:** site loads at a public URL with the brand's dark background and correct typography. No content yet. No animation yet.

### Session 2 — Hero animated globe (2-4 hours)
- Install React Three Fiber + Three.js (Astro supports React islands)
- Build a 3D globe with subtle dark material
- Add three session glow regions that brighten/fade based on real-time UTC (NY, London, Tokyo)
- Implement flowing light between regions — particles or animated line segments passing from one session to the next as the day progresses
- Gentle rotation (very slow, atmospheric — not a demo reel)
- Mobile fallback: static version of the globe for low-power devices
- Respect `prefers-reduced-motion`
- **Success criterion:** opening the site produces the atmospheric, alive feeling described in SITE_SPEC.md and DESIGN_DIRECTION.md.

### Session 3 — Typography and wordmark polish (1-2 hours)
- Build the "Parallax Playbook" wordmark per the hero mockup (ghost-offset effect on Parallax, gradient fade on Playbook, period stop)
- Entrance animation on page load (subtle fade + upward motion)
- Optional: mouse-responsive parallax where the ghost offset shifts slightly with cursor position
- Typography scale locked for essays (display, h1, h2, body, meta)
- **Success criterion:** the wordmark lands emotionally. The hero feels finished.

### Session 4+ — Content and polish
- Essay template (typography-led, generous margins, hairline rules)
- First essay populated
- About page written
- OG images, favicon, meta tags
- Analytics (Plausible or Fathom)
- Final design pass

---

## Realistic timeline

- v0 live on a public URL with the hero, an About page, and one essay: **4-8 hours of focused Claude Code work**
- In calendar time, probably **1-3 weeks** at part-time pace

This is faster than most solo site builds but not "minutes." Don't expect the Anthropic ad timeline — that was edited for marketing. Real work takes real time.

---

## Discipline reminders (worth re-reading before every session)

1. **Read the specs first.** Every session, have Claude Code reload context. Don't skip this — it's what prevents drift.
2. **Say no to scope creep.** When Claude Code suggests adding features you didn't ask for, decline. Stay narrow.
3. **Ship before polish.** Get the site public (even ugly) before spending hours on any single detail.
4. **The globe is the feature, not the product.** Don't let 3D perfectionism delay getting the writing section working.
5. **Keep the repo clean.** If Claude Code generates files you don't need, delete them. Discipline now saves debugging later.
6. **Commit often.** Every working state should be committed. If a session breaks something, you can roll back.

---

## What's where in this repo

```
parallax-playbook/
├── START_HERE.md                    ← you are here
├── README.md                        ← full repo map
│
├── 01_brand/                        ← design system — locked, read-only for decisions
│   ├── brand_guidelines/            ← master brand doc (note at top re: site pivot)
│   ├── colors/                      ← color principles
│   ├── typography/                  ← Geist and scale
│   ├── voice_and_tone/              ← how to write
│   ├── naming/                      ← NAMING_EXPLORATION.md — why "Parallax Playbook"
│   ├── logo/                        ← empty, no logo needed — typography-led identity
│   └── assets/                      ← brand assets (empty — add favicon etc during build)
│
├── 02_site/                         ← ACTIVE — what's being built
│   ├── SITE_SPEC.md                 ← what the site is, v0 scope, tech choices
│   ├── DESIGN_DIRECTION.md          ← visual direction, reference sites
│   ├── CONTENT_PLAN.md              ← format mix, cadence philosophy
│   ├── README.md                    ← reading order
│   └── mockups/
│       ├── hero_market_sessions_v1.html  ← open in browser — hero direction
│       └── README.md                ← what the mockup shows vs doesn't
│
├── 03_content/                      ← drafts before publishing
│   ├── essays/
│   ├── videos/
│   ├── experiments/
│   └── README.md
│
└── 04_future_experiments/           ← parked work
    ├── playbook/                    ← old SaaS spec — might be revived someday
    └── README.md
```

---

## The name (locked)

**Parallax Playbook** — chosen April 2026. Accepted tradeoffs on SEO and fintech namespace conflicts. See `01_brand/naming/NAMING_EXPLORATION.md` for the full decision log.

Local folder renamed to `parallax-playbook` on 2026-04-22. If/when pushed to GitHub, the remote rename follows; GitHub auto-redirects old URLs.

---

## If you get lost

Come back to this file. Then read `02_site/SITE_SPEC.md`. Those two documents tell you what you're building and why.

If Claude Code gets confused about direction, paste the prompt at the top of this file again to re-anchor it.

Good luck.

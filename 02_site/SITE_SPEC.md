# Site Spec — v0

**Status:** Active. April 2026.
**Name:** Parallax Playbook
**Goal:** Ship a beautifully-designed personal site as the home for writing, video, and experiments about trading, markets, and the psychology of both.

---

## What this is

A personal site and creative workshop by a futures trader who trades, writes, and occasionally builds small tools. Not a SaaS. Not a blog (in the 2016 sense). Not a company. A home on the internet under one person's name, where different kinds of thinking live together under one roof.

The site hosts:
- **Writing** — essays on trading psychology, markets, the prop firm space, and anything adjacent that deserves depth
- **Video** — longer-form content when the topic benefits from it (motion graphics, talking-head, or animated depending on the piece)
- **Experiments** — small standalone tools, calculators, interactive pieces that live as their own URLs on the site

Each of these is a creative output format. The site is the container. New content is added when it's ready, not on a schedule.

---

## Who it's for

Primary reader: a serious futures trader, probably scalping ES/NQ, probably active in prop firm combines, interested in the deeper psychology of trading rather than signals or tips. Skeptical of hype, fluff, and "100k in a month" YouTube culture. Values depth.

Secondary reader: anyone adjacent to trading who appreciates thoughtful long-form content about markets and human behavior — finance Twitter types, quant-curious readers, people who subscribe to newsletters like *The Diff* or read Matt Levine.

The site doesn't chase the biggest audience. It respects the reader enough to assume they're not looking for a quick dopamine hit.

---

## Voice and tone

Covered in `01_brand/voice_and_tone/VOICE.md` and `01_brand/brand_guidelines/MANIFESTO.md`. Short version: honest, technical when appropriate, allergic to hype, self-aware. Not scrappy, not corporate. Treats the reader like an equal who is busy.

---

## Design direction

All design decisions serve one rule: **this should look like a serious person made it, and cared.**

- Locked brand system applies: Geist typography, dark-first palette, hairline strokes, no gradients, no glassmorphism, no gamification
- Typography does most of the work. Restraint everywhere.
- Dense but breathable. Confident without being loud.
- No stock photography, no illustrations of people at monitors, no generic finance aesthetics
- Navigation is minimal: site name, 3-4 sections, nothing else

### Reference points

Sites that hit the feel we're going for:
- **Craig Mod** (craigmod.com) — personal site by a thoughtful writer, beautiful design restraint
- **Robin Sloan** (robinsloan.com) — playful experiments alongside serious writing
- **Linear** (linear.app) — design discipline, hairlines, modern professionalism
- **The Diff** by Byrne Hobart — finance writing done with gravity and care
- **Kurzgesagt** (kurzgesagt.org) — when video content is involved, quality bar reference

Sites that represent what NOT to make:
- Most "trading blogs" — cluttered, hype-driven, ad-filled
- Most trader Twitter landing pages — aggressive, gamified, screenshot-heavy
- SaaS marketing pages — this isn't one

---

## Scope — v0

Ship a minimal, beautifully-designed site with:

### Pages

1. **Home (`/`)**
   - A clear statement of what the site is and who's behind it
   - A featured essay or video (if one exists)
   - Short list of latest pieces
   - Footer with email signup (optional)

2. **Writing (`/writing`)**
   - List of published essays, most recent first
   - Each essay lives at `/writing/[slug]`
   - Individual essay page has strong typography, generous margins, no ads

3. **Videos (`/videos`)**
   - List of published videos (empty at v0 launch is fine)
   - Each video lives at `/videos/[slug]`
   - Embed or link to hosting (YouTube/Vimeo), with written context/summary on the page

4. **Experiments (`/experiments`)**
   - List of small tools and interactive pieces (empty at v0 launch is fine)
   - Each experiment gets its own URL and can be as simple or complex as needed
   - Placeholder section at v0: "Future home for small tools. Nothing here yet."

5. **About (`/about`)**
   - Short — a few paragraphs. Who, what, why this site exists.
   - Contact info (email, X/Twitter, etc.)

### What launches with v0

- The site itself, fully built and deployed
- 1–2 written essays to populate `/writing` at launch (not zero — something must be there)
- Empty `/videos` and `/experiments` sections with honest placeholders (or these nav items hidden until the first piece exists — decide at build time)
- Working email signup if easy, skip if it adds friction
- `/about` page

### What does NOT launch with v0

- Login, accounts, paid anything
- Comments or community features
- Ads or sponsorships
- Affiliate links
- Trackers beyond basic privacy-respecting analytics (Plausible or Fathom)
- Any SaaS product or tool that requires backend state
- Newsletter archive / advanced email features
- Search (the site is small enough that browsing is fine)
- Dark/light mode toggle (dark-first, one mode)
- RSS feed (nice-to-have — include if easy, defer if not)

---

## Technical direction

### Framework

**Recommendation: Astro.**

Reasoning: Astro is purpose-built for content-first sites. It produces minimal, fast HTML output, integrates with Markdown content natively, and the authoring workflow (writing essays as `.md` files, committing, deploying) is clean and permanent. No database dependency, no CMS to maintain, no vendor lock-in.

Alternative: Next.js if there's a specific reason to anticipate interactive React-heavy features in the near future. For a content site with occasional tools, Astro is lighter and more appropriate.

### Styling

Tailwind CSS using the tokens from the brand system (Geist font, locked color palette, hairline borders). Custom CSS only for typography details that Tailwind can't express cleanly.

### Content authoring workflow

Essays are `.md` files in the repo (e.g. `content/essays/2026-04-revenge-trade.md`). Frontmatter handles title, date, slug, description. Astro renders them. Publishing an essay = write the file, commit, push. No CMS.

Videos are stored externally (YouTube or Vimeo). Each video gets a `.md` file in `content/videos/` with metadata, embed code, and written context.

Experiments can be either:
- Simple enough to live as a single page with inline JS/HTML
- Complex enough to be a separate app in a subdirectory, deployed as its own thing

### Hosting

Vercel or Netlify, free tier. Either is fine — pick whichever feels cleanest at build time.

### Domain

Primary target: `parallaxplaybook.com`. If taken, fall back to `.io`, `.co`, `.app`, or consider a hyphenated variant. Purchase when the site is ready to go live (not now — wait until there's something to point the domain at). For v0 launch, deploy to a vercel.app subdomain temporarily.

### Analytics

Plausible ($9/month) or Fathom ($14/month). Both are privacy-respecting, no cookie banner required, simple dashboards. Avoid Google Analytics.

### Newsletter (optional at v0)

Buttondown ($9/month at relevant scale) or ConvertKit. Only include at v0 if the sign-up form doesn't disrupt the page's design. Can be added later easily.

### Total monthly cost at v0

- Hosting: $0
- Domain: $0 (using temporary subdomain) or ~$1-2/month (if bought)
- Analytics: $0-14
- Newsletter: $0-9

**Total: $0-25/month.** Well under the "thousands to start" threshold.

---

## Build plan

### Phase 1: Foundation (week 1)
- Initialize Astro project
- Implement brand tokens (typography, color, spacing) in Tailwind config
- Build site shell: header, footer, navigation
- Build page templates: home, section index, individual content page
- Deploy to Vercel/Netlify (temporary subdomain)

### Phase 2: Content framework (week 2)
- Set up content collections for essays, videos, experiments
- Build Markdown rendering pipeline with good typographic defaults
- Create first essay page template
- Write and publish first essay (or bring a draft from elsewhere)
- About page

### Phase 3: Polish and launch (week 3)
- Design refinement pass
- Responsive behavior across devices
- Analytics integration
- Meta tags, favicon, OG images
- Final content review
- Launch — tell no one, or tell a small group. Soft launch.

**Realistic total:** 2-4 weeks of focused work. Longer at part-time pace. Claude Code can handle nearly all the build.

---

## Success criteria

v0 is done when:

1. The site is live at a public URL
2. At least one written piece exists and reads well
3. The design reflects the brand system — someone looking at it says "this was made with care"
4. It works well on desktop and mobile
5. Performance is fast (Lighthouse score 95+ on desktop)
6. You're not embarrassed to share the URL

v0 is NOT gated on:
- Having a specific number of posts
- Having video content
- Having experiments built
- Having a newsletter audience
- Having SEO rankings

Those come later. Launch is about having a home that exists.

---

## What comes after v0

Once the site is live, the work is **content and experiments**, not platform.

- Write essays when you have something to say
- Make video when a topic deserves it
- Build small tools when you want to build
- Iterate the design when it starts feeling dated
- Add features (newsletter archive, search, etc.) when you actually need them

If a specific idea grows into its own product (the Playbook spec in `04_future_experiments/playbook/` is one example), it can be developed as a separate experiment that lives on the site — either as a subdomain or sub-section.

The site is the permanent home. Everything else is what lives inside it, and changes over time.

---

## One last thing

The hardest discipline in personal-site building is not adding features. It's not adding a new section, a new content type, a new navigation item, every time you have a new idea. Resist. The power of a focused personal site is that it's focused. A site with 10 sections and 3 pieces per section is weaker than a site with 3 sections and 10 pieces in the one that matters.

When in doubt: ship less. Add more later if you need to.

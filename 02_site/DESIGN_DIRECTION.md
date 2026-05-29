# Design Direction

**Purpose:** a single reference for the visual and interaction direction of the site. Not a full design system (that's in `01_brand/`) — a north-star document for how the site should feel when someone lands on it.

---

## The one-line direction

**A serious trader's home on the internet, designed with restraint and care.**

Every design decision traces back to that line. If a decision makes the site feel less serious, less restrained, or less careful, it's the wrong decision.

---

## How it should feel

When a reader lands on the site:

- **First impression (0-3 seconds):** "this is different from the other trading sites." Quiet, confident, typography-forward. Not loud. Not hype-y.
- **Second impression (3-15 seconds):** "someone actually cares about how this looks." Generous whitespace, intentional typography, hairline details, considered color.
- **Third impression (15+ seconds):** "the writing/content matches the design." The substance delivers on the aesthetic promise.

The design should feel closer to a literary magazine or an architect's portfolio than to a typical SaaS site or trading blog.

---

## Visual principles

### Typography does the work
Geist (already locked in `01_brand/typography/`) is the primary voice. Use it with:
- Generous line-height (1.5-1.7 for body, tighter for headings)
- Strong typographic hierarchy — large display headings, clear body, readable meta text
- Restrained weight contrast — mostly regular and medium, bold sparingly
- Proper measure (65-75 characters per line for body text)

Text is the primary design element. Everything else is context for the text.

### Dark-first, single mode
Per brand guidelines. No light mode toggle at v0. Dark-first means:
- Deep, neutral dark background (not pure black)
- Off-white or warm-white text with good contrast but not harsh
- Accent colors used minimally, for meaningful highlights only

### Hairlines over boxes
Borders are hairlines (1px or thinner). No chunky borders, no heavy cards, no shadow stacks. Dividers between sections are hairlines or nothing.

### Generous negative space
Margins, gutters, and section padding should feel almost too generous. Cramped feels amateur; spacious feels intentional.

### No gradients, no glassmorphism, no blurs
Flat, clean surfaces. Texture comes from typography and micro-details (hairlines, considered icons, maybe one or two subtle SVG flourishes per page). No decorative gradients. No glass effects.

### No stock imagery
No photos of traders at monitors, no "people in suits pointing at charts," no generic finance imagery. If the site uses images, they're purposeful: diagrams, charts, custom illustrations, thumbnails for video content. Everything earns its place.

### No emoji in UI
Standard across brand guidelines. UI doesn't use emoji as icons or accents. Words and considered iconography only.

---

## Layout principles

### Desktop-first, responsive
The site is read at desks and on phones. Design desktop first — generous layouts, good column widths — and make sure it collapses gracefully on mobile. Mobile shouldn't be an afterthought but the site isn't a mobile app.

### One column, mostly
Content is primarily single-column. Multi-column layouts only when they serve the content (e.g. a video thumbnail grid). Writing is single-column. About page is single-column. Home is mostly single-column.

### Soft grid, not rigid
The site doesn't feel like it was built from a 12-column grid. Sections breathe differently. Some are edge-to-edge, some are constrained. Feels more like a magazine spread than a SaaS landing page.

---

## Navigation and structure

### Header
Minimal. Site name (or logotype) on the left. 3-4 section links on the right. Nothing else. No search (yet), no theme toggle, no login, no CTA button.

### Footer
Quiet. A few links (About, contact, maybe RSS if included). Copyright or similar quiet line. Email signup if included. No "back to top" button, no site map, no social icon pile.

### Within-page navigation
Long-form essays can have a reading progress indicator (subtle — a thin bar at the top) or an in-page table of contents for genuinely long pieces. Not required. Default to nothing extra.

---

## Reference sites — what to aspire to

### Craig Mod — craigmod.com
**Why:** beautiful personal site by a writer. Typography-first, generous, confident restraint. Exactly the energy we want.

### Robin Sloan — robinsloan.com
**Why:** playful experiments alongside serious writing. Shows how a personal site can host multiple content types without feeling scattered.

### Linear — linear.app
**Why:** design discipline, hairlines, dark-first, considered modernism. The SaaS reference that matches our aesthetic.

### The Diff (Byrne Hobart) — thediff.co
**Why:** finance writing taken seriously. Shows that serious topic + serious design can coexist without being boring.

### Subtraction.com (Khoi Vinh)
**Why:** long-running personal site by a designer. Clean, intentional, shows how a site evolves over many years while keeping its identity.

### Frank Chimero — frankchimero.com
**Why:** writer/designer personal site. Soft, warm, restrained, specific point of view.

### Kurzgesagt — kurzgesagt.org
**Why:** if/when video content is involved, the quality bar. Not necessarily the exact style, but the level of care and craft.

---

## Anti-references — what to avoid

Looking at these helps clarify what NOT to make.

### Most trading blogs
- Cluttered sidebars with ads and widgets
- Stock photography of traders
- Aggressive pop-ups and email capture modals
- Hype-y headlines ("HOW I MADE $10K IN ONE DAY")
- No consistent typography or color system

### Most SaaS marketing sites
- Gradient hero sections
- "Trusted by" logo bars of unknown companies
- Feature/pricing/CTA patterns repeated ad infinitum
- Illustrations of cartoon characters doing vague things
- Testimonial carousels

### Typical trader Twitter landing pages
- Screenshot walls of P&L
- Flame emoji, rocket emoji, money-bag emoji
- "1% of traders know this..." clickbait
- Affiliate links everywhere
- No real content, just hype

### Medium-style blogs
- Generic, identical-looking sites
- Over-reliance on stock hero images
- Inconsistent typography
- Comments, claps, and engagement pressure built in

The site should feel like the opposite of all of these.

---

## Small details that matter

A personal site is made of details. Things to consider at build time:

- **Favicon:** needs to exist, needs to feel considered. A simple wordmark or symbol. Not the default Astro or Next.js icon.
- **OG images for social sharing:** when a link is shared on Twitter/Discord, the preview should look considered, not default. Auto-generated OG images per essay are a nice touch (can be built with a simple template).
- **Meta descriptions:** thoughtful per-page descriptions. Not SEO filler, just honest summaries.
- **404 page:** it will happen. Make it not sad. A simple message, a link back home. Bonus points for a small personal touch.
- **Reading time estimates:** optional. If included, place them quietly. No "5 MIN READ ☕" style.
- **Date formatting:** consistent across the site. Probably "April 21, 2026" format — human, clear, readable.
- **Link styling:** underlines on body links (accessibility, clarity). Hover states that aren't flashy.
- **Code blocks (if used):** properly styled, monospace, considered background. Don't leave them looking default.
- **Images in essays:** don't let them stretch full-width by default. Captions in quiet typography below.

---

## Interaction and motion

Less is more. The site should feel still.

- No auto-playing animations on page load
- No parallax scroll effects
- No "animated on scroll" reveal animations
- Hover states exist but are subtle
- Page transitions (if any) are short and quiet
- Buttons and links give gentle feedback without drawing attention

Motion, when used, should feel intentional and earned. An interactive experiment might have purposeful animation. A marketing-style "animated stat counter" does not belong anywhere on this site.

---

## The honest test

Before shipping any design decision, run it against these questions:

1. Does this serve the reader, or does it serve a marketing instinct?
2. Would someone I respect (another designer, a writer I admire) think this is considered?
3. Is this restrained, or am I adding because I can?
4. Does this fit the brand manifesto, or does it leak energy from it?

When in doubt: remove it. The site should feel like it could have been made with half the elements it has, and still work.

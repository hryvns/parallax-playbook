# Brand Guidelines (v0.1) — Parallax Playbook

*Living document. Update as the brand evolves. Logo and final color values TBD — this locks in the system that those will fit into.*

> **Note (April 2026):** This document was originally written when the project was a SaaS product. The project has since pivoted to a personal site (see `../../02_site/SITE_SPEC.md`). **Most of this guide still applies** — the design principles, color system, typography, voice, and personality all translate directly to a serious personal site. A few sections (brand positioning in section 1, in-app tone in section 3, specific product-UI references) describe the SaaS product and are no longer literally correct. When in doubt, read these as the spirit of the site rather than instructions for a product. A lighter "site voice" framing lives in `../voice_and_tone/VOICE.md`.

---

## 1. Brand positioning

**One-line positioning:** The trading journal that sees what you can't see about yourself.

**Audience:** Futures scalpers and prop firm traders. Not beginners. Not casual investors. Serious practitioners.

**Category:** Behavioral analytics platform for traders. (Not "a trading journal." That's the entry point, not the product.)

**Promise:** Close the gap between what you think you're doing and what you're actually doing.

---

## 2. Brand personality

If the brand were a person, they would be:

- A **flight instructor**, not a flight attendant. Calm under pressure. Honest about what went wrong. Invested in your mastery, not your comfort.
- A **sports performance coach**, not a cheerleader. Reviews the film with you. Tells you the hard thing. Celebrates the win but doesn't dwell.
- A **good therapist**, not a life coach guru. Holds space. Asks the question you've been avoiding. Never moralizes.

**Five adjectives:** Precise. Honest. Calm. Respectful. Considered.

**Five anti-adjectives:** Hype-y. Gamified. Patronizing. Cluttered. Bro-y.

---

## 3. Voice and tone

**How we write:**

- Direct. Short sentences. No throat-clearing.
- Respectful of the reader's intelligence. We never explain what a "limit order" is to our audience.
- Honest about hard things. "Revenge trades cost you $3,200 last month" — not "let's talk about some patterns."
- Quietly confident. We never claim to be the best. We show up and do the work.
- Occasionally dry. Wit is fine. Sarcasm is not.

**Words we use:** trader, setup, playbook, session, edge, process, discipline, signal, noise, drawdown, basis, tape.

**Words we don't use:** ninja, guru, rockstar, crush it, moon, lambo, alpha (as slang), beast mode, literally any hustle-culture vocabulary.

**Tone shifts by context:**

- *Marketing* — confident, spare, a little provocative. "Most journals log what happened. This one tells you why."
- *In-app* — functional, quiet, clear. Labels and microcopy get out of the way.
- *Behavioral nudges* (cooldown, drawdown warnings) — calm, factual, never scolding. "You've taken 3 trades in the last 5 minutes. Your stats on 3+ trade clusters: -$180 average." Never: "Slow down!"
- *Email* — like a note from a colleague, not a newsletter from a brand.

---

## 4. Color system

*Principles first, exact values locked when the name is chosen.*

**Mode:** Dark-first, always. Light mode is a secondary skin.

**Palette structure:**

- **Canvas** — a deep, slightly-blue near-black. Not pure black. Pure black is harsh; a hint of blue reads as "night sky" rather than "off."
- **Surface** — one or two steps up from canvas for cards and elevated surfaces. Very subtle.
- **Border / hairline** — low-contrast; never heavy.
- **Foreground / primary text** — near-white, slightly warm, never pure white.
- **Muted text** — a neutral grey for secondary info. At least 4.5:1 contrast on canvas.
- **Accent (brand)** — one signature color that becomes synonymous with us. Not red, not green (reserved for P&L). Likely a cool accent — desaturated cyan, soft electric blue, or muted amber. Decided with logo.
- **Positive (long / profit)** — a teal-shifted green. NOT pure #00FF00. Closer to a jade or seafoam that works against dark canvas without screaming.
- **Negative (short / loss)** — a coral-shifted red. NOT pure red. Closer to a warm terracotta or soft vermillion. Readable, not aggressive.
- **Warning** — amber, used sparingly for drawdown proximity and cooldown states.

**Draft palette (to refine):**

| Role | Hex | Notes |
|---|---|---|
| Canvas | `#0A0D12` | Deep blue-black |
| Surface | `#11151C` | One step up |
| Surface elevated | `#171C25` | Two steps up |
| Hairline | `#222834` | Low-contrast borders |
| Foreground | `#E8EAED` | Warm off-white |
| Muted | `#8A92A3` | Secondary text |
| Accent (TBD) | `#7DD3FC` | Placeholder — cool cyan |
| Positive | `#4ADE80` | Teal-leaning green |
| Negative | `#F87171` | Coral-leaning red |
| Warning | `#F5B544` | Muted amber |

**Anti-palette (never use):**

- Pure red `#FF0000` or pure green `#00FF00` — visually fatiguing, screams "amateur trading app"
- Neon / saturated gradients — crypto-bro territory
- Gold or mahogany — old-finance cliché
- Pastel fintech palette (mint + coral on white) — Robinhood territory; wrong audience

---

## 5. Typography

**Two families. No more.**

**UI sans — choose one, stick with it:**

- **Inter** — reliable default; everyone ships with it; slightly generic.
- **Geist** — Vercel's; distinctive without being weird; excellent numerals; free.
- **General Sans** — from Fontshare; friendly, distinctive, free.
- **Söhne** — premium (paid); the "ChatGPT / Linear" feel; expensive but ownable.

*Recommendation: start with Geist. It's free, modern, looks sharp in dark UI, and has a mono companion.*

**Monospace for numbers and data — non-negotiable:**

- **JetBrains Mono** — free, excellent, readable.
- **Geist Mono** — pairs with Geist, free.
- **Berkeley Mono** — premium, stunning, $75 personal license.

*Recommendation: Geist Mono for consistency with the sans choice.*

**Type scale (starting point):**

| Role | Size | Weight | Line-height |
|---|---|---|---|
| Display | 48-64px | 500 | 1.05 |
| H1 | 36px | 500 | 1.15 |
| H2 | 28px | 500 | 1.2 |
| H3 | 20px | 500 | 1.3 |
| Body | 15-16px | 400 | 1.55 |
| Small | 13px | 400 | 1.5 |
| Micro | 11px | 500 uppercase tracked | 1.4 |
| Data (mono) | 13-14px | 400 tabular | 1.3 |

**Rules:**
- Numbers in P&L columns, tables, and charts are ALWAYS in mono with tabular figures. Non-negotiable.
- Headings use medium (500), never bold (700). Bold reads as shouting.
- Tracking: body at 0, micro-labels at +1 to +2% for uppercase legibility.

---

## 6. Visual language

**Layout:**

- Generous negative space in marketing and dashboards.
- Tight density where it earns it (trade tables, analytics grids).
- 8px baseline grid. Everything snaps.

**Surfaces:**

- Flat. Hairline borders (`1px solid hairline`), not shadows.
- Subtle surface elevation via background color shift, not drop shadows.
- No glassmorphism. No heavy gradients. A single barely-there gradient on hero surfaces is the max.

**Iconography:**

- **Lucide** icons for the UI (Geist-adjacent, clean, free).
- 1.5px stroke. No filled icons except for state indicators.
- Icons are functional, never decorative.

**Motion:**

- Micro-animations only where they convey state change (drawdown bar filling, cooldown timer, trade row appearing).
- No parallax scrolls, no loading confetti, no page transitions.
- Easing: ease-out for entry, ease-in for exit, 150-250ms durations.

**Data visualization:**

- Recharts for dashboards, TradingView Lightweight Charts for price.
- Grid lines are near-invisible. Axis labels in muted foreground.
- Positive series always use the positive color; negative always negative. Never swap.
- Charts tell one story at a time. If a chart has three y-axes, it's the wrong chart.

---

## 7. Logo direction (to be designed)

**Concept brief for whoever designs the mark:**

- A mark that works at 16px (favicon) and 400px (hero).
- Monochrome first; must hold up in single-color before color is considered.
- References the meta-feature concept: perception, measurement, alignment, or the gap between two things.
- Geometric, precise. Not illustrative, not mascot-based.
- If the name is Parallax: concentric or offset shapes that suggest viewpoint shift. If Throughline: a continuous line motif. If Tape: the ticker-tape horizontal motif reinterpreted.

**What the logo should NOT be:**

- A bull, a bear, a candlestick, an arrow going up, a dollar sign, a chart line. All done to death.
- A generic tech swoosh or gradient blob.
- Anything that requires color to work.

---

## 8. Photography and imagery

- Avoid stock photos of people pointing at screens. Always fake.
- Product screenshots are the primary imagery. The product is beautiful; show it.
- Abstract data visualizations (zoomed-in chart details, custom-rendered drawdown curves) make great secondary imagery.
- No AI-generated imagery ever. It dates instantly and signals low effort.

---

## 9. The "never do" list

1. Gamify trading. No streaks, badges, or "levels."
2. Use fear-based marketing. "Don't blow your account!" is beneath us.
3. Compare to competitors by name in marketing copy.
4. Promise returns, outcomes, or "edges."
5. Use the words "easy," "simple," or "fun" about trading.
6. Ship a feature that isn't in service of the meta-feature.
7. Design for the demo. Design for the 200th day of use.

---

## 10. Inspiration (study these, don't copy them)

- **Linear** — tone, motion, density, microcopy.
- **Vercel** — typography, dark mode done right, restraint.
- **Stripe** — documentation and marketing craft.
- **Arc browser** — personality without being cringe.
- **Things 3** — precision in small UI details.
- **Bloomberg Terminal** — density as a virtue, mono data.
- **Nothing (the phone brand)** — how to make restraint feel distinctive.

Study what makes each feel the way it does. Then build something that feels like us.

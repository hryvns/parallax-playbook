# V1 Specification — Launch Release

**Status:** Locked scope. April 2026.
**Codename:** `trader-platform`
**Shipping:** One feature, done well, on a beautifully-made site.

---

## The one-sentence pitch

**See what freelancing costs you.**

A trading journal built around one question: which trades did you take because they were on your playbook, and which ones did you take because you were bored, emotional, or chasing?

---

## The launch thesis

Every disciplined scalper has setups they believe in — ORB on NQ, failed auction reversals, first-five-minute reversals, whatever they've worked out. Those setups are their edge. Every other trade is noise, tilt, or boredom.

Most traders have never quantified the difference between their playbook trades and their freelance trades. When they see it for the first time, in dollar terms, it reframes their entire relationship with discipline.

The launch product does exactly this. Nothing else. No pattern analytics, no statistical significance, no behavioral interventions, no combine tracker, no pre-trade calculator. Those are all good features. They wait.

Launch ships **one feature done exceptionally well on a carefully crafted site**. That's the entire product on day one.

---

## Why one feature and not five

This is a deliberate departure from the original 5-feature v1 scope.

**The reasoning:**
- Solo builder timelines are optimistic by default. A 10-14 week "5-feature v1" is likely 6+ months in reality. That's a long time before learning anything from real users.
- A beautiful site with one sharp feature reads as confident and intentional. A site with five half-finished features reads as scattered.
- The aesthetic bar (hairlines, Geist, no gamification, no glass) is easier to execute across less surface area.
- Real user behavior is better data than our brainstorm. Ship one feature, watch 100 users, let the data tell us feature #2.

Every successful indie SaaS shipped narrow and grew: Linear started as issue tracking, Notion as a block editor, Superhuman as keyboard shortcuts for email. "Ship wide, then refine" is how venture-funded teams work. "Ship narrow, then expand" is how indie builders win.

---

## Why Playbook specifically

Playbook enforcement beat the other four candidates on retention and differentiation, while being acceptable on build time.

**Against Cooldown Lock (the runner-up):**
- Cooldown is a reactive single-moment feature. Users experience it once per losing day. Retention loop is weak.
- Playbook is a daily/weekly return reason. Users come back to see the split number move. Retention loop is strong.
- Cooldown ships faster (3-4 weeks standalone) but doesn't scale into the rest of the product.
- Playbook requires journal infrastructure, which the product needs anyway.

**Against the journal alone:**
- A generic journal is a commodity. Edgewonk, Tradervue, TraderSync, TradeZella all do this.
- A journal built around the playbook split is differentiated on day one.

**Against the pre-trade calculator:**
- The calculator is a tool. The playbook is a mirror.
- Tools get used and forgotten. Mirrors get returned to.

**Against the combine tracker:**
- Combine tracker only works for users in an active evaluation. Narrow audience for launch.
- Playbook works for every serious scalper regardless of funding status.

Playbook is the feature that makes a user say "this is different" within the first week of use.

---

## What ships at launch

### 1. Playbook enforcement (the flagship, the pitch, the marketed feature)

**Playbook definition:**
- User creates their setups. Each has:
  - Name (e.g. "ORB NQ Morning")
  - Rules (free-text description — we don't parse)
  - Max attempts per day (optional guardrail)
  - Target R (optional reference)
  - Notes
- Start with 2-3 setups suggested, more can be added anytime.

**Trade tagging:**
- Every trade (imported or manual) must be tagged with one of: a playbook entry, or "Off-playbook"
- No trade gets saved without a tag. This is deliberate friction — it's where the data comes from.

**The dashboard:**
- The primary view of the product. What users see when they log in.
- On-playbook vs Off-playbook, split by: trade count, win rate, P&L, R-multiple average
- Always features the headline: **"Would be +$X if you'd only traded your playbook"**
- Drill-down by individual playbook, by time period, by instrument

**Weekly review card:**
- Monday morning email / in-app card summarizing last week's split
- Reinforces the habit loop

### 2. Journal foundation (the infrastructure that makes #1 possible)

The launch product IS a journal — Playbook is the marketed feature on top of it. The journal infrastructure required:

- **CSV import from Tradovate** (covers Topstep, Apex, and several other major prop firms for futures scalpers — the highest-leverage single integration)
- **Manual trade entry** as a fallback for any trader not on Tradovate, and for editing imported trades
- **Trade list view** — chronological, filterable, clean
- **Basic P&L stats** — cumulative P&L, win rate, average R, expectancy
- **User accounts** — sign up, log in, password reset, data privacy

The journal foundation is not marketed as a feature. The landing page doesn't talk about "our journal." It talks about the playbook insight. The journal is the floor the playbook stands on.

### 3. The site itself

This is the thing most product specs forget to treat as a feature.

- Landing page that actually explains the insight, not a feature list
- Signup flow that's short and respectful
- Pricing page with one simple tier (TBD — likely $15-25/month range)
- Settings, account management
- Terms, privacy, refund policy (basic but real)

The site is built to the brand guidelines locked in `01_brand/brand_guidelines/`. Hairlines, Geist, no gradients, no emoji, no gamification. Dark-first. Mobile-responsive but desktop-optimized.

---

## What does NOT ship at launch

Everything else from the original feature universe. Each of these is explicitly deferred:

- Cooldown lock (feature 2 — see ROADMAP.md)
- Pre-trade calculator (feature 3)
- Combine tracker (feature 4)
- Personal volatility profile, time-of-day heat maps (future)
- Statistical significance calculator (future)
- Missed trades logger (future)
- Day character dashboard (future)
- Session replay (future)
- Correlated instrument awareness (future)
- Anonymous benchmarks, leaderboards, community (v3+)
- Mobile app (future — launch is desktop web only, responsive)
- Live broker API integration (future — CSV import only)
- Additional broker CSV parsers beyond Tradovate (post-launch expansion)
- Trade screenshots / chart uploads (future)
- AI / LLM features (deliberately never, unless a specific feature genuinely needs it)

See `OUT_OF_SCOPE.md` for the full explanation of each, so we don't re-debate these.

---

## Success criteria

Launch is "done" when:

1. A new user can sign up, define 2 playbook entries, manually enter 10 trades tagged against those playbooks, and see the on-playbook vs off-playbook split within 15 minutes of signup.
2. A Tradovate user can upload a CSV of their last 100 trades, tag them against their playbooks (using bulk-tag for obvious ones), and see the split within 10 minutes of upload.
3. The weekly review card generates accurately every Monday for users with 5+ trades in the past week.
4. The site is built to brand spec — passes the "does this look like it was made by someone who cares" test.
5. Performance: trade list loads in under 1 second for users with <5,000 trades. CSV import parses a 500-trade file in under 5 seconds.

Launch is NOT gated on user count. Ship it, share it in a small number of targeted places (specific prop firm Discords, futures scalping subreddits), and see what happens.

---

## Build order

Weeks 1-2: Foundation
- User accounts / auth
- Database schema (trades, users, playbooks)
- Base UI shell using brand system

Weeks 3-4: Journal core
- Manual trade entry
- Trade list view with basic stats
- Tradovate CSV parser

Weeks 5-6: Playbook layer
- Playbook CRUD
- Trade tagging (required field)
- Bulk tagging for import review queue

Weeks 7-8: The dashboard
- On-playbook vs off-playbook split view
- Filtering and drill-down
- Headline insight number

Weeks 9-10: Polish and ship
- Weekly review card (email + in-app)
- Landing page
- Settings, billing, account management
- Pre-launch testing with 3-5 real traders

**Realistic total:** 10-12 weeks of focused work for a solo builder using Claude Code. Likely 4-6 months at part-time pace. Whatever it is, it is — the scope is what ships, adjusted for your actual available time.

---

## Pricing (draft, not final)

**Single tier.** No free tier at launch, no trial gymnastics.

- $19/month or $190/year (2 months free on annual)
- 14-day full refund, no questions
- First 50 users: $10/month lifetime if they give feedback during onboarding

Why no free tier: gives the wrong signal, attracts the wrong users. Serious scalpers aren't price-sensitive at $19/month — that's less than one ES tick at size. Free-tier users rarely become customers and take disproportionate support time.

Why $19 specifically: lower than Tradervue/TraderSync entry tiers ($29-30), higher than free junk, signals a real product. Adjustable once we have data.

---

## What we're not deciding at launch

- Final product name (still `trader-platform` codename — see `01_brand/naming/NAMING_EXPLORATION.md`)
- Domain (we'll buy one when we have a name)
- Payment processor (likely Stripe, but decide at build time)
- Hosting (likely Vercel + Supabase per the MANIFESTO — confirm at build time)
- Marketing channels (decide post-launch based on what works)

---

## Out of scope — see `OUT_OF_SCOPE.md`

Full list of deferred features lives in the out-of-scope doc. Before proposing any new feature: check that doc first. If it's there, it's deferred for a reason.

# User Journey

**Purpose of this doc:** trace the user from "landed on the site for the first time" to "oh shit, this is different" — in real detail. Every screen, every decision, every friction point. If a feature doesn't serve this journey, it doesn't ship at launch.

**The goal of the journey:** deliver the core insight (on-playbook vs off-playbook P&L) within the first session, and make the user want to come back Monday morning to see the weekly review card.

---

## Who we're building for (in one paragraph)

A futures scalper, probably 28-45, trading ES/NQ/MES/MNQ on Tradovate, active in a Topstep or Apex combine or recently funded. Has been trading seriously for 1-5 years. Profitable on some days, bleeding on others. Knows they should journal but hasn't stuck with it. Has tried Tradervue or Edgewonk and found them too generic or too analytical. Reads prop firm Discords and futures Twitter. Trusts other traders more than marketers. Suspicious of anything that looks like hype, gamification, or AI marketing.

They're not a beginner. They know what R-multiple means. They know what their edge is supposed to look like. What they don't know is the honest dollar answer to: "how much does my own discretion cost me?"

---

## Act 1 — Discovery to signup

### Entry point

User arrives from one of:
- Word of mouth in a futures Discord ("someone said this shows you on-playbook vs off-playbook PnL")
- A Reddit post (r/Daytrading, r/FuturesTrading)
- A tweet from someone they follow
- Organic search (low priority for launch, not optimized)

They land on the homepage.

### Landing page — what they see

The single job of the landing page is to communicate the insight in under 10 seconds. Not features. Not the founder story. Not testimonials. The insight.

**Headline:** *See what freelancing costs you.*

**Subhead:** *A trading journal built around one question: which trades were on your playbook, and which ones weren't?*

**The hero demo:** a static or animated example of the dashboard — the split view showing:

```
On-Playbook          Off-Playbook
23 trades            17 trades
64% win rate         35% win rate
+$4,230              -$3,810

Net: +$420
You would be +$4,230 if you'd only traded your playbook.
```

That last line is the whole pitch. If they read it and think "huh, I wonder what my number is" — they sign up. If they read it and shrug — they're not our user.

**Supporting sections (scroll-down, short):**

- *"How it works"* — three steps: define your playbook, tag every trade, see the split
- *"What this is not"* — no AI coach, no gamification, no social features, not another generic journal
- *"For futures scalpers on Tradovate"* — be specific about the audience, accept that narrows it
- Simple pricing ($19/month, 14-day refund)
- One CTA, repeated: "Start tracking your split"

**What's NOT on the landing page:**
- Feature matrix
- Testimonials (we don't have real ones yet — fake ones are poison)
- AI/ML claims
- "Trusted by thousands of traders"
- Stock photography of people at monitors
- Gradient hero sections

### The signup

User clicks the CTA. They get:

- Email + password (or Google OAuth if easy at build time)
- One question: *"Are you currently in a prop firm combine?"* Yes/No/Funded. This is soft segmentation for future features; not used at launch.
- No credit card required to explore the empty product (we take the card at first playbook definition — see below)

### Immediately after signup

Land them directly on the empty playbook page. Not a dashboard of zeros. Not a "welcome tour." An empty playbook with one prompt:

> *"What's your first setup? Name it. Describe the rules. Start with your most reliable one."*

The prompt is the onboarding. No modal, no tour, no "Step 1 of 5." The product itself is the tutorial.

---

## Act 2 — First session (the first 15 minutes)

### Defining the first playbook

User writes their first setup. UI is minimal:

- Name field (required) — "ORB NQ Morning"
- Rules field (required, free text) — they describe it in their own words
- Max attempts per day (optional number)
- Target R (optional number)
- Notes (optional)

Save.

Prompt again: *"Want to add another? Most traders have 2-3 setups they really trust."*

User adds 2-3 more. Or skips — they can add more anytime.

### The "now what" moment

After defining 1+ playbook, the dashboard unlocks. It's empty — just the split view with zeros.

Above the empty dashboard, two clear paths:

**Path A (Tradovate user):** *"Upload a CSV of your recent trades"*
- Button opens file picker
- User exports CSV from Tradovate, uploads
- Import review queue appears

**Path B (everyone else, and Tradovate users who want to start fresh):** *"Log your first trade manually"*
- Button opens a quick trade entry form

### The tagging experience — the heart of the product

This is where the product earns its rent.

**For CSV import (Tradovate user with 50-500 trades):**
- Trades appear in a review queue, oldest first
- Each trade shows: date, instrument, side, entry, exit, size, P&L, duration
- Required action: tag each with a playbook or "Off-playbook"
- Bulk tag available: select multiple, tag all at once ("these 8 ORB trades on 4/12")
- Keyboard shortcuts: 1/2/3 for playbooks, O for off-playbook, arrow keys to navigate
- Progress bar: "Tagged 23 of 117"

This is friction. It's intentional friction. It's also where they're forced to confront their own patterns — "yeah, that was an ORB retry I shouldn't have taken" — while tagging.

**For manual entry:**
- Quick form: instrument, entry price, exit price, stop price, size, date/time
- Required: playbook tag (dropdown with their setups + "Off-playbook" at bottom)
- Optional: notes
- Submit saves the trade AND returns them to the form pre-filled with last instrument/size for quick re-entry

### The first "oh shit" moment

Once they've tagged 10+ trades (manually) or completed the CSV review queue, the dashboard shows real numbers for the first time.

The headline insight sits at the top of the dashboard:

> **You would be +$X instead of +$Y if you'd only traded your playbook.**

or, if they're currently negative on playbook but positive off-playbook:

> **Your playbook is bleeding $X. Your off-playbook trades saved you. Investigate why.**

The insight is always honest. We don't sugarcoat. If the user's playbook is actually worse than their freelancing, we tell them — that's a different kind of valuable insight.

Below the headline, the split view:

```
ON-PLAYBOOK                OFF-PLAYBOOK
Trades: 23                 Trades: 17
Win rate: 64%              Win rate: 35%
Average R: +1.12           Average R: -0.64
P&L: +$4,230               P&L: -$3,810
```

Below that, drill-down by individual playbook. Click "ORB NQ Morning" to see just those trades. Click "Off-playbook" to see what they're actually freelancing on.

This is the moment. If we've built it right, they do two things:

1. Take a screenshot
2. Think about tomorrow morning's trades differently

### End of first session

User closes the tab. We want them to come back. Two mechanisms:

- **Monday morning email:** weekly review card (fires every Monday at 7am ET for active users)
- **Nothing else.** No daily "don't forget to journal!" emails. No notifications. No gamified streaks. The product earns return visits by being useful, not by nagging.

---

## Act 3 — Return visits (the retention loop)

### The daily pattern

User trades during the morning. Closes positions around lunch or early afternoon. Around 2-4 PM ET, they come back to the product.

**Their session:**
1. Open the site. Land on dashboard.
2. Quick glance at today's P&L and today's split.
3. Tag any new trades (from CSV re-upload or manual entry).
4. See the updated split. Close the tab.

Session length: 3-8 minutes. That's the goal. Long sessions mean the product is getting in the way. Short, satisfying sessions mean it's doing its job.

### The weekly pattern

Monday morning, user opens their email. Weekly review card:

> **Last week — on vs off playbook**
>
> You took 40 trades. 23 were on your playbook (+$4,230). 17 were off-playbook (-$3,810).
>
> **You would be $4,230 up instead of $420 if you stopped freelancing.**
>
> Your off-playbook trades were mostly:
> - "ORB retries" (8 trades, -$1,800)
> - "No tag" (you didn't specify why, 6 trades, -$1,200)
> - "Feeling it out" (3 trades, -$810)
>
> [View full breakdown →]

They click through. See the full dashboard. Maybe tag some untagged trades. Close the tab.

This is the retention engine. Weekly cadence. Honest numbers. No fluff.

### The monthly pattern (emergent)

We don't build anything special for monthly at launch. But users naturally come back at month-end to see the month's split. We make sure the dashboard supports time-range filtering so they can compare this month to last.

---

## Friction audit — where users churn

Every spec should name where users will leave. For launch:

**Friction point 1: CSV upload is confusing.**
- Mitigation: dedicated "How to export from Tradovate" walkthrough with screenshots. This is a one-time first-use problem.

**Friction point 2: Tagging 200 trades from a CSV feels like work.**
- Mitigation: bulk tagging, keyboard shortcuts, "save and come back" persistence. Accept that some users will bail here — they're not our user if they won't put in the effort.

**Friction point 3: "I don't really have a written playbook" — user freezes at the empty playbook prompt.**
- Mitigation: three example playbooks visible below the form (ORB, failed auction reversal, opening drive) as prompts. User can copy-paste-edit one to start.

**Friction point 4: Dashboard is empty until they've tagged enough trades.**
- Mitigation: explicit progress indicator ("Tag 10 more trades to unlock your first insight"). Manage expectations.

**Friction point 5: Users forget to come back.**
- Mitigation: Monday email is the ONLY reminder. No push notifications, no "you haven't logged in" nudges. If the product isn't useful enough to return to naturally, adding nags won't fix it — it'll just make them unsubscribe.

---

## What we're deliberately NOT doing in the launch journey

- No onboarding tour / product walkthrough (the product itself is the tutorial)
- No empty-state illustrations or mascots
- No gamification — no streaks, badges, achievements
- No "trader score" or ranking
- No daily digest emails
- No push notifications of any kind at launch
- No social sharing features ("share your split on Twitter!")
- No referral program (adds friction for us with no upside at launch scale)
- No AI-suggested playbooks, no AI anything

Each of these is a deliberate choice. The user's time and attention are respected. The product tells the truth and gets out of the way.

---

## The North Star question

For every design decision, every feature idea, every piece of copy:

*Does this help the user see their on-playbook vs off-playbook split more clearly, or does it get in the way?*

If it doesn't serve the split, it doesn't ship.

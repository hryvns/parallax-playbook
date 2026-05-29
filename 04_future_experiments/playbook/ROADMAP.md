# Roadmap

**Purpose of this doc:** sequence for features 2, 3, 4, 5 after launch ships. Not a timeline — a priority order and the reasoning behind it. Real decisions will be informed by what launch users actually ask for.

**Guiding principle:** ship one feature at a time. Each release adds exactly one capability, fully built, and gets 2-4 weeks of user observation before starting the next. Resist the urge to bundle.

---

## The rule of the roadmap

**User feedback beats this document.**

Whatever launch users actually ask for — if 10 of 50 early users independently request the same feature and it's not feature 2 on this list — ship what they ask for instead. The sequence below is our best guess, not a contract.

But absent strong contrary feedback, this is the order.

---

## Feature 2 — Cooldown Lock

**Why this goes next:** it's the feature I originally argued for as "ship first" — the one that most clearly embodies the thesis (active intervention, not passive analytics). After launch ships and users are using Playbook, Cooldown Lock deepens the behavioral intervention story. "First we show you what freelancing costs — now we catch you before the revenge trade." That's a coherent narrative arc.

**What it is:**
- After a losing trade is logged (manual or via import), a full-screen interstitial blocks the app for a user-set duration (default 5 min, configurable 1-15 min)
- Shows: breathing timer, user's pre-written rules, their lifetime stats on trades taken within 5 minutes of a loss
- Dismiss button is prominent — we don't trap users
- Every dismissal is logged
- Over time, shows: "You've dismissed 47 times. Those trades are -$3,200."

**Build estimate:** 3-4 weeks. Relatively contained. Leverages existing trade data and loss detection.

**What needs to exist in the data model:** a new `cooldown_dismissals` table logging user_id, timestamp, trade_id that triggered it, and dismissed/waited flag.

**Release positioning:** "Playbook told you what happened. Cooldown catches you before it happens again."

---

## Feature 3 — Pre-Trade Calculator

**Why this goes third:** it's the day-zero value feature I originally argued should be first. Pushing it to feature 3 is a bet that Playbook + Cooldown are a stronger launch narrative than Calculator + Journal. But Calculator still matters — it's the tool users reach for in the heat of a trading decision.

**What it is (simpler version first):**
- User configures once: prop firm rules (max daily loss, standard risk per trade), current account balance
- Per-trade input: instrument, entry price, stop price
- Output: contracts for 1R at standard risk, max contracts allowed given remaining daily loss, tick value, dollar risk, red banner if full stop-out breaches daily loss
- Standalone — not yet tied to live journal drawdown

**v3.5 upgrade (later):** integrate with live journal P&L so the "remaining daily loss" updates automatically from today's trades instead of manual entry.

**Build estimate:** 2-3 weeks for standalone version, 2 more weeks for live integration later.

**What needs to exist:** new columns on `users` for risk settings, or a separate `risk_configs` table if rules get complex.

**Release positioning:** "Before the trade is even placed, know exactly how much size you should take."

---

## Feature 4 — Combine Tracker

**Why this goes fourth:** it's powerful for users in an active combine but narrow in audience. Playbook, Cooldown, and Calculator all apply to every scalper. Combine Tracker only applies to users currently in an evaluation. Shipping it fourth means we've already proven value to the broader audience before building for the narrow one.

**What it is:**
- User inputs combine rules: prop firm, account size, profit target, max daily loss, max drawdown, min trading days, other rules
- Live dashboard: days elapsed, progress to target, distance from daily loss, distance from drawdown, daily P&L needed to pass
- Flags if today's behavior trends toward rule breach

**Build estimate:** 3-4 weeks.

**What needs to exist:** new `combine_configs` table, integration with trades to compute live progress, a dedicated dashboard view.

**Release positioning:** "Built for Topstep, Apex, FTMO, and the other combines. See exactly where you stand every morning."

---

## Feature 5 — Personal Volatility Profile

**Why this goes fifth:** this is where we pivot from intervention to insight. The first four features are about making the user do the right thing. Feature 5 is the first purely analytical feature — it teaches the user something about themselves without telling them what to do about it.

**What it is:**
- Time-of-day heat map (user's P&L by hour of day)
- Day-of-week breakdown
- Personal P&L bell curve (distribution of daily outcomes)
- "Your average day is +$X. Your best 10% of days average +$Y. Your worst 10% average -$Z."

**Build estimate:** 2-3 weeks. Mostly a new dashboard, computation over existing trade data.

**Release positioning:** "See the shape of your own trading, not someone else's."

---

## Features that come later (but we've already thought about)

### Missed Trades Logger
The feature you almost added to launch. Still great. Goes in after the core five are shipped.

### Statistical Significance Calculator
Quick to build, unique insight, but narrow in daily utility.

### Day Character Dashboard
The "what kind of day is today" morning briefing. High value but expensive to build — requires VIX feed, econ calendar, Fed blackout data, Globex volume, ES/NQ overnight range, classification logic. This alone could be a month of work. Worth it, but not soon.

### Session Replay
User's trades plotted on a chart of ES/NQ with econ events overlaid. Requires OHLC data pipeline and chart rendering. Multi-month project.

### Correlated Instrument Awareness
Niche. Valuable for sophisticated users only.

### Anonymous Benchmarks
Requires critical mass of users first. Can't build until there's data to aggregate.

### Opt-in Leaderboards
Community-adjacent. Requires trust from an active user base. Far future.

---

## What we're NOT adding, even if users ask

Some requests are predictable and some of them are traps. These requests will come and we should be ready to decline:

- **AI trade coach / LLM analysis of trades.** Doesn't serve the thesis. Users distrust AI analysis of their trading (correctly). If we ever add AI, it's for a specific narrow task with clear value, not as a chatbot.
- **Mobile app.** Mobile-responsive website at launch is enough. Native app is a massive investment for a desk-bound workflow.
- **Social features / Discord integration / community forum.** Out of scope for the indie phase. If we ever build community, it's a separate product initiative.
- **Multi-asset support beyond futures.** Crypto and forex users are different audiences with different cultures. Adding them dilutes the product's focus.
- **Broker API / live sync.** CSV import is reliable and private. Live broker connections open up security, reliability, and support burden we can't handle solo.
- **Team / firm accounts.** Consumer product, one user per account. If a prop firm wants to offer it to their traders, that's a business conversation, not a feature.

---

## The cadence

If we ship on schedule:
- Launch (Playbook + Journal foundation): Month 0
- Feature 2 (Cooldown Lock): Month 2-3
- Feature 3 (Pre-Trade Calculator): Month 4-5
- Feature 4 (Combine Tracker): Month 6-7
- Feature 5 (Volatility Profile): Month 8-9

That's 9-12 months to deliver the original 5-feature vision, one feature at a time, with real user data informing each.

This is slower than the "ship it all in 10-14 weeks" v1 plan. It's also much more likely to actually ship, and the product at month 9 will be substantially better than the product a rushed 10-week v1 would have produced.

---

## The hard part

The hardest part of this roadmap isn't building the features. It's not adding the sixth feature before feature 2 is solid. It's not adding combine-tracker when a user asks for it on day 40 — before cooldown ships.

Discipline in shipping order is the same kind of discipline the product is trying to teach traders. Practice what we preach.

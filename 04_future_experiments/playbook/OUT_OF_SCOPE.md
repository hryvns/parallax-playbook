# Out of Scope

**Purpose of this doc:** an explicit list of everything NOT shipping at launch, with the reasoning. When you (or Claude Code, or a future collaborator) are tempted to add something, check this doc first. If it's here, it was considered and deferred. Don't re-debate.

**The rule:** adding anything on this list to launch requires a conscious decision to cut something else. Scope is zero-sum.

---

## Features deferred to post-launch (already have a home on the roadmap)

These are planned — just not at launch. See `ROADMAP.md` for the sequence.

### Cooldown Lock
**Why not at launch:** shipping two features at once dilutes the launch story. Playbook is the lead. Cooldown is feature 2, probably 2-3 months post-launch.

### Pre-Trade Calculator
**Why not at launch:** it's a tool, not a mirror. Tools get used and forgotten; mirrors build retention. Playbook is the stronger day-one hook. Calculator is feature 3.

### Combine Tracker
**Why not at launch:** narrow audience (only users in an active evaluation). Playbook works for all serious scalpers; Combine Tracker works for a subset. Ship broad first, narrow later. Feature 4.

### Personal Volatility Profile (time-of-day heat map, bell curve)
**Why not at launch:** this is an insight feature, not an intervention feature. The launch thesis is intervention. Insight belongs in the next chapter. Feature 5.

### Statistical Significance Calculator
**Why not at launch:** unique but narrow in daily utility. Users check it once, maybe twice a quarter. Doesn't build a daily habit loop.

### Missed Trades Logger
**Why not at launch:** genuinely valuable, and a real candidate for early post-launch. Held back because it requires the user to build a new daily habit (logging trades they didn't take), which is a lot to ask alongside the "tag every trade you did take" habit Playbook already requires.

### Day Character Dashboard
**Why not at launch:** expensive to build properly. Requires VIX feed, economic calendar data, Fed blackout logic, Globex volume comparison, ES/NQ overnight range calculation, and a classification model. Weeks of work for a single dashboard. Worth it eventually — this is actually a killer marketing moment when it ships — but wrong order.

### Session Replay
**Why not at launch:** requires OHLC data pipeline, chart rendering library, marker overlay system, and econ event integration. Multi-month build on its own. Very powerful feature, wrong time.

### Correlated Instrument Awareness
**Why not at launch:** niche. Most scalpers are trading one instrument at a time. Users who need this are sophisticated enough to calculate it themselves.

### Anonymous Benchmarks ("your win rate is in the 62nd percentile")
**Why not at launch:** requires a user base to aggregate across. Can't benchmark against 5 users. Meaningful benchmarks need hundreds of users logging trades.

### Opt-in Prop Firm Leaderboards
**Why not at launch:** requires trust, moderation, and a reason for users to want to be visible. All of that comes after a user base exists.

---

## Integrations deferred

### Additional broker CSV parsers (NinjaTrader, Rithmic, ProjectX, others)
**Why not at launch:** Tradovate alone covers Topstep, Apex, and several other major prop firms. That's the highest-leverage single integration. Every additional parser is more QA surface, more edge cases, more support burden. Add them based on actual user demand post-launch.

### Live broker API integration (real-time trade sync)
**Why not at launch:** opens up huge security, reliability, and support burden. OAuth flows, token storage, connection debugging, "why didn't my trade sync" support tickets. CSV import is reliable, private, and asynchronous — the user uploads when they're ready. Good enough at launch.

### TradingView integration beyond CSV
**Why not at launch:** TradingView has a broker integration feature, but it's not widely used by prop firm scalpers. CSV from TV is fine for the small number of users who need it.

### Stripe, payment processing
**In scope at launch.** This is shipping — listed here only for clarity. Stripe for subscriptions, use Stripe Checkout for signup simplicity.

### Email sending (transactional + weekly review)
**In scope at launch.** Listed for clarity. Use a service like Resend or Postmark — not building our own mail infrastructure.

---

## UX features deferred

### Onboarding tour / product walkthrough
**Why not at launch:** the product is the tutorial. Empty playbook prompt, example setups visible, clear next-step CTAs. Tours get dismissed, ignored, and annoy sophisticated users (which our audience is).

### Gamification — streaks, badges, achievements, trader scores
**Why not at launch:** fundamentally at odds with the brand. Scalpers are serious professionals, not children. Gamification signals unseriousness.

### Daily email digests, push notifications, browser notifications
**Why not at launch:** the Monday weekly review is the only notification. If users aren't returning naturally, nagging won't fix it — it'll just make them unsubscribe. Respect the user's inbox.

### Referral program
**Why not at launch:** adds friction for us (tracking, payouts, anti-abuse) with minimal upside at early scale. If launch grows virally through word of mouth — which is the hope — formalize a referral program then.

### Social sharing ("share your split on Twitter")
**Why not at launch:** users' trading P&L is private. Even sharing anonymized stats feels invasive. If users want to share a screenshot, they can.

### AI features — trade coach, LLM analysis, auto-generated insights, chatbot
**Why not at launch (and philosophically resistant to adding later):** the thesis is honest feedback from user's own data. AI analysis of trading is mostly noise, and the current market category is already polluted with "AI-powered" marketing that doesn't deliver. Competitors (TradeZella, TraderSync) lean heavily on AI marketing. Our differentiation includes *not* doing that.
**Potential exception:** if a specific narrow task genuinely benefits from AI (e.g. OCR on a broker screenshot to extract trades, or natural-language query of trade history), we consider it feature-by-feature. No general-purpose AI assistant.

### Chart rendering / embedded charts
**Why not at launch:** users have TradingView open on another monitor. We're not trying to be a charting platform. Deliberate non-feature.

### Trade screenshots / chart image attachments per trade
**Why not at launch:** file storage, image hosting, review UI. Nice-to-have that many journals offer — but a meaningful build that doesn't serve the core insight.

---

## Product features deferred

### Multi-account support
**Why not at launch:** one user = one trading account. If a user has a live account AND an active combine, they can import both CSVs and tag them as one. Multi-account separation is a real feature that needs real thinking — separate dashboards per account, aggregated views, account comparison. Not a launch problem.

### Multi-asset support (crypto, forex, equities, options)
**Why not at launch:** different audiences, different cultures, different mechanics. Launch is "for futures scalpers on Tradovate." Adding assets dilutes every design decision.

### Team / firm / multi-user accounts
**Why not at launch:** consumer product. If a prop firm wants to offer this to their traders as a branded tool, that's a B2B conversation post-launch, not a product feature.

### API / webhook access for power users
**Why not at launch:** no audience for it yet. Maintenance burden is real once shipped. Add if and when a meaningful user segment asks.

### Data export beyond "export all as CSV"
**Why not at launch:** one export format is enough. Excel exports, PDF reports, email summaries — all future.

### Custom dashboards / user-configurable widgets
**Why not at launch:** the power of the product is the opinion it has about what matters. Let users configure and we're back to being TradeZella with 50 reports.

### Trade annotation / tagging beyond playbook tag
**Why not at launch:** the playbook tag IS the meaningful tag. Adding "mood" tags, "confidence" tags, "market condition" tags turns the product into Edgewonk. Every tag field we add is a place where users disengage. Hold firm.

### Dark mode / light mode toggle
**Why not at launch:** dark-first per brand guidelines. One mode, done well. Light mode can come if a meaningful fraction of users ask.

---

## Infrastructure / business deferred

### Mobile native app (iOS / Android)
**Why not at launch:** scalpers trade at the desk. Mobile-responsive web is enough to check the dashboard on the go. Native app is a massive investment for the use case.

### Desktop native app (Electron / Tauri)
**Why not at launch:** web app is fine. Native desktop is a solution looking for a problem here.

### Self-hosted / on-premise option
**Why not at launch:** SaaS only. If a prop firm wants self-hosted, that's a paid conversation post-launch.

### White-label / prop-firm branded version
**Why not at launch:** possible B2B play later. Not launch.

### International / multi-currency / multi-language
**Why not at launch:** US market, USD, English. Futures scalping is dominated by US markets anyway. International later.

### SEO content marketing, blog, YouTube
**Why not at launch:** not a feature, but worth naming — we're not building a content marketing engine at launch. Launch through direct channels (Discord, Reddit, Twitter, word of mouth). Content is a post-launch growth question.

### Affiliate program
**Why not at launch:** attracts low-quality traffic and thin-content reviews. Can add later once product is proven.

### Free tier
**Why not at launch:** wrong signal for this audience. Serious scalpers aren't price-sensitive at $19/month. Free tiers attract the wrong users and create support burden. See pricing discussion in `V1_SPEC.md`.

### Free trial (vs. 14-day refund)
**Debatable.** Current plan is 14-day full refund instead of trial. Refund is a stronger confidence signal and avoids trial-expiry dark patterns. Could reconsider if conversion data post-launch suggests otherwise.

### Admin panel / support tools
**Why not at launch:** use direct Supabase access or a tool like Retool for admin at launch. Purpose-built admin UI is premature.

---

## Things we're actively deciding NOT to build — ever (unless we change mind for specific reason)

These aren't just "not at launch." They're philosophically rejected.

- **Trader scoring / ranking / trader IQ.** Reduces a human to a number in a way that serves the product, not the user.
- **Streak tracking / habit gamification.** Manipulates users into daily use whether or not it helps them.
- **Auto-generated "AI insights" that interpret trading behavior with LLM summaries.** Low signal, high hallucination risk, fundamentally different product than ours.
- **Push notifications on mobile for trade alerts.** We're a journal, not a signal service. Never.
- **Paid signals / trade ideas / market calls.** Not our business.
- **Social feed / activity stream of what other users are trading.** Privacy nightmare, and scalper Twitter already does this poorly. We don't do it at all.

---

## When you're tempted to add something

Read the MANIFESTO. Read this doc. If the feature isn't in either — why wasn't it considered? Is it genuinely new, or are we forgetting why something was deferred?

When in doubt, ship less. The constraint is the product.

# Screens Inventory

**Purpose of this doc:** list every screen the user sees in the launch product, with a one-line purpose and the critical elements. This isn't a design doc — no wireframes, no visual specs. It's a completeness check. If a screen isn't listed here, it doesn't ship.

**Rule:** if we can cut a screen, we cut it. The launch is better with 10 screens done well than 15 done okay.

---

## Public-facing (no login)

### 1. Landing page (`/`)
**Purpose:** communicate the insight in 10 seconds and drive signup.

**Elements:**
- Hero: headline, subhead, static dashboard mockup showing the split
- "How it works" — three short steps
- "What this is not" — anti-hype section
- "For futures scalpers on Tradovate" — audience statement
- Pricing block (single tier, $19/month, 14-day refund)
- FAQ (short: 5-6 questions max)
- Footer (terms, privacy, refund, contact)

### 2. Signup page (`/signup`)
**Purpose:** create an account in under 30 seconds.

**Elements:**
- Email + password (or Google OAuth)
- One segmentation question: "Currently in a prop firm combine?" (Yes/No/Funded)
- Terms checkbox
- Submit → lands directly on empty playbook

### 3. Login page (`/login`)
**Purpose:** self-explanatory.

**Elements:**
- Email + password
- Forgot password link
- OAuth option if built

### 4. Forgot password (`/forgot-password`)
**Purpose:** self-explanatory.

### 5. Pricing page (`/pricing`)
**Purpose:** answer "how much" for users who want the detail.

**Elements:**
- Single tier, monthly and annual
- What's included, spelled out
- Refund policy stated plainly
- FAQ on billing

### 6. Terms, Privacy, Refund (`/terms`, `/privacy`, `/refund`)
**Purpose:** legal basics. Use a template service — these don't need to be beautifully written, just real.

---

## Authenticated — the product itself

### 7. Dashboard (`/app` or `/dashboard`)
**Purpose:** the home screen. The one the user opens every day. The screen the weekly email links to.

**Elements:**
- Headline insight at top: *"You would be +$X if you'd only traded your playbook."* (Or the honest inverse if applicable.)
- Split view: on-playbook vs off-playbook
  - Trade count
  - Win rate
  - Average R
  - P&L in dollars
- Time range selector: This week / This month / All time / Custom
- Drill-down list: each playbook with its own mini-stats, click to filter
- Recent trades preview (last 5, with their tags)
- Quick actions: "Log a trade" / "Import CSV"

**Empty state (before 10+ trades tagged):**
- Progress indicator: "Tag X more trades to unlock your first insight"
- Link to add trade or import CSV

### 8. Playbook list / editor (`/playbooks`)
**Purpose:** manage the user's setups.

**Elements:**
- List of existing playbooks with name, # trades tagged, win rate, P&L
- "Add playbook" button
- Click a playbook → expand or navigate to edit view
- Edit view: name, rules (textarea), max attempts/day, target R, notes
- Delete with confirmation (ask if trades should be moved to Off-playbook or stay tagged)

### 9. Playbook detail (`/playbooks/:id`)
**Purpose:** all the trades tagged to a single playbook.

**Elements:**
- Playbook name and rules at top (for reference while reviewing)
- All trades tagged to this playbook
- Stats for just this playbook: win rate, avg R, P&L, trade count
- Time range selector
- Link back to dashboard

### 10. Trade list (`/trades`)
**Purpose:** see every trade, filter, edit, fix tags.

**Elements:**
- Table: date, instrument, side, entry, exit, size, duration, P&L, R, playbook tag
- Filters: date range, instrument, side, playbook, on-vs-off
- Click trade → trade detail
- Bulk actions: re-tag selected trades

### 11. Trade detail / edit (`/trades/:id`)
**Purpose:** view or edit one trade.

**Elements:**
- All trade fields, editable
- Playbook tag dropdown
- Notes field
- Delete button (with confirmation)

### 12. Manual trade entry (`/trades/new` or modal)
**Purpose:** log a trade that wasn't imported.

**Elements:**
- Required: instrument, entry price, exit price, size, side, date/time, playbook tag
- Optional: stop price, notes
- Submit → returns to form pre-filled with last instrument/size for fast re-entry
- Alternative submit: "Save and close"

### 13. CSV import (`/import` or modal)
**Purpose:** upload and review a Tradovate CSV.

**Flow:**
- Step 1: file picker + instructions ("Export from Tradovate → Trading History → CSV")
- Step 2: preview detected trades, confirm parse looks right
- Step 3: review queue — tag each trade with playbook or off-playbook
  - Bulk tag multiple at once
  - Keyboard shortcuts (1/2/3 for playbooks, O for off-playbook)
  - Progress bar
- Step 4: confirm import, redirects to dashboard

### 14. Settings (`/settings`)
**Purpose:** account management, preferences, billing.

**Tabs or sections:**
- Profile (email, password change)
- Preferences (timezone, default date range)
- Billing (current plan, payment method, invoice history, cancel)
- Data (export all data as CSV, delete account)

---

## Emails (technically not screens, but user-facing)

### 15. Welcome email
Sent on signup. Short. Links to "how to export from Tradovate." No drip sequence.

### 16. Password reset email
Standard.

### 17. Weekly review card
Sent Monday 7am ET. The retention loop. Contains:
- Subject: "Last week: +$X on playbook, -$Y off-playbook"
- Body: headline split, short breakdown, link to dashboard
- No other calls to action, no cross-promotion, no "also did you know"

### 18. Billing emails
Standard: receipt, failed payment, subscription canceled.

---

## What's NOT on this list (deliberately)

- Tour / walkthrough screens (the product is the tutorial)
- Onboarding checklist / progress page
- Help center / knowledge base (at launch, use a single `/help` page with 10 FAQs)
- Community / forum / Discord
- Blog / content marketing (post-launch)
- Admin dashboard (for you — use direct DB access or a tool like Retool at launch)
- Mobile app
- Any notification or preference center beyond basic settings
- Social login beyond Google (no Twitter/GitHub/etc. at launch)
- Team/multi-user features
- API or webhook access
- Broker connection status page (no live API integrations at launch)

---

## Screen count at launch

**Public:** 6 screens (landing, signup, login, forgot, pricing, legal)
**Authenticated core:** 8 screens (dashboard, playbooks list, playbook detail, trades list, trade detail, new trade, import, settings)
**Emails:** 4 types (welcome, password reset, weekly review, billing)

**Total: 14 screens + 4 email templates.**

This is the smallest complete product that delivers the insight. If we find a screen we can remove, we remove it. If we find a screen we need, it goes through a real gate — does it serve the core insight, or is it scope creep?

# Data Model

**Purpose of this doc:** high-level schema sketch so when you (or Claude Code) start building, the bones of the database exist. This is not a production-ready DDL — it's a thinking document. Details like exact column types and indexes get decided at build time in Supabase.

**Philosophy:** keep the model boringly simple at launch. It's easier to add columns than to remove them. It's easier to split a table later than to unscramble a tangled one now.

---

## The four core entities

Launch has four tables that matter. Everything else is derived or supporting.

### 1. `users`
The human account. Supabase Auth handles most of this — we just need our own profile table for product-specific fields.

```
users
├── id                    (UUID, matches Supabase auth.users.id)
├── email                 (text, unique)
├── created_at            (timestamp)
├── prop_firm_status      (enum: 'combine', 'funded', 'neither', nullable)
│                         — the soft segmentation question from signup
├── timezone              (text, default 'America/New_York')
├── subscription_status   (enum: 'active', 'trialing', 'past_due', 'canceled')
└── subscription_customer_id (text, Stripe customer ID)
```

### 2. `playbooks`
User-defined setups. Small table, read a lot.

```
playbooks
├── id                    (UUID)
├── user_id               (UUID, FK to users, indexed)
├── name                  (text, required)
├── rules                 (text, user's free-text description)
├── max_attempts_per_day  (integer, nullable)
├── target_r              (numeric, nullable)
├── notes                 (text, nullable)
├── sort_order            (integer — for user-controlled ordering)
├── is_archived           (boolean, default false — soft delete so we keep historical tag data)
├── created_at            (timestamp)
└── updated_at            (timestamp)
```

**Note on `is_archived`:** if a user deletes a playbook, we archive it instead of hard-deleting. Historical trades tagged to it keep their tag (the playbook name is preserved). Prevents data loss and keeps analytics intact.

### 3. `trades`
The big one. Every trade the user logs or imports.

```
trades
├── id                    (UUID)
├── user_id               (UUID, FK to users, indexed)
├── playbook_id           (UUID, FK to playbooks, nullable)
│                         — null means "Off-playbook"
├── is_off_playbook       (boolean — explicit flag because nullable FK is ambiguous)
│                         — true: user chose off-playbook
│                         — null FK + false flag: not yet tagged (import queue)
├── instrument            (text — 'ES', 'NQ', 'MES', 'MNQ', extensible)
├── side                  (enum: 'long', 'short')
├── size                  (numeric — number of contracts)
├── entry_price           (numeric)
├── exit_price            (numeric)
├── stop_price            (numeric, nullable)
├── entry_time            (timestamp)
├── exit_time             (timestamp)
├── pnl                   (numeric — dollar P&L, computed or imported)
├── r_multiple            (numeric, nullable — P&L / risk, computed when stop known)
├── fees                  (numeric, nullable)
├── notes                 (text, nullable)
├── source                (enum: 'manual', 'tradovate_csv', other parsers later)
├── source_trade_id       (text, nullable — broker's ID for dedup on re-import)
├── created_at            (timestamp)
└── updated_at            (timestamp)
```

**Key design decisions:**
- `playbook_id` nullable + `is_off_playbook` explicit flag. Three states:
  - `playbook_id` set, flag false → tagged to a playbook
  - `playbook_id` null, flag true → explicitly tagged off-playbook
  - `playbook_id` null, flag false → **not yet tagged** (sitting in import review queue)
- `source_trade_id` prevents duplicate imports. If user re-uploads a CSV covering some of the same days, we dedupe on this.
- Storing `pnl` rather than computing on read. Simpler queries, and broker-reported P&L may differ from naive (exit-entry)*size*multiplier in edge cases (partial fills, commissions). Store what the broker says.

### 4. `import_batches`
Metadata about CSV imports so we can show history and troubleshoot.

```
import_batches
├── id                    (UUID)
├── user_id               (UUID, FK to users)
├── source                (enum: 'tradovate_csv', extensible)
├── file_name             (text)
├── trades_detected       (integer)
├── trades_imported       (integer)
├── trades_duplicates     (integer)
├── status                (enum: 'pending_review', 'completed', 'failed')
├── error_message         (text, nullable)
├── created_at            (timestamp)
└── completed_at          (timestamp, nullable)
```

**Why this matters:** when a user re-imports a CSV three weeks later, we can show "last import: 3 weeks ago, 47 trades." When an import fails, we have diagnostics.

---

## Supporting tables

### 5. `weekly_reviews` (optional for launch — can be computed on-demand)
If we cache weekly summaries, they live here. Might skip at launch and compute weekly email on the fly.

```
weekly_reviews
├── id                    (UUID)
├── user_id               (UUID, FK)
├── week_start            (date — Monday of the week)
├── on_playbook_pnl       (numeric)
├── off_playbook_pnl      (numeric)
├── on_playbook_trades    (integer)
├── off_playbook_trades   (integer)
├── generated_at          (timestamp)
└── email_sent_at         (timestamp, nullable)
```

**At launch:** probably skip this. Generate the weekly email by querying `trades` at send time. Add this table if queries get slow.

### 6. `waitlist` or `feedback_submissions` (optional)
If you launch with a pre-launch waitlist or want a feedback form post-launch, a simple table for those submissions.

---

## What we're NOT modeling at launch

**Events / activity log.** We don't log every user action. Adds complexity, privacy surface, and storage costs. If we need to debug something, we look at the trades and import batches.

**Trade screenshots / file attachments.** Not a launch feature.

**Multi-account support.** One user = one trading account at launch. If a user has multiple accounts (live + combine), they import both CSVs and treat them as one. Multi-account is a v2 problem.

**Combine rules data.** Not a launch feature (combine tracker is a future release).

**Notifications / email preferences.** At launch, users get: welcome email, password reset, weekly review (opt-in via checkbox in settings, default on), billing emails. No preference center beyond an unsubscribe link in the weekly email.

**Broker connections / OAuth tokens.** CSV import only at launch. No live API integrations, no stored credentials.

**Chart data / OHLC storage.** No embedded charts at launch. We don't pull or store market data.

---

## Queries the product needs to support well

Writing this down because it informs indexing decisions.

1. **Dashboard main query:** "Give me all trades for user X, in time range Y, grouped by playbook/off-playbook, with sum(pnl), count, and win rate."
   - Index: `trades (user_id, exit_time)`

2. **Playbook detail query:** "All trades for user X tagged to playbook P."
   - Index: `trades (user_id, playbook_id, exit_time)`

3. **Trade list with filters:** "Trades for user X matching instrument/side/playbook filters, sorted by date."
   - Covered by the above indexes.

4. **Import dedup check:** "Does a trade already exist with source_trade_id = Z for user X?"
   - Index: `trades (user_id, source_trade_id)` (unique where source_trade_id not null)

5. **Weekly review:** "Sum P&L and counts for user X, last Monday–Sunday, grouped by on/off playbook."
   - Covered by the exit_time index.

---

## Migrations and evolution

At launch, we're in Supabase, which means migrations are just SQL files in version control. Keep them clean — every schema change gets a migration file, reviewed before applying.

**Anticipated post-launch migrations (in probable order):**

1. Add `cooldown_dismissals` table (feature 2)
2. Add `combine_configs` table (feature 4)
3. Add columns to `users` for pre-trade calc settings (feature 3)
4. Add broker connection tables if we ever move beyond CSV (far future)

We don't pre-build these. We add them when the feature ships.

---

## One honest note on over-engineering

This is a solo-builder launch. Don't over-model. If a column turns out unnecessary, drop it. If a table turns out unused, remove it. The goal at launch is to store trades, tag them, and show the split. Everything else is future scaffolding that might not get used.

When in doubt, favor the simpler schema.

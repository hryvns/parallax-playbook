# Playbook — Future Experiment (Parked)

**Status:** Specced but not actively being built. Parked for potential future development as an "experiment" on the personal site.

## Context

This folder contains a full product specification for a trading journal feature called **Playbook enforcement** — a tool that shows the dollar-value split between a trader's on-playbook trades and their off-playbook (freelance) trades.

This spec was written in April 2026 under the assumption that the project was a standalone SaaS product. That direction was later deprioritized in favor of building a personal site first (see `../../02_site/SITE_SPEC.md`).

The spec is preserved here because:
1. It's good work — thorough, well-considered, and still accurate about the feature it describes
2. The Playbook concept remains a legitimate future "experiment" that could be built as a standalone tool on the personal site down the line
3. Starting from scratch if revisited would waste significant effort

## What's in this folder

- **`V1_SPEC.md`** — the master spec for the Playbook product
- **`USER_JOURNEY.md`** — first-time user experience walkthrough
- **`SCREENS.md`** — inventory of screens and email templates
- **`DATA_MODEL.md`** — database schema sketch (Supabase)
- **`ROADMAP.md`** — post-launch feature sequence
- **`OUT_OF_SCOPE.md`** — deliberately deferred features

## If this ever gets unparked

Read the specs in order:
1. `V1_SPEC.md` first — understand the thesis and scope
2. Then `USER_JOURNEY.md` — the forcing function
3. Then the rest as needed

Before unparking, honestly ask: does this still fit what the site has become? The original spec assumed a specific audience (serious futures scalpers on Tradovate) and positioning (serious paid SaaS). If the site has evolved in a different direction, the spec may need to be updated before building.

# Typography System — Draft v0.1

## Families

**UI Sans — Geist**
- Source: https://vercel.com/font
- License: SIL Open Font License (free)
- Weights used: 400 (regular), 500 (medium), 600 (semibold)
- Why: modern, distinctive without being weird, excellent numerals, pairs with Geist Mono.

**Data Mono — Geist Mono**
- Source: https://vercel.com/font
- License: SIL Open Font License (free)
- Weights used: 400, 500
- Why: tabular figures by default, consistent with sans, free.

**Fallback stack (in CSS):**
```
font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif;
font-family: 'Geist Mono', 'JetBrains Mono', 'Menlo', 'Monaco', monospace;
```

## Scale

Based on a 1.25 modular scale, rounded for pixel snap.

```
display-lg    64px / 500 / 1.05 / -0.02em
display       48px / 500 / 1.05 / -0.02em
h1            36px / 500 / 1.15 / -0.01em
h2            28px / 500 / 1.20 / -0.01em
h3            20px / 500 / 1.30 / -0.005em
h4            17px / 500 / 1.35 / 0
body-lg       16px / 400 / 1.55 / 0
body          15px / 400 / 1.55 / 0
small         13px / 400 / 1.50 / 0
micro         11px / 500 / 1.40 / +0.04em uppercase
```

## Data / numeric typography

```
data-lg       20px mono / 400 / tabular-nums
data          14px mono / 400 / tabular-nums
data-sm       12px mono / 400 / tabular-nums
```

CSS: `font-variant-numeric: tabular-nums;` — always on for numbers in tables and P&L displays.

## Rules

1. Headings use weight 500, never 700. Bold reads as shouting in a trading context.
2. Numbers in any P&L, tick, contract, or statistical display are mono + tabular.
3. Micro labels (11px uppercase tracked) for category tags and section eyebrows only.
4. Line-height gets tighter as size grows. Display text at 1.55 looks loose.
5. Letter-spacing gets tighter as size grows. Micro uppercase gets extra tracking for legibility.

## Never

- Don't mix more than two families.
- Don't use italic for emphasis — use muted color or weight instead.
- Don't underline anything except actual hyperlinks in body copy.
- Don't set body text below 13px.

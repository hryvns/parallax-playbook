# Color System — Draft v0.1

*Lock these values after the logo is designed. Until then, these are working defaults.*

## Core palette

```
CANVAS            #0A0D12    // primary background
SURFACE           #11151C    // cards, panels
SURFACE_ELEVATED  #171C25    // modals, hover states
HAIRLINE          #222834    // borders, dividers
FOREGROUND        #E8EAED    // primary text
MUTED             #8A92A3    // secondary text, labels
```

## Semantic colors

```
POSITIVE          #4ADE80    // profit, long, success
POSITIVE_SUBTLE   #1A3A26    // positive backgrounds, subtle
NEGATIVE          #F87171    // loss, short, danger
NEGATIVE_SUBTLE   #3A1A1F    // negative backgrounds, subtle
WARNING           #F5B544    // drawdown approach, cooldown
WARNING_SUBTLE    #3A2D14    // warning backgrounds
INFO              #7DD3FC    // informational, neutral emphasis
```

## Placeholder accent (revisit with logo)

```
ACCENT            #7DD3FC    // brand accent — currently cool cyan
ACCENT_HOVER      #A5E2FD
ACCENT_SUBTLE     #1A2E3A
```

## Contrast checks (WCAG AA minimum on CANVAS)

- FOREGROUND on CANVAS: ~15:1 ✓
- MUTED on CANVAS: ~6.2:1 ✓
- POSITIVE on CANVAS: ~8.1:1 ✓
- NEGATIVE on CANVAS: ~6.4:1 ✓
- WARNING on CANVAS: ~9.5:1 ✓

All pass AA for body text. Verify AAA for critical numeric data displays.

## Usage rules

1. **Never use POSITIVE or NEGATIVE for non-P&L purposes.** If a button is green it will read as "profit." Reserve those semantics.
2. **Warning is for proximity, not violation.** Drawdown at 80% of limit = warning. Drawdown at 100% = negative.
3. **Accent is rare.** Used for primary CTAs, brand moments, and active states. Overuse dilutes it.
4. **Hairlines over shadows.** Separation comes from 1px borders or surface elevation, not from drop shadows.

## Light mode (secondary, build after dark is perfect)

To be defined. Inversion is not automatic — colors need to be re-tuned for light canvas. Do not ship light mode until dark is locked.

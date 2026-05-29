# Mockups

Static design references for the site. Not production code — these are visual targets to build toward in the real Astro project.

## What's here

- **`hero_market_sessions_v1.html`** — hero direction explored in chat on 2026-04-22. Dark atmospheric layout with:
  - Wordmark typography (Parallax ghost-offset + Playbook with gradient fade + period stop)
  - Monospace header nav and footer strip
  - Faint grid background
  - Atmospheric radial glows
  - Static globe SVG with session glow regions (NY active/bright, London closing/amber, Tokyo dark/faint)
  - City labels in monospace with session status
  - "System active" indicator with pulse animation

  Open in a browser to see it. Best viewed full-screen on desktop.

## What this mockup shows vs what the real site will do

**Shown:** composition, typography, color atmosphere, monospace details, general feel.

**Not shown (requires real implementation in Astro + WebGL):**
- The globe rotating on a 24-hour cycle
- Light flowing between sessions as the day progresses (Tokyo → London → NY handoff)
- Session regions brightening and fading in sync with real market hours
- Mouse-responsive parallax on the wordmark
- Entrance animations on page load
- Performance-optimized rendering on mobile

## When building in Claude Code

Use this mockup as a reference for static composition. Build the real hero with React Three Fiber (or similar WebGL framework) for the globe — don't try to replicate the static SVG approach in production. The static version was for chat-based iteration only.

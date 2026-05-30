#!/usr/bin/env node
/**
 * Generate a house-style illustration for each post — FREE, no API key.
 * Uses Pollinations.ai (Flux). Run from the repo root:
 *
 *   node scripts/generate-post-images.mjs            # fill in any missing
 *   node scripts/generate-post-images.mjs --force    # regenerate everything
 *
 * Saves PNGs to 02_site/app/public/post-images/<slug>.png. Templates use that
 * image when present and fall back to the generated SVG otherwise. Seeded by
 * slug, so re-runs reproduce the same image unless --force changes it.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, "..");
const POSTS_DIR = path.join(ROOT, "03_content", "posts");
const OUT_DIR = path.join(ROOT, "02_site", "app", "public", "post-images");
const FORCE = process.argv.includes("--force");

const TOPIC_ACCENT = {
  quantum: "luminous cyan (#7DD3FC)",
  consciousness: "soft violet (#C4A7F5)",
  mathematics: "warm amber (#F5B544)",
};

// THE LOCKED HOUSE STYLE — every image shares this so the whole site aligns.
// Note: avoid words like "cover / magazine / poster / editorial" — they make
// the model stamp gibberish headline text. Frame it as a plain illustration.
const STYLE = [
  "minimal conceptual digital illustration",
  "deep near-black navy background with generous negative space",
  "a single clear central subject, elegant and symbolic, filling the frame",
  "cinematic volumetric glow, subtle film grain, soft depth, high contrast",
  "smooth flat-vector art style with dimensionality",
  "premium quiet mysterious mood",
  "completely textless: no text, no words, no letters, no numbers, no captions, no watermark, no signature",
].join(", ");

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

function parseFrontmatter(md) {
  const m = md.match(/^---\s*([\s\S]*?)\s*---/);
  const block = m ? m[1] : "";
  const get = (k) => {
    // Capture single-line value OR a `>-` folded block scalar (used by `imagePrompt: >-`).
    const folded = block.match(new RegExp(`^${k}:\\s*>-?\\s*\\n((?:[ \\t]+.*\\n?)+)`, "m"));
    if (folded) return folded[1].split("\n").map((l) => l.trim()).filter(Boolean).join(" ");
    const r = block.match(new RegExp(`^${k}:\\s*(.*)$`, "m"));
    return r ? r[1].trim().replace(/^["']|["']$/g, "") : "";
  };
  return {
    title: get("title"),
    topic: get("topic"),
    description: get("description"),
    imagePrompt: get("imagePrompt"),
  };
}

function buildPrompt(fm) {
  const accent = TOPIC_ACCENT[fm.topic] || "luminous violet";
  const subject = fm.imagePrompt
    ? fm.imagePrompt
    : `a conceptual illustration representing ${fm.title}. ${fm.description}`;
  return `${STYLE}, accent light color ${accent}. Subject: ${subject}`;
}

async function generate(prompt, seed) {
  const url =
    `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}` +
    `?width=1792&height=1024&nologo=true&enhance=true&model=flux&seed=${seed}`;
  const res = await fetch(url, { headers: { "User-Agent": "parallax-playbook" } });
  if (!res.ok) throw new Error(`pollinations ${res.status}: ${(await res.text()).slice(0, 140)}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1000) throw new Error("response too small to be an image");
  return buf;
}

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));
let made = 0;
for (const file of files) {
  const slug = file.replace(/\.mdx?$/, "");
  const out = path.join(OUT_DIR, `${slug}.png`);
  if (existsSync(out) && !FORCE) { console.log(`• skip ${slug} (image exists)`); continue; }
  const fm = parseFrontmatter(readFileSync(path.join(POSTS_DIR, file), "utf8"));
  if (!fm.title) { console.warn(`• skip ${slug} (no title)`); continue; }
  process.stdout.write(`• generating ${slug} … `);
  try {
    const buf = await generate(buildPrompt(fm), hash(slug) % 1000000);
    writeFileSync(out, buf);
    made++;
    console.log(`done (${(buf.length / 1024).toFixed(0)} KB)`);
  } catch (e) {
    console.log("FAILED");
    console.error(`  ${e.message}`);
  }
}
console.log(`\n${made} image(s) generated → ${path.relative(ROOT, OUT_DIR)}`);

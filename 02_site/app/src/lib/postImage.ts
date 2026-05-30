import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Returns the public URL for a post's generated illustration if it exists
 * (public/post-images/<id>.png), else undefined so callers can fall back to
 * the SVG <PostArt>. Checked at build time. Images are produced by
 * scripts/generate-post-images.mjs.
 */
const DIR = path.join(process.cwd(), "public", "post-images");

export function postImage(id: string): string | undefined {
  return existsSync(path.join(DIR, `${id}.png`)) ? `/post-images/${id}.png` : undefined;
}

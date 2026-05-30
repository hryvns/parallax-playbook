import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Single daily feed. One post per day on quantum computing, consciousness,
 * and mathematics. Two formats:
 *   - "article" — a news-driven breakthrough / surprising-finding writeup
 *   - "fact"    — a short, punchy curious tidbit
 * Content lives outside the Astro project in ../../03_content/posts/.
 */

export const TOPICS = ["quantum", "consciousness", "mathematics"] as const;

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "../../03_content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    topic: z.enum(TOPICS),
    format: z.enum(["article", "fact"]).default("article"),
    keywords: z.array(z.string()).optional(),
    image: z.string().optional(),
    // Hand-crafted image concept for the AI generator (overrides auto-derivation).
    imagePrompt: z.string().optional(),
    // Outbound references — rendered at the foot of the post and good for SEO.
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url() }))
      .optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts };

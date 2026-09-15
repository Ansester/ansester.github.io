import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(), summary: z.string(), category: z.string(),
    role: z.string(), organization: z.string(), period: z.string(), status: z.string(),
    order: z.number(), tags: z.array(z.string()),
    visual: z.enum(['human', 'protein', 'camp', 'ner']),
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
  }),
});
export const collections = { work };

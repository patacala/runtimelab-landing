import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()),
    author: z.string().default('RuntimeLab'),
    lang: z.enum(['es', 'en']),
    readingTime: z.number().optional(),
  }),
});

export const collections = { blog };

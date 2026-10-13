import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Demo links sort first: title and thumbnail link to links[0].
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([])
      .transform((links) => [...links].sort((a, b) => Number(/demo/i.test(b.label)) - Number(/demo/i.test(a.label)))),
    image: z.string().optional(),
    status: z.enum(["wip", "shipped", "archived", "abandoned", "hold"]).optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };

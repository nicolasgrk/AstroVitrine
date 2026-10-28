import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const realisations = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/realisations" }),
	schema: ({ image }) =>
		z.object({
			titre: z.string(),
			client: z.string().optional(),
			resume: z.string(),
			ordre: z.number().default(0),
			image: image().optional(),
		}),
});

export const collections = { realisations };

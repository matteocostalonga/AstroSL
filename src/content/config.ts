import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ 
		schema: docsSchema({
			extend: z.object({
				// Add custom fields here - default is docsSchema()
				category: z.enum(['test', 'not a test']).optional(),
			})
		}) 
	}),
};

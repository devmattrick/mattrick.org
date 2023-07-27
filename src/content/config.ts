import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};

// Brilliant idea borrowed from here: https://davi.sh/til/astro/content-url-routing/
type UrlMap = Partial<{
  [key in keyof typeof collections]: string;
}>;

const urlMap: UrlMap = {
  posts: "/posts/",
};

export const getUrl = (collection: keyof typeof urlMap, slug: string) =>
  `${urlMap[collection]}${slug}`;

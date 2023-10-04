import { z } from "zod";

export const getPostsSchema = z.object({
  skip: z.number().optional(),
  take: z.number().optional(),
});
export type GetPostsInput = z.infer<typeof getPostsSchema>;

export const createPostSchema = z.object({
  content: z.string(),
});
export type CreatePostInput = z.infer<typeof createPostSchema>;

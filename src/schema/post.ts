import { z } from "zod";

export const createPostSchema = z.object({
  content: z.string(),
});
export type CreatePostInput = z.infer<typeof createPostSchema>;

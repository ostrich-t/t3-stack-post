import { TRPCError } from "@trpc/server";
import { createPostSchema, getPostsSchema } from "~/schema/post";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { PostController } from "~/server/presentation/postController";

const controller = new PostController();

export const postRouter = createTRPCRouter({
  getPosts: protectedProcedure
    .input(getPostsSchema)
    .query(async ({ input }) => {
      try {
        const result = await controller.getPosts(input);
        return result;
      } catch (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  createPost: protectedProcedure
    .input(createPostSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const result = await controller.createPost(input, ctx.session.user);
        return result;
      } catch (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
});

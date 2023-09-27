import { type CreatePostInput } from "~/schema/post";
import { type IPostRepository } from "../domain/Post/IPostRepository";
import { PostRepository } from "../infrastructure/PostRepository";
import { PrismaClient } from "@prisma/client";
import { CreatePost } from "../usecase/post/CreatePost";
import { formatPost } from "./format/post";
import { User, type SessionUser } from "../domain/User/User";

export class PostController {
  private postRepository: IPostRepository;
  private useCase: CreatePost;
  constructor() {
    this.postRepository = new PostRepository(new PrismaClient());
    this.useCase = new CreatePost(this.postRepository);
  }

  async createPost(input: CreatePostInput, sessionUser: SessionUser) {
    const user = new User({
      id: sessionUser.id,
      name: sessionUser.name ?? "",
      image: sessionUser.image ?? "",
    });
    const result = await this.useCase.execute({
      content: input.content,
      user,
    });

    return formatPost(result);
  }
}

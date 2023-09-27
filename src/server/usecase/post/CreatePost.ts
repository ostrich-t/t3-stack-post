import { type IPostRepository } from "~/server/domain/Post/IPostRepository";
import { PostBase } from "~/server/domain/Post/Post";
import { type User } from "~/server/domain/User/User";

export class CreatePost {
  constructor(private postRepository: IPostRepository) {}

  async execute(input: { content: string; user: User }) {
    const post = new PostBase(input.content, input.user);
    const response = await this.postRepository.createPost(post);
    return response;
  }
}

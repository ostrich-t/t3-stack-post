import { type Post, type PostBase } from "./Post";

export interface IPostRepository {
  createPost(post: PostBase): Promise<Post>;
}

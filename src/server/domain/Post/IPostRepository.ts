import { type Post, type PostBase } from "./Post";

export interface IPostRepository {
  getPosts(props: { take?: number; skip?: number }): Promise<Post[]>;
  getPostById(id: string): Promise<Post | null>;
  createPost(post: PostBase): Promise<Post>;
}

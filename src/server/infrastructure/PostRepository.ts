import { type PrismaClient } from "@prisma/client";
import { type IPostRepository } from "../domain/Post/IPostRepository";
import { Post, type PostBase } from "../domain/Post/Post";

export class PostRepository implements IPostRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getPosts(props: { take?: number; skip?: number }) {
    const results = await this.prisma.posts.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: props.take,
      skip: props.skip,
    });

    return results.map((result) => {
      return new Post({
        id: result.id,
        content: result.content,
        user: {
          id: result.user.id,
          name: result.user.name ?? undefined,
          image: result.user.image ?? undefined,
        },
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
      });
    });
  }

  async getPostById(id: string) {
    const result = await this.prisma.posts.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        user: true,
      },
    });

    if (!result) {
      return null;
    }

    return new Post({
      id: result.id,
      content: result.content,
      user: {
        id: result.user.id,
        name: result.user.name ?? undefined,
        image: result.user.image ?? undefined,
      },
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    });
  }

  async createPost(post: PostBase) {
    const result = await this.prisma.posts.create({
      data: {
        content: post.content,
        userId: post.user.id,
      },
    });

    return new Post({
      id: result.id,
      content: result.content,
      user: post.user,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    });
  }
}

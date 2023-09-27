import { type Post } from "~/server/domain/Post/Post";

interface PostResType {
  id: number;
  content: string;
  totalComments: number;
  totalLikes: number;
  isLiked: boolean;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name?: string;
    image?: string;
  };
}
export const formatPost = (post: Post): PostResType => {
  return {
    id: post.id,
    content: post.content,
    totalComments: post.totalComments,
    totalLikes: post.totalLikes,
    isLiked: post.isLiked,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
    user: {
      id: post.user.id,
      name: post.user.name,
      image: post.user.image,
    },
  };
};

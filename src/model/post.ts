import { type RouterOutputs } from "~/utils/api";

export interface Post {
  id: number;
  content: string;
  totalLikes: number;
  totalComments: number;
  isLiked: boolean;
  // isSaved: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    name?: string;
    image?: string;
  };
}

export const convertPost = (
  post: RouterOutputs["post"]["createPost"],
): Post => {
  return {
    id: post.id,
    content: post.content,
    totalLikes: post.totalLikes,
    totalComments: post.totalComments,
    isLiked: post.isLiked,
    // isSaved: post.isSaved,
    createdAt: new Date(post.createdAt),
    updatedAt: new Date(post.updatedAt),
    user: {
      id: post.user.id,
      name: post.user.name,
      image: post.user.image,
    },
  };
};

export const postInitialState: Post = {
  id: 0,
  content: "",
  totalLikes: 0,
  totalComments: 0,
  isLiked: false,
  // isSaved: false,
  createdAt: new Date(),
  updatedAt: new Date(),
  user: {
    id: "aaa",
    name: "",
    image: "",
  },
};

export const createPostListData = (number: number) => {
  const data: Post[] = [];
  for (let i = 0; i < number; i++) {
    data.push({
      id: i,
      content: "content",
      totalLikes: 0,
      totalComments: 0,
      isLiked: false,
      // isSaved: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: i.toString(),
        name: "name",
        image: "",
      },
    });
  }
  return data;
};

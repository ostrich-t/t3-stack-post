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
    id: number;
    name: string;
    avatar: string;
  };
}

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
    id: 0,
    name: "",
    avatar: "",
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
        id: i,
        name: "name",
        avatar: "",
      },
    });
  }
  return data;
};

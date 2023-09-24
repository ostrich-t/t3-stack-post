import React, { type FC } from "react";
import { PostCard } from "~/components/shared/PostCard";
import { type Post } from "~/model/post";

interface Props {
  posts: Post[];
}
export const Top: FC<Props> = ({ posts }) => {
  return (
    <div className="h-full overflow-auto bg-base-200 p-5">
      {posts.map((post) => {
        return (
          <div key={post.id} className="mx-auto mb-4 w-[660px]">
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

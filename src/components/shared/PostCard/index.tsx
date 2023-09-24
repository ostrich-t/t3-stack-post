import { format } from "date-fns";
import Image from "next/image";
import React, { type FC } from "react";
import { DATE_FORMAT } from "~/common/constants/constants";
import { type Post } from "~/model/post";

interface Props {
  post: Post;
}

export const PostCard: FC<Props> = ({ post }) => {
  return (
    <div className="rounded bg-base-100 p-3">
      <div className="flex">
        <div className="avatar">
          <div className="mr-1 w-12 rounded-full">
            <Image
              src={post.user.avatar || "/ostrich_admin.png"}
              alt="avatar"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div>
          <span>{post.user.name}</span>
          <br />
          <span className="opacity-60">
            {format(post.createdAt, DATE_FORMAT)}
          </span>
        </div>
      </div>
      <div>{post.content}</div>
      <div className="flex space-x-3">
        <div>
          <span>{post.totalComments}</span>
        </div>
        <div>
          <span>{post.totalLikes}</span>
        </div>
      </div>
    </div>
  );
};

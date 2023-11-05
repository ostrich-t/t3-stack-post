import React, { useEffect, type FC } from "react";
import { usePostStore } from "~/store/postStore";
import { Dialog } from "../Dialog";
import { api } from "~/utils/api";
import { convertPost } from "~/model/post";
import { toast } from "react-toastify";
import { useUIStore } from "~/store/uiStore";

export const PostDialog: FC = () => {
  const open = usePostStore((state) => state.createDialog);
  const setLoading = useUIStore((state) => state.setLoading);
  const pushPostData = usePostStore((state) => state.pushPostData);

  const createPostMutation = api.post.createPost.useMutation({
    onSuccess: (data) => {
      pushPostData(convertPost(data));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleClose = usePostStore((state) => state.closeCreateDialog);
  const [content, setContent] = React.useState("");
  const trimmedContent = content.trim();

  const handlePost = () => {
    createPostMutation.mutate({ content: content });
    handleClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (trimmedContent && e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handlePost();
    }
  };

  useEffect(() => {
    setLoading(createPostMutation.isLoading);
  }, [createPostMutation.isLoading, setLoading]);

  return (
    <Dialog open={open} handleClose={handleClose}>
      <h3 className="content-lg mb-2 font-bold">Short</h3>
      <textarea
        className="textarea textarea-bordered h-32 w-full"
        placeholder="Wright something..."
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
      ></textarea>
      <div className="content-right mt-2">
        <button
          className="btn btn-primary ml-auto"
          onClick={handlePost}
          disabled={!trimmedContent}
        >
          Post
        </button>
      </div>
    </Dialog>
  );
};

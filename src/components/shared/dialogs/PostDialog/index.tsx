import React, { type FC } from "react";
import { usePostStore } from "~/store/post";
import { Dialog } from "../Dialog";

export const PostDialog: FC = () => {
  const open = usePostStore((state) => state.createDialog);

  const handleClose = usePostStore((state) => state.closeCreateDialog);
  const [text, setText] = React.useState("");

  const handlePost = () => {
    console.log(text);
    handleClose();
  };

  return (
    <Dialog open={open} handleClose={handleClose}>
      <h3 className="mb-2 text-lg font-bold">Short</h3>
      <textarea
        className="textarea textarea-bordered h-32 w-full"
        placeholder="Wright something..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="mt-2 text-right">
        <button
          className="btn btn-primary ml-auto"
          onClick={handlePost}
          disabled={!text}
        >
          Post
        </button>
      </div>
    </Dialog>
  );
};

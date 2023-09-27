import { create } from "zustand";
import { type Post } from "~/model/post";

interface PostState {
  createDialog: boolean;
  openCreateDialog: () => void;
  closeCreateDialog: () => void;
  postData: Post[];
  setPostData: (postData: Post[]) => void;
  pushPostData: (post: Post) => void;
}

export const usePostStore = create<PostState>()((set) => ({
  createDialog: false,
  postData: [],
  openCreateDialog: () => set(() => ({ createDialog: true })),
  closeCreateDialog: () => set(() => ({ createDialog: false })),
  setPostData: (postData) => set(() => ({ postData })),
  pushPostData: (post) =>
    set((state) => ({ postData: [...state.postData, post] })),
}));

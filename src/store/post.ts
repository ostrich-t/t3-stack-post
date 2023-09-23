import { create } from "zustand";

interface PostState {
  createDialog: boolean;
  openCreateDialog: () => void;
  closeCreateDialog: () => void;
}

export const usePostStore = create<PostState>()((set) => ({
  createDialog: false,
  openCreateDialog: () => set(() => ({ createDialog: true })),
  closeCreateDialog: () => set(() => ({ createDialog: false })),
}));

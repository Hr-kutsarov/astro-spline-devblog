import { create } from "zustand";


// UNUSED - will be pulling the logic from a local file so it can render with SSR


interface triggerProps {
  blogPosts: boolean;
  triggerBlogPosts: () => void;
  closeBlogPosts: () => void;
}

const triggerStore = create<triggerProps>((set) => ({
  blogPosts: false,
  triggerBlogPosts: () => set(() => ({ blogPosts: true })),
  closeBlogPosts: () => set({ blogPosts: false }),
}));

export { triggerStore };
export type { triggerProps };

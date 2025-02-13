import { create } from "zustand";

interface CategoryState {
  category: string;
  setCategory: (category: string) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  category: "Todos",
  setCategory: (category) => set({ category }),
}));

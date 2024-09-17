import { create } from "zustand";

type FilterState = {
  categoryFilters: string[];
  tagFilters: string[];
  cardIdFilters: string[];
  setCategoryFilters: (filters: string[]) => void;
  setTagFilters: (filters: string[]) => void;
  setCardIdFilters: (filters: string[]) => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  categoryFilters: [],
  tagFilters: [],
  cardIdFilters: [],
  setCategoryFilters: (filters) => set({ categoryFilters: filters }),
  setTagFilters: (filters) => set({ tagFilters: filters }),
  setCardIdFilters: (filters) => set({ cardIdFilters: filters }),
}));

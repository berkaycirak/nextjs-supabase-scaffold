import { create } from 'zustand';
export interface StoreState {
  count: number;
  inc: () => void;
}

export const useStore = create<StoreState>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 }))
}));

import { create } from 'zustand';
import axios from 'axios';
import { GOOGLE_BOOKS_API, API_KEY } from './auth';

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
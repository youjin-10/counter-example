import { defineStore } from 'pinia';
import { getData } from '../api/contentsApi';
import { Content } from '../../../interface';

type RootState = {
  contents: Content[] | null;
  isLoading: boolean;
};

export const useContentsStore = defineStore('contents', {
  state: () => {
    return {
      contents: [],
      isLoading: false,
    } as RootState;
  },
  getters: {
    getContents(state) {
      return state.contents;
    },
  },
  actions: {
    async fetchContents(email: string) {
      try {
        const res = await getData(email);
        console.log('res...', res);
        this.contents = res.data;
      } catch (error) {
        this.contents = null;
      } finally {
        this.updateLoading();
      }
    },
    updateLoading() {
      this.isLoading = true;
    },
  },
});

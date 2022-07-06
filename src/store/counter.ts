import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      counterNumber: 0,
    };
  },
  actions: {
    increment() {
      this.counterNumber++;
    },
    decrement() {
      if (this.counterNumber === 0) return;
      this.counterNumber--;
    },
  },
});

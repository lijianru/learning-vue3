import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoginStore = defineStore('user', () => {
  const token = ref();

  return { token };
});

import { defineStore } from "pinia";

export const useProfileStore = defineStore("post", {
  state: () => ({
    profiles: [],
    validation: {
      message: "",
      status: null,
    },
  }),
  getters: {
    getProfile: (state) => state.users,
  },
  actions: {
    clearValidation() {
      this.validation.message = "";
    },
    resetProfile() {
      this.profiles = [];
    },
  },
  persist: true,
});

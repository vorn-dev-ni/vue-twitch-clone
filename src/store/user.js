import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  persist: true,
  state: () => ({
    users: [],
    isAuth: false,
    validation: {
      message: "",
      status: null,
    },
  }),

  getters: {
    getUsers: (state) => state.users,
  },
  actions: {
    registerUser(user) {
      console.log(user);
      //Login to check existing user
      this.users.forEach((user) => {
        if (user?.email === user.email) {
          this.validation.message = "User is already exists";
          return;
        }
      });

      this.users.unshift(user);
    },
    checkAuthentication() {},
  },
});

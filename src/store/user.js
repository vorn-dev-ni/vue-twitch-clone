import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
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
    getAuth: (state) => state.isAuth,
  },
  actions: {
    registerUser(user) {
      //Login to check existing user
      this.users.forEach((user) => {
        if (user?.email === user.email) {
          this.validation.message = "User is already exists";
          return;
        }
      });
      this.isAuth = true;
      this.users.push(user);
      console.log(this.users);
    },
    resetUser() {
      this.users = [];
      this.isAuth = false;
    },
    checkAuthentication() {},
  },
  persist: true,
});

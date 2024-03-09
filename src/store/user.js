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
      this.validation.message = ""
      this.users.forEach((auth) => {
        if (user?.email === auth.email) {
          this.validation.message = "User is already exists";
          return;
        }
      });
      this.isAuth = true;
      this.users.push({ ...user, id: Date.now() + Math.random() * 10 });
    },
    signout() {
      this.isAuth = false;
    },
    loginuser(user) {
      let message = "Invalid user credential";
      if (this.users.length) {
        this.users.forEach((auth) => {
          console.log(auth);
          if (auth?.email?.trim() === user.email?.trim()) {
            message = "";
            if (auth?.password?.trim() !== user.password?.trim()) {
              message = "Password is invalid";
            }
          } else {
            message = "Invalid user credential";
          }
        });
      }

      this.validation.message = message;
      if (message) {
        return (this.isAuth = false);
      }
      return (this.isAuth = true);
    },
    clearValidation() {
      this.validation.message = "";
    },
  },
  persist: true,
});

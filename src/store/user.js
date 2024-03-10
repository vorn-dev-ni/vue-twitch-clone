import { defineStore } from "pinia";
import * as dayjs from "dayjs";
export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    isAuth: false,
    currentUserId: "",
    validation: {
      message: "",
      status: null,
    },
  }),

  getters: {
    getUsers: (state) => state.users,
    getAuth: (state) => state.isAuth,
    getCurrentUserId: (state) => state.currentUserId,
  },
  actions: {
    registerUser(user) {
      //Login to check existing user
      this.validation.message = "";
      this.users.forEach((auth) => {
        if (user?.email === auth.email) {
          this.validation.message = "User is already exists";
          return;
        }
      });
      this.isAuth = true;
      const uid = Date.now() + Math.random() * 10;
      this.currentUserId = uid;
      this.users.push({
        ...user,
        id: uid,
        createdOn: dayjs(Date.now()).format("DD-MM-YYYY"),
        follwerings:[],
        follwers:[]
      });
    },
    signout() {
      this.isAuth = false;
      this.currentUserId=null
      // this.users = [];
    },
    loginuser(user) {
      let message = "Invalid user credential";
      if (this.users.length) {
        this.users.forEach((auth) => {
          if (auth?.email?.trim() === user.email?.trim()) {
            message = "";
            if (auth?.password === user.password) {
              message = "";
              return;
            } else {
              message = "Invalid Password";
            }
          }
        });
      }

      this.validation.message = message;
      if (message) {
        return (this.isAuth = false);
      }
      this.currentUserId = this.users.find(
        (auth) => auth.email === user.email
      )?.id;

      return (this.isAuth = true);
    },
    findSingleUser(userId) {
      console.log(userId);
      return this.users?.find((user) => user.id === userId);
    },
    clearValidation() {
      this.validation.message = "";
    },
  },
  persist: true,
});

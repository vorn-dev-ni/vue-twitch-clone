import { defineStore } from "pinia";
import * as dayjs from "dayjs";
import { useTweetStore } from "./tweet";
import { useReplyStore } from "./replies";
// import { useReplyStore } from "./replies";
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
    getProfileInfo: (state) => {
      return (userId) =>
        state.users?.find((user) => user.id?.toString() === userId.toString());
    },
    getPostByUserLength: () => {
      const store = useTweetStore();
      return (userId) =>
        store.tweets.filter(
          (tweet) => tweet.userId.toString() === userId.toString()
        )?.length;
    },
  },
  actions: {
    fetchUsers() {
      const len = this.users?.length - 1;
      console.log(len);
      return this.users;
    },
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
        followings: [],
        followers: [],
        imgUri: '',
        location: null,
        bio: null,
      });
    },
    signout() {
      this.isAuth = false;
      this.currentUserId = "";
      console.log("error");
    },
    resetAll() {
      console.log(this.isAuth);
      const store = useTweetStore();
      const storeReply = useReplyStore();
      this.isAuth = false;
      this.currentUserId = "";
      this.users = [];
      store.tweets = [];
      storeReply.replies = [];
    },
    updateOnFollow(userId) {
      //update the current user that is being follow
      this.users?.map((user) => {
        if (+user.id === +userId) {
          if (user?.followers?.includes(this.getCurrentUserId)) {
            const index = user?.followers?.indexOf(this.getCurrentUserId);
            user?.followers?.splice(index, 1);
          } else {
            user?.followers?.push(this.getCurrentUserId);
          }
        }
        return user;
      });

      //update the follwering user that follow us

      this.users.map((user) => {
        if (+user.id === +this.getCurrentUserId) {
          if (user?.followings?.includes(userId)) {
            const index = user?.followings?.indexOf(userId);
            user?.followings?.splice(index, 1);
          } else {
            user?.followings?.push(userId);
          }
        }
        return user;
      });
    },
    updateProfile(params) {
      console.log(params);
      this.users.map((user) => {
        if (user.id?.toString() === params?.userId) {
          user.name = params.name;
          user.bio = params.bio;
          user.dob = params.dob;
          user.imgUri = params.imgUri;
          user.location = params.location;
        }
        return user;
      });
    },

    checkFollowUser(userId) {
      // followings: [],
      // followers: [],
      const result = this.users
        ?.filter((user) => user.id?.toString() === userId?.toString())
        ?.some((user) => {
          return user?.followers?.includes(this.getCurrentUserId);
        });
      return result;
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
      return this.users?.find((user) => user.id === userId);
    },
    clearValidation() {
      this.validation.message = "";
    },
  },
  persist: true,
});

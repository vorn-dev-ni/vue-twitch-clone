import { defineStore } from "pinia";
import { useUserStore } from "./user";
import { useTweetStore } from "./tweet";

export const useReplyStore = defineStore("reply", {
  state: () => ({
    replies: [],
    validation: {
      message: "",
      status: null,
    },
  }),
  getters: {
    getReplies: (state) => state.tweets,
  },
  actions: {
    clearValidation() {
      this.validation.message = "";
    },

 

    createReplies(params) {
      console.log(params);
      const store = useTweetStore();
      const replyId = Date.now() + Math.random() * 10;
      this.replies.unshift({
        id: replyId,
        description: params.description,
        postId: params?.postId,
        userId: params?.userId,
        likedCount: 0,
      });
      store.updateTweetsReplies(replyId, params.postId);
    },
    deleteReplies(id) {
      console.log(id);
      this.tweets = this.tweets.filter((tweet) => tweet.id !== id);
    },
  },
  persist: true,
});

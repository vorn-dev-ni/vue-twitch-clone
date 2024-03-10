import { defineStore } from "pinia";
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
    getReplies: (state) => {
      return (postId) =>
        state.replies.filter(
          (reply) => reply.postId.toString() === postId.toString()
        );
    },
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
        likes: [],
        replies: [],
        reposts: [],
      });
      console.log(this.replies);
      store.updateTweetsReplies(replyId, params.postId);
    },
    deleteReplies(id) {
      console.log(id);
      this.replies = this.replies.filter((reply) => reply.id !== id);
    },
  },
  persist: true,
});

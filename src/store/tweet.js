import { defineStore } from "pinia";

export const useTweetStore = defineStore("post", {
  state: () => ({
    tweets: [],
    validation: {
      message: "",
      status: null,
    },
  }),
  getters: {
    getTweets: (state) => state.tweets,
    getTweetLength: (state) => state.tweets.length,
  },
  actions: {
    clearValidation() {
      this.validation.message = "";
    },
    resetTweets() {
      this.tweets = [];
    },
    postTweets(params) {
      console.log(params);
      this.tweets.unshift({
        id: Date.now() + Math.random() * 10,
        description: params.description,
        attachment: params?.images,
        tags: null,
        likes: [],
        replies: [],
        reposts: [],
        userId: params?.userId,
      });
    },
    updateLike(postId, userId) {
      this.tweets = this.tweets
        .filter((tweet) => tweet.id === postId)
        .map((tweet) => {
          if (tweet.likes.includes(userId)) {
            const index = tweet.likes.indexOf(userId);
            tweet.likes.splice(index, 1);
          } else {
            tweet.likes.unshift(userId);
          }
          return tweet;
        });
    },

    updateTweetsReplies(replyId, postId) {
      this.tweets = this.tweets.map((tweet) => {
        if (tweet.id === postId) {
          tweet.replies.unshift(replyId);
        }
        return tweet;
      });
    },
    deleteTweets(id) {
      console.log(id);
      this.tweets = this.tweets.filter((tweet) => tweet.id !== id);
    },
  },
  persist: true,
});

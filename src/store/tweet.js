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
    getSingleTweet: (state) => {
      return (postId) => {
        return state.tweets.find(
          (tweet) => tweet.id.toString() === postId.toString()
        );
      };
    },
    getTweetByUser: (state) => {
      return (userId) => {
        return state.tweets.filter(
          (tweet) => tweet.userId.toString() === userId
        );
      };
    },
  },
  actions: {
    clearValidation() {
      this.validation.message = "";
    },
    resetTweets() {
      this.tweets = [];
    },
    postTweets(params) {
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
      this.tweets
        .filter((tweet) => tweet.id === postId)
        .map((tweet) => {
          if (tweet.likes.includes(userId)) {
            tweet.likes = tweet.likes.filter((id) => id !== userId);
          } else {
            tweet.likes.unshift(userId);
          }
          return tweet;
        });
    },
    repostTweet(postId, userId) {
      this.tweets
        .filter((tweet) => tweet.id === postId)
        .map((tweet) => {
          if (
            tweet.reposts.some(
              (repost) => repost.postId === postId || repost.userId === userId
            )
          ) {
            tweet.reposts = tweet.reposts.filter(
              (repost) => repost.userId !== userId
            );
          } else {
            tweet.reposts.unshift({
              postId,
              userId,
            });
          }
          return tweet;
        });
    },
    checkUserLike(postId, userId) {
      const result = this.tweets
        ?.filter((tweet) => tweet?.id === postId)[0]
        ?.likes.some((id) => id === userId);
      return result;
    },
    checkUserRepost(postId, userId) {
      console.log(postId, userId);
      const result = this.tweets
        ?.filter((tweet) => tweet?.id === postId)[0]
        ?.reposts.some((repost) => repost.userId === userId);

      console.log(result);
      return result;
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
      this.tweets = this.tweets.filter((tweet) => tweet.id !== id);
    },
  },
  persist: true,
});

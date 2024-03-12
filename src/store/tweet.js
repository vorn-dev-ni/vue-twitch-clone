import { defineStore } from "pinia";
import { useUserStore } from "./user";
import { useReplyStore } from "./replies";

export const useTweetStore = defineStore("post", {
  state: () => ({
    tweets: [
      [
        {
          id: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          tags: ["tag1", "tag2", "tag3"],
          replies: [],
          reposts: [],
          likes: 10,
        },
        {
          id: 2,
          description: "Nulla facilisi. Sed ut mauris in risus rutrum porta.",
          tags: ["tag4", "tag5"],
          replies: [],
          reposts: [],
          likes: 5,
        },
        {
          id: 3,
          description:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
          tags: ["tag6", "tag7", "tag8"],
          replies: [],
          reposts: [],
          likes: 20,
        },
        {
          id: 4,
          description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          tags: ["tag9"],
          replies: [],
          reposts: [],
          likes: 8,
        },
        {
          id: 5,
          description:
            "Suspendisse potenti. Proin sed nisi eu magna vehicula eleifend.",
          tags: ["tag10", "tag11"],
          replies: [],
          reposts: [],
          likes: 15,
        },
        {
          id: 6,
          description:
            "Quisque auctor aliquam eros, non pharetra leo rhoncus vel.",
          tags: ["tag12"],
          replies: [],
          reposts: [],
          likes: 3,
        },
        {
          id: 7,
          description:
            "Integer eget nisi nec tortor scelerisque scelerisque non sit amet nulla.",
          tags: ["tag13", "tag14"],
          replies: [],
          reposts: [],
          likes: 12,
        },
        {
          id: 8,
          description:
            "Nam nec felis quis nisi sagittis efficitur. Fusce convallis augue ut orci congue, ac vulputate eros volutpat.",
          tags: ["tag15"],
          replies: [],
          reposts: [],
          likes: 7,
        },
        {
          id: 9,
          description:
            "Duis at odio et metus facilisis consectetur. Donec ac turpis luctus, varius eros in, efficitur elit.",
          tags: ["tag16", "tag17"],
          replies: [],
          reposts: [],
          likes: 18,
        },
        {
          id: 10,
          description:
            "Aenean ut ante eget eros dictum consequat vel vitae odio.",
          tags: ["tag18"],
          replies: [],
          reposts: [],
          likes: 9,
        },
      ],
    ],
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
        const userTweets = state.tweets.filter(
          (tweet) => tweet.userId.toString() === userId
        );
        const userReposts = state.tweets.filter(
          (tweet) =>
            tweet.reposts?.filter(
              (repost) => repost?.userId?.toString() === userId?.toString()
            )?.length
        );

        console.log(userReposts);

        const allPost = [...userTweets, ...userReposts];

        console.log(allPost);
        return allPost;
      };
    },
    getFollowingTweet: (state) => {
      const store = useUserStore();
      const users = store.users?.find(
        (user) => +user.id === +store.getCurrentUserId
      );

      return state.tweets?.filter((tweet) =>
        users?.followings?.includes(tweet?.userId?.toString())
      );
    },
  },
  actions: {
    deleteReplyInPost(id) {
      const store = useReplyStore();
      store.deleteReplies(id);
      console.log(
        this.tweets.map((tweet) => {
          tweet.replies = tweet.replies?.filter((reply) => reply !== id);
          return tweet;
        })?.length
      );
      return this.tweets.map((tweet) => {
        tweet.replies = tweet.replies?.filter((reply) => reply !== id);
        return tweet;
      });
    },
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

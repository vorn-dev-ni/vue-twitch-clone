<template>
  <div>
    <p
      class="text-white text-center my-10 text-sm"
      v-if="tweets && !getTweets?.length"
    >
      There are no available post yet
    </p>
    <TweetCard
      v-for="(item, index) in getTweets"
      :key="index"
      :description="item?.description"
      :attachment="item.attachment"
      :createdOn="item.createdOn"
      :id="item.id"
      :userId="item.userId"
      :imgUri="item?.imgUri"
      :likesCount="item.likes?.length"
      :retweetsCount="item.reposts?.length"
      :repliesCount="item.replies?.length"
    />

    <!-- Loading indicator or skeleton loader -->
    <div v-if="!tweets" class="flex flex-col">
      <TweetCardSkeleton v-for="(item, index) in dummy" :key="index" />
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import TweetCard from "./TweetPost/TweetCard.vue";
import { useTweetStore } from "@/store/tweet";
import TweetCardSkeleton from "./TweetPost/TweetCardSkeleton.vue";
export default {
  components: {
    TweetCard,
    TweetCardSkeleton,
  },
  async mounted() {
    this.tweets = await this.loadTweetUser();
  },
  data() {
    return {
      tweets: null,
      dummy: Array.from({ length: 100 }, (item, index) => index),
    };
  },

  computed: {
    ...mapState(useTweetStore, ["getTweets", "getTweetLength", "tweets"]),
  },
  watch: {
    async tweets() {
      this.tweets = await this.loadTweetUser();
      console.log("run");
    },
  },
  methods: {
    async loadTweetUser() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.getTweets);
        }, 1000);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>

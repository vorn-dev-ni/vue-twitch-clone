<template>
  <div class="">
 
    <p class="text-white text-center my-10 text-sm" v-if="!getFollowingTweet?.length">
      There are no available post yet
    </p>
    <TweetCard
      v-for="(item, index) in getFollowingTweet"
      :key="index"
      :description="item.description"
      :attachment="item.attachment"
      :createdOn="item.createdOn"
      :id="item.id"
      :userId="item.userId"
      :likesCount="item.likes?.length"
      :retweetsCount="item.reposts?.length"
      :repliesCount="item.replies?.length"
    />
  </div>
</template>

<script>
import { useTweetStore } from "@/store/tweet";
import TweetCard from "./TweetPost/TweetCard.vue";
import { mapState } from "pinia";

export default {
  components: {
    TweetCard,
  },
  mounted() {
   
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useTweetStore, ["getTweets", "getFollowingTweet"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>

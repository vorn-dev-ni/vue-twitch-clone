<template>
  <div class="">
    <p class="text-white text-center my-10 text-sm" v-if="!getTweetLength">
      There are no available post yet
    </p>
    <TweetCard
      v-for="(item, index) in getTweets"
      :key="index"
      :description="item.description"
      :attachment="item.attachment"
      :createdOn="item.createdOn"
      :id="item.id"
      :userId="item.userId"
      :imgUri="item?.imgUri"
      :likesCount="item.likes?.length"
      :retweetsCount="item.reposts?.length"
      :repliesCount="item.replies?.length"
    />
  </div>
</template>

<script>
import { mapState } from "pinia";
import TweetCard from "./TweetPost/TweetCard.vue";
import { useTweetStore } from "@/store/tweet";

export default {
  components: {
    TweetCard,
  },
  mounted() {},
  data() {
    return {};
  },
  computed: {
    ...mapState(useTweetStore, ["getTweets", "getTweetLength"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>

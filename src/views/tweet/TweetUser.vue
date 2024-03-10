<template>
  <div
    class="text-white lg:col-span-2 col-span-5 sm:col-span-4 flex-col justify-center border-r-[1px] border-l-[1px] border-gray-600"
  >
    <router-link class="flex gap-3 items-center my-5 ml-5" to="/home">
      <Icon icon="ep:back" class="text-lg" />
      <h4>Post</h4>
    </router-link>



    <TweetCard
      :description="tweet?.description"
      :attachment="tweet?.attachment"
      :createdOn="tweet?.createdOn"
      :id="tweet?.id"
      :userId="tweet?.userId"
      :likesCount="tweet?.likes?.length"
      :retweetsCount="tweet?.reposts?.length"
      :repliesCount="tweet?.replies?.length"
    />
    <tweet-bar
      :postId="tweet?.id"
      :placeholder="'Post Your Reply'"
      :buttonText="'Reply'"
      type="'reply'"
    />

    <Replies :postId="id" :tweet="tweet" />

    <navigation-bar />
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import TweetCard from "../home/components/TweetPost/TweetCard.vue";
import { useTweetStore } from "@/store/tweet";
import { useUserStore } from "@/store/user";
import { Icon } from "@iconify/vue";
import TweetBar from "../home/components/UI/TweetBar.vue";
import Replies from "./components/Replies.vue";
export default {
  components: {
    TweetCard,
    Icon,
    TweetBar,
    Replies,
  },
  data() {
    return {
      tweet: null,
    };
  },

  mounted() {
    this.tweet = this.getSingleTweet(this.id);
  },
  props: ["id"],
  computed: {
    ...mapState(useTweetStore, ["getSingleTweet", "tweets"]),
    ...mapState(useUserStore, ["getCurrentUserId"]),
  },
  methods: {
    ...mapActions(useTweetStore, ["updateLike"]),
  },
  watch: {
    tweets(newVal) {
      console.log("change", newVal[0]);
      this.tweet = this.getSingleTweet(this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>

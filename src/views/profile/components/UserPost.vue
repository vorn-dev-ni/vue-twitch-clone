<template>
  <div class="text-white flex-col my-5">
    <TweetCard
      v-for="(post, index) in userPosts"
      :description="post?.description"
      :attachment="post?.attachment"
      :createdOn="post?.createdOn"
      :id="post?.id"
      :userId="post?.userId"
      :likesCount="post?.likes?.length"
      :retweetsCount="post?.reposts?.length"
      :repliesCount="post?.replies?.length"
      :key="index"
    />
    <p class="text-white"></p>

    <!-- <component /> -->
  </div>
</template>

<script>
import { useTweetStore } from "@/store/tweet";
import { useUserStore } from "@/store/user";
import TweetCard from "@/views/home/components/TweetPost/TweetCard.vue";
import { mapState } from "pinia";

export default {
  components: {
    TweetCard,
  },

  inject: ["userId"],
  mounted() {
 
  },

  computed: {
    ...mapState(useUserStore, ["getProfileInfo"]),
    ...mapState(useTweetStore, ["getTweetByUser"]),
    userPosts() {
      console.log(this.getTweetByUser(this.userId));
      return this.getTweetByUser(this.userId);
    },
  },
};
</script>

<style lang="scss" scoped></style>

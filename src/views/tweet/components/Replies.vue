<template>
  <main class="flex-col">
    <TweetCard
      :v-if="replies.length"
      v-for="(reply, index) in replies"
      :description="reply?.description"
      :attachment="reply?.attachment"
      :createdOn="reply?.createdOn"
      :id="reply?.id"
      :userId="reply?.userId"
      :likesCount="reply?.likes?.length"
      :retweetsCount="reply?.reposts?.length"
      :repliesCount="reply?.replies?.length"
      :key="index"
    />
  </main>
</template>

<script>
import { mapState } from "pinia";
import TweetCard from "@/views/home/components/TweetPost/TweetCard.vue";
import { useReplyStore } from "@/store/replies";
import { useTweetStore } from "@/store/tweet";
export default {
  components: {
    TweetCard,
  },
  data() {
    return {
      replies: [],
    };
  },
  mounted() {
    if (this.postId) {
      this.replies = this.getReplies(this?.postId);
    }
  },
  props: ["postId", "tweet"],
  computed: {
    ...mapState(useReplyStore, ["getReplies", "replies"]),
    ...mapState(useTweetStore, ["tweets"]),
  },
  watch: {
    tweets() {
      this.replies = this.getReplies(this?.postId);
    },
  },
  methods: {
    // ...mapActions(useTweetStore, ["updateLike"]),
  },
};
</script>

<style></style>

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
  <navigation-bar />
</template>

<script>
import { mapActions, mapState } from "pinia";
import TweetCard from "@/views/home/components/TweetPost/TweetCard.vue";
import NavigationBar from "@/views/home/components/UI/NavigationBar.vue";
import { useReplyStore } from "@/store/replies";
import { useTweetStore } from "@/store/tweet";
export default {
  components: {
    TweetCard,
    NavigationBar,
  },
  data() {
    return {
      // replies: [],
      type: "reply",
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
    replies() {
      return this.getReplies(this.postId);
    },
  },
  methods: {
    ...mapActions(useTweetStore, ["deleteReplyInPost"]),

    deleteReplies(id) {
      this.deleteReplyInPost(id);
    },
  },
  provide() {
    return {
      // Provide a function named "doSomething" to child components
      deleteReplies: this.deleteReplies,
      type: this.type,
    };
  },
};
</script>

<style></style>

<template>
  <div class="text-white">
 
      <TweetCard v-for="(item, index) in list" :key="index"></TweetCard>

  </div>
</template>

<script>
import TweetCard from './TweetPost/TweetCard.vue';

export default {
  components: {
    TweetCard,
  },
  data() {
    return {
      list: Array.from({ length: 50 }),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>

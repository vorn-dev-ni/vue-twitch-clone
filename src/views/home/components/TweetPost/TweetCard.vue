<template>
  <div
    class="hover:!cursor-pointer bg-transparent rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 !border-b-2 !border-gray-500"
  >
    <div class="p-5">
      <header-profile :id="id" :userId="userId" />

      <div class="body mt-2 mb-1" @click="this.$router.push('/home/' + id)">
        <p
          :key="Date.now()"
          class="mb-3 font-normal text-white text-sm my-3"
          v-linkify="{ className: 'text-primary', target: '_blank' }"
        >
          {{ description }}
        </p>
      </div>

      <bottom-link
        :userId="userId"
        :postId="id"
        :disable="id"         
        v-if="type === 'replytweet'"
        :likesCount="likesCount"
        :repliesCount="repliesCount"                              
        :retweetsCount="retweetsCount"
      />

      <bottom-link
        :userId="userId"
        :postId="id"
        :disable="null"
        :type="type"
        v-if="type !== 'replytweet'"
        :likesCount="likesCount"
        :repliesCount="repliesCount"
        :retweetsCount="retweetsCount"
      />

    </div>
  </div>
</template>

<script>
import BottomLink from "./BottomLink.vue";
import HeaderProfile from "./HeaderProfile.vue";

export default {
  components: { HeaderProfile, BottomLink },
  props: [
    "description",
    "attachment",
    "createdOn",
    "userId",
    "id",
    "likesCount",
    "retweetsCount",
    "repliesCount",
    "type",
    "disable",
  ],
  watch() {},
  mounted() {
    console.log(this.type);
  },
  provide: {
    description(newVal) {
      console.log(newVal);
      return newVal;
    },
  },
};
</script>

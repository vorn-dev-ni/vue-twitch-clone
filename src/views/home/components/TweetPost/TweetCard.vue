<template>
  <div
    class="bg-transparent !border-none rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="p-5">
      <header-profile :id="id" :userId="userId" />

      <p class="mb-3 font-normal text-white text-sm">
        {{ description }}
      </p>

      <div class="flex my-3 mr-2 rounded-2xl border border-gray-600">
        <img
          class="rounded-2xl"
          src="https://pbs.twimg.com/media/EnTkhz-XYAEH2kY?format=jpg&amp;name=small"
          alt=""
        />
      </div>

      <bottom-link
        :postId="id"
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
  ],
  mounted() {
    console.log( this.repliesCount);
  },
};
</script>

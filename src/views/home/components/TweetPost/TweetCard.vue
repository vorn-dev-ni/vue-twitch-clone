<template>
  <div

    class="hover:!cursor-pointer bg-transparent rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 !border-b-2 !border-gray-500"
  >
    <div class="p-5"  @click="this.$router.push('/home/' + id)">
      <header-profile :id="id" :userId="userId" />

      <p class="mb-3 font-normal text-white text-sm my-3"    >
        {{ description }}
      </p>

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
};
</script>

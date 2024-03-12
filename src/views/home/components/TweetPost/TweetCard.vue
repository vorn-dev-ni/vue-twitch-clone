<template>
  <div
    class="hover:!cursor-pointer bg-transparent rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 !border-b-2 !border-gray-500"
  >
    <div class="p-5">
      <header-profile :id="id" :userId="userId" :imgUri="imgUri" />

      <div class="body mt-2 mb-1" @click="this.$router.push('/home/' + id)">
        <p
          :key="id"
          class="mb-3 font-normal text-white text-sm my-3"
          v-linkify="{ className: '!text-primary', target: '_blank' }"
        >
          {{ description ?? "loading" }}
        </p>
      </div>

      <bottom-link
        :userId="userId"
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
    "imgUri",
  ],
  mounted() {
    console.log(this?.description);
  },
  provide: {
    description(newVal) {
      console.log(newVal);
      return newVal;
    },
  },
};
</script>

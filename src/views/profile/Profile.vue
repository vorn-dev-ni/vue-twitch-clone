<template>
  <div
    class="text-white lg:col-span-2 col-span-5 sm:col-span-4 flex-col justify-center border-r-[1px] border-l-[1px] border-gray-600"
  >
    <router-link class="flex gap-3 items-center my-5 ml-5  sticky top-0" to="/home">
      <Icon icon="ep:back" class="text-lg" />
      <div>
        <h5>User Profile</h5>
        <p class="text-xs text-gray-400">22posts</p>
      </div>
    </router-link>

    <main>
      <div class="bg-gray-600 py-20 ">
        
      </div>
    </main>

    <navigation-bar />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      tweet: null,
    };
  },

  props: ["id"],
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>

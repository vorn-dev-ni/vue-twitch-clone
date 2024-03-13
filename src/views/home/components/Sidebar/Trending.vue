<template>
  <div
    class="flex-col space-y-2 gap-3 w-[100%]"
    v-for="(item, index) in trendingList"
    :key="index"
  >

    <card-panel class=" !bg-transparent space-y-3 gap-5 !outline-none !border-0 !shadow-none hover:!bg-gray-700 !rounded-none ">
      <template #title>
        <h6 class="font-bold text-gray-500">Gaming · Trending</h6>
      </template>

      <template #subtitle>
        <p class="text-sm text-white">Cambodia</p>
        <p class="text-sm text-gray-500">208K posts</p>
      </template>

    
    </card-panel>
  </div>
</template>

<script>
import CardPanel from "@/components/CardPanel.vue";

export default {
  components: { CardPanel },
  data() {
    return {
      trendingList: Array.from({ length: 5 }),
    };
  },
};
</script>

<style lang="scss" scoped></style>

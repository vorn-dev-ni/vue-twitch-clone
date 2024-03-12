<template>
  <div
    class="text-white flex lg:col-span-2 col-span-5 sm:col-span-4 flex-col justify-center !items-center border-r-[1px] border-l-[1px] border-gray-600 h-screen"
  >
    <h5 class="text-center text-gray-400 mb-10">Coming Soon</h5>
    <router-link to="/">
      <h5 class="text-primary text-xs">Home</h5>
    </router-link>
  </div>
  <NavigationBar />
</template>

<script>
import NavigationBar from "../home/components/UI/NavigationBar.vue";
export default {
  components: {
    NavigationBar,
  },
};
</script>

<style lang="scss" scoped></style>

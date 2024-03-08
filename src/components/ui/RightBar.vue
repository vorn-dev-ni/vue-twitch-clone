<template>
  <nav class="h-screen col-span-2 items-center hidden md:block w-full p-5">
    <search-input />
    <card-panel
      class="card !rounded-2xl !bg-darkprimary space-y-5 gap-5 mb-5 !outline-none !border-0 my-20 w-full py-5"
    >
      <template #title>
        <h3 class="text-white font-bold">Subscribe to Premium</h3>
      </template>

      <template #subtitle>
        <p class="text-lg text-gray-500">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
      </template>

      <template #button>
        <div>
          <Button class="bg-primary !rounded-2xl">
            <template #placeholder>
              <h6 class="font-bold text-lg">Subscribe</h6>
            </template>
          </Button>
        </div>
      </template>
    </card-panel>

    <section class="bg-darkprimary !rounded-xl">
      <h3 class="px-5 py-5">Trends for you</h3>
      <Trending />
    </section>
  </nav>
</template>

<script>
import CardPanel from "@/components/CardPanel.vue";
import Button from "@/components/Button.vue";
import SearchInput from "@/views/home/components/Sidebar/SearchInput.vue";
import Trending from "@/views/home/components/Sidebar/Trending.vue";

export default {
  components: {
    CardPanel,
    Button,
    SearchInput,
    Trending,
  },
};
</script>

<style scoped>
@media (max-width: 1100px) {
  nav {
    display: none;
  }
}
</style>

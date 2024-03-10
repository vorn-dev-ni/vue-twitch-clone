<template>
  <div
    class="text-white lg:col-span-2 col-span-5 sm:col-span-4 flex-col justify-center border-r-[1px] border-l-[1px] border-gray-600"
  >
    <TabBar @toggle-tab="changeTab" :active="activeTab" />
    <tweet-bar :type="'tweet'" />
    <keep-alive>
      <component :is="tab" />
    </keep-alive>
    <navigation-bar />
  </div>
</template>

<script>
import Follower from "./Follower.vue";
import General from "./General.vue";
import NavigationBar from "./UI/NavigationBar.vue";
import TabBar from "./UI/TabBar.vue";
import TweetBar from "./UI/TweetBar.vue";

export default {
  components: {
    TabBar,
    General,
    Follower,
    TweetBar,
    NavigationBar,
  },
  data() {
    return {
      tab: General,
      activeTab: 0,
    };
  },
  methods: {
    changeTab(activeTab) {
      !activeTab ? (this.tab = General) : (this.tab = Follower);
      this.activeTab = activeTab;
    },
  },
};
</script>

<style lang="scss" scoped></style>

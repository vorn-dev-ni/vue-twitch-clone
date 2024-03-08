<template>
  <layout>
    <div class="grid grid-cols-5  justify-center ">
      <side-bar />

      <router-view> </router-view>

      <right-bar />
    </div>
  </layout>
</template>
<script>
import SideBar from "@/components/ui/SideBar.vue";
import RightBar from "@/components/ui/RightBar.vue";
import Layout from "@/views/home/components/UI/Layout.vue";

export default {
  components: {
    SideBar,
    RightBar,
    Layout,
  },
};
</script>

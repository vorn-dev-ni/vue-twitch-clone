<template>
  <layout>
    <div class="grid grid-cols-5 justify-center">
      <side-bar />

      <router-view> </router-view>

      <right-bar />
    </div>
  </layout>
</template>
<script>
import { mapState } from "pinia";
import SideBar from "@/components/ui/SideBar.vue";
import RightBar from "@/components/ui/RightBar.vue";
import Layout from "@/views/home/components/UI/Layout.vue";
import { useUserStore } from "@/store/user";

export default {
  components: {
    SideBar,
    RightBar,
    Layout,
  },
  computed: {
    ...mapState(useUserStore, ["isAuth"]),
  },
  data() {
    return {
      isauth: this.isAuth,
    };
  },

  beforeRouteEnter(to, from, next) {
    console.log(to, from);
  
    next();
  },
};
</script>

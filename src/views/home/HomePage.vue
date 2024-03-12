<template>
  <layout>
    <div class="grid grid-cols-5 justify-center">
      <keep-alive>
        <side-bar />
      </keep-alive>
      <router-view> </router-view>
      <component :is="rightBar" />
    </div>
  </layout>
</template>
<script>
import { mapState } from "pinia";
import SideBar from "@/components/ui/SideBar.vue";
import RightBar from "@/components/ui/RightBar.vue";
import Layout from "@/views/home/components/UI/Layout.vue";
import { useUserStore } from "@/store/user";
import SideBarProfile from "../profile/components/SideBarProfile.vue";
export default {
  components: {
    SideBar,
    RightBar,
    Layout,
    SideBarProfile,
  },
  computed: {
    ...mapState(useUserStore, ["isAuth"]),
  },
  data() {
    return {
      isauth: this.isAuth,
      rightBar: "RightBar",
    };
  },
  watch: {
    $route: {
      handler(newParams) {
        console.log("Route params changed:", newParams);
        if (newParams?.fullPath?.startsWith("/user/")) {
          this.rightBar = "SideBarProfile";
        } else {
          this.rightBar = "RightBar";
        }
      },
      immediate: true, // To trigger the handler immediately when the component is created
    },
  },

  beforeRouteEnter(to, from, next) {
    next();
  },
};
</script>

<style scoped>
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-enter-active {
  transition: all 0.3s ease-in;
}

.route-leave-active {
  transition: all 0.3s ease-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

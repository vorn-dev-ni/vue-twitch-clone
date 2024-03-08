<template>
  <div
    class="grid grid-cols-2 md:grid-cols-3 w-full justify-center bg-slate-500"
  >
    <side-bar />

 
    <div>
        <router-view>
          
        </router-view>
    </div>


    <right-bar />
  </div>
</template>
<script>
import SideBar from "@/components/ui/SideBar.vue";
import RightBar from "@/components/ui/RightBar.vue";

export default {
  components: {
    SideBar,
    RightBar,
  },
};
</script>

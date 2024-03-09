<template>
  <div class="text-center text-white">loading....</div>
</template>

<script>
import { mapState } from "pinia";
import { useUserStore } from "@/store/user";
export default {
  computed: {
    ...mapState(useUserStore, ["getAuth "]),
  },
  // beforeRouteEnter() {
  //   console.log(this.getAuth);

  //   if (this.getAuth) {
  //     this.$router.push("/home");
  //   }
  // },
};
</script>

<style lang="scss" scoped></style>

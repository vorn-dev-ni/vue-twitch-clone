<template>
  <Layout>
    <router-view> </router-view>
  </Layout>
</template>

<script>
import { FwbAlert } from "flowbite-vue";
import Layout from "./components/ui/Layout.vue";
export default {
  components: { Layout },
  name: "App",
  FwbAlert,
};
</script>

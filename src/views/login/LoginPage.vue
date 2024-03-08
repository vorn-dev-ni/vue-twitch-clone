<template>
  <layout>
    <div
      class="block md:grid md:grid-cols-2 lg:grid-cols-5 justify-between lg:gap-0 py-0 lg:py-14"
    >
      <div class="col-span-3 md:col-span-2 lg:col-span-3 md:mb-2 md:my-20">
        <icon-x />
      </div>

      <div class="col-span-2 md:col-span-2 lg:col-span-2 !space-y-7">
        <Login />
      </div>

      <div>
        <Modal />
      </div>
    </div>
  </layout>
</template>
<script>
import IconX from "./components/IconX.vue";
import Login from "./components/Login.vue";
import Modal from "./components/Modal.vue";
import Layout from "@/components/ui/Layout.vue";
export default {
  components: {
    Modal,
    IconX,
    Login,
    Layout
  },
};
</script>

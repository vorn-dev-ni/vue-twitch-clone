<template>
  <fwb-button :color="color || 'default'">
    <div class="flex items-center justify-center flex-row-reverse gap-3">
      <slot name="placeholder">
        <h2>Press Me</h2>
      </slot>

      <slot name="icon" v-if="$slots.icon"> </slot>
    </div>
  </fwb-button>
</template>

<script>
import { FwbButton } from "flowbite-vue";
export default {
  components: {
    FwbButton,
  },
  props: ["color", "size"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.$slots.icon);
  },
};
</script>

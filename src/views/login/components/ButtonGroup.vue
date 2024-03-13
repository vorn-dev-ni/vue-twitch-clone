<template>
  <div>
    <div class="google">
      <slot name="google"> </slot>
    </div>
    <div class="apple">
      <slot name="apple"> </slot>
    </div>

    <div
      class="line text-center w-[320px] flex justify-center items-center gap-2"
    >
      <div class="dash-1 !bg-gray-600 w-full !py-[0.5px]"></div>
      <h6>or</h6>
      <div class="dash-1 !bg-gray-600 w-full !py-[0.5px]"></div>
    </div>
    <div class="create">
      <slot name="create"> </slot>
    </div>

    <footer-account />
  </div>
</template>

<script>
import FooterAccount from "./FooterAccount.vue";


export default {
  components: { FooterAccount },

};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="mb-9">
    <p class="text-sm w-[320px] text-gray-400">
      By signing up, you agree to the
      <span class="text-primary"> Terms of Service </span> and
      <span class="text-primary"> Privacy Policy </span>, including
      <span class="text-primary"> Cookie Use. </span>
    </p>
  </div>

  <p class="!mt-9">Already have an account?</p>
  <Button class="w-[320px] !rounded-xl py-2 !duration-500 ease-in-out transition-all !outline-none ring-off" outline color="dark">
    <template #placeholder>
      <h3 class="!text-primary !font-fold !text-sm ">Sign Up </h3>
    </template>
  </Button>
</template>

<script>
import Button from "@/components/Button.vue";

export default {

    components: { Button },

};
</script>

<style lang="scss" scoped></style>

<template>
  <div
    class="text-sm font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 w-full flex justify-center h-10 !border-0 !border-b-2 !border-gray-600 !sticky top-0 bg-black h-16"
  >
    <ul class="flex w-full justify-between">
      <Button
        @click="$emit('toggle-tab', 0)"
        class="!rounded-none py-2  ease-in-out transition-all !outline-none ring-off !border-0 !border-b-4 w-full "
        :class="!active && 'border-primary'"
        outline
        color="dark"
      >
        <template #placeholder>
          <h3 class="!text-gray-500 !font-fold !text-sm">For You</h3>
        </template>
      </Button>
      <Button
        @click="$emit('toggle-tab', 1)"
        class="!rounded-none py-2 ease-in-out transition-all !outline-none ring-off !border-0 !border-b-4 w-full"
        :class="active && 'border-primary'"
        outline
        color="dark"
      >
        <template #placeholder>
          <h3 class="!text-gray-500 !font-fold !text-sm">Following</h3>
        </template>
      </Button>
    </ul>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  emits: ["toggle-tab"],
  props: ["active"],
  components: {
    Button,
  },
};
</script>

<style></style>

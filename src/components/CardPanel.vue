<template>
  <div class="px-5 space-y-3 overflow-x-hidden">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      <slot name="title"> </slot>
    </h5>

    <p class="font-normal text-gray-700 dark:text-gray-400">
      <slot name="subtitle"> </slot>
    </p>

    <div>
      <slot name="button"> </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

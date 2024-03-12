Popup.vue
<template>
  <div
    id="dropdownHover"
    class="!z-60 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 !absolute"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownHoverButton"
    >
      <li @click="logoff">
        <div
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Sign out
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  emits: ["update:isOpen"],
  methods: {
    closePopup() {
      this.$emit("update:isOpen", false);
    },
  },
};
</script>

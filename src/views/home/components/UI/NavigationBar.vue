<template>
  <nav class="bg-black col-span-5 fixed bottom-0 sm:block md:hidden !z-50">
    <ul class="flex items-center justify-between mx-auto p-4 w-screen">
      <li>
        <router-link to="/">
          <svg
            viewBox="0 0 24 24"
            class="w-8 h-8 text-primary dark:text-white"
            fill="currentColor"
          >
            <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
          </svg>
        </router-link>
      </li>
      <li>
        <router-link to="/home/explore">
          <svg
            viewBox="0 0 24 24"
            class="w-8 h-8 dark:text-white"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="m5.41 21l.71-4h-4l.35-2h4l1.06-6h-4l.35-2h4l.71-4h2l-.71 4h6l.71-4h2l-.71 4h4l-.35 2h-4l-1.06 6h4l-.35 2h-4l-.71 4h-2l.71-4h-6l-.71 4zM9.53 9l-1.06 6h6l1.06-6z"
            />
          </svg>
        </router-link>
      </li>
      <li>
        <router-link to="/home/notification">
          <svg
            viewBox="0 0 24 24"
            class="w-8 h-8 dark:text-white"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2zm8 10a2 2 0 1 1-4 0z"
            />
          </svg>
        </router-link>
      </li>
      <li>
        <router-link to="/home/message">
          <svg
            viewBox="0 0 24 24"
            class="w-8 h-8 dark:text-white"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M0 8v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-10 4z"
            />
            <path
              fill="currentColor"
              d="M2 2a2 2 0 0 0-2 2v2l10 4l10-4V4a2 2 0 0 0-2-2z"
            />
          </svg>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped></style>

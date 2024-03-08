<template>
  <nav class="bg-black col-span-5 sticky bottom-0 sm:block md:hidden">
    <ul
      class="flex items-center justify-between mx-auto p-4"
    >
  
     
          <li>
            <Icon icon="typcn:home" class="text-4xl text-primary" />
          </li>
          <li>
            <Icon icon="teenyicons:search-outline" class="text-4xl" />
          </li>
          <li>
            <Icon icon="mingcute:notification-fill" class="text-4xl" />
          </li>
          <li>
            <Icon icon="ooui:message" class="text-4xl" />
          </li>
   
    
    </ul>
  </nav>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped></style>

<!-- Modal.vue -->
<template>
  <transition name="modal">
    <div
      class="fixed inset-0 flex items-center justify-center z-50"
      v-if="!isOpen"
    >
      <div class="modal-overlay">assdasads</div>
      <div class="modal bg-white p-6 rounded-lg shadow-lg">
        <div class="modal-header flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Modaal</h2>
          <button @click="closeModal" class="text-gray-500">&times;</button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer flex justify-end">
          <button
            @click="closeModal"
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Modal Title",
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-overlay {
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  z-index: 10000;
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>

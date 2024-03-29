<template>
  <teleport to="body">
    <transition name="dialog">
      <div
        id="crud-modal"
        v-if="showModal"
        tabindex="-1"
        aria-hidden="true"
        class="space-y-10 overflow-y-scroll overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w- md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-filter backdrop-blur-sm z-50"
      >
        <div
          @click.self="handleOpenModal"
          class="relative w-screen h-screen items-center flex justify-center"
        >
          <!-- Modal content -->
          <div
            class="relative bg-darkprimary rounded-lg shadow dark:bg-gray-700 px-6 min-w-[450px]"
          >
            <button
              @click="handleOpenModal"
              type="button"
              id="btn-close"
              class="text-gray-400 my-5 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white justify-self-center mx-10 px-2 py-2 hover:bg-slate-300"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <!-- Modal header -->

            <h3
              class="font-semibold text-white dark:text-white text-center text-3xl mb-10"
            >
              Login Account
            </h3>

            <!-- Modal body -->

            <Form @submit="submit" :validation-schema="schema" ref="form">
              <div class="grid gap-4 mb-4 grid-cols-2">
                <div class="col-span-2">
                  <div class="relative">
                    <Field
                      type="email"
                      id="floating_outlined"
                      name="email"
                      placeholder=""
                      class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    />
                    <ErrorMessage
                      name="email"
                      class="!text-red-500 font-bold"
                    />
                    <label
                      for="floating_outlined"
                      class="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >Email</label
                    >
                  </div>
                </div>
                <div class="col-span-2">
                  <div class="relative">
                    <Field
                      type="password"
                      id="floating_outlined"
                      name="password"
                      placeholder=""
                      class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    />
                    <ErrorMessage
                      name="password"
                      class="!text-red-500 font-bold"
                    />
                    <label
                      for="floating_outlined"
                      class="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >Password</label
                    >
                  </div>
                </div>
              </div>
              <div>
                <p class="text-red-500" :v-if="validation.message">
                  {{ validation.message }}
                </p>
              </div>
              <Button
                type="submit"
                class="w-full bg-white text-black rounded-xl mb-10 mt-10 duration-1000 transition-all ease-linear hover:bg-slate-500"
              >
                <template #placeholder>
                  <h6 class="font-bold">Login</h6>
                </template>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
  <div class="mb-9">
    <p class="text-sm w-[320px] text-gray-400">
      By signing up, you agree to the
      <span class="text-primary"> Terms of Service </span> and
      <span class="text-primary"> Privacy Policy </span>, including
      <span class="text-primary"> Cookie Use. </span>
    </p>
  </div>

  <p class="!mt-9">Already have an account?</p>
  <Button
    @click="handleOpenModal"
    class="w-[320px] !rounded-xl py-2 !duration-500 ease-in-out transition-all !outline-none ring-off"
    outline
    color="dark"
  >
    <template #placeholder>
      <h3 class="!text-primary !font-fold !text-sm">Login</h3>
    </template>
  </Button>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from "pinia";
import { loginSchema } from "@/schema";
import { useUserStore } from "@/store/user.js";
import Button from "@/components/Button.vue";

export default {
  components: { Button, Form, Field, ErrorMessage },
  data() {
    const schema = loginSchema;
    return {
      schema,
      showModal: false,
    };
  },
  computed: {
    ...mapState(useUserStore, ["getUsers", "getAuth", "validation"]),
  },

  watch: {},
  methods: {
    ...mapActions(useUserStore, ["loginuser", "clearValidation"]),
    submit(values) {
      if (this.loginuser(values)) {
        document.body.classList.remove("modal-open");
        document.body.classList.add("modal-close");
        document.getElementById("btn-close").click();
        this.$router.push("/home");
      }
    },
    handleOpenModal() {
      this.showModal = !this.showModal;
      this.clearValidation();
      if (this.showModal) {
        document.body.classList.remove("modal-close");
        document.body.classList.add("modal-open");
      }
      if (!this.showModal) {
        document.body.classList.remove("modal-open");
        document.body.classList.add("modal-close");
      }
    },
    reset() {
      this.clearValidation();
      this.$refs.form.resetForm();
    },
  },
};
</script>


<style scoped>
.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-in;
}

.dialog-leave-active {
  transition: all 0.3s ease-out;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>


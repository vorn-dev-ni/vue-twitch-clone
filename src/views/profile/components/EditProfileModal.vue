<template>
  <teleport to="body">
    <div
      id="crud-modal"
      tabindex="-1"
      aria-hidden="true"
      class="hidden space-y-10 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div
          class="relative bg-darkprimary rounded-lg shadow dark:bg-gray-700 p-3"
        >
          <button
            @click="reset"
            id="btn-close"
            type="button"
            class="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white justify-self-center mx-10 px-2 py-2 hover:bg-slate-300"
            data-modal-toggle="crud-modal"
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
          <div
            class="flex items-center justify-center p-4 md:p-5 rounded-t dark:border-gray-600"
          >
            <img :src="imgIcon" alt="icon-img" class="w-6 h-6" />
          </div>

          <h1
            class="font-semibold text-white dark:text-white text-center text-3xl mb-10"
          >
            Create Your Account
          </h1>

          <!-- Modal body -->
          <Form @submit="submit" :validation-schema="schema" ref="form">
            <div class="grid gap-4 mb-4 grid-cols-2">
              <div class="col-span-2">
                <div class="relative">
                  <Field
                    type="text"
                    id="floating_outlined"
                    name="name"
                    placeholder=""
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  />
                  <ErrorMessage
                    name="name"
                    class="!text-red-500 font-bold my-3"
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >Name</label
                  >
                </div>
              </div>
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
                    my-3
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
                    my-3
                    class="!text-red-500 font-bold"
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >Password</label
                  >
                </div>
              </div>
              <div class="col-span-2">
                <h5 class="text-sm font-bold text-white">Date of Birth</h5>
                <p class="text-sm text-gray-400 mb-5">
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </p>
                <div class="relative max-w-sm text-white">
                  <div
                    class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                  >
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                      />
                    </svg>
                  </div>

                  <Field
                    name="dob"
                    v-slot="{ handleChange, handleBlur, handleInput }"
                    type="text"
                  >
                    <input
                      id="floating_outlined"
                      name="dob"
                      datepicker
                      type="text"
                      class="bg-transparent border border-gray-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date"
                      @change="handleChange"
                      @blur="handleBlur"
                      @click="handleInput"
                    />
                  </Field>
                  <ErrorMessage
                    name="dob"
                    class="!text-red-500 font-bold"
                    my-3
                  />
                </div>
              </div>
            </div>

            <div class="error" :v-if="validation.message">
              <p class="text-red-500 text-center">
                {{ validation.message }}
              </p>
            </div>

            <Button
              type="submit"
              class="w-full bg-white text-black rounded-xl mb-10 mt-10 duration-1000 transition-all ease-linear hover:bg-slate-500"
            >
              <template #placeholder>
                <h6 class="font-bold">Sign Up</h6>
              </template>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import Button from "@/components/Button.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: { Button, Form, Field, ErrorMessage },
  data() {
    return {
      tweet: null,
      postLength: 0,
    };
  },
  mounted() {},
  props: ["userId"],
  methods: {
    submit(values) {
      this.registerUser(values);
      if (!this.validation.message) {
        document.getElementById("btn-close").click();
        this.$router.push({ path: "/home" });
      }
    },
    reset() {
      this.clearValidation();
      this.$refs.form.resetForm();
    },
  },
};
</script>

<style lang="scss" scoped></style>

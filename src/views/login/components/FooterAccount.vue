<template>
  <teleport to="body">
    <div
      id="login-modal"
      tabindex="-1"
      aria-hidden="true"
      class="hidden space-y-10 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-darkprimary rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white justify-self-center mx-10 px-2 py-2 hover:bg-slate-300"
            data-modal-toggle="login-modal"
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

          <h1
            class="font-semibold text-white dark:text-white text-center text-3xl mb-3"
          >
            Login Account
          </h1>

          <!-- Modal body -->
          <form class="p-4 md:p-5">
            <div class="grid gap-4 mb-4 grid-cols-2">
              <div class="col-span-2">
                <div class="relative">
                  <input
                    type="email"
                    id="floating_outlined"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >Email
                  </label>
                </div>
              </div>
              <div class="col-span-2">
                <div class="relative">
                  <input
                    type="password"
                    id="floating_outlined"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >Password</label
                  >
                </div>

                <h5 class="text-xs my-2 font-bold text-white">
                  <span class="text-primary">Forget Password?</span>
                </h5>
              </div>
            </div>

            <Button
              class="w-full bg-white text-black rounded-xl mb-10 mt-10 duration-1000 transition-all ease-linear hover:bg-slate-500"
            >
              <template #placeholder>
                <h6 class="font-bold">Sign Up</h6>
              </template>
            </Button>
            <div class="col-span-2">
              <h5 class="text-sm font-bold text-white">
                Don't have an account?
                <span
                  class="text-primary hover:text-blue-600 hover:cursor-pointer"
                  data-modal-target="crud-modal"
                  data-modal-toggle="crud-modal"
                  >Sign Up</span
                >
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
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
    data-modal-target="login-modal"
    data-modal-toggle="login-modal"
    class="w-[320px] !rounded-xl py-2 !duration-500 ease-in-out transition-all !outline-none ring-off"
    outline
    color="dark"
  >
    <template #placeholder>
      <h3
        class="!text-primary !font-fold !text-sm"
        data-modal-target="login-modal"
        data-modal-toggle="login-modal"
      >
        Sign Up
      </h3>
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

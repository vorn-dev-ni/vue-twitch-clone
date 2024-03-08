<template>
  <div class="w-full">
    <header class="!space-y-3">
      <h1 class="text-4xl md:text-7xl font-bold mb-10">Happening now</h1>
      <h3 class="text-2xl md:text-4xl">Join today.</h3>
    </header>

    <div class="body my-7">
      <Button-group class="space-y-3">
        <template #google>
          <Button
            class="!bg-white w-[320px] !rounded-xl py-2 hover:!bg-gray-300 duration-500 transition-all ease-in-out !outline-none ring-off"
          >
            <template #placeholder>
              <h6 class="text-gray-500 font-medium !text-sm">
                Sign Up With Google
              </h6>
            </template>
            <template #icon>
              <img :src="googleIcon" alt="google-logo" class="w-5 h-5" />
            </template>
          </Button>
        </template>
        <template #apple>
          <Button
            class="!bg-white w-[320px] !rounded-xl py-2 hover:!bg-gray-300 duration-500 transition-all ease-in-out ring-off"
          >
            <template #placeholder>
              <h3 class="text-black !font-fold !text-sm">Sign Up With Apple</h3>
            </template>
            <template #icon>
              <img :src="appleIcon" alt="apple-logo" class="w-5 h-5" />
            </template>
          </Button>
        </template>
        <template #create>
          <Button
            class="!bg-primary w-[320px] !rounded-xl py-2 hover:!bg-[#0084b4] duration-500 transition-all ease-in-out ring-off"
          >
            <template #placeholder>
              <h3 class="!font-fold !text-sm !text-darkaccent">
                Create an Account
              </h3>
            </template>
          </Button>
        </template>
      </Button-group>
    </div>


  </div>
</template>
<script>
import { useUserStore } from "@/store/user.js";
import { mapState } from "pinia";
import ButtonGroup from "./ButtonGroup.vue";
import Button from "@/components/Button.vue";
import appleIcon from "@/assets/apple.png";
import googleIcon from "@/assets/google.png";
export default {
  components: { ButtonGroup, Button },
  data() {
    return {
      email: "",
      password: "",
      appleIcon,
      googleIcon,
   
    };
  },
  computed: {
    ...mapState(useUserStore, ["getUsers"]),
  },
  methods: {
    // handleLogin() {
    //   let login = false;
    //   login = this.getUsers.some((item) => {
    //     return item.email == this.email && item.password == this.password;
    //   });
    //   if (login) {
    //     this.$router.push("/home");
    //   }
    // },
  },
};
</script>

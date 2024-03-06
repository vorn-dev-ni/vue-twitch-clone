<template>
  <div
    class="mx-auto w-10/12 md:w-1/2 lg:w-1/3 h-1/2 shadow-xl border border-gray-700 bg-white rounded-lg"
  >
    <div>
      <form @submit.prevent="handleLogin">
        <input type="email" v-model="email" />
        <input type="password" v-model="password" />
        <button>Login</button>
      </form>
    </div>
  </div>
</template>
<script>
import { useUserStore } from "@/store/user.js";
import { mapState } from "pinia";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState(useUserStore, ["getUsers"]),
  },
  methods: {
    handleLogin() {
      let login = false;
      login = this.getUsers.some((item) => {
        return item.email == this.email && item.password == this.password;
      });
      if (login) {
        this.$router.push("/home");
      }
    },
  },
};
</script>
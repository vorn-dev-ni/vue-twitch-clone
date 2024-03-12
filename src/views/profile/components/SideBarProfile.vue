<template>
  <nav class="h-screen col-span-2 items-center hidden md:block w-full p-5">
    <search-input />
    <card-panel
      class="card !rounded-2xl !bg-darkprimary space-y-5 gap-5 mb-5 !outline-none !border-0 my-3 w-full py-5"
    >
      <template #title>
        <h3 class="text-white font-bold">Get Verified</h3>
      </template>

      <template #subtitle>
        <p class="text-lg text-gray-500">Subscribe to unlock new features</p>
      </template>

      <template #button>
        <div>
          <Button class="bg-primary !rounded-2xl">
            <template #placeholder>
              <h6 class="font-bold text-lg">Subscribe</h6>
            </template>
          </Button>
        </div>
      </template>
    </card-panel>

    <section class="bg-darkprimary !rounded-xl">
      <h3 class="px-5 py-5">Who to Follow</h3>

      <card-panel
        v-for="(user, index) in users"
        :key="index"
        class="card !rounded-2xl !bg-darkprimary space-y-5 gap-5 !outline-none !border-0 w-full py-5 hover:!bg-gray-700 hover:!rounded-t-none !overflow-hidden my-0"
      >
        <template #title>
          <div
            @click="this.$router.push('/user/' + user?.id)"
            class="card flex gap-2 text-white w-full justify-between hover:!cursor-pointer"
            v-if="user.id !== getCurrentUserId"
          >
            <div class="text-sm flex items-center gap-3">
              <div>
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710028800&semt=ais"
                  alt="img-avatar"
                />
              </div>

              <div>
                <h5>{{ user?.name }}</h5>
                <h6>@{{ user?.name }}</h6>
              </div>
            </div>
            <Button
              @click="follow(user?.id)"
              class="bg-white !rounded-3xl text-black hover:!text-white hover:!bg-primary !ring-0 !ring-offset-0"
            >
              <template #placeholder>
                <h6 class="font-bold text-sm">
                  {{ checkFollowUser(user?.id) ? "Following" : "Follow" }}
                </h6>
              </template>
            </Button>
          </div>
        </template>
      </card-panel>
    </section>
  </nav>
</template>
<script>
import CardPanel from "@/components/CardPanel.vue";
import Button from "@/components/Button.vue";
import SearchInput from "@/views/home/components/Sidebar/SearchInput.vue";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "@/store/user";

export default {
  components: {
    CardPanel,
    Button,
    SearchInput,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.users = this.fetchUsers();
    console.log(this.users);
  },
  computed: {
    ...mapState(useUserStore, ["getCurrentUserId"]),
  },
  methods: {
    ...mapActions(useUserStore, [
      "fetchUsers",
      "updateOnFollow",
      "checkFollowUser",
    ]),
    follow(userId) {
      console.log(userId);
      this.updateOnFollow(userId);
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  nav {
    background-color: lightblue;
  }
}
</style>

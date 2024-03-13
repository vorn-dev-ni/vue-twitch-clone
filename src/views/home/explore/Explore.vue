<template>
  <div
    class="text-white lg:col-span-2 col-span-5 sm:col-span-4 flex-col justify-center border-r-[1px] border-l-[1px] border-gray-600"
  >
    <div class="flex gap-3 items-center my-5 ml-5" @click="this.$router.back()">
      <Icon icon="ep:back" class="text-lg" />
      <h4>Explore</h4>
    </div>
    <p class="text-white text-center my-10 text-sm" v-if="users?.length <= 1">
      We couldn't find any users yeyt
    </p>

    <div v-for="(user, index) in users" :key="index">
      <card-panel

        :key="index"
        class="card !rounded-none !bg-none space-y-5 gap-5 !outline-none !border-0 w-full py-5 hover:!bg-gray-700 hover:!rounded-t-none !overflow-hidden my-0"
      >
        <template #title         v-if="user?.id?.toString() !== getCurrentUserId.toString()">
   
         
          <div
            class="card flex gap-2 text-white w-full justify-between hover:!cursor-pointer"
          >
            <div
              class="text-sm flex items-center gap-3 flex-1"
              @click="this.$router.push('/user/' + user?.id)"
            >
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
    </div>

    <navigation-bar />
  </div>
</template>

<script>
import NavigationBar from "../components/UI/NavigationBar.vue";
import { Icon } from "@iconify/vue";
import CardPanel from "@/components/CardPanel.vue";
import Button from "@/components/Button.vue";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "@/store/user";
export default {
  components: {
    CardPanel,
    Button,
    Icon,
    NavigationBar,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.users = this.fetchUsers();
    console.log(this.getCurrentUserId);
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

<style lang="scss" scoped></style>

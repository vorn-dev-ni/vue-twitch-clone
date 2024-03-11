<template>
  <div
    class="text-white lg:col-span-2 col-span-5 sm:col-span-4 flex-col justify-center border-r-[1px] border-l-[1px] border-gray-600"
  >
    <router-link
      class="flex gap-3 items-center my-5 ml-5 sticky top-0"
      to="/home"
    >
      <Icon icon="ep:back" class="text-lg" />
      <div>
        <h5>{{profileInfo?.name}}</h5>
        <p class="text-xs text-gray-400">
          {{ profileInfo.posts?.length }} post </p>
      </div>
    </router-link>

    <main class="relative">
      <div class="bg-gray-600 py-20"></div>

      <div class="img absolute top-28 z-20 left-5 flex justify-between w-full">
        <img
          class="w-24 h-24 rounded-full"
          src="https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
          alt="Rounded avatar"
        />

        <Button
          class="!bg-transparent !border-2 !border-gray-400 py-1 my-14 mr-8 !rounded-2xl hover:!bg-gray-900"
        >
          <template #placeholder>
            <h6 class="text-xs text-white font-bold">Edit Profile</h6>
          </template>
        </Button>
      </div>

      <div class="profile my-16 mx-5 space-y-3">
        <h5>{{ profileInfo?.name }}</h5>
        <h6>@{{ profileInfo?.name }}</h6>

        <p class="text-xs">{{ profileInfo?.bio || "No Bio" }}</p>
        <div class="icon flex gap-2 text-xs">
          <div class="flex items-center gap-2 text-gray-500">
            <Icon icon="ph:balloon" />
            <span> Born {{ profileInfo?.dob }}</span>
          </div>
          <div class="flex items-center gap-2 text-gray-500">
            <Icon icon="zondicons:calendar" />
            <span> Joined {{ profileInfo?.createdOn }}</span>
          </div>
        </div>

        <div class="follow flex gap-2 items-center">
          <div class="flex items-center gap-2 text-gray-500 text-sm">
            <h6 class="font-bold text-white">{{ profileInfo.followings?.length || 0}}</h6>
            <h6 class="text-gray-500">Followings</h6>
          </div>
          <div class="flex items-center gap-2 text-gray-500 text-sm">
            <h6 class="font-bold text-white">{{ profileInfo.followers?.length  || 0}}</h6>
            <h6 class="text-gray-500">Followers</h6>
          </div>
        </div>
      </div>
    </main>
    <div class="bottom-profile flex justify-between">
      <Button
        class="!bg-transparent !border-0 !outline-none !border-b-2 !border-primary !rounded-none !ring-0 !ring-offset-0 hover:!bg-gray-900"
      >
        <template #placeholder>
          <h6 class="text-xs text-white font-bold">Posts</h6>
        </template>
      </Button>
      <Button
        class="!bg-transparent !border-0 !outline-none !rounded-none !ring-0 !ring-offset-0 hover:!bg-gray-900"
      >
        <template #placeholder>
          <h6 class="text-xs text-white font-bold">Replies</h6>
        </template>
      </Button>
      <Button
        class="!bg-transparent !border-0 !outline-none !rounded-none !ring-0 !ring-offset-0 hover:!bg-gray-900"
      >
        <template #placeholder>
          <h6 class="text-xs text-white font-bold">Highlight</h6>
        </template>
      </Button>
      <Button
        class="!bg-transparent !border-0 !outline-none !rounded-none !ring-0 !ring-offset-0 hover:!bg-gray-900"
      >
        <template #placeholder>
          <h6 class="text-xs text-white font-bold">Articles</h6>
        </template>
      </Button>
      <Button
        class="!bg-transparent !border-0 !outline-none !rounded-none !ring-0 !ring-offset-0 hover:!bg-gray-900"
      >
        <template #placeholder>
          <h6 class="text-xs text-white font-bold">Media</h6>
        </template>
      </Button>
      <Button
        class="!bg-transparent !border-0 !outline-none !rounded-none !ring-0 !ring-offset-0 hover:!bg-gray-900"
      >
        <template #placeholder>
          <h6 class="text-xs text-white font-bold">Likes</h6>
        </template>
      </Button>
    </div>
    <user-post />

    <navigation-bar />
  </div>
</template>

<script>
import UserPost from "./components/UserPost.vue";
import { Icon } from "@iconify/vue";
import Button from "@/components/Button.vue";
import { mapState } from "pinia";
import { useUserStore } from "@/store/user";
export default {
  components: {
    Icon,
    Button,
    UserPost,
  },
  data() {
    return {
      tweet: null,
    };
  },
  mounted() {
    console.log(this.getProfileInfo(this.userId))
  },
  props: ["userId"],

  provide() {
    return {
      userId: this.userId,
    };
  },
  computed: {
    ...mapState(useUserStore, ["getProfileInfo"]),
    profileInfo() {   
      return this.getProfileInfo(this.userId);
    },
  },
};
</script>

<style lang="scss" scoped></style>

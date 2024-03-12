<template>
  <teleport to="body">
    <div
      :key="userId"
      id="crud-modal"
      tabindex="-1"
      aria-hidden="true"
      class="hidden space-y-10 overflow-y-scroll overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w- md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black"
    >
      <Form @submit="submit" :validation-schema="schema" ref="form">
        <div class="relative p-4 w-full max-w-md max-h-full">
          <!-- Modal content -->
          <div
            class="relative bg-darkprimary rounded-lg shadow dark:bg-gray-700 p-3"
          >
            <div
              class="header flex gap-3 justify-between items-center border-b-[1px] border-gray-700 mb-3 my-6"
            >
              <button
                @click="reset"
                id="btn-close"
                type="button"
                class="text-gray-400 bg-transparent rounded-lg text-sm justify-start dark:hover:bg-gray-600 dark:hover:text-white !justify-self-start px-2 py-2 hover:bg-slate-300 !justify-start"
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
              <h2
                class="font-semibold text-white dark:text-white text-center text-lg"
              >
                Edit Profile
              </h2>
              <Button
                type="submit"
                class="bg-white text-black rounded-xl mb-10 mt-10 duration-1000 transition-all ease-linear hover:bg-slate-500"
              >
                <template #placeholder>
                  <h6 class="font-bold">Save</h6>
                </template>
              </Button>
            </div>

            <!-- Modal header -->

            <!-- Modal body -->

            <div class="grid gap-4 mb-4 grid-cols-2 mb-2">
              <div class="col-span-2">
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-48 border-2 !border-transparent border-dashed rounded-lg cursor-pointer !bg-transparent dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div
                      class="flex flex-col items-center justify-center pt-5 pb-6"
                    >
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      name="file"
                      class="hidden"
                      @change="onChangeFile"
                      :v-model="inputFile"
                    />
                  </label>
                </div>
              </div>
              <div class="col-span-2 mb-3">
                <img
                  class="w-24 h-24 rounded-full"
                  :src="
                    imgUri ||
                    'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg='
                  "
                  alt="rounded-avatar-image"
                />
              </div>
              <div class="col-span-2">
                <div class="relative">
                  <Field
                    type="text"
                    id="floating_outlined"
                    name="name"
                    :value="profileInfo.name"
                    placeholder=""
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  />
                  <ErrorMessage
                    name="name"
                    class="!text-red-500 font-bold my-3 text-sm"
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
                    as="textarea"
                    name="bio"
                    :value="profileInfo?.bio"
                    id="bio"
                    cols="10"
                    rows="3"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  />

                  <ErrorMessage
                    name="bio"
                    class="!text-red-500 font-bold my-3 text-sm"
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 !text-lg"
                    >Bio</label
                  >
                </div>
              </div>
              <div class="col-span-2">
                <div class="relative">
                  <Field
                    type="text"
                    id="floating_outlined"
                    name="location"
                    :value="profileInfo?.location"
                    placeholder=""
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  />
                  <ErrorMessage
                    name="location"
                    class="!text-red-500 font-bold my-3 text-sm"
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >location</label
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
                      :value="profileInfo?.dob"
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

            <div class="error" :v-if="validation?.message">
              <p class="text-red-500 text-center">
                <!-- {{ validation.message }} -->
              </p>
            </div>
          </div>
        </div>
      </Form>
    </div>
  </teleport>
  <div
    class="text-white lg:col-span-2 col-span-5 sm:col-span-4 flex-col justify-center border-r-[1px] border-l-[1px] border-gray-600 sticky top-0 !bg-black z-50"
  >
    <div
      @click="this.$router.back()"
      class="flex gap-3 items-center my-5 pl-5 !sticky !top-0 !bg-black z-50"
    >
      <Icon icon="ep:back" class="text-lg" />
      <div>
        <h5>{{ profileInfo?.name }}</h5>
        <p class="text-xs text-gray-400">{{ postLength }} post</p>
      </div>
    </div>

    <main class="relative">
      <div class="bg-gray-600 py-20"></div>

      <div class="img absolute top-28 z-20 left-5 flex justify-between w-full">
        <img
          class="w-24 h-24 rounded-full"
          :src="
            profileInfo?.imgUri ||
            'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg='
          "
          alt="rounded-avatar-image"
        />

        <Button
          :key="userId"
          data-modal-target="crud-modal"
          data-modal-toggle="crud-modal"
          v-if="getCurrentUserId?.toString() == userId?.toString()"
          class="!bg-transparent !border-2 !border-gray-400 py-1 my-14 mr-8 !rounded-2xl hover:!bg-gray-900 !ring-0 !ring-offset-0"
        >
          <template #placeholder>
            <h1 class="text-xs text-white font-bold">Edit Profile</h1>
          </template>
        </Button>
        <Button
          :key="userId"
          @click="updateOnFollow(userId)"
          v-if="+getCurrentUserId !== +userId"
          class="!bg-transparent !border-2 !border-gray-400 py-1 my-14 mr-8 !rounded-2xl hover:!bg-gray-900 !ring-0 !ring-offset-0"
        >
          <template #placeholder>
            <h6 class="text-xs text-white font-bold">
              {{ checkFollowUser(userId) ? "Following" : "Follow" }}
            </h6>
          </template>
        </Button>
      </div>

      <div class="profile my-16 mx-5 space-y-3">
        <h5>{{ profileInfo?.name }}</h5>
        <h6>@{{ profileInfo?.name }}</h6>

        <p class="text-xs">{{ profileInfo?.bio || "No Bio" }}</p>
        <div class="icon flex gap-2 text-xs">
          <div
            class="flex items-center gap-2 text-gray-500"
            v-if="profileInfo?.location"
          >
            <Icon icon="ph:balloon" />
            <span> Live in {{ profileInfo?.location }}</span>
          </div>
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
            <h6 class="font-bold text-white">
              {{ profileInfo.followings?.length || 0 }}
            </h6>
            <h6 class="text-gray-500">Followings</h6>
          </div>
          <div class="flex items-center gap-2 text-gray-500 text-sm">
            <h6 class="font-bold text-white">
              {{ profileInfo.followers?.length || 0 }}
            </h6>
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

    <p v-if="!postLength" class="text-sm text-gray-400 text-center my-10">
      User has no post yet!!!
    </p>
  </div>
  <navigation-bar />
</template>

<script>
import NavigationBar from "../home/components/UI/NavigationBar.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { userProfileSchema } from "@/schema";
import UserPost from "./components/UserPost.vue";
import { Icon } from "@iconify/vue";
import Button from "@/components/Button.vue";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "@/store/user";

export default {
  components: {
    Icon,
    Button,
    UserPost,
    Form,
    Field,
    ErrorMessage,
    NavigationBar,
  },
  data() {
    const schema = userProfileSchema;
    return {
      tweet: null,
      postLength: 0,
      schema,
      imgUri: "",
      showModal: false,
    };
  },
  mounted() {
    this.postLength = this.getPostByUserLength(this.userId);
    console.log(this.profileInfo);
  },
  props: ["userId"],

  provide() {
    return {
      userId: this.userId,
    };
  },
  computed: {
    ...mapState(useUserStore, [
      "getProfileInfo",
      "getPostByUserLength",
      "getCurrentUserId",
    ]),

    profileInfo() {
      return this.getProfileInfo(this.userId);
    },
  },
  watch: {},
  methods: {
    ...mapActions(useUserStore, [
      "updateOnFollow",
      "checkFollowUser",
      "getProfileInfo",
      "updateProfile",
    ]),
    handleOpenModal() {
      this.showModal = !this.showModal;
    },

    onChangeFile(event) {
      const imgUri = URL.createObjectURL(event.target.files[0]);
      this.imgUri = imgUri;
    },

    submit(values) {
      this.updateProfile({
        ...values,
        imgUri: this.imgUri,
        userId: this.userId,
      });
      document.getElementById("btn-close").click();
    },
    reset() {
      // this.clearValidation();
      this.$refs.form.resetForm();
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.params);
    const store = useUserStore();
    if (!store.getProfileInfo(to.params?.userId)) {
      console.log("run");
      next("/notFound"); // Redirect to the Not Found route
    }
    next();
  },
};
</script>

<style lang="scss" scoped></style>

import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/404/NotFound.vue";
import LoginPage from "@/views/login/LoginPage.vue";
import Home from "@/views/home/components/Home.vue";
import HomePage from "@/views/home/HomePage.vue";
import TweetUserPage from "@/views/tweet/TweetUser.vue";
import { useUserStore } from "@/store/user";
import ProfilePage from "@/views/profile/Profile.vue";
import SoonPage from "@/views/404/Soon.vue";
import ExplorePage from "@/views/home/explore/Explore.vue";
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  { path: "/:notFound", component: NotFound },
  {
    path: "/home",
    alias: "/",
    meta: {
      requireAuth: true,
    },
    component: HomePage,
    redirect: "",
    children: [
      { path: "", component: Home },

      {
        path: "explore",
        alias: "explore",
        meta: {
          requireAuth: true,
        },
        component: ExplorePage,
      },
      {
        path: "notification",
        component: SoonPage,
      },
      {
        path: "message",
        component: SoonPage,
      },
      { path: "user/:userId", component: ProfilePage, props: true },
      { path: ":id", component: TweetUserPage, props: true },
      { path: ":notFound", component: NotFound },
    ],
  },

  {
    path: "/auth",
    component: LoginPage,
    meta: {
      requireAuth: false,
    },
    children: [{ path: "login", redirect: "/auth" }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "extactActive",
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const store = useUserStore();

    if (store.getAuth === false) return next("/auth");
  }
  const store = useUserStore();
  if (to.path.includes("auth")) {
    if (store.isAuth) {
      next({
        path: "/home",
      });
    }
  }
  next();
});

export default router;

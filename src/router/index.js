import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/404/NotFound.vue";
import LoginPage from "@/views/login/LoginPage.vue";
import Home from "@/views/home/components/Home.vue";
import HomePage from "@/views/home/HomePage.vue";
import TweetUserPage from "@/views/tweet/TweetUser.vue";
import { useUserStore } from "@/store/user";
import ProfilePage from "@/views/profile/Profile.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },

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
      { path: "user/:id", component: ProfilePage, props: true },
      { path: ":id", component: TweetUserPage, props: true },
      { path: ":notFound(.*)", component: NotFound },
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
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
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

import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/404/NotFound.vue";
import LoginPage from "@/views/login/LoginPage.vue";
import Home from "@/views/home/components/Home.vue";
import HomePage from "@/views/home/HomePage.vue";
import UserPage from "@/views/home/user/UserPage.vue";
import { useUserStore } from "@/store/user";
import pinia from "@/store/pinia";


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
      { path: ":id", component: UserPage },
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

const user = useUserStore(pinia);

router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {
    if (!user.isAuth) {
      next({
        path: "/auth",
      });
    }
  }
  next();
});

export default router;

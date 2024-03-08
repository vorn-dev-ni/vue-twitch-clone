import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/404/NotFound.vue";
import LoginPage from "@/views/login/LoginPage.vue";
import HomePage from "@/views/home/HomePage.vue";
import UserPage from "@/views/home/user/UserPage.vue";
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
    children: [
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
router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/login/LoginPage.vue";

const routes = [
  {
    path: "/auth/",
    name: "auth",
    children: [
      {
        path: "",
        name: "login",
        component: LoginPage,
      },
    ],
  },
  {
    path: "/",
    name: "newfeed",
    component: HomePage,
    meta: { requiresAuth: true },
    redirect: (to) => {
      console.log(to)
      return "auth"
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from) => {
  console.log(to, from);
  // explicitly return false to cancel the navigation
  return true;
});
export default router;

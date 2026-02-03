import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../App.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/memo",
      name: "memo",
      component: () => import("../views/NotePad.vue"),
    },
  ],
});

export default router;

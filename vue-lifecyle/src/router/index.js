import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/hook",
      name: "lifecycleHook",
      component: () => import("@/views/LifecycleHook.vue"),
    },
    {
      path: "/watch",
      name: "Watch",
      component: () => import("@/views/WatchTest.vue"),
    },
    {
      path: "/one",
      name: "OneComponentApp",
      component: () => import("@/views/MulitComponentApp.vue"),
    },
  ],
});

export default router;

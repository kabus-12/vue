import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // 플러그인 등록

import App from "./App.vue";
import router from "./router";
// createApp : Root Vue 객체 생성
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");

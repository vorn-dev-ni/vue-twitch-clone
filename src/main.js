import "../node_modules/flowbite-vue/dist/index.css";
import "./assets/tailwind.css";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import * as VeeValidate from 'vee-validate';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";


const app = createApp(App);
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia);
app.use(router);
app.use(VeeValidate)
app.mount("#app");

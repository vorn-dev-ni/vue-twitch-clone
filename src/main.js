import "../node_modules/flowbite-vue/dist/index.css";
import "./assets/tailwind.css";
import "@vuepic/vue-datepicker/dist/main.css";
import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import Vue3linkify from "vue-3-linkify";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import * as VeeValidate from "vee-validate";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
const app = createApp(App);
app.use(Vue3linkify);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(VeeValidate);
app.component('Datepicker', VueDatepickerUi)
app.mount("#app");

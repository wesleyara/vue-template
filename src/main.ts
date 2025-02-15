import { addIcons, OhVueIcon } from "oh-vue-icons";

import "./styles/globals.scss";
import "./styles/typography.scss";

import { BiGithub } from "oh-vue-icons/icons";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

addIcons(BiGithub);

const app = createApp(App);
const pinia = createPinia();

app.component("VIcon", OhVueIcon);
app.use(pinia);
app.use(router);
app.mount("#app");

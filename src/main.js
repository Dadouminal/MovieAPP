import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "../node_modules/bulma/css/bulma.min.css";
import router from "./router";

createApp(App).use(router).mount("#app");

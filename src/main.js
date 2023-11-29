import { createApp } from "vue";
import "./style.css";
import { createPinia } from 'pinia'
import App from "./App.vue";
import "../node_modules/bulma/css/bulma.min.css";
import router from "./router";

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount("#app");

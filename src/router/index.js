import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import MostLike from "../views/MostLike.vue";
import Search from "../views/SearchFilm.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/MostLike", component: MostLike },
  { path: "/movie", name: "movie", component: Search },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

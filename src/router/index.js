import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Movie from "../views/Movie.vue"

const routes = [{ path: "/", component: Home },{path:"/movie/:id",component:Movie}];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

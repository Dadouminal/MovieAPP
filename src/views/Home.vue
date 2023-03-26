<script setup>
import axios from "axios";
import { ref } from "vue";
import SearchComponent from "../components/SearchComponent.vue";
import CardComponent from "../components/CardComponent.vue";
let filmFinded = ref([""]);
const searchFilm = async () => {
  const fetchedFilm = await axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
    )
    .then((response) => (filmFinded.value = response.data.results));
};
searchFilm();
</script>

<template>
  <div class="section">
    <h1 class="font-bold text-slate-400 has-text-centered">
      Bienvenue sur cette formidable application Vue pour rechercher vos films
      favoris
    </h1>
    <h2 class="has-text-centered mb-4">
      <span class="has-text-primary">Movie</span>
      <span>App</span>
    </h2>
    <SearchComponent />
    <div class="columns is-multiline">
      <div class="column is-4" v-for="movie in filmFinded">
        <CardComponent :movie="movie" />
      </div>
    </div>
  </div>
</template>

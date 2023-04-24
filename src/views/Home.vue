<script setup>
import { useSorted } from "@vueuse/core"; 
import axios from "axios";
import { ref, onMounted, watch } from "vue";

import CardComponent from "../components/CardComponent.vue";

let filmFinded = ref([""]);

// Fonction pour rechercher les films
const loadFilm = async () => {
  const fetchedFilm = await axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
    )
    .then((response) => (filmFinded.value = response.data.results));
};

// Afficher les films de la base de données

onMounted(() => {
  loadFilm();
});

// Code de recherche des films

let film = ref("");
const isFetching = ref(false);

const searchFilm = async (film) => {
  isFetching.value = true;
  await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${film}&language=fr-FR`
    )
    .then((response) => {
      // console.log(response);
      // filmFinded.value = [];
      filmFinded.value = response.data.results;
      isFetching.value = false;
    })
    .catch((error) => {
      console.log(error);
    });

  return filmFinded;

  // findedFilm.value.push(data.value);
};

watch(film,(value,oldValue)=>{
  // console.log(value,oldValue);
  searchFilm(value)
})

const objSorted = ()=>useSorted(filmFinded, (a, b) => a.vote_average - b.vote_average)
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

    <div
      class="is-flex is-justify-content-center is-flex-direction-column is-align-items-center"
    >
      <div class="field is-fullwidth has-addons">
        <p class="control has-icons-left">
          <span class="ri-search-line is-left icon"></span>

          <form action="/" @submit.prevent="searchFilm(film)">
            <input
              type="search"
              class="input is-primary"
              placeholder="Rechercher un film..."
              v-model="film"
            />
          </form>
          <!-- <span>{{ film }}</span> -->
        </p>
        <p class="control">
          <button class="button" @click="searchFilm(film)">search</button>
        </p>
      </div>
      <p class="buttons is-grouped">
        <button class="button is-rounded is-primary" @click="objSorted">
          <span class="icon"><i class="ri-arrow-drop-up-fill"></i></span>Top
        </button>
        
      </p>
    </div>
    <p v-if="isFetching" class="has-text-link">Loading...</p>

    <div class="columns is-multiline">
      <div class="column is-4" v-for="movie in filmFinded">
        <CardComponent :movie="movie" />
      </div>
    </div>
  </div>
</template>

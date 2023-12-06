<script setup>
import { useSorted } from "@vueuse/core"; 
import axios from "axios";
import {useMoviesStore} from "../store"
import { ref, onMounted, watch } from "vue";



import CardComponent from "../components/CardComponent.vue";


const movieStore=useMoviesStore();


onMounted(() => {
  movieStore.getMovies();
});

// Code de recherche des films

let film = movieStore.$state.movie;
const isFetching = ref(false);



watch(film,(value,oldValue)=>{
  // console.log(value,oldValue);
  searchFilm(value)
})


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

          <form action="/" @submit.prevent="movieStore.getTheMovie(film)">
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
          <button class="button" @click="movieStore.getTheMovie(film)">search</button>
          
        </p>
      </div>
     
    </div>
    <p v-if="movieStore.isFetching" class="has-text-link">Loading...</p>

    <div class="columns is-multiline">
      <div class="column is-4" v-for="movie in movieStore.searchMovie" :key="movie.id">
        <CardComponent :movie="movie" />
      </div>
    </div>
  </div>
</template>

<template>
  <div
    class="is-flex is-justify-content-center is-flex-direction-column is-align-items-center"
  >
    <div class="field is-fullwidth has-addons">
      <p class="control has-icons-left">
        <span class="ri-search-line is-left icon"></span>

        <input
          type="search"
          class="input is-primary"
          placeholder="Rechercher un film..."
          v-model="film"
        />
        <!-- <span>{{ film }}</span> -->
      </p>
      <p class="control">
        <button class="button" @click="searchFilm(film)">search</button>
      </p>
    </div>
    <p class="buttons is-grouped">
      <button class="button is-rounded is-primary">
        <span class="icon"><i class="ri-arrow-drop-up-fill"></i></span>Top
      </button>
      <button class="button is-rounded is-warning">
        <span class="icon"><i class="ri-arrow-drop-down-fill"></i></span>Flop
      </button>
    </p>
  </div>
  <div class="columns is-multiline">
    <div class="column is-4" v-for="movie in findedFilm">
      <CardComponent :movie="movie" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import CardComponent from "../components/CardComponent.vue";

let findedFilm = ref([""]);
let film = ref("");

const searchFilm = async (film) => {
  const code = await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${film}&language=fr-FR`
    )
    .then((response) => {
      findedFilm.value = response.data.results;
    });
  console.log(findedFilm.value);
};
</script>

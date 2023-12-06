<template>
  <section class="section">
    <div v-if="movieStore.isFetching">
      <h1>Loading...</h1>
    </div>
    <div class="columns h-auto">
      <div class="column is-3-desktop is-offset-4-desktop">
        <CardComponent :movie="movieStore.movies[0]" />
      </div>
    </div>
  </section>
</template>

<script setup>
import CardComponent from "../components/CardComponent.vue";
import { useMoviesStore } from "../store";
import { useRoute } from "vue-router";
// import {onMounted} from 'vue'

const route = useRoute();

const movieStore = useMoviesStore();

const id = route.params.id;
movieStore.getTheMovie(id);
</script>

<style scoped></style>

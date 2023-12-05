<template>
    <CardComponent :movie="movie" />
</template>

<script setup>
import CardComponent from '../components/CardComponent.vue';
import { useMoviesStore } from '../store';

const movieStore=useMoviesStore()


const movie=movieStore.getTheMovie(movieStore.movie)
</script>

<style scoped>

</style>
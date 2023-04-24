<script setup>
import { ref } from "vue";
defineProps(["movie"]);
</script>
<template>
  <section class="section">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img
            :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
            alt=""
          />
        </figure>
      </div>
      <div class="card-content">
        <p class="content font-bold m-0">{{ movie.title }}</p>
        <p class="text-slate-600">Sorti le:{{ movie.release_date }}</p>
        <p class="content">
          {{ Math.round(movie.vote_average) }}/10
          <span><i class="ri-star-fill"></i></span>
        </p>

        <h2 class="subtitle mb-1">Synopsis</h2>
        <p class="content text-xs h-auto">{{ movie.overview }}...</p>
      </div>
    </div>
  </section>
</template>

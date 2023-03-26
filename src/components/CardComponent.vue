<script setup>
defineProps({
  movie: {
    type: String,
  },
});
</script>
<template>
  <section class="section">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
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
        <p class="content text-xs h-auto">
          {{ movie.overview.slice(0, 150) }}...
        </p>
      </div>
      <div class="card-footer">
        <div class="card-footer-item">
          <button class="button is-link">Ajouter coup de coeur</button>
        </div>
      </div>
    </div>
  </section>
</template>

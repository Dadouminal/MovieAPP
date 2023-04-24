<template>
  <nav
    class="navbar is-dark font-Poppins"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item">
        <span class="has-text-primary">Movie</span>
        <span>App</span>
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': isActive }"
        @click="mobileMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isActive }"
    >
      <div class="navbar-start">
        <router-link to="/" class="navbar-item"> Home </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
let isActive = ref(false);

const mobileMenu = () => (isActive.value = !isActive.value);
</script>

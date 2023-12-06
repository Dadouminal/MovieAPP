<script setup>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>

<style>
body {
  background-color: #2a292e;
}
</style>

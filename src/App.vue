<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from './components/MyLayout.vue'
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
  <div class="wrapper">
    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>   -->
  </div>
</template>

<style></style>

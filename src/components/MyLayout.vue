<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideNav from './SideNav.vue'
</script>

<template>
  <div class="flex">
    <SideNav />
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideNav from './SideNav.vue'
</script>

<template>
  <div class="flex">
    <SideNav />
    <div class="flex justify-center w-full">
      <RouterView></RouterView>
    </div>
  </div>
</template>

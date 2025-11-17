<template>
  <div class="flex gap-3 items-center">
    <img :src="Logo" alt="Logo" class="w-20 h-20 object-contain" />
    <p class="text-white text-4xl font-bold leading-tight">
      Божхона <br />
      <span class="text-3xl font-medium tracking-[12px]">аудити</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/assets/logo.png'
</script>

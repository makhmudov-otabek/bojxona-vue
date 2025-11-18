<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import LineChart from '.././LineChart/LineChart.vue'
import HalfPieChart from '.././HalfPieChart/HalfPieChart.vue'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'

const data = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/monthlyData')
    data.value = res.data
    console.log('data', data.value)
  } catch (error) {
    console.log('Error:', error)
  }
})

const monthlyData = computed(() => data.value)

ChartJS.register(ArcElement, Tooltip, Legend)
</script>
<template>
  <div class="flex justify-between gap-4 pt-4">
    <div
      v-if="monthlyData.length"
      class="basis-8/12 bg-white p-5 py-4 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
    >
      <div class="flex justify-between items-center mb-4">
        <p>O`tkazilgan auditlar soni</p>
        <div class="flex gap-6">
          <p class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#0099ff] inline-block" />
            Ijobiy
          </p>
          <p class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#ff3300] inline-block" />
            Salbiy
          </p>
        </div>
      </div>
      <LineChart :data="monthlyData" />
    </div>
    <div class="basis-4/12 bg-white p-5 py-4 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
      <div class="flex justify-between items-center w-full">
        <p class="font-bold">Sayyor audit</p>
        <div class="rounded-full hover:bg-gray-200 duration-200 cursor-pointer w-9 h-9 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </div>
      </div>
      <div class="flex justify-center">
        <HalfPieChart />
      </div>
      <div class="flex justify-between items-center mb-4">
        <p class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#ff9900] inline-block" />
          Salbiy yakunlangan
        </p>
        <p>50 ta</p>
      </div>
      <div class="flex justify-between items-center">
        <p class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#0099ff] inline-block" />
          Ijobiy yakunlangan
        </p>
        <p>100 - ta</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import CircleChart from '../CircleChart/CircleChart.vue'
import axios from 'axios'

const data = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/auditData')
    data.value = res.data
    console.log('data', data.value)
  } catch (error) {
    console.log('Error:', error)
  }
})

const auditData = computed(() => data.value)
</script>
<template>
  <div class="flex justify-between gap-4 pt-4">
    <div
      class="basis-8/12 bg-white p-5 py-4 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)] flex"
    >
      <div
        v-if="auditData.length"
        class="flex flex-col justify-between pr-4 border-r border-gray-300"
      >
        <div class="flex gap-7 justify-between items-center">
          <p class="tex">Jami Summa</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-layers-icon lucide-layers"
          >
            <path
              d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
            />
            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
          </svg>
        </div>
        <p class="text-2xl font-bold">160,2mlrd</p>
      </div>

      <div
        v-for="(item, index) in auditData"
        v-bind:key="item.name"
        :class="[
          'flex pr-4 gap-1 mx-1 justify-center items-center, ',
          index + 1 < data.length ? 'border-r border-gray-300' : '',
        ]"
      >
        <CircleChart :percent="item.value" :fill="item.fill" :sum="item.sum" />
        <div class="text-center h-full flex flex-col justify-between">
          <p class="text-[13px] text-[#0099ff] font-bold">Undirilgan</p>
          <p class="text-xl font-bold">85mlrd</p>
          <p class="text-[13px] font-bold">qiymati</p>
        </div>
      </div>
    </div>
    <div class="basis-4/12 bg-white p-3 py-2 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
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
      <div class="flex">
        <div class="flex-1 py-1 h-full text-center px-4 border-r border-gray-300">
          <p class="font-bold mb-2">30 ta</p>
          <p class="text-xs font-bold">Salbiy yakunlangan</p>
        </div>
        <div class="flex-1 py-1 h-full px-4 text-center">
          <p class="font-bold mb-2">10 ta</p>
          <p class="text-xs font-bold">Ijobiy yakunlangan</p>
        </div>
      </div>
    </div>
  </div>
</template>

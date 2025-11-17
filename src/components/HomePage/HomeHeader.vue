<script setup lang="ts">
import CircleChart from './CircleChart/CircleChart.vue'

const data = [
  {
    name: 'Undirilgan',
    value: 35,
    fill: '#0099ff',
    sum: '82mlrd',
    label: '35%',
  },
  {
    name: 'Nazoratda',
    value: 35,
    fill: '#ff9900',
    sum: '44mlrd',
    label: '35%',
  },
  {
    name: 'Bartaraf etilgan',
    value: 35,
    fill: '#009999',
    sum: '35mlrd',
    label: '35%',
  },
]

// idx + 1 < data.length ? "border-r border-gray-300" : ""
</script>
<template>
  <div class="flex justify-between gap-4 p-4">
    <div
      class="flex-9 p-5 py-4 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)] flex justify-between"
    >
      <div class="flex flex-col justify-between pr-4 border-r border-gray-300">
        <div class="flex gap-5 justify-between items-center">
          <p class="text-lg">Jami Summa</p>
          <FiLayers size="{26}" />
        </div>
        <p class="text-3xl font-bold">160,2mlrd</p>
      </div>

      <div
        v-for="(item, index) in data"
        v-bind:key="item.name"
        :class="[
          'flex-1 flex gap-5 pr-4 justify-center items-center, ',
          index + 1 < data.length ? 'border-r border-gray-300' : '',
        ]"
      >
        <CircleChart :percent="item.value" :fill="item.fill" :sum="item.sum" />
        <div class="text-center h-full flex flex-col justify-between">
          <p class="text-[13px] text-[#0099ff] font-bold">Undirilgan</p>
          <p class="text-2xl font-bold">85mlrd</p>
          <p class="text-[13px] font-bold">qiymati</p>
        </div>
      </div>
    </div>
    <div class="flex-3 p-3 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
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

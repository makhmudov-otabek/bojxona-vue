<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import KompleksAuditCard from './KompleksAuditCard.vue'
import axios from 'axios'

type dataValuesType = {
  id: number
  name: string
  status: string
  color: string
  value: number
  isValueVisible: boolean
  flag?: string
  isFlagVisible: boolean
}

type dataType = {
  title: string
  name: string
  statusName: string
  progressName: string
  values: dataValuesType[]
}

const props = defineProps<{
  data: dataType
  customsClearance: dataType
}>()
</script>
<template>
  <div className="flex justify-between gap-4 pt-4">
    <div class="basis-4/12 p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
      <KompleksAuditCard :data="data" />
    </div>
    <div class="basis-4/12 p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
      <KompleksAuditCard :data="customsClearance" />
    </div>
    <div class="basis-4/12 p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
      <p class="uppercase text-center text-(--secondary) font-bold mb-3">Ustav malumotlari</p>
      <div class="flex justify-between">
        <div class="flex-1 text-center border-r border-gray-300 p-2">
          <div class="flex flex-col justify-between items-center">
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
              class="lucide lucide-users-round-icon lucide-users-round size-12 text-(--secondary)"
            >
              <path d="M18 21a8 8 0 0 0-16 0" />
              <circle cx="10" cy="8" r="5" />
              <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
            </svg>

            <p class="text-sm mt-1">Tasischilar soni</p>
          </div>
          <p class="text-2xl font-bold mt-3">25 ta</p>
        </div>
        <div class="flex-1 flex flex-col justify-between items-center text-center p-2">
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
            class="size-12 lucide lucide-wallet-icon lucide-wallet text-(--secondary)"
          >
            <path
              d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
            />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
          </svg>
          <p class="text-sm mt-1">Ustav fondi</p>
          <p class="text-2xl font-bold mt-3">1 000 000</p>
          <p class="text-sm">mln sum</p>
        </div>
      </div>
    </div>
  </div>
</template>

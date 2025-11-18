<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import KompleksAuditCard from './KompleksAudit/KompleksAuditCard.vue'
import axios from 'axios'
import KompleksAuditMiddle from './KompleksAudit/KompleksAuditMiddle.vue'
import KompleksAuditFooter from './KompleksAudit/KompleksAuditFooter.vue'

const data = ref([])
const customsClearance = ref([])

onMounted(async () => {
  try {
    const [res, resCustomsClearance] = await Promise.all([
      axios.get('http://localhost:3000/riskSystems'),
      axios.get('http://localhost:3000/customsClearance'),
    ])

    data.value = res.data
    customsClearance.value = resCustomsClearance.data
  } catch (error) {
    console.error('API error:', error)
  }
})

console.log('users', data)

const riskData = computed(() => data.value)
const customsData = computed(() => customsClearance.value)
</script>
<template>
  <div class="p-4 w-full">
    <div class="w-full">
      <ol class="flex items-center w-full text-gray-900 font-medium">
        <li
          class="flex w-full relative after:content-[''] after:w-full after:h-0.5 after:bg-(--secondary) after:inline-block after:absolute lg:after:top-6 after:top-3 after:left-12"
        >
          <div class="block whitespace-nowrap z-10">
            <span
              class="w-10 h-10 bg-(--secondary) border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-lg text-white lg:w-13 lg:h-13"
            >
              1 </span
            >Umumiy malumot
          </div>
        </li>
        <li
          class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-gray-200 after:inline-block after:absolute lg:after:top-6 after:top-3 after:left-12"
        >
          <div class="block whitespace-nowrap z-10">
            <span
              class="w-6 h-6 border-2 text-white bg-(--secondary) rounded-full flex justify-center items-center mx-auto mb-3 text-lg lg:w-13 lg:h-13"
            >
              2 </span
            >Faolligi
          </div>
        </li>
        <li
          class="flex w-full relative text-gray-900 after:content-[''] after:w-90 after:h-0.5 after:bg-gray-200 after:inline-block after:absolute lg:after:top-6 after:top-3 after:left-12"
        >
          <div class="block whitespace-nowrap z-10">
            <span
              class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-lg lg:w-13 lg:h-13"
            >
              3 </span
            >Xavf topshiriqlari
          </div>
        </li>
        <li class="flex relative text-gray-900">
          <div class="block whitespace-nowrap z-10">
            <span
              class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-lg lg:w-13 lg:h-13"
            >
              4 </span
            >Xujjat rasmiylashtiruvi
          </div>
        </li>
      </ol>
    </div>
    <div className="flex justify-between gap-4 pt-4">
      <div class="basis-4/12 bg-white p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
        <KompleksAuditCard :data="riskData" />
      </div>
      <div class="basis-4/12 bg-white p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
        <KompleksAuditCard :data="customsData" />
      </div>

      <div class="basis-4/12 bg-white p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
        <p class="uppercase text-center text-(--secondary) font-bold mb-3">Bojxona to`lovlari</p>
        <div class="flex justify-between">
          <div
            class="flex-1 flex flex-col justify-between items-center text-center border-r border-gray-300 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-12 text-(--secondary)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>

            <p class="text-sm mt-1">Undirilgan bojxona to`lovlari</p>
            <p class="text-2xl font-bold mt-3">25 000 000</p>
            <p class="text-sm">mln sum</p>
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
              class="size-12 lucide lucide-check-line-icon lucide-check-line text-(--secondary)"
            >
              <path d="M20 4L9 15" />
              <path d="M21 19L3 19" />
              <path d="M9 15L4 10" />
            </svg>
            <p class="text-sm mt-1">Berilgan imtiyozlar</p>
            <p class="text-2xl font-bold mt-3">5 000 000</p>
            <p class="text-sm">mln sum</p>
          </div>
        </div>
      </div>
    </div>
    <KompleksAuditMiddle :data="riskData" :customsClearance="customsClearance" />
    <KompleksAuditFooter :data="riskData" :customsClearance="customsClearance" />
  </div>
</template>

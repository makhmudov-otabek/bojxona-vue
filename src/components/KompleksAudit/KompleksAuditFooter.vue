<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import KompleksAuditCard from './KompleksAuditCard.vue'
import axios from 'axios'
import HalfCircle from '../HalfCircleChart/HalfCircle.vue'

const data = ref([])
const partners = ref([])

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/customsClearance')
  const partnersRes = await axios.get('http://localhost:3000/partners')

  data.value = res.data
  partners.value = partnersRes.data
})

const customsClearanceData = computed(() => data.value)
const partnersData = computed(() => partners.value)
</script>
<template>
  <div className="flex justify-between gap-4 pt-4">
    <div class="basis-4/12 bg-white p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
      <KompleksAuditCard :data="partnersData" />
    </div>
    <div class="basis-4/12 bg-white p-3 pb-4 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
      <KompleksAuditCard :data="customsClearanceData" />
    </div>
    <div class="basis-4/12 bg-white p-3 rounded-md shadow-[0px_0px_7px_rgba(0,0,0,0.25)]">
      <p class="uppercase text-center text-(--secondary) font-bold mb-3">BHB holatlari</p>

      <div class="flex justify-between">
        <HalfCircle width="w-[170px]" height="h-[150px]" :radius="50" />
        <div className="h-full flex flex-col gap-10 justify-between">
          <div>
            <p className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0099ff] inline-block" />
              Mamuriy
            </p>
            <p>20 ta 90% ga nisbatan</p>
          </div>

          <div className="h-full">
            <p className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ff9900] inline-block" />
              Jinoiy
            </p>
            <p>30 ta 90% ga nisbatan</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

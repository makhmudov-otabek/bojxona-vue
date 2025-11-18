<script setup lang="ts">
import ProgressBar from './ProgressBar.vue'

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
}>()
</script>
<template>
  <div>
    <p class="uppercase text-center text-(--secondary) font-bold mb-3">
      {{ props.data.title }}
    </p>
    <div class="flex gap-10 text-sm">
      <p>{{ props.data.name }}</p>
      <p>{{ props.data.statusName }}</p>
      <p>{{ props.data.progressName }}</p>
    </div>

    <div
      v-for="item in props.data.values"
      v-bind:key="item.value"
      class="flex gap-3 justify-between text-sm mt-4"
    >
      <div className="flex items-center gap-1 flex-1 border-b border-gray-300 pb-1">
        <img
          :src="`${item.flag}`"
          alt=""
          :class="`${item.isFlagVisible ? 'block' : 'hidden'} w-6 h-4`"
        />

        <p>{{ item.name }}</p>
      </div>
      <!-- <p class="flex-1 border-b border-gray-300 pb-1">{{ item.name }}</p> -->
      <p :class="`flex-1 border-b text-center border-gray-300 pb-1 text-[${item.color}]`">
        {{ item.status }}
      </p>
      <div className="flex gap-2 border-b text-center border-gray-300 text-gray-500">
        <p :class="`${item.isValueVisible ? 'block' : 'hidden'}`">{{ item.value }}%</p>
        <ProgressBar :value="item.value" :bg-color="item.color" />
      </div>
    </div>
  </div>
</template>

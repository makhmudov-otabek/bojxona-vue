<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type Plugin,
  type ChartOptions,
  type ChartData,
} from 'chart.js'

const props = defineProps<{
  percent: number
  fill: string
  sum: string
}>()

ChartJS.register(ArcElement, Tooltip, Legend)

const centerTextPlugin: Plugin<'doughnut'> = {
  id: 'centerText',
  beforeDraw(chart) {
    if (chart.config.type !== 'doughnut') return
    const {
      ctx,
      chartArea: { width, height },
    } = chart as any
    const x = width / 2
    const y = height / 2
    ctx.save()
    ctx.font = '700 22px Inter, Arial'
    ctx.fillStyle = '#111827'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(`${props.percent}%`, x, y - 6)
    ctx.font = '400 12px Inter, Arial'
    ctx.fillStyle = '#6b7280'
    ctx.fillText('lorem', x, y + 14)
    ctx.restore()
  },
}

// ChartJS.register(centerTextPlugin)

const data: ChartData<'doughnut'> = {
  datasets: [
    {
      data: [100 - props.percent, props.percent],
      backgroundColor: ['#e5e7eb', props.fill],
      borderWidth: 0,
      offset: 1,
      borderRadius: 180,
    },
  ],
}

const options: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '85%',
  plugins: {
    legend: { display: false },
  },
  elements: {
    arc: {
      borderRadius: 999,
    },
  },
}
</script>

<template>
  <div class="w-[100px] h-[90px] cursor-pointer">
    <Doughnut :data="data" :options="options" class="w-full h-full" :plugins="[centerTextPlugin]" />
  </div>
</template>

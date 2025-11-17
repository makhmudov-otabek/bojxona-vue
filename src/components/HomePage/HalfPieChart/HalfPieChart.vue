<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type Plugin } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

const data = {
  labels: ['VueJs', 'EmberJs'],
  datasets: [
    {
      backgroundColor: ['#ff9900', '#0099ff'],
      data: [40, 20],
      // borderWidth: 180,
    },
  ],
}

const centerTextPlugin: Plugin<'doughnut'> = {
  id: 'centerText',
  beforeDraw(chart) {
    if (chart.config.type !== 'doughnut') return
    const {
      ctx,
      chartArea: { width, height },
    } = chart as any
    const x = width / 2
    const y = height / 1.3
    ctx.save()
    ctx.font = '700 22px Inter, Arial'
    ctx.fillStyle = '#111827'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    // ctx.fillText(`${props.percent}%`, x, y - 6)
    ctx.fillText(`12 ta`, x, y - 6)
    ctx.font = '400 12px Inter, Arial'
    ctx.fillStyle = '#6b7280'
    ctx.restore()
  },
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  rotation: -90, // 0 daraja (chapdan start)
  circumference: 180, // 180 daraja
  cutout: '55%',
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
}

ChartJS.register(ArcElement, Tooltip, Legend)
</script>
<template>
  <div class="w-[250px]">
    <Doughnut
      class="h-[200px] w-full"
      :data="data"
      :options="options"
      :plugins="[centerTextPlugin]"
    />
  </div>
</template>

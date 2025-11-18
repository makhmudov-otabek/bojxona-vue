<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type Plugin,
} from 'chart.js'
import { Line } from 'vue-chartjs'

type ChartPoint = { name: string; uv: number; pv: number; amt: number }

const props = defineProps<{ data: ChartPoint[] }>()

console.log('props.data', props.data)

const yearlyData = {
  labels: [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
    'Iyul',
    'Avgust',
    'Sentyabr',
    'Oktyabr',
    'Noyabr',
    'Dekabr',
  ],
  datasets: [
    {
      backgroundColor: '#f87979',
      data: props.data.map((item) => item.pv),
      cubicInterpolationMode: 'monotone',
      borderColor: '#ff3300',
      tension: 0.4,
      pointRadius: (ctx) => {
        const idx = ctx.dataIndex
        const last = ctx.dataset.data.length - 1
        return idx === 0 || idx === last ? 6 : 0
      },
      pointHoverRadius: (ctx) => {
        return 5
      },
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointBorderColor: '#f87979',
      pointBorderWidth: 2,
      // borderDash: [5, 5],
    },
    {
      backgroundColor: '#0099ff',
      data: props.data.map((item) => item.uv),
      cubicInterpolationMode: 'monotone',
      borderColor: '#0099ff',
      tension: 0.4,
      pointRadius: (ctx) => {
        const idx = ctx.dataIndex
        const last = ctx.dataset.data.length - 1
        return idx === 0 || idx === last ? 6 : 0
      },
      pointHoverRadius: (ctx) => {
        return 5
      },
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointBorderColor: '#0099ff',
      pointBorderWidth: 2,
      // borderDash: [5, 5],
    },
  ],
}

const customLabelsPlugin: Plugin<'line'> = {
  id: 'customLabels',
  afterDatasetsDraw(chart) {
    if (chart.config.type !== 'line') return
    const { ctx } = chart as any
    ctx.save()
    chart.data.datasets.forEach((dataset: any, datasetIndex: number) => {
      const meta = chart.getDatasetMeta(datasetIndex)
      meta.data.forEach((point: any, index: number) => {
        const val = dataset.data[index]
        const x = point.x
        const y = point.y
        ctx.font = '600 11px Inter, Arial'
        ctx.fillStyle = '#111827'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'bottom'
        ctx.opacity = 0.1
        ctx.fillText(String(val), x, y - 6)
        ctx.globalAlpha = 0.7
      })
    })
    ctx.restore()
  },
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  gridPadding: 10,
  plugins: {
    legend: {
      display: false,
    },
    customLabelsPlugin: {},
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(0,0,0,0.07)',
      },
      offset: true,
      display: true,
      title: {
        // display: true,
      },
    },
    y: {
      grid: {
        color: 'rgba(0,0,0,0.07)',
      },
      ticks: {
        callback: function (value: any) {
          const allowed = [20, 40, 60, 80, 100]
          return allowed.includes(value) ? value : ''
        },
      },
      suggestedMin: 0,
      suggestedMax: 100,
      offset: true,
      display: true,
      title: {
        display: false,
        // text: 'Value',
      },
    },
  },
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  customLabelsPlugin,
)
</script>
<template>
  <div class="h-[250px] cursor-pointer">
    <Line :data="yearlyData" :options="options" />
  </div>
</template>

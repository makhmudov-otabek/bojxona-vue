<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value: number
    bgColor?: string
  }>(),
  {
    value: 45,
    bgColor: '#bfbfbf',
  },
)
</script>
<template>
  <div className="w-[100px] ">
    <div className="h-4 bg-gray-200  overflow-hidden">
      <div
        className="h-full flex items-center justify-center text-sm font-semibold"
        role="progressbar"
        aria-valuenow="{value}"
        aria-valuemin="{0}"
        aria-valuemax="{100}"
        :style="{
          width: `${props.value}%`,
          backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0 10px, rgba(255,255,255,0) 10px 20px), linear-gradient(180deg,${props.bgColor},${props.bgColor})`,
          backgroundSize: '28px 28px, auto',
        }"
      ></div>
    </div>
  </div>
</template>

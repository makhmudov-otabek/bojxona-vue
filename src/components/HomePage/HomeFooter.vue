<script setup lang="ts">
import HalfCircle from '.././HalfCircleChart/HalfCircle.vue'
</script>
<template>
  <div class="w-full flex justify-between gap-4 pt-4">
    <div class="basis-8/12 bg-white p-5 py-4 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
      <div class="flex-1">
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base">
          <div class="w-full">
            <h3 class="text-lg font-semibold ml-3 text-slate-800">Xududlar</h3>
          </div>
          <div
            class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border"
          >
            <table class="w-full text-left table-auto min-w-max">
              <thead>
                <tr>
                  <th class="p-4 border-b border-slate-300 bg-slate-50">
                    <p class="block text-sm font-normal leading-none text-slate-500">Nomi</p>
                  </th>
                  <th class="p-4 border-b border-slate-300 bg-slate-50">
                    <p class="block text-sm font-normal leading-none text-slate-500">Soni</p>
                  </th>
                  <th class="p-4 border-b border-slate-300 bg-slate-50">
                    <p class="block text-sm font-normal leading-none text-slate-500">Ijobiy</p>
                  </th>
                  <th class="p-4 border-b border-slate-300 bg-slate-50">
                    <p class="block text-sm font-normal leading-none text-slate-500">Summasi</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">Buxoro</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">Manager</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">88</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">100</p>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">Navoiy</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">Developer</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">87</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">200</p>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">Toshkent</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">Executive</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">56</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">159</p>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">Andijon</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">Developer</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">56</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">120</p>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">Andijon</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">Developer</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">56</p>
                  </td>
                  <td class="p-4 border-b border-slate-200">
                    <p class="block text-sm text-slate-800">120</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="basis-4/12 bg-white p-5 py-4 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
      <div class="flex justify-between items-center w-ful">
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
      <div class="flex justify-center my-5">
        <HalfCircle />
      </div>
      <div class="flex justify-between items-center mb-5 mt-7">
        <p class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#ff9900] inline-block" />
          Salbiy yakunlangan
        </p>
        <p>50 ta</p>
      </div>
      <div class="flex justify-between items-center">
        <p class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#0099ff] inline-block" />
          Ijobiy yakunlangan
        </p>
        <p>100 - ta</p>
      </div>
    </div>
  </div>
</template>

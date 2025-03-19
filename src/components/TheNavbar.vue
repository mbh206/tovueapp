<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>
<template>
  <div class="h-20 flex justify-between font-main text-gray-800">
    <!-- <RouterLink to="/"
      ><img
        src="../../public/favicon.ico"
        alt="Main site logo"
        class="p-1 h-full animate-pulse hover:animate-none"
    /></RouterLink> -->
    <div class="flex items-center">
      <RouterLink to="/"
        ><div class="flex gap-3 uppercase">
          <h1 class="text-4xl ml-2">Mark<span class="text-sky-800 ml-1">Harris</span></h1>
        </div></RouterLink
      >
    </div>
    <div v-if="width <= 860">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-18 mr-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
    <div v-if="width > 860">
      <ul class="flex uppercase items-center m-2 gap-4">
        <li class="hover:text-sky-600 p-0 m-0 text-2xl/6"><RouterLink to="/">Home</RouterLink></li>
        <li class="hover:text-sky-600 p-0 m-0 text-2xl/6">
          <RouterLink to="/projects">Projects</RouterLink>
        </li>
        <li class="hover:text-sky-600 p-0 m-0 text-2xl/6">
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

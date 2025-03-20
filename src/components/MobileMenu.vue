<template>
  <div class="fixed bg-black/60 backdrop-blur-lg top-0 left-[0%] w-full h-full left-0 z-[999]">
    <div @click="closeMenu" class="w-24 h-24 fixed top-0 right-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="size-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
    <h3 class="text-sky-400 text-5xl text-center my-10">Mark Harris</h3>
    <ul class="flex flex-col text-5xl uppercase items-center m-2 gap-8 text-white">
      <li @click="closeMenu" class="active:text-sky-600"><RouterLink to="/">Home</RouterLink></li>
      <li @click="closeMenu" class="hover:text-sky-600">
        <RouterLink to="/projects">Projects</RouterLink>
      </li>
      <li @click="closeMenu" class="hover:text-sky-600">
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
      <li @click="closeMenu" class="hover:text-sky-600">
        <a href="https://www.github.com/mbh206" target="_blank">Github</a>
      </li>
      <li @click="closeMenu" class="hover:text-sky-600">
        <a href="https://www.linkedin.com/in/mark-harris/" target="_blank">LinkedIn</a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])

function closeMenu() {
  emit('close')
}
</script>

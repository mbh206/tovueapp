<script setup lang="ts"></script>
<template>
  <div class="h-16 bg-gray-200 flex justify-between">
    <div class="flex items-center">
      <img src="../../public/favicon.ico" alt="Main site logo" class="p-2 h-full" />
      <h1 class="text-4xl">Mark Harris</h1>
    </div>
    <ul class="flex gap-3 text-xl uppercase items-center mr-2">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/projects">Projects</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </div>
</template>

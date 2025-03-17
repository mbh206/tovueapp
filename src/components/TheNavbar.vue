<script setup lang="ts"></script>
<template>
  <div class="h-20 bg-gray-300 flex justify-between">
    <RouterLink to="/"
      ><img
        src="../../public/favicon.ico"
        alt="Main site logo"
        class="p-1 h-full animate-pulse hover:animate-none"
    /></RouterLink>
    <div class="flex items-center">
      <div class="flex gap-3">
        <h1 class="text-4xl">Mark<span class="text-sky-800">Harris</span></h1>
        <h3 class="text-4xl text-white drop-shadow-sm">Portolio</h3>
      </div>
    </div>
    <ul class="flex flex-col text-lg uppercase items-center mr-2">
      <li class="hover:text-sky-600 p-0 m-0 text-xl/6"><RouterLink to="/">Home</RouterLink></li>
      <li class="hover:text-sky-600 p-0 m-0 text-xl/6">
        <RouterLink to="/projects">Projects</RouterLink>
      </li>
      <li class="hover:text-sky-600 p-0 m-0 text-xl/6">
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
    </ul>
  </div>
</template>

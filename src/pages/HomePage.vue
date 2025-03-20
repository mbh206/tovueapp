<script setup lang="ts"></script>
<template>
  <div class="pt-15 h-screen flex flex-col text-xl gap-3 bg-white text-center relative">
    <h1 class="text-black">Welcome to my developer portfolio</h1>
    <RouterLink to="/projects" class="relative z-0">
      <img
        src="../../public/favicon.ico"
        class="animate-[spin_15000ms_reverse_ease-in-out_infinite] m-auto w-[25%]"
      />
    </RouterLink>
    <h2 class="text-gray-700">
      This simple site has many of my projects which showcase my growing developer skills. My more
      recent projects highlight my interest in trying out different languages and frameworks.
    </h2>
    <h3 class="text-gray-500">
      Hope you find this site useful and interesting. Thanks for stopping by!
    </h3>
  </div>
</template>

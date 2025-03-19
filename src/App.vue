<script setup lang="ts">
import TheNavBar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="flex flex-col h-screen justify-between font-body">
    <TheNavBar />
    <div class="flex bg-gray-400">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<style scoped></style>

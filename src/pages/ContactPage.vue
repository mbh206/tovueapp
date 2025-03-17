<script setup lang="ts"></script>
<template>
  <div class="w-screen h-screen bg-white">
    <div class="flex flex-col w-96 m-auto mt-40">
      <label for="email">Enter email:</label>
      <input type="email" placeholder="Email" class="px-2 py-1 rounded bg-gray-200 mb-3" />
      <label for="name">Enter name:</label>
      <input type="text" placeholder="Name" class="px-2 py-1 rounded bg-gray-200 mb-3" />
      <label for="message">Enter your message below:</label>
      <textarea class="h-24 px-2 py-1 rounded bg-gray-200 mb-3"></textarea>
      <button type="submit" class="text-white bg-blue-500 px-3 py-2 rounded hover:bg-blue-400">
        Submit
      </button>
    </div>
  </div>
</template>

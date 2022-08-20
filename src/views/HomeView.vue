<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
console.log(window.electronAPI.platform)
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Vitesse-router',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <router-view />
</template>

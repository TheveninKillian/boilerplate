<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  name: 'App',
  setup(props) {
    useHead({
      title: 'Vite-key',
      meta: [
        { name: 'description', content: 'Opinionated Vite Starter Template' },
      ],
    })
  },
})
</script>

<template>
  <router-view />
</template>

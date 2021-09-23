<script setup lang="ts">
useHead({
  title: 'Power-V | About',
})
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <h1>About</h1>

    <p>Vitesse is an opinionated Vite starter template made by @antfu for mocking apps swiftly. With file-based routing, components auto importing, markdown support, I18n, PWA and uses WindiCSS for UI.</p>

    <code>
      // syntax highlighting example
      function vitesse() {
      const foo = 'bar'
      console.log(foo)
      }
    </code>
    <div class="py-4" />
  </div>
</template>

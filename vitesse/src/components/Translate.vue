<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <button @click="toggleLocales">
    <mdi:translate />
  </button>
</template>
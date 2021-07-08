<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <router-view />
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <div class="w-1/4 m-auto text-center text-gray-300 bg-teal-800">
      Default Layout
    </div>

    <div>
      <router-link to="/about">
        {{ t('about') }}
      </router-link>

      <a class="icon-btn mx-2 cursor-pointer" @click="toggleLocales">
        <carbon-language />
      </a>
    </div>
  </main>
</template>

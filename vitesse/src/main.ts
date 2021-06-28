import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages
})

createApp(App).use(i18n).mount('#app')

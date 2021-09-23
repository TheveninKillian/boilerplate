import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Inspect from 'vite-plugin-inspect'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    vue(),

    Pages({
      extensions: ['vue', 'md'],
    }),

    Layouts(),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: true,
    }),

    Components({
      extensions: ['vue'],

      dts: true,

      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),

    Icons(),

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    Inspect({
      enabled: false,
    }),

    WindiCSS(),
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})

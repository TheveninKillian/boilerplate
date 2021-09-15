Ce boilerplate est tiré d'un déjà existant [Vitesse](https://github.com/antfu/vitesse)

- [Vite JS](https://vitejs.dev/)
- [vite-ssg](https://github.com/antfu/vite-ssg)
- [WindiCSS](https://windicss.org/)
- [vite-plugin-windi](https://github.com/windicss/vite-plugin-windicss)
- [vite-plugin-component](https://github.com/antfu/vite-plugin-components)
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- [vite-plugin-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- [vite-plugin-i18n](https://github.com/intlify/vite-plugin-vue-i18n)
- [vite-plugin-pwa](https://github.com/antfu/vite-plugin-pwa)


## 1. initialisation de vite + vue  
- pnpm init @vitejs/app  
- pnpm install  
- pnpm outdated  
- test avec pnpm dev  

## 2. installation des packages
Créer les fichiers .eslinignore - .eslintrc - tsconfig.json - windi.config.ts  
pnpm i -D @antfu/eslint-config @typescript-eslint/eslint-plugin cross-env eslint https-localhost sass  
pnpm i -D vite-ssg @vue/server-renderer vite-plugin-windicss unplugin-vue-components @iconify/json unplugin-icons unplugin-auto-import
pnpm i @vueuse/head @vueuse/core

## 3. Add
### Router
Créer les dossiers **pages** avec le fichier **index.vue** et **layouts** avec le fichier **default.vue**  
Changement du fichier "main.ts" -> vite-ssg  
pnpm i -D vite-plugin-vue-layouts vite-plugin-pages vite-plugin-inspect
pnpm i vue-router@4.0.10 ou >
> vite.config.ts, main.ts, vite-env.d.ts

### Module
Creer le fichier types.ts  
Créer le dossier modules avec les fichiers "modules". ex: i18n.ts, PWA.ts

#### Translation
Créer un dossier locales avec des fichiers .yml qui contient la langue (ex: en.yml, fr.yml...)

pnpm i vue-i18n  
pnpm i -D @intlify/vite-plugin-vue-i18n

---
# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
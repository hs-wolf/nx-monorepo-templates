import { dirname, resolve } from 'node:path';
import { defineNuxtConfig } from 'nuxt/config';
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src',
  css: ['~/assets/css/styles.scss'],
  devServer: {
    host: '0.0.0.0',
    port: 4200,
  },
  nitro: {
    output: {
      dir: resolve(dirname(fileURLToPath(import.meta.url)), '../../dist/apps/client/.output'),
    },
  },
  vite: {
    cacheDir: resolve(dirname(fileURLToPath(import.meta.url)), '../../node_modules/.vite'),
  },
  workspaceDir: resolve(dirname(fileURLToPath(import.meta.url)), '../../'),
  alias: {
    '@nx-monorepo-templates/models': resolve(dirname(fileURLToPath(import.meta.url)), '../../libs/models/src'),
  },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        { name: 'description', content: 'client' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@formkit/auto-animate/nuxt',
    '@nuxt/image',
    '@nuxt/eslint',
  ],
  tailwindcss: {
    viewer: false,
  },
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        language: 'en-US',
        file: 'en.yaml',
      },
      {
        name: 'Português',
        code: 'pt',
        language: 'pt-BR',
        file: 'pt.yaml',
      },
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  image: {
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 50,
          height: 50,
        },
      },
    },
  },
});

import { dirname, resolve } from "node:path";
import { defineNuxtConfig } from "nuxt/config";
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  srcDir: "src",
  css: ["~/assets/css/styles.scss"],
  devServer: {
    host: "0.0.0.0",
    port: 4200,
  },
  nitro: {
    output: {
      dir: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "../../dist/apps/client/.output"
      ),
    },
  },
  vite: {
    cacheDir: resolve(
      dirname(fileURLToPath(import.meta.url)),
      "../../node_modules/.vite"
    ),
  },
  workspaceDir: resolve(dirname(fileURLToPath(import.meta.url)), "../../"),
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        { name: "description", content: "client" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  tailwindcss: {
    viewer: false,
  },
});

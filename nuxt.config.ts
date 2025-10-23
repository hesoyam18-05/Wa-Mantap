// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image"],
  css: [
    '~/assets/css/main.css'
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  preview: {
    port: 3001,
  },

  docus: {
    search: {
      // Pastikan index semua konten
      options: {
        fields: ['title', 'description', 'body', '_search'],
        storeFields: ['title', 'description'],
      }
    }
  }
});

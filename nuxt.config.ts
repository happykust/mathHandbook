// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: true },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    cssPath: '~/assets/css/input.css'
  },
  app: {
    baseURL: "/",
    head: {
      link: [
        {rel:"preconnect", href:"https://fonts.googleapis.com"},
        {rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin:"anonymous"},
        {rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0"},
        {rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
      ],
      title: "MathHandbook"
    },
  },
})

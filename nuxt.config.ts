// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'nuxt3test',
      meta: [
        { name: 'key', content: 'value' },
        { name: 'description', content: '网站的介绍' },
      ],
    },
  },
  devtools: { enabled: true },
  // css: ['~/assets/styles/main.scss'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})

import { defineOrganization } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/seo',
  ],
  components: {
    dirs: [],
  },

  imports: {
    autoImport: false,
  },

  devtools: { enabled: true },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  site: {
    url: 'https://example.com',
    name: 'Awesome Site',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'en',
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',

  typescript: {
    typeCheck: true,
    strict: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  schemaOrg: {
    identity: defineOrganization({
      name: 'Example',
      url: 'https://example.com',
    }),
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
  '@nuxt/ui',
  '@nuxtjs/i18n'
],
  i18n: {
    customRoutes: 'config',   // disable custom route with page components
    pages: {
      about: {
        en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
        it: '/a-propos', // -> accessible at /fr/a-propos
      },
      contact:{
        en: '/contact',
        it: '/contattami'
      },
      services: {
        en: '/services',
        it: '/servizi'      
      }
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },
  devtools: { enabled: true }
})

export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      firebaseApiKey: '',
      firebaseAuthDomain: '',
      firebaseProjectId: '',
      firebaseStorageBucket: '',
      firebaseMessagingSenderId: '',
      firebaseAppId: '',
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      title: 'TapNReview — Más reseñas en Google. Sin esfuerzo.',
      meta: [
        { name: 'theme-color', content: '#0d0d0d' },
        { name: 'description', content: 'El expositor NFC + QR que convierte clientes en reseñas de Google en 5 segundos. Sin apps. Sin suscripciones.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,600&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap' },
      ],
    },
  },

  devtools: { enabled: false },
  compatibilityDate: '2026-05-03',
})
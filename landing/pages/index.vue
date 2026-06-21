<script setup lang="ts">
useHead({
  title: 'TapNReview — Más reseñas en Google. Sin esfuerzo.',
  meta: [
    { name: 'description', content: 'El expositor NFC + QR que convierte clientes en reseñas de Google en 5 segundos. Sin apps. Sin suscripciones. Pago único.' },
    { property: 'og:title', content: 'TapNReview — Más reseñas en Google. Sin esfuerzo.' },
    { property: 'og:description', content: 'El expositor NFC + QR que convierte clientes en reseñas de Google en 5 segundos.' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-white font-sans antialiased text-ink">
    <AppNav />
    <main>
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <ProductShowcase />
      <FeatureGrid />
      <Testimonials />
      <FaqSection />
      <CtaSection />
    </main>
    <AppFooter />
  </div>
</template>

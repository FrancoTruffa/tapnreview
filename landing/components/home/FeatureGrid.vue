<script setup lang="ts">
const features = [
  {
    icon: '💳',
    title: 'Pago único, sin suscripciones',
    desc: 'Pagás una vez y es tuyo para siempre. Sin cuotas mensuales ni cargos ocultos.',
    accent: '#4285F4',
  },
  {
    icon: '🛡️',
    title: 'Filtra reseñas negativas',
    desc: 'Las calificaciones de 1 a 3 estrellas van a un formulario privado. Nunca llegan a Google.',
    accent: '#EA4335',
  },
  {
    icon: '📊',
    title: 'Estadísticas por punto',
    desc: 'Sabés cuántos scans tuvo cada expositor, cuándo y desde qué canal (NFC o QR).',
    accent: '#FBBC05',
  },
  {
    icon: '📡',
    title: 'NFC y QR combinados',
    desc: 'Cubre todos los casos: smartphones modernos con NFC y cualquier celular con cámara.',
    accent: '#34A853',
  },
  {
    icon: '🏢',
    title: 'Compatible con cualquier negocio',
    desc: 'Restaurante, hotel, peluquería, clínica — si tenés clientes, esto funciona para vos.',
    accent: '#4285F4',
  },
  {
    icon: '⚡',
    title: 'Setup en 5 minutos',
    desc: 'Configurás la URL de tu perfil Google y empezás a recibir reseñas ese mismo día.',
    accent: '#34A853',
  },
]

const { containerEl, visible } = useRevealList(6, 80)
</script>

<template>
  <section class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">

      <SectionHeader
        eyebrow="Por qué TapNReview"
        title="No es solo un sticker QR."
        description="Es un sistema completo diseñado para maximizar tus reseñas y proteger tu reputación online."
        :center="true"
      />

      <div ref="containerEl" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(feat, i) in features"
          :key="feat.title"
          :class="[
            'group relative overflow-hidden rounded-2xl border border-edge bg-canvas-2 p-6 transition-all duration-500 hover:bg-white hover:shadow-md hover:-translate-y-0.5',
            visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ]"
        >
          <!-- Icon -->
          <div class="mb-4 text-2xl">{{ feat.icon }}</div>

          <!-- Content -->
          <h3 class="mb-2 font-sans text-base font-semibold text-ink">{{ feat.title }}</h3>
          <p class="text-sm leading-relaxed text-ink-2">{{ feat.desc }}</p>

          <!-- Hover accent -->
          <div
            class="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-300 group-hover:w-full"
            :style="{ backgroundColor: feat.accent }"
          />
        </div>
      </div>

    </div>
  </section>
</template>

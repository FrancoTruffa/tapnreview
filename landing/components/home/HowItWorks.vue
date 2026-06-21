<script setup lang="ts">
const steps = [
  {
    n: '01',
    icon: '📱',
    title: 'El cliente acerca el celular',
    desc: 'Con NFC o escaneando el QR integrado en el expositor. No necesita descargar ninguna app ni registrarse.',
    color: '#4285F4',
    bg: '#eef4ff',
  },
  {
    n: '02',
    icon: '⭐',
    title: 'Elige su calificación',
    desc: 'Ve una pantalla con 5 estrellas. Si elige 4 o 5 estrellas, va directo a su perfil de Google.',
    color: '#FBBC05',
    bg: '#fffbeb',
  },
  {
    n: '03',
    icon: '🚀',
    title: 'Reseña publicada en segundos',
    desc: 'Aterriza en Google Maps listo para escribir. Fricción mínima, conversión máxima.',
    color: '#34A853',
    bg: '#f0fdf4',
  },
]

const { containerEl, visible } = useRevealList(3, 120)
</script>

<template>
  <section id="como-funciona" class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">

      <SectionHeader
        eyebrow="Proceso"
        title="En 3 pasos, más reseñas."
        description="El flujo completo dura menos de 10 segundos. Sin fricción para tu cliente, máximos resultados para vos."
        :center="true"
      />

      <div ref="containerEl" class="grid gap-5 md:grid-cols-3">
        <div
          v-for="(step, i) in steps"
          :key="step.n"
          :class="[
            'group relative overflow-hidden rounded-2xl border border-edge bg-white p-8 transition-all duration-500 hover:shadow-md hover:-translate-y-0.5',
            visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ]"
          :style="{ transitionDelay: visible[i] ? '0ms' : '0ms' }"
        >
          <!-- Step number watermark -->
          <span
            class="absolute -right-2 -top-4 select-none font-serif text-[7rem] font-bold leading-none transition-colors duration-300"
            :style="{ color: step.bg }"
            aria-hidden="true"
          >{{ step.n }}</span>

          <!-- Icon -->
          <div
            class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
            :style="{ backgroundColor: step.bg }"
          >
            {{ step.icon }}
          </div>

          <!-- Content -->
          <h3 class="mb-2 font-sans text-lg font-semibold text-ink">{{ step.title }}</h3>
          <p class="text-sm leading-relaxed text-ink-2">{{ step.desc }}</p>

          <!-- Color accent bottom line -->
          <div
            class="absolute bottom-0 left-0 h-[3px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
            :style="{ backgroundColor: step.color }"
          />
        </div>
      </div>

    </div>
  </section>
</template>

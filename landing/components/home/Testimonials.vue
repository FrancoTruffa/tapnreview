<script setup lang="ts">
const testimonials = [
  {
    name: 'La Parrilla de Martín',
    role: 'Restaurante — Palermo, CABA',
    quote: 'En el primer mes pasamos de 47 a 112 reseñas en Google. Los clientes lo usan solos, no hay que pedirles nada. Fue la mejor inversión del año.',
    stat: '+65 reseñas en 30 días',
    initial: 'M',
    color: '#4285F4',
  },
  {
    name: 'Estudio Belleza Valentina',
    role: 'Salón de belleza — Rosario, Santa Fe',
    quote: 'Antes les mandaba mensajes a las clientas rogando que dejaran una reseña. Ahora con el chip en la recepción se llena solo. Increíble.',
    stat: '+38 reseñas en 3 semanas',
    initial: 'V',
    color: '#EA4335',
  },
  {
    name: 'Hotel Boutique Del Río',
    role: 'Hospedaje — Mendoza',
    quote: 'Pusimos un expositor en cada habitación y uno en recepción. El promedio de estrellas subió de 4.1 a 4.7 en dos meses.',
    stat: 'Rating: 4.1 → 4.7 ⭐',
    initial: 'H',
    color: '#34A853',
  },
]

const { containerEl, visible } = useRevealList(3, 120)
</script>

<template>
  <section id="testimonios" class="bg-canvas-2 py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">

      <SectionHeader
        eyebrow="Testimonios"
        title="Lo que dicen nuestros clientes."
        :center="true"
      />

      <div ref="containerEl" class="grid gap-5 md:grid-cols-3">
        <div
          v-for="(t, i) in testimonials"
          :key="t.name"
          :class="[
            'flex flex-col rounded-2xl border border-edge bg-white p-7 transition-all duration-500 hover:shadow-md',
            visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ]"
        >
          <!-- Stars -->
          <div class="flex gap-0.5 mb-5">
            <span v-for="n in 5" :key="n" class="text-[#FBBC05] text-sm">★</span>
          </div>

          <!-- Quote -->
          <p class="flex-1 text-sm leading-relaxed text-ink-2 mb-6">"{{ t.quote }}"</p>

          <!-- Stat pill -->
          <div
            class="mb-5 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold text-white"
            :style="{ backgroundColor: t.color }"
          >
            {{ t.stat }}
          </div>

          <!-- Author -->
          <div class="flex items-center gap-3 border-t border-edge pt-5">
            <div
              class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              :style="{ backgroundColor: t.color }"
            >
              {{ t.initial }}
            </div>
            <div>
              <p class="text-sm font-semibold text-ink">{{ t.name }}</p>
              <p class="text-xs text-ink-3">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

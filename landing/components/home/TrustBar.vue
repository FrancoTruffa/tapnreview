<script setup lang="ts">
const stats = [
  { value: '+500', label: 'reseñas este mes' },
  { value: '200+', label: 'negocios activos' },
  { value: '4.9/5', label: 'calificación promedio' },
  { value: '24hs', label: 'envío express' },
]

const { el, isVisible } = useReveal()
</script>

<template>
  <div ref="el" class="border-y border-edge bg-canvas-2">
    <div class="mx-auto max-w-6xl px-5 sm:px-8 py-8">
      <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          :class="[
            'text-center transition-all duration-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ]"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <p class="font-serif text-3xl font-bold text-ink">{{ stat.value }}</p>
          <p class="mt-0.5 text-sm text-ink-3">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

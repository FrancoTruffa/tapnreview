<script setup lang="ts">
const { el, isVisible } = useReveal()
</script>

<template>
  <section class="bg-ink py-24 sm:py-32">
    <div class="mx-auto max-w-4xl px-5 sm:px-8 text-center">
      <div
        ref="el"
        :class="[
          'transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <!-- Eyebrow -->
        <p class="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
          Empezá hoy
        </p>

        <!-- Headline -->
        <h2 class="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px]">
          Tu negocio merece<br>
          más reseñas.
        </h2>

        <!-- Subheading -->
        <p class="mx-auto mt-6 max-w-lg text-lg text-white/60">
          Configuración en 5 minutos. Pago único. Sin suscripciones.
          Los primeros resultados los ves en la primera semana.
        </p>

        <!-- CTAs -->
        <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#productos"
            class="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-ink transition-all hover:bg-canvas-2 active:scale-[0.97]"
          >
            Conseguir el mío →
          </a>
          <a
            href="#como-funciona"
            class="text-sm font-medium text-white/50 transition-colors hover:text-white/80"
          >
            Ver cómo funciona
          </a>
        </div>

        <!-- Trust -->
        <div class="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/30">
          <span>🚚 Envío a todo el país</span>
          <span>🛡️ Garantía 30 días</span>
          <span>✅ Sin suscripciones</span>
          <span>⭐ 4.9/5 calificación</span>
        </div>
      </div>
    </div>
  </section>
</template>

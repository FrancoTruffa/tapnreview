<script setup lang="ts">
const faqs = [
  {
    q: '¿Necesito una app para usarlo?',
    a: 'No. El cliente solo acerca el celular y se abre el navegador automáticamente. No hay nada que descargar ni instalar.',
  },
  {
    q: '¿Funciona con cualquier celular?',
    a: 'Sí. El NFC funciona en todos los smartphones modernos (iPhone 7+ y Android desde 2015). El QR es el respaldo para modelos más antiguos o casos donde el NFC no está habilitado.',
  },
  {
    q: '¿Qué pasa si quiero cambiar el local al que apunta?',
    a: 'Desde tu panel de control podés redirigir el expositor a otro local en segundos, sin tocar el hardware.',
  },
  {
    q: '¿Cuánto tarda en llegar?',
    a: 'Envío express a todo el país. CABA y GBA: 24-48 hs. Interior: 2-4 días hábiles.',
  },
  {
    q: '¿Necesito internet en el local?',
    a: 'No. El expositor NFC no necesita internet ni electricidad. Solo el celular del cliente necesita datos móviles o WiFi para abrir la página de reseña.',
  },
  {
    q: '¿Cómo funciona el filtro de reseñas negativas?',
    a: 'Cuando un cliente elige 1, 2 o 3 estrellas, es redirigido a un formulario privado. Su comentario llega a vos por WhatsApp, pero nunca se publica en Google. Solo las calificaciones de 4 y 5 estrellas van a Google Maps.',
  },
]

const open = ref<number | null>(null)
const toggle = (i: number) => { open.value = open.value === i ? null : i }

const { el, isVisible } = useReveal()
</script>

<template>
  <section id="faq" class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-3xl px-5 sm:px-8">

      <SectionHeader
        eyebrow="Preguntas frecuentes"
        title="Todo lo que querés saber."
        :center="true"
      />

      <div ref="el" class="space-y-2">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          :class="[
            'overflow-hidden rounded-2xl border transition-all duration-300',
            open === i ? 'border-ink/20 shadow-sm' : 'border-edge',
            isVisible ? 'opacity-100' : 'opacity-0',
          ]"
          :style="{ transitionDelay: `${i * 60}ms` }"
        >
          <button
            class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-canvas-2"
            @click="toggle(i)"
          >
            <span class="font-medium text-ink text-sm sm:text-base">{{ faq.q }}</span>
            <span
              class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-canvas-2 text-ink-2 transition-transform duration-300 font-bold text-sm"
              :class="open === i ? 'rotate-45 bg-ink text-white' : ''"
            >+</span>
          </button>

          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-if="open === i" class="overflow-hidden">
              <p class="px-6 pb-6 text-sm leading-relaxed text-ink-2">{{ faq.a }}</p>
            </div>
          </Transition>
        </div>
      </div>

    </div>
  </section>
</template>

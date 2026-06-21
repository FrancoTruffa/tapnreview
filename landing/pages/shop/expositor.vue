<script setup lang="ts">
useHead({
  title: 'Expositor NFC + QR — TapNReview',
  meta: [
    { name: 'description', content: 'Soporte premium para mostrador con NFC y QR integrados. Conseguí más reseñas en Google sin esfuerzo. Pago único $40.000.' }
  ]
})

const open = ref<string | null>(null)
const toggle = (key: string) => { open.value = open.value === key ? null : key }

const tabs = [
  {
    key: 'descripcion',
    label: 'Descripción',
    content: 'El Expositor NFC + QR de TapNReview es un soporte premium de sobremesa para mostradores, recepciones y mesas. Combina tecnología NFC (lectura instantánea en smartphones modernos) con un código QR integrado como respaldo universal. No requiere electricidad, internet en el local ni mantenimiento. Pago único, sin suscripciones.',
  },
  {
    key: 'como-funciona',
    label: 'Cómo funciona',
    content: 'El cliente acerca su celular al expositor. Con NFC, el navegador se abre solo en menos de 1 segundo. Si prefiere, escanea el QR con la cámara. Aparece una pantalla con estrellas: al elegir 4 o 5 estrellas va directo a Google Maps listo para escribir. Con 1 a 3 estrellas, el comentario llega a vos en privado por WhatsApp y nunca se publica.',
  },
  {
    key: 'envios',
    label: 'Envíos',
    content: 'Enviamos a todo el país. CABA y GBA: 24–48 hs hábiles. Interior: 2–4 días hábiles por Andreani. El tracking de tu pedido llega por WhatsApp al momento del despacho. Envío gratis en pedidos de 2 unidades o más.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-white font-sans antialiased text-ink">
    <AppNav />

    <main class="pb-24 pt-24">
      <div class="mx-auto max-w-6xl px-5 sm:px-8">

        <!-- Breadcrumb -->
        <nav class="mb-10 flex items-center gap-2 text-sm text-ink-3">
          <a href="/" class="transition-colors hover:text-ink">Inicio</a>
          <span>/</span>
          <a href="/#productos" class="transition-colors hover:text-ink">Productos</a>
          <span>/</span>
          <span class="text-ink">Expositor NFC + QR</span>
        </nav>

        <!-- Two-column layout -->
        <div class="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

          <!-- Left: Image -->
          <div>
            <div class="flex min-h-[480px] items-center justify-center overflow-hidden rounded-3xl bg-gray-50 p-10">
              <svg viewBox="0 0 180 230" width="220" fill="none" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-lg">
                <ellipse cx="90" cy="226" rx="55" ry="5" fill="rgba(66,133,244,0.12)"/>
                <path d="M55 196 L40 220 L140 220 L125 196Z" fill="#CBD5E1"/>
                <rect x="55" y="190" width="70" height="8" rx="3" fill="#B0BEC5"/>
                <rect x="26" y="15" width="132" height="184" rx="11" fill="rgba(0,0,0,0.04)"/>
                <rect x="24" y="12" width="132" height="184" rx="11" fill="white"/>
                <clipPath id="shop-exp-clip">
                  <rect x="24" y="12" width="132" height="184" rx="11"/>
                </clipPath>
                <g clip-path="url(#shop-exp-clip)">
                  <rect x="24"  y="12" width="33" height="6" fill="#4285F4"/>
                  <rect x="57"  y="12" width="33" height="6" fill="#EA4335"/>
                  <rect x="90"  y="12" width="33" height="6" fill="#FBBC05"/>
                  <rect x="123" y="12" width="33" height="6" fill="#34A853"/>
                </g>
                <rect x="24" y="12" width="132" height="184" rx="11" stroke="#E8EAED" stroke-width="1.5"/>
                <circle cx="90" cy="57" r="22" fill="#EEF4FF" stroke="#DBEAFE" stroke-width="1"/>
                <text x="90" y="66" text-anchor="middle" font-family="Arial,sans-serif" font-size="26" font-weight="900" fill="#4285F4">G</text>
                <text x="90" y="92" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" fill="#a3a3a3" letter-spacing="0.5">EXPOSITOR NFC + QR</text>
                <text x="90" y="108" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" font-weight="700" fill="#0a0a0a">Reseñas Google</text>
                <path d="M73 132 C79 122 84 118 90 118 C96 118 101 122 107 132" stroke="#4285F4" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M66 139 C74 124 82 118 90 118 C98 118 106 124 114 139" stroke="#4285F4" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
                <circle cx="90" cy="137" r="5.5" fill="#EEF4FF" stroke="#4285F4" stroke-width="1.5"/>
                <circle cx="90" cy="137" r="2" fill="#4285F4"/>
                <text x="90" y="158" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="#FBBF24">★★★★★</text>
                <g transform="translate(68, 163)">
                  <rect width="10" height="10" rx="1.5" fill="#374151"/><rect x="1.5" y="1.5" width="7" height="7" rx=".8" fill="white"/><rect x="3" y="3" width="4" height="4" fill="#374151"/>
                  <rect x="34" width="10" height="10" rx="1.5" fill="#374151"/><rect x="35.5" y="1.5" width="7" height="7" rx=".8" fill="white"/><rect x="37" y="3" width="4" height="4" fill="#374151"/>
                  <rect y="14" width="10" height="10" rx="1.5" fill="#374151"/><rect x="1.5" y="15.5" width="7" height="7" rx=".8" fill="white"/><rect x="3" y="17" width="4" height="4" fill="#374151"/>
                  <rect x="14" width="3" height="3" fill="#374151"/><rect x="19" width="3" height="3" fill="#374151"/><rect x="25" width="3" height="3" fill="#374151"/>
                  <rect x="14" y="5" width="3" height="3" fill="#374151"/><rect x="22" y="5" width="6" height="3" fill="#374151"/>
                  <rect x="14" y="10" width="6" height="3" fill="#374151"/><rect x="22" y="10" width="3" height="3" fill="#374151"/><rect x="28" y="10" width="3" height="3" fill="#374151"/>
                  <rect x="14" y="14" width="3" height="6" fill="#374151"/><rect x="19" y="14" width="3" height="3" fill="#374151"/><rect x="25" y="14" width="9" height="3" fill="#374151"/>
                  <rect x="19" y="19" width="6" height="5" fill="#374151"/><rect x="28" y="19" width="3" height="5" fill="#374151"/><rect x="33" y="19" width="9" height="3" fill="#374151"/>
                </g>
                <text x="90" y="208" text-anchor="middle" font-family="Arial,sans-serif" font-size="7" fill="#D1D5DB" letter-spacing="2">TAPNREVIEW</text>
              </svg>
            </div>
          </div>

          <!-- Right: Product info -->
          <div class="lg:pt-2">
            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Reseñas Google</p>

            <h1 class="mb-4 font-sans text-3xl font-bold text-gray-900 sm:text-4xl">
              Expositor NFC + QR
            </h1>

            <div class="mb-4 flex items-center gap-2">
              <span class="text-[#FBBC05]">★★★★★</span>
              <span class="text-sm text-ink-3">4.9 · 47 reseñas</span>
            </div>

            <div class="mb-6">
              <span class="text-3xl font-bold text-gray-900">$40.000</span>
              <span class="ml-2 text-sm text-ink-3">· Pago único</span>
            </div>

            <p class="mb-8 text-base leading-relaxed text-ink-2">
              Soporte premium para mostrador, recepción o mesa. Tus clientes lo usan solos — NFC o QR — y dejan su reseña en Google en segundos.
            </p>

            <!-- Trust pills -->
            <div class="mb-8 flex flex-wrap gap-2">
              <span class="inline-flex items-center gap-1.5 rounded-full border border-edge bg-gray-50 px-3 py-1.5 text-xs font-medium text-ink-2">🚚 Envío a todo el país</span>
              <span class="inline-flex items-center gap-1.5 rounded-full border border-edge bg-gray-50 px-3 py-1.5 text-xs font-medium text-ink-2">🛡️ Garantía 30 días</span>
              <span class="inline-flex items-center gap-1.5 rounded-full border border-edge bg-gray-50 px-3 py-1.5 text-xs font-medium text-ink-2">✅ Sin suscripciones</span>
            </div>

            <!-- CTA -->
            <a
              href="https://wa.me/5491100000000?text=Hola!%20Quiero%20el%20Expositor%20NFC%2BQR%20de%20TapNReview"
              target="_blank"
              rel="noopener"
              class="mb-4 flex w-full items-center justify-center rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800 active:scale-[0.97]"
            >
              Pedir por WhatsApp →
            </a>

            <!-- Accordion tabs -->
            <div class="mt-6 space-y-2">
              <div
                v-for="tab in tabs"
                :key="tab.key"
                class="overflow-hidden rounded-2xl border border-edge"
              >
                <button
                  class="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-gray-50"
                  @click="toggle(tab.key)"
                >
                  <span class="text-sm font-medium text-ink">{{ tab.label }}</span>
                  <span
                    class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-ink-2 transition-transform duration-300"
                    :class="open === tab.key ? 'rotate-45 bg-ink text-white' : ''"
                  >+</span>
                </button>
                <Transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <div v-if="open === tab.key">
                    <p class="px-6 pb-5 text-sm leading-relaxed text-ink-2">{{ tab.content }}</p>
                  </div>
                </Transition>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Placa Adhesiva NFC + QR — TapNReview',
  meta: [
    { name: 'description', content: 'Placa adhesiva NFC + QR para pegar en paredes, vidrios o cajas registradoras. Más reseñas en Google. Pago único $40.000.' }
  ]
})

const open = ref<string | null>(null)
const toggle = (key: string) => { open.value = open.value === key ? null : key }

const tabs = [
  {
    key: 'descripcion',
    label: 'Descripción',
    content: 'La Placa Adhesiva NFC + QR de TapNReview está diseñada para montarse de forma permanente en paredes, vidrios, marcos de puerta o cajas registradoras. Combina tecnología NFC para smartphones modernos con un código QR de alta densidad. Material rígido con adhesivo industrial de doble cara. No requiere electricidad, internet en el local ni mantenimiento.',
  },
  {
    key: 'como-funciona',
    label: 'Cómo funciona',
    content: 'El cliente acerca su celular a la placa. Con NFC, el navegador se abre solo en menos de 1 segundo. Si prefiere, escanea el QR con la cámara. Aparece una pantalla con estrellas: al elegir 4 o 5 estrellas va directo a Google Maps listo para escribir. Con 1 a 3 estrellas, el comentario llega a vos en privado por WhatsApp y nunca se publica.',
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
          <span class="text-ink">Placa Adhesiva NFC + QR</span>
        </nav>

        <!-- Two-column layout -->
        <div class="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

          <!-- Left: Image -->
          <div>
            <div class="flex min-h-[480px] items-center justify-center overflow-hidden rounded-3xl bg-gray-50 p-10">
              <svg viewBox="0 0 180 180" width="240" fill="none" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-lg">
                <rect x="14" y="15" width="152" height="152" rx="18" fill="rgba(0,0,0,0.05)"/>
                <rect x="12" y="12" width="156" height="156" rx="18" fill="white"/>
                <clipPath id="shop-placa-clip">
                  <rect x="12" y="12" width="156" height="156" rx="18"/>
                </clipPath>
                <g clip-path="url(#shop-placa-clip)">
                  <rect x="12"  y="12"  width="39" height="7" fill="#4285F4"/>
                  <rect x="51"  y="12"  width="39" height="7" fill="#EA4335"/>
                  <rect x="90"  y="12"  width="39" height="7" fill="#FBBC05"/>
                  <rect x="129" y="12"  width="39" height="7" fill="#34A853"/>
                  <rect x="12"  y="161" width="39" height="7" fill="#34A853"/>
                  <rect x="51"  y="161" width="39" height="7" fill="#FBBC05"/>
                  <rect x="90"  y="161" width="39" height="7" fill="#EA4335"/>
                  <rect x="129" y="161" width="39" height="7" fill="#4285F4"/>
                  <rect x="12"  y="12"  width="7" height="78" fill="#4285F4"/>
                  <rect x="12"  y="90"  width="7" height="78" fill="#34A853"/>
                  <rect x="161" y="12"  width="7" height="78" fill="#EA4335"/>
                  <rect x="161" y="90"  width="7" height="78" fill="#FBBC05"/>
                </g>
                <rect x="12" y="12" width="156" height="156" rx="18" stroke="#E8EAED" stroke-width="1.5"/>
                <circle cx="90" cy="58" r="20" fill="#EEF4FF" stroke="#DBEAFE" stroke-width="1"/>
                <text x="90" y="67" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" font-weight="900" fill="#4285F4">G</text>
                <text x="90" y="91" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" fill="#a3a3a3" letter-spacing="0.5">PLACA NFC + QR</text>
                <text x="90" y="106" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" font-weight="700" fill="#0a0a0a">Reseñas Google</text>
                <path d="M74 126 C80 116 85 112 90 112 C95 112 100 116 106 126" stroke="#4285F4" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M68 132 C75 117 83 111 90 111 C97 111 105 117 112 132" stroke="#4285F4" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
                <circle cx="90" cy="130" r="5" fill="#EEF4FF" stroke="#4285F4" stroke-width="1.5"/>
                <circle cx="90" cy="130" r="2" fill="#4285F4"/>
                <text x="90" y="150" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="#FBBF24">★★★★★</text>
                <g transform="translate(72, 154)">
                  <rect width="9" height="9" rx="1.5" fill="#374151"/><rect x="1.5" y="1.5" width="6" height="6" rx=".8" fill="white"/><rect x="3" y="3" width="3" height="3" fill="#374151"/>
                  <rect x="27" width="9" height="9" rx="1.5" fill="#374151"/><rect x="28.5" y="1.5" width="6" height="6" rx=".8" fill="white"/><rect x="30" y="3" width="3" height="3" fill="#374151"/>
                  <rect y="12" width="9" height="9" rx="1.5" fill="#374151"/><rect x="1.5" y="13.5" width="6" height="6" rx=".8" fill="white"/><rect x="3" y="15" width="3" height="3" fill="#374151"/>
                  <rect x="12" width="2.5" height="2.5" fill="#374151"/><rect x="16" width="2.5" height="2.5" fill="#374151"/><rect x="21" width="2.5" height="2.5" fill="#374151"/>
                  <rect x="12" y="4" width="5" height="2.5" fill="#374151"/><rect x="19" y="4" width="2.5" height="2.5" fill="#374151"/>
                  <rect x="12" y="8" width="2.5" height="2.5" fill="#374151"/><rect x="16" y="8" width="5" height="2.5" fill="#374151"/>
                  <rect x="12" y="12" width="2.5" height="9" fill="#374151"/><rect x="16" y="12" width="5" height="2.5" fill="#374151"/>
                  <rect x="22" y="12" width="8" height="2.5" fill="#374151"/><rect x="16" y="17" width="5" height="4" fill="#374151"/>
                  <rect x="24" y="17" width="2.5" height="4" fill="#374151"/><rect x="28" y="17" width="8" height="2.5" fill="#374151"/>
                </g>
              </svg>
            </div>
          </div>

          <!-- Right: Product info -->
          <div class="lg:pt-2">
            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Reseñas Google</p>

            <h1 class="mb-4 font-sans text-3xl font-bold text-gray-900 sm:text-4xl">
              Placa Adhesiva NFC + QR
            </h1>

            <div class="mb-4 flex items-center gap-2">
              <span class="text-[#FBBC05]">★★★★★</span>
              <span class="text-sm text-ink-3">4.9 · 23 reseñas</span>
            </div>

            <div class="mb-6">
              <span class="text-3xl font-bold text-gray-900">$40.000</span>
              <span class="ml-2 text-sm text-ink-3">· Pago único</span>
            </div>

            <p class="mb-8 text-base leading-relaxed text-ink-2">
              Diseñada para pegar fijamente en paredes, vidrios o cajas registradoras. Tus clientes la usan solos — NFC o QR — y dejan su reseña en Google en segundos.
            </p>

            <!-- Trust pills -->
            <div class="mb-8 flex flex-wrap gap-2">
              <span class="inline-flex items-center gap-1.5 rounded-full border border-edge bg-gray-50 px-3 py-1.5 text-xs font-medium text-ink-2">🚚 Envío a todo el país</span>
              <span class="inline-flex items-center gap-1.5 rounded-full border border-edge bg-gray-50 px-3 py-1.5 text-xs font-medium text-ink-2">🛡️ Garantía 30 días</span>
              <span class="inline-flex items-center gap-1.5 rounded-full border border-edge bg-gray-50 px-3 py-1.5 text-xs font-medium text-ink-2">✅ Sin suscripciones</span>
            </div>

            <!-- CTA -->
            <a
              href="https://wa.me/5491100000000?text=Hola!%20Quiero%20la%20Placa%20Adhesiva%20NFC%2BQR%20de%20TapNReview"
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

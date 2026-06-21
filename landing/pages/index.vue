<script setup lang="ts">
useHead({ title: 'TapNReview — Más reseñas en Google. Sin esfuerzo.' })

const menuOpen = ref(false)
const scrolled = ref(false)
const openFaq = ref<number | null>(null)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})

const steps = [
  {
    n: '01',
    color: '#4285F4',
    lightColor: '#e8f0fe',
    icon: '📱',
    title: 'El cliente acerca el celular',
    desc: 'Con NFC o escaneando el QR integrado en el expositor. Sin descargar ninguna app, sin registrarse.',
  },
  {
    n: '02',
    color: '#EA4335',
    lightColor: '#fce8e6',
    icon: '⭐',
    title: 'Elige su calificación',
    desc: 'Ve una pantalla simple con 5 estrellas. Si elige 4 o 5, va directo a tu perfil de Google.',
  },
  {
    n: '03',
    color: '#34A853',
    lightColor: '#e6f4ea',
    icon: '🚀',
    title: 'Reseña publicada en segundos',
    desc: 'Aterriza en Google Maps listo para escribir. Fricción mínima, conversión máxima.',
  },
]

const featureBorders = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#4285F4', '#EA4335']

const features = [
  {
    icon: '💳',
    title: 'Pago único, sin suscripciones',
    desc: 'Pagás una vez y es tuyo para siempre. Sin cuotas mensuales ni cargos ocultos.',
  },
  {
    icon: '🛡️',
    title: 'Filtra reseñas negativas',
    desc: 'Las calificaciones de 1 a 3 estrellas se redirigen a un formulario privado, nunca llegan a Google.',
  },
  {
    icon: '📊',
    title: 'Estadísticas por punto',
    desc: 'Sabés cuántos scans tuvo cada expositor, cuándo y desde qué canal (NFC o QR).',
  },
  {
    icon: '📡',
    title: 'NFC y QR combinados',
    desc: 'Cubre todos los casos: smartphones modernos con NFC y cualquier celular con cámara.',
  },
  {
    icon: '🏢',
    title: 'Compatible con cualquier negocio',
    desc: 'Restaurante, hotel, peluquería, clínica — si tenés clientes, esto funciona para vos.',
  },
  {
    icon: '⚡',
    title: 'Setup en 5 minutos',
    desc: 'Configurás la URL de tu perfil Google y empezás a recibir reseñas ese mismo día.',
  },
]

const productIncludes = [
  'Expositor físico de material premium',
  'Chip NFC programado y listo para usar',
  'Código QR impreso y laminado',
  'Panel de control online',
  'Configuración inicial incluida',
  'Soporte por WhatsApp',
]

const testimonials = [
  {
    name: 'La Parrilla de Martín',
    role: 'Restaurante — Palermo, CABA',
    quote: 'En el primer mes pasamos de 47 a 112 reseñas en Google. Los clientes lo usan solos, no hay que pedirles nada. Fue la mejor inversión del año.',
    stat: '+65 reseñas en 30 días',
  },
  {
    name: 'Estudio Belleza Valentina',
    role: 'Salón de belleza — Rosario, Santa Fe',
    quote: 'Antes les mandaba mensajes a las clientas rogando que dejaran una reseña. Ahora con el chip en la recepción se llena solo. Increíble.',
    stat: '+38 reseñas en 3 semanas',
  },
  {
    name: 'Hotel Boutique Del Río',
    role: 'Hospedaje — Mendoza',
    quote: 'Pusimos un expositor en cada habitación y uno en recepción. El promedio de estrellas subió de 4.1 a 4.7 en dos meses.',
    stat: 'Rating: 4.1 → 4.7 ⭐',
  },
]

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
]

const toggleFaq = (i: number) => {
  openFaq.value = openFaq.value === i ? null : i
}
</script>

<template>
  <div class="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased">

    <!-- ── Navbar ── -->
    <header
      :class="[
        'fixed top-0 inset-x-0 z-50 bg-white transition-all duration-300',
        scrolled ? 'shadow-md' : 'border-b border-[#e8eaed]',
      ]"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" class="flex items-center gap-2 font-semibold text-lg">
          <span class="text-[#4285F4]">★</span>
          <span class="font-serif text-[#1a1a1a]">TapNReview</span>
        </a>

        <nav class="hidden md:flex items-center gap-8 text-sm text-[#5f6368]">
          <a href="#como-funciona" class="hover:text-[#1a1a1a] transition-colors">Cómo funciona</a>
          <a href="#productos" class="hover:text-[#1a1a1a] transition-colors">Productos</a>
          <a href="#contacto" class="hover:text-[#1a1a1a] transition-colors">Contacto</a>
        </nav>

        <a
          href="#productos"
          class="hidden md:inline-block bg-[#4285F4] text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#3367d6] transition-colors"
        >
          Ver productos
        </a>

        <button
          class="md:hidden p-2 text-[#5f6368] hover:text-[#1a1a1a] transition-colors"
          aria-label="Menú"
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div
        v-if="menuOpen"
        class="md:hidden bg-white border-t border-[#e8eaed] px-4 py-4 flex flex-col gap-4 text-sm"
      >
        <a href="#como-funciona" class="text-[#5f6368] hover:text-[#1a1a1a] transition-colors" @click="menuOpen = false">Cómo funciona</a>
        <a href="#productos" class="text-[#5f6368] hover:text-[#1a1a1a] transition-colors" @click="menuOpen = false">Productos</a>
        <a href="#contacto" class="text-[#5f6368] hover:text-[#1a1a1a] transition-colors" @click="menuOpen = false">Contacto</a>
        <a
          href="#productos"
          class="bg-[#4285F4] text-white font-bold px-4 py-2.5 rounded-lg text-center"
          @click="menuOpen = false"
        >
          Ver productos
        </a>
      </div>
    </header>

    <!-- ── Hero ── -->
    <section class="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      <!-- Subtle blue tint top-right -->
      <div class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#4285F4]/[0.04] blur-[100px] pointer-events-none" aria-hidden="true" />

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-24 grid md:grid-cols-2 gap-12 items-center">
        <!-- Copy -->
        <div>
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 bg-[#e8f0fe] text-[#4285F4] rounded-full px-4 py-1.5 text-sm font-medium mb-7">
            <span>⭐</span>
            <span>+500 reseñas conseguidas este mes</span>
          </div>

          <h1 class="font-serif text-5xl sm:text-6xl font-bold leading-[1.1] text-[#1a1a1a] mb-4">
            Más reseñas<br>en Google.<br>
            <em class="text-[#4285F4] not-italic">Sin esfuerzo.</em>
          </h1>

          <!-- Google connection line -->
          <div class="flex items-center gap-2 mb-6">
            <span class="text-[#5f6368] text-sm">Conectado a</span>
            <svg viewBox="0 0 48 48" class="inline w-6 h-6 flex-shrink-0">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.33 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.67 14.62 48 24 48z"/>
            </svg>
            <span class="text-[#5f6368] text-sm font-medium">Reviews</span>
          </div>

          <p class="text-[#5f6368] text-lg leading-relaxed mb-8 max-w-md">
            Tu cliente acerca el celular al expositor y en 5 segundos ya está dejando su reseña en Google.
            Sin apps. Sin fricción. Sin que tengas que pedirles nada.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 mb-5">
            <a
              href="#productos"
              class="bg-[#4285F4] text-white font-bold px-7 py-3.5 rounded-xl text-center hover:bg-[#3367d6] transition-colors shadow-sm"
            >
              Conseguir el mío
            </a>
            <a
              href="#como-funciona"
              class="border-2 border-[#4285F4] text-[#4285F4] font-bold px-7 py-3.5 rounded-xl text-center hover:bg-[#e8f0fe] transition-colors"
            >
              Ver cómo funciona
            </a>
          </div>

          <!-- Social proof -->
          <p class="text-sm text-[#5f6368]">
            ⭐ 4.9/5 · Más de 200 negocios en Argentina ya lo usan
          </p>
        </div>

        <!-- Product mockup -->
        <div class="flex justify-center md:justify-end">
          <div class="relative w-64 h-[340px] sm:w-72 sm:h-[380px]">
            <!-- White card with blue-tinted shadow -->
            <div
              class="absolute inset-0 rounded-3xl bg-gradient-to-b from-white to-[#f0f4ff] overflow-hidden"
              style="box-shadow: 0 8px 40px rgba(66,133,244,0.18), 0 2px 12px rgba(0,0,0,0.08);"
            >
              <!-- 4-color Google top bar -->
              <div
                class="absolute top-0 inset-x-0 h-[4px]"
                style="background: linear-gradient(to right, #4285F4 0%, #EA4335 33%, #FBBC05 66%, #34A853 100%)"
              />

              <div class="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <!-- NFC rings in blue -->
                <div class="relative w-24 h-24 flex items-center justify-center">
                  <div class="absolute inset-0 rounded-full border-2 border-[#4285F4]/20 animate-ping" />
                  <div class="absolute inset-3 rounded-full border border-[#4285F4]/15" />
                  <div class="w-14 h-14 rounded-full bg-[#e8f0fe] border border-[#4285F4]/30 flex items-center justify-center">
                    <svg class="w-7 h-7 text-[#4285F4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" d="M8.5 12a3.5 3.5 0 0 1 7 0" />
                      <path stroke-linecap="round" d="M5 12a7 7 0 0 1 14 0" />
                      <path stroke-linecap="round" d="M2 12a10 10 0 0 1 20 0" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                <p class="text-[#5f6368] text-sm font-medium tracking-wide">Acercá tu celular</p>

                <div class="flex gap-1">
                  <span v-for="i in 5" :key="i" class="text-[#FBBC05] text-xl">★</span>
                </div>
              </div>

              <!-- QR hint -->
              <div class="absolute bottom-5 inset-x-0 flex justify-center">
                <div class="w-11 h-11 bg-[#f8f9fa] rounded-md border border-[#e8eaed] flex items-center justify-center">
                  <svg class="w-8 h-8" viewBox="0 0 21 21" fill="#5f6368">
                    <rect x="1" y="1" width="8" height="8" rx="1" />
                    <rect x="2" y="2" width="6" height="6" rx="0.5" fill="white" />
                    <rect x="3" y="3" width="4" height="4" />
                    <rect x="12" y="1" width="8" height="8" rx="1" />
                    <rect x="13" y="2" width="6" height="6" rx="0.5" fill="white" />
                    <rect x="14" y="3" width="4" height="4" />
                    <rect x="1" y="12" width="8" height="8" rx="1" />
                    <rect x="2" y="13" width="6" height="6" rx="0.5" fill="white" />
                    <rect x="3" y="14" width="4" height="4" />
                    <rect x="12" y="12" width="2" height="2" />
                    <rect x="16" y="12" width="2" height="2" />
                    <rect x="12" y="16" width="2" height="2" />
                    <rect x="16" y="16" width="2" height="2" />
                    <rect x="14" y="14" width="2" height="2" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Shadow glow -->
            <div class="absolute -bottom-4 inset-x-6 h-10 bg-[#4285F4]/10 blur-xl rounded-full" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>

    <!-- ── Cómo funciona ── -->
    <section id="como-funciona" class="py-28 px-4 sm:px-6 bg-[#f8f9fa]">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-[#4285F4] text-sm font-semibold uppercase tracking-widest mb-3">Proceso</p>
          <h2 class="font-serif text-4xl font-bold text-[#1a1a1a]">Cómo funciona</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-5">
          <div
            v-for="step in steps"
            :key="step.n"
            class="relative bg-white border border-[#e8eaed] rounded-2xl p-8 overflow-hidden hover:shadow-md transition-shadow group"
          >
            <span
              class="absolute -top-3 -right-2 text-[7rem] font-bold leading-none select-none transition-colors"
              :style="{ color: step.lightColor }"
              aria-hidden="true"
            >{{ step.n }}</span>

            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
              :style="{ backgroundColor: step.lightColor }"
            >
              {{ step.icon }}
            </div>

            <h3 class="text-[#1a1a1a] font-semibold text-lg mb-2">{{ step.title }}</h3>
            <p class="text-[#5f6368] text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Por qué TapNReview ── -->
    <section class="py-28 px-4 sm:px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-[#4285F4] text-sm font-semibold uppercase tracking-widest mb-3">Diferenciadores</p>
          <h2 class="font-serif text-4xl font-bold text-[#1a1a1a] mb-4">Por qué TapNReview</h2>
          <p class="text-[#5f6368] max-w-lg mx-auto">
            No es solo un sticker QR. Es un sistema completo diseñado para maximizar tus reseñas y proteger tu reputación online.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(feat, i) in features"
            :key="feat.title"
            class="bg-white border border-[#e8eaed] border-l-[3px] rounded-2xl p-6 hover:shadow-sm transition-shadow"
            :style="{ borderLeftColor: featureBorders[i] }"
          >
            <div class="text-2xl mb-3">{{ feat.icon }}</div>
            <h3 class="text-[#1a1a1a] font-semibold mb-1.5">{{ feat.title }}</h3>
            <p class="text-[#5f6368] text-sm leading-relaxed">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Productos ── -->
    <section id="productos" class="py-28 px-4 sm:px-6 bg-[#f8f9fa]">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-[#4285F4] text-sm font-semibold uppercase tracking-widest mb-3">Productos</p>
          <h2 class="font-serif text-4xl font-bold text-[#1a1a1a]">Elegí tu formato</h2>
          <p class="text-[#5f6368] mt-4 max-w-lg mx-auto">Dos formatos, el mismo resultado: más reseñas Google para tu negocio.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

          <!-- Producto 1: Expositor de Mesa -->
          <div class="bg-white rounded-2xl border border-[#e8eaed] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <div class="bg-gradient-to-b from-[#EEF4FF] to-[#E0ECFF] p-10 flex justify-center items-center min-h-[280px]">
              <svg viewBox="0 0 180 230" width="150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="90" cy="226" rx="55" ry="5" fill="rgba(66,133,244,0.12)"/>
                <path d="M55 196 L40 220 L140 220 L125 196Z" fill="#CBD5E1"/>
                <rect x="55" y="190" width="70" height="8" rx="3" fill="#B0BEC5"/>
                <rect x="26" y="15" width="132" height="184" rx="11" fill="rgba(0,0,0,0.04)"/>
                <rect x="24" y="12" width="132" height="184" rx="11" fill="white"/>
                <clipPath id="clipExpositor">
                  <rect x="24" y="12" width="132" height="184" rx="11"/>
                </clipPath>
                <g clip-path="url(#clipExpositor)">
                  <rect x="24" y="12" width="33" height="6" fill="#4285F4"/>
                  <rect x="57" y="12" width="33" height="6" fill="#EA4335"/>
                  <rect x="90" y="12" width="33" height="6" fill="#FBBC05"/>
                  <rect x="123" y="12" width="33" height="6" fill="#34A853"/>
                </g>
                <rect x="24" y="12" width="132" height="184" rx="11" stroke="#E8EAED" stroke-width="1.5"/>
                <circle cx="90" cy="57" r="22" fill="#EEF4FF" stroke="#DBEAFE" stroke-width="1"/>
                <text x="90" y="66" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" font-weight="900" fill="#4285F4">G</text>
                <text x="90" y="92" text-anchor="middle" font-family="Arial, sans-serif" font-size="8.5" fill="#9CA3AF" letter-spacing="0.5">EXPOSITOR NFC + QR</text>
                <text x="90" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#1a1a1a">Reseñas Google</text>
                <path d="M73 132 C79 122 84 118 90 118 C96 118 101 122 107 132" stroke="#4285F4" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M66 139 C74 124 82 118 90 118 C98 118 106 124 114 139" stroke="#4285F4" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
                <circle cx="90" cy="137" r="5.5" fill="#EEF4FF" stroke="#4285F4" stroke-width="1.5"/>
                <circle cx="90" cy="137" r="2" fill="#4285F4"/>
                <text x="90" y="158" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#FBBF24">★★★★★</text>
                <g transform="translate(68, 163)">
                  <rect width="10" height="10" rx="1.5" fill="#374151"/>
                  <rect x="1.5" y="1.5" width="7" height="7" rx="0.8" fill="white"/>
                  <rect x="3" y="3" width="4" height="4" fill="#374151"/>
                  <rect x="34" width="10" height="10" rx="1.5" fill="#374151"/>
                  <rect x="35.5" y="1.5" width="7" height="7" rx="0.8" fill="white"/>
                  <rect x="37" y="3" width="4" height="4" fill="#374151"/>
                  <rect y="14" width="10" height="10" rx="1.5" fill="#374151"/>
                  <rect x="1.5" y="15.5" width="7" height="7" rx="0.8" fill="white"/>
                  <rect x="3" y="17" width="4" height="4" fill="#374151"/>
                  <rect x="14" width="3" height="3" fill="#374151"/>
                  <rect x="19" width="3" height="3" fill="#374151"/>
                  <rect x="25" width="3" height="3" fill="#374151"/>
                  <rect x="14" y="5" width="3" height="3" fill="#374151"/>
                  <rect x="22" y="5" width="6" height="3" fill="#374151"/>
                  <rect x="14" y="10" width="6" height="3" fill="#374151"/>
                  <rect x="22" y="10" width="3" height="3" fill="#374151"/>
                  <rect x="28" y="10" width="3" height="3" fill="#374151"/>
                  <rect x="14" y="14" width="3" height="6" fill="#374151"/>
                  <rect x="19" y="14" width="3" height="3" fill="#374151"/>
                  <rect x="25" y="14" width="9" height="3" fill="#374151"/>
                  <rect x="19" y="19" width="6" height="5" fill="#374151"/>
                  <rect x="28" y="19" width="3" height="5" fill="#374151"/>
                  <rect x="33" y="19" width="9" height="3" fill="#374151"/>
                </g>
                <text x="90" y="208" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="#D1D5DB" letter-spacing="2">TAPNREVIEW</text>
              </svg>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <p class="text-[#9CA3AF] text-xs uppercase tracking-wider mb-1">Expositor NFC + QR</p>
              <h3 class="font-bold text-xl text-[#1a1a1a] mb-2">Reseñas Google</h3>
              <div class="flex items-center gap-1.5 mb-1">
                <span class="text-[#FBBC05] text-sm">★★★★★</span>
                <span class="text-[#5f6368] text-sm">(47)</span>
              </div>
              <p class="text-[#5f6368] text-xs mb-4">Para mostrador, recepción o mesa</p>
              <div class="flex items-baseline gap-2 mb-5">
                <span class="text-3xl font-bold text-[#1a1a1a]">$<span class="text-[#FBBC05]">40.000 ARS</span></span>
                <span class="text-[#5f6368] text-sm">pago único</span>
              </div>
              <a
                href="#contacto"
                class="mt-auto block w-full bg-[#4285F4] text-white font-bold py-3.5 rounded-xl text-center hover:bg-[#3367d6] transition-colors"
              >
                Quiero el mío →
              </a>
              <p class="text-center text-xs text-[#9CA3AF] mt-3">🚚 Envío a todo el país · 🛡️ Garantía 30 días</p>
            </div>
          </div>

          <!-- Producto 2: Placa Adhesiva -->
          <div class="bg-white rounded-2xl border border-[#e8eaed] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <div class="bg-gradient-to-b from-[#F0FDF4] to-[#DCFCE7] p-10 flex justify-center items-center min-h-[280px]">
              <svg viewBox="0 0 180 180" width="160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14" y="15" width="152" height="152" rx="18" fill="rgba(0,0,0,0.05)"/>
                <rect x="12" y="12" width="156" height="156" rx="18" fill="white"/>
                <clipPath id="clipPlaca">
                  <rect x="12" y="12" width="156" height="156" rx="18"/>
                </clipPath>
                <g clip-path="url(#clipPlaca)">
                  <rect x="12" y="12" width="39" height="7" fill="#4285F4"/>
                  <rect x="51" y="12" width="39" height="7" fill="#EA4335"/>
                  <rect x="90" y="12" width="39" height="7" fill="#FBBC05"/>
                  <rect x="129" y="12" width="39" height="7" fill="#34A853"/>
                  <rect x="12" y="161" width="39" height="7" fill="#34A853"/>
                  <rect x="51" y="161" width="39" height="7" fill="#FBBC05"/>
                  <rect x="90" y="161" width="39" height="7" fill="#EA4335"/>
                  <rect x="129" y="161" width="39" height="7" fill="#4285F4"/>
                  <rect x="12" y="12" width="7" height="78" fill="#4285F4"/>
                  <rect x="12" y="90" width="7" height="78" fill="#34A853"/>
                  <rect x="161" y="12" width="7" height="78" fill="#EA4335"/>
                  <rect x="161" y="90" width="7" height="78" fill="#FBBC05"/>
                </g>
                <rect x="12" y="12" width="156" height="156" rx="18" stroke="#E8EAED" stroke-width="1.5"/>
                <circle cx="90" cy="58" r="20" fill="#EEF4FF" stroke="#DBEAFE" stroke-width="1"/>
                <text x="90" y="67" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="900" fill="#4285F4">G</text>
                <text x="90" y="91" text-anchor="middle" font-family="Arial, sans-serif" font-size="8.5" fill="#9CA3AF" letter-spacing="0.5">PLACA NFC + QR</text>
                <text x="90" y="106" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#1a1a1a">Reseñas Google</text>
                <path d="M74 126 C80 116 85 112 90 112 C95 112 100 116 106 126" stroke="#4285F4" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M68 132 C75 117 83 111 90 111 C97 111 105 117 112 132" stroke="#4285F4" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
                <circle cx="90" cy="130" r="5" fill="#EEF4FF" stroke="#4285F4" stroke-width="1.5"/>
                <circle cx="90" cy="130" r="2" fill="#4285F4"/>
                <text x="90" y="150" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#FBBF24">★★★★★</text>
                <g transform="translate(72, 154)">
                  <rect width="9" height="9" rx="1.5" fill="#374151"/>
                  <rect x="1.5" y="1.5" width="6" height="6" rx="0.8" fill="white"/>
                  <rect x="3" y="3" width="3" height="3" fill="#374151"/>
                  <rect x="27" width="9" height="9" rx="1.5" fill="#374151"/>
                  <rect x="28.5" y="1.5" width="6" height="6" rx="0.8" fill="white"/>
                  <rect x="30" y="3" width="3" height="3" fill="#374151"/>
                  <rect y="12" width="9" height="9" rx="1.5" fill="#374151"/>
                  <rect x="1.5" y="13.5" width="6" height="6" rx="0.8" fill="white"/>
                  <rect x="3" y="15" width="3" height="3" fill="#374151"/>
                  <rect x="12" width="2.5" height="2.5" fill="#374151"/>
                  <rect x="16" width="2.5" height="2.5" fill="#374151"/>
                  <rect x="21" width="2.5" height="2.5" fill="#374151"/>
                  <rect x="12" y="4" width="5" height="2.5" fill="#374151"/>
                  <rect x="19" y="4" width="2.5" height="2.5" fill="#374151"/>
                  <rect x="12" y="8" width="2.5" height="2.5" fill="#374151"/>
                  <rect x="16" y="8" width="5" height="2.5" fill="#374151"/>
                  <rect x="12" y="12" width="2.5" height="9" fill="#374151"/>
                  <rect x="16" y="12" width="5" height="2.5" fill="#374151"/>
                  <rect x="22" y="12" width="8" height="2.5" fill="#374151"/>
                  <rect x="16" y="17" width="5" height="4" fill="#374151"/>
                  <rect x="24" y="17" width="2.5" height="4" fill="#374151"/>
                  <rect x="28" y="17" width="8" height="2.5" fill="#374151"/>
                </g>
              </svg>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <p class="text-[#9CA3AF] text-xs uppercase tracking-wider mb-1">Placa NFC + QR</p>
              <h3 class="font-bold text-xl text-[#1a1a1a] mb-2">Reseñas Google</h3>
              <div class="flex items-center gap-1.5 mb-1">
                <span class="text-[#FBBC05] text-sm">★★★★★</span>
                <span class="text-[#5f6368] text-sm">(23)</span>
              </div>
              <p class="text-[#5f6368] text-xs mb-4">Para pegar en pared, vidrio o caja registradora</p>
              <div class="flex items-baseline gap-2 mb-5">
                <span class="text-3xl font-bold text-[#1a1a1a]">$<span class="text-[#FBBC05]">40.000 ARS</span></span>
                <span class="text-[#5f6368] text-sm">pago único</span>
              </div>
              <a
                href="#contacto"
                class="mt-auto block w-full bg-[#34A853] text-white font-bold py-3.5 rounded-xl text-center hover:bg-[#2d9249] transition-colors"
              >
                Quiero la mía →
              </a>
              <p class="text-center text-xs text-[#9CA3AF] mt-3">🚚 Envío a todo el país · 🛡️ Garantía 30 días</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── Testimonios ── -->
    <section class="py-28 px-4 sm:px-6 bg-[#f8f9fa]">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-[#4285F4] text-sm font-semibold uppercase tracking-widest mb-3">Testimonios</p>
          <h2 class="font-serif text-4xl font-bold text-[#1a1a1a]">Lo que dicen nuestros clientes</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="t in testimonials"
            :key="t.name"
            class="bg-white border border-[#e8eaed] rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col"
          >
            <div class="flex gap-0.5 mb-4">
              <span v-for="i in 5" :key="i" class="text-[#FBBC05] text-base">★</span>
            </div>
            <p class="text-[#5f6368] text-sm leading-relaxed flex-1 mb-5">"{{ t.quote }}"</p>
            <div class="border-t border-[#e8eaed] pt-4">
              <p class="text-[#1a1a1a] font-semibold text-sm">{{ t.name }}</p>
              <p class="text-[#5f6368] text-xs mt-0.5">{{ t.role }}</p>
              <p class="text-[#4285F4] text-xs mt-2 font-semibold">{{ t.stat }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FAQ ── -->
    <section class="py-28 px-4 sm:px-6 bg-white">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-[#4285F4] text-sm font-semibold uppercase tracking-widest mb-3">Preguntas frecuentes</p>
          <h2 class="font-serif text-4xl font-bold text-[#1a1a1a]">FAQ</h2>
        </div>

        <div class="space-y-2">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="bg-white border border-[#e8eaed] rounded-2xl overflow-hidden"
            :class="openFaq === i ? 'border-l-[3px] border-l-[#4285F4]' : ''"
          >
            <button
              class="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#f8f9fa] transition-colors"
              @click="toggleFaq(i)"
            >
              <span class="font-medium text-[#1a1a1a] pr-4">{{ faq.q }}</span>
              <span
                class="text-[#4285F4] text-xl flex-shrink-0 transition-transform duration-200 leading-none font-bold"
                :class="openFaq === i ? 'rotate-45' : ''"
              >+</span>
            </button>
            <div v-if="openFaq === i" class="px-6 pb-5">
              <p class="text-[#5f6368] text-sm leading-relaxed">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Footer ── -->
    <footer id="contacto" class="bg-[#1a1a1a] py-12 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="text-center md:text-left">
            <div class="flex items-center gap-2 justify-center md:justify-start text-white font-semibold text-lg mb-1">
              <span class="text-[#4285F4]">★</span>
              <span class="font-serif">TapNReview</span>
            </div>
            <p class="text-neutral-500 text-sm">Más reseñas en Google. Sin esfuerzo.</p>
          </div>

          <div class="flex items-center gap-6 text-sm text-neutral-500">
            <a href="#" class="hover:text-white transition-colors">Términos</a>
            <a href="#" class="hover:text-white transition-colors">Privacidad</a>
            <a href="https://instagram.com" target="_blank" rel="noopener" class="hover:text-white transition-colors">Instagram</a>
            <a href="https://wa.me/5491100000000" target="_blank" rel="noopener" class="hover:text-[#25D366] transition-colors">WhatsApp</a>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-white/[0.08] text-center text-xs text-neutral-600">
          © {{ new Date().getFullYear() }} TapNReview. Todos los derechos reservados.
        </div>
      </div>
    </footer>

  </div>
</template>

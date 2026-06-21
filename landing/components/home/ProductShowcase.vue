<script setup lang="ts">
const { containerEl, visible } = useRevealList(2, 150)
</script>

<template>
  <section id="productos" class="bg-canvas-2 py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">

      <SectionHeader
        eyebrow="Productos"
        title="Elegí tu formato."
        description="Dos versiones del mismo sistema. Mismo NFC, mismo QR, mismo resultado."
        :center="true"
      />

      <div ref="containerEl" class="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">

        <!-- Card 1: Expositor de Mesa -->
        <div
          :class="[
            'group flex flex-col overflow-hidden rounded-2xl border border-edge bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-1',
            visible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
        >
          <!-- Image area -->
          <div class="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-b from-[#eef4ff] to-[#e0ecff] p-10">
            <svg viewBox="0 0 180 230" width="150" fill="none" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-md transition-transform duration-500 group-hover:scale-105">
              <ellipse cx="90" cy="226" rx="55" ry="5" fill="rgba(66,133,244,0.12)"/>
              <path d="M55 196 L40 220 L140 220 L125 196Z" fill="#CBD5E1"/>
              <rect x="55" y="190" width="70" height="8" rx="3" fill="#B0BEC5"/>
              <rect x="26" y="15" width="132" height="184" rx="11" fill="rgba(0,0,0,0.04)"/>
              <rect x="24" y="12" width="132" height="184" rx="11" fill="white"/>
              <clipPath id="showcase-clip-1">
                <rect x="24" y="12" width="132" height="184" rx="11"/>
              </clipPath>
              <g clip-path="url(#showcase-clip-1)">
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
            <!-- Tag -->
            <div class="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-sm border border-edge px-3 py-1 text-xs font-semibold text-ink shadow-sm">
              Más popular
            </div>
          </div>

          <!-- Info -->
          <div class="flex flex-1 flex-col p-6">
            <p class="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-1">Expositor NFC + QR</p>
            <h3 class="text-xl font-bold text-ink mb-1">Reseñas Google</h3>
            <div class="flex items-center gap-1.5 mb-1">
              <span class="text-[#FBBC05] text-sm">★★★★★</span>
              <span class="text-ink-3 text-xs">(47 reseñas)</span>
            </div>
            <p class="text-xs text-ink-2 mb-5">Para mostrador, recepción o mesa</p>
            <div class="flex items-baseline gap-2 mb-5">
              <span class="font-serif text-3xl font-bold text-ink">$<span class="text-[#FBBC05]">XX</span></span>
              <span class="text-sm text-ink-3">pago único</span>
            </div>
            <AppButton href="#contacto" class="mt-auto w-full justify-center">
              Quiero el mío →
            </AppButton>
            <p class="mt-3 text-center text-xs text-ink-3">🚚 Envío a todo el país · 🛡️ Garantía 30 días</p>
          </div>
        </div>

        <!-- Card 2: Placa Adhesiva -->
        <div
          :class="[
            'group flex flex-col overflow-hidden rounded-2xl border border-edge bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-1',
            visible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
        >
          <!-- Image area -->
          <div class="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] p-10">
            <svg viewBox="0 0 180 180" width="160" fill="none" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-md transition-transform duration-500 group-hover:scale-105">
              <rect x="14" y="15" width="152" height="152" rx="18" fill="rgba(0,0,0,0.05)"/>
              <rect x="12" y="12" width="156" height="156" rx="18" fill="white"/>
              <clipPath id="showcase-clip-2">
                <rect x="12" y="12" width="156" height="156" rx="18"/>
              </clipPath>
              <g clip-path="url(#showcase-clip-2)">
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

          <!-- Info -->
          <div class="flex flex-1 flex-col p-6">
            <p class="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-1">Placa NFC + QR</p>
            <h3 class="text-xl font-bold text-ink mb-1">Reseñas Google</h3>
            <div class="flex items-center gap-1.5 mb-1">
              <span class="text-[#FBBC05] text-sm">★★★★★</span>
              <span class="text-ink-3 text-xs">(23 reseñas)</span>
            </div>
            <p class="text-xs text-ink-2 mb-5">Para pegar en pared, vidrio o caja registradora</p>
            <div class="flex items-baseline gap-2 mb-5">
              <span class="font-serif text-3xl font-bold text-ink">$<span class="text-[#FBBC05]">XX</span></span>
              <span class="text-sm text-ink-3">pago único</span>
            </div>
            <AppButton href="#contacto" variant="secondary" class="mt-auto w-full justify-center">
              Quiero la mía →
            </AppButton>
            <p class="mt-3 text-center text-xs text-ink-3">🚚 Envío a todo el país · 🛡️ Garantía 30 días</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

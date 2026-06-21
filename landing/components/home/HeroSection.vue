<script setup lang="ts">
const { el, isVisible } = useReveal({ threshold: 0.05 })
</script>

<template>
  <section class="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
    <!-- Background decorations -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#f0f4ff] opacity-60 blur-[120px]" />
      <div class="absolute top-1/2 -left-20 h-[400px] w-[400px] rounded-full bg-[#f5f5f0] opacity-80 blur-[100px]" />
    </div>

    <div class="relative mx-auto max-w-6xl px-5 sm:px-8">
      <div ref="el" class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

        <!-- Left: copy -->
        <div
          :class="[
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ]"
        >
          <!-- Badge -->
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-edge bg-white px-3.5 py-1.5 text-xs font-medium text-ink-2 shadow-sm">
            <span class="flex h-2 w-2 rounded-full bg-[#34A853]" />
            Expositor NFC + QR para Google Reviews
          </div>

          <!-- Headline -->
          <h1 class="font-serif text-5xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[68px]">
            Más reseñas<br>
            Google.<br>
            <em class="not-italic text-ink-2">Sin esfuerzo.</em>
          </h1>

          <!-- Subheading -->
          <p class="mt-6 max-w-md text-lg leading-relaxed text-ink-2">
            Tu cliente acerca el celular al expositor y en 5 segundos
            ya está dejando su reseña en Google. Sin apps. Sin fricción.
          </p>

          <!-- CTAs -->
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <AppButton href="#productos" size="lg">
              Conseguir el mío →
            </AppButton>
            <AppButton href="#como-funciona" variant="secondary" size="lg">
              Ver cómo funciona
            </AppButton>
          </div>

          <!-- Social proof -->
          <div class="mt-8 flex items-center gap-3">
            <div class="flex -space-x-2">
              <div
                v-for="(color, i) in ['#4285F4','#EA4335','#FBBC05','#34A853']"
                :key="i"
                class="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                :style="{ backgroundColor: color }"
              >
                {{ ['M','R','L','C'][i] }}
              </div>
            </div>
            <div class="text-sm text-ink-2">
              <span class="font-semibold text-ink">+200 negocios</span> ya lo usan ·
              <span class="text-[#FBBC05]">★</span>
              <span class="font-semibold text-ink"> 4.9</span>/5
            </div>
          </div>
        </div>

        <!-- Right: product illustration -->
        <div
          :class="[
            'flex justify-center lg:justify-end transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
        >
          <div class="relative w-full max-w-[480px]">
            <svg viewBox="0 0 480 520" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
              <!-- Background blob -->
              <ellipse cx="300" cy="240" rx="210" ry="210" fill="#eef4ff" opacity="0.7"/>

              <!-- NFC pulse rings (decorative) -->
              <circle cx="172" cy="305" r="95" stroke="#4285F4" stroke-width="1" opacity="0.08"/>
              <circle cx="172" cy="305" r="70" stroke="#4285F4" stroke-width="1" opacity="0.12"/>
              <circle cx="172" cy="305" r="45" stroke="#4285F4" stroke-width="1.5" opacity="0.18"/>

              <!-- Standee base shadow -->
              <ellipse cx="172" cy="425" rx="72" ry="8" fill="#00000010"/>

              <!-- Standee base -->
              <path d="M112 390 L95 418 L249 418 L232 390Z" fill="#d8d8d4"/>
              <rect x="112" y="383" width="120" height="10" rx="4" fill="#c8c8c4"/>

              <!-- Standee card shadow -->
              <rect x="82" y="78" width="182" height="312" rx="18" fill="#00000008" transform="translate(3,4)"/>

              <!-- Standee card body -->
              <rect x="82" y="78" width="182" height="312" rx="18" fill="white"/>

              <!-- Google rainbow top strip -->
              <clipPath id="hero-card-clip">
                <rect x="82" y="78" width="182" height="312" rx="18"/>
              </clipPath>
              <g clip-path="url(#hero-card-clip)">
                <rect x="82"  y="78" width="45" height="8" fill="#4285F4"/>
                <rect x="127" y="78" width="46" height="8" fill="#EA4335"/>
                <rect x="173" y="78" width="46" height="8" fill="#FBBC05"/>
                <rect x="219" y="78" width="45" height="8" fill="#34A853"/>
                <!-- Subtle surface reflection -->
                <rect x="82" y="78" width="91" height="312" fill="white" opacity="0.025"/>
              </g>
              <rect x="82" y="78" width="182" height="312" rx="18" stroke="#e8e8e4" stroke-width="1.5"/>

              <!-- G logo circle -->
              <circle cx="173" cy="148" r="34" fill="#eef4ff" stroke="#dbeafe" stroke-width="1"/>
              <text x="173" y="161" text-anchor="middle" font-family="Arial,sans-serif" font-size="36" font-weight="900" fill="#4285F4">G</text>

              <!-- Subtitle text -->
              <text x="173" y="198" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#a3a3a3" letter-spacing="1.2">RESEÑAS GOOGLE</text>

              <!-- Stars -->
              <text x="173" y="226" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" fill="#FBBC05">★★★★★</text>

              <!-- NFC waves -->
              <path d="M148 258 C156 245 164 240 173 240 C182 240 190 245 198 258" stroke="#4285F4" stroke-width="3" stroke-linecap="round"/>
              <path d="M138 268 C150 249 161 241 173 241 C185 241 196 249 208 268" stroke="#4285F4" stroke-width="2" stroke-linecap="round" opacity="0.35"/>
              <circle cx="173" cy="266" r="9" fill="#eef4ff" stroke="#4285F4" stroke-width="2"/>
              <circle cx="173" cy="266" r="3.5" fill="#4285F4"/>

              <!-- "Acercá tu celular" -->
              <text x="173" y="298" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" fill="#6b6b6b">Acercá tu celular</text>

              <!-- QR code -->
              <g transform="translate(139, 310)">
                <rect width="14" height="14" rx="2.5" fill="#374151"/>
                <rect x="2" y="2" width="10" height="10" rx="1.5" fill="white"/>
                <rect x="4" y="4" width="6" height="6" fill="#374151"/>
                <rect x="54" width="14" height="14" rx="2.5" fill="#374151"/>
                <rect x="56" y="2" width="10" height="10" rx="1.5" fill="white"/>
                <rect x="58" y="4" width="6" height="6" fill="#374151"/>
                <rect y="20" width="14" height="14" rx="2.5" fill="#374151"/>
                <rect x="2" y="22" width="10" height="10" rx="1.5" fill="white"/>
                <rect x="4" y="24" width="6" height="6" fill="#374151"/>
                <rect x="18" width="5" height="5" fill="#374151"/>
                <rect x="25" width="5" height="5" fill="#374151"/>
                <rect x="32" width="5" height="5" fill="#374151"/>
                <rect x="18" y="7" width="5" height="5" fill="#374151"/>
                <rect x="27" y="7" width="10" height="5" fill="#374151"/>
                <rect x="18" y="14" width="10" height="5" fill="#374151"/>
                <rect x="30" y="14" width="5" height="5" fill="#374151"/>
                <rect x="18" y="20" width="5" height="10" fill="#374151"/>
                <rect x="25" y="20" width="5" height="5" fill="#374151"/>
                <rect x="32" y="20" width="12" height="5" fill="#374151"/>
                <rect x="45" y="20" width="5" height="5" fill="#374151"/>
                <rect x="25" y="27" width="8" height="8" fill="#374151"/>
                <rect x="35" y="27" width="5" height="8" fill="#374151"/>
                <rect x="45" y="27" width="14" height="5" fill="#374151"/>
              </g>

              <!-- tapnreview label -->
              <text x="173" y="378" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" fill="#d0d0d0" letter-spacing="2.5">TAPNREVIEW</text>

              <!-- ─── Phone mockup ─── -->
              <!-- Shadow -->
              <rect x="313" y="222" width="96" height="170" rx="20" fill="#00000008" transform="translate(3,4)"/>
              <!-- Frame -->
              <rect x="313" y="222" width="96" height="170" rx="20" fill="white" stroke="#e8e8e4" stroke-width="1.5"/>
              <!-- Notch -->
              <rect x="347" y="229" width="28" height="7" rx="3.5" fill="#e8e8e4"/>
              <!-- Screen content -->
              <text x="361" y="272" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="600" fill="#0a0a0a">¿Tu experiencia?</text>
              <text x="361" y="302" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" fill="#FBBC05">★★★★★</text>
              <rect x="329" y="320" width="64" height="34" rx="10" fill="#4285F4"/>
              <text x="361" y="342" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" fill="white" font-weight="600">Dejar reseña</text>
              <text x="361" y="375" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" fill="#a3a3a3">Google Maps</text>

              <!-- ─── Floating badges ─── -->
              <!-- Badge 1: +1 reseña -->
              <g class="animate-float">
                <rect x="280" y="110" width="156" height="52" rx="16" fill="white" stroke="#e8e8e4" stroke-width="1.5"/>
                <rect x="282" y="113" width="156" height="52" rx="16" fill="#00000005"/>
                <rect x="280" y="110" width="156" height="52" rx="16" fill="white" stroke="#e8e8e4" stroke-width="1.5"/>
                <circle cx="304" cy="136" r="14" fill="#34A853"/>
                <text x="304" y="141" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="white">✓</text>
                <text x="375" y="130" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="700" fill="#0a0a0a">+1 reseña Google</text>
                <text x="375" y="148" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#6b6b6b">publicada ahora mismo</text>
              </g>

              <!-- Badge 2: stat -->
              <g class="animate-float-slow" style="animation-delay: 2s">
                <rect x="24" y="360" width="148" height="60" rx="16" fill="white" stroke="#e8e8e4" stroke-width="1.5"/>
                <rect x="26" y="363" width="148" height="60" rx="16" fill="#00000005"/>
                <rect x="24" y="360" width="148" height="60" rx="16" fill="white" stroke="#e8e8e4" stroke-width="1.5"/>
                <text x="40" y="388" font-family="Arial,sans-serif" font-size="22" font-weight="800" fill="#0a0a0a">+38</text>
                <text x="40" y="407" font-family="Arial,sans-serif" font-size="10" fill="#6b6b6b">reseñas este mes</text>
                <text x="138" y="407" text-anchor="end" font-family="Arial,sans-serif" font-size="9" fill="#34A853" font-weight="600">↑ 3x</text>
              </g>
            </svg>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

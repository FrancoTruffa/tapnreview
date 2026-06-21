<script setup lang="ts">
const scrolled = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  }, { passive: true })
})
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#e8e8e4]'
        : 'bg-transparent',
    ]"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2 font-semibold text-ink">
        <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-white text-xs font-bold">T</span>
        <span class="font-sans font-semibold tracking-tight">TapNReview</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-7 text-sm font-medium text-ink-2 md:flex">
        <a href="#como-funciona" class="transition-colors hover:text-ink">Cómo funciona</a>
        <a href="#productos" class="transition-colors hover:text-ink">Productos</a>
        <a href="#testimonios" class="transition-colors hover:text-ink">Clientes</a>
        <a href="#faq" class="transition-colors hover:text-ink">FAQ</a>
      </nav>

      <!-- Desktop CTA -->
      <a
        href="#productos"
        class="hidden md:inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ink-2 active:scale-95"
      >
        Conseguir el mío
      </a>

      <!-- Mobile hamburger -->
      <button
        class="flex h-9 w-9 items-center justify-center rounded-lg text-ink md:hidden"
        aria-label="Menú"
        @click="menuOpen = !menuOpen"
      >
        <svg v-if="!menuOpen" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menuOpen"
        class="border-t border-edge bg-white px-5 py-5 md:hidden"
      >
        <nav class="flex flex-col gap-1">
          <a
            v-for="link in [
              { href: '#como-funciona', label: 'Cómo funciona' },
              { href: '#productos', label: 'Productos' },
              { href: '#testimonios', label: 'Clientes' },
              { href: '#faq', label: 'FAQ' },
            ]"
            :key="link.href"
            :href="link.href"
            class="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:bg-canvas-2 hover:text-ink"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </a>
        </nav>
        <a
          href="#productos"
          class="mt-4 flex w-full items-center justify-center rounded-full bg-ink py-3 text-sm font-semibold text-white"
          @click="menuOpen = false"
        >
          Conseguir el mío
        </a>
      </div>
    </Transition>
  </header>
</template>

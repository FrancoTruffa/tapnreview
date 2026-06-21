<template>
  <footer id="contacto" class="border-t border-edge bg-canvas-2">
    <div class="mx-auto max-w-6xl px-5 sm:px-8 py-12">
      <div class="grid gap-10 md:grid-cols-4">

        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="mb-3 flex items-center gap-2">
            <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-white text-xs font-bold">T</span>
            <span class="font-sans font-semibold text-ink tracking-tight">TapNReview</span>
          </div>
          <p class="max-w-xs text-sm leading-relaxed text-ink-2">
            Más reseñas en Google. Sin esfuerzo.
            El expositor NFC + QR que transforma clientes en reseñas.
          </p>
          <div class="mt-5 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              class="flex h-8 w-8 items-center justify-center rounded-lg border border-edge bg-white text-ink-3 text-sm transition-all hover:text-ink hover:border-edge-2"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener"
              class="flex h-8 w-8 items-center justify-center rounded-lg border border-edge bg-white text-ink-3 text-sm transition-all hover:text-[#25D366] hover:border-edge-2"
              aria-label="WhatsApp"
            >
              WA
            </a>
          </div>
        </div>

        <!-- Product links -->
        <div>
          <p class="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-3">Producto</p>
          <ul class="space-y-3 text-sm text-ink-2">
            <li><a href="#como-funciona" class="transition-colors hover:text-ink">Cómo funciona</a></li>
            <li><a href="#productos" class="transition-colors hover:text-ink">Productos</a></li>
            <li><a href="#faq" class="transition-colors hover:text-ink">Preguntas frecuentes</a></li>
            <li><a href="#testimonios" class="transition-colors hover:text-ink">Testimonios</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <p class="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-3">Contacto</p>
          <ul class="space-y-3 text-sm text-ink-2">
            <li>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener"
                class="transition-colors hover:text-ink"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:hola@tapnreview.com" class="transition-colors hover:text-ink">
                hola@tapnreview.com
              </a>
            </li>
            <li><a href="#" class="transition-colors hover:text-ink">Términos de uso</a></li>
            <li><a href="#" class="transition-colors hover:text-ink">Privacidad</a></li>
          </ul>
        </div>

      </div>

      <div class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-edge pt-8 sm:flex-row">
        <p class="text-xs text-ink-3">
          © {{ new Date().getFullYear() }} TapNReview. Todos los derechos reservados.
        </p>
        <div class="flex items-center gap-1.5">
          <span class="text-xs text-ink-3">Hecho en</span>
          <span class="text-xs font-medium text-ink">🇦🇷 Argentina</span>
        </div>
      </div>
    </div>
  </footer>
</template>

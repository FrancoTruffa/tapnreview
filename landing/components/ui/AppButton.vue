<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  tag?: string
}>()
</script>

<template>
  <component
    :is="href ? 'a' : (tag ?? 'button')"
    :href="href"
    :class="[
      'inline-flex items-center justify-center gap-2 font-semibold transition-all active:scale-[0.97] select-none',
      // Variants
      variant === 'secondary'
        ? 'rounded-full border border-edge bg-white text-ink hover:bg-canvas-2'
        : variant === 'ghost'
        ? 'rounded-full text-ink-2 hover:text-ink hover:bg-canvas-2'
        : 'rounded-full bg-ink text-white hover:bg-[#2a2a2a]',
      // Sizes
      size === 'sm'  ? 'px-4 py-2 text-sm'
      : size === 'lg' ? 'px-8 py-4 text-base'
      : 'px-6 py-3 text-sm',
    ]"
  >
    <slot />
  </component>
</template>

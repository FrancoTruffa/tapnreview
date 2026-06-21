<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
}>()
</script>

<template>
  <div :class="['mb-14', center ? 'text-center mx-auto max-w-2xl' : '']">
    <p
      v-if="eyebrow"
      class="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-3"
    >
      {{ eyebrow }}
    </p>
    <h2 class="font-sans text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[42px]">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-4 text-base leading-relaxed text-ink-2 sm:text-[17px]"
      :class="center ? 'mx-auto max-w-xl' : 'max-w-lg'"
    >
      {{ description }}
    </p>
  </div>
</template>

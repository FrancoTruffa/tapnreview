<script setup lang="ts">
const route = useRoute()
const pointId = route.params.pointId as string

const { data, loading, error, updateScanRating } = usePoint(pointId)

useHead({
  title: computed(() => data.value?.location.name ?? 'TapNReview'),
})

const onRatingSelected = (rating: number) => {
  updateScanRating(rating)
}

const errorMessages: Record<string, string> = {
  'punto-no-encontrado': 'Este enlace no es válido.',
  'punto-inactivo': 'Este punto ya no está activo.',
  'local-no-encontrado': 'No encontramos información de este local.',
  'error-generico': 'Ocurrió un error. Intentá de nuevo.',
}
</script>

<template>
  <div class="min-h-screen bg-surface">

    <!-- Loading -->
    <div v-if="loading" class="flex min-h-screen items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <div class="h-10 w-10 animate-spin rounded-full border-2 border-neutral-700 border-t-white" />
        <p class="text-sm text-neutral-500">Cargando…</p>
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p class="text-5xl">😕</p>
      <p class="mt-4 text-lg font-medium text-white">
        {{ errorMessages[error] ?? errorMessages['error-generico'] }}
      </p>
      <p class="mt-2 text-sm text-neutral-500">Si crees que es un error, contactá al local.</p>
    </div>

    <!-- Main flow -->
    <ReviewFlow
      v-else-if="data"
      :business-name="data.location.name"
      :review-url="data.reviewUrl"
      :whatsapp-number="data.location.whatsappNumber"
      :point-id="data.pointId"
      :location-id="data.point.locationId"
      @rating-selected="onRatingSelected"
    />

  </div>
</template>

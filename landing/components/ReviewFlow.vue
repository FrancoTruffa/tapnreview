<script setup lang="ts">
import { addDoc, collection, Timestamp } from 'firebase/firestore'

const props = defineProps<{
  businessName: string
  reviewUrl: string
  whatsappNumber: string
  pointId: string
  locationId: string
}>()

const emit = defineEmits<{
  ratingSelected: [rating: number]
}>()

type Step = 'rating' | 'positive' | 'negative' | 'thanks'

const { $db } = useNuxtApp()

const step = ref<Step>('rating')
const selectedRating = ref(0)
const hoveredRating = ref(0)
const feedbackName = ref('')
const feedbackComment = ref('')
const submitting = ref(false)

const displayRating = computed(() => hoveredRating.value || selectedRating.value)

const starLabel = (n: number) => `${n} estrella${n === 1 ? '' : 's'}`

const onStarSelect = (rating: number) => {
  selectedRating.value = rating
  hoveredRating.value = 0
  emit('ratingSelected', rating)
  setTimeout(() => {
    step.value = rating >= 4 ? 'positive' : 'negative'
  }, 350)
}

const goToGoogle = () => {
  window.open(props.reviewUrl, '_blank')
  step.value = 'thanks'
}

const alreadyReviewed = () => {
  step.value = 'thanks'
}

const sendFeedback = async () => {
  submitting.value = true
  try {
    await addDoc(collection($db, 'feedback'), {
      pointId: props.pointId,
      locationId: props.locationId,
      rating: selectedRating.value,
      name: feedbackName.value.trim() || null,
      comment: feedbackComment.value.trim(),
      timestamp: Timestamp.now(),
    })

    const msg = [
      `Nueva opinión (${selectedRating.value}⭐) — ${props.businessName}`,
      feedbackComment.value.trim() ? `\n\n${feedbackComment.value.trim()}` : '',
      feedbackName.value.trim() ? `\n\n— ${feedbackName.value.trim()}` : '',
    ].join('')

    window.open(`https://wa.me/${props.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank')
    step.value = 'thanks'
  } catch (e) {
    console.error('[sendFeedback]', e)
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center px-6 py-12">

    <!-- Rating step -->
    <Transition name="fade" mode="out-in">
      <div v-if="step === 'rating'" key="rating" class="w-full max-w-sm text-center">
        <p class="text-6xl">🍽️</p>
        <h1 class="mt-4 font-serif text-3xl font-bold leading-tight text-white">
          {{ businessName }}
        </h1>
        <p class="mt-6 text-xl font-medium text-neutral-300">¿Cómo fue tu experiencia?</p>

        <div class="mt-8 flex justify-center gap-3" role="group" aria-label="Calificación">
          <button
            v-for="n in 5"
            :key="n"
            type="button"
            :aria-label="starLabel(n)"
            class="transition-transform duration-150 ease-out focus:outline-none active:scale-90"
            :class="n <= displayRating ? 'scale-110' : 'scale-100'"
            @mouseenter="hoveredRating = n"
            @mouseleave="hoveredRating = 0"
            @click="onStarSelect(n)"
            @touchstart.passive="hoveredRating = n"
            @touchend.passive="onStarSelect(n)"
          >
            <svg
              class="h-14 w-14 transition-colors duration-150"
              :class="n <= displayRating ? 'text-yellow-400' : 'text-neutral-700'"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>

    <!-- Positive step (4-5 stars) -->
    <Transition name="fade" mode="out-in">
      <div v-if="step === 'positive'" key="positive" class="w-full max-w-sm text-center">
        <p class="text-6xl">🎉</p>
        <h2 class="mt-5 font-serif text-3xl font-bold text-white">¡Nos alegra mucho!</h2>
        <p class="mt-3 text-lg text-neutral-400">
          Tu opinión ayuda a que más personas nos conozcan.
        </p>

        <button
          type="button"
          class="mt-10 w-full rounded-2xl bg-blue-600 px-6 py-5 text-lg font-semibold text-white shadow-lg transition-all duration-150 active:scale-95 active:bg-blue-700"
          @click="goToGoogle"
        >
          ⭐ Dejar reseña en Google
        </button>

        <button
          type="button"
          class="mt-4 text-sm text-neutral-500 underline underline-offset-4 transition-colors hover:text-neutral-300"
          @click="alreadyReviewed"
        >
          Ya la dejé antes
        </button>
      </div>
    </Transition>

    <!-- Negative step (1-3 stars) -->
    <Transition name="fade" mode="out-in">
      <div v-if="step === 'negative'" key="negative" class="w-full max-w-sm">
        <div class="text-center">
          <p class="text-5xl">🙏</p>
          <h2 class="mt-4 font-serif text-2xl font-bold text-white">
            Lamentamos que no fue ideal
          </h2>
          <p class="mt-2 text-neutral-400">
            Cuéntanos qué podemos mejorar — tu comentario es privado.
          </p>
        </div>

        <div class="mt-8 space-y-4">
          <div>
            <label class="mb-1 block text-sm text-neutral-400" for="feedback-name">
              Tu nombre (opcional)
            </label>
            <input
              id="feedback-name"
              v-model="feedbackName"
              type="text"
              placeholder="Ej: María"
              maxlength="80"
              autocomplete="given-name"
              class="w-full rounded-xl bg-surface-2 px-4 py-3 text-white placeholder-neutral-600 outline-none ring-1 ring-neutral-700 transition focus:ring-2 focus:ring-neutral-500"
            />
          </div>

          <div>
            <label class="mb-1 block text-sm text-neutral-400" for="feedback-comment">
              ¿Qué podríamos mejorar?
            </label>
            <textarea
              id="feedback-comment"
              v-model="feedbackComment"
              rows="4"
              maxlength="500"
              placeholder="Cuéntanos tu experiencia..."
              class="w-full resize-none rounded-xl bg-surface-2 px-4 py-3 text-white placeholder-neutral-600 outline-none ring-1 ring-neutral-700 transition focus:ring-2 focus:ring-neutral-500"
            />
            <p class="mt-1 text-right text-xs text-neutral-600">
              {{ feedbackComment.length }}/500
            </p>
          </div>
        </div>

        <button
          type="button"
          :disabled="submitting || feedbackComment.trim().length === 0"
          class="mt-6 w-full rounded-2xl bg-green-600 px-6 py-5 text-lg font-semibold text-white shadow-lg transition-all duration-150 active:scale-95 active:bg-green-700 disabled:cursor-not-allowed disabled:opacity-40"
          @click="sendFeedback"
        >
          <span v-if="submitting">Enviando…</span>
          <span v-else>💬 Enviar comentario privado</span>
        </button>
      </div>
    </Transition>

    <!-- Thanks step -->
    <Transition name="fade" mode="out-in">
      <div v-if="step === 'thanks'" key="thanks" class="w-full max-w-sm text-center">
        <p class="text-6xl">✅</p>
        <h2 class="mt-5 font-serif text-3xl font-bold text-white">¡Gracias!</h2>
        <p class="mt-3 text-lg text-neutral-400">
          Tu opinión nos ayuda a mejorar cada día.
        </p>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>

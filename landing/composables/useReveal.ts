export const useReveal = (options?: { threshold?: number; delay?: number }) => {
  const el = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  onMounted(() => {
    if (!el.value) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (options?.delay) {
            setTimeout(() => { isVisible.value = true }, options.delay)
          } else {
            isVisible.value = true
          }
          observer.disconnect()
        }
      },
      { threshold: options?.threshold ?? 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el.value)
  })

  return { el, isVisible }
}

export const useRevealList = (count: number, stagger = 80) => {
  const containerEl = ref<HTMLElement | null>(null)
  const visible = ref<boolean[]>(Array(count).fill(false))

  onMounted(() => {
    if (!containerEl.value) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value.forEach((_, i) => {
            setTimeout(() => { visible.value[i] = true }, i * stagger)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(containerEl.value)
  })

  return { containerEl, visible }
}

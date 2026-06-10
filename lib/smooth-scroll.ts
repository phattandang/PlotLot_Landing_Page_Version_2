const DEFAULT_DURATION_MS = 1500
const DEFAULT_OFFSET_PX = 96

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function scrollToSection(
  sectionId: string,
  options?: { duration?: number; offset?: number }
) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const duration = options?.duration ?? DEFAULT_DURATION_MS
  const offset = options?.offset ?? DEFAULT_OFFSET_PX

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: "auto" })
    return
  }

  const startY = window.scrollY
  const targetY = element.getBoundingClientRect().top + startY - offset
  const distance = targetY - startY
  const startTime = performance.now()

  function step(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeInOutCubic(progress)

    window.scrollTo(0, startY + distance * easedProgress)

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

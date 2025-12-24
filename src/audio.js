export const setupAutoplay = (song) => {
  const attemptAutoplay = async () => {
    if (!song) return
    try {
      await song.play()
    } catch (error) {
      const resume = () => {
        song.play().catch(() => {})
        document.removeEventListener('pointerdown', resume)
        document.removeEventListener('keydown', resume)
      }
      document.addEventListener('pointerdown', resume, { once: true })
      document.addEventListener('keydown', resume, { once: true })
      // eslint-disable-next-line no-console
      console.warn('Autoplay blocked, will start on first tap/press.', error)
    }
  }

  attemptAutoplay()
  return attemptAutoplay
}

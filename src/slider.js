export const setupMobileSlider = () => {
  const slider = document.getElementById('mobile-slider')
  if (!slider) return

  const slides = Array.from(slider.querySelectorAll('.mobile-slide'))
  if (slides.length <= 1) return

  let index = 0
  const dotsContainer = slider.querySelector('.slider-dots')
  const prevButton = slider.querySelector('.slider-arrow.prev')
  const nextButton = slider.querySelector('.slider-arrow.next')
  const dots = []

  const activate = (i) => {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === i)
    })
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === i)
      dot.setAttribute('aria-pressed', idx === i ? 'true' : 'false')
    })
  }

  if (dotsContainer) {
    slides.forEach((_, idx) => {
      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'slider-dot'
      button.setAttribute('aria-label', `Показать фото ${idx + 1}`)
      button.setAttribute('aria-pressed', idx === 0 ? 'true' : 'false')
      button.addEventListener('click', () => {
        index = idx
        activate(index)
        startAuto()
      })
      dots.push(button)
      dotsContainer.appendChild(button)
    })
  }

  activate(index)

  const clampIndex = (i) => (i + slides.length) % slides.length

  const next = () => {
    index = clampIndex(index + 1)
    activate(index)
  }

  const prev = () => {
    index = clampIndex(index - 1)
    activate(index)
  }

  let interval = null
  const startAuto = () => {
    window.clearInterval(interval)
    interval = window.setInterval(next, 7000)
  }
  const pauseAuto = () => window.clearInterval(interval)

  startAuto()

  slider.addEventListener('pointerdown', pauseAuto)
  slider.addEventListener('pointerup', startAuto)
  slider.addEventListener('pointerleave', startAuto)

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      next()
      startAuto()
    })
  }

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      prev()
      startAuto()
    })
  }
}

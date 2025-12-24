const handleSmoothScroll = (selector) => {
  const target = document.querySelector(selector)
  if (target) target.scrollIntoView({ behavior: 'smooth' })
}

export const setupSmoothScroll = () => {
  document.querySelectorAll('[data-scroll]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const target = event.currentTarget.getAttribute('data-scroll')
      if (target) handleSmoothScroll(target)
    })
  })
}

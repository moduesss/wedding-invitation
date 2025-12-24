export const setupForm = () => {
  const form = document.getElementById('rsvp-form')
  const status = document.querySelector('.form-status')

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(form)
      const name = formData.get('name')?.toString().trim() || 'друг'

      status.textContent = `Спасибо, ${name}! Мы записали ваш ответ.`
      status.classList.add('show')
      form.reset()

      setTimeout(() => status.classList.remove('show'), 4000)
    })
  }
}

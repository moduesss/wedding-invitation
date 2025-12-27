export const setupRSVP = () => {
  const form = document.getElementById('rsvp-form')
  if (!form) return

  const statusEl = form.querySelector('.form-status')
  const statusSelect = form.querySelector('select[name="status"]')
  const alcoholInputs = Array.from(form.querySelectorAll('input[name="alcohol"]'))
  const noAlcoholInput =
    form.querySelector('input[name="alcohol"][value="Без алкоголя"]') ||
    form.querySelector('input[name="alcohol"][value="no-alcohol"]')
  const contactInput = form.querySelector('input[name="contact"]')
  const ENDPOINT =
    'https://script.google.com/macros/s/AKfycbzPvTHFbDbhQ7rUKbn1aTyk8S7Y89udX5EkBP7sSSsSoO8zrMVAxAvKhrYXAM2TmGBc/exec'

  const normalizeDigits = (value) => {
    let digits = value.replace(/\D/g, '')
    if (!digits) return ''
    if (digits[0] === '8') {
      digits = `7${digits.slice(1)}`
    } else if (digits[0] !== '7') {
      digits = `7${digits}`
    }
    return digits.slice(0, 11)
  }

  const formatPhone = (value) => {
    const digits = normalizeDigits(value)
    if (!digits) return ''
    const rest = digits.slice(1)
    let formatted = `+${digits[0]}`
    if (rest.length > 0) {
      formatted += ` (${rest.slice(0, 3)}`
      if (rest.length >= 3) formatted += ')'
    }
    if (rest.length > 3) formatted += ` ${rest.slice(3, 6)}`
    if (rest.length > 6) formatted += `-${rest.slice(6, 8)}`
    if (rest.length > 8) formatted += `-${rest.slice(8, 10)}`
    return formatted
  }

  const isValidPhone = (value) => normalizeDigits(value).length === 11

  const setStatusMessage = (message) => {
    if (!statusEl) return
    statusEl.textContent = message
    statusEl.classList.add('show')
  }

  const isDeclinedStatus = (value) => value === 'no' || value === 'Нет' || value === 'нет'

  const updateAlcoholState = () => {
    if (!statusSelect) return
    const isDeclined = isDeclinedStatus(statusSelect.value)
    if (isDeclined) {
      alcoholInputs.forEach((input) => {
        if (input !== noAlcoholInput) {
          input.checked = false
          input.disabled = true
        }
      })
      if (noAlcoholInput) {
        noAlcoholInput.checked = true
        noAlcoholInput.disabled = false
      }
      return
    }

    alcoholInputs.forEach((input) => {
      input.disabled = false
    })
  }

  if (statusSelect) {
    statusSelect.addEventListener('change', updateAlcoholState)
    updateAlcoholState()
  }

  if (contactInput) {
    contactInput.addEventListener('input', (event) => {
      event.target.value = formatPhone(event.target.value)
    })
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    updateAlcoholState()

    if (contactInput && !isValidPhone(contactInput.value)) {
      setStatusMessage('Введите корректный номер телефона.')
      contactInput.focus()
      return
    }

    setStatusMessage('Отправляем...')

    // собираем данные
    const formData = new FormData(form)
    const params = new URLSearchParams()
    formData.forEach((value, key) => {
      params.append(key, value.toString())
    })

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      })

      if (!res.ok) throw new Error('Network error')

      const statusValue = statusSelect?.value || ''
      if (isDeclinedStatus(statusValue)) {
        setStatusMessage('Очень жаль, что вы не сможете присоединиться к нашему празднику!')
      } else {
        setStatusMessage('Спасибо! Мы получили ваш ответ 💛')
      }
      form.reset()
      updateAlcoholState()

    } catch (err) {
      console.error(err)
      setStatusMessage('Ошибка отправки. Попробуйте позже.')
    }
  })
}

const TARGET_DATE = new Date('2026-06-27T00:00:00+03:00')

const formatUnit = (value) => value.toString().padStart(2, '0')

export const setupCountdown = () => {
  const daysEl = document.getElementById('cd-days')
  const hoursEl = document.getElementById('cd-hours')
  const minutesEl = document.getElementById('cd-minutes')
  const secondsEl = document.getElementById('cd-seconds')

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return

  const update = () => {
    const now = new Date()
    const diff = TARGET_DATE.getTime() - now.getTime()

    if (diff <= 0) {
      daysEl.textContent = '00'
      hoursEl.textContent = '00'
      minutesEl.textContent = '00'
      secondsEl.textContent = '00'
      return
    }

    const totalSeconds = Math.floor(diff / 1000)
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    daysEl.textContent = formatUnit(days)
    hoursEl.textContent = formatUnit(hours)
    minutesEl.textContent = formatUnit(minutes)
    secondsEl.textContent = formatUnit(seconds)
  }

  update()
  const intervalId = window.setInterval(update, 1000)
  return () => window.clearInterval(intervalId)
}

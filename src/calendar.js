const buildPalette = () => {
  const styles = getComputedStyle(document.documentElement)
  const getVar = (name, fallback) => {
    const value = styles.getPropertyValue(name).trim()
    return value || fallback
  }

  return {
    ink: getVar('--ink', '#30251e'),
    taupe: getVar('--taupe', '#d9cbc3'),
    cocoa: getVar('--cocoa', '#7b5b3f'),
    cream: getVar('--cream', '#fbf5f1'),
  }
}

const drawHeart = (ctx, x, y, size, color) => {
  const topCurveHeight = size * 0.3
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x, y + topCurveHeight)
  ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight)
  ctx.bezierCurveTo(x - size / 2, y + size * 0.75, x, y + size, x, y + size)
  ctx.bezierCurveTo(x, y + size, x + size / 2, y + size * 0.75, x + size / 2, y + topCurveHeight)
  ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight)
  ctx.closePath()
  ctx.fillStyle = color
  ctx.fill()
  ctx.restore()
}

const createCalendarGrid = (year, monthIndex) => {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const firstDay = new Date(year, monthIndex, 1).getDay()
  const offset = (firstDay + 6) % 7
  const rows = Math.ceil((offset + daysInMonth) / 7)
  return { daysInMonth, offset, rows }
}

export const setupCalendarCanvas = () => {
  const canvas = document.getElementById('calendar-canvas')
  if (!canvas) return

  const monthName = 'ИЮНЬ'
  const year = 2026
  const monthIndex = 5
  const highlightDay = 27
  const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

  const draw = () => {
    const rect = canvas.getBoundingClientRect()
    if (!rect.width || !rect.height) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = Math.round(rect.width * dpr)
    canvas.height = Math.round(rect.height * dpr)
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, rect.width, rect.height)

    const palette = buildPalette()
    const padding = rect.width * 0.08
    const monthFontSize = Math.max(16, Math.round(rect.width * 0.09))
    const dayFontSize = Math.max(10, Math.round(rect.width * 0.05))
    const numberFontSize = Math.max(12, Math.round(rect.width * 0.06))

    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    ctx.fillStyle = palette.taupe
    ctx.font = `600 ${monthFontSize}px "Playfair Display", serif`
    ctx.fillText(`${monthName} ${year}`, rect.width / 2, padding + monthFontSize / 2)

    const daysY = padding + monthFontSize + dayFontSize * 1.2
    ctx.font = `700 ${dayFontSize}px "Manrope", sans-serif`
    weekDays.forEach((day, index) => {
      const x = padding + (rect.width - padding * 2) * ((index + 0.5) / 7)
      ctx.fillText(day, x, daysY)
    })

    const { daysInMonth, offset, rows } = createCalendarGrid(year, monthIndex)
    const gridTop = daysY + dayFontSize * 1.4
    const gridHeight = rect.height - gridTop - padding
    const cellWidth = (rect.width - padding * 2) / 7
    const cellHeight = gridHeight / rows

    ctx.font = `600 ${numberFontSize}px "Manrope", sans-serif`

    for (let day = 1; day <= daysInMonth; day += 1) {
      const index = offset + (day - 1)
      const row = Math.floor(index / 7)
      const col = index % 7
      const x = padding + col * cellWidth + cellWidth / 2
      const y = gridTop + row * cellHeight + cellHeight / 2

      if (day === highlightDay) {
        const size = Math.min(cellWidth, cellHeight) * 0.7
        drawHeart(ctx, x, y - size * 0.45, size, palette.cocoa)
        ctx.fillStyle = palette.cream
      } else {
        ctx.fillStyle = palette.ink
      }

      ctx.fillText(day.toString(), x, y)
    }
  }

  const scheduleDraw = () => {
    window.requestAnimationFrame(draw)
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(draw).catch(scheduleDraw)
  } else {
    scheduleDraw()
  }

  window.addEventListener('resize', scheduleDraw)
}

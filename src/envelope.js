import gsap from 'gsap'

export const setupEnvelope = (onReveal) => {
  const overlay = document.getElementById('envelope-overlay')
  const page = document.getElementById('page')
  const openEnvelope = document.getElementById('open-envelope')
  const envelope = document.querySelector('.envelope')
  const baseCanvas = document.getElementById('env-base')
  const topCanvas = document.getElementById('env-top')
  const leftCanvas = document.getElementById('env-left')
  const rightCanvas = document.getElementById('env-right')
  const bottomCanvas = document.getElementById('env-bottom')

  if (!overlay || !page || !openEnvelope || !envelope || !baseCanvas || !topCanvas || !leftCanvas || !rightCanvas || !bottomCanvas) return

  const colors = {
    base: '#c8bcb4',
    side: '#b8aaa2',
    flap: '#d5c8c0',
    shadow: 'rgba(47, 41, 34, 0.2)',
    highlight: 'rgba(255, 255, 255, 0.14)',
  }

  const sizeCanvas = (canvas) => {
    const { clientWidth, clientHeight } = envelope
    const dpr = window.devicePixelRatio || 1
    canvas.width = clientWidth * dpr
    canvas.height = clientHeight * dpr
    canvas.style.width = `${clientWidth}px`
    canvas.style.height = `${clientHeight}px`
    const ctx = canvas.getContext('2d')
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    return ctx
  }

  const drawBase = () => {
    const ctx = sizeCanvas(baseCanvas)
    const w = baseCanvas.clientWidth
    const h = baseCanvas.clientHeight
    const baseGrad = ctx.createLinearGradient(0, 0, w, h)
    baseGrad.addColorStop(0, colors.base)
    baseGrad.addColorStop(1, colors.side)
    ctx.fillStyle = baseGrad
    ctx.fillRect(0, 0, w, h)
  }

  const drawPart = (canvas, drawFn, gradientDir = 'default') => {
    const ctx = sizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.clearRect(0, 0, w, h)
    drawFn(ctx, w, h, gradientDir)
  }

  const drawTop = (ctx, w, h) => {
    const flapGrad = ctx.createLinearGradient(0, 0, 0, h * 0.6)
    flapGrad.addColorStop(0, colors.flap)
    flapGrad.addColorStop(1, colors.side)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(w, 0)
    ctx.lineTo(w * 0.5, h * 0.6)
    ctx.closePath()
    ctx.fillStyle = flapGrad
    ctx.fill()
  }

  const drawLeft = (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, w * 0.5, h * 0.5)
    grad.addColorStop(0, colors.side)
    grad.addColorStop(1, colors.base)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(w * 0.52, h * 0.52)
    ctx.lineTo(0, h)
    ctx.closePath()
    ctx.fillStyle = grad
    ctx.fill()
  }

  const drawRight = (ctx, w, h) => {
    const grad = ctx.createLinearGradient(w, 0, w * 0.5, h * 0.5)
    grad.addColorStop(0, colors.side)
    grad.addColorStop(1, colors.base)
    ctx.beginPath()
    ctx.moveTo(w, 0)
    ctx.lineTo(w, h)
    ctx.lineTo(w * 0.48, h * 0.52)
    ctx.closePath()
    ctx.fillStyle = grad
    ctx.fill()
  }

  const drawBottom = (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, h * 0.55, 0, h)
    grad.addColorStop(0, 'rgba(0,0,0,0.08)')
    grad.addColorStop(1, 'rgba(0,0,0,0.02)')
    const baseGrad = ctx.createLinearGradient(0, 0, w, h)
    baseGrad.addColorStop(0, colors.base)
    baseGrad.addColorStop(1, colors.side)
    ctx.beginPath()
    ctx.moveTo(0, h)
    ctx.lineTo(w * 0.5, h * 0.52)
    ctx.lineTo(w, h)
    ctx.closePath()
    ctx.fillStyle = baseGrad
    ctx.fill()
    ctx.fillStyle = grad
    ctx.fill()
  }

  const drawEnvelope = () => {
    drawBase()
    drawPart(topCanvas, drawTop)
    drawPart(leftCanvas, drawLeft)
    drawPart(rightCanvas, drawRight)
    drawPart(bottomCanvas, drawBottom)
  }

  drawEnvelope()
  window.addEventListener('resize', drawEnvelope)

  const revealInvitation = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.to('.seal', { scale: 0.94, duration: 0.3 }, 0)
      .to('#env-top', { y: '-35%', duration: 1.3, ease: 'power2.inOut' }, 0)
      .to('#env-left', { x: '-35%', duration: 1.3, ease: 'power2.inOut' }, 0)
      .to('#env-right', { x: '35%', duration: 1.3, ease: 'power2.inOut' }, 0)
      .to('#env-bottom', { y: '35%', duration: 1.3, ease: 'power2.inOut' }, 0)
      .to('#env-base', { autoAlpha: 0, duration: 1, ease: 'power1.out' }, 0.1)
      .to(overlay, { autoAlpha: 0, duration: 1.2, delay: 0.05 })
      .set(overlay, { display: 'none' })
      .fromTo(page, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, '-=0.35')
      .add(() => onReveal && onReveal())
  }

  const openHandler = (event) => {
    event.preventDefault()
    revealInvitation()
  }

  openEnvelope.addEventListener('click', openHandler)
  openEnvelope.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      openHandler(event)
    }
  })
}

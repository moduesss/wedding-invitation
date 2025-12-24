import gsap from 'gsap'

export const setupEnvelope = (onReveal) => {
  const overlay = document.getElementById('envelope-overlay')
  const page = document.getElementById('page')
  const openEnvelope = document.getElementById('open-envelope')

  if (!overlay || !page || !openEnvelope) return

  const revealInvitation = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.to('.envelope-flap', { rotateX: -150, duration: 0.9, transformOrigin: '50% 0%' }, 0)
      .to('.seal', { scale: 0.94, duration: 0.4 }, 0)
      .to(overlay, { autoAlpha: 0, duration: 0.9, delay: 0.1 })
      .set(overlay, { display: 'none' })
      .fromTo(page, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, '-=0.4')
      .add(() => onReveal && onReveal())
  }

  openEnvelope.addEventListener('click', revealInvitation)
}

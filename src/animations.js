import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const setupAnimations = () => {
  gsap.from('.hero-text > *', {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.08,
    ease: 'power3.out',
    delay: 0.2,
  })

  gsap.from('.hero-frame', {
    opacity: 0,
    scale: 1.04,
    duration: 1,
    delay: 0.3,
    ease: 'power2.out',
  })

  gsap.from('.hero-video', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.5,
    ease: 'power2.out',
  })

  gsap.from('.location-card', {
    scrollTrigger: {
      trigger: '.location-card',
      start: 'top 90%',
    },
    y: 24,
    opacity: 0,
    duration: 0.9,
    ease: 'power2.out',
  })

  gsap.utils.toArray('.section').forEach((section) => {
    gsap.from(section.querySelector('.section-header'), {
      scrollTrigger: {
        trigger: section,
        start: 'top 88%',
      },
      y: 18,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
  })

  gsap.utils.toArray('.timeline-item').forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
      },
      x: -20,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
  })

  gsap.utils.toArray('.dot-swatch').forEach((dot, index) => {
    gsap.from(dot, {
      scrollTrigger: {
        trigger: dot,
        start: 'top 92%',
      },
      scale: 0.6,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.03,
      ease: 'power2.out',
    })
  })

  gsap.utils.toArray('.gallery-card').forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      delay: index * 0.04,
      ease: 'power2.out',
    })
  })

  gsap.from('.rsvp-form', {
    scrollTrigger: {
      trigger: '.rsvp-form',
      start: 'top 90%',
    },
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: 'power2.out',
  })
}

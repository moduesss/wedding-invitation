import gsap from 'gsap'

const kidsImages = {
  daria: ['/media/children/IMG_7793.PNG', '/media/children/IMG_7794.PNG'],
  maxim: ['/media/children/IMG_7795.PNG', '/media/children/IMG_7796.PNG'],
}

export const setupKids = () => {
  const modal = document.getElementById('kids-modal')
  const body = document.getElementById('kids-modal-body')
  if (!modal || !body) return

  const closeModal = () => {
    modal.classList.remove('active')
    body.innerHTML = ''
  }

  modal.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', closeModal)
  })

  const adults = document.querySelectorAll('.kids-card.adult')
  adults.forEach((card) => {
    card.addEventListener('click', () => {
      const person = card.getAttribute('data-person')
      const items = kidsImages[person] || []
      gsap.to(card, {
        rotateY: 360,
        duration: 1.2,
        transformOrigin: '50% 50%',
        ease: 'power1.inOut',
        onComplete: () => {
          body.innerHTML = items.map((src) => `<img src="${src}" alt="Детское фото" />`).join('')
          modal.classList.add('active')
          gsap.from(body.children, {
            opacity: 0,
            y: 14,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
          })
        },
      })
    })
  })
}

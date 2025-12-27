import './style.css'
import { renderLayout } from './layout'
import { setupSmoothScroll } from './scroll'
import { setupAutoplay } from './audio'
import { setupEnvelope } from './envelope'
import { setupForm } from './form'
import { setupAnimations } from './animations'
import { setupCountdown } from './countdown'
import { setupMobileSlider } from './slider'
import { setupKids } from './kids'
import { setupCalendarCanvas } from './calendar'

const app = document.querySelector('#app')
renderLayout(app)

const song = document.getElementById('wedding-song')
const attemptAutoplay = setupAutoplay(song)
const pageVideo = document.getElementById('page-video-media')
const pageVideoWrap = document.getElementById('page-video')

const handleReveal = () => {
  attemptAutoplay()
  document.body.classList.add('video-active')
  if (pageVideoWrap) pageVideoWrap.classList.add('active')
  if (pageVideo) {
    pageVideo.muted = true
    pageVideo.play().catch(() => {})
  }
}

setupEnvelope(handleReveal)
setupSmoothScroll()
setupForm()
setupAnimations()
setupCountdown()
setupMobileSlider()
setupKids()
setupCalendarCanvas()

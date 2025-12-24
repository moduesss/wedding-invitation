import './style.css'
import { renderLayout } from './layout'
import { setupSmoothScroll } from './scroll'
import { setupAutoplay } from './audio'
import { setupEnvelope } from './envelope'
import { setupForm } from './form'
import { setupAnimations } from './animations'
import { setupCountdown } from './countdown'

const app = document.querySelector('#app')
renderLayout(app)

const song = document.getElementById('wedding-song')
const attemptAutoplay = setupAutoplay(song)

setupEnvelope(attemptAutoplay)
setupSmoothScroll()
setupForm()
setupAnimations()
setupCountdown()

import './src/scss/main.scss'
import { createHtml } from './src/ts/createHtml'
import { displayPodcasts } from './src/ts/displayPodcasts'
import { getSRPodcasts } from './src/ts/services/podcastService'
import { toggleDarkMode } from './src/ts/toggleDarkmode'

function init () {
  // toggleDarkMode()
  createHtml()
  // getSRPodcasts()
  // displayPodcasts()
}

init()

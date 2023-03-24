import { displayPodcasts } from './displayPodcasts'
import { toggleDarkMode } from './toggleDarkmode'

export async function createHtml (): Promise<void> {
  document.body.classList.add('darkmode')
  const mainContent = document.body.querySelector('.maincontent') as HTMLDivElement
  const toggleDarkModeButton: HTMLButtonElement = document.createElement('button')
  toggleDarkModeButton.innerHTML = 'Välj mörkt läge'
  const title = document.createElement('h1')
  title.innerHTML = 'SRs Humorprogram'
  toggleDarkModeButton.classList.add('section__podlist-button')
  toggleDarkModeButton.classList.add('toggle-btn')
  mainContent.appendChild(toggleDarkModeButton)
  mainContent.appendChild(title)
  toggleDarkModeButton.addEventListener('click', () => {
    toggleDarkMode()
  })
  const podcastList = document.createElement('article') as HTMLDivElement
  podcastList.classList.add('podlist')
  mainContent.appendChild(podcastList)
  await displayPodcasts()
}

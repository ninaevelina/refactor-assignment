import { getSRPodcasts } from './services/podcastService'

export async function displayPodcasts (): Promise<void> {
  const podcastList = document.querySelector('.podlist') as HTMLDivElement
  const podcasts = await getSRPodcasts()
  podcasts.forEach((podcast) => {
    const podCastContainer: HTMLDivElement = (document.createElement('article') as HTMLDivElement)
    const podcastImage: HTMLImageElement = (document.createElement('IMG') as HTMLImageElement)
    const podcastContent: HTMLDivElement = document.createElement('div')
    const podcastUrl = document.createElement('a')
    const podcastDescription = document.createElement('p')
    const podcastTitle = document.createElement('h2')

    podCastContainer.classList.add('podlist__podcast')
    podcastImage.src = podcast.socialimage
    podcastImage.alt = 'image for podcast'
    podcastContent.classList.add('podlist__podcast-content')
    podcastUrl.innerHTML = 'Lyssna här'
    podcastUrl.href = podcast.programurl
    podcastDescription.innerHTML = podcast.description
    podcastTitle.innerHTML = podcast.name

    podcastList.appendChild(podCastContainer)
    podCastContainer.appendChild(podcastImage)
    podCastContainer.appendChild(podcastContent)
    podcastContent.appendChild(podcastTitle)
    podcastContent.appendChild(podcastDescription)
    podcastContent.appendChild(podcastUrl)
  })
}

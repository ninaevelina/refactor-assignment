import { getPodcasts } from './api'
import { displayPodcasts } from './displayPodcasts'
import { Podcast } from './models/IPodcast'
import { getApiPodcasts } from './services/podcastService'
import { toggleDarkMode } from './toggleDarkmode'

export async function createHtml (): void {
  document.body.classList.add('darkmode')
  const mainContent = document.body.querySelector('.maincontent') as HTMLDivElement
  const toggleDarkModeButton: HTMLButtonElement = document.createElement('button')
  const title = document.createElement('h1')
  title.innerHTML = 'SRs Humorprogram'
  toggleDarkModeButton.classList.add('section__podlist-button')
  toggleDarkModeButton.classList.add('toggle-btn')
  mainContent.appendChild(toggleDarkModeButton)
  mainContent.appendChild(title)
  //const toggleDarkModeButton: HTMLButtonElement = (document.querySelector('.toggle-btn') as HTMLButtonElement)
  //toggleDarkModeButton.addEventListener('click', toggleDarkMode)
  //toggleDarkModeButton.innerHTML = 'Blabla'
  toggleDarkModeButton.addEventListener('click', () => {
    toggleDarkMode()
  })
  const podcastList = document.createElement('article') as HTMLDivElement
  podcastList.classList.add('podlist')
  document.body.appendChild(podcastList)
  await displayPodcasts()
  console.log(toggleDarkModeButton)
}

//const podcasts: Podcast[] = await getApiPodcasts()

/*function displayPodcasts(pod: Podcast[]) {
  pod.forEach((podcast) => {
    console.log(pod)

    const podcastImage: HTMLImageElement = document.createElement('img')
    podcastImage.src = pod[i].socialimage
    return podcastImage
  })
}
displayPodcasts(pod)*/
/*
const podCastContainer = document.querySelector('.podlist')

let i = 0

export async function createHtml() {
  const podCasts = await getPodcasts()
  console.log(podCasts)
  podCasts.programs.forEach((podcast) => {
    // console.log(podcast)

    // console.log(data)
    i++
    const innerArticle = createInnerArticle()
    // podCastContainer?.appendChild(innerArticle)

    // createImg()
    const podcastImage = createImg()

    const textDiv = createTextDiv()
    // innerArticle.appendChild(textDiv)

    // createHeader()
    const headerPlacement = createHeader()
    // createP()
    const description = createP()
    // createLink()
    const podcastLink = createLink()

    function createInnerArticle() {
      const innerArticle = (document.createElement('article') as HTMLDivElement)
      innerArticle.setAttribute('class', 'podlist__podcast')
      // innerArticle.setAttribute('tabindex', '1')
      podCastContainer?.appendChild(innerArticle)
      return innerArticle
    }
    function createImg() { // lägg in imageUrl som parameter
      const podcastImage: HTMLImageElement = document.createElement('img') // ändra till podcastImage
      // sen ändra till const podcastImage = createImg(podcast.socialimage);
      // podcastImage.setAttribute('src', podCasts.programs[i].socialimage) // imageUrl istället som src
      podcastImage.src = podCasts.programs[i].socialimage
      podcastImage.alt = 'podcast'
      // console.log(podCasts.programs[i].socialimage)
      // podcastImage.setAttribute('src', podcast[i].socialimage)
      podcastImage.setAttribute('width', '100')
      podcastImage.setAttribute('height', '100')
      innerArticle.appendChild(podcastImage)
      return podcastImage
    }

    function createTextDiv() {
      const textDiv: HTMLDivElement = document.createElement('div')
      textDiv.setAttribute('class', 'podlist__podcast-content')
      innerArticle.appendChild(textDiv) // flytta den här till under const textDiv = createTextDiv()
      return textDiv
      //antingen ha med innerarticle som parameter eller gör manipulationen inne i loopen
    }

    function createLink() {
      const podcastLink: HTMLAnchorElement = document.createElement('a')
      const linkText = document.createTextNode('Lyssna här')
      podcastLink.setAttribute('href', podCasts.programs[i].programurl)
      // podcastLink.setAttribute('href', podcast[i].programurl)
      // podcastLink.setAttribute('tabindex', '1')
      podcastLink.appendChild(linkText) // vi behöver appenda den här nån annanstans
      textDiv.appendChild(podcastLink)
      return podcastLink
    }

    function createP() {
      const description = document.createElement('p')
      const desc = document.createTextNode(podCasts.programs[i].description)
      // const desc = document.createTextNode(podcast[i].description)
      description.appendChild(desc)
      textDiv.appendChild(description)
      return description
      // const description
    }

    function createHeader() {
      const headerPlacement = document.createElement('h2') // ändra till podcastName
      // sen const podcastName = createHeader(podcast.name)
      const programName = document.createTextNode(podCasts.programs[i].name)
      // const programName = document.createTextNode(podcast[i].name)
      headerPlacement.appendChild(programName)
      textDiv.appendChild(headerPlacement)
      return headerPlacement
    }
  })
}

export default createHtml

// 9 articles but only 8 podcasts

/*

  function createInnerArticle () {
    const innerArticle = document.createElement('article');
    innerArticle.classList.add('section__article-innerarticle');
    podCastContainer?.appendChild(innerArticle);
    return innerArticle;
  }

  function createTextDiv() {
    const textDiv = document.createElement('div');
    textDiv.classList.add('section__article-div');

  }

*/
/*
export function createBlabla (): void {
  const mainContent: HTMLDivElement = (document.querySelector('maincontent') as HTMLDivElement)

}*/

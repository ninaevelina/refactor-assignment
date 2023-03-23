/*
document.body.classList.add('darkmode')
const mainContent = document.body.querySelector('.maincontent') as HTMLDivElement
const toggleDarkModeButton = document.createElement('button')
const title = document.createElement('h1')
title.innerHTML = 'SRs Humorprogram'
toggleDarkModeButton.classList.add('section__podlist-button')
toggleDarkModeButton.classList.add('toggle-btn')
mainContent.appendChild(toggleDarkModeButton)
mainContent.appendChild(title)
//const toggleDarkModeButton: HTMLButtonElement = (document.querySelector('.toggle-btn') as HTMLButtonElement)
toggleDarkModeButton.addEventListener('click', toggleDarkMode)
console.log(toggleDarkModeButton)*/
/*
export function createHtml (): void {
  document.body.classList.add('darkmode')
  const mainContent = document.body.querySelector('.maincontent') as HTMLDivElement
  const toggleDarkModeButton = document.createElement('button')
  const title = document.createElement('h1')
  title.innerHTML = 'SRs Humorprogram'
  toggleDarkModeButton.classList.add('section__podlist-button')
  toggleDarkModeButton.classList.add('toggle-btn')
  mainContent.appendChild(toggleDarkModeButton)
  mainContent.appendChild(title)
  //const toggleDarkModeButton: HTMLButtonElement = (document.querySelector('.toggle-btn') as HTMLButtonElement)
  //toggleDarkModeButton.addEventListener('click', toggleDarkMode)
  toggleDarkModeButton.addEventListener('click', () => {
    toggleDarkMode()
  })
  console.log(toggleDarkModeButton)
}
*/
/*
document.body.classList.add('darkmode')
const mainContent = document.body.querySelector('.maincontent') as HTMLDivElement
const toggleDarkModeButton = document.createElement('button')
const title = document.createElement('h1')
title.innerHTML = 'SRs Humorprogram'
toggleDarkModeButton.classList.add('section__podlist-button')
toggleDarkModeButton.classList.add('toggle-btn')
mainContent.appendChild(toggleDarkModeButton)
mainContent.appendChild(title)
//const toggleDarkModeButton: HTMLButtonElement = (document.querySelector('.toggle-btn') as HTMLButtonElement)
toggleDarkModeButton.addEventListener('click', toggleDarkMode)
console.log(toggleDarkModeButton)
*/

//const toggleDarkModeButton: HTMLButtonElement = document.querySelector('section__podlist-button') as HTMLButtonElement

export function toggleDarkMode (): void {
  document.body.classList.toggle('darkmode')
  const toggleDarkModeButton: HTMLButtonElement = document.querySelector('.section__podlist-button') as HTMLButtonElement
  if (document.body.classList.contains('darkmode')) {
    if (toggleDarkModeButton !== null) {
      toggleDarkModeButton.innerHTML = 'Välj mörkt läge'
    }
    console.log('mörkt läge')
  } else {
    if (toggleDarkModeButton !== null) {
      toggleDarkModeButton.innerHTML = 'Välj ljust läge'
      console.log('ljust läge')
    }
  }
}

export default toggleDarkMode
/*
const toggleDarkModeButton: HTMLButtonElement = document.querySelector(".toggle-btn");
toggleDarkModeButton?.addEventListener("click", toggleDarkMode);
console.log(toggleDarkModeButton);

export function toggleDarkMode() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    toggleDarkModeButton.innerHTML = "Välj mörkt läge";
    console.log("mörkt läge");
  } else {
    toggleDarkModeButton.innerHTML = "Välj ljust läge";
    console.log("ljust läge");
  }
}

export default toggleDarkMode;

export function toggleDarkMode() {
  let toggleDarkModeButton = document.querySelector(".toggle-btn");
  toggleDarkModeButton?.addEventListener("click")
}*/
/*
export function toggleDarkMode() {
  let toggleDarkModeButton = document.querySelector(".toggle-btn") as HTMLButtonElement;
}

let toggleDarkModeButton = document.querySelector(".toggle-btn");
toggleDarkModeButton?.addEventListener("click", () => {
  toggleDarkMode();
})*/
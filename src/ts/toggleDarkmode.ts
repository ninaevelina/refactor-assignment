export function toggleDarkMode (): void {
  document.body.classList.toggle('darkmode')
  const toggleDarkModeButton: HTMLButtonElement = document.querySelector('.section__podlist-button') as HTMLButtonElement
  if (document.body.classList.contains('darkmode')) {
    if (toggleDarkModeButton !== null) {
      toggleDarkModeButton.innerHTML = 'Välj mörkt läge'
    }
  } else {
    if (toggleDarkModeButton !== null) {
      toggleDarkModeButton.innerHTML = 'Välj ljust läge'
    }
  }
}

export default toggleDarkMode

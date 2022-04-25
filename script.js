const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarElements = document.getElementsByClassName('navbar-elements')[0]

toggleButton.addEventListener('click', () => {
    navbarElements.classList.toggle('active')
})
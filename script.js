const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarElements = document.getElementsByClassName('navbar-elements')[0]

toggleButton.addEventListener('click', () => {
    navbarElements.classList.toggle('active')
})

// Login and Register Switch
var l = document.getElementById("login");
var r = document.getElementById("register");
var b = document.getElementById("btn");

function register(){
    l.style.left = "-400px";
    r.style.left = "50px";
    b.style.left = "50px";
}
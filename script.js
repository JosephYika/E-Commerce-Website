
/*Adding the funcionality for the navbar when it changes its size on the smaller screen*/
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarElements = document.getElementsByClassName('navbar-elements')[0]

toggleButton.addEventListener('click', () => {
    navbarElements.classList.toggle('active')
})


/*Error Message*/

function setFormMessage(formElement, type, message){
    const messageElement = formElements.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form-message-success", "form-message-error");
    messageElement.classList.add(`form-message-$(type)`);


}

/* Individual fields erorr*/
function setInputError(inputElement,message){

    inputElement.classList.add("input-field-error");
    inputElement.parentElement.querySelecter(".form-input-error-message").textContent = message;
}

document.querySelectorAll(".input-fields").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 9){
            setInputError(inputElement, "Username must be at least 8 characters long")
        }
    }
})






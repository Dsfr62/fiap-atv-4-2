
const registerForm = document.getElementById("register-form")
registerForm.addEventListener("submit", (e) => {
    if(!registerForm.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
    }
    registerForm.classList.add("was-validated")
}, false)
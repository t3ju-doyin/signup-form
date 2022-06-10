const form = document.getElementById('form')
const submitBtn = document.getElementById('submit')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const error = document.querySelectorAll('.error')
const errorIcon = document.querySelectorAll('.icon')


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    validateInputs()
})

function validateInputs() {
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if (firstNameValue === ''){
        error[0].style.display = 'block'
        errorIcon[0].style.display = 'block'
    }else{
        error[0].style.display = 'none'
        errorIcon[0].style.display = 'none'
    }
    if (lastNameValue === ''){
        error[1].style.display = 'block'
        errorIcon[1].style.display = 'block'
    }else{
        error[1].style.display = 'none'
        errorIcon[1].style.display = 'none'
    }
    if (emailValue === ''){
        error[2].style.display = 'block'
        errorIcon[2].style.display = 'block'
    }else{
        error[2].style.display = 'none'
        errorIcon[2].style.display = 'none'
    }
    if (passwordValue === ''){
        error[3].style.display = 'block'
        errorIcon[3].style.display = 'block'
    }else if(passwordValue.length<8){
        error[3].innerText = 'Password must be at least 8 characters'
        error[3].style.display = 'block'
        errorIcon[3].style.display = 'block'
    } else{
        error[3].style.display = 'none'
        errorIcon[3].style.display = 'none'
    }
}
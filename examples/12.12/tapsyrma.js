const registerForm = document.getElementById('registerForm');
const errorMessage = document.getElementById('errorMessage');
const confirmPassword = document.getElementById('password');
 

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let nameValue = document.getElementById('name').value;
    let emailValue = document.getElementById("email").value;
    let passwordValue = document.getElementById("password").value;
    let confirmPasswordValue = document.getElementById("confirmPassword").value;

    console.log({ emailValue, passwordValue });


    if (nameValue === '') {
        errorMessage.textContent = 'your name shoulfnt be empty';
    } else if (!emailValue.includes('@')) {
        errorMessage.textContent = "the email incorrect";
    } else if (passwordValue.length < 6) {
        errorMessage.textContent = "the password should had 6 letters at least";
    } else if (passwordValue != confirmPasswordValue) {
        errorMessage.textContent = "qate";
    } else {
        errorMessage.style.color = "green";
        errorMessage.textContent = "satti turde jetkizildi";
    }
});



const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let emailValue = document.getElementById("email").value;
    let passwordValue = document.getElementById("password").value;

    console.log({ emailValue, passwordValue });

    if (!emailValue.includes('@')) {
        errorMessage.textContent = 'the email incorrect';
    } else if (passwordValue.length < 6) {
        errorMessage.textContent = 'the password should had 6 letters at least';
    } else {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'forma satti turde jetkizildi';
        window.location.href = "index.html"
    }
});






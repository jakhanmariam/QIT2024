const errorMessage = document.getElementById('errorMessage');
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameValue = document.getElementById('name').value;
    const surenameValue = document.getElementById('surname').value;

    const timeValue = document.getElementById('time').value;

    if (nameValue === "" || surenameValue === "" || timeValue === "") {
        errorMessage.style.transform = 'translateY(-40vh)';
        errorMessage.textContent = 'все поля должны быть заполнены';
    }
});





const arrow = document.getElementById('up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        arrow.style.display = '';
    } else {
        arrow.style.display = 'none';
    }
});

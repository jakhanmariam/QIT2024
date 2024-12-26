const nameField = document.getElementById('name');
const helperText = document.getElementById('helperText');
const statusText = document.getElementById('statusText');


nameField.addEventListener('focus', () => {
   if (nameField.value === "")
    helperText.textContent = "enter full name";
});

nameField.addEventListener('blur', () => {
    if (nameField.value === '') {
    helperText.textContent = '';
    statusText.style.color = "green";
    statusText.textContent = 'durys';
    }
});



const liveInput = document.getElementById('liveInput');
const liveOutPut = document.getElementById('liveOutPut');

liveInput.addEventListener('input', () => {
    liveOutPut.textContent = liveInput.value;
});





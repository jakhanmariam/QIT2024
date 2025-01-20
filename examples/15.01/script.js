const apiUrl = 'https://dog.ceo/api/breeds/image/random';
const button = document.getElementById('loadDogImage'); 
const imageContainer = document.getElementById('imageContainer'); 

function loadDogImage() {
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Не удалось получить изображение');
        }
        return response.json();
    })
    .then(data => {
        imageContainer.innerHTML = "";

        const imgElement = document.createElement('img'); 
        imgElement.src = data.message; 
        imgElement.alt = 'dog'; 
        imgElement.style.width = '300px'; 
        imageContainer.appendChild(imgElement); 
    })
    .catch(error => {
        console.error(error);
        imageContainer.innerHTML = '<p>false</p>';
    });
}

button.addEventListener('click', loadDogImage);






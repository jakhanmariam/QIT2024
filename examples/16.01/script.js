// 1 tapsyrma


async function fetchPosts() {
    try{
        const response = await fetch('https://jsonplace.holder.typicode.com/posts');
        if(!response.ok){
            throw new Error('posttardy alu mumkin bolmady');
        }
        const data = await response.json();
        console.log(data);
    } catch(Error){
      console.log(err);
    }
}



fetchPosts();




// 2 tapsyrma


const apiUrl = 'https://dog.ceo/api/breeds/image/random';
const button = document.getElementById('loadDogImage');
const imageContainer = document.getElementById('imageContainer');

async function loadDogImage() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('wate')
        }

        const data = await response.json();
        imageContainer.innerHTML = "";

        const imgElement = document.createElement('img');
        imgElement.src = data.message;
        imgElement.alt = 'dog';
        imgElement.style.width = '500px';

        imageContainer.appendChild(imgElement);
    }catch(Error) {
        console.error(error);
        imageContainer.innerHTML = '<p>false</p>';
    };
}

button.addEventListener('click', loadDogImage);
        
        





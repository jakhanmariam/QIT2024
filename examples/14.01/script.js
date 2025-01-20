// fetch('https://jsonplaceholder.typicode.com/posts/5')
//     .then(response => response.json())
//     .then( data => {
//         const postTitle = data.title;
//         const postBody = data.body;
//         document.body.innerHTML = `<h2>Заглавок поста: ${postTitle} </h2> <p>Зодержание ${postBody}</p>`
// })


// .catch(error => console.error('qate oryn aldy', error));




fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const imgElement = document.createElement('img');
        imgElement.src = data.message;
        imgElement.alt = 'dog';
        imgElement.style.width = '300px';
        imageContainer.appendChild(imgElement);
});

     


    



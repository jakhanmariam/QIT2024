// const row = document.querySelector('.row');


// // const data = ['size', 'weight', 'type'];


// data.forEach((item) => {
//     const pill = document.createElement('span');
//     pill.textContent = item;
//     pill.style.marginRight = '10px';

//     pill.innerHTML = item;

//     row.appendChild(pill);

//     const close = document.createElement('button');
//     close.textContent = 'delete';

//     pill.appendChild(close);

//     close.addEventListener('click', () => {
//         pill.remove();
//     });

//     pill.style.background = 'gray';
//     pill.style.color = 'white';
//     pill.style.padding = '10px';
//     pill.style.borderRadius = '20px';
// });


// const parent = document.getElementById('container');
// const child = document.getElementById('second');

// const button = document.getElementById('removeButton');
// button.addEventListener('click', () => {
//     parent.removeChild(child);
//     alert('the second paragraph has removed');
// });


// pill.addEventListener('dbclick', () => {
//     const fix = document.createElement('input');

//     row.replaceChild(fix, pill);
// });



const data = [
    {title: '"abai joly" - Mukhtarauezov',
        descreption: 'abaidyn omiri men kazak kogamynyn tarikhi shejiresi'},
    {title: '"qan men ter" - Abdijamil',
        descreption: 'abaidyn omiri men kazak kogamynyn tarikhi shejiresi'},
    {title: '"koshpendiler" - iliyas',
        descreption: 'abaidyn omiri men kazak kogamynyn tarikhi shejiresi'},
];

const container = document.getElementById('container');

data.forEach(item => {
    const card = document.createElement('div')
    container.appendChild(card)
    const atauy = document.createElement('h1')
    atauy.textContent = item.title
    card.appendChild(atauy)
    const descreption = document.createElement('p')
    descreption.textContent = item.descreption;
    const button = document.createElement('button')
    button.textContent = 'delete';
    card.append(button)
    button.addEventListener('click', () => {
        card.remove();
    })
});





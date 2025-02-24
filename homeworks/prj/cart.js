let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

 const products = [
    {
        id: 1,
        name: 'Chocolate CupCake',
        image: "https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1474392787948-J9VNJI4HOFIYBRZV3YIF/adj_GFChocAlmTorte10inch.png?format=1000w",
        price: 2300
    },
    {

        id: 2,
        name: 'product name',
        image: " https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/707cd01f-a691-4d5f-a3b2-f287fa51a642/10%2522+Pecan+Pie+Slice.png?format=1000w ",
        price: 5000

    },
    {
        id: 3,
        name: 'Strawberry Cake',
        image:   'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1666197565722-0DJ2RXBRW3THP75GAHM2/Coconut+Cream+CC+Slice.png?format=1000w',
        price: 5500
    },
    {
        id: 4,
        name: 'product name',
        image: 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1610646521300-TDYZES3IAN49R4611WRQ/CadillacXTC_Slice2.png?format=1000w',
        price: 5000
    },
    {
        id: 5,
        name: 'product name',
        image: 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1610646521300-TDYZES3IAN49R4611WRQ/CadillacXTC_Slice2.png?format=1000w',
        price: 3500
    },
    {
        id: 6,
        name: 'product name',
        image: 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1474392930540-RNI6ZJM0QYI959EGHK2K/adj_GFVeryBerryCC.png?format=1000w',
        price: 2000
    },
    {
        id: 8,
        name: 'product name',
        image: 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/81efbf13-6183-461a-989a-560d50aab7c5/New+York+Junior+Dainty+CC+isolated.png?format=1000w',
        price: 2000
    },
    {
        id: 9,
        name: 'product name',
        image: 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1610646521300-TDYZES3IAN49R4611WRQ/CadillacXTC_Slice2.png?format=1000w',
        price: 2000
    },{
        id: 10,
        name: 'product name',
        image: 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1610646521300-TDYZES3IAN49R4611WRQ/CadillacXTC_Slice2.png?format=1000w',
        price: 2000
    },
    {
        id: 11,
        name: 'product name',
        image: 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1610646521300-TDYZES3IAN49R4611WRQ/CadillacXTC_Slice2.png?format=1000w',
        price: 2000
    },
    {
        id: 12,
        name: 'product name',
        image: 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1610646521300-TDYZES3IAN49R4611WRQ/CadillacXTC_Slice2.png?format=1000w',
        price: 2000
    },
    {
        id: 13,
        name: 'product name',
        image: 'https://balthazar.club/uploads/posts/2022-10/1666006840_10-balthazar-club-p-chizkeik-v-banke-krasivo-13.png',
        price: 2000
    },
    {
        id: 14,
        name: 'product name',
        image: 'https://static.vecteezy.com/system/resources/previews/044/279/881/non_2x/chocolate-chips-on-cookie-on-transparent-background-png.png',
        price: 2000
    },
    {
        id: 15,
        name: 'product name',
        image: 'https://purepng.com/public/uploads/large/purepng.com-cookiescookiessnacksbaked-snacksflour-cookies-1411527249289ileo8.png',
        price: 2000
    },
    {
        id: 16,
        name: 'product name',
        image: 'https://purepng.com/public/uploads/large/purepng.com-cocktail-glassdrinks-food-lemon-glass-soda-lime-fresh-refreshing-party-object-cold-drink-ice-summer-alcohol-liquid-cocktail-pool-941524633118qo9xy.png',
        price: 2000
    },
    {
        id: 18,
        name: 'product name',
        image: 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1610646521300-TDYZES3IAN49R4611WRQ/CadillacXTC_Slice2.png?format=1000w',
        price: 2000
    },
    {
        id: 19,
        name: 'product name',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/036/497/995/small_2x/ai-generated-scrumptious-tiramisu-dessert-on-transparent-background-png.png',
        price: 2000
    },
    {
        id: 20,
        name: 'product name',
        image: 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1610646521300-TDYZES3IAN49R4611WRQ/CadillacXTC_Slice2.png?format=1000w',
        price: 2000
    },
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src = "${value.image}">
        <div class = "title">${value.name}</div>
        <div class = "price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}

initApp()
function addToCard(key) {
    if(listCards[key] == null) {

        listCards[key]= JSON.parse(JSON.stringify(products[key]));
        listCards [key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <img src="${value.image}">
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity -1})">-</button>
                    <div class = "count">${value.quantity}</div>
                     <button onclick = "changeQuantity(${key}, ${value.quantity +1})">+</button>
            </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}


function changeQuantity (key, quantity) {
    if(quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

































































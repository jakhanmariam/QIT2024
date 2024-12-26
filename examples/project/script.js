const cardsContainer = document.getElementById('cardsContainer');

const data = [
    {
        image: 'https://img.fruugo.com/product/5/09/498991095_max.jpg',
        name: 'Christmas Cup',
        price: 120, 
    },
    {
        image: 'https://media.ltmuseumshop.co.uk/media/catalog/product/cache/bab4f4a206a2133475b02571876cfef3/a/d/adult-xmas-scarf-1_1200.jpg',
        name: 'Scarf',
        price: 120, 
    },
    {
        image: 'https://static.vecteezy.com/system/resources/previews/048/767/876/non_2x/decorated-christmas-tree-with-box-gift-presents-for-new-year-celebrate-isolated-on-transparent-background-free-png.png',
        name: 'Christmas tree',
        price: 120, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/714vt5D3ScL._AC_UY350_.jpg',
        name: 'Pyjama',
        price: 120, 
    },
    {
        image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/santa-hat-ZR6XNrE-600.jpg',
        name: 'hat',
        price: 120, 
    },
    {
        image: 'https://auroragift.com/cdn/shop/products/99025a_465a09e3-02a8-4579-9f31-746ada11ba04.jpg?v=1595626789',
        name: 'Tady bear',
        price: 120, 
    },
    {
        image: 'https://monalisa-twins.com/wp-content/uploads/2019/09/CHRISTMAS-CD-Label-900.jpg',
        name: 'cds',
        price: 120, 
    },
    {
        image: 'https://www.chocolateandmoredelights.com/cdn/shop/products/LindtChristmasChocolateBallsTeddy-Chocolate_MoreDelights_1024x1024.jpg?v=1634996758',
        name: 'cds',
        price: 120, 
    },
];


data.forEach((item) => {
    const card = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardName = document.createElement('p');
    const cardPrice = document.createElement('span');
    

    cardName.textContent = item.name;
    cardImage.src = item.image;
    cardPrice.textContent = item.price + ' $';

    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(cardPrice);

    card.classList.add('card');

    cardsContainer.appendChild(card);
});




const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SIZE = 3;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 200);
});





const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5 // next
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
}

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway; // next
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
};

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener('scroll', () => {
    canvas.style.top = `${window.scrollY}px`;
});



// setInterval(animate, 15);
animate()







const arrow = document.getElementById('up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        arrow.style.display = '';
    } else {
        arrow.style.display = 'none';
    }
});






// email

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





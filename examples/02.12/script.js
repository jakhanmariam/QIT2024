let numbers = [4, 7, 5, 10, 3, 12];

function moreThan(num,array) {
    return array.filter(element => element > num);
}

function sumOfElements(array) {
    return array.reduce((total, element) => total + element, 0);
}

console.log("barlyk sandar kosyndysy" + sumOfElements(numbers));

let choice = +prompt('\n 1) sandar kosyndysyn tabu \n 2) ortasha manin tabu \n 3) sandardy tuzip alu \n 4 ) sandar kosu \n 5 ) shygu');


function menu() {
    while (true) {
        let choice = +prompt(
            numbers +
                '\n 1) sandar kosyndysyn tabu \n 2) ortasha manin tabu \n 3) sandardy tuzip alu \n 4 ) sandar kosu \n 5 ) shygu'
        );

        switch (choice) {
            case 1:
                alert(sumOfElements(numbers));
                break;
            case 2:
                alert(average(numbers));
                break;
            case 3:
                alert(moreThan(numbers));
                break;
            case 4:
                alert(addNumber(numbers));
                break;
            case 5:
                return;
        }
    }
}

const car = {
    brand: "toyota",
    model: "camry",
    color: "white",
    year: 2020,
    isOk: true,
}

car.isOk = false;
car.owners = 5;
console.log(car);


console.log(`the brand of the car is ${car.brand}, the model of the car is ${car.model}, the year ${car.year}`);

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multiplication: function (a, b) {
        return a * b;
    }
}

console.log(calculator.plus(3, 5));
console.log(calculator.minus(3, 4));
console.log(calculator.multiplication(2, 5));


let num1 = +prompt("san engiz");
let num2 = +prompt("san engiz");
let test = prompt("-/+/*");

function menu() {

    switch (test) {
        case "minus":
            alert(calculator.minus(num1, num2));
            break;
        case "plus":
            alert(calculator.plus(num1, num2));
            break;
        case "multi":
            alert(calculator.multiplication(num1, num2));
            break;
    }

    return;
}

const product = {
    name: "e",
    rating: 5,
    price: 290283,
    discount: function(percent) {
        return this.price - (this.price * percent) /100;
    }
}

console.log(product.discount(19));

const person = {
    name: "aizhan",
    age: 19,
    company: "kz",
    greet: function() {
        return `hello my name is ${this.name}, im ${this.age}, i work at ${this.company}`
    }
}

console.log(person.greet());

// const resturantMenu = {
//     items: [pizza,sushi,cola,juice];
//     printMenu: function () {
//         return this.items.join("\n");
//     },
//     addItem: function () {
//         this.items.push('spagetti', 'pasta');
//     }
// }

resturantMenu.addItem();
console.log(resturantMenu.printMenu());


const resturantMenu = {
    items: [
        {
            name: "pizza",
            price: 2.5,
            weight: 500,
            ingredients: ["dough", "cheese", "pepperoni"]
        },
        {
            name: "sushi",
            price: 2.5,
            weight: 500,
            ingredients: ["rice", "fish", "wassabi"]
        }
    ],
}

resturantMenu.items.push({
    name: "pizza",
    price: 2.5, 
    weight: 500,
    ingredients: ["dough", "cheese", "pepperoni"]
})

resturantMenu.items[1].ingredients.push("more rice"),

console.log(resturantMenu.items);














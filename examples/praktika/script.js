let fruits1 = ["apple", "pinapple", "cherry"];
console.log(fruits1[0]); // apple
console.log(fruits1[1]); // pinapple



let fruits2 = ["apple", "pinapple", "cherry"];
fruits2[1] = "mango"; // elementty ozgertu
console.log(fruits2);



// let arr1 = [1, 2, 3]; // massivke silteme jasaydy
// let arr2 = arr1; // sol massivke silteme jasaydy
// arr2[0] = 99; arr2 // arqyly massivtin 1 shi elementin ozgertemiz
// console.log(arr1);
// console.log(arr2);



let fruits3 = ["apple", "pinapple", "cherry"];
fruits3[3] = "orange";
console.log(fruits3);




let fruits4 = ["apple", "pinapple", "cherry"];
fruits4[2] = "mango";
console.log(fruits4);



let fruits5 = ["apple", "pinapple", "cherry"];
console.log(fruits5[0]);
console.log(fruits5[1]);
console.log(fruits5[2]);



// push() // jana element kosady


function example1() {
    let number1 = [1, 2, 3];
    number1.push(4, 5);
    console.log(number1);
}



// pop() songy elementti alip tastaydy


function example2() {
    let number2 = [1, 2, 3];
    let alyndy = number2.pop();
    console.log(number2);
    console.log(alyndy);
}


// shift() massivtin 1 shi elementin alyp tasataydy jane kaitarady

function example3() {
    let number3 = [1, 2, 3];
    let alyndy = number3.shift();
    console.log(number3);
    console.log(alyndy);
}


// unshift() massivtinbasyna jana element kosady

function example4() {
    let number4 = [1, 2, 3, 4, 5];
    number4.unshift(0);
    console.log(number4);
}


// slice() massivtin belgili bir boligin koshiredi

function example() {
    let number = [1, 2, 3, 4, 5]; 
    let bolik = number.slice(1, 4);
    console.log(bolik);// [2, 3, 4]
}


// splice() massivke elementter kosady, joyady nemese auystyrady

function example() {
    let number = [1, 2, 3, 4, 5]; 
    number.splice(2, 1, 99)
    console.log(number); // [1, 2, 99, 4]
}

// tap


function numbers() {
    let number = [10, 20, 30, 40];
    number.push(50);
    console.log(number);
}


function numbers() {
    let number = [10, 20, 30, 40];
    let alyndy = number.shift();
    console.log(number);
    console.log(alyndy);
}


function numbers() {
    let number = [10, 20, 30, 40];
    number.splice(10, 25, 30, 40);
    console.log(number);
}


function numbers() {
    let number = [10, 20, 30, 40];
    let bolik = number.slice(20);
}

// for of


// let number = [1, 2, 3, 4];
// for (let num of numbers) {
//     console.log(num); // 1, 2, 3, 4 
// }


// forEach

let fruits = ["banana", "strawberry", "cherry"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});


// map 

// let numbers = [1, 2, 3];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);


// filter

// let numbers = [1, 2, 3, 4, 5];
// let evens= numbers.filter(num => num % 2 === 0);
// console.log(evens);


// // reduce

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);



// key-value

const car = {
    brand: "toyota",
    model: "camry",
    year: 2020
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);







const calculator = {
    add: function(a, b){
        return a + b;
    }
}

console.log(calculator.add(2, 3)); // 5






const product = {
    name: "notebook",
    price: 1900000,
    discount: function(percent) {
        return this.price - (this.price * percent) / 100;
    }
};

console.log(product.discount(10));







const person = {
    name: "aizhan",
    greet: function() {
        return `salem, menin atym ${this.name}.`;
    }
};

console.log(person.greet());






const menu = {
    items: ["pizza", "ham", "juice"],
    listMenu: function () {
        return this.items.join(", ")
    }
};

console.log(menu.listMenu());






const library = {
    books: ["abai joly", "idk"],
    addBook: function(book) {
        this.books.push(book);
    }
};

library.addBook("fln");
console.log(library.books);





const user = {
    name: "aliya",
    age: 19,
    hobbies: ["swimming", "reading", "game"]
};

user.hobbies.push("traveling");
console.log(user.hobbies);


const shortHobbies = user.hobbies.filter(
    (hobby) => hobby.length <= 6
);

console.log(shortHobbies);





const team = {
    name: "programmers",
    members: [
        { name: "ali", hobbies: ["swimming", "gaming"] },
        { name: "ali", hobbies: ["cooking", "traveling"] }
    ]
};

console.log(team.members[0].hobbies[1]);

team.members[1].hobbies.push("walking");
console.log(team.members[1].hobbies);


const allHobbies = team.members.flatMap(members => members.hobbies);
console.log(allHobbies);


// const students = [
//     { name: "ali", age: 22, score: 85},
//     { name: "aizhan", age: 20, score: 75},
//     { name: "aliiya", age: 19, score: 90},
//     { name: "erkenaz", age: 23, score: 95},
//     { name: "arman", age: 18, score: 100},
// ];

// students.forEach((students) => console.log(students.name));

// const findAge = () => {
//     const twenties = students.filter((students) => students.age >= 20);

//     return twenties;
// }

// console.log(findAge());







// objekti ydyraty


// const student = { name: "ali", age: 19 };
// const { name, age } = student;
// console.log(name);
// console.log(age);




// // const numbers = [1, 2, 3];
// // const [a, b, c] = numbers;
// // console.log(a);
// // console.log(b);



// // spread keneity

// const obj1 = { a: 1, b: 2};
// const obj2 = { ...obj1, c: 3};
// console.log(obj2);




// const arr1 = [1, 2, 3];
// const arr4 = [...arr1, 4, 5];

// console.log(arr4);


// // rest ... jinaqtay


// // objectilermen qoldanu

// const { a, ...rest } = { a: 1, b: 2, c: 3 };
// console.log(a);
// console.log(rest);


// // massivpen qoldany

// // const [a, ...rest] = [1, 2, 3, 4, 5]
// // console.log(a);
// // console.log(rest);



// studentterdi baskaru 


let students = [];

function addStudent() {
    let name = prompt("enter students name");
    let age = prompt("enter the age");
    let score = +prompt("enter the score");

    let student = {
        name: name,
        age: 19(age),
        score: 80(score),
    };

    students.push(student);
    alert(`${name} student is added`);
}

function searchStudent() {
    let name = prompt("izdeuge studenttin atyn engiziniz");
    let studentFound = student.find(student => student.name.toLowerCase() === name.toLowerCase());

    if (studentFound) {
        alert(`student is founded: ${studentFound.name}, age ${studentFound.age}, score ${studentFound.score}`)
    } else {
        alert("student didn't founded");
    }
}

function averageScore() {
    if (students.length === 0) {
        alert("there is not any student");
        return;
    }

    let sum = students.reduce((total, student) => total + student.score, 0);
    let average = total / students.length;
    alert(`ortasha upai: ${average.toFixed(2)}`);
}


function findExtremeScores() {
    if (students.length === 0) {
        alert("there is no any student");
        return;
    }

    let highest = students.reduce((max, student) => student.score > max.score ? student : min);

    alert(`en jogary score: ${highest.name}, ${highest.score} / en tomen score: ${lowest.name2}`)
}










































































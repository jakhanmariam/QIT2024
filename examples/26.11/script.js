// let number = [1, 2, 6, 8, 12, 67];//0, 1,2,3,4,5,
console.log(number[2]);

let fruits = ["Alma", "Banan", "Shie"];
 
console.log(fruits[0]);
console.log(fruits[1]);
 
fruits[1] = "Mango";
fruits[0] = "Chili";
console.log(fruits);
 
let fruits1 = ["Alma", "Banan", "Shie"];
let fruits2 = fruits1;
fruits1[2] = "Mango";
console.log(fruits1);
console.log(fruits2);
 
let fruits = ["Alma", "Banan", "Shie", "Apelsin"];
fruits[2] = "Mango";
 
for (let i = 0; i < fruits.length; i++){
 console.log(fruits[i]);
}
 
let fruits = ["Alma", "Banan", "Shie", "Apelsin"];
fruits.push("Orik");
fruits.push("Melon");
fruits.push("Watermelon");
 
let deleted = fruits.pop();
fruits.shift(); //Basyndagy joiu
fruits.unshift("Cherry");// en basyna element qosu
 
console.log(fruits);
console.log(deleted);
 
// let number = [23, 34, 45, 26, 96, 56];
 
for (let i = 0; i < number.length; i++){
if(number[i] %  2 == 0){
console.log([i] + "Jup");
}else if (number [i] % 2 != 0){
console.log(number[i] + "Taq");
}
}
console.log(number);

// let number = [23, 34, 45, 26, 96, 56];
let max = 0;
for (let i = 0; i < number.length; i++){
if(max < number[i]){
max = number[i];
}
}
console.log(max);
 
// let number = [];
while(true){
let num = +prompt('San engiz');
if(num == 0) break;
number.push(num);
}
console.log(number);
 
let number = [];
while(true){
let num = +prompt('San engiz');
if(num == 0 || number[number.length - 1]) break;
number.push(num);
}
  
console.log(number);
 
let fruits = ["Alma", "Banan", "Shie", "Apelsin", "bbb", "aaaa"];
 
let page1 = fruits.slice(0, 2);
let page2 = fruits.slice(2, 4);
let page3 = fruits.slice(4, 6); 
 
// console.log(${page1}\n\n${page2}\n\n${page3});

KONU

let fruits = ["apple","pinapple","srtawberry","waterlemon"]; // [] tik jaksha arkyly

let fruits = new Array("apple","pinapple","srtawberry","waterlemon"); // array konstruktor arkyly

let fruits = ["apple","pinapple","srtawberry","waterlemon"];
console.log(fruits[0]); // sonuc: "apple"
console.log(fruits[1]); // sonuc: "pinapple"

let fruits = ["apple","pinapple","srtawberry","waterlemon"];
fruits[1] = "mango";
console.log(fruits); // sonuc: ["apple","mango","srtawberry","waterlemon"];

let arr1 = [1, 2, 3]; // arr1 massivke silteme jasatdy
let arr2 = arr1; // arr2 sol massivke silteme jasaydy

arr2[0] = 99; // arr2 arkyly massivtyn birinshi elementin ozgertemiz

console.log(arr1); // [99, 2, 3]
console.log(arr2); // [99, 2, 3]



// push() massivtin kasina jana element kosady

function example() {
    let number = [1, 2, 3]; 
    number.push(4, 5);
    console.log(number); // [1, 2, 3, 4, 5]
}

// pop() massivtin songi elementin alip tastaidy jane ony kaytarady

function example() {
    let number = [1, 2, 3]; 
    let alyndy= number.pop();
    console.log(number); // [1, 2]
    console.log(alyndy); // 3
}

// shift() massivtin birinshi elementin alip tastaidy jane ony kaytarady

function example() {
    let number = [1, 2, 3]; 
    let alyndy= number.shift();
    console.log(number); // [2, 3]
    console.log(alyndy); // 1
}

// unshift() massivtin basyna elementter kosady

function example() {
    let number = [1, 2, 3]; 
    number.unshift(0);
    console.log(number); // [0, 1, 2, 3]
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


























 
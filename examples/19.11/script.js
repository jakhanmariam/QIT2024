// function add(a,b) {
//     return a + b;
// }

// function mutliply(x,y) {
//     return x * y;
// }

// console.log(mutliply(add(4,5), 7)); // 63 = (4 + 5) * 7

// const add = (a, b) => a + b; // arrow

// alert(add(4, 5));



// let num1 = +prompt("san engiz");
// let num2 = +prompt("san engiz");

// const findMax = (a, b) => {
//     if (a < b) {
//         return b + " ulken "
//     } else if (a > b) {
//         return a + " ulken "
//     }
// }

// const findMin = (a, b) => {
//     if (b < a) {
//         return b + " kishi "
//     } else if (a < b) {
//         return a + " kishi "
//     }
// }

// alert(findMax(num1, num2));
// alert(findMin(num1, num2));

// 1

// let num1 = +prompt('number engiz');
// let num2 = +prompt('number engiz');
// let tanba = prompt('tanba engiz');

// function calculator(a, b, c) {
//     switch (c) {
//        case "+":
//         return a + b;
//        case "*":
//         return a * b;
//        case "/":
//         return a / b;
//     }
// }

// alert(calculator(num1, num2, tanba));

// 2

// let num1 = +prompt("san engiz");
// let num2 = +prompt("san engiz");
// let num3 = +prompt("san engiz");

// const findMax = (a, b, c) => {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else if (c > a && c > b) {
//         return c;
//     }
// }

// alert(findMax(num1,num2,num3));

// 3

// let num1 = +prompt("km engiz")
// let can = 100000;

// function cm (a) {
//     return num1 / can
// }

// alert (cm(num1, can)) 



const math = () => {
    let res = 0;
    let basket = "";

    while (true) {
        let tavar = prompt('tavar engiz');
        if (tavar == 'aiaqta') {
            break;
        }
        basket += tavar + "\n";
        let baga = +prompt('baga engiz');
        res += baga;
    }
    return res;
}

alert(math());





// let array = [19, 'text']

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// console.log(fillArray(array));

// // for

// // let array = [3,3,,3,9,19];

// for (let element of array) {
//     console.log(element);
// }

// let fruits = []

// // forEach

// // let array = [3, 5, 9, 19];

// array.forEach(function(element) {
//     console.log(element);
// })

// map jana massiv kaytarady

// let array = [19,9,3];
// let doubled = array.map((element) => element * 2);
// let squared = array.map((element) => element * element);
// console.log(`eki eselengen sandar ${doubled}`);
// console.log(`kvadrattalgan ${squared}`);

// let evens = array.filter(element => element % 2 === 0);
// let odds = array.filter(element => element % 2 != 0);
// let array = fillArray();
// let onSan = array.filter(element => element >= 0);
// let terisSan = array.filter(element => element <= 0);
// console.log(`Teris sandar: ${onSan}`);
// console.log(`On sandar: ${terisSan}`);
// console.log(`jup sandar ${evens}`);
// console.log(`tak sandar ${odds}`);

// let priceList = fillArray("baga");

// let final = priceList.filter(element => element <= 10000);

// console.log(`tavarlar : ${final}`);
// console.log(`tavar sany : ${final.length}`);

// let nameList = fillArray("tavar aty");

// let search = prompt("Search...");

// let final = nameList.filter(element => element.toLowercase().includes(search));
// console.log(`tavarlar : ${final}`);
// console.log(`tavar sany : ${final.length}`);

const fillArray = (name) => {
    let array = [];

    while (true) {
        let thing = prompt(`${name} engiz`);
        if (thing === 'stop') break; 
        if (!isNaN(Number(thing))) {
            array.push(Number(thing));
        } else {
            array.push(thing);
        }
    }

    return array;
}


function sumOfNumbers(){
    let numbers = fillArray("san");
    let total = numbers.reduce((result, element) => result + element, element, 0);
    console.log(`sandar kosyndysy ${total}`);
}

function multiplicationOfNumbers(array) {
    let total = array.reduce((result, element) => result * element, 1);
    console.log(`sandardyn kobeitindisi: ${total}`);
}

multiplicationOfNumbers(numbers);
sumOfNumbers(3, 2, 3, 3, 19);











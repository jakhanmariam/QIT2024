// let num1 = +prompt("");
// let currency = prompt("dollar/tenge");

// function convertMoney (a, b) {
//     if (b == 'dollar') {
//         return a * 495;
//     } else if (b == 'tenge'){
//         return a / 495;
//     }
// }

// alert(convertMoney(num1,currency));

// function kosu(a, b) {
//     return a + b;
// }

// console.log(kosu(4, 6));

// const kosu = (a, b) => a + b;

// const findLength = (text) => text.length;


const myBank = () => {
    let result = 0;
    let money;

    while (true) { // or money =/ 0;
        money = +prompt('aqsha');
        if (money == 0) break;
        let currency = prompt('usd/eur/kzt');
        if (currency == 'eur') {
            result += money;
        } else if (currency == 'usd') {
            result += money * 0.85;
        } else if (currency == 'kzt') {
            result +=  money * 0.002;
        }
    }
    return result
};

alert(myBank());

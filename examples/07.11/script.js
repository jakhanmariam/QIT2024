// let option = prompt("1 den 3 ke dein san tandaniz");

// switch (option) {
//     case "1":
//         alert("Siz 1 tandadiniz");
//         break;
//     case "2":
//         alert("Siz 2 tandadiniz");
//         break;
//     case "3":
//         alert("Siz 3 tandadiniz");
//         break;
//     default:
//         alert("qate variant");
// }


// let bugerType = prompt ('Select the burger you want:' + '\n' + 'A)' + 'Chicken' + '\n' + 'b)' + 'Meat' + '\n' + 'c)' + 'Meatless');
// var order = "";

// switch (bugerType) {
//     case "a":
//       order += " \n Chicken"
//       break;
//     case "b":
//       order += " \n meat"
//       break;
//     case "c":
//       order += " \n meatless"
//       break;
// }


// let drinkType = prompt ('Select the drink you want:' + '\n' + 'A)' + 'Cola' + '\n' + 'b)' + 'Sprite' + '\n' + 'c)' + 'Fanta');

// switch (drinkType) {
//     case "a":
//       order += " \n Cola"
//       break;
//     case "b":
//       order += " \n Sprite"
//       break;
//     case "c":
//       order += " \n Fanta"
//       break;
// }


// let freeSize = prompt ('Select size of free:' + '\n' + 'A)' + 'Ketchup' + '\n' + 'b)' + 'BBQ' + '\n' + 'c)' + 'Cheese');

// switch (freeSize) {
//     case "a":
//       order += " \n Small"
//       break;
//     case "b":
//       order += " \n Medeium"
//       break;
//     case "c":
//       order += " \n Large"
//       break;
// }


// let souseType = prompt ('Select the souse:' + '\n' + 'A)' + 'Small' + '\n' + 'b)' + 'Medium' + '\n' + 'c)' + 'Large');

// switch (souseType) {
//     case "a":
//       order += " \n Ketchup"
//       break;
//     case "b":
//       order += " \n BBQ"
//       break;
//     case "c":
//       order += " \n Cheese"
//       break;
// }


// alert(order)

let bugerType = prompt ('Select the burger you want:' + '\n' + 'A)' + 'Chicken' + '\n' + 'b)' + 'Meat' + '\n' + 'c)' + 'Meatless');
var order = "";
var total = 0;

switch (bugerType) {
    case "a":
      order += " \n Chicken"
      total += 1200
      break;
    case "b":
      order += " \n meat"
      total += 3000
      break;
    case "c":
      order += " \n meatless"
      total += 1500
      break;
}


let drinkType = prompt ('Select the drink you want:' + '\n' + 'A)' + 'Cola' + '\n' + 'b)' + 'Sprite' + '\n' + 'c)' + 'Fanta');

switch (drinkType) {
    case "a":
      order += " \n Cola"
      total += 280
      break;
    case "b":
      order += " \n Sprite"
      total += 280
      break;
    case "c":
      order += " \n Fanta"
      total += 280
      break;
}


let freeSize = prompt ('Select size of free:' + '\n' + 'A)' + 'Ketchup' + '\n' + 'b)' + 'BBQ' + '\n' + 'c)' + 'Cheese');

switch (freeSize) {
    case "a":
      order += " \n Small"
      total += 2000
      break;
    case "b":
      order += " \n Medeium"
      total += 1800
      break;
    case "c":
      order += " \n Large"
      total += 23000
      break;
}


let souseType = prompt ('Select the souse:' + '\n' + 'A)' + 'Small' + '\n' + 'b)' + 'Medium' + '\n' + 'c)' + 'Large');

switch (souseType) {
    case "a":
      order += " \n Ketchup"
      total += 100
      break;
    case "b":
      order += " \n BBQ"
      total += 100
      break;
    case "c":
      order += " \n Cheese"
      total += 100
      break;
}
 
alert(order + '\n' + total)

alert(order)
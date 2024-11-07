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


let bugerType = prompt ('Select the burger you want:' + '\n' + 'A)' + 'Chicken' + '\n' + 'b)' + 'Meat' + '\n' + 'c)' + 'Meatless');
var order = "";

switch (bugerType) {
    case "a":
      order += " \n Chicken"
      break;
    case "b":
      order += " \n meat"
      break;
    case "c":
      order += " \n meatless"
      break;
}


let drinkType = prompt ('Select the drink you want:' + '\n' + 'A)' + 'Cola' + '\n' + 'b)' + 'Sprite' + '\n' + 'c)' + 'Fanta');

switch (drinkType) {
    case "a":
      order += " \n Cola"
      break;
    case "b":
      order += " \n Sprite"
      break;
    case "c":
      order += " \n Fanta"
      break;
}


let freeSize = prompt ('Select size of free:' + '\n' + 'A)' + 'Ketchup' + '\n' + 'b)' + 'BBQ' + '\n' + 'c)' + 'Cheese');

switch (freeSize) {
    case "a":
      order += " \n Small"
      break;
    case "b":
      order += " \n Medeium"
      break;
    case "c":
      order += " \n Large"
      break;
}


let souseType = prompt ('Select the souse:' + '\n' + 'A)' + 'Small' + '\n' + 'b)' + 'Medium' + '\n' + 'c)' + 'Large');

switch (souseType) {
    case "a":
      order += " \n Ketchup"
      break;
    case "b":
      order += " \n BBQ"
      break;
    case "c":
      order += " \n Cheese"
      break;
}


alert(order)
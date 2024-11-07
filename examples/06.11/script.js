// var isRain = prompt('Is it raining now?');

// if (isRain == 'yes' || isRain == "no") {
//     alert('So what are you waiting? Go home and take your umbrella!');
// } else if (isRain == 'jok') {
//   var isMorning = prompt('Is it daytime now?');

//   if (isMorning == 'ya') {
//     alert('vilosibetpen bar');
//   } else if (isMorning == 'jok') {
//     alert('mashinamen bar');
//   }
// }

// var isMeeting = prompt('Which days of the week are you available?');

// if (isMeeting == 'Monday' || isStudy == 'Tuesday' || isStudy == 'Wednesday') {
//     alert('Which time do you prefer?')
// } else if (isMeeting == '09:00' || isMeeting == '18:00');

// if (isMeeting == '09:00') {
//     alert('See you at 09:00!'); 
// } else if (isMeeting == '18:00') {
//     alert ('See you at 18:00!');
// }

let order = ""

var bugerType = prompt ('Select the burger you want:' + '\n' + 'A)' + 'Chicken' + '\n' + 'b)' + 'Meat' + '\n' + 'c)' + 'Meatless');

if (bugerType == 'a') {
    order += "chicken"
} else if (bugerType == 'b') {
    order += "meat"
} else if (bugerType == 'c') {
    order += "meatless"
}


var drinkType = prompt ('Select the drink you want:' + '\n' + 'A)' + 'Cola' + '\n' + 'b)' + 'Sprite' + '\n' + 'c)' + 'Fanta');

if (drinkType == 'a') {
    order += "Cola"
} else if (drinkType == 'b') {
    order += "Sprite"
} else if (drinkType == 'c') {
    order += "Fanta"
}


var freeSize = prompt ('Select size of free:' + '\n' + 'A)' + 'Ketchup' + '\n' + 'b)' + 'BBQ' + '\n' + 'c)' + 'Cheese');

if (souseType == 'a') {
    order += "Ketchup"
} else if (souseType == 'b') {
    order += "BBQ"
} else if (souseType == 'c') {
    order += "Cheese"
}


var souseType = prompt ('Select the souse:' + '\n' + 'A)' + 'Small' + '\n' + 'b)' + 'Medium' + '\n' + 'c)' + 'Large');

if (freeSize == 'a') {
    order += "Small"
} else if (freeSize == 'b') {
    order += "Medium"
} else if (freeSize == 'c') {
    order += "Large"
}


alert(order)

let option = prompt("1 den 3 ke dein san tandaniz");

switch (option) {
    case "1":
        alert("Siz 1 tandadiniz");
        break;
    case "2":
        alert("Siz 2 tandadiniz");
        break;
    case "3":
        alert("Siz 3 tandadiniz");
        break;
    default:
        alert("qate variant");
}



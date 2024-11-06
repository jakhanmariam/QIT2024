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

var bugerType = prompt ('Select the burger you want:' + '\n' + 'A)' + 'Chicken' + '\n' + 'b)' + 'Meat + ');

if (bugerType == 'a') {
    order += "chicken"
} else if (bugerType == 'b') {
    order += "meat"
} else if (bugerType == 'c') {
    order += "meatless"
}


var drinkType = prompt ('Select the drink you want:');

if (drinkType == 'a') {
    order += "Cola"
} else if (drinkType == 'b') {
    order += "Sprite"
} else if (drinkType == 'c') {
    order += "Fanta"
}


var freeSize = prompt ('Select size of free:');

if (souseType == 'a') {
    order += "Ketchup"
} else if (souseType == 'b') {
    order += "BBQ"
} else if (souseType == 'c') {
    order += "Cheese"
}


var souseType = prompt ('Select the souse:');

if (freeSize == 'a') {
    order += "Small"
} else if (freeSize == 'b') {
    order += "Medium"
} else if (freeSize == 'c') {
    order += "Large"
}


alert(order)



alert("Welcome traveler! You are going on a journey. Your choices determine your destiny");


let playerName = prompt("What's your name?");


var firstChoice = prompt( playerName + " You are in the Forest." + " Do you go " + "left or right?");

if (firstChoice == 'left') {
    alert("Go left, you will find a small cave there!");
} else if (firstChoice == 'right') {
    alert("Go to the right, there you will find people who can help you! But you have cross the river...");
} else {
    alert("You must to make at least one choice!")
}

var secondChoice = prompt("You see a river. Do you swim or boat on a raft?");

if (secondChoice == 'swim') {
    alert("You have crossed the water, hold on so you don't feel the depth!");
} else if (secondChoice == 'boat') {
    alert("You have transformed yourself into a toon and explored a new complex.");
} else {
    alert("You must to make at least one choice!");
}

var thirdChoice = prompt("You have found a treasure chest! Are you going to open it or not?");

if (thirdChoice == "Open"){
    alert('')
}
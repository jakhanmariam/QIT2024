// 1 tapsyrma

let num = 0;

while (num <= 101) {
    if (num % 2 == 0) {
        continue;
    } else if (num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBuzz");
    } else if (num % 3 == 0) {
        console.log("Fizz");
    } else if (num % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log("false");
    }
} 

console.log(num);

// 2 tapsyrma

let score = 5;

do {
    score ++
    var question = +prompt("kazak khandygy kashan kuryldy")
} while (question == 1465)

do {
    score ++
    var question = +prompt("")
} while (question == 1465)

do {
    score ++
    var question = +prompt("kazak khandygy kashan kuryldy")
} while (question == 1465)

alert("true" + score);

// 3 tapsyrma

let num1 = prompt("1 san engiziniz");
let num2 = prompt("2 san engiziniz");

let fours = 1;
let sevens = 1;

let foundFours = false;
let foundSevens = false;

let number = 0;

do {
    if (number % 4 == 0) {
        fours *= number;
        foundFours = true;
    } else if (number & 7 == 0) {
        sevens *= number;
        foundSevens = true;
    }
    number++;
} while (number <= num2);

if (foundFours) {
    console.log("4 ke bolinetin sandardin kobeytindisi" + fours);
} else {
    console.log("4 ke bolinetin sandar tabilmadi");
    
}

if (foundSevens) {
    console.log("7 ge bolinetin sandardin kobeytindisi" + sevens);
} else {
    console.log("7 ge bolinetin sandar tabilmadi");
    
}








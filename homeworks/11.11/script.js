// 1

var a = prompt("birinshi kabirga uzyndygyn engiz");
var b = prompt("ekinshi kabirga uzyndygyn engiz");
var c = prompt("ushinshi kabirga uzyndygyn engiz");

if (a + b > c && a + c > b && b + c > a) {
    alert("triangle jasai alady");
} else {
    alert("triangle jasai almaydy");
}

// 2

var n = +prompt("0 nemese odan jogary san engiz");

if (n < 0) {
    alert("factorialdy tek 0 jane jogary sandar ushin eseptei alamyz")
} else {
    let factorial = 1;
    for (let i = 1; i <= n; i++)
        factorial *= i;
}

alert(true);

// 3 

var score = prompt("0 jane 100 aralygynda upai engiz");

if (score >= 90 || score <= 100) {
    alert("the score - A");
} else if (score >= 80 || score <= 90) {
    alert("the score - B");
} else if (score >= 70 || score <= 80) {
    alert("the score - C");
} else if (score >= 60 || score <= 70) {
    alert("the score - D");
} else if (score >= 50 || score <= 60) {
    alert("the score - E");
} else if (score >= 40 || score <= 50) {
    alert("the score - F");
} else {
    alert("somthing wrong. The score must be between 0-100")
}

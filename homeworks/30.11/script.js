// 1 tasyrma

const numbers1 = [10, 20, 80, 40, 55, 99, 50, 19, 9, 93];

let result = numbers1.filter(number => number >= 50).map(number => number * 2);
console.log(result);

// 2 tapsyrma

let sum = 0;

const numbers2 = [1, 2, 3, 4, 5];

const newNumbers = [6, 7, 8];

numbers2.forEach(number => {
    sum += number;
});

console.log(sum);

// 3 tapsyrma

const numbers = [20, 30, 40, 50, 60];

const result3 = numbers.filter(number => number <= 100).map(number => number * 3)       
 
console.log(result3);





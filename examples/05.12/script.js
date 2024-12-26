// 1

const students = [
    { name: "ali", age: 22, score: 85},
    { name: "aizhan", age: 20, score: 75},
    { name: "aliiya", age: 19, score: 90},
    { name: "erkenaz", age: 23, score: 95},
    { name: "arman", age: 18, score: 100},
];

students.forEach(student => console.log(student.name));

const findAge = () => {
    const twenties = students.filter((student) => student.age >= 20);

    return twenties;
}

console.log(findAge());


const upai = () => {
    const ten = students.map((students) => (students.score * (100 + 10)) / 100);

    return ten;
}

console.log(upai());


const sumOfScores = () => {
    return students.reduce((total, students) => total + students.score, 0);
}

console.log(sumOfScores());


const sortedArray = students.sort((a, b) => b.score - a.score)[0];

console.log(sortedArray);


// 2

const onimder = [
    { name: "chocolate", baga: 1900 },
    { name: "flour", baga: 3000 },
    { name: "egg", baga: 13000 },
    { name: "milk", baga: 20000 },
    { name: "baking powder", baga: 1100 },
];

const jalpySomasy = () => {
    return onimder.reduce((total, onimder) => total + onimder.baga, 0);
}

console.log(jalpySomasy());


function collectAllNames () {
    return onimder.flatMap((onimder) => onimder.name);
}

console.log(collectAllNames());


const filtersOnimder = onimder.filter((onimder) => onimder.baga > 10000);
console.log(filtersOnimder);

function discount () {
    let newOnimder = filtersOnimder.map((onimder) => ({
        name: onimder.name,
        baga: onimder.baga * 0.85,
    }));

    return newOnimder;
};

console.log();

















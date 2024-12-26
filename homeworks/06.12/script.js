let users = [];

for (let i = 0; i < 3; i++) {
    let name = prompt("enter persons name");
    let age = +prompt("enter persons age");

    users.push({ name: name, age: age });
};



users.forEach(user => {
    alert(`name: ${user.name}, age: ${user.age}`);
});


let books = [
    { title: "book1", author: "jw", year: 1900 },
    { title: "book2", author: "qq", year: 2000 },
    { title: "book3", author: "zx", year: 1990 },
]


let bookTitle = prompt("enter books name");

let bookFound = books.find(book => book.title === bookTitle);
if (bookFound) {
    let newYear = prompt("enter the new year");
    bookFound.year = newYear;
};

books.forEach(book => {
    alert(`book: ${book.title}, author: ${book.author}, year: ${book.year}`);
});




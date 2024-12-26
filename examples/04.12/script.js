// const user = { name: 'asan', age: 23, profession: 'IT specialist'};

// const { name, age, profession } = user;
// console.log(name);
// console.log(age);
// console.log(profession);







// const letters = ['a', 'b', 'c'];

// const [letter1, letter2, letter3] = letters;
// console.log(letter1 + letter3 + letter2);





// const author = {
//     authorName: 'mukhtar auezov',
//     year: 1897,
// };

// const book = {
//     title: 'abai joly',
//     pages: 300,
//     author: { ...author }, // spread taralu
// };

// console.log(book);







// const arr1 = [1, 2, 3];

// const arr2 = [ ...arr1, 4, 5];

// console.log(arr2);








// const book = {
//     title: 'abai joly',
//     pages: 300,
//     rating: 5.0,
//     authorName: 'mukhtar auezov',
//     year: 1897,
// };

// const { author, ...rest } = book;
// console.log(author);
// console.log(rest); // kalan bilgileri cikariyor







// const array = [1, 2, 3, 4];

// const [a, ...b] = array;

// console.log(a);
// console.log(b);






const book = { title: "abai joly", author: "mukhtar auezov", year: 1942 };

const { title, author, year} = book;

console.log(title);
console.log(author);
console.log(year);


const fruits = ["apple", "pinapple", "cherry"];

const [a, ...b] = fruits;
console.log(a);
console.log(b);





const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const array = [...arr1,...arr2]
console.log(array);





// const user = { name: 'ali', age: 23, profession: 'IT' };

// const friends = {name: "bekzhan" , name: "aziza" , name: "aliya"};


// const newUser = {
//     ...user,
//     friends,
// };

// console.log(newUser);




// const user = {
//     name: "aizhan",
//     age: 35,
//     profession: "teacher",
//     greet: function () {
//         return 'hello, my name is ' + this.name + 'Im ' + this.age + 'years old ', + 'my profession is ' + this.profession;
//     }
// }


// console.log(user.greet());









const user = {
    name: "aizhan",
    friends: ["dias", "meruert", "almas"],
};


function addNewFriend () {
    let friendName = prompt("add new friend");
    user.friends.push(friendName);
}

addNewFriend();
console.log(user.friends);






// const user = {
//     name: 'Aijan',
//     friends: ['Dias', 'Meruert', 'Almas'],

//     friend: function() {
//         let newFriend = prompt("Dosynnyn esimin engiz!");
//         this.friends.push(newFriend);
//     },
//   }
//   user.friend();
//   console.log(user.friends);




































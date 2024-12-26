// const user = {
//     name: 'Tolganai',
//     age: 19,
//     hobbies: ["swimming, reading, cooking"],
//     listHobbies: function() {
//         return this.hobbies.join('\n')
//     }
// };


// function addHobbies() {
//     let newHobby = prompt('enter hobby');
//     user.hobbies.push(newHobby);
//     console.log(user.listHobbies());
// }

// function listShortHobiies() {
//     return user.hobbies.filter(hobby => hobby.length < 15)
// }

// console.log(listShortHobiies());

// addHobbies();

// const user = {
//     name: "Aliya",
//     age: 19,
//     hobbies: [
//         {name: 'atqa minu', year: 2008},
//         {name: 'atqa minu', year: 2009},
//         {name: 'atqa minu', year: 2019},
//     ],
//     addHobby: function (newHobby) {
//         this.hobbies.push(newHobby)
//     },
//     listHobbies: function () {
//         return this.hobbies.filter((hobby) => hobby.year > 2010);
//     }
// };

// function addNewHobby() {
//     let hobbyName = prompt("enter hobby name");
//     let hobbyYear = prompt("enter hobby start year");
//     let newHobby = {
//         name: hobbyName,
//         year: hobbyYear,
//     };

//     user.addHobby(newHobby);
// }

// console.log(listHobbies());


// addNewHobby();

// console.log(user.hobbies);

// const team = {
//     name: 'barcelona',
//     members: [
//         { name: "ali", hobbies: ['golf', 'football'] },
//         { name: "aizhan", hobbies: ['golf', 'football'] },
//         { name: "aiganym", hobbies: ['golf', 'football'] },
//     ]
// };

// // console.log(team.members[1].hobbies[0]);

// console.log(team.members[1].hobbies.push("he"));

// console.log(team.members.flatMap(member => member.hobbies)); // member.name

const synyp = {
    name: "24/3",
    members: [
        { name: "Aidana", age: 18, subject: ['math', 'history'] },
        { name: "Kamargul", age: 22, subject: ['adebiet', 'history']},
        { name: "Tolganai", age: 19, subject: ['biology', 'algebra'] },
        { name: "Aziza", age: 16, subject: ['literature', 'english'] },
        { name: "Asem", age: 19, subject: ['english', 'biology'] },
        { name: "Nar", age: 19, subject: ['english', 'music'] },
        { name: "Jadyra", age: 22, subject: ['self-knowlege', 'music'] },
        { name: "Zeiin", age: 19, subject: ['math', 'history'] },
        { name: "Azamat", age: 16, subject: ['math', 'physics'] },
        { name: "Asubek", age: 19, subject: ['math', 'biology'] },
        { name: "Erkebulan", age: 18, subject: ['math', 'history'] },
    ],
    findYougest: function () {
        let min = this.members[0].age;

        for (let i = 0; i < this.members.length; i++) {
            if (min > this.members[i].age) {
                min = this.members[i].age
            }
        }
    },
};

console.log('the youngest one is', synyp.members[3]);
console.log(synyp.members.flatMap(member => member.subject));














"use strict";

//
// function logger() {
//   console.log("My name is Alina");
// }

// // calling / running / invoking  function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1); // function declaration

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }; // a function expression that produces a value

//Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, "Alina"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// Functions calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

//

//CODING CHALLENGE 1

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins with the trophy(${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win the trophy.(${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(576, 111);

// //Test 2 data

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// OR

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years0 = new Array(1991, 1984, 2008, 2020); // creating a new array using the array function

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";

// console.log(friends);

// const alina = ["Alina", "Stefanica", 2037 - 1994, "student", friends];
// console.log(alina);

// // Excercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1])
// ];

// console.log(ages);

// Basic Array Operations

// const friends = ["Michael", "Steven", "Peter"];

// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); // Returns -1 because the element does not exist in the array

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes("23"));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

//Coding challenge 2
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2]];

// console.log(bills, tips, totals);

// Objects

// const alina = {
//   firstName: "Alina",
//   lastName: "Stefanica",
//   age: 2037 - 1994,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"]
// };
// console.log(alina);

// console.log(alina.lastName);
// console.log(alina["lastName"]);

// const nameKey = "Name";
// console.log(alina["first" + nameKey]);
// console.log(alina["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Alina? Choose between firstName, lastName, age, job and friends."
// );
// console.log(alina[interestedIn]);

// if (alina[interestedIn]) {
//   console.log(alina[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job and friends."
//   );
// }

// alina.location = "Portugal";
// alina["twitter"] = "@whateverman";
// console.log(alina);

//mini challenge
//Alina has 3 friends, and his best friend is called Michael.

// console.log(
//   `${alina.firstName} has ${alina.friends.length} friends and her best friends is ${alina.friends[0]}.`
// );

// Object methods

// const alina = {
//   firstName: "Alina",
//   lastName: "Stefanica",
//   birthYear: 1994,
//   job: "compliance",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: false,
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;

//   //

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       alina.job
//     }, and she has ${this.driversLicense ? "a" : "no"} drivers license`;
//   }
// };

// console.log(alina.calcAge());

// console.log(alina.age);
// console.log(alina.age);
// console.log(alina.age);
// // console.log(alina["calcAge"](1994));

// //Challenge
// // Alina is a  43 year old analyst, and he has a/no drivers license'
// console.log(alina.getSummary());

// Coding challenge 3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(john.bmi);
// console.log(mark.bmi);

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than John's(${john.bmi}).`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than Mark's(${mark.bmi}).`
//   );
// }

// The FOR loop

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

const alinaArray = [
  "Alina",
  "Stefanica",
  2037 - 1991,
  "analyst",
  ["Michael", "Peter", "Steven"]
];

for (let i = 0; i < alinaArray.length; i++) {
  console.log(alinaArray[i]);
}

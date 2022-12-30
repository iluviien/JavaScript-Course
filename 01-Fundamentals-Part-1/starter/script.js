/* Unit 1
let js = "amazing";

console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);
let PI = 3.1415;


let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof "Jonas");
//console.log(typeof 23);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;
const birthYear = 1991;
//birthYear = 1990;
//const job;
var job = "programmer";
job = "teacher";

lastName = "Schedtmann";
console.log(lastName);

const now = 2037;
const ageAlina = now - 1994;
const ageSarah = now - 2018;
console.log(ageAlina, ageSarah);

console.log(ageAlina * 2, ageAlina / 2, 2 ** 3);
// 2 ** 3 means to the power of 3 = 2 * 2 * 2;

const firstName = "Alina";
const lastName = "Stefanica";

console.log(firstName + " " + lastName);
// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100 ;
x++; // x = x + 1;
x--; // x = x - 1 ;
console.log(x);

// Comparison operators
console.log(ageAlina > ageSarah); // >, <. >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 19;
console.log(now - 1991 > now - 2018);
*/
/* const now = 2037;
const ageAlina = now - 1994;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // x = y = 10

const averageAge = (ageAlina + ageSarah) / 2;
console.log(ageAlina, ageSarah, averageAge);
*/

//CODING CHALLENGE 1

// let weightMark = 78;
// let heightMark = 1.69;

// let weightJohn = 92;
// let heightJohn = 1.95;

// const bmiMark = weightMark / heightMark ** 2;
// const bmiJohn = weightJohn / heightJohn ** 2;
// console.log(bmiMark);
// console.log(bmiJohn);
// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// //CODING CHALLENGE 2

// if (bmiMark > bmiJohn) {
//   console.log(
//     `Mark's BMI of ${bmiMark} is higher than John's BMI of ${bmiJohn}`
//   );
// } else {
//   console.log(`John's BMI of ${bmiJohn} is higher than ${bmiJohn}`);
// }

/*const firstName = "Alina";
const job = "analyst";
const birthYear = 1994;
const currentYear = 2037;

const alina =
  "I am " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  "!";
console.log(alina);

const alinaNew = ` I'm ${firstName}, a ${currentYear - birthYear} old ${job}!`;
console.log(alinaNew);

console.log(`Just a regular string...`);
console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines`);
*/

/*const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving lessons!😁");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years!`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion

// console.log("I am " + 23 + " years old.");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// truthy or falsy values
// 5 falsy values: 0, '', undefined, null, NaN;

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));

// const money = 100;
// if (money) {
//   console.log(`Don't spend it all ;)`);
// } else {
//   console.log(`You should get a job`);
// }
// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined!");
// } else {
//   console.log("Height is not defined");
// }

// Equality operators == and ===

// const age = "18";
// if (age === 18) console.log("You just became an adult(strict)");

// if (age == 18) console.log("You just became an adult(loose)");

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number!");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number!");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }
// // is different operator
// if (favourite !== 23) {
//   console.log("Why not 23?");
// }

"use strict";

// Functions
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} thousand people and its capital city is ${capitalCity}`;
// }

// const descIsleOfMan = describeCountry("Isle of Man", 80, "Douglas");
// console.log(descIsleOfMan);

// Functions declarations vs expressions

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const percPortugal = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

// console.log(percPortugal, percChina1, percUSA1);

// Arrow functions assignment
const percentageOfWorld3 = population => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA33 = percentageOfWorld3(332);

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage} `;
  console.log(description);
};
describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA ", 331);

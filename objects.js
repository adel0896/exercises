"use strict";
const person1 = {
  firstName: "Ade",
  age: 29,
  student: false,
};
const person2 = {
  firstName: "Peter",
  age: 29,
  student: true,
};
person1.firstName = person2.firstName;
person1.age++;
console.log(person1.firstName);
console.log(person2.firstName);

console.log(person1);
console.log(person1.lastName);
person1.lastName = "Radulescu";
console.log(person1);
console.log(person1.lastName);

person1.lastName = undefined;
console.log(person1.lastName);
console.log(person1.middleName);
delete person1.lastName;
console.log(person1.lastName);

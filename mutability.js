// const person1 = {
//   firstName: "Peter",
//   age: 29,
//   student: false,
// };
// const person2 = {
//   firstName: "Other Peter",
//   age: 28,
//   student: false,
// };
// let person3 = person1;
// console.log("person1");
// console.log(person1);
// console.log("person2");
// console.log(person2);
// console.log("person3");
// // console.log(person1.firstName);
// console.log(person3);
// person3.firstName = "Changed";
// console.log("person1");
// console.log(person1);
// console.log("person2");
// console.log(person2);
// console.log("person3");
// // console.log(person1.firstName);
// console.log(person3);
// person3 = person2;
// person2.firstName = "also changed";
// console.log("person1");
// console.log(person1);
// console.log("person2");
// console.log(person2);
// console.log("person3");
// // console.log(person1.firstName);
// console.log(person3);
// person1 = person3;

// const person2 = person1;
// let person3 = person1;
// person2.firstName = "other Peter";
// console.log("person1");
// console.log(person1);
// console.log("person2");
// console.log(person2);
// console.log("person3");
// // console.log(person1.firstName);
// console.log(person3);
// console.log("person1");
// console.log(person1);
// console.log("person2");
// console.log(person2);
// console.log("person3");
// // console.log(person1.firstName);
// console.log(person3);
const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};
const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};
student1.firstName = student2.firstName;
student1.lastName = student2.lastName;
console.log(student1);
console.log(student2);

// const student2 = student1;
if (student1 === student2) {
  console.log("they are the same");
} else {
  console.log("they are not the same");
}

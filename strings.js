"use strict";
//strings exercise
const longline = " a very very very very very very very very veryvery very very long lineeeeeeee \
followed by another very very very very very long line";
console.log(longline);

//template exercise
const name = "Adelina";
const drink = "Coca-cola";
const animal = "cat";
const petName = "Jerry";

console.log(`Hello ${name}, wouldyou like ${drink}?`);
console.log(`My name is ${name}.
I have a ${animal} called ${petName}`);

//exercise lenght and [index]
const len = name.length;
console.log(`${name} is ${len} characters long`);
const name2 = "Albus Percival Wulfric Brian Dumbledore";
const letter = name2[0];
console.log(`The first letter of ${name2} is ${letter}`);
// What is the total number of character, including spaces?
const characters = name2.length;
console.log(`The total number of characters of ${name2} is ${characters}`);
//What is the character at index 2?
const index2 = name2[2];
console.log(`The character at index2 is ${index2}`);
//at index 6?
const index6 = name2[6];
console.log(`The character at index6 is ${index6}`);
// index of first d in Dumbledore
const whatindex = name2.indexOf("D", 20);
console.log(whatindex);
console.log(`First d in dumbledore has the index ${whatindex}`);
// index of last e in Dumbledore
const anotherindex = name2.indexOf("e", 35);
console.log(anotherindex);
console.log(`Last e in dumbledore has the index ${anotherindex}`);
//method .trim() removes spaces beggining and end
const str1 = "    there is    space here \n";
const str2 = str1.trim();
console.log(str1);
console.log(str2);
//method .substring(start, end)
const fullname = "Peter Lind";
const firstname = fullname.substring(0, 5);

console.log(`First name is ${firstname}_`);

//give Albus with .substring
const namealbus = name2.substring(0, 5);
console.log(namealbus);
//give Dubledore with .substring and one parameter
const lastdumb = name2.substring(29);
console.log(lastdumb);
//give "Wulfric"
const wulfnospace = name2.substring(15, 22);
console.log(`_${wulfnospace}_`);
//give " Wulfric"
const wulfspace = name2.substring(14, 22);
console.log(`_${wulfspace}_`);
//give "ian"
const someian = name2.substring(25, 28);
console.log(`_${someian}_`);
//give "bus"
const somebus = name2.substring(2, 5);
console.log(`_${somebus}_`);

"use strict";

sayHello("Zelda");
function sayHello(firstName) {
  console.log(`hello ${firstName}`);
}
const myName = "Zelda";
sayHi(myName);
function sayHi(myName) {
  console.log(`hello ${myName}`);
}
//aici duce mai departe myname pentru ca ala e parametrul dat functiei deci nu conteaza ca am scris firstname, nu ia Scott
// let firstname = "Scott";
// const myNamee = "Zelda";
// saysmth(myNamee);
// function saysmth(firstname) {
//   console.log(firstname);
//   console.log(`hello ${firstname}`);
// }

//aici am dus mai departe myNamee  si am pus parametru ceva complet diferit deci ia myname iar pentru firstname ia global ul
let firstname = "Ade";
const myNamee = "Zelda";
saysmth(myNamee);
function saysmth(firstnameParam) {
  console.log(firstname);
  console.log(`hello ${firstnameParam}`);
}

const Name1 = "Ade";
const Name2 = "Stefi";

sayla(Name1, Name2);
function sayla(firstnameparam, secondnameparam) {
  console.log(`Hello ${firstnameparam} and ${secondnameparam}`);
}

const nameee = "Stefi";
const pettype = "cat";
// const petname = "jerry"
presentPet(nameee, pettype, "Jerry");
function presentPet(firstname, animaltype, animalname) {
  console.log(`My name is ${firstname} I have a ${animaltype} called ${animalname}`);
}
let globalVar = "Freddie";
exp("Hey");
function exp(myParam) {
  globalVar = "Pluto";
  //   myParam = "Dunno";
  console.log(myParam + " " + globalVar);
}

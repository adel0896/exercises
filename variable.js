"use strict";
// there are 7 types of data variables here we tried a few
const bool = true;
const num = 42;
const str = "Peter";
const obj = {
  cats: 2,
  cars: 1,
};
const nothing = null;
let undf;
const symbol = Symbol("symbol");
console.log(bool);
console.log(num);
console.log(obj);
console.log(symbol);
// thats how we console log what type of variable it is
console.log(typeof bool);
console.log(typeof undf);
console.log(typeof nothing);
console.log(typeof somethingelse);

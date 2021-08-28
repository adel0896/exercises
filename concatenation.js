"use strict";
const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

n1 + n2;
s1 + s2;

n1 + s2;
s1 + n2;
console.log(n1 + n2);
console.log(s1 + s2);
console.log(n1 + s2);
console.log(s1 + n2);
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(typeof true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45 ----conteaza ordinea
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log("-9" + 5);
console.log("-9" - 5);
console.log(null + 1);
console.log(undefined + 1);

const value = "";
if (value) {
  console.log("value is truthy");
} else {
  console.log("value is falsy");
}

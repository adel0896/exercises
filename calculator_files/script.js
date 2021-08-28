"use strict";
// window.addEventListener("DOMContentLoaded", start);
// function start() {
//   console.log("function start works");
// }
const firstNumber = Number(document.querySelector("#firstnumber").value);
console.log(firstNumber);
const secondNumber = Number(document.querySelector("#secondnumber").value);
console.log(secondNumber);
const dropvalue = document.querySelector("#operator").value;
let result;
// document.querySelector("#operator").addEventListener("click", checkvalue);
// function checkvalue() {
//   console.log("function check value works");
// }

if (dropvalue === "add") {
  console.log(dropvalue);
  document.querySelector("#calculate").addEventListener("click", calculatesum);
  function calculatesum() {
    console.log("function calculate sum works");
    const result = Number(firstNumber + secondNumber);
    console.log(result);
    showresult(result);
    // document.querySelector("#firstnumber").value = result;
  }
}
if (dropvalue === "sub") {
  console.log(dropvalue);
  document.querySelector("#calculate").addEventListener("click", calculatemin);
  function calculatemin() {
    console.log("function calculate min works");
    const result = Number(firstNumber - secondNumber);
    console.log(result);
  }
}
if (dropvalue === "mul") {
  console.log(dropvalue);
  document.querySelector("#calculate").addEventListener("click", calculatemul);
  function calculatemul() {
    console.log("function calculate mul works");
    const result = Number(firstNumber * secondNumber);
    console.log(result);
  }
}
if (dropvalue === "div") {
  console.log(dropvalue);
  document.querySelector("#calculate").addEventListener("click", calculatediv);
  function calculatediv() {
    console.log("function calculate div works");
    const result = Number(firstNumber / secondNumber);
    console.log(result);
  }
}
function showresult(result) {
  console.log("show result works");
  document.querySelector("#firstnumber").value = result;
}

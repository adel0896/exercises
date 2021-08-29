"use strict";
window.addEventListener("DOMContentLoaded", settingUp);

let firstNumber = Number(document.querySelector("#firstnumber").value);
console.log(firstNumber);
let secondNumber = Number(document.querySelector("#secondnumber").value);
console.log(secondNumber);
let dropvalue = document.querySelector("#operator").value;
let dropdecimal = document.querySelector("#decimals").value;
let checkbox = document.querySelector("#doround").checked;
console.log(checkbox);
let result;

function settingUp() {
  document.querySelector("#firstnumber").addEventListener("input", readNumbers);
  document.querySelector("#secondnumber").addEventListener("input", readNumbers);
  console.log("function setting up works");
  document.querySelector("#operator").addEventListener("change", readOperator);
  document.querySelector("#calculate").addEventListener("click", calculation);
  document.querySelector("#decimals").addEventListener("change", readDecimals);
  document.querySelector("#doround").addEventListener("change", readCheckBox);
  document.querySelector("#clear").addEventListener("click", clearResult);
}
function readNumbers() {
  console.log("readNumbers");

  firstNumber = Number(document.querySelector("#firstnumber").value);
  secondNumber = Number(document.querySelector("#secondnumber").value);

  console.log(firstNumber);
  console.log(secondNumber);
}
function readOperator() {
  console.log("readOperator");
  readNumbers();

  dropvalue = document.querySelector("#operator").value;
  console.log(dropvalue);
}
function readCheckBox() {
  console.log("readCheckbox function works");
  checkbox = document.querySelector("#doround").checked;
  console.log(checkbox);
}

function readDecimals() {
  console.log("readDecimals");

  dropdecimal = document.getElementById("decimals").value;
  console.log(dropdecimal);
}
function calculation() {
  console.log("calculation works");

  if (dropvalue === "add") {
    console.log(dropvalue);

    result = Number(firstNumber + secondNumber);
  }
  if (dropvalue === "sub") {
    console.log(dropvalue);
    result = Number(firstNumber - secondNumber);
  }
  if (dropvalue === "mul") {
    console.log(dropvalue);
    result = Number(firstNumber * secondNumber);
  }
  if (dropvalue === "div") {
    console.log(dropvalue);
    result = Number(firstNumber / secondNumber);
  }
  if (checkbox === true) {
    readDecimals();
    result = result.toFixed(dropdecimal);
  }
  if (checkbox === false) {
    result = result;
  }
  showresult(result);
  readNumbers();
  console.log(result);
}

function showresult() {
  console.log("show result works");
  document.querySelector("#firstnumber").value = result;

  let li = document.createElement("li");
  const resultNode = document.createTextNode(result.toString());
  li.appendChild(resultNode);
  document.querySelector("#results").appendChild(li);
  document.querySelector("#results").scrollTo(0, 10000000);
}

function clearResult() {
  console.log("clear result");
  document.querySelector("#results").innerHTML = "";
}

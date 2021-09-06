"use strict";
const name = "adelina stefania radulescu";

// console.log(name2);

capitalize(name);
function capitalize(nameParam) {
  //   let name2 = nameParam[0].toUpperCase() + nameParam.substring(1).toLowerCase();
  let name2 = nameParam[0].toUpperCase() + nameParam.substring(1, 8).toLowerCase() + nameParam.substring(8).toUpperCase();

  console.log(name2);
  console.log(name);
}

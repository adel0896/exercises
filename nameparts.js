// const fullname = "Peter Heronimous Lind";
// const firstname = fullname.substring(fullname.lastIndexOf(), fullname.indexOf(" "));
// const middlename = fullname.substring(fullname.indexOf(" "), fullname.lastIndexOf(" "));
// // middle name also work like const middlename = fullname.substring(fullname.indexOf(" ") + 1, full.name.lastIndexOf(" "));
// console.log(middlename);
// console.log(firstname);
// const lastname = fullname.substring(fullname.lastIndexOf(" ") + 1);
// console.log(lastname);

// const othername = "Albus Percival Wulfric Brian Dumbledore";
// getNameParts(othername);
// function getNameParts(othername) {
//   const firstName = othername.substring(othername.lastIndexOf(), othername.indexOf(" "));
//   const middleName = othername.substring(othername.indexOf(" ") + 1, othername.lastIndexOf(" ") + 1);
//   const lastName = othername.substring(othername.lastIndexOf(" ") + 1);

//   //   console.log(lastName);
//   //   console.log(middleName);
//   //   console.log(firstName);
//   console.log({ firstName, middleName, lastName });
// }
//learning Parameters
fullName("Potter", "Harry", "James", "Pottypotpot");
function fullName(lastName, firstName, middleName) {
  if (middleName == undefined) {
    fullname = `${firstName} ${lastName}`;
    console.log(fullname);
  } else {
    fullname = `${firstName} ${middleName} ${lastName}  `;
    console.log(fullname);
  }
}
//learning return
let firstname;
function greetings(firstname) {
  return `Hello ${firstname}`;
}
result = greetings("peter");
console.log(greetings("any name"));
console.log(result);
greetings();
const txt = `Greeting is ${greetings("a name")}`;
console.log(txt);
Math.random();
console.log(Math.random());
console.log(greetings("is it me your are looking for?"));
console.log(greetings("is it me your are looking for?").indexOf("me"));
console.log(Math.floor(Math.random) * greetings("is it me your are looking for?").indexOf("me"));

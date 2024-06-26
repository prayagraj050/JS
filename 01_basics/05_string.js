const name = "prayag";
const repoCount = 50

// console.log(name + repoCount + " Value"); // outdated syntax

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`prayag-raj-com`);

// console.log(gameName[3]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(7));
console.log(gameName.indexOf(`r`));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(2, 4)
console.log(anotherString);

const newStringOne = "       prayag      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prayag.com/prayag%20raj"

console.log(url.replace('%20','-'));
console.log(url.includes('prayag'));

console.log(gameName.split('-'));
// Primitive

//  7 types : String, NUmber, Boolean, null, undefined, Symbol, BigInt

// statically typed or dynamic typed
const score = 100
const scoreValue = 100.3 // it is number not decimal or float

const isLoggedIn = false  // boolean
const outsideTemp  = null // it is empty (not zero)
let userEmail;  // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 6868798570981734546n
// console.log(typeof(bigNumber));
 
//  Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // it is an array
let myObj = {        // it is an object
    name: "Prayag",  // it's datatype can be
    age: 21,         // String, Number, boolean, function, array, another object
}

const myFunction = function(){       // variable wala tarika
    console.log("Hare Krisna");      // dataype of function id
}                                    // object function
console.log(typeof myFunction);


// ***********************************************************************

//  Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "prayagrajdot.com"

let anotherName = myYoutubeName
anotherName = "raj"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "prayag@ybl"
}

let userTwo = userOne

userTwo.email = "raj@google.com"

console.log(userOne.email);
console.log(userTwo.email);
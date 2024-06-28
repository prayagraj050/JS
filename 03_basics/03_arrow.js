const user = {
    username: "prayag",
    price: 999,

    welcomeMessage:function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);            
 
// * this in node will give empty object {} and in browser it will give window
// * asked in interview


// function chai(){
//     let username = "prayag"
//     console.log(this.username);        // this works well in object but not in function
// }

// chai()

// const chai = function() {
//     let username = "prayag"
//     console.log(this.username);
// }

const chai = () => {
    let username = "prayag"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {                // basic
//     return num1 + num2
// }

// if {} is used then we have to write return
// if () is used no need to write return keyword

// const addTwo = (num1, num2) => num1 + num2          // implicit return

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "prayag"})

console.log(addTwo(3, 4));

// const myArray= [2, 5, 8, 4, 1]

// myArray.foreach(function () {})
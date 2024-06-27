// var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// for (let i = 0; i < Array.length; i++){
//     const element = array[i];
// }


//  global scopes in console and in the code are different 

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "prayag"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true) {
    const username = "prayag"
    if(username === "prayag"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++++++ interesting +++++++++++++++++


console.log(addone(5));
function addone(num){        // basic function
    return num + 1
}


addTwo(5)
const addTwo = function(num){  // it is also a function but sometimes called ad `expression`
    return num + 2             // variable in js are very powerful they can hold any thing
}                              // hoisting; fun is hold onto an variable


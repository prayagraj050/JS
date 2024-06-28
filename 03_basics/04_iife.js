//  Immediately Invoked Function Expression (IIFE)

(function chai(){                    // named IIFE
    console.log(`DB CONNECTED`);
})();
               // here ; is required to end the invoke

// ()()           // 1st () -> function definition, @nd () -> execution call

//  to remove the pollution caused by global scope, we use iife
//  asked in interview

( (name) => {
    console.log(`BD CONNECTED TWO ${name} `);
})("prayag")


//  use ; semicolon when writing two IIFE
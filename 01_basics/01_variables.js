const accountId = 144553
let acountEmail = "prayag@google.com"
var accountPassword = "12345"
accountCity = "Kanpur"
let accountstate;

// accountId = 2 // not allowed

accountEmail =  "pr@pr.com"
accountPassword = "212112121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])
const account_id = 1234235; // changes in const variable is not allowed
let email_id = "abc@gmail.com"; // changes are allowed in let 
var account_pass = "123456";  // changes are allowed
accountcity = "jaipur";

/* prefer not to use var because of it's issue block scope and functional scope */
/* if we only declare variable and didn;t assign any value it will show udefine */

let accountState
email_id = "xyz@gmail.com";
accountcity = "raipur";
account_pass = "999911";

console.table([account_id, account_pass, accountcity, email_id, accountState])

const accountID = 12345 //const can't be changed
let accountEmail = 'test@gmail.com'
var accountState = 'Mumbai' //not recommended because of block scope issue and functional scope
accountNo = 123 // not recommanded
let accountName; //If the var is declared but no value assigned JS has undefined has value

// accountID = 2
accountEmail = 'dummy address'
accountState = 'alt'
accountNo = 45
console.table([accountID, accountEmail, accountState, accountNo, accountName]);

/* if (condition) {
    // curley braces are scope
} */

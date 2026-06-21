const accountId = 14435
let accountEmail="Rakesh@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

//accountId = 2// not allowed hai
console.log(accountId)
accountEmail="raxes@google.com"
accountPassword="1112211"
accountCity="delhi"
/*hume var use nhi krna hai uski jagah let use krna hai
kyuki bolck scope m issue aa jata hai or fuctional scope m bhi thats by */

console.log(accountId);

console.table([accountEmail,accountCity,accountPassword,accountId,accountState])
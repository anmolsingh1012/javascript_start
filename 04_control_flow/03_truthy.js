//falsy values
// false, 0, -0 ,0n , null, undefined, NaN,""

//truthy values
//'false'," ", "0",[], {}, function(){}

// ?? Nullish coalesing operator

let value
let value2
let value3
value = null ?? 300
value2 = 0 ?? 10
value3 = 10?? 200
console.log(value);
console.log(value2);
console.log(value3);

//ternary operator

//condition ? true : false
const mulaya = 20

mulaya >100 ? console.log("100 se upper hai") : console.log("100 ki niche hai")

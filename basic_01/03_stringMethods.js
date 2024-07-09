const favChar = "Chandler Bing "
const count = 50

console.log(favChar + count + " hahaha")

const mystericalPalace = new String('Bran Castle Transylvania') // here string is treated as object

console.log(typeof mystericalPalace);  // object
console.log(mystericalPalace.__proto__);  // its gives the parantheses....inside these parantheses, there is a vast no. of methods
                                          
console.log(mystericalPalace[5])
console.log(mystericalPalace.toUpperCase())
console.log(mystericalPalace.charAt(5))
console.log(mystericalPalace.indexOf('a'))
console.log(mystericalPalace.trim())
console.log(mystericalPalace.replace(' ', '*~*'))
console.log(mystericalPalace.includes('rans'))
console.log(mystericalPalace.substring(0, 4))
const newString = "anmolsingh"
console.log(newString.slice(-8))
console.log(mystericalPalace.split(' '))









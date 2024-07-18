/* //for of  -> array specific

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);

}

const greeting = "hello world anmol"
for(const greet of greeting){
    console.log(greet);
}
    */

//Maps  ->> key value pairs 
 //unique value   also remember order
const map = new Map()
map.set('In' , "India")
map.set('Uk' , "London")
map.set('Az' , "azarbijan")
map.set('Az' , "azarbijan")

//console.log(map); 

for (const [key, values] of map) {
   // console.log(key, ' : ', values);
    
}
const obj={
    'name' :"takshi",
    'game2':'GOT'
}
// for of loop doesn't work for objects

// for (const [key, values] of obj) {
//     console.log(key, ' : ', values);
    
// }



//for in works for objects not only for objects alone
// it return keys mostly
const language ={
    js :"javascrit",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in language) {
 //   console.log(key, ':' ,language[key]);
   
}


const arr= [1,23,4,5,6]
const lan = ["cpp","java","python","js"]
for(const key in lan){
 //   console.log(lan[key]);
}

const map = new Map()
map.set('In' , "India")
map.set('Uk' , "London")
map.set('Az' , "azarbijan")
map.set('Az' , "azarbijan")

//console.log(map);

// map is not iteratable that's why for in loop do not work for map

for (const [key, values] in map) {
   console.log(key, ' : ', values);
    
}
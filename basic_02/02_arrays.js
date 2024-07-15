// singleton
//Object.create // constructor method


//object literals
const mySym = Symbol("youley")
const obj1 = {
    name :"Anmol",
    "full name" : "Anmol Singh Choudhary",
    [mySym] :"think fast" ,  // square brackets
    age : 22,
    email : "anmolsingh@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Sunday"]
}
//console.log(obj1.name);
//console.log(obj1["name"]);
//console.log(obj1["age"]);
//console.log(obj1["full name"]);
//console.log(obj1[mySym]);  // use square brackets
//console.log(obj1);
//obj1.email = "bhajwal@duck.com"
//console.log(obj1);
//Object.freeze(obj1) // no changes can be made after using freeze method
//console.log(obj1);

//creating a function with the help of object

obj1.greeting = function(){
    console.log("hahaha anmol");
}
obj1.greetingTwo = function(){
    console.log(`my name is ${this["full name"]}`);
}

console.log(obj1.greeting())
console.log(obj1.greetingTwo())


//const tinder = new Object()  // singleton object

const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false
//console.log(tinderuser);

const regularUser ={
    email :"hg@gmail.com",
    fullname:{
        userfullname :{
            fName : "anmol",
            Lname : "singh"
        }
    }
}
//console.log(regularUser);

//console.log(regularUser.fullname.userfullname.Lname); // decreasing nesting

//? gives protection  -> further study

const obj1 ={1: "B0", 2: "BG" }
const obj2 ={3: "B0b", 4: "BGf" }
//const obj3 = { obj1, obj2}
//console.log(obj3);
const obj4 =Object.assign(obj1, obj2); //  it passses the rfernce
//console.log(obj1);
////
//console.log(obj4);
//console.log(obj4 === obj1);
//const obj3 = {...obj1,...obj2} // spread
//console.log(obj3);
//
const users = [
    {
        id :1,
        email : "ghga"

    }
]
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('name'))



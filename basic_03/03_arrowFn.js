user = {
    username : "anmol singh",
    id : 20,
    welcomeMessage : function(){
        console.log(`${this.username} , aaja vai`);
        console.log(this);
    }
}

//user.welcomeMessage()
//user.username = "sonali"
//user.welcomeMessage()
//function chai(){   
//    let username = "takshi choudhary"  // undefined 
//    console.log(this.username);
//}

//arrow function
 // () => {}

// explicit return
//const addtwo = (num1, num2) => {
//    return num1 + num2
//}
//console.log(addtwo(5,7));

// implicit return   ->> no need for return function
//const addtwo = (num1, num2) =>  num1 + num2
//const addtwo = (num1, num2) =>  (num1 + num2)
const addtwo = (num1, num2) =>  ({ username: "anmol"})


console.log(addtwo(5,7));
// additional
const myarray =[2,4,6,8]
myarray.forEach( () =>{})










 



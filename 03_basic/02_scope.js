function one(){
    const username = "anmol"
    function two(){
        const website =" github.com"
        console.log("username")
    }
    //console.log(website);
    two()
}

one()
console.log(addone(4))
function addone(num1){
    return num1 +1
}

console.log(addone(4))

//console.log(addtwo(6))   -> not allowed before initialization

const addtwo = function(num1){ // expression hai yeh
    return num1+2
}
console.log(addtwo(6))
 
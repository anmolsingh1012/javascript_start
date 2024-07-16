/*function print(username){
    if(!username){
        console.log("please enter username");
    }
    return `${username} just logged in`
}

print()
console.log(print("aaani"));

function cal(...num1){ // ...  -> rest operator
    return num1
}
console.log(cal(12,124,214125,121251)); */

const user ={
    name :"aani",
    id : 20
}

function handleObjects(anyobject){
    console.log(`username is ${anyobject.name} and uid is ${anyobject.id}`);
}
//handleObjects(user)

handleObjects({
    name :"yoyoyo",
    id:  864
})

const myArr= [200,2479,245]

function returnarrayvalue(getArray){

    return getArray[1]

}
console.log(returnarrayvalue(myArr));




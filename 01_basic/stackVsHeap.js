// primitive datatypes uses stack memory  -> copy the original data is passed

let myCGPA = 7.81
let correctedCGPA = myCGPA

correctedCGPA = 7.71
console.log(`myCGPA = ${myCGPA}`);
console.log(correctedCGPA);
//non priitive datatypes uses heap memory -> reference is paases means change in original value

let obj1= {
    email : "singh@disposal.com",
    stuId : "20BCS4141",
}

let obj2 = obj1
obj2.email = "kushwaha@yahoo.com"
console.log(obj1.email);
console.log(obj2.email);
const nums = [1,2,3,4,5,6,7,8,9,10]
const initialValue = 0

// const total = nums.reduce( function (acc,currVal){
//     console.log('acc ki value '+acc +' cuurval ki value ' + currVal );
//     return acc + currVal

// },10 )
// console.log(total);

// const myTotal = nums.reduce( (lili, polli)=>(lili + polli),0 )
// console.log(myTotal);

const shoppingCart =[
    {
        item : "jscourse",
        price : 999
    },

    {
        item : "python",
        price: 12000
    },

    {
        item : "datascientiest",
        price : 100000
    }
]
const bill=shoppingCart.reduce( (acc, i)=> acc + i.price ,0)
console.log(bill);
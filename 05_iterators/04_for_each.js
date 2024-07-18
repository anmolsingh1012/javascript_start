const lan = ["cpp","java","python","js","ruby"]
// lan.forEach( function (items){
//     console.log(items);
// } )

// lan.forEach( (item) => {
//     console.log(item);

// } )

function printme(val){
 //   console.log(val);
}
lan.forEach( printme)

//items -> values that are declared or get data from database
// yo -> index
// poo  -> return the whole array
lan.forEach((items, yo, pooo) => {
   // console.log(items,yo,pooo);
    
});

const mycoding = [
    {
        language : "javascript",
        file : "js"
    },
    {
        language : "c++",
        file : "cpp"
    },
    {
        language : "python",
        file : "py"
    },
    
]

mycoding.forEach( (item) =>{
    console.log(item);
    console.log(item.language);
    console.log(item.file);

})


const nums = [1,2,3,4,5,6,7,8,9,0]
//for each do not return values

//filter returns values
const newn=nums.filter( (nums) => nums>=5  )
// console.log(newn);

const huhu=nums.filter( (item) => { // if us scope then return keyword is mandatory
    return item <5

} )
//console.log(huhu); // return empty array

// use of for each
const newarr= []
nums.forEach( (boom) => {
    if(boom > 2){
        newarr.push(boom)
    }
})
// console.log(newarr);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbook = books.filter( (bk) => bk.genre ==='History' && bk.edition >2000 )
  console.log(userbook);

userbook = books.filter( (lu) =>{
    return lu.publish >2000

})
console.log(userbook);
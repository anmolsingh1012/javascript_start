
//iife
//immediately invoked function expression
(function coffee(){
    console.log("david off is a good brand for coffee");
})();   // need for semi colon

( () => {
    console.log("coffee");
} )();

//taking argument and parameter
( (name) => {
    console.log(`${name}, haan vai pee li coffee`);
} )("karan dogree");
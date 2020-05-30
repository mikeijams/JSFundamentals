//arrow functions

//normal function declaration
function coffee(){
    return 'coffee is good';
}

//normal function expression

let tea = function(){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

//arrow functions are always anonymous
//do not get hoisted
//arrow function expression


let hotChocolate = () => {
    return 'hot chocolate is king';
}

console.log(hotChocolate());

let animals = (kittens, puppies) => { return `i have ${kittens} (cats) and ${puppies} (dogs).`};
console.log(animals(3, 2));

//concise vs block body
//concise body
let apples = x => `There are ${x} apples`;
console.log(apples(10));

//block body
let bananas = (x) => {
    return `there are ${x} bananas`;
}
console.log(bananas(5));

// return key must be used in block-body function

let func = () => 'hi';
console.log(func());
let secondFunc = () => 'hi';
console.log(secondFunc());
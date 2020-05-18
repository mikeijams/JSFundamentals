/*
Variables
*/

var a =1;
var b =2;
console.log(a+b);

// notes on naming var:
// var must begin with letter, underscore, or dollar sign
// numbers may follow the above characters but not come first
// javascript is case sensitive 

/*
Declarations refer to when we declare a variable

Iniitalizations refer to when a variable is assigned a value

assignment refers to giving a variable a value. can be after initialization.
*/

var x;
console.log('declaration 1:', x); //undefined

x = 10
console.log('initialization 1:', x); //10

x=33
console.log('assignment 1', x); //33

var y;
console.log(y);

y= 'hello';
console.log(y);

y = 'you are my fren';
console.log(y);

/*Var , let, and const: 

var = old keyword for var
let = new keyword for variables 
const = also new, declares unchangeable variables 
*/

let tonight = 'great!';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

elevenFifty = 'Super!';

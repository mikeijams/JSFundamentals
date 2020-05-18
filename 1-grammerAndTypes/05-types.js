//Boolean
var on = true;
console.log(on);

let off = false;
console.log(false);

//boolean can rep : true false, yes/ no, on/off, 0/1,

//Undefined
//variable has been declared but not assigned a value

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//null
//a variable has been declared and assigned a value of null

var empty = null;
console.log(empty);

//Null and undefined both represent variables with no values inside
//null values are for gag gifts given intentionally with nothing inside
//undefinded values are gifts given when the person forgot to put the gift inside

//numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//stringa
//String is any vale within quotes. JS spits out any value within the quotes
let string1 = "double quotes";
let string2 = 'single quotes';
console.log(string1, string2);

//string concattenation
let first = 1050 + 100;
let second = '150' + '100';
console.log(first, second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third);


//interpolation
//lets you use string w dynamic content 

//ex. 1
let age = 32;
let string = `my age is: ${age}`
console.log(age);

//objects:
/*whats is an object
an object is a container that stores property names and their values
(it can be multiple data types)

Denoted  by {}
Have keys and values-- color (key): 'blue' (value), seperated with colon, each
key-value pair is seperated with a coma */

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true,
}
console.log(hulk);
console.log(hulk.age);
console.log(hulk.color);
console.log(typeof hulk);

//Arrays
/*
Store multiple values in a ordered way. They, too hold multiple data types. 
Denoted by []. 
Has values ('blue', 'green', 'yellow'), seperated by commas
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush']
console.log(stepsToBrushTeeth);
console.log(typeof stepsToBrushTeeth);
console.log(stepsToBrushTeeth[3]);






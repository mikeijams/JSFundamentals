//Functions

//general ideas: at the broadest level functions do the following:
// they take some input which the fucntion will handle / process
// they process the input given to them
// they usually, but not always, return some value
// they can be invokes (used) as many time as we want, cutting down on code repetition

// ex one

function newFunct(num){
  return  num + 1; 
}

console.log(newFunct(7));
console.log(newFunct(10));
console.log(newFunct(11));
console.log(newFunct(-2));

//ex two

function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence(`Johnathan`, `Huer`));
let superImportantSentenence = sentence('Nicky', 'Disbourough');
console.log(superImportantSentenence);
let dietCoke = sentence ('Michael', 'Ijams')
console.log(dietCoke);

// build a function that takes a complex type -- an array in this case, and console.logs
//each item in the input array

let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10];

function iteratorFunc(inputArr){
 for (let element of inputArr){
     console.log(element);
 }
}
iteratorFunc(arr);
iteratorFunc(arr2);


let cats = [ 'tabby', true, [1,2,3], 5]

function idk(array){
  for(let chloe of array){
    console.log(chole);
  }
}
console.log(cats);


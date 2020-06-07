// arrays

//what is an array? 

//has []
// can hold multiple data types
//arrays can list data types in an ordered numbered way

let students = ['tony', 'marshall', 'reese', 'ray', 23, true, ['ryan', 'iesha']];

// console.log(typeof students); // typeof doesnt tell me my variable is an array --> object
//console.log(students instanceof Array);//instanceof tells me my array is an array
//console.log(students[2]);
//console.log(students[1]);
//console.log(students[6]);

let name = students[6][1];
console.log(`Hello ${name} you look nice today`);

//for of loop --> gives values of array
let food = ['pecan pie', 'shrimp', 'quesdilla', 'cheescake', 'hot dog'];

// for (f of food){
// console.log(f+' is amazing!');
// }

//array methods
// food.push('pizza');// added to end of our array 
// console.log(food);

// food.splice(1, 1, 'bananas');//asks for insertion point, how many things to remove, and how many to add
// console.log(food);

// food.splice(2, 0 ,'sweet potato pie');
// console.log(food);

// food.pop();//removes last element of array
// console.log(food);

// food = food.slice(2,5); //the first number is the first element to the slice from thr array
//while the second is the stop position (not to be included)
// console.log(food);

//forEach allows us to iterate with with loops specifically and we can directly grab both 
//the elements and their index numbers

// food.forEach( (f) => console.log(f));

food.forEach((food, index) => {
    console.log(food);
    console.log(index);
})

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}`);
})

let movies = ['300', 'snow white', 'phantom menace', 'the watchmen', 'the sound of music'];

movies.push('the force awakens');
console.log(movies);
movies.splice(3, 1, 'league of extraordinary gentlemen');
console.log(movies);

movies.forEach(movie => console.log(movie));
console.log(movies.length);

//check if we are working with an array 
//then flip the values within the array (what was in index 4 is now in 0, 3, to 1 etc)
//using a method only, lets print the values of the newly arranged array

let arr = new Array (1, 2 ,3 ,4 ,5);

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}

sodas = ['pop', 'coke', 'fanta', 'pepsi']

sodas.forEach(soda => () )





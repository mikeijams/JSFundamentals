//Loops off a quick and easy way to do something repaetadly 

// they are many diff kind of loops but they all do roughly the same thing:
/*
for statement
do while 
while 
labeled
break
continue
for in
for of
.forEach
.map
*/

//loop structure
//a. creation of index variable
//b. run conditon
//c. change to indexing variable

//count to 10 from 0 and log the number:
for(let i = 0; i <= 10; i++){
    console.log(i)
}

//loops can run infinitley 


//counts to -25 by -3, starting 2, logs the numbers
for (let i = 2; i >= -25; i =i -3) {
    console.log(i);
}

// display letter in name individually
let name = 'kinkaid'
for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//for loops can use lots of variables
let start = 2;
let stop = Math.floor(Math.random()+30)
let increment = 3;

for (let i = start; i<= stop; i = i + increment){
    console.log(i);
}

// say the alphabet backwards from f
let name = 'abcdefghijkl'
for (let i = 0)

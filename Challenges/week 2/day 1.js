

for (let i = 0; i <= 100; i++){
if (i % 3 === 0) {
    console.log('fizz'); 
    } else if (i % 5 === 0) {
     console.log('buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
console.log('fizz buzz');
    } else (i % 3 != 0 && i % 5 != 0)
        console.log(i);
    }
    

for(let i = 0; i <= 100; i++) {
    i % 15 == 0 ? console.log('fizz buzz'):
    i % 3 == 0 ? console.log('fizz'):
    i % 5 == 0 ? console.log('buzz'):
    console.log(i);
};



for (let i = 0; i <= 100; i++){
switch(true){
    case i % 3 === 0 && i % 5 === 0 :
        console.log('fizz buzz');
        break;
    case i % 3 === 0 :
        console.log('fizz');
        break;
    case i % 5 === 0 :
        console.log('buzz');
        break;
    default:
        console.log(i);
}
}



/////pies

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry',
 'sugar', 'lemon meringue', 'chicken pot', 'shepherd', 'key lime'];

for (let i = 0 ; i < pies.length ; i++){
    //console.log(i);
  if (i == 0 || i == 1 || i == 2 || i == 4 || i == 6 || i == 9) {
console.log(`${pies[i]} is a fruit pie.` );
    } else {
        console.log('this is not a type of fruit pie')
    }
}


let pieArray = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry',
 'sugar', 'lemon meringue', 'chicken pot', 'shepherd', 'key lime'];

 for (pie of pieArray) {
     console.log(pie);
    if (pie.includes(('apple') || ('blueberry') || ('peach') || ('cherry') || ('lemon meringue') || ('key lime')) 
        console.log(`${pie} "is a fruit pie." );
    }



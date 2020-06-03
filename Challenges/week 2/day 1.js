

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

let pieArray = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry',
 'sugar', 'lemon meringue', 'chicken pot', 'shepherd', 'key lime'];

for (let i = 0 ; i < pieArray.length ; i++){
for (pie in pieArray){
  if (pieArray.includes[0] || [1] || [2] || [4] || [6] || [9]) 
console.log(`${} is a fruit pie.` );
    }
}


let pieArray = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry',
 'sugar', 'lemon meringue', 'chicken pot', 'shepherd', 'key lime'];

 for (pie of pieArray) {
     console.log(pie);
    if (pie.includes(('apple') || ('blueberry') || ('peach') || ('cherry') || ('lemon meringue') || ('key lime')) {
        console.log(`${pie} "is a fruit pie." );
    }

let movie = {
nameOfMovie: 'Kill Bill: Volume 1',
runTime: '111 minutes',
genre: 'Action',
characters:[ {characterOne: {name: "Beatrix 'The Bride' Kiddo", age: '27', items: ['Katana Sword', 'Yellow jumpsuit']}}, 
{characterTwo: {Name: "Elle Driver", Age: "32", items: ["Eye patch", "Snake"]}}
        
       
        console.log(movie.nameOfMovie);
        console.log(movie.runTime);
        console.log(movie.characters);
        console.log(movie.characters[0].name);
        console.log(movie.characters[0].items[0]);

        let movie = {
            nameOfMovie: 'Kill Bill: Volume 1',
            runTime: '111 minutes',
            genre: 'Action',
            characters:[ {name: "Beatrix 'The Bride' Kiddo", age: '27', items: ['Katana Sword', 'Yellow jumpsuit']}, 
             {Name: "Elle Driver", Age: "32", items: ["Eye patch", "Snake"]}]}
            
            console.log(movie.nameOfMovie);
            console.log(movie.runTime);
            console.log(movie.characters);
            console.log(movie.characters[0].name);
            console.lof(movie.characters[0].items[0]);

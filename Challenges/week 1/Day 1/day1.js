//*challenge 1
//who's name is longer?

//bronze
let name = "Michael";
let friend = "Alex";

console.log(name.length);
console.log(friend.length);

//silver
if (name.length > friend.length );{
    console.log(`Wow, ${name} you have a really long name!` )
}

//gold
if (name.length > friend.length ){
    let letters = name.length - friend.length
    console.log(letters)
    console.log(`My name is longer than yours by ${letters} letters.`)
}  else if  (name.length < friend.length) {
    console.log(`Wow, ${friend}, your name is shorter than mine`)
} else {
    console.log(`${friend}'s name is shorter by ${letters} letters.`)
}

// challenge 2

//bronze
let challengeTwo = {
     a: 'eleven fifty',
     b: 5,
     c: true,
     d: {1:2}
}


console.log(typeof challengeTwo.d);
console.log(typeof challengeTwo.b);
console.log(typeof challengeTwo.c);
console.log(typeof challengeTwo.a);

//silver
let value = undefined

if (typeof value === 'string' ) { 
    console.log('thing is a string');
} else if ( typeof value === 'number' ) {
    console.log('this is a number');
}  else if (typeof value === 'boolean') {
    console.log('this is a boolean')
}  else if ( typeof value === 'object'){ 
    console.log('this is an object')
} else { 
    console.log('what are you?')
}

//gold
(typeof value === 'string') ? console.log('this is a string') :
(typeof value === 'number') ? console.log('this is a number') :
(typeof value === 'boolean') ? console.log('this is a boolean') :
(typeof value === 'object') ? console.log('this is an object') :
 console.log('what are you?');




//IF ELSE
let weather = 75;

if (weather < 70){
    console.log('wear a jacket');
} else {
    console.log('No jacket necessary')
}

//you can blend complex conditionals and if else statment based upon your needs

if (weather > 70 && typeof weather === 'number'){
    console.log('This weather is amazing!');
} else {
    console.log('Either the temperature is cool, the variable is not a string or both');
}

//ELSE IFF

//if-  elseif statments can be changed 

let age = 30;
if (age >= 25){
console.log('yay, you can rent a car!');
} else if (age >= 21){
    console.log('yay, you can drink!');
} else if (age >= 18){
console.log('yay, you can vote!');
} else { 
    console.log('sorry, you are too young to do anything fun');
}
 
 



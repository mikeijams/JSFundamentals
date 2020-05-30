console.log(num);
sayHi();

var num = 12;
console.log(num);

function sayHi() {
    console.log('Hi!');
    var a ='hello';
    console.log(a);
    console.log(num);
}


///scope

let myVar = 1;
function b(){
    console.log('function b', myVar);
}

function a(){
    console.log('function a');
    let myVar = 2;
    b();
}

a();

function a() {
    console.log('fucntion a');

    function b(){
        console.log('function b', myVar);
    }
    let myVar = 2;
    b();
}
a();


//what is scope?

//JS has both local and global scope 

var x = 12; // 

function scope(){
    var x = 33;
    console.log(x);
}

scope(); //uses 9
console.log(x);//uses 5

var x = 12;
 
function scope(){
    x = 33;
    console.log(x);
}

scope()
console.log(x);

//ex 3
var x = 1

function scope(){
    var x = 2;
    function scopeInner(){
      var x = 3;
      console.log(x); //3
}
  scopeInner(); 
  console.log(x); //2
}
scope(x);
console.log(x) //1

//ex 4 contrasts w 5

var x = 12

function scope(){
    var x = 33; 
    if (true){
        let x = 45;
        console.log(x);//45
    }
    console.log(x);//33
}
scope();
console.log(x);

//example 5 contrast w 4 
var x = 12;
function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x);
    }
    console.log(x);
}
scope();
console.log(x);


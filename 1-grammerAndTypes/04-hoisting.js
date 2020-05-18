//hoisting

//ex 1
console.log(scissors);
var scissors = 'blue';

//ex breakdown:
var scissors;
console.log(scissors);
scissors = 'blue';

//ex2
fuction hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}
hoistTest();

//ex 2 breakdown
function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}
hoistTest();
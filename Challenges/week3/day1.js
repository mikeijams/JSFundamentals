
function countingSum(start, stop){
    //console.log(start, stop);
    let sum = start; //starts off as 1
            // i=2
    for (let i = start; i <= stop; i++ ){
        console.log(i);
        console.log(sum);
        sum = sum + 1; // summ 1 + 2
        console.log(sum); // 3
    }
    console.log(sum);
}

countingSum(1,100);

function countingSum(start, stop) {
    let sum = start;
    for (i = start + 1; i <= stop; i++) {
      sum += i
      // console.log(sum)
    }
    console.log(sum)
  }
  countingSum(1, 100) // = 5050
  countingSum(35, 77) // = 2408
  countingSum(234, 567) // = 133767


  pets = { animal: 'cat', name: 'chloe', gender: 'female', age: 6, likes: [sleeping, eating, scatching]}
 

function trap(b1, b2, h){
   let sum = .5 * (b1 + b2)  * h
    console.log(sum)
}

trap(3,6,7);

function repl(num){
    for (let num = 0; num <= 10; num++){
   } if (num % 2 === 0) {
   console.log('The number is even');
   } else console.log('the number is odd');
   }
   
   repl();
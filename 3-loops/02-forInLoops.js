

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student){
    console.log(item);
    console.log(student[item]);
}



let catArray = [ 'tabby', ' brittish shorthair', 'burmese', 'maine coone', 'rag doll']

for (cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

//wrte a for-in loop that capitalizes the first letter of a name

let instructor = "MICHAEL";
let capName;

for (n in instructor){
    if (n == 0){
       capName = instructor[n].toUpperCase(); 
    } else {
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);



let nameArray = ['michael', 'john', 'sarah', 'layla']

for (n in nameArray){
    console.log(n);
    console.log()
}




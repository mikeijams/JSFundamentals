setTimeout(() => console.log('this is a test of timeouts'), 1000)

let promise = new Promise(function(resolve,reject){
    setTimeout(() => {
        if (false){
            resolve('success');
        }else{
            reject('failure');
        }
    }, 3000);
})

promise
.then(success => console.log(success)) //blah = success
.catch(err => console.log(err))


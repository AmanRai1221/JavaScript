const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, network calls, etc
    setTimeout(function(){
        console.log('Async task completed');
        resolve();
    }, 2000);
})

promiseOne.then(function(){
    console.log('Promise consumed');
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 completed');
        resolve();
    }, 2000);
}).then(function(){
    console.log('Promise 2 consumed');   
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Chai', email: 'chai@example.com'})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
    // console.log(user.username);
    // console.log(user.email);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "hitesh", password: '12345'})
        }else{
            reject('ERROR" Somthing went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: '1234'})
        }else{
            reject('ERROR:JS went wrong')
        }
    }, 1000)
})
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

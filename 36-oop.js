const user = {
    username: "hitesh",
    password: 1234,
    logedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}
// console.log(user);
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("Chai Aur Code", 11, false)

console.log(userTwo);
console.log(userOne.constructor);

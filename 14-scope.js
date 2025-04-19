//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);

}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // Error: website is not defined

    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);  
    }
    // console.log(website);  // Error: website is not defined
}

// console.log(username); //Error: username is not defined


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num) {
    return num + 1
}

// console.log(addTwo(5)) // Error: Cannot access 'addTwo' before initialization

// addTwo(5)
// const addTwo = function (num) {
//     return num + 2
// }
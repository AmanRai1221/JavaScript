// JavaScript is a dynamic language

//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //Array
let myObj = {         //Object
    name: "hitesh",
    age: 22,
}

const myFunction = function () {    //Function
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)
// Primitive values are stored on the stack, while non-primitive values are stored on the heap.
// When a variable is declared, a memory location is allocated on the stack for the primitive value.
// When a non-primitive value is assigned to a variable, a memory location is allocated on the heap and the variable holds a reference to that location.

let myNumber = 10;
let myOtherNumber = myNumber;

myNumber = 20;

console.log(myNumber); // Output: 20
console.log(myOtherNumber); // Output: 10

let userOne = {     //Heap variable
    name: "John",
    age: 25,
}

let userTwo = userOne;

userOne.name = "Aman";

console.log(userOne.name); // Output: Aman
console.log(userTwo.name); // Output: Aman

// https://262.ecma-international.org/5.1/#sec-11.4.3
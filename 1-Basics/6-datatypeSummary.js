/*There are mainly 2 types of datatypes in JS: Primitive and Non-Primitive.
They are divided based on how data is stored and accessed in memory.
*/

// 1 - Primitive Types -> 7 types → Call by value
// String, Boolean, Number, null, undefined, Symbol, BigInt

"use strict";

let id = Symbol('123');
let anotherId = Symbol('123');
console.log(id === anotherId); 
// Output: false → Each Symbol is always unique, even if the description is the same

let num = 123456678343n; 
// ✅ BigInt → Use 'n' at the end for big integers

// 2 - Reference / Non-Primitive Types → Call by reference
// Includes: Arrays, Objects, Functions

let arr = ["Hunny", "Mangal", "Kumar"]; // Array

let myObj = {
    name: "Hunny", // Object
    age: 20
};

let myFunc = function () {
    console.log("Hello World, I am in a function"); 
    // ✅ In JS, functions are first-class citizens (can be stored in variables)
};

// typeof will help to find the datatype of a value

console.log(typeof "Hunny");        // string
console.log(typeof 123);            // number
console.log(typeof true);           // boolean
console.log(typeof undefined);      // undefined
console.log(typeof null);           // object ❌ (this is a historical bug in JS)
console.log(typeof id);             // symbol
console.log(typeof num);            // bigint
console.log(typeof arr);            // object ✅ (arrays are objects)
console.log(typeof myObj);          // object
console.log(typeof myFunc);         // function ✅ (function is a special kind of object)

// 🔍 typeof Summary Table:

/*
| Value           | typeof Result |
|----------------|----------------|
| "abc"          | "string"       |
| 123            | "number"       |
| true           | "boolean"      |
| undefined      | "undefined"    |
| null           | "object" ❌     |
| Symbol("x")    | "symbol"       |
| 123n           | "bigint"       |
| [1, 2, 3]      | "object"       |
| {a: 1}         | "object"       |
| function(){}   | "function" ✅   |
*/


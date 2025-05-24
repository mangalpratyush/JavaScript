"use strict";

// 🧠 STRING TO NUMBER CONVERSION
let string = "123";
let stringToNumber = Number(string);
console.log(stringToNumber);            // Output: 123
console.log(typeof stringToNumber);     // "number"

string = "123abc";
stringToNumber = Number(string);
console.log(stringToNumber);            // Output: NaN (Not a Number)
console.log(typeof stringToNumber);     // Still "number" (NaN is a special number value)

// ✅ CONVERTING TO STRING
// Use String() function or .toString() method
string = String(undefined);
console.log(string);                    // Output: "undefined"

// 🧠 STRING TO BOOLEAN CONVERSION
string = "";
let bool = Boolean(string);
console.log(bool);                      // false (empty string is falsy)

string = "hello";
bool = Boolean(string);
console.log(bool);                      // true (non-empty string is truthy)

// 🧠 NUMBER TO BOOLEAN CONVERSION
let int = -10;
bool = Boolean(int);
console.log(bool);                      // true (all non-zero numbers are truthy)

int = 0;
bool = Boolean(int);
console.log(bool);                      // false (only 0 is falsy)

// 🧠 SPECIAL CASES WITH Number()
int = Number(undefined);
console.log(int);                       // NaN

int = Number(null);
console.log(int);                       // 0

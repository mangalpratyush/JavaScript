// console.log(2 / 3); 
// Output: 0.666... (✅ Correct)
// NOT 2 — this is a real division, not integer division like in some languages.

// console.log(2 ** 3); 
// Output: 8 (✅ Exponentiation — 2 to the power 3)

let str1 = "Pratyush";
let str2 = " Mangal";
let str3 = str1 + str2; // ✅ String concatenation
// console.log(str3); // "Pratyush Mangal"

// Type Coercion with String + Number:
console.log("1" + 2 + 3);   // Output: "123" → left to right: "1"+2="12", then "12"+3="123"
console.log("1" + "1");     // Output: "11"
console.log("1" + 5);       // Output: "15"
console.log(1 + 2 + "5");   // Output: "35" → 1+2=3, then 3+"5"="35"
console.log(1 + "3" + 6);   // Output: "136" → 1+"3"="13", then "13"+6="136"

// 🔑 Rule: The first operand decides how the rest are interpreted.
// If first operand is string → entire expression is treated as string concatenation.

let num1 = 10;
console.log(num1++); // Output: 10 → Post-increment returns old value, then adds 1 (num1 becomes 11)
console.log(++num1); // Output: 12 → Pre-increment adds first, then returns new value

const num2 = ++num1;
console.log(num2); // Output: 13

// Unary Plus operator:
console.log(+true);  // Output: 1 → true is coerced to 1
// console.log(true+); // ❌ SyntaxError → "+" must be between values

console.log(+"");    // Output: 0 → Empty string is coerced to 0

// ❓ Doubt: Why does +"" give 0 instead of converting false to true?
// ✅ Answer: "" is a falsy value, but `+""` is **numeric coercion**, not logical.
// So:
//   +""   → 0
//   +false → 0
//   +true  → 1
//   +"123" → 123
// It's not about boolean toggling; it's about converting the value to a number.

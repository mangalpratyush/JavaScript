"use strict"; // Enforce modern JavaScript rules (prevents accidental errors)

// Variable Declarations
let name = "Hunny";            // string
let age = 19;                  // number
let isSleeping = false;       // boolean
let state;                     // declared but not initialized → undefined
let file = null;              // explicitly set to 'null'

// Do not use alert() in Node.js environment
// alert(3 + 3); // works in browser, not in Node.js

/*
📚 JavaScript Data Types

🔹 1. **Primitive Types** (single values)

- `number` → for integers and decimals (e.g., 42, 3.14). Range- Number.MIN_SAFE_INTEGER = -(2^53 - 1) = -9,007,199,254,740,991
Number.MAX_SAFE_INTEGER =  (2^53 - 1) =  9,007,199,254,740,991. Will take decimal values.
- `bigint` → for large integers beyond safe range (e.g., 9007199254740991n)
- `string` → text inside quotes ("Hello" or 'World')
- `boolean` → true or false
- `undefined` → variable declared but not assigned a value
- `null` → intentionally empty (assigned by developer)
- `symbol` → used for unique identifiers (advanced topic)

🔹 2. **Non-Primitive (Reference) Types**

- `object` → used to store key-value pairs or more complex data

⚠️ Special Notes:

- `typeof undefined` → "undefined"
- `typeof null` → "object" (this is a long-standing bug in JavaScript)

✅ Best Practices:

- Use `"use strict";` to catch common mistakes
- Always declare variables with `let` or `const` (never assign without declaring)
- Use `const` by default; use `let` when you plan to reassign
*/

console.log(typeof undefined); // Output: undefined
console.log(typeof null);      // Output: object (this is a known quirk)

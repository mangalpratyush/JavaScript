const accountId = 12345;             // constant - cannot be reassigned
let emailId = "pmangal@gmail.com";   // block-scoped variable - can be updated
var city = "Jaipur";                 // function-scoped - avoid using
state = "Rajasthan";                 // creates a global variable (bad practice)

// Updating variables
emailId = "hulala@hulala.com";
city = "Delhi";
state = "Punjab";

let number;  // declared but not initialized → value is 'undefined'

console.table([accountId, emailId, city, state, number]);

/*
📝 NOTES:

✅ const:
- Used when you don't want to reassign the variable.
- Must be initialized at the time of declaration.
- Block scoped (inside { }).

✅ let:
- Preferred for variables that may change.
- Block scoped (inside { }).

❌ var:
- Function scoped (not block scoped) → leads to bugs in large code.
- Avoid using in modern JavaScript.

❌ Assigning without declaration (e.g., state = "Punjab"):
- Declares a global variable implicitly (bad practice).
- Makes code harder to debug and maintain.
- Avoid this by always using let/const.

✅ undefined:
- A variable declared but not assigned has a value of `undefined`.
- Not an error — just means "not assigned yet".

🧠 BEST PRACTICE:
- Always use `const` unless the value will change, then use `let`.
- Never use `var` or undeclared assignments (e.g., `state = ...`).
*/

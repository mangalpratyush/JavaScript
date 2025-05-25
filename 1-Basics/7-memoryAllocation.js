/*
There are 2 types of memory allocation in JavaScript:
1 → Stack (used for Primitive Data Types)
2 → Heap  (used for Non-Primitive / Reference Data Types)

✅ Primitive data types (string, number, boolean, null, undefined, symbol, bigint):
- Stored in Stack
- When assigned or passed, a **copy** of the value is created

✅ Non-Primitive data types (arrays, objects, functions):
- Stored in Heap
- The variable in Stack holds a **reference (pointer)** to the location in Heap
- When assigned or passed, the **reference** is copied (not the data)
*/

let num1 = 100;
let num2 = num1;
num2 = 200;
// Here no change in num1 will occur, as a copy of num1 is passed to num2 (primitive → stack)
console.log("num1:", num1); // 100
console.log("num2:", num2); // 200

let obj1 = {
    name: "Raghu",
    email: "raghu@joggle.com"
};

let obj2 = obj1; // Reference is copied (not the object itself)
obj2.email = "raghu@juggle.com";

console.log(obj1);
console.log(obj2);
// ✅ Output: both obj1 and obj2 will reflect the updated email
// Because both are pointing to the same memory location in the heap

/*
🧠 Summary:
- Stack stores variables and function calls
- Heap stores complex data (objects, arrays, functions)
- Primitive = Pass by Value → separate copies
- Non-Primitive = Pass by Reference → same memory, changes reflect everywhere
*/

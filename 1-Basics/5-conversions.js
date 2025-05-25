// ✅ Normal relational comparisons work like C++ for same types
console.log("2" > 1);       // true → "2" is coerced to number 2
console.log(true > 1);      // false → true → 1; so 1 > 1 → false
console.log(true == 1);     // true  → equality coercion: true → 1
console.log(true < 1);      // false → 1 < 1 is false
console.log(false > 1);     // false → 0 > 1 is false
console.log(false == 1);    // false → 0 != 1
console.log(false < 1);     // true  → 0 < 1 is true

// ✅ Comparisons involving null
console.log(null > 0);      // false → null → 0, so 0 > 0 → false
console.log(null == 0);     // false → == does NOT coerce null to 0
console.log(null < 0);      // false → null → 0, so 0 < 0 → false

// ✅ Comparisons involving undefined
console.log(undefined > 0); // false → undefined becomes NaN → comparison is false
console.log(undefined == 0);// false → undefined only equals null with ==
console.log(undefined < 0); // false → undefined → NaN → always false

//Strict equality-> === Checks value and datatype both.
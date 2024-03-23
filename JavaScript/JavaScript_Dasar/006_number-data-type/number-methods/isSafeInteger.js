// isSafeInteger digunakan untuk mengetahui apakah sebuah nilai safe integer atau bukan

/* <===============================================================================> */
/* <===============================================================================> */

console.log(Number.isSafeInteger(42)); // Output: true
console.log(Number.isSafeInteger(9007199254740991)); // Output: true
console.log(Number.isSafeInteger(9007199254740992)); // Output: false
console.log(Number.isSafeInteger(1.23)); // Output: false
console.log(Number.isSafeInteger("42")); // Output: false

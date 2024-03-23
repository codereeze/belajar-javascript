// null coalescing operator adalah operator yang digunakan untuk memberi nilai default ketika ekspresi yang dinilai menghasilkan null atau undefined
// untuk penggunaanya kita bisa menggunakan double tanda tanya ( ?? )

/* <===============================================================================> */
/* <===============================================================================> */

// jika ekspresinya null
let firstName = null ?? "Nama depan tidak diketahui";
console.log(firstName); // Nama depan tidak diketahui


// jika ekspresinya undefined
let middleName = undefined ?? "Nama tengah tidak diketahui";
console.log(middleName); // Nama tengah tidak diketahui


// jika ekspresinya ada
let lastName = "Harits" ?? "Nama belakang tidak diketahui";
console.log(lastName); // Harits
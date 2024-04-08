// null coalescing operator adalah operator yang digunakan untuk memberi nilai default ketika ekspresi yang dinilai menghasilkan null atau undefined
// untuk penggunaanya kita bisa menggunakan double tanda tanya ( ?? )

/* <===============================================================================> */
/* <===============================================================================> */

// jika ekspresinya null
let firstName = null ?? "Nama depan tidak diketahui";
console.log(firstName);


// jika ekspresinya undefined
let middleName = undefined ?? "Nama tengah tidak diketahui";
console.log(middleName);


// jika ekspresinya ada
let lastName = "Doe" ?? "Nama belakang tidak diketahui";
console.log(lastName);
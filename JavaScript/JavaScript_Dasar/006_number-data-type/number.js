// tipe data number adalah tipe data yang berisi angka atau bilangan
// di JavaScript bilangan bulat dan bilangan desimal (pecahan) itu disatukan
// tidak seperti bahasa pemrograman PHP yang dipisah integer (bulat) dan float (pecahan)

/* <===============================================================================> */
/* <===============================================================================> */

// untuk membuat data number bisa dengan object atau secara primitive

// dengan object
let angka = new Number(12);
console.log(angka);


// secara primitive

// bilangan bulat
1234;
let deretBilanganBulat = 1234567890;
console.log(deretBilanganBulat); // 1234567890

// bilangan desimal
// untuk membuat bilangan desimal gunakan titik bukan koma
1.234;
let deretBilanganDesimal = 1.23456789;
console.log(deretBilanganDesimal); // 1.234567890

/* <===============================================================================> */

// perlu di ingat
let number = 12345; // ini dianggap number
let string = "12345"; // ini dianggap string

console.log(number); // output berupa number
console.log(string); // output berupa string

/* <===============================================================================> */

// operator underscore ( _ )
// operator underscore digunakan untuk menghindari kebingungan jika membuat bilangan number terlalu panjang
// operator underscore tidak akan dibaca oleh JavaScript atau di ignore (abaikan)
// contoh penggunaannya

console.log(1_000_000); // 1000000

/* <===============================================================================> */

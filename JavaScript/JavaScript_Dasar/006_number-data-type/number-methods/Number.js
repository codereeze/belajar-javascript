// Number digunakan untuk mengkoversi string ke number
// Number tidak akan mentolerir kesalahan pada penulisan angka
// jika data yang diterima berupa string dia akan mengembalikan NaN (Not a Number)

/* <===============================================================================> */
/* <===============================================================================> */


// konversi string ke number
console.log(Number("100")); // 100


// tidak mentolerir kesalahan
console.log(Number("100hahah")); // NaN
console.log(Number("acumalaka100")); //NaN
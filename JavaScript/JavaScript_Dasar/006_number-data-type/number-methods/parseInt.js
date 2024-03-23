// parseInt adalah method yang digunakan untuk mengkonversi string menjadi number bilangan bulat
// parseInt dapat mentolerir kesalahan penulisan pada number

/* <===============================================================================> */
/* <===============================================================================> */


// konversi ke bilangan bulat
console.log(parseInt("100")); // 100
console.log(parseInt("200.100")); // 200


// mentolerir kesalahan penulisan
console.log(parseInt("96apabila")); // 96


// jika angka berada di belakang, mengembalikan NaN
console.log(parseInt("apabila80")); // NaN
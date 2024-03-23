// method parseInt digunakan untuk mengkonversi string menjadi number bilangan pecahan
// parseInt dapat mentolerir kesalahan penulisan pada number

/* <===============================================================================> */
/* <===============================================================================> */


// konversi string ke number pecahan
console.log(parseFloat("30.5")); // 30.5


// mentolerir kesalahan
console.log(parseFloat("3.14PI")); // 3.14


// jika angka berada dibelakang maka akan mengembalikan NaN 
console.log(parseFloat("PI3.14")); // NaN

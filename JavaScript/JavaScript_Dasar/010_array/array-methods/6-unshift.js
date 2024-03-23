// method unshift digunakan untuk menambahkan satu atau lebih elemen ke awal array, dan mengembalikan panjang baru dari array tersebut setelah penambahan elemen-elemen tersebut
// method ini menambahkan data di awal array

/* <===============================================================================> */
/* <===============================================================================> */

let namaBuah = ["pisang", "apple", "semangka"];
let newLength = namaBuah.unshift("jambu", "salak");

console.log(newLength); // 5 
console.log(namaBuah); // [ 'jambu', 'salak', 'pisang', 'apple', 'semangka' ]


/* <===============================================================================> */
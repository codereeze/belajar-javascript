// method search adalah method yang digunakan untuk mencari teks tertentu menggunakan regex (regular expression) 
// Metode ini akan mengembalikan indeks pertama dari pencocokan yang ditemukan dalam string, atau -1 jika tidak ada pencocokan yang ditemukan.

/* <===============================================================================> */
/* <===============================================================================> */

let text = "Ini adalah contoh teks dengan kata kunci";
let result = text.search(/kata kunci/g);
console.log(result); // 30

let text2 = "Ini adalah contoh teks tanpa kata kunci";
let result2 = text2.search(/none/g)
console.log(result2); // -1


/* <===============================================================================> */

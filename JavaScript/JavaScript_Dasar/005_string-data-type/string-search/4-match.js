// method match adalah method yang digunakan untuk mencocokan teks dalam sebuah string dengan menggunakan regular expression
// akan mengembalikan null jika data tidak temukan


/* <===============================================================================> */
/* <===============================================================================> */


let text = "Budi membeli garam di warung";
let result = text.match(/garam/g)
console.log(result); // mengembalikan array

let result2 = text.match(/uang/g);
console.log(result2); // null

/* <===============================================================================> */
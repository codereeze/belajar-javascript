// method lastIndexOf funsinya sama seperti indexOf, namun ini digunakan untuk mencari indeks terakhir dari sebuah string
// jika data tidak ditemukan maka akan mengembalikan angka -1



/* <===============================================================================> */
/* <===============================================================================> */

const text = 'Ini adalah contoh teks contoh';
const lastIndexOfContoh = text.lastIndexOf('contoh'); 
console.log(lastIndexOfContoh); // akan mengembalikan 23 (indeks dari kemunculan terakhir 'contoh')

const lastIndexOfAngka = text.lastIndexOf('angka'); 
console.log(lastIndexOfAngka); // akan mengembalikan -1 karena tidak ditemukan

/* <===============================================================================> */
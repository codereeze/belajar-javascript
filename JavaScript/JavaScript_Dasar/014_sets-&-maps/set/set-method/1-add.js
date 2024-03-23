// method add digunakan untuk menambahkan nilai kedalam set
// jika data set sudah ada method ini tidak akan melakukan apa-apa

/* <===============================================================================> */
/* <===============================================================================> */

let nameRandom = new Set();
nameRandom.add("Hardin");
nameRandom.add("Faiz");
nameRandom.add("Norman");
nameRandom.add("Norman"); // diabaikan


let setToArray = Array.from(nameRandom);
console.log(setToArray); // [ 'Hardin', 'Faiz', 'Norman' ] (method add ini tidak melakukan penambahan nilai, karena nilai Norman sudah ada sebelumnya)

/* <===============================================================================> */

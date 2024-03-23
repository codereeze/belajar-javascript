// method delete digunakan untuk menghapus nilai dari set
// jika data yang akan dihapus tidak ada, maka method ini tidak akan melakukan apa pun

/* <===============================================================================> */
/* <===============================================================================> */

let animals = new Set(["kucing", "ular", "buaya"]);
let deleteAnimal = animals.delete("buaya");

console.log(deleteAnimal); // true (nilai berhasil dihapus akan mengembalikan nilai true);
console.log(Array.from(animals)); // [ 'kucing', 'ular' ]


/* <===============================================================================> */
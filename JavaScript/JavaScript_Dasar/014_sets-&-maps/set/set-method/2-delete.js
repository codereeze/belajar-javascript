// method delete digunakan untuk menghapus nilai dari set
// jika data yang akan dihapus tidak ada, maka method ini tidak akan melakukan apa pun

/* <===============================================================================> */
/* <===============================================================================> */

let animals = new Set(["kucing", "ular", "buaya"]);
let deleteAnimal = animals.delete("buaya");

console.log(deleteAnimal); 
console.log(Array.from(animals)); 


/* <===============================================================================> */